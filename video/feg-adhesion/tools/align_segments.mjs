// Calage mot à mot imposé pour une phrase raccordée : mots placés à la main (« words ») et
// segments entre pauses réelles où les syllabes sont réparties (« segments »).
// Usage : node tools/align_segments.mjs tools/align/L06.json  → met à jour audio_meta.json
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const spec = JSON.parse(readFileSync(join(ROOT, process.argv[2]), "utf8"));
const OVERRIDE = { "knam-gs": 3, cnss: 4, cnamgs: 3, "étages": 2, "l'immeuble": 2 };
function syllables(word) {
  const w = word.toLowerCase().replace(/[«»"“”(),.;:!?]/g, "");
  if (OVERRIDE[w] !== undefined) return OVERRIDE[w];
  if (/^[A-Z]{2,}[,.;:!?]*$/.test(word)) return word.replace(/[^A-Z]/g, "").length;
  const groups = w.replace(/e$/, "").match(/[aeiouyàâäéèêëîïôöùûüœæ]+/g);
  return Math.max(1, groups ? groups.length : 1);
}
const r3 = (x) => Math.round(x * 1000) / 1000;
const words = spec.words.map(([text, start, end]) => ({ text, start, end }));
for (const [a, b, txt] of spec.segments) {
  const ws = txt.split(/\s+/).filter(Boolean);
  const syl = ws.map(syllables);
  const tot = syl.reduce((x, y) => x + y, 0);
  let t = a;
  ws.forEach((w, i) => {
    const d = ((b - a) * syl[i]) / tot;
    words.push({ text: w, start: r3(t), end: r3(t + d) });
    t += d;
  });
}
const metaPath = join(ROOT, "audio_meta.json");
const meta = JSON.parse(readFileSync(metaPath, "utf8"));
const v = meta.voices.find((x) => x.id === spec.id);
const expected = JSON.parse(readFileSync(join(ROOT, "tools/lines.json"), "utf8")).lines.find((x) => x.id === spec.id).text.split(/\s+/);
if (expected.join(" ") !== words.map((w) => w.text).join(" ")) {
  console.error("les mots ne correspondent pas au texte de tools/lines.json");
  process.exit(1);
}
v.words = words;
v.anchored = "manuel";
writeFileSync(metaPath, JSON.stringify(meta, null, 2));
console.log(words.map((w) => `${w.text}[${w.start.toFixed(2)}]`).join(" "));
