// Plusieurs prises d'une même phrase (voix Despina), toutes gardées (raw/<id>-<tag><n>.wav), chacune
// transcrite par une écoute neutre (sans le texte attendu). On choisit ensuite la prise à garder.
// Usage : NODE_USE_ENV_PROXY=1 node tools/voice_takes.mjs L06b 2 [flash|lite]
import { readFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const [id, n, which] = process.argv.slice(2);
const L = JSON.parse(readFileSync(join(ROOT, "tools/lines.json"), "utf8")).lines.find((x) => x.id === id);
const STYLE =
  "Voix féminine française, naturelle et engageante, comme une dirigeante qui s'adresse à des chefs d'entreprise qu'elle respecte : " +
  "chaleureuse, un sourire dans la voix, conviction tranquille. Rythme vivant et varié, respirations naturelles, intonation conversationnelle. " +
  "Articulation nette de chaque mot. Lis le texte exactement tel qu'il est écrit. Jamais monotone, jamais lue, jamais publicitaire.";
const { synthesizeGemini } = await import(join(ROOT, "../../.agents/skills/media-use/audio/scripts/lib/gemini-tts.mjs"));
async function heard(file) {
  const mp3 = file.replace(/\.wav$/, ".mp3");
  spawnSync("ffmpeg", ["-v", "error", "-y", "-i", file, "-ac", "1", "-ar", "22050", "-b:a", "64k", mp3]);
  const parts = [
    { inline_data: { mime_type: "audio/mpeg", data: readFileSync(mp3).toString("base64") } },
    { text: "Transcris mot pour mot, sans rien corriger, ce que dit la voix. Signale tout défaut audible (mot avalé, coupure, bruit, accent étranger). JSON {\"transcription\": str, \"defauts\": list}" },
  ];
  for (let a = 0; a < 3; a++) {
    for (const m of ["gemini-3.5-flash", "gemini-3.7-flash", "gemini-3.5-flash-lite"]) {
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ role: "user", parts }], generationConfig: { temperature: 0, responseMimeType: "application/json" } }),
      });
      if (r.ok) return { model: m, ...JSON.parse((await r.json()).candidates[0].content.parts[0].text) };
    }
    await new Promise((res) => setTimeout(res, 10000));
  }
  return null;
}
const model = which === "lite" ? "gemini-3.8-flash-lite-tts" : "gemini-3.8-flash-tts";
mkdirSync(join(ROOT, "assets/voice/raw"), { recursive: true });
for (let take = 1; take <= Number(n || 2); take++) {
  const out = join(ROOT, `assets/voice/raw/${id}-${which === "lite" ? "l" : "f"}${take}.wav`);
  const r = await synthesizeGemini({ text: L.text, voiceId: "Despina", model, style: STYLE, wavAbs: out }, { authenticate: () => ({ headers: {}, secret: undefined }) });
  if (!r.ok) {
    console.log(`prise ${take} (${model}) : échec — ${String(r.error).slice(0, 260)}`);
    if (/429|quota|RESOURCE_EXHAUSTED/i.test(String(r.error))) break;
    continue;
  }
  console.log(`prise ${take} (${model}) → ${out.split("/").pop()} :`, JSON.stringify(await heard(out)));
}
