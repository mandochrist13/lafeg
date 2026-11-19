# Redécoupe la narration d'un seul tenant en phrases, aux pauses qui précèdent le premier mot de chaque phrase.
# Le premier mot est repéré dans la transcription Whisper (mots horodatés) ; la coupe est calée sur le silence réel.
# Écrit assets/voice/raw/Lnn.wav puis assets/voice/Lnn.wav (−16 LUFS, −1,5 dBTP, 48 kHz mono) et split-<voix>.json.
# usage : python3 -I tools/resplit.py <full.wav> <transcript.json> [voix]
import json, os, re, subprocess, sys, unicodedata
from difflib import SequenceMatcher

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
full, tr = sys.argv[1], sys.argv[2]
voice = sys.argv[3] if len(sys.argv) > 3 else "Sulafat"
lines = json.load(open(os.path.join(ROOT, "tools/lines.json"), encoding="utf-8"))["lines"]
d = json.load(open(tr, encoding="utf-8"))
words = d["words"] if isinstance(d, dict) and "words" in d else d


def norm(s):
    s = unicodedata.normalize("NFD", s.lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", "", s)


def run(args):
    return subprocess.run(args, capture_output=True, text=True)


dur = float(run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", full]).stdout)
sd = run(["ffmpeg", "-hide_banner", "-i", full, "-af", "silencedetect=noise=-38dB:d=0.12", "-f", "null", "-"]).stderr
sil, s0 = [], None
for l in sd.splitlines():
    m = re.search(r"silence_start: ([0-9.]+)", l)
    if m:
        s0 = float(m.group(1))
    m = re.search(r"silence_end: ([0-9.]+)", l)
    if m and s0 is not None:
        sil.append((s0, float(m.group(1))))
        s0 = None
if s0 is not None:
    sil.append((s0, dur))
speech_start = sil[0][1] if sil and sil[0][0] < 0.05 else 0.0
speech_end = sil[-1][0] if sil and sil[-1][1] >= dur - 0.05 else dur

wn = [norm(w["text"]) for w in words]
pos, starts = max(1, len(lines[0]["text"].split()) - 4), [None]
for k, L in enumerate(lines):
    if k == 0:
        continue
    toks = [t for t in (norm(x) for x in L["text"].split()) if t][:3]
    target = "".join(toks)
    found, best = None, 0.0
    for i in range(max(0, pos - 4), min(len(wn) - 2, pos + 16)):
        r = SequenceMatcher(None, target, "".join(wn[i : i + 4])[: len(target) + 1]).ratio()
        if r > best:
            found, best = i, r
    if best < 0.6:
        found = None
    if found is None:
        sys.exit(f"{L['id']} : début « {' '.join(L['text'].split()[:2])} » introuvable dans la transcription")
    starts.append(words[found]["start"])
    # la phrase suivante ne peut pas commencer avant la fin (approximative) de celle-ci
    pos = found + max(1, len(L["text"].split()) - 4)

cuts = []
for k in range(1, len(lines)):
    tw = starts[k]
    cand = [p for p in sil if tw - 1.4 <= p[1] <= tw + 0.4 and p[0] > speech_start + 0.2]
    if not cand:
        sys.exit(f"{lines[k]['id']} : aucun silence près de {tw:.2f} s")
    best = max(cand, key=lambda p: (p[1] - p[0]) - 0.15 * abs(p[1] - tw))
    cuts.append(best)

bounds = []
for k in range(len(lines)):
    a = max(0.0, speech_start - 0.12) if k == 0 else max(cuts[k - 1][1] - 0.12, (cuts[k - 1][0] + cuts[k - 1][1]) / 2)
    b = min(dur, speech_end + 0.18) if k == len(lines) - 1 else min(cuts[k][0] + 0.18, (cuts[k][0] + cuts[k][1]) / 2)
    bounds.append([round(a, 3), round(b, 3)])

rawdir = os.path.join(ROOT, "assets/voice/raw")
for (a, b), L in zip(bounds, lines):
    raw = os.path.join(rawdir, f"{L['id']}.wav")
    run(["ffmpeg", "-v", "error", "-y", "-i", full, "-ss", f"{a:.3f}", "-to", f"{b:.3f}", "-af", "afade=t=in:d=0.02,areverse,afade=t=in:d=0.04,areverse", raw])
    m = run(["ffmpeg", "-hide_banner", "-nostats", "-i", raw, "-af", "loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json", "-f", "null", "-"]).stderr
    j = json.loads(m[m.rindex("{") : m.rindex("}") + 1])
    out = os.path.join(ROOT, f"assets/voice/{L['id']}.wav")
    af = (f"loudnorm=I=-16:TP=-1.5:LRA=11:measured_I={j['input_i']}:measured_TP={j['input_tp']}:measured_LRA={j['input_lra']}"
          f":measured_thresh={j['input_thresh']}:offset={j['target_offset']}:linear=true,aresample=48000")
    run(["ffmpeg", "-v", "error", "-y", "-i", raw, "-af", af, "-ar", "48000", "-ac", "1", out])
    seg = " ".join(w["text"].strip() for w in words if a <= (w["start"] + w["end"]) / 2 - 0.25 < b)
    print(f"{L['id']}  {a:6.2f}–{b:6.2f} s ({b - a:5.2f} s)  {seg}")
json.dump({"voice": voice, "bounds": bounds, "method": "whisper+silences"}, open(os.path.join(rawdir, f"split-{voice}.json"), "w"), indent=2)
