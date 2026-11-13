// Reprise d'une phrase contenant le sigle CNAMGS, gardée seulement si une écoute neutre
// entend « knam » (K dur, 3 syllabes) et, le cas échéant, un mot obligatoire.
// Usage : NODE_USE_ENV_PROXY=1 node tools/voice_acr.mjs L06 "huitième|8" 3
import { readFileSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const [id, mustRe, maxTakes] = process.argv.slice(2);
const L = JSON.parse(readFileSync(join(ROOT, "tools/lines.json"), "utf8")).lines.find((x) => x.id === id);
const STYLE =
  "Voix féminine française, naturelle, claire et bienveillante, comme une conseillère qui guide un chef d'entreprise pas à pas : posée, souriante, assurée. " +
  "Lis le texte exactement tel qu'il est écrit. Prononce CNSS lettre par lettre : cé-èn-èss-èss. Prononce Knam-GS « knam-jé-èss » : la syllabe « knam » d'un seul coup, avec un K dur, puis « jé-èss » ; ne dis jamais « cé ». " +
  "Jamais monotone, jamais publicitaire.";
const { synthesizeGemini } = await import(join(ROOT, "../../.agents/skills/media-use/audio/scripts/lib/gemini-tts.mjs"));
const tmp = join(ROOT, `assets/voice/raw/${id}-take.wav`);
async function heard(file) {
  const mp3 = file.replace(/\.wav$/, ".mp3");
  spawnSync("ffmpeg", ["-v", "error", "-y", "-i", file, "-ac", "1", "-ar", "22050", "-b:a", "64k", mp3]);
  const parts = [
    { inline_data: { mime_type: "audio/mpeg", data: readFileSync(mp3).toString("base64") } },
    { text: "Transcris mot pour mot, sans rien corriger, ce que dit la voix. Puis, pour le second sigle d'organisme social (celui qui suit le premier, qui commence par C N S), décris les syllabes entendues en notation phonétique simple et compte-les. JSON {\"transcription\": str, \"sigle_syllabes\": str, \"nombre\": int}" },
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
  const v = await heard(tmp);
  console.log(`prise ${take} (${model}) :`, JSON.stringify(v));
  if (!v) continue;
  const syl = String(v.sigle_syllabes || "").toLowerCase();
  const okAcr = /^\s*k/.test(syl) && Number(v.nombre) <= 3;
  const okMust = !mustRe || new RegExp(mustRe, "i").test(String(v.transcription || ""));
  if (okAcr && okMust) {
    copyFileSync(tmp, join(ROOT, `assets/voice/raw/${id}.wav`));
    console.log(`→ ${id} remplacée par la prise ${take}`);
    process.exit(0);
  }
}
console.log("aucune prise conforme");
process.exit(1);
