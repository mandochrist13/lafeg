// Personnages et mains à plat — vidéo « Comment adhérer à la FEG ».
//
// Principe : un personnage est un arbre de <div> de taille nulle, tous dans le même repère
// (le bassin en 0,0 ; y vers le bas), dont l'origine de transformation est l'articulation.
// GSAP fait tourner les articulations (rotation en degrés) ; les formes sont des SVG dont
// le viewBox reprend ce repère. Aucun aléa : tout est fonction des paramètres.
(function () {
  var P = {};

  // ---------------------------------------------------------------- couleurs
  function rgb(c) {
    c = c.replace("#", "");
    return [parseInt(c.substr(0, 2), 16), parseInt(c.substr(2, 2), 16), parseInt(c.substr(4, 2), 16)];
  }
  function hx(r, g, b) {
    return (
      "#" +
      [r, g, b]
        .map(function (v) {
          var s = Math.max(0, Math.min(255, Math.round(v))).toString(16);
          return s.length < 2 ? "0" + s : s;
        })
        .join("")
    );
  }
  P.shade = function (c, k) {
    var a = rgb(c);
    return hx(a[0] * (1 - k), a[1] * (1 - k), a[2] * (1 - k));
  };
  P.tint = function (c, k) {
    var a = rgb(c);
    return hx(a[0] + (255 - a[0]) * k, a[1] + (255 - a[1]) * k, a[2] + (255 - a[2]) * k);
  };
  var shade = P.shade;

  // ---------------------------------------------------------------- briques
  // SVG dans le repère du personnage : box = [x0, y0, largeur, hauteur]
  function svg(box, inner, style) {
    return (
      '<svg class="pp-svg" style="position:absolute;left:' + box[0] + "px;top:" + box[1] + "px;width:" + box[2] + "px;height:" + box[3] +
      "px;overflow:visible;" + (style || "") + '" viewBox="' + box.join(" ") + '">' + inner + "</svg>"
    );
  }
  // articulation : div de taille nulle, origine de transformation au point (ox, oy)
  function joint(id, ox, oy, inner) {
    return '<div id="' + id + '" class="pp-j" style="position:absolute;left:0;top:0;width:0;height:0;transform-origin:' + ox + "px " + oy + 'px">' + inner + "</div>";
  }
  function rr(x, y, w, h, r, fill, extra) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + r + '" fill="' + fill + '"' + (extra || "") + "/>";
  }
  function el(cx, cy, rx, ry, fill, extra) {
    return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="' + fill + '"' + (extra || "") + "/>";
  }
  function path(d, fill, extra) {
    return '<path d="' + d + '" fill="' + fill + '"' + (extra || "") + "/>";
  }
  function stroke(d, col, w) {
    return '<path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="' + w + '" stroke-linecap="round" stroke-linejoin="round"/>';
  }

  // contour lissé passant par les points (fermé), tension 0,5
  function smooth(pts) {
    var n = pts.length,
      d = "M " + pts[0][0] + "," + pts[0][1];
    for (var i = 0; i < n; i++) {
      var p0 = pts[(i - 1 + n) % n],
        p1 = pts[i],
        p2 = pts[(i + 1) % n],
        p3 = pts[(i + 2) % n];
      var c1x = p1[0] + (p2[0] - p0[0]) / 6,
        c1y = p1[1] + (p2[1] - p0[1]) / 6,
        c2x = p2[0] - (p3[0] - p1[0]) / 6,
        c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += " C " + c1x.toFixed(1) + "," + c1y.toFixed(1) + " " + c2x.toFixed(1) + "," + c2y.toFixed(1) + " " + p2[0] + "," + p2[1];
    }
    return d + " Z";
  }
  P.smooth = smooth;

  // ---------------------------------------------------------------- cheveux (vue de face, tête centrée en 0,-286)
  function hairFront(style, col) {
    var hl = P.tint(col, 0.1);
    switch (style) {
      case "afro": // courts, naturels, contour légèrement festonné
        return path(
          smooth([
            [-37, -286], [-44, -296], [-49, -309], [-51, -322], [-49, -335], [-45, -346], [-37, -356], [-27, -363], [-14, -368], [0, -369],
            [14, -368], [27, -363], [37, -356], [45, -346], [49, -335], [51, -322], [49, -309], [44, -296], [37, -286],
            [34, -298], [28, -310], [18, -318], [6, -321], [-6, -321], [-18, -318], [-28, -310], [-34, -298],
          ]),
          col,
        );
      case "bun": // tirés en arrière, chignon haut
        return (
          el(0, -352, 21, 17, col) +
          path(smooth([[-37, -286], [-40, -304], [-38, -322], [-29, -337], [-15, -345], [0, -347], [15, -345], [29, -337], [38, -322], [40, -304], [37, -286], [33, -299], [24, -311], [12, -318], [0, -320], [-12, -318], [-24, -311], [-33, -299]]), col)
        );
      case "short": // homme, coupe courte
        return path(smooth([[-36, -290], [-38, -312], [-31, -331], [-17, -341], [0, -344], [17, -341], [31, -331], [38, -312], [36, -290], [32, -303], [21, -315], [0, -320], [-21, -315], [-32, -303]]), col);
      case "grey": // homme plus âgé : tempes grises, sommet dégarni
        return path(smooth([[-36, -282], [-38, -300], [-35, -316], [-29, -322], [-31, -306], [-31, -292]]), col) + path(smooth([[36, -282], [38, -300], [35, -316], [29, -322], [31, -306], [31, -292]]), col);
      case "shaved":
        return path(smooth([[-35, -292], [-36, -314], [-29, -331], [-16, -340], [0, -342], [16, -340], [29, -331], [36, -314], [35, -292], [31, -305], [20, -316], [0, -320], [-20, -316], [-31, -305]]), col, ' opacity="0.6"');
      default:
        return "";
    }
  }

  // visage de face : yeux (groupe clignement), sourcils, nez, bouche
  function faceFront(id, skin, o) {
    var dk = "#1C1411";
    var nose = shade(skin, 0.22);
    var lip = shade(skin, 0.42);
    var s =
      '<g id="' + id + '-eyes">' + el(-13, -288, 3.6, 4.6, dk) + el(13, -288, 3.6, 4.6, dk) + "</g>" +
      stroke("M -20,-299 Q -13,-303.5 -6,-300.5", dk, 2.8) +
      stroke("M 20,-299 Q 13,-303.5 6,-300.5", dk, 2.8) +
      path("M -1.5,-286 C 0,-279 4,-273 6.5,-269.5 C 4,-266.5 -4,-266.5 -6.5,-269.5 C -4,-273 -3,-279 -1.5,-286 Z", nose) +
      '<g id="' + id + '-mouth">' + stroke("M -9,-257 Q 0,-251 9,-257", lip, 2.8) + "</g>";
    if (o.glasses) s += '<g fill="none" stroke="#2B2E2B" stroke-width="2.4">' + '<rect x="-25" y="-296" width="20" height="16" rx="5"/><rect x="5" y="-296" width="20" height="16" rx="5"/><path d="M -5,-290 L 5,-290"/></g>';
    if (o.beard)
      s +=
        path("M -34,-278 C -32,-258 -20,-240 0,-237 C 20,-240 32,-258 34,-278 C 28,-264 20,-253 12,-254 C 6,-258 -6,-258 -12,-254 C -20,-253 -28,-264 -34,-278 Z", o.hairColor || dk, ' opacity="0.92"') +
        path("M -11,-262 C -5,-267 5,-267 11,-262 C 5,-259.5 -5,-259.5 -11,-262 Z", o.hairColor || dk);
    return s;
  }

  // ---------------------------------------------------------------- personnage de face
  // o : { x, y, s (échelle), skin, hair, hairColor, top, shirt, tie, bottom, shoes, sex: "f"|"m",
  //       legs: bool, glasses, beard, z }
  P.front = function (id, o) {
    var f = o.sex !== "m";
    var skin = o.skin || "#6E4429",
      skinD = shade(skin, 0.16);
    var top = o.top || "#0A7537",
      topD = shade(top, 0.13),
      topDD = shade(top, 0.24),
      topL = P.tint(top, 0.08);
    var shirt = o.shirt || "#FFFFFF",
      shirtD = shade(shirt, 0.07);
    var hairC = o.hairColor || "#1C1411";
    var sw = f ? 84 : 94, // demi-largeur des épaules
      ww = f ? 64 : 72,
      hw = f ? 68 : 72,
      sx = f ? 70 : 79; // x des articulations d'épaule
    var torsoD =
      "M -16,-234 C -36,-232 " + -(sw - 24) + ",-226 " + -(sw - 8) + ",-214 C " + -(sw + 2) + ",-206 " + -(sw + 4) + ",-192 " + -(sw + 2) + ",-176 L " + -(ww + 12) +
      ",-120 C " + -(ww + 6) + ",-84 " + -ww + ",-48 " + -hw + ",0 L " + -hw + ",20 L " + hw + ",20 L " + hw + ",0 C " + ww + ",-48 " + (ww + 6) + ",-84 " + (ww + 12) +
      ",-120 L " + (sw + 2) + ",-176 C " + (sw + 4) + ",-192 " + (sw + 2) + ",-206 " + (sw - 8) + ",-214 C " + (sw - 24) + ",-226 36,-232 16,-234 Z";
    var clipId = id + "-tclip";
    var torso =
      '<defs><clipPath id="' + clipId + '"><path d="' + torsoD + '"/></clipPath></defs>' +
      path("M -14,-254 L 14,-254 L 16,-226 L -16,-226 Z", skin) +
      path("M -14,-254 C -6,-246 6,-246 14,-254 L 15,-241 C 5,-234 -5,-234 -15,-241 Z", skinD) +
      path(torsoD, top) +
      '<g clip-path="url(#' + clipId + ')">' + rr(26, -250, 140, 290, 0, topD) + path("M " + -(sw - 4) + ",-212 C -60,-226 -30,-232 -16,-234 L -20,-224 C -40,-222 -60,-216 " + -(sw - 10) + ",-204 Z", topL) + "</g>" +
      path(f ? "M -16,-234 L 0,-146 L 16,-234 Z" : "M -16,-234 L 0,-134 L 16,-234 Z", shirt) +
      (o.tie ? path("M -6,-228 L 6,-228 L 9,-156 L 0,-140 L -9,-156 Z", o.tie) + path("M -7,-231 L 7,-231 L 5,-219 L -5,-219 Z", shade(o.tie, 0.2)) : "") +
      path("M -16,-234 L -26,-222 L -9,-207 Z", shirt) + path("M 16,-234 L 26,-222 L 9,-207 Z", shirtD) +
      path(f ? "M -16,-234 L -3,-148 L -30,-174 L -38,-202 L -28,-207 L -36,-226 Z" : "M -16,-234 L -3,-136 L -33,-168 L -42,-202 L -31,-207 L -38,-227 Z", topD) +
      path(f ? "M 16,-234 L 3,-148 L 30,-174 L 38,-202 L 28,-207 L 36,-226 Z" : "M 16,-234 L 3,-136 L 33,-168 L 42,-202 L 31,-207 L 38,-227 Z", topDD) +
      el(0, -112, 4.6, 4.6, topDD) + (f ? "" : el(0, -78, 4.6, 4.6, topDD));
    var face = "M 0,-328 C 21,-328 36,-312 36,-290 C 36,-270 30,-256 20,-247 C 13,-241 7,-238 0,-238 C -7,-238 -13,-241 -20,-247 C -30,-256 -36,-270 -36,-290 C -36,-312 -21,-328 0,-328 Z";
    var head = el(-35, -285, 6.5, 10.5, skinD) + el(35, -285, 6.5, 10.5, skinD) + path(face, skin) + faceFront(id, skin, o) + hairFront(o.hair || (f ? "afro" : "short"), hairC);

    function arm(side) {
      var k = side === "L" ? -1 : 1;
      var x = k * sx;
      var ua =
        path("M " + (x - 17) + ",-206 C " + (x - 17) + ",-228 " + (x + 17) + ",-228 " + (x + 17) + ",-206 L " + (x + 14) + ",-100 C " + (x + 14) + ",-89 " + (x - 14) + ",-89 " + (x - 14) + ",-100 Z", top) +
        path("M " + (x + k * 17) + ",-206 L " + (x + k * 14) + ",-100 C " + (x + k * 14) + ",-93 " + (x + k * 8) + ",-90 " + (x + k * 6) + ",-92 L " + (x + k * 8) + ",-213 Z", topD);
      var fa =
        path("M " + (x - 14) + ",-104 L " + (x + 14) + ",-104 L " + (x + 12) + ",-14 L " + (x - 12) + ",-14 Z", top) +
        path("M " + (x + k * 14) + ",-104 L " + (x + k * 12) + ",-14 L " + (x + k * 6) + ",-14 L " + (x + k * 7) + ",-104 Z", topD) +
        rr(x - 14, -18, 28, 12, 4, shirt);
      var hand =
        path("M " + (x - 13) + ",-7 L " + (x + 13) + ",-7 C " + (x + 16) + ",8 " + (x + 14) + ",26 " + (x + 6) + ",34 C " + x + ",38 " + (x - 8) + ",36 " + (x - 12) + ",30 C " + (x - 16) + ",20 " + (x - 16) + ",6 " + (x - 13) + ",-7 Z", skin) +
        el(x - k * 13, 7, 5.5, 11, skinD, ' transform="rotate(' + -k * 25 + " " + (x - k * 13) + ' 7)"');
      var grip = '<div id="' + id + "-grip" + side + '" class="pp-grip" style="position:absolute;left:' + x + 'px;top:14px;width:0;height:0"></div>';
      return joint(id + "-ua" + side, x, -206, svg([x - 30, -232, 60, 150], ua) + joint(id + "-fa" + side, x, -100, svg([x - 30, -110, 60, 150], fa + hand) + grip));
    }
    var legs = "";
    if (o.legs) {
      var bot = o.bottom || "#1F2A24",
        shoes = o.shoes || "#1A1C19";
      legs = svg(
        [-90, -10, 180, 330],
        path("M " + -hw + ",0 L " + hw + ",0 L " + (hw - 4) + ",44 L " + (-hw + 4) + ",44 Z", bot) +
          path("M " + (-hw + 4) + ",20 L -5,20 L -12,292 L -44,292 Z", bot) +
          path("M " + (hw - 4) + ",20 L 5,20 L 12,292 L 44,292 Z", shade(bot, 0.12)) +
          rr(-52, 286, 46, 18, 8, shoes) + rr(6, 286, 46, 18, 8, shoes),
      );
    }
    var body =
      legs +
      svg([-110, -262, 220, 290], torso, o.cut != null ? "overflow:hidden;clip-path:inset(0 0 " + Math.max(0, 28 - o.cut) + "px 0)" : "") +
      joint(id + "-head", 0, -244, svg([-60, -380, 120, 145], head)) +
      arm("L") +
      arm("R");
    var s = o.s || 1;
    return (
      '<div id="' + id + '" class="pp" style="position:absolute;left:' + (o.x || 0) + "px;top:" + (o.y || 0) + "px;width:0;height:0;" + (o.z != null ? "z-index:" + o.z + ";" : "") + '">' +
      '<div style="position:absolute;left:0;top:0;width:0;height:0;transform:scale(' + s + ');transform-origin:0 0">' +
      joint(id + "-body", 0, 0, body) +
      "</div></div>"
    );
  };

  // origines GSAP des petits groupes SVG (yeux, bouche) : à appeler une fois après insertion
  P.prep = function (id) {
    if (document.getElementById(id + "-eyes")) gsap.set("#" + id + "-eyes", { svgOrigin: "0 -288" });
    if (document.getElementById(id + "-mouth")) gsap.set("#" + id + "-mouth", { svgOrigin: "0 -256" });
  };

  // ---------------------------------------------------------------- personnage de profil (regarde vers la droite)
  P.side = function (id, o) {
    var skin = o.skin || "#6E4429",
      skinD = shade(skin, 0.16);
    var top = o.top || "#0A7537",
      topD = shade(top, 0.18);
    var shirt = o.shirt || "#FFFFFF";
    var bot = o.bottom || "#1F2A24",
      botD = shade(bot, 0.22);
    var shoes = o.shoes || "#1A1C19";
    var hairC = o.hairColor || "#1C1411";
    function leg(side, far) {
      var c = far ? botD : bot;
      var th = rr(-21, -12, 42, 156, 21, c);
      var sh = rr(-18, 128, 36, 156, 18, c);
      var ft = path("M -18,270 L 26,274 C 44,278 46,292 38,296 L -18,296 Z", far ? shade(shoes, -0.1) : shoes);
      return joint(id + "-th" + side, 0, 0, svg([-40, -20, 80, 180], th) + joint(id + "-sh" + side, 0, 140, svg([-40, 120, 100, 190], sh + ft)));
    }
    function arm(side, far) {
      var c = far ? topD : top;
      var ua = rr(-16, -220, 32, 124, 16, c);
      var fa = rr(-15, -110, 30, 100, 15, c) + rr(-14, -22, 28, 12, 4, far ? shade(shirt, 0.1) : shirt);
      var hand = path("M -14,-10 L 14,-10 C 17,6 12,22 2,28 C -10,24 -16,8 -14,-10 Z", far ? skinD : skin);
      var grip = '<div id="' + id + "-grip" + side + '" class="pp-grip" style="position:absolute;left:0px;top:10px;width:0;height:0"></div>';
      return joint(id + "-ua" + side, 0, -206, svg([-30, -232, 60, 150], ua) + joint(id + "-fa" + side, 0, -102, svg([-30, -116, 60, 150], fa + hand) + grip));
    }
    var torsoD = "M -10,-232 C -24,-230 -31,-216 -31,-192 L -33,-110 C -33,-60 -31,-20 -33,16 L 33,16 C 31,-20 27,-60 29,-100 C " + (o.sex === "m" ? "33,-130 33,-160 31,-190" : "38,-128 39,-160 34,-190") + " C 30,-214 18,-230 6,-234 Z";
    var torso =
      rr(-6, -256, 22, 34, 8, skin) + rr(-6, -256, 22, 10, 4, skinD) +
      path(torsoD, top) +
      path("M 6,-232 L 18,-226 L 26,-200 L 12,-214 Z", shirt) +
      stroke("M 10,-226 L 24,-150", topD, 3);
    var head =
      el(2, -288, 31, 38, skin) +
      path("M 26,-300 C 34,-292 40,-282 36,-277 C 33,-274 29,-275 27,-276 Z", skin) +
      el(18, -262, 14, 11, skin) +
      el(-6, -284, 6, 9, skinD) +
      el(21, -289, 3, 4, "#1C1411") +
      stroke("M 15,-298 Q 21,-301 27,-298", "#1C1411", 2.4) +
      stroke("M 23,-262 L 30,-263", shade(skin, 0.42), 2.4) +
      (o.sex === "m"
        ? path("M -30,-282 C -34,-314 -14,-328 6,-328 C 22,-328 32,-318 32,-304 C 22,-310 10,-312 -2,-308 C -10,-300 -16,-292 -20,-280 C -24,-276 -28,-276 -30,-282 Z", hairC)
        : path("M -33,-276 C -44,-322 -10,-350 16,-341 C 34,-335 43,-318 38,-302 C 28,-310 14,-313 0,-309 C -7,-300 -12,-291 -16,-281 C -22,-273 -30,-271 -33,-276 Z", hairC));
    var body =
      arm("B", true) +
      leg("B", true) +
      leg("F", false) +
      svg([-60, -262, 120, 290], torso) +
      joint(id + "-head", 4, -244, svg([-60, -360, 120, 125], head)) +
      arm("F", false);
    var s = o.s || 1;
    return (
      '<div id="' + id + '" class="pp" style="position:absolute;left:' + (o.x || 0) + "px;top:" + (o.y || 0) + "px;width:0;height:0;" + (o.z != null ? "z-index:" + o.z + ";" : "") + '">' +
      '<div style="position:absolute;left:0;top:0;width:0;height:0;transform:scale(' + s + ');transform-origin:0 0">' +
      joint(id + "-body", 0, 0, body) +
      "</div></div>"
    );
  };

  // marche de profil : ajoute au timeline les poses d'un pas toutes les `step` secondes, de t0 à t1
  P.walk = function (tl, id, t0, t1, step, amp) {
    amp = amp || 1;
    var n = Math.max(1, Math.round((t1 - t0) / step));
    var st = (t1 - t0) / n;
    for (var i = 0; i <= n; i++) {
      var t = t0 + i * st;
      var a = i % 2 === 0 ? 1 : -1;
      var last = i === n;
      var th = last ? 0 : 21 * a * amp;
      tl.to("#" + id + "-thF", { rotation: -th, duration: st, ease: "sine.inOut" }, t - st)
        .to("#" + id + "-thB", { rotation: th, duration: st, ease: "sine.inOut" }, t - st)
        .to("#" + id + "-uaB", { rotation: last ? 0 : -16 * a * amp, duration: st, ease: "sine.inOut" }, t - st);
      // genou plié au passage, tendu au contact
      tl.to("#" + id + "-shF", { rotation: last ? 0 : a > 0 ? 6 : 30, duration: st / 2, ease: "sine.out" }, t - st)
        .to("#" + id + "-shF", { rotation: last ? 0 : a > 0 ? 2 : 10, duration: st / 2, ease: "sine.in" }, t - st / 2)
        .to("#" + id + "-shB", { rotation: last ? 0 : a > 0 ? 30 : 6, duration: st / 2, ease: "sine.out" }, t - st)
        .to("#" + id + "-shB", { rotation: last ? 0 : a > 0 ? 10 : 2, duration: st / 2, ease: "sine.in" }, t - st / 2);
      // bassin : bas au contact, haut au passage
      tl.to("#" + id + "-body", { y: -5 * amp, duration: st / 2, ease: "sine.out" }, t - st).to("#" + id + "-body", { y: 0, duration: st / 2, ease: "sine.in" }, t - st / 2);
    }
  };

  // respiration et clignements : fonctions du temps, ajoutées comme tweens finis
  P.breathe = function (tl, id, t0, t1, period, amp) {
    period = period || 4;
    amp = amp || 0.012;
    var n = Math.max(1, Math.floor((t1 - t0) / period));
    for (var i = 0; i < n; i++) {
      tl.to("#" + id + "-body", { scaleY: 1 + amp, duration: period / 2, ease: "sine.inOut", transformOrigin: "0px 0px" }, t0 + i * period).to(
        "#" + id + "-body",
        { scaleY: 1, duration: period / 2, ease: "sine.inOut" },
        t0 + i * period + period / 2,
      );
    }
  };
  P.blink = function (tl, id, times) {
    times.forEach(function (t) {
      tl.to("#" + id + "-eyes", { scaleY: 0.1, duration: 0.06, ease: "power2.in" }, t).to("#" + id + "-eyes", { scaleY: 1, duration: 0.08, ease: "power2.out" }, t + 0.06);
    });
  };

  // ---------------------------------------------------------------- avant-bras vu de dessus (entre par le bas du cadre)
  // repère : le coude en 0,0 ; l'avant-bras monte vers -y ; le poignet en 0,-330.
  // pose : "flat" (main à plat), "pen" (tient un stylo), "grip" (tient un objet par le dessus)
  P.armTop = function (id, o) {
    var skin = o.skin || "#6E4429",
      skinD = shade(skin, 0.16),
      skinL = P.tint(skin, 0.12);
    var top = o.top || "#0A7537",
      topD = shade(top, 0.14);
    var shirt = o.shirt || "#FFFFFF";
    var left = o.hand === "L"; // main gauche : pouce à droite
    var k = left ? -1 : 1;
    var sleeve = rr(-62, -340, 124, 420, 56, top) + rr(left ? 30 : -62, -330, 32, 400, 16, topD) + rr(-54, -350, 108, 28, 10, shirt);
    var hand = "";
    if (o.pose === "pen") {
      hand =
        rr(-44, -444, 88, 104, 40, skin) +
        rr(-40 * k - 9, -470, 22, 46, 11, skin, ' transform="rotate(' + -18 * k + " " + -40 * k + ' -440)"') +
        [-26, -6, 14].map(function (x, i) {
          return rr(x * k - 10, -468 + i * 4, 20, 34, 10, skinD);
        }).join("") +
        rr(-3, -560, 8, 150, 4, "#1A1C19", ' transform="rotate(' + 24 * k + ' 0 -450)"') +
        rr(-2, -566, 6, 16, 3, "#C9CEC9", ' transform="rotate(' + 24 * k + ' 0 -450)"');
    } else if (o.pose === "grip") {
      hand =
        rr(-48, -450, 96, 112, 44, skin) +
        [-30, -10, 10, 30].map(function (x) {
          return rr(x - 10, -470, 20, 40, 10, skinD);
        }).join("") +
        rr(-56 * k - 10, -430, 24, 70, 12, skin, ' transform="rotate(' + 20 * k + " " + -56 * k + ' -400)"');
    } else {
      hand =
        rr(-46, -440, 92, 104, 34, skin) +
        [
          [-33, 58],
          [-11, 72],
          [11, 70],
          [32, 56],
        ].map(function (f) {
          return rr(f[0] * k - 9, -436 - f[1], 18, f[1] + 20, 9, skin) + el(f[0] * k, -432 - f[1], 5, 4, skinL);
        }).join("") +
        rr(-58 * k - 11, -428, 22, 72, 11, skin, ' transform="rotate(' + 32 * k + " " + -58 * k + ' -370)"');
    }
    var grip = '<div id="' + id + '-grip" class="pp-grip" style="position:absolute;left:0px;top:-470px;width:0;height:0"></div>';
    var s = o.s || 1;
    return (
      '<div id="' + id + '" class="pp" style="position:absolute;left:' + (o.x || 0) + "px;top:" + (o.y || 0) + "px;width:0;height:0;" + (o.z != null ? "z-index:" + o.z + ";" : "") + '">' +
      '<div style="position:absolute;left:0;top:0;width:0;height:0;transform:scale(' + s + ") rotate(" + (o.r || 0) + 'deg);transform-origin:0 0">' +
      joint(
        id + "-arm",
        0,
        0,
        '<div style="position:absolute;left:0;top:0;width:0;height:0;filter:drop-shadow(0 18px 22px rgba(0,0,0,.16))">' +
          (o.under ? '<div id="' + id + '-under" style="position:absolute;left:0px;top:-470px;width:0;height:0">' + o.under + "</div>" : "") +
          svg([-90, -600, 180, 700], sleeve + hand) +
          grip +
          "</div>",
      ) +
      "</div></div>"
    );
  };

  // ---------------------------------------------------------------- objets
  // chemise « Dossier d'adhésion » vue de dessus (w × h), avec logo blanc stylisé
  P.folderTop = function (w, h) {
    var band = Math.round(h * 0.07);
    return (
      '<div class="pp-folder" style="position:absolute;left:0;top:0;width:' + w + "px;height:" + h + 'px;background:#063D21;border-radius:10px;box-shadow:0 10px 28px rgba(0,0,0,.18);overflow:hidden">' +
      '<div style="position:absolute;left:0;top:' + Math.round(h * 0.56) + "px;width:100%;height:" + band + 'px;background:#C2C08E"></div>' +
      '<div style="position:absolute;left:' + Math.round(w * 0.1) + "px;top:" + Math.round(h * 0.66) + 'px;font-family:\'Hyundai Sans Head\';font-weight:700;color:#fff;font-size:' + Math.round(h * 0.085) + 'px;line-height:1.02;letter-spacing:-0.01em">DOSSIER<br>D\'ADHÉSION</div>' +
      '<img src="assets/img/feg-logo-white.png" style="position:absolute;left:' + Math.round(w * 0.1) + "px;top:" + Math.round(h * 0.08) + "px;height:" + Math.round(h * 0.2) + 'px" alt="">' +
      "</div>"
    );
  };

  window.FEGP = P;
})();
