// Voix off : une phrase = un fichier (Gemini TTS, voix féminine), puis calage mot à mot.
// Le calage repère les pauses réelles (ffmpeg silencedetect), les apparie à la ponctuation,
// puis répartit les syllabes entre ces repères. Écrit audio_meta.json, lu par tools/build.mjs.
//
// Usage : node tools/voice.mjs [--voice Kore] [--model gemini-3.8-flash-tts] [--only L01,L02] [--align-only]
// La clé n'est jamais dans ce fichier : le proxy de la session l'injecte (en-tête x-goog-api-key).
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SKILL_LIB = join(ROOT, "../../.agents/skills/media-use/audio/scripts/lib/gemini-tts.mjs");
const args = process.argv.slice(2);
const opt = (name, def) => {
  const i = args.indexOf("--" + name);
  return i >= 0 ? args[i + 1] : def;
};
const VOICE = opt("voice", "Kore");
const MODEL = opt("model", "gemini-3.8-flash-tts");
const ONLY = opt("only", null)?.split(",");
const ALIGN_ONLY = args.includes("--align-only");
const STYLE =
  "Narratrice institutionnelle française, accent neutre et standard. Voix posée, assurée et chaleureuse, " +
  "jamais publicitaire. Débit mesuré, environ 150 mots par minute. Courte pause aux virgules, pause nette " +
  "après les deux-points et en fin de phrase. Chiffres prononcés clairement.";

const cfg = JSON.parse(readFileSync(join(ROOT, "tools/lines.json"), "utf8"));
const metaPath = join(ROOT, "audio_meta.json");
const meta = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, "utf8")) : { voices: [] };
const byId = Object.fromEntries((meta.voices || []).map((v) => [v.id, v]));

function probeDuration(file) {
  const r = spawnSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file], { encoding: "utf8" });
  return parseFloat(r.stdout.trim());
}
function silences(file) {
  const r = spawnSync("ffmpeg", ["-hide_banner", "-i", file, "-af", "silencedetect=noise=-36dB:d=0.11", "-f", "null", "-"], { encoding: "utf8" });
  const out = r.stderr;
  const res = [];
  let s = null;
  for (const line of out.split("\n")) {
    const a = /silence_start: ([0-9.]+)/.exec(line);
    const b = /silence_end: ([0-9.]+)/.exec(line);
    if (a) s = parseFloat(a[1]);
    if (b && s !== null) {
      res.push([s, parseFloat(b[1])]);
      s = null;
    }
  }
  if (s !== null) res.push([s, Infinity]);
  return res;
}

// Syllabes approximatives en français (chiffres développés à la main).
const NUM_SYL = { "1959": 7, "1": 2, "118": 3, "1118": 5, "13": 2, "80": 3, "90": 4, "%": 2, "2026": 5, "8": 1 };
function syllables(word) {
  const w = word.toLowerCase().replace(/[«»"“”(),.;:!?]/g, "");
  if (NUM_SYL[w] !== undefined) return NUM_SYL[w];
  if (/^\d+$/.test(w)) return Math.max(2, w.length);
  if (w === "pib" || w === "pme") return 3;
  const groups = w.replace(/e$/, "").match(/[aeiouyàâäéèêëîïôöùûüœæ]+/g);
  return Math.max(1, groups ? groups.length : 1);
}
const breakStrength = (word) => (/[.!?»]$/.test(word) ? 3 : /[:;]$/.test(word) ? 2.5 : /,$/.test(word) ? 2 : 0);

function align(text, file) {
  const dur = probeDuration(file);
  const sil = silences(file);
  // bornes de parole
  let s0 = 0,
    s1 = dur;
  if (sil.length && sil[0][0] <= 0.02) s0 = Math.min(dur, sil[0][1]);
  const last = sil[sil.length - 1];
  if (last && (last[1] === Infinity || last[1] >= dur - 0.02)) s1 = Math.max(s0, last[0]);
  const pauses = sil.filter(([a, b]) => a > s0 + 0.05 && b < s1 - 0.05).map(([a, b]) => ({ a, b, mid: (a + b) / 2 }));
  const words = text.split(/\s+/).filter(Boolean);
  // regroupe « 1 118 » et « 80 % » en un seul mot pour le calage
  const toks = [];
  for (const w of words) {
    const prev = toks[toks.length - 1];
    if (prev && ((/^\d+$/.test(prev.w) && /^\d{3}[,.:]?$/.test(w)) || w === "%" || w === "%," || w === "%.")) prev.w += " " + w;
    else toks.push({ w });
  }
  toks.forEach((t) => (t.syl = t.w.split(" ").reduce((a, x) => a + syllables(x), 0)));
  // estimation : syllabes + pauses de ponctuation
  const PAUSE = { 2: 0.28, 2.5: 0.4, 3: 0.5 };
  const units = toks.map((t) => t.syl);
  const gaps = toks.map((t) => PAUSE[breakStrength(t.w)] || 0);
  const totalSyl = units.reduce((a, b) => a + b, 0);
  const totalGap = gaps.slice(0, -1).reduce((a, b) => a + b, 0);
  const perSyl = Math.max(0.05, (s1 - s0 - totalGap) / totalSyl);
  let tt = s0;
  toks.forEach((t, i) => {
    t.s = tt;
    tt += t.syl * perSyl;
    t.e = tt;
    if (i < toks.length - 1) tt += gaps[i];
  });
  // ancrage : chaque ponctuation se cale sur la pause détectée la plus proche (< 0,7 s)
  const anchors = [{ i: -1, t: s0 }];
  const used = new Set();
  toks.forEach((t, i) => {
    if (i === toks.length - 1 || !breakStrength(t.w)) return;
    let best = null;
    pauses.forEach((p, k) => {
      if (used.has(k)) return;
      const d = Math.abs(p.mid - (t.e + gaps[i] / 2));
      if (d < 0.7 && (!best || d < best.d)) best = { k, d, p };
    });
    if (best) {
      used.add(best.k);
      anchors.push({ i, t: best.p.a, next: best.p.b });
    }
  });
  anchors.push({ i: toks.length - 1, t: s1 });
  // répartition des syllabes entre ancres
  for (let k = 0; k < anchors.length - 1; k++) {
    const A = anchors[k],
      B = anchors[k + 1];
    const from = A.i + 1,
      to = B.i;
    const start = A.next !== undefined ? A.next : A.t;
    const end = B.t;
    const seg = toks.slice(from, to + 1);
    const syl = seg.reduce((a, t) => a + t.syl, 0) || 1;
    let c = start;
    seg.forEach((t) => {
      t.s = c;
      c += ((end - start) * t.syl) / syl;
      t.e = c;
    });
  }
  return {
    duration_s: Math.round(dur * 1000) / 1000,
    speech: [Math.round(s0 * 1000) / 1000, Math.round(s1 * 1000) / 1000],
    pauses: pauses.length,
    anchored: anchors.length - 2,
    words: toks.map((t) => ({ text: t.w, start: Math.round(t.s * 1000) / 1000, end: Math.round(t.e * 1000) / 1000 })),
  };
}

const { synthesizeGemini } = await import(SKILL_LIB);
mkdirSync(join(ROOT, "assets/voice"), { recursive: true });
for (const L of cfg.lines) {
  if (ONLY && !ONLY.includes(L.id)) continue;
  const rel = `assets/voice/${L.id}.wav`;
  const abs = join(ROOT, rel);
  if (!ALIGN_ONLY) {
    const r = await synthesizeGemini(
      { text: L.text, voiceId: VOICE, model: MODEL, style: STYLE, wavAbs: abs },
      // clé en variable d'environnement si présente, sinon en-tête injecté par le proxy
      process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY ? {} : { authenticate: () => ({ headers: {}, secret: undefined }) },
    );
    if (!r.ok) {
      console.error(`${L.id}: échec — ${r.error}`);
      process.exitCode = 1;
      continue;
    }
  }
  if (!existsSync(abs)) {
    console.error(`${L.id}: fichier absent`);
    continue;
  }
  const a = align(L.text, abs);
  byId[L.id] = { id: L.id, path: rel, voice: VOICE, model: MODEL, ...a };
  console.log(`${L.id}  ${a.duration_s}s  parole ${a.speech[0]}–${a.speech[1]}  pauses ${a.pauses}  ancrées ${a.anchored}`);
}
meta.voices = cfg.lines.map((L) => byId[L.id]).filter(Boolean);
meta.tts_provider = "gemini";
meta.voice_credit = `Voix : Google Gemini TTS (${VOICE})`;
writeFileSync(metaPath, JSON.stringify(meta, null, 2));
console.log(`audio_meta.json : ${meta.voices.length} phrases`);
