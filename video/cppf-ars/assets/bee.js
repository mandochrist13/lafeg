// L'abeille de la CPPF : présentatrice adulte, en buste (comme l'avatar de la vidéo e.cnss).
// Tailleur bleu CPPF, rayures d'abeille dans l'encolure, coiffe sombre, antennes coudées, ailes fines.
// BEE.svg(id, opts) renvoie le SVG ; BEE.prep(id) règle les origines ; les helpers posent les
// animations dans une timeline GSAP (tout est fonction du temps : déterministe au seek).
(function () {
  const B = {};
  // repère : viewBox 0 0 640 800 ; tête centrée en (320, 236) ; le buste continue sous y = 800
  B.W = 640;
  B.H = 800;
  const C = {
    f1: "#FFD873", // visage : lumière
    f2: "#F2B636", // visage : ton moyen
    f3: "#DB9419", // visage : ombre
    hair: "#2A1A10", // coiffe (le duvet sombre de la tête)
    hair2: "#46301F",
    brow: "#2A1A10",
    iris1: "#B5772E",
    iris2: "#5C3514",
    liner: "#24150C",
    lip1: "#A5424E",
    lip2: "#BF5D69",
    lipLine: "#6B2530",
    jk1: "#4A84C8", // tailleur : lumière
    jk2: "#3368AC", // tailleur
    jk3: "#244F88", // tailleur : ombre
    jkLine: "#1D4274",
    cuff: "#F4F6FA",
    stripe: "#2A1A10",
    green: "#1FA05A",
    blue: "#3A75BC",
    yellow: "#F6CF2A",
  };
  B.C = C;

  const f = (n) => Math.round(n * 10) / 10;
  // segment effilé à bouts ronds, de (x1,y1) à (x2,y2), largeurs w1 → w2
  function limb(x1, y1, x2, y2, w1, w2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const L = Math.hypot(dx, dy);
    const nx = -dy / L;
    const ny = dx / L;
    const a = [x1 + (nx * w1) / 2, y1 + (ny * w1) / 2];
    const b = [x2 + (nx * w2) / 2, y2 + (ny * w2) / 2];
    const c = [x2 - (nx * w2) / 2, y2 - (ny * w2) / 2];
    const d = [x1 - (nx * w1) / 2, y1 - (ny * w1) / 2];
    return `M ${f(a[0])} ${f(a[1])} L ${f(b[0])} ${f(b[1])} A ${f(w2 / 2)} ${f(w2 / 2)} 0 0 0 ${f(c[0])} ${f(c[1])} L ${f(d[0])} ${f(d[1])} A ${f(w1 / 2)} ${f(w1 / 2)} 0 0 0 ${f(a[0])} ${f(a[1])} Z`;
  }

  // ---------------------------------------------------------------- mains (repère canonique :
  // poignet en (0,0), doigts vers +x ; s = 1 pouce côté −y, s = −1 pouce côté +y)
  function handRest(s) {
    const t = (d) => d;
    return (
      `<g transform="scale(1 ${s})">` +
      `<path d="${t("M -2 -12 C 10 -16 24 -16 35 -14 C 47 -12 57 -9 61 -2 C 64 6 59 13 50 14 C 37 16 21 16 7 14 C 0 13 -4 8 -4 0 C -4 -6 -4 -10 -2 -12 Z")}" fill="url(#beeHand)" stroke="#160C06" stroke-width="1.6"/>` +
      `<path d="${t("M 37 -6 C 47 -6 55 -4 60 -1 M 37 2 C 47 3 54 4 59 6 M 35 9 C 43 11 49 12 54 13")}" fill="none" stroke="rgba(255,226,190,0.22)" stroke-width="1.5" stroke-linecap="round"/>` +
      `<path d="${t("M 5 -11 C 13 -23 28 -25 38 -19 C 42 -16 40 -12 34 -12 C 26 -13 17 -11 10 -7 Z")}" fill="url(#beeHand)" stroke="#160C06" stroke-width="1.6"/>` +
      `</g>`
    );
  }
  function handOpen(s) {
    // paume ouverte, doigts tendus et légèrement écartés ; pouce côté −y si s = 1
    const t = (d) => d;
    const fingers = [
      [-11, 27, -9],
      [-3.6, 31, -3],
      [3.6, 29, 3],
      [10.6, 23, 9],
    ]
      .map(([y, len, ang]) => {
        const r = (ang * Math.PI) / 180;
        const x1 = 26;
        const x2 = x1 + Math.cos(r) * len;
        const y2 = y + Math.sin(r) * len;
        return `<path d="${t(limb(x1, y, x2, y2, 9.2, 8.4))}" fill="url(#beeHand)" stroke="#160C06" stroke-width="1.4"/>`;
      })
      .join("");
    return (
      `<g transform="scale(1 ${s})">` +
      fingers +
      `<path d="${t("M -3 -13 C 8 -17 22 -16 30 -13 C 33 -6 33 6 30 14 C 22 17 8 17 -3 13 C -6 6 -6 -6 -3 -13 Z")}" fill="url(#beeHand)" stroke="#160C06" stroke-width="1.4"/>` +
      `<path d="${t(limb(6, -12, 24, -29, 9.5, 8))}" fill="url(#beeHand)" stroke="#160C06" stroke-width="1.4"/>` +
      `<path d="${t("M 6 -4 C 13 -1 18 4 20 10")}" fill="none" stroke="rgba(255,226,190,0.2)" stroke-width="1.4" stroke-linecap="round"/>` +
      `</g>`
    );
  }

  // bras : épaule → coude → poignet ; trois groupes imbriqués (rotation à l'épaule, au coude, au poignet)
  function arm(id, side, S, E, W, restRot, mirror) {
    // side : "R" (bras droit de l'abeille, à gauche de l'écran) ou "L"
    const fa = (Math.atan2(W[1] - E[1], W[0] - E[0]) * 180) / Math.PI;
    const s = mirror ? -1 : 1;
    return (
      `<g id="${id}-arm${side}" data-ox="${S[0]}" data-oy="${S[1]}">` +
      // manche du haut
      `<path d="${limb(S[0], S[1], E[0], E[1], 60, 52)}" fill="url(#beeSleeve)"/>` +
      `<path d="M ${E[0] - 18} ${E[1] - 14} Q ${E[0]} ${E[1] - 4} ${E[0] + 18} ${E[1] - 14}" fill="none" stroke="${C.jkLine}" stroke-width="1.6" opacity="0.45"/>` +
      `<g id="${id}-fore${side}" data-ox="${E[0]}" data-oy="${E[1]}">` +
      `<path d="${limb(E[0], E[1], W[0], W[1], 52, 44)}" fill="url(#beeSleeve)"/>` +
      `<path d="${limb(E[0], E[1], W[0], W[1], 52, 44)}" fill="none" stroke="${C.jkLine}" stroke-width="1.6" opacity="0.5"/>` +
      // poignet de chemise blanche
      `<g transform="translate(${W[0]} ${W[1]}) rotate(${f(fa)})"><rect x="-10" y="-22" width="13" height="44" rx="5" fill="${C.cuff}"/><rect x="-10" y="-22" width="4" height="44" rx="2" fill="#D9DEE8"/></g>` +
      `<g id="${id}-hand${side}" data-ox="${W[0]}" data-oy="${W[1]}">` +
      `<g id="${id}-hand${side}-rest" transform="translate(${W[0]} ${W[1]}) rotate(${f(fa + restRot)}) scale(1.38)">${handRest(mirror ? -1 : 1)}</g>` +
      `<g id="${id}-hand${side}-open" opacity="0" transform="translate(${W[0]} ${W[1]}) rotate(${f(fa)}) scale(1.38)">${handOpen(mirror ? 1 : -1)}</g>` +
      `</g>` +
      `</g>` +
      `</g>`
    );
  }

  // collerette : demi-ellipse sous le menton, festonnée
  function ruff() {
    const cx = 320, cy = 372, rx = 98, ry = 58, n = 6;
    let d = `M ${cx + rx} ${cy}`;
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI;
      const a1 = ((i + 1) / n) * Math.PI;
      const am = (a0 + a1) / 2;
      const px = cx + Math.cos(a1) * rx;
      const py = cy + Math.sin(a1) * ry;
      const qx = cx + Math.cos(am) * (rx + 9);
      const qy = cy + Math.sin(am) * (ry + 9);
      d += ` Q ${f(qx)} ${f(qy)} ${f(px)} ${f(py)}`;
    }
    d += ` C ${cx - rx + 4} ${cy - 30} ${cx - 70} ${cy - 44} ${cx} ${cy - 40} C ${cx + 70} ${cy - 44} ${cx + rx - 4} ${cy - 30} ${cx + rx} ${cy} Z`;
    return d;
  }

  // aile : base (x, y), longueur L, largeur k, angle (degrés) ; pivot à la base
  function wing(id, x, y, L, k, ang) {
    const p = (u, v) => `${f(u * L)} ${f(v * k)}`;
    const outline = `M 0 0 C ${p(0.16, -0.95)} ${p(0.62, -1.15)} ${p(0.9, -0.62)} C ${p(1.02, -0.3)} ${p(1.0, 0.32)} ${p(0.86, 0.5)} C ${p(0.62, 0.86)} ${p(0.22, 0.7)} 0 0 Z`;
    const veins = `M 0 0 C ${p(0.3, -0.42)} ${p(0.62, -0.58)} ${p(0.92, -0.42)} M ${p(0.1, 0.04)} C ${p(0.36, 0.08)} ${p(0.62, 0.12)} ${p(0.9, 0.26)} M ${p(0.46, -0.5)} C ${p(0.5, -0.2)} ${p(0.52, 0.04)} ${p(0.5, 0.1)} M ${p(0.7, -0.52)} C ${p(0.74, -0.2)} ${p(0.74, 0.06)} ${p(0.72, 0.16)}`;
    return (
      `<g id="${id}" data-ox="${x}" data-oy="${y}">` +
      `<g transform="translate(${x} ${y}) rotate(${ang})">` +
      `<path d="${outline}" fill="url(#beeWing)" stroke="rgba(84,114,160,0.7)" stroke-width="2.4"/>` +
      `<path d="${veins}" fill="none" stroke="rgba(78,102,148,0.5)" stroke-width="1.7" stroke-linecap="round"/>` +
      `<path d="M ${p(0.3, -0.62)} C ${p(0.5, -0.86)} ${p(0.72, -0.84)} ${p(0.84, -0.62)}" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="3" stroke-linecap="round"/>` +
      `</g>` +
      `</g>`
    );
  }

  // œil gauche de l'écran (cx = 281) ; l'autre est son miroir
  function eye(id, side, mirror) {
    const X = (x) => (mirror ? f(640 - x) : x);
    const P = (d) => d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (m, x, y) => `${X(+x)} ${y}`);
    const cx = X(282);
    const bee = B.EYES === "bee"; // essai écarté : globe sombre, effet « lunettes »
    const sclera = P("M 252 242 C 259 226 276 219 293 221 C 303 223 309 230 312 239 C 304 251 291 257 277 256 C 265 255 256 250 252 242 Z");
    return (
      `<g id="${id}-eye${side}" data-ox="${cx}" data-oy="240">` +
      // fard léger et pli de la paupière
      `<path d="${P("M 250 234 C 258 212 286 204 312 218 C 300 214 274 216 252 238 Z")}" fill="rgba(166,86,20,0.18)" filter="url(#${id}-soft)"/>` +
      `<path d="${P("M 256 219 C 269 207 292 203 309 211")}" fill="none" stroke="rgba(136,72,16,0.34)" stroke-width="1.8" stroke-linecap="round"/>` +
      `<path d="${sclera}" fill="${bee ? "url(#beeEyeDark)" : "#FFFDF6"}"/>` +
      `<clipPath id="${id}-clip${side}"><path d="${sclera}"/></clipPath>` +
      `<g clip-path="url(#${id}-clip${side})">` +
      `<g id="${id}-pup${side}">` +
      (bee
        ? `<circle cx="${X(284)}" cy="239" r="15" fill="#4A2C17" opacity="0.85"/><circle cx="${X(284)}" cy="239" r="8" fill="#170C05"/><ellipse cx="${X(276)}" cy="231" rx="13" ry="6" transform="rotate(-18 ${X(276)} 231)" fill="rgba(255,255,255,0.16)"/>`
        : `<circle cx="${X(284)}" cy="238.5" r="13.6" fill="url(#beeIris)"/>` +
          `<circle cx="${X(284)}" cy="238.5" r="13.6" fill="none" stroke="${C.iris2}" stroke-width="2"/>` +
          `<circle cx="${X(284)}" cy="238.5" r="6.2" fill="#120A05"/>`) +
      `<circle cx="${X(289)}" cy="233.5" r="3.6" fill="rgba(255,255,255,0.95)"/>` +
      `<circle cx="${X(279)}" cy="244" r="1.7" fill="rgba(255,255,255,0.6)"/>` +
      `</g>` +
      // ombre de la paupière supérieure sur le globe
      `<path d="${P("M 250 233 C 262 219 290 215 314 235 L 314 226 L 250 224 Z")}" fill="rgba(120,64,14,0.16)"/>` +
      `</g>` +
      // trait de paupière (un peu d'eye-liner) et deux cils discrets au coin externe
      `<path d="${P("M 244 232 C 256 219 276 213 294 216 C 304 218 310 226 313 238 C 306 229 298 224 290 223.5 C 274 223 262 230 252 242 C 250 238 247 234 244 232 Z")}" fill="${C.liner}"/>` +
      `<path d="${P("M 250 231 C 246 227 242 225 238 224 M 256 226 C 252 221 249 218 246 216 M 263 222 C 261 217 259 213 257 210")}" fill="none" stroke="${C.liner}" stroke-width="2" stroke-linecap="round"/>` +
      `<path d="${P("M 258 249 C 270 254.5 291 254.5 305 246.5")}" fill="none" stroke="rgba(110,56,14,0.45)" stroke-width="1.6" stroke-linecap="round"/>` +
      `</g>`
    );
  }

  B.svg = function (id, opts) {
    opts = opts || {};
    const w = opts.w || 320;
    const h = (w * B.H) / B.W;
    // rayures d'abeille dans l'encolure (le thorax sous le tailleur)
    const stripes = [432, 482, 532, 582]
      .map((y) => `<path d="M 250 ${y} Q 320 ${y + 12} 390 ${y} L 390 ${y + 24} Q 320 ${y + 36} 250 ${y + 24} Z" fill="${C.stripe}"/>`)
      .join("");
    return (
      `<svg id="${id}" class="bee" width="${w}" height="${f(h)}" viewBox="0 0 ${B.W} ${B.H}" style="overflow:visible" data-layout-allow-overflow>` +
      `<defs>` +
      `<linearGradient id="beeFace" x1="0" y1="0" x2="0.25" y2="1"><stop offset="0" stop-color="#F7C766"/><stop offset="0.55" stop-color="#ECAD48"/><stop offset="1" stop-color="#DE9A3C"/></linearGradient>` +
      `<linearGradient id="beeNeck" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C98317"/><stop offset="0.5" stop-color="#E0A02A"/><stop offset="1" stop-color="#E9AE32"/></linearGradient>` +
      `<radialGradient id="beeHair" cx="0.38" cy="0.22" r="0.85"><stop offset="0" stop-color="${C.hair2}"/><stop offset="0.6" stop-color="${C.hair}"/><stop offset="1" stop-color="#1C110A"/></radialGradient>` +
      `<radialGradient id="beeEyeDark" cx="0.45" cy="0.65" r="0.75"><stop offset="0" stop-color="#3B2414"/><stop offset="0.7" stop-color="#1E1209"/><stop offset="1" stop-color="#120A05"/></radialGradient>` +
      `<radialGradient id="beeIris" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="${C.iris1}"/><stop offset="0.7" stop-color="#8A5320"/><stop offset="1" stop-color="${C.iris2}"/></radialGradient>` +
      `<linearGradient id="beeWing" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="rgba(222,238,255,0.78)"/><stop offset="0.55" stop-color="rgba(206,226,250,0.56)"/><stop offset="1" stop-color="rgba(234,216,250,0.5)"/></linearGradient>` +
      `<linearGradient id="beeJacket" gradientUnits="userSpaceOnUse" x1="200" y1="380" x2="440" y2="830"><stop offset="0" stop-color="${C.jk1}"/><stop offset="0.35" stop-color="${C.jk2}"/><stop offset="1" stop-color="${C.jk3}"/></linearGradient>` +
      `<linearGradient id="beeSleeve" gradientUnits="userSpaceOnUse" x1="200" y1="380" x2="440" y2="830"><stop offset="0" stop-color="${C.jk1}"/><stop offset="0.35" stop-color="${C.jk2}"/><stop offset="1" stop-color="${C.jk3}"/></linearGradient>` +
      `<linearGradient id="beeLapel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5590D2"/><stop offset="1" stop-color="#3A72B6"/></linearGradient>` +
      `<radialGradient id="beeHand" cx="0.4" cy="0.35" r="0.8"><stop offset="0" stop-color="#6A4A30"/><stop offset="0.55" stop-color="#3E2817"/><stop offset="1" stop-color="#25160C"/></radialGradient>` +
      `<radialGradient id="beeCrown" cx="0.4" cy="0.2" r="0.9"><stop offset="0" stop-color="#5A3C26"/><stop offset="0.55" stop-color="#2E1D12"/><stop offset="1" stop-color="#1E120A"/></radialGradient>` +
      `<radialGradient id="beeRuff" cx="0.5" cy="0.2" r="0.9"><stop offset="0" stop-color="#F9D27C"/><stop offset="0.6" stop-color="#ECAD48"/><stop offset="1" stop-color="#C98836"/></radialGradient>` +
      `<filter id="${id}-fur" x="-8%" y="-8%" width="116%" height="116%"><feTurbulence type="fractalNoise" baseFrequency="0.42" numOctaves="1" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="6" xChannelSelector="R" yChannelSelector="G"/></filter>` +
      `<filter id="${id}-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="4"/></filter>` +
      `<filter id="${id}-softer" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="9"/></filter>` +
      `<clipPath id="${id}-vclip"><path d="M 266 384 L 374 384 L 320 604 Z"/></clipPath>` +
      `</defs>` +
      // ombre portée (inutilisée en buste, gardée pour l'API)
      `<ellipse id="${id}-shadow" cx="320" cy="790" rx="1" ry="1" fill="none"/>` +
      `<g id="${id}-all">` +
      // ailes, derrière les épaules
      `<g id="${id}-wings">` +
      wing(`${id}-wl2`, 252, 452, 150, 44, -150) +
      wing(`${id}-wr2`, 388, 452, 150, 44, -30) +
      wing(`${id}-wl1`, 256, 430, 232, 62, -126) +
      wing(`${id}-wr1`, 384, 430, 232, 62, -54) +
      `</g>` +
      // buste : tailleur, encolure rayée, revers, épingle
      `<g id="${id}-body">` +
      `<path d="M 264 380 C 232 388 204 396 182 408 C 156 422 144 446 142 482 C 140 546 156 610 178 664 C 184 706 176 766 166 830 L 474 830 C 464 766 456 706 462 664 C 484 610 500 546 498 482 C 496 446 484 422 458 408 C 436 396 408 388 376 380 Z" fill="url(#beeJacket)"/>` +
      // cou
      `<path d="M 296 318 L 344 318 L 350 398 L 290 398 Z" fill="url(#beeNeck)"/>` +
      `<ellipse cx="320" cy="350" rx="34" ry="14" fill="rgba(120,62,10,0.35)" filter="url(#${id}-soft)"/>` +
      // thorax rayé dans l'encolure, avec un col de duvet
      `<g clip-path="url(#${id}-vclip)">` +
      `<rect x="250" y="370" width="140" height="240" fill="#ECAD48"/>` +
      stripes +
      `<path d="M 270 384 Q 320 404 370 384 L 370 398 Q 320 418 270 398 Z" fill="#F7C24A"/>` +
      `<path d="M 266 384 L 320 604" stroke="rgba(0,0,0,0.2)" stroke-width="14" filter="url(#${id}-soft)"/>` +
      `<path d="M 374 384 L 320 604" stroke="rgba(0,0,0,0.2)" stroke-width="14" filter="url(#${id}-soft)"/>` +
      `</g>` +
      // col du tailleur derrière la nuque
      `<path d="M 268 384 C 286 366 354 366 372 384 L 368 394 C 350 380 290 380 272 394 Z" fill="${C.jk3}"/>` +
      // revers
      `<path d="M 266 382 L 320 604 L 306 608 C 288 556 264 490 242 440 L 230 432 L 244 410 C 250 398 258 388 266 382 Z" fill="url(#beeLapel)" stroke="${C.jkLine}" stroke-width="1.6"/>` +
      `<path d="M 374 382 L 320 604 L 334 608 C 352 556 376 490 398 440 L 410 432 L 396 410 C 390 398 382 388 374 382 Z" fill="url(#beeLapel)" stroke="${C.jkLine}" stroke-width="1.6"/>` +
      // fermeture, bouton, poche poitrine
      `<path d="M 320 604 L 320 830" stroke="${C.jkLine}" stroke-width="2.2"/>` +
      `<circle cx="331" cy="630" r="7.5" fill="${C.jk3}" stroke="${C.jkLine}" stroke-width="1.6"/><circle cx="329" cy="628" r="2.2" fill="rgba(255,255,255,0.35)"/>` +
      `<path d="M 196 500 L 236 496" stroke="${C.jkLine}" stroke-width="2.4" stroke-linecap="round"/>` +
      // épingle hexagonale aux trois couleurs de la CPPF
      `<g transform="translate(386 486) rotate(-14)">` +
      `<path d="M 0 -13 L 11.3 -6.5 L 11.3 6.5 L 0 13 L -11.3 6.5 L -11.3 -6.5 Z" fill="#E9C46A" stroke="#B88A1E" stroke-width="1.4"/>` +
      `<path d="M 0 -9.5 L 8.2 -4.7 L 0 0 L -8.2 -4.7 Z" fill="${C.green}"/>` +
      `<path d="M -8.2 -4.7 L 0 0 L 0 9.5 L -8.2 4.7 Z" fill="${C.yellow}"/>` +
      `<path d="M 8.2 -4.7 L 8.2 4.7 L 0 9.5 L 0 0 Z" fill="${C.blue}"/>` +
      `</g>` +
      // coutures princesse, piqûre des revers, ombres sur les côtés
      `<path d="M 212 424 C 224 500 232 600 222 830 M 428 424 C 416 500 408 600 418 830" fill="none" stroke="${C.jkLine}" stroke-width="1.8" opacity="0.45"/>` +
      `<path d="M 302 590 C 286 544 264 486 248 446 M 338 590 C 354 544 376 486 392 446" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.4" stroke-dasharray="3 4"/>` +
      `<path d="M 142 482 C 140 546 156 610 178 664 C 184 706 176 766 166 830 L 200 830 C 206 760 210 700 204 660 C 188 604 178 544 178 482 Z" fill="rgba(16,36,70,0.22)" filter="url(#${id}-soft)"/>` +
      `<path d="M 498 482 C 500 546 484 610 462 664 C 456 706 464 766 474 830 L 440 830 C 434 760 430 700 436 660 C 452 604 462 544 462 482 Z" fill="rgba(16,36,70,0.28)" filter="url(#${id}-soft)"/>` +
      // collerette de duvet (le thorax de l'abeille), par-dessus le col
      `<g filter="url(#${id}-fur)"><path d="${ruff()}" fill="url(#beeRuff)"/></g>` +
      `<path d="M 236 398 C 268 424 372 424 404 398" fill="none" stroke="rgba(176,104,30,0.3)" stroke-width="8" stroke-linecap="round" filter="url(#${id}-soft)"/>` +
      // lumière sur les épaules
      `<path d="M 180 420 C 200 406 234 396 262 390" fill="none" stroke="rgba(255,255,255,0.16)" stroke-width="10" stroke-linecap="round" filter="url(#${id}-soft)"/>` +
      `<path d="M 460 420 C 440 406 406 396 378 390" fill="none" stroke="rgba(255,255,255,0.10)" stroke-width="10" stroke-linecap="round" filter="url(#${id}-soft)"/>` +
      `</g>` +
      // bras (mains jointes au repos)
      arm(id, "L", [456, 458], [482, 636], [356, 712], 14, true) +
      arm(id, "R", [184, 458], [158, 636], [284, 712], -14, false) +
      // tête : balancement (cou) puis tête (hochement, inclinaison)
      `<g id="${id}-neck" data-ox="320" data-oy="372">` +
      `<g id="${id}-head" data-ox="320" data-oy="372">` +
      // antennes coudées (pivot à leur base)
      `<g id="${id}-antL" data-ox="294" data-oy="120"><path d="M 294 120 L 274 62" stroke="${C.hair}" stroke-width="7" stroke-linecap="round"/><path d="M 274 62 C 262 42 246 30 224 24" fill="none" stroke="${C.hair}" stroke-width="5.5" stroke-linecap="round"/><ellipse cx="222" cy="24" rx="7" ry="5.5" transform="rotate(-18 222 24)" fill="${C.hair}"/></g>` +
      `<g id="${id}-antR" data-ox="346" data-oy="120"><path d="M 346 120 L 366 62" stroke="${C.hair}" stroke-width="7" stroke-linecap="round"/><path d="M 366 62 C 378 42 394 30 416 24" fill="none" stroke="${C.hair}" stroke-width="5.5" stroke-linecap="round"/><ellipse cx="418" cy="24" rx="7" ry="5.5" transform="rotate(18 418 24)" fill="${C.hair}"/></g>` +
      // tête en fourrure dorée, bords duveteux ; marque sombre en pointe sur le front
      `<g filter="url(#${id}-fur)">` +
      `<path d="M 320 120 C 380 120 420 166 420 232 C 420 290 390 338 348 356 C 332 362 308 362 292 356 C 250 338 220 290 220 232 C 220 166 260 120 320 120 Z" fill="url(#beeFace)"/>` +
      `<path d="M 219 224 C 216 158 258 106 320 106 C 382 106 424 158 421 224 C 410 200 394 182 372 175 C 354 170 338 166 320 184 C 302 166 286 170 268 175 C 246 182 230 200 219 224 Z" fill="url(#beeCrown)"/>` +
      `</g>` +
      `<path d="M 246 160 C 268 134 300 124 330 124 M 352 128 C 374 134 394 148 406 166" fill="none" stroke="rgba(255,226,180,0.2)" stroke-width="7" stroke-linecap="round" filter="url(#${id}-soft)"/>` +
      // modelé : joues, museau plus clair, lumière
      `<path d="M 404 214 C 420 262 410 320 352 352 C 372 330 390 300 392 262 C 393 242 398 226 404 214 Z" fill="rgba(196,118,30,0.45)" filter="url(#${id}-soft)"/>` +
      `<path d="M 236 232 C 234 266 246 298 270 322" fill="none" stroke="rgba(255,226,160,0.4)" stroke-width="12" stroke-linecap="round" filter="url(#${id}-soft)"/>` +
      `<path d="M 224 220 C 242 194 268 180 292 180 M 348 180 C 372 180 398 194 416 220" fill="none" stroke="rgba(150,86,16,0.35)" stroke-width="7" stroke-linecap="round" filter="url(#${id}-soft)"/>` +
      `<ellipse cx="320" cy="310" rx="46" ry="32" fill="#FBDB98" opacity="0.5" filter="url(#${id}-softer)"/>` +
      // sourcils : fines marques ambrées
      `<path id="${id}-browL" d="M 248 206 C 260 193 280 188 302 192 C 304 193 304 195 302 195.5 C 281 193 263 198 251 208 Z" fill="#6E3E10"/>` +
      `<path id="${id}-browR" d="M 392 206 C 380 193 360 188 338 192 C 336 193 336 195 338 195.5 C 359 193 377 198 389 208 Z" fill="#6E3E10"/>` +
      `<g transform="translate(282 239) scale(1.08) translate(-282 -239)">${eye(id, "L", false)}</g>` +
      `<g transform="translate(358 239) scale(1.08) translate(-358 -239)">${eye(id, "R", true)}</g>` +
      // bouche : lèvre du haut fixe ; bouche fermée (sourire) ; bouche ouverte (écrasée selon la voix)
      `<path d="M 294 316 C 302 312 312 310 320 314 C 328 310 338 312 346 316 C 336 319.5 328 320.5 320 320.5 C 312 320.5 304 319.5 294 316 Z" fill="${C.lip1}"/>` +
      `<g id="${id}-mClosed">` +
      `<path d="M 298 319 C 305 330 335 330 342 319 C 335 323 305 323 298 319 Z" fill="${C.lip2}"/>` +
      `<ellipse cx="322" cy="324.5" rx="7" ry="2" fill="rgba(255,255,255,0.32)"/>` +
      `<path d="M 288 310.5 C 297 322 343 322 352 310.5" fill="none" stroke="${C.lipLine}" stroke-width="2.2" stroke-linecap="round"/>` +
      `</g>` +
      `<g id="${id}-mOpen" data-ox="320" data-oy="318" opacity="0">` +
      `<path d="M 296 318 C 305 316 335 316 344 318 C 341 335 331 343 320 343 C 309 343 299 335 296 318 Z" fill="#5A1D25"/>` +
      `<path d="M 301 318.5 C 310 317.5 330 317.5 339 318.5 L 337.5 324 C 329 326 311 326 302.5 324 Z" fill="#FFFFFF" opacity="0.95"/>` +
      `<ellipse cx="320" cy="337" rx="10" ry="4" fill="#B04E5C" opacity="0.85"/>` +
      `<path d="M 298 329 C 305 345 335 345 342 329 C 337 349 303 349 298 329 Z" fill="${C.lip2}"/>` +
      `</g>` +
      `</g>` +
      `</g>` +
      `</g>` +
      `</svg>`
    );
  };

  // origines de transformation (repère du SVG)
  B.prep = function (id) {
    document.querySelectorAll("#" + id + " [data-ox]").forEach((g) => {
      gsap.set(g, { svgOrigin: `${g.getAttribute("data-ox")} ${g.getAttribute("data-oy")}` });
    });
  };

  // ---------------------------------------------------------------- animations (timeline GSAP)
  const rep = (dur, period) => Math.max(0, Math.ceil(dur / period) - 1);
  // vol sur place, très léger (respiration)
  B.hover = function (tl, id, t0, dur, amp, period) {
    amp = amp || 3;
    period = period || 3.4;
    tl.fromTo(`#${id}-all`, { y: amp }, { y: -amp, duration: period / 2, ease: "sine.inOut", repeat: rep(dur, period / 2), yoyo: true }, t0);
    // balancement discret de la tête
    tl.fromTo(`#${id}-neck`, { rotation: -1.2 }, { rotation: 1.2, duration: 2.3, ease: "sine.inOut", repeat: rep(dur, 2.3), yoyo: true }, t0);
  };
  // frémissement des ailes : 4 images par cycle, faible amplitude
  B.flap = function (tl, id, t0, dur) {
    const p = 2 / 15;
    tl.fromTo([`#${id}-wl1`, `#${id}-wl2`], { rotation: 3 }, { rotation: -7, duration: p / 2, ease: "sine.inOut", repeat: rep(dur, p / 2), yoyo: true }, t0);
    tl.fromTo([`#${id}-wr1`, `#${id}-wr2`], { rotation: -3 }, { rotation: 7, duration: p / 2, ease: "sine.inOut", repeat: rep(dur, p / 2), yoyo: true }, t0);
  };
  // antennes : léger balancement
  B.antennae = function (tl, id, t0, dur) {
    tl.fromTo(`#${id}-antL`, { rotation: -2.5 }, { rotation: 3, duration: 1.3, ease: "sine.inOut", repeat: rep(dur, 1.3), yoyo: true }, t0);
    tl.fromTo(`#${id}-antR`, { rotation: 2.5 }, { rotation: -3, duration: 1.5, ease: "sine.inOut", repeat: rep(dur, 1.5), yoyo: true }, t0);
  };
  // clignements aux instants donnés
  B.blink = function (tl, id, times) {
    times.forEach((t) => {
      tl.to([`#${id}-eyeL`, `#${id}-eyeR`], { scaleY: 0.1, duration: 0.07, ease: "power2.in" }, t).to([`#${id}-eyeL`, `#${id}-eyeR`], { scaleY: 1, duration: 0.1, ease: "power2.out" }, t + 0.08);
    });
  };
  // regard : déplacement des iris (dx, dy en px du SVG)
  B.look = function (tl, id, t, dx, dy, d) {
    tl.to([`#${id}-pupL`, `#${id}-pupR`], { x: dx, y: dy, duration: d || 0.3, ease: "power2.inOut" }, t);
  };
  // sourcils : levés (dy < 0) puis reposés
  B.brows = function (tl, id, t, dy, hold) {
    tl.to([`#${id}-browL`, `#${id}-browR`], { y: dy, duration: 0.2, ease: "power2.out" }, t);
    tl.to([`#${id}-browL`, `#${id}-browR`], { y: 0, duration: 0.35, ease: "power2.inOut" }, t + (hold || 0.6));
  };
  // parole : ouverture de la bouche suivant l'enveloppe de la voix (valeurs 0–1, 15 par seconde)
  B.talk = function (tl, id, t0, env) {
    if (!env || !env.length) return;
    const dt = 1 / 15;
    const kO = env.map((v) => ({ opacity: v > 0.06 ? 1 : 0, duration: dt }));
    const kS = env.map((v) => ({ scaleY: Math.max(0.16, Math.min(1, v * 0.9)), scaleX: 0.9 + 0.1 * Math.min(1, v), duration: dt }));
    const kC = env.map((v) => ({ opacity: v > 0.06 ? 0 : 1, duration: dt }));
    tl.to(`#${id}-mOpen`, { keyframes: kO, ease: "none" }, t0);
    tl.to(`#${id}-mOpen`, { keyframes: kS, ease: "none" }, t0);
    tl.to(`#${id}-mClosed`, { keyframes: kC, ease: "none" }, t0);
    tl.set(`#${id}-mOpen`, { opacity: 0 }, t0 + env.length * dt);
    tl.set(`#${id}-mClosed`, { opacity: 1 }, t0 + env.length * dt);
  };

  // ---------------------------------------------------------------- gestes (poses d'épaule, coude, poignet)
  // échange de main (repos ↔ ouverte) au milieu du mouvement
  function swapHand(tl, id, side, t, open) {
    tl.set(`#${id}-hand${side}-rest`, { opacity: open ? 0 : 1 }, t);
    tl.set(`#${id}-hand${side}-open`, { opacity: open ? 1 : 0 }, t);
  }
  function pose(tl, id, side, t, a, d, ease) {
    d = d || 0.5;
    ease = ease || "power2.inOut";
    tl.to(`#${id}-arm${side}`, { rotation: a[0], duration: d, ease: ease }, t);
    tl.to(`#${id}-fore${side}`, { rotation: a[1], duration: d, ease: ease }, t + 0.04);
    // raccourci : à mi-geste l'avant-bras pointe vers nous, il paraît plus court
    // (sans cela la main décrirait un grand arc sous le coude et sortirait du cadre)
    tl.to(`#${id}-fore${side}`, { keyframes: [{ scale: 0.5, duration: d * 0.5, ease: "sine.in" }, { scale: 1, duration: d * 0.5, ease: "sine.out" }] }, t + 0.04);
    tl.to(`#${id}-hand${side}`, { rotation: a[2], duration: d * 0.9, ease: ease }, t + 0.08);
  }
  const REST = [0, 0, 0];
  // présenter l'écran (à droite) : bras gauche de l'abeille, paume ouverte
  const PRESENT = [-30, -149, -8];
  // bras ouverts, paumes vers le haut
  const OPEN_L = [-10, -118, 10];
  const OPEN_R = [10, 118, -10];
  // main levée pour saluer (bras droit de l'abeille, à gauche de l'écran)
  const WAVE = [38, -164, 0];

  // salut de la main
  B.wave = function (tl, id, t, n) {
    n = n || 2;
    pose(tl, id, "R", t, WAVE, 0.5, "power2.out");
    swapHand(tl, id, "R", t + 0.2, true);
    for (let k = 0; k < n; k++) {
      tl.to(`#${id}-handR`, { rotation: -14, duration: 0.2, ease: "sine.inOut" }, t + 0.5 + k * 0.42).to(`#${id}-handR`, { rotation: 10, duration: 0.2, ease: "sine.inOut" }, t + 0.71 + k * 0.42);
    }
    const back = t + 0.55 + n * 0.42;
    pose(tl, id, "R", back, REST, 0.55);
    swapHand(tl, id, "R", back + 0.3, false);
  };
  // montrer l'écran (le paramètre d'angle module un peu la hauteur du geste)
  B.point = function (tl, id, t, ang, hold) {
    const lift = ((ang || 100) - 100) * 0.6;
    pose(tl, id, "L", t, [PRESENT[0] - lift, PRESENT[1], PRESENT[2]], 0.5, "power2.out");
    swapHand(tl, id, "L", t + 0.22, true);
    if (hold) {
      pose(tl, id, "L", t + hold, REST, 0.55);
      swapHand(tl, id, "L", t + hold + 0.3, false);
    }
  };
  // présenter : les deux bras s'ouvrent
  B.open = function (tl, id, t, hold) {
    pose(tl, id, "R", t, OPEN_R, 0.5, "power2.out");
    pose(tl, id, "L", t + 0.05, OPEN_L, 0.5, "power2.out");
    swapHand(tl, id, "R", t + 0.22, true);
    swapHand(tl, id, "L", t + 0.27, true);
    if (hold) {
      pose(tl, id, "R", t + hold, REST, 0.55);
      pose(tl, id, "L", t + hold + 0.05, REST, 0.55);
      swapHand(tl, id, "R", t + hold + 0.3, false);
      swapHand(tl, id, "L", t + hold + 0.35, false);
    }
  };
  // hochement de tête
  B.nod = function (tl, id, t) {
    tl.to(`#${id}-head`, { rotation: 3, y: 4, duration: 0.2, ease: "sine.inOut" }, t).to(`#${id}-head`, { rotation: 0, y: 0, duration: 0.32, ease: "sine.inOut" }, t + 0.2);
  };
  // tête penchée
  B.tilt = function (tl, id, t, ang, d) {
    tl.to(`#${id}-head`, { rotation: ang, duration: d || 0.45, ease: "power2.inOut" }, t);
  };

  window.BEE = B;
})();
