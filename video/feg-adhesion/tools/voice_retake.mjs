// Reprise d'une seule phrase (même voix), vérifiée par Gemini avant d'être gardée.
// Usage : NODE_USE_ENV_PROXY=1 node tools/voice_retake.mjs L08 "question de contrôle" [--voice Despina]
import { readFileSync, existsSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const [id, check] = process.argv.slice(2);
const vi = process.argv.indexOf("--voice");
const VOICE = vi > 0 ? process.argv[vi + 1] : "Despina";
const STYLE =
  "Voix féminine française, naturelle et engageante, comme une dirigeante qui s'adresse à des chefs d'entreprise qu'elle respecte : " +
  "chaleureuse, un sourire dans la voix, conviction tranquille. Rythme vivant et varié, respirations naturelles, intonation conversationnelle. " +
  "Articulation nette de chaque mot. Jamais monotone, jamais lue, jamais publicitaire.";
const L = JSON.parse(readFileSync(join(ROOT, "tools/lines.json"), "utf8")).lines.find((x) => x.id === id);
const { synthesizeGemini } = await import(join(ROOT, "../../.agents/skills/media-use/audio/scripts/lib/gemini-tts.mjs"));
const tmp = join(ROOT, `assets/voice/raw/${id}-take.wav`);
async function verify(file) {
  const mp3 = file.replace(/\.wav$/, ".mp3");
  spawnSync("ffmpeg", ["-v", "error", "-y", "-i", file, "-ac", "1", "-ar", "22050", "-b:a", "64k", mp3]);
  const parts = [
    { inline_data: { mime_type: "audio/mpeg", data: readFileSync(mp3).toString("base64") } },
    { text: `Texte attendu : « ${L.text} ». ${check} Réponds en JSON {"conforme": bool, "transcription": str, "detail": str}` },
  ];
  for (const m of ["gemini-3.5-flash-lite", "gemini-3.1-flash-lite", "gemini-flash-lite-latest"]) {
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ role: "user", parts }], generationConfig: { temperature: 0, responseMimeType: "application/json" } }),
    });
    if (!r.ok) continue;
    const j = await r.json();
    return JSON.parse(j.candidates[0].content.parts[0].text);
  }
  return null;
}
for (let take = 1; take <= 4; take++) {
  const model = take <= 2 ? "gemini-3.8-flash-tts" : "gemini-3.8-flash-lite-tts";
  const r = await synthesizeGemini({ text: L.text, voiceId: VOICE, model, style: STYLE, wavAbs: tmp }, { authenticate: () => ({ headers: {}, secret: undefined }) });
  if (!r.ok) {
    console.log(`prise ${take} (${model}) : échec — ${String(r.error).slice(0, 120)}`);
    await new Promise((res) => setTimeout(res, 20000));
    continue;
  }
  const v = await verify(tmp);
  console.log(`prise ${take} (${model}) :`, JSON.stringify(v));
  if (v && v.conforme) {
    copyFileSync(tmp, join(ROOT, `assets/voice/raw/${id}.wav`));
    console.log(`→ ${id} remplacée par la prise ${take}`);
    process.exit(0);
  }
}
console.log("aucune prise conforme");
process.exit(1);
