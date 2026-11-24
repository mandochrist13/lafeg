// Phrases relues à la suite d'une phrase existante, en une seule requête (même voix, même consigne que
// voice_onepass.mjs, dans voice_style.mjs), pour qu'elles gardent le ton du film ; seule la phrase de contexte est jetée.
// La prise est coupée aux pauses qui donnent à chaque phrase un débit régulier (secondes par mot).
// Écrit assets/voice/raw/<id>.wav pour chaque phrase ; ensuite : node tools/voice_finish.mjs <ids…>
// --split-only : redécoupe la dernière prise sans la régénérer. --extra "…" : précision de diction ajoutée à la consigne.
//
// Usage : NODE_USE_ENV_PROXY=1 node tools/voice_suite.mjs --context L03 L04 L05 L06 [--voice Charon] [--model gemini-3.8-flash-tts]
import { readFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const opt = (n, d) => {
  const i = args.indexOf("--" + n);
  return i >= 0 ? args[i + 1] : d;
};
const CTX = opt("context", null);
const VOICE = opt("voice", "Charon");
const MODEL = opt("model", "gemini-3.8-flash-tts");
const skip = new Set();
["context", "voice", "model", "extra"].forEach((n) => {
  const i = args.indexOf("--" + n);
  if (i >= 0) {
    skip.add(i);
    skip.add(i + 1);
  }
});
const IDS = args.filter((a, i) => !skip.has(i) && a !== "--split-only");
// même consigne que la prise d'origine du film ; --extra : une précision de diction pour cette prise (une année, un sigle)
import { STYLE as BASE_STYLE } from "./voice_style.mjs";
const EXTRA = opt("extra", "");
const STYLE = EXTRA ? `${BASE_STYLE} ${EXTRA}` : BASE_STYLE;

const lines = JSON.parse(readFileSync(join(ROOT, "tools/lines.json"), "utf8")).lines;
const get = (id) => {
  const L = lines.find((x) => x.id === id);
  if (!L) throw new Error(`phrase inconnue : ${id}`);
  return L;
};
const seq = (CTX ? [CTX] : []).concat(IDS).map(get);
const rawDir = join(ROOT, "assets/voice/raw");
mkdirSync(rawDir, { recursive: true });
const full = join(rawDir, `suite-${IDS.join("-")}-${VOICE}.wav`);
const SPLIT_ONLY = process.argv.includes("--split-only");
const { synthesizeGemini } = await import(join(ROOT, "../../.agents/skills/media-use/audio/scripts/lib/gemini-tts.mjs"));
let r = { ok: true };
for (let a = 0; a < 6 && !SPLIT_ONLY; a++) {
  r = await synthesizeGemini(
    { text: seq.map((L) => L.text).join("\n\n"), voiceId: VOICE, model: MODEL, style: STYLE, wavAbs: full },
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
const run = (a) => spawnSync(a[0], a.slice(1), { encoding: "utf8" });
const dur = parseFloat(run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", full]).stdout);
const sd = run(["ffmpeg", "-hide_banner", "-i", full, "-af", "silencedetect=noise=-38dB:d=0.16", "-f", "null", "-"]).stderr;
const sil = [];
let s0 = null;
for (const l of sd.split("\n")) {
  const a = /silence_start: ([0-9.]+)/.exec(l);
  const b = /silence_end: ([0-9.]+)/.exec(l);
  if (a) s0 = parseFloat(a[1]);
  if (b && s0 !== null) {
    sil.push([s0, parseFloat(b[1])]);
    s0 = null;
  }
}
if (s0 !== null) sil.push([s0, dur]);
const inner = sil.filter((s) => s[0] > 0.05 && s[1] < dur - 0.05);
const nb = seq.length - 1;
if (inner.length < nb) {
  console.error(`seulement ${inner.length} silences pour ${nb} frontières`);
  process.exit(1);
}
// frontières : parmi les silences d'au moins 0,35 s, la combinaison qui donne à chaque phrase un débit
// (secondes par mot) aussi régulier que possible, en préférant les longues pauses (paragraphes)
const nWords = seq.map((L) => L.text.split(/\s+/).length);
const cand = inner.filter((s) => s[1] - s[0] >= 0.35);
if (cand.length < nb) {
  console.error(`seulement ${cand.length} pauses d'au moins 0,35 s pour ${nb} frontières`);
  process.exit(1);
}
let best = null;
(function pick(start, chosen) {
  if (chosen.length === nb) {
    const edges = [0].concat(chosen.map((c) => (c[0] + c[1]) / 2), [dur]);
    const rates = seq.map((L, k) => (edges[k + 1] - edges[k]) / nWords[k]);
    const med = rates.slice().sort((a, b) => a - b)[Math.floor(rates.length / 2)];
    const score = rates.reduce((a, r) => a + Math.pow(Math.log(r / med), 2), 0) - 0.4 * chosen.reduce((a, c) => a + (c[1] - c[0]), 0);
    if (!best || score < best.score) best = { score, chosen: chosen.slice() };
    return;
  }
  for (let i = start; i < cand.length; i++) {
    chosen.push(cand[i]);
    pick(i + 1, chosen);
    chosen.pop();
  }
})(0, []);
const cuts = best.chosen;
const bounds = [];
for (let k = 0; k < seq.length; k++) {
  const a = k === 0 ? 0 : Math.max(cuts[k - 1][1] - 0.12, (cuts[k - 1][0] + cuts[k - 1][1]) / 2);
  const b = k === seq.length - 1 ? dur : Math.min(cuts[k][0] + 0.18, (cuts[k][0] + cuts[k][1]) / 2);
  bounds.push([a, b]);
}
// contrôle : la durée de chaque morceau suit à peu près le nombre de mots
const words = seq.map((L) => L.text.split(/\s+/).length);
const rate = seq.map((L, k) => (bounds[k][1] - bounds[k][0]) / words[k]);
console.log(`prise ${dur.toFixed(2)} s ; pauses retenues : ${cuts.map((c) => `${c[0].toFixed(2)}–${c[1].toFixed(2)}`).join(", ")}`);
seq.forEach((L, k) => console.log(`  ${L.id} ${bounds[k][0].toFixed(2)}–${bounds[k][1].toFixed(2)} s · ${words[k]} mots · ${rate[k].toFixed(3)} s/mot${CTX && k === 0 ? " (contexte, jeté)" : ""}`));
const med = rate.slice().sort((a, b) => a - b)[Math.floor(rate.length / 2)];
if (rate.some((x) => x < med * 0.55 || x > med * 1.8)) {
  console.error("découpage douteux : une phrase a une durée sans rapport avec son nombre de mots");
  process.exit(2);
}
seq.forEach((L, k) => {
  if (CTX && k === 0) return;
  run(["ffmpeg", "-v", "error", "-y", "-i", full, "-ss", bounds[k][0].toFixed(3), "-to", bounds[k][1].toFixed(3), join(rawDir, `${L.id}.wav`)]);
});
console.log("écrit :", IDS.map((id) => `assets/voice/raw/${id}.wav`).join(", "));
