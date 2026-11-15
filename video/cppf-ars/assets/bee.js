// L'abeille de la CPPF : avatar vectoriel articulé (tête, yeux, bouche, antennes, ailes, bras).
// BEE.svg(id, opts) renvoie le SVG ; BEE.prep(id) règle les origines ; les helpers posent les
// animations dans une timeline GSAP (tout est fonction du temps : déterministe au seek).
(function () {
  const B = {};
  // repère : viewBox 0 0 600 720, centre de la tête (300, 250)
  B.W = 600;
  B.H = 720;
  const C = {
    y1: "#FFE27A", // jaune clair (reflet)
    y2: "#FFC52E", // jaune abeille
    y3: "#EE9F12", // jaune ombré
    st: "#3A2616", // rayures, bras
    st2: "#5A3B22",
    eye: "#24160D",
    cheek: "#FF7E9C",
    mouth: "#7A2A1C",
    tongue: "#FF7C8A",
    glove: "#FFFFFF",
    glove2: "#E3E7EE",
    green: "#1FA05A",
    blue: "#3A75BC",
    yellow: "#F6CF2A",
  };
  B.C = C;

  function wing(id, cx, cy, rx, ry, rot, flip) {
    // aile translucide, nervures fines, reflet ; pivot à la base (attache au corps)
    const s = flip ? -1 : 1;
    return (
      `<g id="${id}" data-ox="${cx}" data-oy="${cy}">` +
      `<ellipse cx="${cx + s * rx * 0.62}" cy="${cy - ry * 0.55}" rx="${rx}" ry="${ry}" transform="rotate(${rot} ${cx} ${cy})" fill="url(#beeWing)" stroke="#B9D6EE" stroke-width="5"/>` +
      `<path d="M ${cx} ${cy} Q ${cx + s * rx * 0.55} ${cy - ry * 0.55} ${cx + s * rx * 1.05} ${cy - ry * 1.15}" transform="rotate(${rot} ${cx} ${cy})" fill="none" stroke="rgba(150,190,225,0.55)" stroke-width="3" stroke-linecap="round"/>` +
      `<path d="M ${cx + s * rx * 0.35} ${cy - ry * 0.3} Q ${cx + s * rx * 0.95} ${cy - ry * 0.45} ${cx + s * rx * 1.3} ${cy - ry * 0.75}" transform="rotate(${rot} ${cx} ${cy})" fill="none" stroke="rgba(150,190,225,0.45)" stroke-width="2.5" stroke-linecap="round"/>` +
      `<ellipse cx="${cx + s * rx * 0.45}" cy="${cy - ry * 0.95}" rx="${rx * 0.22}" ry="${ry * 0.34}" transform="rotate(${rot - s * 18} ${cx} ${cy})" fill="rgba(255,255,255,0.75)"/>` +
      `</g>`
    );
  }

  B.svg = function (id, opts) {
    opts = opts || {};
    const w = opts.w || 300;
    const h = (w * B.H) / B.W;
    return (
      `<svg id="${id}" class="bee" width="${w}" height="${h}" viewBox="0 0 ${B.W} ${B.H}" style="overflow:visible" data-layout-allow-overflow>` +
      `<defs>` +
      `<radialGradient id="beeHead" cx="0.36" cy="0.3" r="0.78"><stop offset="0" stop-color="${C.y1}"/><stop offset="0.55" stop-color="${C.y2}"/><stop offset="1" stop-color="${C.y3}"/></radialGradient>` +
      `<radialGradient id="beeBody" cx="0.38" cy="0.28" r="0.85"><stop offset="0" stop-color="${C.y1}"/><stop offset="0.5" stop-color="${C.y2}"/><stop offset="1" stop-color="${C.y3}"/></radialGradient>` +
      `<radialGradient id="beeEye" cx="0.42" cy="0.38" r="0.7"><stop offset="0" stop-color="#5B3A22"/><stop offset="0.55" stop-color="#2E1C10"/><stop offset="1" stop-color="${C.eye}"/></radialGradient>` +
      `<linearGradient id="beeWing" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="rgba(238,248,255,0.92)"/><stop offset="1" stop-color="rgba(186,220,247,0.72)"/></linearGradient>` +
      `<radialGradient id="beeGlove" cx="0.38" cy="0.32" r="0.75"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="${C.glove2}"/></radialGradient>` +
      `<clipPath id="${id}-bodyclip"><ellipse cx="300" cy="478" rx="118" ry="128"/></clipPath>` +
      `</defs>` +
      // ombre portée au sol (elle suit le vol)
      `<ellipse id="${id}-shadow" cx="300" cy="700" rx="110" ry="14" fill="rgba(20,30,60,0.10)"/>` +
      `<g id="${id}-all">` +
      // ailes arrière (dans le dos)
      `<g id="${id}-wings">` +
      wing(`${id}-wl2`, 246, 446, 46, 78, -100, true) +
      wing(`${id}-wr2`, 354, 446, 46, 78, 100, false) +
      wing(`${id}-wl1`, 236, 412, 76, 138, -52, true) +
      wing(`${id}-wr1`, 364, 412, 76, 138, 52, false) +
      `</g>` +
      // petites jambes
      `<g id="${id}-legs">` +
      `<path d="M 268 590 Q 262 625 248 640" fill="none" stroke="${C.st}" stroke-width="13" stroke-linecap="round"/>` +
      `<path d="M 332 590 Q 338 625 352 640" fill="none" stroke="${C.st}" stroke-width="13" stroke-linecap="round"/>` +
      `<ellipse cx="244" cy="644" rx="15" ry="10" fill="${C.st}"/><ellipse cx="356" cy="644" rx="15" ry="10" fill="${C.st}"/>` +
      `</g>` +
      // corps : abdomen rayé, dard arrondi
      `<g id="${id}-body">` +
      `<path d="M 300 628 L 286 596 L 314 596 Z" fill="${C.st}"/>` +
      `<ellipse cx="300" cy="478" rx="118" ry="128" fill="url(#beeBody)"/>` +
      `<g clip-path="url(#${id}-bodyclip)">` +
      `<path d="M 160 470 Q 300 505 440 470 L 440 512 Q 300 548 160 512 Z" fill="${C.st}"/>` +
      `<path d="M 160 548 Q 300 582 440 548 L 440 590 Q 300 626 160 590 Z" fill="${C.st}"/>` +
      `<ellipse cx="258" cy="430" rx="40" ry="26" transform="rotate(-25 258 430)" fill="rgba(255,255,255,0.32)"/>` +
      `</g>` +
      `</g>` +
      // bras gauche (de l'abeille, à droite de l'écran) et droit ; pivot à l'épaule
      `<g id="${id}-armR" data-ox="196" data-oy="452">` +
      `<path d="M 196 452 Q 160 488 150 532" fill="none" stroke="${C.st}" stroke-width="20" stroke-linecap="round"/>` +
      `<circle cx="148" cy="540" r="25" fill="url(#beeGlove)"/><path d="M 130 528 Q 126 540 134 552" fill="none" stroke="${C.glove2}" stroke-width="4" stroke-linecap="round"/>` +
      `</g>` +
      `<g id="${id}-armL" data-ox="404" data-oy="452">` +
      `<path d="M 404 452 Q 440 488 450 532" fill="none" stroke="${C.st}" stroke-width="20" stroke-linecap="round"/>` +
      `<circle cx="452" cy="540" r="25" fill="url(#beeGlove)"/><path d="M 470 528 Q 474 540 466 552" fill="none" stroke="${C.glove2}" stroke-width="4" stroke-linecap="round"/>` +
      `</g>` +
      // nœud papillon aux couleurs de la CPPF
      `<g id="${id}-bow">` +
      `<path d="M 300 420 L 244 394 Q 233 420 244 448 Z" fill="${C.green}"/>` +
      `<path d="M 300 420 L 356 394 Q 367 420 356 448 Z" fill="${C.blue}"/>` +
      `<path d="M 258 404 L 300 420 L 258 437" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="3"/>` +
      `<path d="M 342 404 L 300 420 L 342 437" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="3"/>` +
      `<rect x="285" y="406" width="30" height="29" rx="10" fill="${C.yellow}" stroke="#D9A90E" stroke-width="3"/>` +
      `</g>` +
      // tête (pivot au cou)
      `<g id="${id}-head" data-ox="300" data-oy="380">` +
      // antennes (pivot à leur base)
      `<g id="${id}-antL" data-ox="252" data-oy="122"><path d="M 252 122 Q 236 64 196 40" fill="none" stroke="${C.st}" stroke-width="9" stroke-linecap="round"/><circle cx="192" cy="36" r="19" fill="${C.st}"/><circle cx="186" cy="30" r="6" fill="rgba(255,255,255,0.6)"/></g>` +
      `<g id="${id}-antR" data-ox="348" data-oy="122"><path d="M 348 122 Q 364 64 404 40" fill="none" stroke="${C.st}" stroke-width="9" stroke-linecap="round"/><circle cx="408" cy="36" r="19" fill="${C.st}"/><circle cx="402" cy="30" r="6" fill="rgba(255,255,255,0.6)"/></g>` +
      `<ellipse cx="300" cy="252" rx="158" ry="146" fill="url(#beeHead)"/>` +
      // petite mèche
      `<path d="M 286 110 Q 300 86 318 106 Q 306 100 298 116 Z" fill="${C.y3}"/>` +
      // reflet de la tête
      `<ellipse cx="236" cy="168" rx="46" ry="24" transform="rotate(-24 236 168)" fill="rgba(255,255,255,0.42)"/>` +
      // joues
      `<ellipse cx="198" cy="314" rx="27" ry="16" fill="${C.cheek}" opacity="0.62"/>` +
      `<ellipse cx="402" cy="314" rx="27" ry="16" fill="${C.cheek}" opacity="0.62"/>` +
      `<circle cx="190" cy="309" r="4" fill="rgba(255,255,255,0.7)"/><circle cx="394" cy="309" r="4" fill="rgba(255,255,255,0.7)"/>` +
      // yeux (groupes : clignement par écrasement vertical ; pupilles mobiles)
      `<g id="${id}-eyeL" data-ox="244" data-oy="252">` +
      `<ellipse cx="244" cy="252" rx="41" ry="52" fill="url(#beeEye)"/>` +
      `<g id="${id}-pupL"><circle cx="258" cy="232" r="15" fill="#FFFFFF"/><circle cx="231" cy="276" r="7" fill="rgba(255,255,255,0.85)"/></g>` +
      `<path d="M 230.0 203.1 Q 230.5 193.0 224.2 187.2 M 217.6 212.2 Q 214.0 201.6 205.4 197.6 M 208.5 226.0 Q 202.9 218.1 194.6 218.0" fill="none" stroke="${C.eye}" stroke-width="6" stroke-linecap="round"/>` +
      `</g>` +
      `<g id="${id}-eyeR" data-ox="356" data-oy="252">` +
      `<ellipse cx="356" cy="252" rx="41" ry="52" fill="url(#beeEye)"/>` +
      `<g id="${id}-pupR"><circle cx="370" cy="232" r="15" fill="#FFFFFF"/><circle cx="343" cy="276" r="7" fill="rgba(255,255,255,0.85)"/></g>` +
      `<path d="M 370.0 203.1 Q 369.5 193.0 375.8 187.2 M 382.4 212.2 Q 386.0 201.6 394.6 197.6 M 391.5 226.0 Q 397.1 218.1 405.4 218.0" fill="none" stroke="${C.eye}" stroke-width="6" stroke-linecap="round"/>` +
      `</g>` +
      // bouche : sourire fermé, bouche ouverte (écrasée verticalement selon la voix)
      `<path id="${id}-mClosed" d="M 274 322 Q 300 346 326 322" fill="none" stroke="${C.mouth}" stroke-width="7" stroke-linecap="round"/>` +
      `<g id="${id}-mOpen" data-ox="300" data-oy="320" opacity="0">` +
      `<path d="M 272 318 Q 300 322 328 318 Q 326 360 300 364 Q 274 360 272 318 Z" fill="${C.mouth}"/>` +
      `<ellipse cx="300" cy="352" rx="15" ry="8" fill="${C.tongue}"/>` +
      `<path d="M 278 320 Q 300 326 322 320 L 320 328 Q 300 332 280 328 Z" fill="#FFFFFF" opacity="0.9"/>` +
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
  // vol stationnaire : le corps monte et descend, l'ombre respire
  B.hover = function (tl, id, t0, dur, amp, period) {
    amp = amp || 10;
    period = period || 1.7;
    tl.fromTo(`#${id}-all`, { y: amp }, { y: -amp, duration: period / 2, ease: "sine.inOut", repeat: rep(dur, period / 2), yoyo: true }, t0);
    tl.fromTo(`#${id}-shadow`, { scaleX: 0.92, transformOrigin: "50% 50%" }, { scaleX: 1.06, duration: period / 2, ease: "sine.inOut", repeat: rep(dur, period / 2), yoyo: true }, t0);
  };
  // battement d'ailes : 4 images par cycle (7,5 Hz à 30 i/s)
  B.flap = function (tl, id, t0, dur) {
    const p = 2 / 15;
    tl.fromTo([`#${id}-wl1`, `#${id}-wl2`], { rotation: 10 }, { rotation: -22, duration: p / 2, ease: "sine.inOut", repeat: rep(dur, p / 2), yoyo: true }, t0);
    tl.fromTo([`#${id}-wr1`, `#${id}-wr2`], { rotation: -10 }, { rotation: 22, duration: p / 2, ease: "sine.inOut", repeat: rep(dur, p / 2), yoyo: true }, t0);
  };
  // antennes qui ondulent
  B.antennae = function (tl, id, t0, dur) {
    tl.fromTo(`#${id}-antL`, { rotation: -5 }, { rotation: 6, duration: 0.9, ease: "sine.inOut", repeat: rep(dur, 0.9), yoyo: true }, t0);
    tl.fromTo(`#${id}-antR`, { rotation: 5 }, { rotation: -6, duration: 1.05, ease: "sine.inOut", repeat: rep(dur, 1.05), yoyo: true }, t0);
  };
  // clignements aux instants donnés
  B.blink = function (tl, id, times) {
    times.forEach((t) => {
      tl.to([`#${id}-eyeL`, `#${id}-eyeR`], { scaleY: 0.08, duration: 0.07, ease: "power2.in" }, t).to([`#${id}-eyeL`, `#${id}-eyeR`], { scaleY: 1, duration: 0.1, ease: "power2.out" }, t + 0.08);
    });
  };
  // regard : décalage des reflets/pupilles (dx, dy en px du SVG)
  B.look = function (tl, id, t, dx, dy, d) {
    tl.to([`#${id}-pupL`, `#${id}-pupR`], { x: dx, y: dy, duration: d || 0.3, ease: "power2.inOut" }, t);
  };
  // parole : ouverture de la bouche suivant l'enveloppe de la voix (valeurs 0–1, 15 par seconde)
  B.talk = function (tl, id, t0, env) {
    if (!env || !env.length) return;
    const dt = 1 / 15;
    const kO = env.map((v) => ({ opacity: v > 0.06 ? 1 : 0, duration: dt }));
    const kS = env.map((v) => ({ scaleY: Math.max(0.12, Math.min(1, v)), scaleX: 0.86 + 0.14 * Math.min(1, v), duration: dt }));
    const kC = env.map((v) => ({ opacity: v > 0.06 ? 0 : 1, duration: dt }));
    tl.to(`#${id}-mOpen`, { keyframes: kO, ease: "none" }, t0);
    tl.to(`#${id}-mOpen`, { keyframes: kS, ease: "none" }, t0);
    tl.to(`#${id}-mClosed`, { keyframes: kC, ease: "none" }, t0);
    tl.set(`#${id}-mOpen`, { opacity: 0 }, t0 + env.length * dt);
    tl.set(`#${id}-mClosed`, { opacity: 1 }, t0 + env.length * dt);
  };
  // salut de la main (bras droit de l'abeille, à gauche de l'écran)
  B.wave = function (tl, id, t, n) {
    n = n || 3;
    tl.to(`#${id}-armR`, { rotation: 128, duration: 0.35, ease: "power2.out" }, t);
    for (let k = 0; k < n; k++) {
      tl.to(`#${id}-armR`, { rotation: 108, duration: 0.18, ease: "sine.inOut" }, t + 0.35 + k * 0.36).to(`#${id}-armR`, { rotation: 132, duration: 0.18, ease: "sine.inOut" }, t + 0.53 + k * 0.36);
    }
    tl.to(`#${id}-armR`, { rotation: 0, duration: 0.45, ease: "power2.inOut" }, t + 0.35 + n * 0.36 + 0.05);
  };
  // montrer : bras gauche de l'abeille tendu vers la droite de l'écran (angle en degrés)
  B.point = function (tl, id, t, ang, hold) {
    tl.to(`#${id}-armL`, { rotation: -(ang || 100), duration: 0.4, ease: "back.out(1.6)" }, t);
    if (hold) tl.to(`#${id}-armL`, { rotation: 0, duration: 0.45, ease: "power2.inOut" }, t + hold);
  };
  // présenter : les deux bras s'ouvrent
  B.open = function (tl, id, t, hold) {
    tl.to(`#${id}-armR`, { rotation: 62, duration: 0.45, ease: "back.out(1.5)" }, t).to(`#${id}-armL`, { rotation: -62, duration: 0.45, ease: "back.out(1.5)" }, t + 0.05);
    if (hold) tl.to([`#${id}-armR`, `#${id}-armL`], { rotation: 0, duration: 0.5, ease: "power2.inOut" }, t + hold);
  };
  // hochement de tête
  B.nod = function (tl, id, t) {
    tl.to(`#${id}-head`, { rotation: 4, y: 6, duration: 0.18, ease: "sine.inOut" }, t).to(`#${id}-head`, { rotation: 0, y: 0, duration: 0.3, ease: "sine.inOut" }, t + 0.18);
  };
  // tête penchée
  B.tilt = function (tl, id, t, ang, d) {
    tl.to(`#${id}-head`, { rotation: ang, duration: d || 0.45, ease: "power2.inOut" }, t);
  };

  window.BEE = B;
})();
