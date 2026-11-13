// Plusieurs prises d'une même phrase (voix Despina), toutes gardées (raw/<id>-t<n>.wav), chacune
// contrôlée par une écoute neutre : transcription sans le texte attendu, syllabes du sigle CNAMGS.
// On choisit ensuite la prise à garder. Usage : NODE_USE_ENV_PROXY=1 node tools/voice_takes.mjs L06 3 [flash|lite]
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const [id, n, which] = process.argv.slice(2);
const L = JSON.parse(readFileSync(join(ROOT, "tools/lines.json"), "utf8")).lines.find((x) => x.id === id);
const STYLE =
  "Voix féminine française, naturelle, claire et bienveillante, comme une conseillère qui guide un chef d'entreprise pas à pas : posée, souriante, assurée. " +
  "Lis le texte exactement tel qu'il est écrit, mot pour mot. Prononce CNSS lettre par lettre : cé-èn-èss-èss. Prononce Knam-GS « knam-jé-èss » : la syllabe « knam » d'un seul coup, avec un K dur, puis « jé-èss » ; ne dis jamais « cé ». " +
  "Dis bien « Libreville », la capitale du Gabon. Jamais monotone, jamais publicitaire.";
const { synthesizeGemini } = await import(join(ROOT, "../../.agents/skills/media-use/audio/scripts/lib/gemini-tts.mjs"));
async function heard(file) {
  const mp3 = file.replace(/\.wav$/, ".mp3");
  spawnSync("ffmpeg", ["-v", "error", "-y", "-i", file, "-ac", "1", "-ar", "22050", "-b:a", "64k", mp3]);
  const parts = [
    { inline_data: { mime_type: "audio/mpeg", data: readFileSync(mp3).toString("base64") } },
    { text: "Transcris mot pour mot, sans rien corriger, ce que dit la voix. Puis, pour le second sigle d'organisme social (celui qui suit le premier, qui commence par C N S), décris les syllabes entendues en notation phonétique simple et compte-les. Signale tout défaut audible (mot avalé, coupure, bruit). JSON {\"transcription\": str, \"sigle_syllabes\": str, \"nombre\": int, \"defauts\": list}" },
  ];
  for (let a = 0; a < 4; a++) {
    for (const m of ["gemini-3.5-flash", "gemini-3.7-flash", "gemini-3.5-flash-lite"]) {
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ role: "user", parts }], generationConfig: { temperature: 0, responseMimeType: "application/json" } }),
      });
      if (r.ok) return { model: m, ...JSON.parse((await r.json()).candidates[0].content.parts[0].text) };
    }
    await new Promise((res) => setTimeout(res, 15000));
  }
  return null;
}
const model = which === "lite" ? "gemini-3.8-flash-lite-tts" : "gemini-3.8-flash-tts";
for (let take = 1; take <= Number(n || 3); take++) {
  const out = join(ROOT, `assets/voice/raw/${id}-${process.env.TAKE_TAG || "t"}${take}${which === "lite" ? "l" : ""}.wav`);
  const r = await synthesizeGemini({ text: L.text, voiceId: "Despina", model, style: STYLE, wavAbs: out }, { authenticate: () => ({ headers: {}, secret: undefined }) });
  if (!r.ok) {
    console.log(`prise ${take} (${model}) : échec — ${String(r.error).slice(0, 300)}`);
    if (/429|quota|RESOURCE_EXHAUSTED/i.test(String(r.error))) break;
    continue;
  }
  const v = await heard(out);
  console.log(`prise ${take} (${model}) → ${out.split("/").pop()} :`, JSON.stringify(v));
}
