// Reprise d'une phrase lue mot pour mot (sans reformulation), contrôlée par une écoute neutre :
// on ne garde la prise que si le contrôle entend le mot attendu en tête de phrase.
// Usage : NODE_USE_ENV_PROXY=1 node tools/voice_exact.mjs L11 "bâtir" 3
import { readFileSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const [id, firstWord, maxTakes] = process.argv.slice(2);
const L = JSON.parse(readFileSync(join(ROOT, "tools/lines.json"), "utf8")).lines.find((x) => x.id === id);
const STYLE =
  "Voix féminine française, naturelle, claire et bienveillante, comme une conseillère qui guide un chef d'entreprise : posée, souriante, assurée. " +
  "Lis le texte EXACTEMENT tel qu'il est écrit, mot pour mot : ne reformule rien, ne conjugue aucun verbe autrement, garde l'infinitif « " + firstWord + " » en tête de phrase. " +
  "Ton de conclusion, assuré et chaleureux. Jamais monotone, jamais publicitaire.";
const { synthesizeGemini } = await import(join(ROOT, "../../.agents/skills/media-use/audio/scripts/lib/gemini-tts.mjs"));
const tmp = join(ROOT, `assets/voice/raw/${id}-take.wav`);
async function firstWordHeard(file) {
  const mp3 = file.replace(/\.wav$/, ".mp3");
  spawnSync("ffmpeg", ["-v", "error", "-y", "-i", file, "-ac", "1", "-ar", "22050", "-b:a", "64k", mp3]);
  const parts = [
    { inline_data: { mime_type: "audio/mpeg", data: readFileSync(mp3).toString("base64") } },
    { text: "Transcris mot pour mot, sans rien corriger, ce que dit la voix. Puis écris le tout premier mot tel qu'il est prononcé et son nombre de syllabes. JSON {\"transcription\": str, \"premier_mot\": str, \"syllabes\": int}" },
  ];
  for (let a = 0; a < 4; a++) {
    for (const m of ["gemini-3.5-flash", "gemini-3.7-flash"]) {
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ role: "user", parts }], generationConfig: { temperature: 0, responseMimeType: "application/json" } }),
      });
      if (r.ok) return JSON.parse((await r.json()).candidates[0].content.parts[0].text);
    }
    await new Promise((res) => setTimeout(res, 15000));
  }
  return null;
}
for (let take = 1; take <= Number(maxTakes || 3); take++) {
  const model = take <= 2 ? "gemini-3.8-flash-tts" : "gemini-3.8-flash-lite-tts";
  const r = await synthesizeGemini({ text: L.text, voiceId: "Despina", model, style: STYLE, wavAbs: tmp }, { authenticate: () => ({ headers: {}, secret: undefined }) });
  if (!r.ok) {
    console.log(`prise ${take} : échec — ${String(r.error).slice(0, 120)}`);
    continue;
  }
  const v = await firstWordHeard(tmp);
  console.log(`prise ${take} (${model}) :`, JSON.stringify(v));
  const w = v && String(v.premier_mot || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const want = firstWord.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  if (w && w.replace(/[^a-z]/g, "") === want.replace(/[^a-z]/g, "")) {
    copyFileSync(tmp, join(ROOT, `assets/voice/raw/${id}.wav`));
    console.log(`→ ${id} remplacée par la prise ${take}`);
    process.exit(0);
  }
}
console.log("aucune prise conforme");
process.exit(1);
