# Calage mot à mot de chaque phrase de la voix off, sans transcription :
# 1. les pauses réelles du fichier (ffmpeg silencedetect) ;
# 2. le texte coupé à la ponctuation en groupes de mots ;
# 3. une programmation dynamique choisit quelles pauses tombent sur quelle ponctuation, en gardant
#    un débit (secondes par syllabe) aussi régulier que possible d'un groupe à l'autre ; une pause
#    sans ponctuation se place à la frontière de mots qui respecte le mieux ce débit ;
# 4. les syllabes sont réparties entre ces repères.
# Réécrit les mots de audio_meta.json (lu par tools/build.mjs).
# usage : python3 -I tools/align.py [--min-pause 0.15] [L01,L02…]
import json, math, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
meta_path = os.path.join(ROOT, "audio_meta.json")
meta = json.load(open(meta_path, encoding="utf-8"))
cfg = json.load(open(os.path.join(ROOT, "tools/lines.json"), encoding="utf-8"))
args = sys.argv[1:]
# --min-pause S : ignore les silences plus courts (la fermeture d'une consonne, comme le « t » de FESTAC)
MIN_PAUSE = 0.0
if "--min-pause" in args:
    i = args.index("--min-pause")
    MIN_PAUSE = float(args[i + 1])
    del args[i : i + 2]
ONLY = args[0].split(",") if args else None

# sigles dits comme des mots ; nombres écrits en chiffres
WORD_SYL = {"festac": 2, "cipres": 2, "knam-gs": 3, "1959": 7, "1": 2, "118": 3, "1118": 5, "13": 2, "80": 3, "90": 4, "2026": 5, "8": 1, "g-a": 2, "arobase": 3, "lafeg": 2}
PUNCT = re.compile(r"[«»\"“”(),.;:!?]")


def syllables(word):
    key = PUNCT.sub("", word.lower())
    if key in WORD_SYL:
        return WORD_SYL[key]
    if not key:
        return 0
    if re.fullmatch(r"[A-Z]{2,}[,.;:!?]*", word):
        return len(re.sub(r"[^A-Z]", "", word))
    if re.fullmatch(r"\d+", key):
        return max(2, len(key))
    # « -e » muet en fin de mot et de chaque partie d'un mot composé
    parts = [re.sub(r"(?<=[^aeiouy])es?$", "", p) or p for p in key.split("-")]
    return sum(max(1, len(re.findall(r"[aeiouyàâäéèêëîïôöùûüœæ]+", p))) for p in parts)


def tokens(text):
    out = []
    for w in text.split():
        if out and re.fullmatch(r"[:;?!»]+", w):
            out[-1] += " " + w
        else:
            out.append(w)
    return out


def silences(path):
    r = subprocess.run(["ffmpeg", "-hide_banner", "-i", path, "-af", "silencedetect=noise=-36dB:d=0.11", "-f", "null", "-"], capture_output=True, text=True).stderr
    res, s = [], None
    for line in r.splitlines():
        m = re.search(r"silence_start: ([0-9.]+)", line)
        if m:
            s = float(m.group(1))
        m = re.search(r"silence_end: ([0-9.]+)", line)
        if m and s is not None:
            res.append((s, float(m.group(1))))
            s = None
    if s is not None:
        res.append((s, 1e9))
    return res


def duration(path):
    return float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", path], capture_output=True, text=True).stdout)


report = []
for v, L in zip(meta["voices"], cfg["lines"]):
    if ONLY and v["id"] not in ONLY:
        continue
    path = os.path.join(ROOT, v["path"])
    dur = duration(path)
    sil = silences(path)
    s0 = sil[0][1] if sil and sil[0][0] <= 0.02 else 0.0
    s1 = sil[-1][0] if sil and sil[-1][1] >= dur - 0.02 else dur
    pauses = []
    for p in sil:
        if not (p[0] > s0 + 0.05 and p[1] < s1 - 0.05) or p[1] - p[0] < MIN_PAUSE:
            continue
        # deux pauses séparées par moins de 0,1 s de son : une seule pause
        if pauses and p[0] - pauses[-1][1] < 0.1:
            pauses[-1] = (pauses[-1][0], p[1])
        else:
            pauses.append(p)
    P = len(pauses)
    toks = tokens(L["text"])
    syl = [max(syllables(t), 0.3) for t in toks]
    n = len(toks)
    # groupes de mots délimités par la ponctuation
    groups, cur = [], []
    for k, t in enumerate(toks):
        cur.append(k)
        if re.search(r"[,.;:!?»]$", t) or k == n - 1:
            groups.append(cur)
            cur = []
    m = len(groups)
    gs = [sum(syl[k] for k in g) for g in groups]
    talk = (s1 - s0) - sum(b - a for a, b in pauses)
    rate = talk / sum(gs)
    # bornes : 0 = début de parole, j = pause j (1..P), P+1 = fin de parole
    edge_end = [s0] + [p[1] for p in pauses] + [None]  # où commence la parole après la borne
    edge_start = [None] + [p[0] for p in pauses] + [s1]  # où finit la parole avant la borne

    def span_cost(jA, jB, syl_count, merged):
        # parole entre la borne jA et la borne jB, pauses intermédiaires retirées
        D = edge_start[jB] - edge_end[jA] - sum(pauses[q][1] - pauses[q][0] for q in range(jA, jB - 1))
        if D <= 0.05:
            return 1e9
        E = syl_count * rate
        return math.log(D / E) ** 2 * (1 + 0.15 * syl_count ** 0.5) + 0.35 * (jB - jA - 1) + 0.6 * merged

    INF = 1e18
    dp = [[INF] * (P + 2) for _ in range(m + 1)]
    bk = [[None] * (P + 2) for _ in range(m + 1)]
    dp[0][0] = 0.0
    for i in range(1, m + 1):
        for jB in range(1, P + 2):
            if i < m and jB == P + 1:
                continue
            if i == m and jB != P + 1:
                continue
            for i0 in range(0, i):  # groupes i0+1..i réunis (ponctuation sans pause = pénalité)
                cnt = sum(gs[i0:i])
                for jA in range(0, jB):
                    if dp[i0][jA] >= INF:
                        continue
                    c = dp[i0][jA] + span_cost(jA, jB, cnt, i - i0 - 1)
                    if c < dp[i][jB]:
                        dp[i][jB], bk[i][jB] = c, (i0, jA)
    # remontée : pour chaque bloc de groupes, sa borne de début et de fin
    blocks, i, j = [], m, P + 1
    while i > 0:
        i0, jA = bk[i][j]
        blocks.append((i0, i, jA, j))
        i, j = i0, jA
    blocks.reverse()
    starts, ends = [0.0] * n, [0.0] * n
    used = 0
    for i0, i1, jA, jB in blocks:
        ks = [k for g in groups[i0:i1] for k in g]
        inner = list(range(jA, jB - 1))  # pauses sans ponctuation à l'intérieur du bloc
        used += 1 if jB <= P else 0
        a, b = edge_end[jA], edge_start[jB]
        # temps parlé cumulé (pauses retirées) → position de chaque pause intérieure
        cum = [0.0]
        for k in ks:
            cum.append(cum[-1] + syl[k])
        tot = cum[-1]
        talkB = (b - a) - sum(pauses[q][1] - pauses[q][0] for q in inner)
        cuts, last = [], 0
        acc = 0.0
        prev = a
        for q in inner:
            acc += pauses[q][0] - prev
            prev = pauses[q][1]
            frac = acc / talkB
            # frontière de mots la plus proche de cette fraction du débit
            best = min(range(max(last, 1), len(ks)), key=lambda x: abs(cum[x] / tot - frac), default=None)
            if best is not None and best not in [c[0] for c in cuts]:
                cuts.append((best, q))
                last = best + 1
        # segments de parole : [a → pause 1], [pause 1 → pause 2], … [→ b]
        segs, pos, t0 = [], 0, a
        for best, q in cuts:
            segs.append((pos, best, t0, pauses[q][0]))
            pos, t0 = best, pauses[q][1]
        segs.append((pos, len(ks), t0, b))
        for p0, p1, ta, tb in segs:
            sub = ks[p0:p1]
            st = sum(syl[k] for k in sub) or 1
            c = ta
            for k in sub:
                starts[k] = c
                c += (tb - ta) * syl[k] / st
                ends[k] = c
    v["words"] = [{"text": t, "start": round(s, 3), "end": round(e, 3)} for t, s, e in zip(toks, starts, ends)]
    v["align"] = "pauses+ponctuation (tools/align.py)"
    report.append(f"{v['id']}  {m} groupes · {P} pauses · {used} sur la ponctuation · coût {dp[m][P + 1]:.2f}")
json.dump(meta, open(meta_path, "w", encoding="utf-8"), indent=2, ensure_ascii=False)
print("\n".join(report))
