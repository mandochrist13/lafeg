// Calage du film « Comment adhérer à la FEG » : lit tools/lines.json et audio_meta.json,
// écrit assets/cues.js (temps de chaque phrase, de chaque mot, fenêtres des scènes) et index.html.
// Usage : node tools/build.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

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
  lines[L.id] = { id: L.id, start: r3(t), end: r3(t + v.duration_s), dur: r3(v.duration_s), text: L.text, src: v.path, words };
  order.push(L.id);
  t += v.duration_s;
}
const at = (id, needle, which = "s") => {
  const L = lines[id];
  if (needle == null) return which === "e" ? L.end : L.start;
  for (const nd of Array.isArray(needle) ? needle : [needle]) {
    const n = norm(nd);
    const w = L.words.find((x) => x.n && (x.n === n || x.n.startsWith(n)));
    if (w) return w[which];
  }
  throw new Error(`mot introuvable : ${id} « ${needle} »`);
};
const S = (id) => lines[id].start;
const E = (id) => lines[id].end;

// le logo se pose sur « rejoignez » ; la musique finit sur sa fin naturelle
const LOGO_T = r3(at("L11", "rejoignez") - 0.1);
let total = r3(Math.max(E("L11") + cfg.tail, LOGO_T + 6.1));

// Fenêtres des scènes (secondes absolues). Les chevauchements portent les raccords.
const scenes = [
  { id: "s1", src: "compositions/s1-bureau.html", start: 0, end: S("L02") - 0.2 },
  { id: "s2", src: "compositions/s2-formelle.html", start: S("L02") - 0.2, end: S("L04") - 0.1 },
  { id: "s3", src: "compositions/s3-dossier.html", start: S("L04") - 0.1, end: at("L06", "déposez") + 0.15 },
  { id: "s5", src: "compositions/s5-depot.html", start: at("L06", "déposez") - 0.45, end: S("L07") - 0.3 },
  { id: "s6", src: "compositions/s6-validation.html", start: S("L07") - 0.3, end: S("L08") - 0.35 },
  { id: "s7", src: "compositions/s7-cotisation.html", start: S("L08") - 0.35, end: S("L09") - 0.4 },
  { id: "s8", src: "compositions/s8-membre.html", start: S("L09") - 0.4, end: S("L10") - 0.35 },
  { id: "s9", src: "compositions/s9-annee.html", start: S("L10") - 0.35, end: S("L11") - 0.3 },
  { id: "s10", src: "compositions/s10-fin.html", start: S("L11") - 0.3, end: total },
].map((o) => ({ ...o, start: r3(Math.max(0, o.start)), end: r3(Math.min(total, o.end)) }));
const ONLY = (process.argv.find((a) => a.startsWith("--only=")) || "").slice(7).split(",").filter(Boolean);

const cues = { total, order, lines, logo: LOGO_T, sc: Object.fromEntries(scenes.map((o) => [o.id, { start: o.start, dur: r3(o.end - o.start) }])) };
writeFileSync(
  join(ROOT, "assets/cues.js"),
  `// Généré par tools/build.mjs — ne pas éditer à la main.
window.__FEG_CUES = ${JSON.stringify(cues)};
(function () {
  var C = window.__FEG_CUES;
  function norm(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/[^a-z0-9%]+/g, "");
  }
  // Temps absolu (s) du mot qui commence par needle dans la phrase id ; which = "s" (début) ou "e" (fin).
  C.at = function (id, needle, which) {
    var L = C.lines[id];
    which = which || "s";
    if (needle === undefined || needle === null) return which === "e" ? L.end : L.start;
    var list = Array.isArray(needle) ? needle : [needle];
    for (var q = 0; q < list.length; q++) {
      var n = norm(list[q]);
      for (var i = 0; i < L.words.length; i++) if (L.words[i].n && (L.words[i].n === n || L.words[i].n.indexOf(n) === 0)) return L.words[i][which];
    }
    return L.start;
  };
  // horloge locale d'une scène : C.local("s2") renvoie f(abs) = abs - début de la scène
  C.local = function (id) {
    var s0 = C.sc[id].start;
    return function (abs) {
      return Math.max(0, abs - s0);
    };
  };
})();
`,
);

const has = (p) => existsSync(join(ROOT, p));
const audio = [];
let track = 20;
for (const id of order) {
  const L = lines[id];
  audio.push(`    <audio id="vo-${id}" src="${L.src}" data-start="${L.start}" data-duration="${L.dur}" data-track-index="${track}" data-volume="0.79"></audio>`);
}
// Musique : SoundHill « Find Yourself » (fournie par la FEG pour le premier film). Section finale à 129,945 s calée sur le logo.
const MUSIC = { src: "assets/bgm/soundhill-find-yourself.mp3", length: 138.109, finalSection: 129.945 };
{
  let offset = r3(MUSIC.finalSection - LOGO_T);
  const startAt = offset < 0 ? r3(-offset) : 0;
  if (offset < 0) offset = 0;
  const dur = r3(Math.min(total - startAt, MUSIC.length - offset));
  const FULL = 0.5,
    GAP = 0.34,
    UNDER = 0.18,
    END = 0.85;
  const pts = [{ t: 0, v: FULL }];
  const push = (tt, v) => {
    tt = r3(Math.max(0, tt - startAt));
    if (tt <= pts[pts.length - 1].t) tt = r3(pts[pts.length - 1].t + 0.01);
    pts.push({ t: tt, v });
  };
  order.forEach((id, k) => {
    const L = lines[id];
    push(L.start - 0.4, pts[pts.length - 1].v);
    push(L.start - 0.05, UNDER);
    const next = order[k + 1] ? lines[order[k + 1]] : null;
    if (!next || next.start - L.end > 1.0) {
      push(L.end + 0.1, UNDER);
      push(L.end + 0.55, GAP);
    }
  });
  push(LOGO_T - 0.6, GAP);
  push(LOGO_T - 0.05, END);
  const auto = JSON.stringify({ version: 1, lanes: [{ target: "volume", points: pts }] });
  audio.push(
    `    <audio id="bgm" src="${MUSIC.src}" data-start="${startAt}" data-duration="${dur}" data-media-start="${offset}" data-track-index="21" data-volume="1" data-fade-in="1.2" data-automation='${auto}'></audio>`,
  );
}
// Bruitages : tools/sfx.json → [{ id, src, dur, volume, line, word, which, offset }]
if (has("tools/sfx.json")) {
  const plan = JSON.parse(readFileSync(join(ROOT, "tools/sfx.json"), "utf8"));
  plan.forEach((s, i) => {
    const base = s.anchor === "logo" ? LOGO_T : s.abs != null ? s.abs : at(s.line, s.word, s.which || "s");
    const tAbs = r3(base + (s.offset || 0));
    if (has(s.src)) audio.push(`    <audio id="${s.id}" src="${s.src}" data-start="${tAbs}" data-duration="${s.dur}" data-track-index="${30 + i}" data-volume="${s.volume}"></audio>`);
  });
}

const hosts = scenes
  .filter((o) => (!ONLY.length || ONLY.includes(o.id)) && has(o.src))
  .map(
    (o, i) =>
      `    <div id="${o.id}" data-composition-id="${o.id}" data-composition-src="${o.src}" data-start="${o.start}" data-duration="${r3(o.end - o.start)}" data-track-index="${i + 1}" data-track-kind="graphics" data-width="1920" data-height="1080"></div>`,
  )
  .join("\n");

const html = `<!doctype html>
<html
  lang="fr"
  data-composition-variables='[
    {"id":"color-ground","type":"color","label":"Fond","default":"#FFFFFF"},
    {"id":"color-ink","type":"color","label":"Texte","default":"#1A1C19"},
    {"id":"color-deep","type":"color","label":"Vert FEG profond","default":"#063D21"},
    {"id":"color-accent","type":"color","label":"Vert adhésion","default":"#0A7537"},
    {"id":"color-bronze","type":"color","label":"Bronze","default":"#AEAE7D"},
    {"id":"font-display","type":"string","label":"Police titres","default":"Hyundai Sans Head"}
  ]'
>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1920, height=1080" />
    <title>FEG — Comment adhérer</title>
    <script src="lib/gsap.min.js"></script>
    <script src="assets/cues.js"></script>
    <script src="assets/people.js"></script>
    <style>
      @font-face {
        font-family: "Hyundai Sans Head";
        font-weight: 500;
        src: url("assets/fonts/HyundaiSansHead-Medium.woff2") format("woff2");
      }
      @font-face {
        font-family: "Hyundai Sans Head";
        font-weight: 700;
        src: url("assets/fonts/HyundaiSansHead-Bold.woff2") format("woff2");
      }
      @font-face {
        font-family: "Hyundai Sans Text";
        font-weight: 400;
        src: url("assets/fonts/HyundaiSansText-Regular.woff2") format("woff2");
      }
      @font-face {
        font-family: "Hyundai Sans Text";
        font-weight: 500;
        src: url("assets/fonts/HyundaiSansText-Medium.woff2") format("woff2");
      }
      :root {
        --color-ground: #ffffff;
        --color-ink: #1a1c19;
        --color-deep: #063d21;
        --color-accent: #0a7537;
        --color-bronze: #aeae7d;
      }
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
        background: var(--color-ground);
      }
      #root {
        position: relative;
        width: 1920px;
        height: 1080px;
        overflow: hidden;
        background: var(--color-ground);
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
console.log(`total ${total} s · logo ${LOGO_T} s · audio ${audio.length}`);
for (const id of order) console.log(id, lines[id].start, "→", lines[id].end);
for (const o of scenes) console.log(o.id, o.start, "→", o.end, has(o.src) ? "" : "(absente)");
