// Calage du film FEG « Pâte à modeler » : lit tools/lines.json + audio_meta.json (voix calée mot à mot),
// écrit assets/cues.js (temps de chaque phrase et de chaque mot) et index.html (hôtes + pistes audio).
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
const S = (id) => lines[id].start;
const E = (id) => lines[id].end;
const at = (id, needle, which = "s") => {
  const L = lines[id];
  for (const nd of Array.isArray(needle) ? needle : [needle]) {
    const n = norm(nd);
    const w = L.words.find((x) => x.n && (x.n === n || x.n.startsWith(n)));
    if (w) return w[which];
  }
  return L.start;
};

// carte de fin : le logo arrive 0,9 s après la dernière phrase ; elle tient au moins 6 s
const LOGO_T = r3(E("L10") + 0.9);
let total = r3(Math.max(t + cfg.tail, LOGO_T + 6.2));

// Musique : SoundHill « Find Yourself » (fournie par la FEG) ; son dernier accord (130,16 s du morceau)
// tombe sur le logo de la carte de fin, puis le morceau s'éteint seul.
const MUSIC = { src: "assets/bgm/soundhill-find-yourself.mp3", length: 138.109, finalHit: 130.16 };
let offset = r3(MUSIC.finalHit - LOGO_T);
let startAt = 0;
if (offset < 0) {
  startAt = r3(-offset);
  offset = 0;
}
total = r3(Math.max(total, Math.min(startAt + MUSIC.length - offset, LOGO_T + 7.5)));

const overlays = [
  // carte de fin : le blanc monte juste avant le logo, posé sur le dernier accord
  { id: "ov-end", src: "compositions/ov-end.html", start: LOGO_T - 0.9, end: total },
].map((o) => ({ ...o, start: r3(Math.max(0, o.start)), end: r3(Math.min(total, o.end)) }));

const cues = { total, order, lines, logo: LOGO_T, ov: Object.fromEntries(overlays.map((o) => [o.id, { start: o.start, dur: r3(o.end - o.start) }])) };
writeFileSync(
  join(ROOT, "assets/cues.js"),
  `// Généré par tools/build.mjs — ne pas éditer à la main.
window.__FL_CUES = ${JSON.stringify(cues)};
(function () {
  var C = window.__FL_CUES;
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
    return L.start;
  };
  // temps local à une couche de titres
  C.local = function (ov) {
    var o = C.ov[ov];
    return function (t) {
      return Math.max(0, t - o.start);
    };
  };
})();
`,
);

// durée du monde = durée totale
{
  const wp = join(ROOT, "compositions/world.html");
  if (existsSync(wp)) writeFileSync(wp, readFileSync(wp, "utf8").replace(/data-duration="[0-9.]+"(\s+)data-total/g, `data-duration="${total}"$1data-total`));
}

const audio = order.map((id) => `    <audio id="vo-${id}" src="${lines[id].src}" data-start="${lines[id].start}" data-duration="${lines[id].dur}" data-track-index="20" data-volume="0.8"></audio>`);
{
  // enveloppe : présente avant la voix et dans les respirations, en retrait sous la voix, pleine sur le logo
  const FULL = 0.52,
    GAP = 0.36,
    UNDER = 0.19,
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
    if (next && next.start - L.end > 1.0) {
      push(L.end + 0.1, UNDER);
      push(L.end + 0.55, GAP);
    }
  });
  push(E("L10") + 0.15, UNDER);
  push(LOGO_T - 0.05, END);
  const dur = r3(Math.min(total - startAt, MUSIC.length - offset));
  const auto = JSON.stringify({ version: 1, lanes: [{ target: "volume", points: pts }] });
  audio.push(
    `    <audio id="bgm" src="${MUSIC.src}" data-start="${startAt}" data-duration="${dur}" data-media-start="${offset}" data-track-index="21" data-volume="1" data-fade-in="1.2" data-automation='${auto}'></audio>`,
  );
}

const hosts = overlays
  .filter((o) => existsSync(join(ROOT, o.src)))
  .map(
    (o, i) =>
      `    <div id="${o.id}" data-composition-id="${o.id}" data-composition-src="${o.src}" data-start="${o.start}" data-duration="${r3(o.end - o.start)}" data-track-index="${i + 2}" data-track-kind="graphics" data-width="1920" data-height="1080"></div>`,
  )
  .join("\n");

writeFileSync(
  join(ROOT, "index.html"),
  `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1920, height=1080" />
    <title>FEG — Les archives (mannequins)</title>
    <script src="lib/gsap.min.js"></script>
    <script src="assets/cues.js"></script>
    <style>
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
        background: #1b1d1c;
      }
      #root {
        position: relative;
        width: 1920px;
        height: 1080px;
        overflow: hidden;
        background: #1b1d1c;
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
`,
);
console.log(`total ${total} s · logo ${LOGO_T} s · musique depuis ${offset} s (à ${startAt} s)`);
for (const id of order) console.log(id, lines[id].start, "→", lines[id].end);
for (const o of overlays) console.log(o.id, o.start, "→", o.end);
