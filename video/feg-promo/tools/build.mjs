// Calage du film : lit tools/lines.json (+ audio_meta.json quand la voix existe),
// écrit assets/cues.js (temps de chaque phrase et de chaque mot) et index.html (hôtes + pistes audio).
// Usage : node tools/build.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const cfg = JSON.parse(readFileSync(join(ROOT, "tools/lines.json"), "utf8"));
const metaPath = join(ROOT, "audio_meta.json");
const meta = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, "utf8")) : null;
const voiceById = {};
if (meta && Array.isArray(meta.voices)) {
  for (const v of meta.voices) if (v && v.id) voiceById[v.id] = v;
}

const r3 = (x) => Math.round(x * 1000) / 1000;
const norm = (s) =>
  s
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
  const words = L.text.split(/\s+/).filter(Boolean);
  let dur;
  let wt;
  if (v && v.duration_s) {
    dur = v.duration_s;
    wt = (v.words || []).map((w) => ({ w: w.text, n: norm(w.text), s: r3(t + w.start), e: r3(t + w.end) }));
  } else {
    // Estimation : ~2,45 mots/s, répartis au prorata des caractères.
    dur = words.length / 2.45 + 0.25;
    const total = words.reduce((a, w) => a + w.length + 1, 0);
    let acc = 0;
    wt = words.map((w) => {
      const s = t + 0.1 + ((dur - 0.25) * acc) / total;
      acc += w.length + 1;
      const e = t + 0.1 + ((dur - 0.25) * acc) / total;
      return { w, n: norm(w), s: r3(s), e: r3(e) };
    });
  }
  const src = v && v.path ? v.path : null;
  lines[L.id] = { id: L.id, start: r3(t), end: r3(t + dur), dur: r3(dur), text: L.text, src, words: wt };
  order.push(L.id);
  t += dur;
}
let total = r3(t + cfg.tail);

const cues = { total, order, lines, estimated: !meta };
{
  // garantit au moins 4,5 s de carte de fin après l'arrivée du logo
  const L = lines.L10;
  const k = L.words.find((x) => x.n && x.n.startsWith("rejoign"));
  const logoT = (k ? k.s : L.start + 0.75 * L.dur) + 3.1;
  // la musique se termine ~5,9 s après sa section finale, calée sur le logo : on la laisse finir
  if (logoT + 6.1 > total) total = r3(logoT + 6.1);
  cues.total = total;
}


// ----- index.html -----
const C = cues;
const at = (id, needle, which = "s") => {
  const L = C.lines[id];
  if (needle == null) return which === "e" ? L.end : L.start;
  const list = Array.isArray(needle) ? needle : [needle];
  for (const nd of list) {
    const n = norm(nd);
    const w = L.words.find((x) => x.n && (x.n === n || x.n.startsWith(n)));
    if (w) return w[which];
  }
  for (const nd of list) {
    const k = L.text.toLowerCase().indexOf(String(nd).toLowerCase());
    if (k >= 0) return L.start + (k / L.text.length) * L.dur;
  }
  return L.start;
};
// Instant où la carte devient le logo (même formule que compositions/world.html).
const LOGO_T = r3(at("L10", "rejoignez") + 3.1);
C.logo = LOGO_T;
const S = (id) => C.lines[id].start;
const E = (id) => C.lines[id].end;

const VARIANT = process.argv.includes("--sans-voix") ? "sans-voix" : "voix";
// Fenêtres des couches de titres (secondes absolues).
const overlays = [
  { id: "ov-kicker", src: "compositions/ov-kicker.html", start: 0, end: E("L01") + 0.5 },
  { id: "ov-feg", src: "compositions/ov-feg.html", start: S("L03") - 0.3, end: at("L03", ["13", "treize"]) + 0.35 },
  { id: "ov-poids", src: "compositions/ov-poids.html", start: S("L04") - 0.2, end: E("L04") + 0.6 },
  { id: "ov-gef", src: "compositions/ov-gef.html", start: S("L07") - 0.2, end: E("L07") + 0.7 },
  { id: "ov-reformes", src: "compositions/ov-reformes.html", start: S("L08") - 1.2, end: E("L08") + 1.25 },
  { id: "ov-end", src: "compositions/ov-end.html", start: LOGO_T - 0.1, end: total },
  { id: "ov-titres", src: "compositions/ov-titres.html", start: 0, end: total, only: "sans-voix" },
].map((o) => ({ ...o, start: r3(Math.max(0, o.start)), end: r3(Math.min(total, o.end)) }));

// fenêtres des couches de titres, lues par chaque composition (C.ov[id].start / .dur)
cues.ov = Object.fromEntries(overlays.map((o) => [o.id, { start: o.start, dur: r3(o.end - o.start) }]));
const cuesJs = `// Généré par tools/build.mjs — ne pas éditer à la main.
window.__FEG_CUES = ${JSON.stringify(cues)};
(function () {
  var C = window.__FEG_CUES;
  function norm(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/[^a-z0-9%]+/g, "");
  }
  // Temps absolu (s) du mot qui commence par "needle" dans la phrase id ; which = "s" (début) ou "e" (fin).
  // Repli : position proportionnelle de needle dans le texte écrit.
  C.at = function (id, needle, which) {
    var L = C.lines[id];
    if (!L) return 0;
    which = which || "s";
    if (needle === undefined || needle === null) return which === "e" ? L.end : L.start;
    var list = Array.isArray(needle) ? needle : [needle];
    for (var q = 0; q < list.length; q++) {
      var n = norm(list[q]);
      for (var i = 0; i < L.words.length; i++) {
        if (L.words[i].n && (L.words[i].n === n || L.words[i].n.indexOf(n) === 0)) return L.words[i][which];
      }
    }
    for (var r = 0; r < list.length; r++) {
      var k = L.text.toLowerCase().indexOf(String(list[r]).toLowerCase());
      if (k >= 0) return L.start + (k / Math.max(1, L.text.length)) * L.dur;
    }
    return L.start;
  };
})();
`;

writeFileSync(join(ROOT, "assets/cues.js"), cuesJs);
const has = (p) => existsSync(join(ROOT, p));
const WORLD_ONLY = process.argv.includes("--world-only");
// durée du monde = durée totale (attributs marqués data-total)
{
  const wp = join(ROOT, "compositions/world.html");
  const w = readFileSync(wp, "utf8").replace(/data-duration="[0-9.]+"(\s+)data-total/g, `data-duration="${total}"$1data-total`);
  writeFileSync(wp, w);
}
const audio = [];
let track = 20;
for (const id of order) {
  const L = C.lines[id];
  if (VARIANT === "voix" && L.src && has(L.src)) {
    audio.push(
      `    <audio id="vo-${id}" src="${L.src}" data-start="${L.start}" data-duration="${L.dur}" data-track-index="${track}" data-volume="0.79"></audio>`,
    );
  }
}
// Musique : SoundHill « Find Yourself » (fournie par la FEG). Sa section finale (accord final à 129,945 s)
// tombe sur l'arrivée du logo ; la fin naturelle du morceau ferme le film.
const MUSIC = { src: "assets/bgm/soundhill-find-yourself.mp3", length: 138.109, finalSection: 129.945 };
if (has(MUSIC.src)) {
  let offset = r3(MUSIC.finalSection - LOGO_T);
  const startAt = offset < 0 ? r3(-offset) : 0;
  if (offset < 0) offset = 0;
  const dur = r3(Math.min(total - startAt, MUSIC.length - offset));
  if (VARIANT === "voix") {
    // enveloppe : présente avant la voix et entre les phrases, en retrait sous la voix, pleine sur le logo
    const FULL = 0.5,
      GAP = 0.36,
      UNDER = 0.19,
      END = 0.85;
    const pts = [{ t: 0, v: FULL }];
    const push = (t, v) => {
      t = r3(Math.max(0, t - startAt));
      if (pts.length && t <= pts[pts.length - 1].t) t = r3(pts[pts.length - 1].t + 0.01);
      pts.push({ t, v });
    };
    order.forEach((id, k) => {
      const L = C.lines[id];
      const prev = pts[pts.length - 1].v;
      push(L.start - 0.4, prev);
      push(L.start - 0.05, UNDER);
      const next = order[k + 1] ? C.lines[order[k + 1]] : null;
      const gap = next ? next.start - L.end : Infinity;
      if (gap > 1.0) {
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
  } else {
    audio.push(
      `    <audio id="bgm" src="${MUSIC.src}" data-start="${startAt}" data-duration="${dur}" data-media-start="${offset}" data-track-index="21" data-volume="0.85" data-fade-in="1.0"></audio>`,
    );
  }
}
// Effets sonores : [id, fichier, temps absolu, volume]
const sfxPlan = JSON.parse(readFileSync(join(ROOT, "tools/sfx.json"), "utf8"));
for (const s of sfxPlan) {
  const base = s.anchor === "logo" ? LOGO_T : s.line ? at(s.line, s.word, s.which || "s") : 0;
  const tAbs = r3(base + (s.offset || 0));
  const ms = s.mediaStart || 0;
  if (has(s.src)) {
    audio.push(
      `    <audio id="${s.id}" src="${s.src}" data-start="${tAbs}" data-duration="${r3(s.dur - ms)}"${ms ? ` data-media-start="${ms}"` : ""} data-track-index="${30 + sfxPlan.indexOf(s)}" data-volume="${s.volume}"${s.fadeIn ? ` data-fade-in="${s.fadeIn}"` : ""}></audio>`,
    );
  }
}

const hosts = (WORLD_ONLY ? [] : overlays.filter((o) => !o.only || o.only === VARIANT))
  .map(
    (o, i) =>
      `    <div id="${o.id}" data-composition-id="${o.id}" data-composition-src="${o.src}" data-start="${o.start}" data-duration="${r3(o.end - o.start)}" data-track-index="${i + 2}" data-track-kind="graphics" data-width="1920" data-height="1080"></div>`,
  )
  .join("\n");

const html = `<!doctype html>
<html
  lang="fr"
  data-composition-variables='[
    {"id":"color-ground","type":"color","label":"Sol","default":"#E8E9E4"},
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
    <title>FEG — Semaine mondiale de l'entrepreneuriat 2026${VARIANT === "voix" ? "" : " (sans voix)"}</title>
    <script src="lib/gsap.min.js"></script>
    <script src="assets/cues.js"></script>
    <style>
      :root {
        --color-ground: #e8e9e4;
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
    <div id="world" data-composition-id="world" data-composition-src="compositions/world.html" data-start="0" data-duration="${total}" data-track-index="1" data-track-kind="graphics" data-width="1920" data-height="1080"></div>
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
// Une seule racine (index.html) : la variante choisie y est écrite.
// Version voix : node tools/build.mjs · version sans voix : node tools/build.mjs --sans-voix
writeFileSync(join(ROOT, "index.html"), html);
console.log(`total ${total}s  estimated=${!meta}  lines=${order.length}  audio=${audio.length}`);
for (const id of order) console.log(id, C.lines[id].start, "→", C.lines[id].end);
for (const o of overlays) console.log(o.id, o.start, "→", o.end);
