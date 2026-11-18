// Calage du film « Le Fonds 4 de la CNAMGS » (vidéo explicative 2D) : lit tools/lines.json et
// audio_meta.json, écrit assets/cues.js (temps de chaque phrase, de chaque mot, fenêtres des scènes)
// et index.html (scènes, voix, musique, bruitages).
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

// Musique : SoundHill « Find Yourself ». Son accord final (130,16 s dans le morceau) tombe sur le logo,
// posé juste après la dernière phrase (« La solidarité a un sens ») ; le film s'arrête avec la musique.
const MUSIC = { src: "assets/bgm/soundhill-find-yourself.mp3", length: 138.109, finalChord: 130.16 };
const LOGO_T = r3(E("L11") + 0.15);
// la musique est éteinte (sous −55 dB) vers 136,7 s : le film tient la carte de fin 6,9 s après le logo
const total = r3(Math.max(E("L11") + cfg.tail, LOGO_T + 6.9));

// Fenêtres des scènes (secondes absolues), bout à bout.
const scenes = [
  { id: "s1", src: "compositions/s1-metiers.html", start: 0, end: S("L02") - 0.2 },
  { id: "s2", src: "compositions/s2-loi.html", start: S("L02") - 0.2, end: S("L03") - 0.2 },
  { id: "s3", src: "compositions/s3-concernes.html", start: S("L03") - 0.2, end: S("L05") - 0.3 },
  { id: "s4", src: "compositions/s4-soins.html", start: S("L05") - 0.3, end: S("L06") - 0.3 },
  { id: "s5", src: "compositions/s5-bureau.html", start: S("L06") - 0.3, end: S("L07") - 0.3 },
  { id: "s6", src: "compositions/s6-pieces.html", start: S("L07") - 0.3, end: S("L09") - 0.3 },
  { id: "s7", src: "compositions/s7-cotisation.html", start: S("L09") - 0.3, end: S("L10") - 0.3 },
  { id: "s8", src: "compositions/s8-pris-en-charge.html", start: S("L10") - 0.3, end: S("L11") - 0.3 },
  { id: "s9", src: "compositions/s9-fin.html", start: S("L11") - 0.3, end: total },
].map((o) => ({ ...o, start: r3(Math.max(0, o.start)), end: r3(Math.min(total, o.end)) }));
const ONLY = (process.argv.find((a) => a.startsWith("--only=")) || "").slice(7).split(",").filter(Boolean);
const W = 1920,
  H = 1080;

const cues = { total, order, lines, logo: LOGO_T, sc: Object.fromEntries(scenes.map((o) => [o.id, { start: o.start, dur: r3(o.end - o.start) }])) };
writeFileSync(
  join(ROOT, "assets/cues.js"),
  `// Généré par tools/build.mjs — ne pas éditer à la main.
window.__CN_CUES = ${JSON.stringify(cues)};
(function () {
  var C = window.__CN_CUES;
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
    console.warn("cue introuvable : " + id + " « " + list.join(" / ") + " »");
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
for (const id of order) {
  const L = lines[id];
  audio.push(`    <audio id="vo-${id}" src="${L.src}" data-start="${L.start}" data-duration="${L.dur}" data-track-index="20" data-volume="0.79"></audio>`);
}
{
  let offset = r3(MUSIC.finalChord - LOGO_T);
  const startAt = offset < 0 ? r3(-offset) : 0;
  if (offset < 0) offset = 0;
  const dur = r3(Math.min(total - startAt, MUSIC.length - offset));
  // pleine (FULL) sans voix, en retrait (UNDER) sous la voix, GAP dans les silences, END sur la carte de fin
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
    if (!next) {
      // après la dernière phrase : la musique remonte sur l'accord final et le logo
      push(L.end + 0.02, UNDER);
      push(LOGO_T + 0.25, END);
    } else if (next.start - L.end > 1.0) {
      push(L.end + 0.1, UNDER);
      push(L.end + 0.55, GAP);
    }
  });
  const auto = JSON.stringify({ version: 1, lanes: [{ target: "volume", points: pts }] });
  audio.push(
    `    <audio id="bgm" src="${MUSIC.src}" data-start="${startAt}" data-duration="${dur}" data-media-start="${offset}" data-track-index="21" data-volume="1" data-fade-in="1.2" data-automation='${auto}'></audio>`,
  );
  console.log(`musique : départ ${offset} s dans le morceau, fin ${r3(startAt + dur)} s`);
}
// Bruitages : tools/sfx.json → [{ id, src, dur, volume, line, word, which, offset }] ou { abs } ou { anchor: "logo" }
if (has("tools/sfx.json")) {
  const plan = JSON.parse(readFileSync(join(ROOT, "tools/sfx.json"), "utf8"));
  plan.forEach((s, i) => {
    const base = s.anchor === "logo" ? LOGO_T : s.abs != null ? s.abs : at(s.line, s.word, s.which || "s");
    const tAbs = r3(base + (s.offset || 0));
    if (has(s.src)) audio.push(`    <audio id="${s.id}" src="${s.src}" data-start="${tAbs}" data-duration="${s.dur}" data-track-index="${30 + (i % 6)}" data-volume="${s.volume}"></audio>`);
  });
}

const hosts = scenes
  .filter((o) => (!ONLY.length || ONLY.includes(o.id)) && has(o.src))
  .map(
    (o, i) =>
      `    <div id="${o.id}" data-composition-id="${o.id}" data-composition-src="${o.src}" data-start="${o.start}" data-duration="${r3(o.end - o.start)}" data-track-index="${i + 1}" data-track-kind="graphics" data-width="${W}" data-height="${H}"></div>`,
  )
  .join("\n");

const html = `<!doctype html>
<html
  lang="fr"
  data-composition-variables='[
    {"id":"color-ground","type":"color","label":"Fond","default":"#FFFFFF"},
    {"id":"color-ink","type":"color","label":"Texte","default":"#1C2430"},
    {"id":"color-deep","type":"color","label":"Bleu CNAMGS profond","default":"#084E86"},
    {"id":"color-blue","type":"color","label":"Bleu CNAMGS","default":"#0066A8"},
    {"id":"color-green","type":"color","label":"Vert CNAMGS","default":"#5AA137"},
    {"id":"color-yellow","type":"color","label":"Jaune CNAMGS","default":"#F7D21E"},
    {"id":"font-display","type":"string","label":"Police","default":"Montserrat"}
  ]'
>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=${W}, height=${H}" />
    <title>CNAMGS — Le Fonds 4, mode d'emploi</title>
    <script src="lib/gsap.min.js"></script>
    <script src="assets/cues.js"></script>
    <script src="assets/people.js"></script>
    <script src="assets/cast.js"></script>
    <style>
${[400, 500, 600, 700, 800].map((w) => `      @font-face {\n        font-family: "Montserrat";\n        font-weight: ${w};\n        src: url("assets/fonts/Montserrat-${w}.woff2") format("woff2");\n      }`).join("\n")}
      :root {
        --color-ground: #ffffff;
        --color-ink: #1c2430;
        --color-deep: #084e86;
        --color-blue: #0066a8;
        --color-green: #5aa137;
        --color-yellow: #f7d21e;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        width: ${W}px;
        height: ${H}px;
        overflow: hidden;
        background: var(--color-ground);
      }
      #root {
        position: relative;
        width: ${W}px;
        height: ${H}px;
        overflow: hidden;
        background: var(--color-ground);
        font-family: "Montserrat", sans-serif;
      }
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="${total}" data-width="${W}" data-height="${H}">
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
for (const o of scenes) console.log(o.id, o.start, "→", o.end, r3(o.end - o.start), has(o.src) ? "" : "(absente)");
