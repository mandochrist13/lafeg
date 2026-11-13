// Finition d'une phrase reprise : recadre les silences (0,12 s avant, 0,18 s après la parole)
// et normalise à −16 LUFS / −1,5 dBTP. Lit assets/voice/raw/<id>.wav, écrit assets/voice/<id>.wav.
// Usage : node tools/voice_finish.mjs L02 L03 …
import { renameSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const run = (args) => spawnSync("ffmpeg", args, { encoding: "utf8" });
for (const id of process.argv.slice(2)) {
  const raw = join(ROOT, `assets/voice/raw/${id}.wav`);
  const dur = parseFloat(spawnSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", raw], { encoding: "utf8" }).stdout);
  const sd = run(["-hide_banner", "-i", raw, "-af", "silencedetect=noise=-38dB:d=0.16", "-f", "null", "-"]).stderr;
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
  let a = 0,
    b = dur;
  if (sil.length && sil[0][0] < 0.05) a = Math.max(0, sil[0][1] - 0.12);
  if (sil.length && sil[sil.length - 1][1] >= dur - 0.05) b = Math.min(dur, sil[sil.length - 1][0] + 0.18);
  const cut = raw.replace(/\.wav$/, "-cut.wav");
  run(["-v", "error", "-y", "-i", raw, "-ss", a.toFixed(3), "-to", b.toFixed(3), "-af", "afade=t=in:d=0.02,areverse,afade=t=in:d=0.04,areverse", cut]);
  renameSync(cut, raw);
  const m = run(["-hide_banner", "-nostats", "-i", raw, "-af", "loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json", "-f", "null", "-"]).stderr;
  const j = JSON.parse(m.slice(m.lastIndexOf("{"), m.lastIndexOf("}") + 1));
  run([
    "-v", "error", "-y", "-i", raw,
    "-af", `loudnorm=I=-16:TP=-1.5:LRA=11:measured_I=${j.input_i}:measured_TP=${j.input_tp}:measured_LRA=${j.input_lra}:measured_thresh=${j.input_thresh}:offset=${j.target_offset}:linear=true,aresample=48000`,
    "-ar", "48000", "-ac", "1", join(ROOT, `assets/voice/${id}.wav`),
  ]);
  console.log(`${id} : recadrée ${a.toFixed(2)}–${b.toFixed(2)} s, normalisée`);
}
