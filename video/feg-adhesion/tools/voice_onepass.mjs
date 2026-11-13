// Narration d'un seul tenant (une requête Gemini TTS = prosodie continue, une seule unité de quota),
// puis découpage en phrases L01…L10 aux pauses réelles, normalisation à −16 LUFS.
// Ensuite : node tools/voice.mjs --align-only   (calage mot à mot) et node tools/build.mjs
//
// Usage : NODE_USE_ENV_PROXY=1 node tools/voice_onepass.mjs [--voice Despina] [--model gemini-3.8-flash-tts] [--split-only]
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const opt = (n, d) => {
  const i = args.indexOf("--" + n);
  return i >= 0 ? args[i + 1] : d;
};
const VOICE = opt("voice", "Despina");
const MODEL = opt("model", "gemini-3.8-flash-tts");
const SPLIT_ONLY = args.includes("--split-only");
const STYLE =
  "Voix féminine française, naturelle, claire et bienveillante, comme une conseillère qui guide un chef d'entreprise pas à pas : " +
  "posée, souriante, assurée, jamais lue. Rythme vivant et varié, respirations naturelles, intonation conversationnelle. " +
  "Prononce les sigles lettre par lettre (C N S S, C N A M G S). " +
  "Marque une vraie pause, d'environ une seconde, entre chaque paragraphe. Jamais monotone, jamais publicitaire.";

const cfg = JSON.parse(readFileSync(join(ROOT, "tools/lines.json"), "utf8"));
const lines = cfg.lines;
const rawDir = join(ROOT, "assets/voice/raw");
mkdirSync(rawDir, { recursive: true });
const full = join(rawDir, `full-${VOICE}.wav`);

if (!SPLIT_ONLY) {
  const { synthesizeGemini } = await import(join(ROOT, "../../.agents/skills/media-use/audio/scripts/lib/gemini-tts.mjs"));
  const text = lines.map((L) => L.text).join("\n\n");
  let r;
  for (let a = 0; a < 6; a++) {
    r = await synthesizeGemini(
      { text, voiceId: VOICE, model: MODEL, style: STYLE, wavAbs: full },
      process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY ? {} : { authenticate: () => ({ headers: {}, secret: undefined }) },
    );
    if (r.ok) break;
    const m = /retry in ([0-9.]+)s/.exec(r.error || "");
    const wait = m ? Math.min(90, Math.ceil(parseFloat(m[1]) + 2)) : 30;
    console.log(`essai ${a + 1} : ${String(r.error).slice(0, 140)} — nouvel essai dans ${wait} s`);
    await new Promise((res) => setTimeout(res, wait * 1000));
  }
  if (!r.ok) {
    console.error("échec :", r.error);
    process.exit(1);
  }
}

const probe = (f) =>
  parseFloat(spawnSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f], { encoding: "utf8" }).stdout);
const dur = probe(full);
const sd = spawnSync("ffmpeg", ["-hide_banner", "-i", full, "-af", "silencedetect=noise=-38dB:d=0.16", "-f", "null", "-"], { encoding: "utf8" }).stderr;
const sil = [];
let s0 = null;
for (const l of sd.split("\n")) {
  const a = /silence_start: ([0-9.]+)/.exec(l);
  const b = /silence_end: ([0-9.]+)/.exec(l);
  if (a) s0 = parseFloat(a[1]);
  if (b && s0 !== null) {
    sil.push({ a: s0, b: parseFloat(b[1]) });
    s0 = null;
  }
}
// estimation de la position de chaque frontière (syllabes + pauses de ponctuation)
const syl = (w) => {
  const raw = w.replace(/[«»"(),.;:!?]/g, "");
  if (/^[A-Z]{2,}$/.test(raw)) return raw.length;
  const x = raw.toLowerCase();
  if (/^\d+$/.test(x)) return { "1959": 7, "1": 2, "118": 3, "13": 2, "80": 3, "90": 4, "2026": 5 }[x] ?? x.length;
  if (x === "%") return 2;
  if (x === "pib" || x === "pme") return 3;
  const g = x.replace(/e$/, "").match(/[aeiouyàâäéèêëîïôöùûüœæ]+/g);
  return Math.max(1, g ? g.length : 1);
};
const weight = lines.map((L) => L.text.split(/\s+/).reduce((s, w) => s + syl(w) + (/[,;:]$/.test(w) ? 1.2 : /[.]$/.test(w) ? 1.6 : 0), 0));
const speechStart = sil.length && sil[0].a < 0.05 ? sil[0].b : 0;
const lastSil = sil[sil.length - 1];
const speechEnd = lastSil && lastSil.b >= dur - 0.05 ? lastSil.a : dur;
const gapGuess = 0.8;
const totalW = weight.reduce((a, b) => a + b, 0);
const per = (speechEnd - speechStart - gapGuess * (lines.length - 1)) / totalW;
const expected = [];
let acc = speechStart;
for (let k = 0; k < lines.length - 1; k++) {
  acc += weight[k] * per;
  expected.push(acc + gapGuess / 2);
  acc += gapGuess;
}
// appariement : pour chaque frontière, la pause la plus longue près de l'attendu (fenêtre ±2,2 s), dans l'ordre
const inner = sil.filter((p) => p.a > speechStart + 0.2 && p.b < speechEnd - 0.2);
const cuts = [];
let from = 0;
for (let k = 0; k < expected.length; k++) {
  let best = null;
  for (let j = from; j < inner.length; j++) {
    const p = inner[j];
    const mid = (p.a + p.b) / 2;
    const d = Math.abs(mid - expected[k]);
    if (d > 2.2) continue;
    const score = (p.b - p.a) * 2 - d * 0.6;
    if (!best || score > best.score) best = { j, p, score };
  }
  if (!best) {
    console.error(`frontière ${k + 1} introuvable près de ${expected[k].toFixed(2)} s`);
    process.exit(1);
  }
  cuts.push(best.p);
  from = best.j + 1;
}
// découpe : on garde 0,12 s avant et 0,18 s après la parole
const bounds = [];
for (let k = 0; k < lines.length; k++) {
  const a = k === 0 ? Math.max(0, speechStart - 0.12) : Math.max(cuts[k - 1].b - 0.12, (cuts[k - 1].a + cuts[k - 1].b) / 2);
  const b = k === lines.length - 1 ? Math.min(dur, speechEnd + 0.18) : Math.min(cuts[k].a + 0.18, (cuts[k].a + cuts[k].b) / 2);
  bounds.push([a, b]);
}
const report = [];
lines.forEach((L, k) => {
  const [a, b] = bounds[k];
  const raw = join(rawDir, `${L.id}.wav`);
  spawnSync("ffmpeg", ["-v", "error", "-y", "-i", full, "-ss", a.toFixed(3), "-to", b.toFixed(3), "-af", "afade=t=in:d=0.02,areverse,afade=t=in:d=0.04,areverse", raw]);
  // normalisation −16 LUFS / −1,5 dBTP (deux passes, linéaire)
  const m = spawnSync("ffmpeg", ["-hide_banner", "-nostats", "-i", raw, "-af", "loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json", "-f", "null", "-"], { encoding: "utf8" }).stderr;
  const j = JSON.parse(m.slice(m.lastIndexOf("{"), m.lastIndexOf("}") + 1));
  const out = join(ROOT, `assets/voice/${L.id}.wav`);
  spawnSync("ffmpeg", [
    "-v", "error", "-y", "-i", raw,
    "-af", `loudnorm=I=-16:TP=-1.5:LRA=11:measured_I=${j.input_i}:measured_TP=${j.input_tp}:measured_LRA=${j.input_lra}:measured_thresh=${j.input_thresh}:offset=${j.target_offset}:linear=true,aresample=48000`,
    "-ar", "48000", "-ac", "1", out,
  ]);
  report.push(`${L.id}  ${a.toFixed(2)}–${b.toFixed(2)} s  (${(b - a).toFixed(2)} s, attendu ≈ ${(weight[k] * per).toFixed(2)} s)`);
});
console.log(`narration ${dur.toFixed(2)} s, ${sil.length} pauses détectées`);
console.log(report.join("\n"));
writeFileSync(join(rawDir, `split-${VOICE}.json`), JSON.stringify({ voice: VOICE, model: MODEL, bounds }, null, 2));
// mémorise voix et modèle pour voice.mjs --align-only
const metaPath = join(ROOT, "audio_meta.json");
const meta = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, "utf8")) : { voices: [] };
meta.voice_credit = `Voix : Google Gemini TTS (${VOICE}, ${MODEL})`;
meta.onepass = { voice: VOICE, model: MODEL };
writeFileSync(metaPath, JSON.stringify(meta, null, 2));
