// Sous-titres incrustés (16:9) d'un film FEG.
// Les groupes de <projet>/tools/captions.json (écrits à la main, en graphie d'écran) sont calés sur les mots
// de la voix (<projet>/assets/cues.js, produit par le tools/build.mjs du projet).
// Écrit dans le projet :
//   compositions/cap.html : la piste de sous-titres (un groupe à la fois) ;
//   captions.html         : une racine temporaire qui ne contient que cette piste, rendue en transparence
//                           puis incrustée sur le rendu du film ; sous-titrer.sh la supprime après le rendu
//                           (un projet ne doit garder qu'une racine, index.html).
//
// tools/captions.json : { "L01": ["groupe", …], …, "_subst": [["mots dits", "graphie"], …], "_style": { … } }
//   - chaque groupe reprend, dans l'ordre, les mots dits de la phrase (la ponctuation et la casse peuvent différer) ;
//   - "_subst" remplace d'abord une suite de mots dits par une graphie d'écran (« mille neuf cent cinquante-neuf » → « 1959 ») ;
//   - "_style" (facultatif) : bottom, fontSize, bg, color, maxWidth ;
//   - un groupe peut être { "t": "…", "align": "left" | "right", "bottom": 24 } pour s'écarter d'un élément du film
//     (sur le côté, à 96 px du bord, ou plus bas).
//
// Usage : node sous-titres/captions.mjs <dossier du projet>
import { readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const P = resolve(process.argv[2] || ".");
const cuesSrc = readFileSync(join(P, "assets/cues.js"), "utf8");
const m = /window\.(__[A-Z_]*CUES)\s*=\s*(\{[\s\S]*?\});\n/.exec(cuesSrc);
if (!m) throw new Error("assets/cues.js : données introuvables");
const C = JSON.parse(m[2]);
const CAPS = JSON.parse(readFileSync(join(P, "tools/captions.json"), "utf8"));
// sous les étiquettes des films (50 px du bas), 48 px : lisible sur un téléphone ; vert foncé de la FEG, texte blanc
const ST = Object.assign({ bottom: 50, fontSize: 48, bg: "rgba(6, 61, 33, 0.88)", color: "#ffffff", maxWidth: 1560 }, CAPS._style || {});

const norm = (s) =>
  String(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9%]+/g, "");
const r3 = (x) => Math.round(x * 1000) / 1000;
const trail = (w) => (/\s*[,.;:!?»]+$/.exec(w) || [""])[0];
// la ponctuation haute se colle au mot précédent par une espace insécable
const nb = (s) => s.replace(/ ([:;!?»%])/g, " $1");

const SUBST = (CAPS._subst || []).map(([said, shown]) => ({ toks: said.split(/\s+/).map(norm), shown })).sort((a, b) => b.toks.length - a.toks.length);

const groups = [];
for (const id of C.order) {
  const words = C.lines[id].words;
  // mots dits → mots d'écran (les suites de « _subst » fusionnent en un seul mot)
  const out = [];
  for (let i = 0; i < words.length; ) {
    const hit = SUBST.find((s) => s.toks.every((t, k) => words[i + k] && norm(words[i + k].w) === t));
    if (hit) {
      const last = words[i + hit.toks.length - 1];
      out.push({ t: hit.shown + trail(last.w), s: words[i].s, e: last.e });
      i += hit.toks.length;
    } else if (/^[:;!?»]$/.test(words[i].w) && out.length) {
      // ponctuation haute calée comme un mot à part (anciens calages) : rattachée au mot précédent
      out[out.length - 1].t += " " + words[i].w;
      out[out.length - 1].e = words[i].e;
      i++;
    } else if (words[i].w === "%" && out.length) {
      // « 80 % » : le signe se colle au nombre
      out[out.length - 1].t += "\u00a0%";
      out[out.length - 1].e = words[i].e;
      i++;
    } else {
      out.push({ t: words[i].w, s: words[i].s, e: words[i].e });
      i++;
    }
  }
  const phrases = CAPS[id];
  if (!phrases) throw new Error(`${id} : pas de sous-titres dans tools/captions.json`);
  let k = 0;
  for (const it of phrases) {
    const ph = typeof it === "string" ? it : it.t;
    const align = typeof it === "string" ? "center" : it.align || "center";
    const bottom = typeof it === "string" || it.bottom == null ? null : it.bottom;
    const toks = nb(ph).split(" ").filter(Boolean);
    const take = out.slice(k, k + toks.length);
    const ok = take.length === toks.length && take.every((w, j) => norm(w.t) === norm(toks[j]));
    if (!ok) throw new Error(`${id} : « ${ph} » ne correspond pas à « ${take.map((w) => w.t).join(" ")} »`);
    groups.push({ id, text: nb(ph), align, bottom, s: take[0].s, e: take[take.length - 1].e });
    k += toks.length;
  }
  if (k !== out.length) throw new Error(`${id} : ${out.length - k} mot(s) dit(s) sans sous-titre (« ${out.slice(k).map((w) => w.t).join(" ")} »)`);
}
// chaque groupe s'ouvre un peu avant son premier mot et reste 0,3 s après le dernier, sans chevaucher le suivant
groups.forEach((g, i) => {
  g.s = r3(Math.max(0.15, g.s - 0.08));
  const nextS = groups[i + 1] ? groups[i + 1].s - 0.08 : C.total;
  g.e = r3(Math.min(g.e + 0.3, nextS - 0.02));
});

const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const cap = `<template>
  <!-- Sous-titres de la voix off, un groupe à la fois. Généré par sous-titres/captions.mjs depuis tools/captions.json. -->
  <style>
    @font-face {
      font-family: "Hyundai Sans Text";
      font-weight: 500;
      src: url("assets/fonts/HyundaiSansText-Medium.woff2") format("woff2");
    }
    #root {
      position: absolute;
      inset: 0;
      font-family: "Hyundai Sans Text", sans-serif;
    }
    .cg {
      position: absolute;
      left: 0;
      bottom: ${ST.bottom}px;
      width: 1920px;
      text-align: center;
      opacity: 0;
    }
    .cg.l {
      padding-left: 96px;
      text-align: left;
    }
    .cg.r {
      padding-right: 96px;
      text-align: right;
    }
    .cg span {
      display: inline-block;
      max-width: ${ST.maxWidth}px;
      padding: 12px 30px 14px;
      border-radius: 14px;
      background: ${ST.bg};
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
      font-weight: 500;
      font-size: ${ST.fontSize}px;
      line-height: 1.24;
      color: ${ST.color};
    }
  </style>
  <div id="root" data-composition-id="cap" data-width="1920" data-height="1080">
${groups.map((g, i) => `    <div id="cg${i}" class="cg${g.align === "left" ? " l" : g.align === "right" ? " r" : ""}"${g.bottom != null ? ` style="bottom: ${g.bottom}px"` : ""}><span>${esc(g.text)}</span></div>`).join("\n")}
  </div>
  <script>
    (function () {
      // un groupe à la fois : entrée 0,1 s, sortie 0,08 s, puis masqué net (pas de groupe resté à l'écran)
      var G = ${JSON.stringify(groups.map((g) => [g.s, g.e]))};
      var tl = gsap.timeline({ paused: true });
      G.forEach(function (g, i) {
        tl.fromTo("#cg" + i, { opacity: 0 }, { opacity: 1, duration: 0.1, ease: "power2.out" }, g[0]);
        tl.to("#cg" + i, { opacity: 0, duration: 0.08, ease: "power2.in" }, g[1] - 0.08);
        tl.set("#cg" + i, { opacity: 0, visibility: "hidden" }, g[1]);
      });
      window.__timelines["cap"] = tl;
    })();
  </script>
</template>
`;
writeFileSync(join(P, "compositions/cap.html"), cap);

const root = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1920, height=1080" />
    <title>Sous-titres (couche transparente)</title>
    <!-- Généré par sous-titres/captions.mjs : la seule piste de sous-titres, sur fond transparent,
         à rendre en WebM avec transparence puis à incruster sur le film (sous-titres/incruste.sh). -->
    <script src="lib/gsap.min.js"></script>
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
        background: transparent;
      }
      #root {
        position: relative;
        width: 1920px;
        height: 1080px;
        overflow: hidden;
        background: transparent;
      }
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="subs" data-start="0" data-duration="${C.total}" data-width="1920" data-height="1080">
      <div id="cap" data-composition-id="cap" data-composition-src="compositions/cap.html" data-start="0" data-duration="${C.total}" data-track-index="1" data-track-kind="captions" data-width="1920" data-height="1080"></div>
    </div>
    <script>
      window.__timelines = window.__timelines || {};
      window.__timelines["subs"] = gsap.timeline({ paused: true });
    </script>
  </body>
</html>
`;
writeFileSync(join(P, "captions.html"), root);
const longest = groups.reduce((a, g) => (g.text.length > a.text.length ? g : a), groups[0]);
const minDur = groups.reduce((a, g) => Math.min(a, g.e - g.s), 1e9);
console.log(`${groups.length} groupes · durée ${C.total} s · le plus long : « ${longest.text} » (${longest.text.length} signes) · le plus bref à l'écran : ${minDur.toFixed(2)} s`);
