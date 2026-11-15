// Calage du film CPPF « Allocation de Rentrée Scolaire » : lit tools/lines.json et audio_meta.json,
// calcule l'enveloppe de la voix (bouche de l'abeille), écrit assets/cues.js, assets/talk.js et index.html.
// Usage : node tools/build.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const cfg = JSON.parse(readFileSync(join(ROOT, "tools/lines.json"), "utf8"));
const meta = JSON.parse(readFileSync(join(ROOT, "audio_meta.json"), "utf8"));
const voiceById = Object.fromEntries(meta.voices.map((v) => [v.id, v]));
const r3 = (x) => Math.round(x * 1000) / 1000;
const norm = (s) =>
  String(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9%]+/g, "");

let t = cfg.lead;
const lines = {};
const order = [];
for (const L of cfg.lines) {
  t += L.gap;
  const v = voiceById[L.id];
  const words = (v.words || []).map((w) => ({ w: w.text, n: norm(w.text), s: r3(t + w.start), e: r3(t + w.end) }));
  lines[L.id] = { id: L.id, start: r3(t), end: r3(t + v.duration_s), dur: r3(v.duration_s), src: v.path, words };
  order.push(L.id);
  t += v.duration_s;
}
const total = r3(t + cfg.tail);
const S = (id) => lines[id].start;
const E = (id) => lines[id].end;
const at = (id, needle) => {
  const n = norm(needle);
  const w = lines[id].words.find((x) => x.n && (x.n === n || x.n.startsWith(n)));
  if (!w) throw new Error(`mot introuvable : ${id} « ${needle} »`);
  return w.s;
};

// scènes (décors et écrans) ; l'abeille vit dans sa propre couche, par-dessus, sans coupure
const scenes = [
  { id: "c1", src: "compositions/c1-intro.html", start: 0, end: S("L01") - 0.6 },
  { id: "c2", src: "compositions/c2-accueil.html", start: S("L01") - 0.6, end: S("L03") - 0.5 },
  { id: "c3", src: "compositions/c3-connexion.html", start: S("L03") - 0.5, end: S("L05") - 0.4 },
  { id: "c4", src: "compositions/c4-liste.html", start: S("L05") - 0.4, end: S("L06") - 0.4 },
  { id: "c5", src: "compositions/c5-formulaire.html", start: S("L06") - 0.4, end: S("L09") - 0.4 },
  { id: "c6", src: "compositions/c6-ecole.html", start: S("L09") - 0.4, end: at("L10", "connectez") - 0.3 },
  { id: "c7", src: "compositions/c7-televersement.html", start: at("L10", "connectez") - 0.3, end: S("L13") - 0.5 },
  { id: "c8", src: "compositions/c8-fin.html", start: S("L13") - 0.5, end: total },
].map((o) => ({ ...o, start: r3(o.start), end: r3(o.end) }));
const overlays = [{ id: "bee", src: "compositions/bee.html", start: r3(S("L01") - 0.9), end: total }];

// enveloppe de la voix : RMS sur 1/15 s, normalisée par phrase, seuil de silence, lissage léger
const talk = {};
for (const id of order) {
  const L = lines[id];
  const pcm = spawnSync("ffmpeg", ["-v", "error", "-i", join(ROOT, L.src), "-ac", "1", "-ar", "16000", "-f", "s16le", "-"], { maxBuffer: 1 << 28 }).stdout;
  const n = pcm.length / 2;
  const hop = Math.round(16000 / 15);
  const rms = [];
  for (let i = 0; i + hop <= n; i += hop) {
    let acc = 0;
    for (let k = 0; k < hop; k++) {
      const s = pcm.readInt16LE((i + k) * 2) / 32768;
      acc += s * s;
    }
    rms.push(Math.sqrt(acc / hop));
  }
  const sorted = [...rms].sort((a, b) => a - b);
  const p95 = sorted[Math.floor(sorted.length * 0.95)] || 1;
  const floor = p95 * 0.12;
  const env = rms.map((v) => (v < floor ? 0 : Math.min(1, (v - floor) / (p95 - floor))));
  talk[id] = env.map((v, i) => r3(Math.min(1, 0.55 * v + 0.25 * (env[i - 1] || 0) + 0.2 * (env[i + 1] || 0)) * 0.95 + (v > 0 ? 0.05 : 0)));
}
writeFileSync(join(ROOT, "assets/talk.js"), `// Généré par tools/build.mjs — ouverture de la bouche, 15 valeurs par seconde et par phrase.\nwindow.__CPPF_TALK = ${JSON.stringify(talk)};\n`);

const cues = {
  total,
  order,
  lines,
  sc: Object.fromEntries(scenes.concat(overlays).map((o) => [o.id, { start: o.start, dur: r3(o.end - o.start) }])),
};
writeFileSync(
  join(ROOT, "assets/cues.js"),
  `// Généré par tools/build.mjs — ne pas éditer à la main.
window.__CPPF_CUES = ${JSON.stringify(cues)};
(function () {
  var C = window.__CPPF_CUES;
  function norm(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/[^a-z0-9%]+/g, "");
  }
  // temps absolu (s) du mot qui commence par needle dans la phrase id ; which = "s" (début) ou "e" (fin)
  C.at = function (id, needle, which) {
    var L = C.lines[id];
    which = which || "s";
    if (needle === undefined || needle === null) return which === "e" ? L.end : L.start;
    var list = Array.isArray(needle) ? needle : [needle];
    for (var q = 0; q < list.length; q++) {
      var n = norm(list[q]);
      for (var i = 0; i < L.words.length; i++) if (L.words[i].n && (L.words[i].n === n || L.words[i].n.indexOf(n) === 0)) return L.words[i][which];
    }
    throw new Error("mot introuvable : " + id + " " + list.join("/"));
  };
  C.local = function (id) {
    var s0 = C.sc[id].start;
    return function (abs) {
      return Math.max(0, abs - s0);
    };
  };
})();
`,
);

// audio : voix, musique avec abaissement sous la voix
const has = (p) => existsSync(join(ROOT, p));
const audio = [];
for (const id of order) {
  const L = lines[id];
  audio.push(`    <audio id="vo-${id}" src="${L.src}" data-start="${L.start}" data-duration="${L.dur}" data-track-index="20" data-volume="0.82"></audio>`);
}
const MUSIC = ["assets/bgm/musique.mp3", "assets/bgm/musique.wav"].find(has);
if (MUSIC) {
  const len = parseFloat(spawnSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", join(ROOT, MUSIC)], { encoding: "utf8" }).stdout);
  const FULL = 0.62,
    GAP = 0.36,
    UNDER = 0.17,
    END = 0.7;
  const pts = [{ t: 0, v: FULL }];
  const push = (tt, v) => {
    tt = r3(Math.max(0, tt));
    if (tt <= pts[pts.length - 1].t) tt = r3(pts[pts.length - 1].t + 0.01);
    pts.push({ t: tt, v });
  };
  order.forEach((id, k) => {
    const L = lines[id];
    push(L.start - 0.45, pts[pts.length - 1].v);
    push(L.start - 0.05, UNDER);
    // après la dernière phrase, c'est la remontée de fin (END) qui prend le relais
    const next = order[k + 1] ? lines[order[k + 1]] : null;
    if (next && next.start - L.end > 1.05) {
      push(L.end + 0.1, UNDER);
      push(L.end + 0.5, GAP);
    }
  });
  push(E("L13") + 0.15, UNDER);
  push(E("L13") + 0.7, END);
  const dur = r3(Math.min(total, len));
  const auto = JSON.stringify({ version: 1, lanes: [{ target: "volume", points: pts }] });
  audio.push(`    <audio id="bgm" src="${MUSIC}" data-start="0" data-duration="${dur}" data-track-index="21" data-volume="1" data-fade-out="2.5" data-automation='${auto}'></audio>`);
}

const hosts = scenes
  .concat(overlays)
  .filter((o) => has(o.src))
  .map(
    (o, i) =>
      `    <div id="${o.id}" data-composition-id="${o.id}" data-composition-src="${o.src}" data-start="${o.start}" data-duration="${r3(o.end - o.start)}" data-track-index="${i + 1}" data-track-kind="graphics" data-width="1920" data-height="1080"></div>`,
  )
  .join("\n");

const html = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1920, height=1080" />
    <title>CPPF — Allocation de Rentrée Scolaire 2026-2027</title>
    <script src="lib/gsap.min.js"></script>
    <script src="assets/cues.js"></script>
    <script src="assets/talk.js"></script>
    <script src="assets/bee.js"></script>
    <script src="assets/kit.js"></script>
    <link rel="stylesheet" href="assets/ui.css" />
    <style>
${[400, 500, 600, 700, 800].map((w) => `      @font-face {\n        font-family: "Montserrat";\n        font-weight: ${w};\n        src: url("assets/fonts/Montserrat-${w}.woff2") format("woff2");\n      }`).join("\n")}
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        width: 1920px;
        height: 1080px;
        overflow: hidden;
        background: #ffffff;
      }
      #root {
        position: relative;
        width: 1920px;
        height: 1080px;
        overflow: hidden;
        background: #ffffff;
      }
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="${total}" data-width="1920" data-height="1080">
${hosts}
${audio.join("\n")}
    </div>
    <script>
      window.__timelines = window.__timelines || {};
      window.__timelines["main"] = gsap.timeline({ paused: true });
    </script>
  </body>
</html>
`;
writeFileSync(join(ROOT, "index.html"), html);
console.log(`total ${total} s · ${order.length} phrases · audio ${audio.length}${MUSIC ? "" : " (sans musique)"}`);
for (const o of scenes.concat(overlays)) console.log(`${o.id} ${o.start} → ${o.end}`);
