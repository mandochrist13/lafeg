// Régénère une seule phrase de la voix off (même voix, même consigne que tools/voice_onepass.mjs),
// puis la cale comme resplit.py : silences de bord réduits à 0,12 s / 0,18 s, fondus, −16 LUFS, 48 kHz mono.
// Ensuite : node tools/voice.mjs --voice Kore --align-only, python3 -I tools/align.py, node tools/build.mjs
//
// Usage : NODE_USE_ENV_PROXY=1 node tools/voice_line.mjs L04 [--voice Kore] [--model gemini-3.8-flash-tts]
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
const ID = args[0];
const VOICE = opt("voice", "Kore");
const MODEL = opt("model", "gemini-3.8-flash-tts");
// même consigne que voice_onepass.mjs, pour que la phrase se fonde dans la prise d'origine
import { STYLE } from "./voice_style.mjs";
const L = JSON.parse(readFileSync(join(ROOT, "tools/lines.json"), "utf8")).lines.find((x) => x.id === ID);
if (!L) throw new Error(`phrase inconnue : ${ID}`);

const rawDir = join(ROOT, "assets/voice/raw");
mkdirSync(rawDir, { recursive: true });
const raw = join(rawDir, `${ID}-${VOICE}-seule.wav`);
const { synthesizeGemini } = await import(join(ROOT, "../../.agents/skills/media-use/audio/scripts/lib/gemini-tts.mjs"));
let r;
for (let a = 0; a < 6; a++) {
  r = await synthesizeGemini(
    { text: L.text, voiceId: VOICE, model: MODEL, style: STYLE, wavAbs: raw },
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
const dur = parseFloat(run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", raw]).stdout);
const sd = run(["ffmpeg", "-hide_banner", "-i", raw, "-af", "silencedetect=noise=-38dB:d=0.12", "-f", "null", "-"]).stderr;
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
const start = sil.length && sil[0][0] < 0.05 ? sil[0][1] : 0;
const end = sil.length && sil[sil.length - 1][1] >= dur - 0.05 ? sil[sil.length - 1][0] : dur;
const a = Math.max(0, start - 0.12),
  b = Math.min(dur, end + 0.18);
const cut = join(rawDir, `${ID}.wav`);
run(["ffmpeg", "-v", "error", "-y", "-i", raw, "-ss", a.toFixed(3), "-to", b.toFixed(3), "-af", "afade=t=in:d=0.02,areverse,afade=t=in:d=0.04,areverse", cut]);
const m1 = run(["ffmpeg", "-hide_banner", "-nostats", "-i", cut, "-af", "loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json", "-f", "null", "-"]).stderr;
const j = JSON.parse(m1.slice(m1.lastIndexOf("{"), m1.lastIndexOf("}") + 1));
const af =
  `loudnorm=I=-16:TP=-1.5:LRA=11:measured_I=${j.input_i}:measured_TP=${j.input_tp}:measured_LRA=${j.input_lra}` +
  `:measured_thresh=${j.input_thresh}:offset=${j.target_offset}:linear=true,aresample=48000`;
run(["ffmpeg", "-v", "error", "-y", "-i", cut, "-af", af, "-ar", "48000", "-ac", "1", join(ROOT, `assets/voice/${ID}.wav`)]);
console.log(`${ID} : prise ${dur.toFixed(2)} s, parole ${start.toFixed(2)}–${end.toFixed(2)} s, fichier ${(b - a).toFixed(2)} s`);
