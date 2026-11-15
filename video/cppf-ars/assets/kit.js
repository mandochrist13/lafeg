// Outils partagés du film CPPF : fond d'alvéoles, en-têtes d'étape, puces, curseur et clics, saisie.
(function () {
  const K = {};
  const hexPts = (cx, cy, r) =>
    Array.from({ length: 6 }, (_, k) => {
      const a = (Math.PI / 3) * k + Math.PI / 6;
      return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
    }).join(" ");
  K.hexPts = hexPts;

  // fond d'alvéoles : hexagones en traits fins, plus présents dans les coins (pondération déterministe)
  K.honey = function (opts) {
    opts = opts || {};
    const r = opts.r || 46;
    const w = 1920,
      h = 1080;
    const dx = r * Math.sqrt(3),
      dy = r * 1.5;
    let out = `<svg class="k-abs" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" data-layout-ignore>`;
    let k = 0;
    for (let row = -1; row * dy < h + r; row++) {
      for (let col = -1; col * dx < w + r; col++) {
        const cx = col * dx + (row % 2 ? dx / 2 : 0);
        const cy = row * dy;
        // présence : forte dans les coins haut-gauche et bas-droite, nulle au centre
        const u = Math.max(Math.hypot(cx / w, cy / h) < 0.42 ? 1 - Math.hypot(cx / w, cy / h) / 0.42 : 0, Math.hypot((w - cx) / w, (h - cy) / h) < 0.5 ? 1 - Math.hypot((w - cx) / w, (h - cy) / h) / 0.5 : 0);
        if (u <= 0.02) continue;
        const fill = (k * 37) % 11 === 0 && u > 0.45 ? opts.fill || "#FFF4CC" : "none";
        out += `<polygon class="k-hex" points="${hexPts(cx, cy, r - 4)}" fill="${fill}" stroke="${opts.stroke || "#DCE7F4"}" stroke-width="3" opacity="${Math.min(1, u * 1.6).toFixed(2)}"/>`;
        k++;
      }
    }
    return out + `</svg>`;
  };

  // alvéole numérotée de l'en-tête d'étape
  K.stepHex = function (n) {
    return `<span class="hx"><svg width="78" height="86" viewBox="0 0 78 86"><polygon points="${hexPts(39, 43, 40)}" fill="#F6CF2A"/><polygon points="${hexPts(39, 43, 33)}" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="3"/></svg><b>${n}</b></span>`;
  };

  // apparition mot à mot (flou → net)
  K.words = function (tl, sel, t, stagger) {
    tl.fromTo(sel, { opacity: 0, filter: "blur(6px)", y: 10 }, { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.3, stagger: stagger || 0.06, ease: "power3.out" }, t);
  };
  // apparition d'une puce
  K.li = function (tl, sel, t) {
    tl.fromTo(sel, { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }, t);
  };

  // curseur : flèche bleue (SVG) ; positions en px du conteneur
  K.cursorSVG = `<svg viewBox="0 0 44 52" width="44" height="52"><path d="M 4 3 L 4 40 L 14 31 L 22 48 L 29 45 L 21 28 L 35 28 Z" fill="#3A75BC" stroke="#FFFFFF" stroke-width="3" stroke-linejoin="round"/></svg>`;
  K.move = function (tl, sel, x, y, t, d) {
    tl.to(sel, { x: x, y: y, duration: d || 0.6, ease: "power2.inOut" }, t);
  };
  K.click = function (tl, cursor, ripple, t) {
    tl.to(cursor, { scale: 0.86, duration: 0.08, ease: "power2.in", transformOrigin: "4px 3px" }, t).to(cursor, { scale: 1, duration: 0.12, ease: "power2.out" }, t + 0.08);
    if (ripple) tl.fromTo(ripple, { opacity: 0.9, scale: 0.3 }, { opacity: 0, scale: 1.4, duration: 0.5, ease: "power2.out" }, t);
  };
  // saisie lettre à lettre : l'élément contient des <span> (un par caractère)
  K.typeHTML = function (text) {
    return Array.from(text)
      .map((c) => `<span class="ch" style="opacity:0">${c === " " ? "&nbsp;" : c}</span>`)
      .join("");
  };
  K.type = function (tl, sel, t, cps) {
    const n = document.querySelectorAll(sel + " .ch").length;
    tl.to(sel + " .ch", { opacity: 1, duration: 0.01, stagger: 1 / (cps || 14) }, t);
    return n / (cps || 14);
  };
  // pression d'un bouton
  K.press = function (tl, sel, t) {
    tl.to(sel, { scale: 0.94, duration: 0.08, ease: "power2.in" }, t).to(sel, { scale: 1, duration: 0.16, ease: "back.out(2)" }, t + 0.08);
  };
  window.KIT = K;
})();
