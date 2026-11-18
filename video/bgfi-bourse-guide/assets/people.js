// Personnages et mains à plat — vidéo « Investir en Bourse avec BGFIBourse » (reprise de la bibliothèque
// des films « Comment adhérer à la FEG » et « Le Fonds 4 de la CNAMGS » : mêmes corps, visages, mains
// vus de dessus et accessoires ; seuls l'insigne et la poche sont aux couleurs de BGFIBourse).
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

  // ---------------------------------------------------------------- mains
  var D2R = Math.PI / 180;
  function f1(v) {
    return Math.round(v * 10) / 10;
  }
  // doigt effilé : base (x, y), direction a en degrés (0 = droite, 90 = bas), longueur,
  // largeurs à la base et au bout, flexion de la phalange distale (degrés)
  function fingerGeo(x, y, a, len, w0, w1, bend) {
    var a1 = a * D2R,
      a2 = (a + (bend || 0)) * D2R,
      am = (a1 + a2) / 2;
    var l1 = len * 0.56,
      l2 = len - l1;
    var p0 = [x, y],
      p1 = [x + l1 * Math.cos(a1), y + l1 * Math.sin(a1)];
    var p2 = [p1[0] + l2 * Math.cos(a2), p1[1] + l2 * Math.sin(a2)];
    var wm = (w0 + w1) / 2;
    function off(p, an, w, sg) {
      return [f1(p[0] - Math.sin(an) * (w / 2) * sg), f1(p[1] + Math.cos(an) * (w / 2) * sg)];
    }
    function ahead(p, an, dd, side) {
      return [f1(p[0] + Math.cos(an) * dd - Math.sin(an) * side), f1(p[1] + Math.sin(an) * dd + Math.cos(an) * side)];
    }
    var pts = [
      off(p0, a1, w0, 1), off(p1, am, wm, 1), off(p2, a2, w1, 1),
      ahead(p2, a2, w1 * 0.3, w1 * 0.4), ahead(p2, a2, w1 * 0.52, 0), ahead(p2, a2, w1 * 0.3, -w1 * 0.4),
      off(p2, a2, w1, -1), off(p1, am, wm, -1), off(p0, a1, w0, -1),
    ];
    return { pts: pts, p1: p1, p2: p2, a1: a1, a2: a2, am: am, wm: wm, w1: w1 };
  }
  // opt : { line: liseré, lw, crease: pli de l'articulation, nail: ongle }
  function finger(x, y, a, len, w0, w1, bend, fill, opt) {
    opt = opt || {};
    var g = fingerGeo(x, y, a, len, w0, w1, bend);
    var s = '<path d="' + smooth(g.pts) + '" fill="' + fill + '"' + (opt.line ? ' stroke="' + opt.line + '" stroke-width="' + (opt.lw || 1.4) + '" stroke-linejoin="round"' : "") + "/>";
    if (opt.crease) {
      var w = g.wm * 0.3,
        q = g.p1,
        an = g.am;
      s += stroke("M " + f1(q[0] - Math.sin(an) * w) + "," + f1(q[1] + Math.cos(an) * w) + " L " + f1(q[0] + Math.sin(an) * w) + "," + f1(q[1] - Math.cos(an) * w), opt.crease, opt.cw || 1.3);
    }
    if (opt.nail) {
      var c = [g.p2[0] + Math.cos(g.a2) * g.w1 * 0.16, g.p2[1] + Math.sin(g.a2) * g.w1 * 0.16];
      s +=
        '<ellipse cx="' + f1(c[0]) + '" cy="' + f1(c[1]) + '" rx="' + f1(g.w1 * 0.34) + '" ry="' + f1(g.w1 * 0.27) + '" transform="rotate(' + f1(g.a2 / D2R) + " " + f1(c[0]) + " " + f1(c[1]) +
        ')" fill="' + opt.nail + '"/>';
    }
    return s;
  }
  P.finger = finger;
  // pli entre deux doigts voisins : de la base vers le bout, sur une fraction t0..t1 de la longueur
  function sep(x1, y1, x2, y2, a, len, t0, t1, col, w) {
    var mx = (x1 + x2) / 2,
      my = (y1 + y2) / 2,
      ar = a * D2R;
    return stroke(
      "M " + f1(mx + Math.cos(ar) * len * t0) + "," + f1(my + Math.sin(ar) * len * t0) + " L " + f1(mx + Math.cos(ar) * len * t1) + "," + f1(my + Math.sin(ar) * len * t1),
      col,
      w || 1.3,
    );
  }
  // stylo : du bout arrière A à la pointe B, largeur w
  function pen(A, B, w) {
    var dx = B[0] - A[0],
      dy = B[1] - A[1],
      L = Math.sqrt(dx * dx + dy * dy),
      ux = dx / L,
      uy = dy / L,
      nx = -uy * (w / 2),
      ny = ux * (w / 2);
    function at(t, k) {
      return f1(A[0] + dx * t + nx * k) + "," + f1(A[1] + dy * t + ny * k);
    }
    return (
      '<path d="M ' + at(0, 1) + " L " + at(0.84, 1) + " L " + at(0.84, -1) + " L " + at(0, -1) + ' Z" fill="#1A1C19"/>' +
      '<path d="M ' + at(0.84, 1) + " L " + at(0.95, 0.8) + " L " + at(1, 0) + " L " + at(0.95, -0.8) + " L " + at(0.84, -1) + ' Z" fill="#C9CEC9"/>' +
      '<path d="M ' + at(0.04, 1.05) + " L " + at(0.3, 1.05) + " L " + at(0.3, 0.55) + " L " + at(0.04, 0.55) + ' Z" fill="#8A9590"/>'
    );
  }
  // surligneur : corps de couleur col, bouchon arrière plus sombre, pointe biseautée (de A vers B, largeur w)
  function marker(A, B, w, col) {
    var dx = B[0] - A[0],
      dy = B[1] - A[1],
      L = Math.sqrt(dx * dx + dy * dy),
      nx = (-dy / L) * (w / 2),
      ny = (dx / L) * (w / 2);
    function at(t, k) {
      return f1(A[0] + dx * t + nx * k) + "," + f1(A[1] + dy * t + ny * k);
    }
    return (
      '<path d="M ' + at(0, 1) + " L " + at(0.8, 1) + " L " + at(0.8, -1) + " L " + at(0, -1) + ' Z" fill="' + col + '"/>' +
      '<path d="M ' + at(0, 1) + " L " + at(0.22, 1) + " L " + at(0.22, -1) + " L " + at(0, -1) + ' Z" fill="' + shade(col, 0.28) + '"/>' +
      '<path d="M ' + at(0.8, 1) + " L " + at(0.9, 0.62) + " L " + at(0.9, -0.62) + " L " + at(0.8, -1) + ' Z" fill="#E9ECEF"/>' +
      '<path d="M ' + at(0.9, 0.62) + " L " + at(1, 0.2) + " L " + at(1, -0.5) + " L " + at(0.9, -0.62) + ' Z" fill="' + shade(col, 0.1) + '"/>'
    );
  }
  // main pendante vue de face : poignet en (x, y), doigts vers le bas, pouce du côté t (+1 : vers +x)
  function handFront(x, y, t, skin) {
    var d = shade(skin, 0.2);
    function X(v) {
      return f1(x + v * t);
    }
    var palm = smooth([[X(-11.5), y], [X(-13.5), y + 13], [X(-12.5), y + 26], [X(-9), y + 37], [X(-4), y + 43], [X(2), y + 43.5], [X(7), y + 39], [X(10), y + 30], [X(11.5), y + 17], [X(11.5), y + 5], [X(11), y]]);
    return (
      path(palm, skin) +
      stroke("M " + X(-6.5) + "," + (y + 30) + " L " + X(-6) + "," + (y + 39), d, 1.2) +
      stroke("M " + X(-1) + "," + (y + 32) + " L " + X(-0.5) + "," + (y + 42), d, 1.2) +
      stroke("M " + X(4) + "," + (y + 31) + " L " + X(4.5) + "," + (y + 39), d, 1.2) +
      finger(x + 8.5 * t, y + 7, t > 0 ? 97 : 83, 24, 10.5, 8.5, t > 0 ? 9 : -9, skin) +
      stroke("M " + X(5) + "," + (y + 9) + " C " + X(5.5) + "," + (y + 17) + " " + X(5) + "," + (y + 24) + " " + X(4) + "," + (y + 30), d, 1.1)
    );
  }
  // main pendante de profil (regarde vers +x) : poignet en (x, y)
  function handSide(x, y, skin) {
    var d = shade(skin, 0.2);
    var palm = smooth([[x - 12, y], [x - 14, y + 14], [x - 13, y + 28], [x - 8, y + 39], [x - 1, y + 44], [x + 5, y + 41], [x + 9, y + 32], [x + 12, y + 18], [x + 13, y + 5], [x + 12, y]]);
    return (
      path(palm, skin) +
      stroke("M " + (x - 4) + "," + (y + 30) + " L " + (x - 3) + "," + (y + 41), d, 1.2) +
      finger(x + 9, y + 8, 83, 23, 10.5, 8.5, -9, skin) +
      stroke("M " + (x + 5) + "," + (y + 10) + " C " + (x + 5.5) + "," + (y + 18) + " " + (x + 5) + "," + (y + 25) + " " + (x + 4) + "," + (y + 31), d, 1.1)
    );
  }
  // main droite vue de dessus, paume vers le bas, poignet en (0,0), doigts vers -y : tient un stylo
  // (pince à trois doigts : l'index posé sur le stylo, les autres doigts repliés)
  function handTopPen(skin, mk) {
    var d = shade(skin, 0.16),
      nail = P.tint(skin, 0.14);
    var back = smooth([[-40, 2], [-46, -30], [-50, -62], [-44, -90], [-26, -106], [-2, -112], [22, -108], [40, -96], [50, -70], [46, -30], [40, 2]]);
    return (
      path(back, skin) +
      finger(40, -92, -70, 16, 21, 19, 0, skin) +
      finger(21, -104, -80, 19, 24, 22, 0, skin) +
      finger(0, -110, -92, 24, 25, 23, 0, skin) +
      sep(21, -104, 40, -92, -75, 18, 0.35, 1.0, d) +
      sep(0, -110, 21, -104, -86, 22, 0.35, 1.0, d) +
      stroke("M -14,-97 C -2,-102 14,-102 30,-96", d, 1.2) +
      finger(-36, -62, -106, 78, 30, 21, 30, skin, { nail: nail }) +
      stroke("M -32,-66 C -38,-80 -40,-92 -38,-104", d, 1.2) +
      (mk ? marker([8, -40], [-80, -262], 17, mk) : pen([8, -40], [-80, -262], 9)) +
      finger(-20, -104, -112, 108, 23, 18, 4, skin, { crease: d, nail: nail }) +
      sep(-20, -104, 0, -110, -104, 30, 0.1, 0.8, d)
    );
  }
  // main droite vue de dessus, à plat (paume vers le bas), poignet en (0,0), doigts tendus vers -y, pouce à gauche
  function handTopFlat(skin) {
    var d = shade(skin, 0.16),
      nail = P.tint(skin, 0.14);
    var back = smooth([[-40, 2], [-46, -30], [-48, -62], [-44, -92], [-30, -106], [-8, -112], [16, -111], [34, -103], [45, -84], [46, -40], [40, 2]]);
    var o2 = { nail: nail, crease: d };
    return (
      finger(-48, -48, -128, 70, 30, 21, 12, skin, { nail: nail }) +
      path(back, skin) +
      finger(36, -98, -78, 62, 21, 17, -3, skin, o2) +
      finger(18, -108, -85, 80, 23, 19, -2, skin, o2) +
      finger(-2, -111, -91, 88, 24, 20, 0, skin, o2) +
      finger(-22, -106, -98, 80, 24, 20, 2, skin, o2) +
      sep(18, -108, 36, -98, -82, 70, 0.06, 0.62, d) +
      sep(-2, -111, 18, -108, -88, 80, 0.06, 0.66, d) +
      sep(-22, -106, -2, -111, -95, 78, 0.06, 0.66, d) +
      stroke("M -26,-96 C -8,-104 16,-104 38,-92", d, 1.2) +
      stroke("M -40,-56 C -30,-62 -24,-74 -22,-90", d, 1.2)
    );
  }
  // main droite vue de dessus, refermée en poing sur la poignée d'un tampon (poignée en 0,-132)
  function handTopGrip(skin) {
    var d = shade(skin, 0.16),
      nail = P.tint(skin, 0.14);
    var back = smooth([[-40, 2], [-47, -32], [-50, -64], [-44, -94], [-26, -110], [-2, -116], [22, -112], [40, -100], [50, -72], [46, -32], [40, 2]]);
    return (
      path(back, skin) +
      finger(39, -96, -76, 26, 21, 19, 0, skin) +
      finger(20, -108, -84, 31, 24, 22, 0, skin) +
      finger(-2, -112, -90, 33, 25, 23, 0, skin) +
      finger(-24, -104, -96, 31, 24, 22, 0, skin) +
      sep(20, -108, 39, -96, -80, 28, 0.25, 1.0, d) +
      sep(-2, -112, 20, -108, -87, 32, 0.25, 1.0, d) +
      sep(-24, -104, -2, -112, -93, 32, 0.25, 1.0, d) +
      stroke("M -34,-100 C -14,-110 14,-110 46,-94", d, 1.2) +
      finger(-38, -62, -112, 66, 28, 22, 28, skin, { nail: nail }) +
      stroke("M -34,-66 C -40,-80 -42,-90 -38,-100", d, 1.2)
    );
  }
  // poignée de main en gros plan : renvoie { herOpen, hisOpen, clasp } (SVG, repère écran 1920 × 1080)
  // elle arrive de la gauche (peau a), lui de la droite (peau b) ; une fois serrées, ses doigts à elle
  // enveloppent le dos de la main de l'autre et son pouce repose dessus
  P.handshake = function (a, b) {
    var da = shade(a, 0.2),
      db = shade(b, 0.22),
      na = P.tint(a, 0.22),
      nb = P.tint(b, 0.22);
    var oa = { line: da, lw: 1.6, crease: da, nail: na },
      ob = { line: db, lw: 1.6, crease: db, nail: nb };
    function openHand(skin, o, line) {
      return (
        path(smooth([[752, 524], [790, 516], [830, 514], [866, 518], [884, 528], [888, 560], [882, 592], [860, 606], [820, 612], [784, 614], [754, 610]]), skin) +
        stroke("M 872,532 C 878,552 878,580 870,598", line, 1.4) +
        finger(870, 596, 6, 62, 20, 16, 6, skin, o) +
        finger(880, 577, 2, 80, 24, 19, 6, skin, o) +
        finger(884, 555, 0, 90, 25, 20, 6, skin, o) +
        finger(878, 532, -3, 86, 24, 19, 6, skin, o) +
        finger(812, 524, -50, 62, 27, 21, 22, skin, o)
      );
    }
    var herOpen = openHand(a, oa, da);
    var hisOpen = '<g transform="translate(1920,0) scale(-1,1)">' + openHand(b, ob, db) + "</g>";
    var clasp =
      path(smooth([[1166, 514], [1120, 508], [1060, 508], [1000, 514], [964, 528], [958, 560], [968, 588], [1000, 598], [1060, 600], [1120, 602], [1166, 604]]), b) +
      path(smooth([[752, 524], [790, 516], [830, 513], [868, 516], [892, 528], [898, 560], [892, 594], [866, 610], [820, 614], [784, 614], [754, 610]]), a) +
      stroke("M 880,536 C 887,556 887,582 878,600", da, 1.4) +
      finger(880, 600, 26, 58, 20, 16, 40, a, oa) +
      finger(890, 580, 16, 78, 24, 19, 44, a, oa) +
      finger(892, 557, 10, 88, 25, 20, 44, a, oa) +
      finger(888, 534, 5, 90, 24, 19, 42, a, oa) +
      finger(846, 521, -7, 96, 27, 21, 8, a, oa);
    return { herOpen: herOpen, hisOpen: hisOpen, clasp: clasp };
  };
  // mains tenant un dossier de face par ses bords (repère du dossier, largeur w) :
  // le dos de la main dépasse du bord, les quatre doigts se replient sur la couverture
  P.folderHands = function (w, skin, top, shirt) {
    var d = shade(skin, 0.18),
      topD = shade(top, 0.12);
    function arm() {
      var E = [-94, 228],
        W = [-46, 182];
      var dx = W[0] - E[0],
        dy = W[1] - E[1],
        L = Math.sqrt(dx * dx + dy * dy),
        nx = -dy / L,
        ny = dx / L;
      function q(t, h) {
        return f1(E[0] + dx * t + nx * h) + "," + f1(E[1] + dy * t + ny * h);
      }
      return (
        '<circle cx="' + E[0] + '" cy="' + E[1] + '" r="33" fill="' + top + '"/>' +
        '<path d="M ' + q(0, 34) + " L " + q(0.84, 27) + " L " + q(0.84, -27) + " L " + q(0, -34) + ' Z" fill="' + top + '"/>' +
        '<path d="M ' + q(0, -34) + " L " + q(0.84, -27) + " L " + q(0.84, -12) + " L " + q(0, -16) + ' Z" fill="' + topD + '"/>' +
        '<path d="M ' + q(0.8, 28) + " L " + q(0.98, 27) + " L " + q(0.98, -27) + " L " + q(0.8, -28) + ' Z" fill="' + shirt + '"/>' +
        path(smooth([[-44, 204], [-50, 186], [-48, 164], [-40, 147], [-25, 137], [-8, 134], [2, 138], [4, 196], [-12, 208], [-30, 210]]), skin)
      );
    }
    function fingers() {
      // quatre doigts repliés sur la face avant, du haut (index) au bas (auriculaire)
      var f = [
        [138, 25, 17.5],
        [155, 27, 18],
        [172, 25, 17.5],
        [188, 20, 15.5],
      ];
      var s2 = "";
      f.forEach(function (g) {
        s2 += finger(-4, g[0], 4, g[1], g[2], g[2] - 2, 10, skin);
      });
      s2 += stroke("M 2,146.5 L 16,147.5", d, 1.2) + stroke("M 2,163.5 L 17,164.5", d, 1.2) + stroke("M 2,180 L 15,181", d, 1.2);
      return s2;
    }
    var mir = '<g transform="translate(' + w + ',0) scale(-1,1)">';
    return { back: arm() + mir + arm() + "</g>", front: fingers() + mir + fingers() + "</g>" };
  };
  // mains posées sur la table, vue de face (personnage assis) : avant-bras du coude au poignet, main droite sur la gauche
  // elbowX : x du coude (négatif, côté gauche) ; repère du personnage
  function tableArms(elbowX, skin, top, shirt) {
    var d = shade(skin, 0.2),
      topD = shade(top, 0.13);
    function side(k) {
      var E = [elbowX * k, -103],
        W = [-28 * k, -86];
      var dx = W[0] - E[0],
        dy = W[1] - E[1],
        Lg = Math.sqrt(dx * dx + dy * dy),
        nx = -dy / Lg,
        ny = dx / Lg;
      function q(t, h) {
        return f1(E[0] + dx * t + nx * h) + "," + f1(E[1] + dy * t + ny * h);
      }
      function X(v) {
        return f1(v * k);
      }
      var sleeve = '<path d="M ' + q(0, 15) + " L " + q(0.9, 13) + " L " + q(0.9, -13) + " L " + q(0, -15) + ' Z" fill="' + (k < 0 ? top : topD) + '"/>';
      var cuff = '<path d="M ' + q(0.86, 13.4) + " L " + q(1.0, 13) + " L " + q(1.0, -13) + " L " + q(0.86, -13.4) + ' Z" fill="' + shirt + '"/>';
      var hand =
        path(smooth([[X(-30), -95], [X(-18), -98], [X(-5), -98], [X(5), -96], [X(13), -93], [X(16), -88.5], [X(13), -84], [X(3), -81], [X(-9), -80], [X(-21), -80], [X(-30), -79.5]]), skin) +
        stroke("M " + X(1) + ",-93 L " + X(12) + ",-91.5", d, 1.1) +
        stroke("M " + X(1) + ",-88.5 L " + X(14) + ",-88", d, 1.1) +
        stroke("M " + X(0) + ",-84.5 L " + X(11) + ",-84.5", d, 1.1) +
        stroke("M " + X(-21) + ",-81.5 C " + X(-14) + ",-83 " + X(-8) + ",-83 " + X(-3) + ",-81", d, 1.1);
      return sleeve + cuff + hand;
    }
    return side(-1) + side(1);
  }
  P.tableArms = tableArms;
  // deux mains serrées vues de profil, petite échelle (centre 0,0) : elle à gauche (peau a), lui à droite (peau b) ;
  // ses doigts à elle passent sur le dos de la main de l'autre, son pouce repose dessus
  P.claspSide = function (a, b) {
    var da = shade(a, 0.18);
    return (
      path(smooth([[-4, -16], [14, -18], [30, -15], [37, -6], [36, 7], [29, 15], [12, 17], [-4, 15]]), b) +
      path(smooth([[-36, -14], [-18, -18], [0, -18], [8, -14], [10, 2], [6, 15], [-8, 18], [-24, 17], [-36, 15]]), a) +
      finger(4, -12, 82, 22, 9.5, 8.5, 26, a) +
      finger(12, -11, 86, 21, 9.5, 8.5, 26, a) +
      finger(20, -9, 90, 18, 9, 8, 26, a) +
      stroke("M 8.6,-6 L 7.6,6", da, 1) +
      stroke("M 16.5,-5 L 15.5,6", da, 1) +
      finger(-22, -15, -6, 40, 11, 8.5, 6, a, { nail: P.tint(a, 0.14) }) +
      stroke("M -20,-10 C -10,-12.5 0,-13.5 10,-14", da, 1)
    );
  };
  // pouces posés sur les coins bas d'un dossier tenu de face (repère du dossier, largeur w, hauteur h)
  P.cornerThumbs = function (w, h, skin) {
    var d = shade(skin, 0.2),
      nl = P.tint(skin, 0.2);
    function one() {
      return (
        path(smooth([[-12, h - 46], [-2, h - 52], [4, h - 40], [4, h - 2], [-6, h + 4], [-14, h - 10]]), skin) +
        finger(-1, h - 30, -68, 40, 19, 15, -6, skin, { line: d, lw: 1.3, crease: d, nail: nl })
      );
    }
    return one() + '<g transform="translate(' + w + ',0) scale(-1,1)">' + one() + "</g>";
  };
  P.hands = { front: handFront, side: handSide, topPen: handTopPen, topGrip: handTopGrip, topFlat: handTopFlat, pen: pen, marker: marker };


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

  // ---------------------------------------------------------------- accessoires des métiers (vue de face)
  // motif wax : cercles concentriques en quinconce (couleurs c2, c3), dans le repère du personnage
  function waxDots(x0, y0, x1, y1, step, c2, c3, r) {
    var s2 = "";
    r = r || 11;
    var row = 0;
    for (var y = y0; y <= y1; y += step * 0.86, row++) {
      for (var x = x0 + (row % 2 ? step / 2 : 0); x <= x1; x += step) {
        s2 += '<circle cx="' + f1(x) + '" cy="' + f1(y) + '" r="' + r + '" fill="' + c2 + '"/>' + '<circle cx="' + f1(x) + '" cy="' + f1(y) + '" r="' + f1(r * 0.45) + '" fill="' + c3 + '"/>';
      }
    }
    return s2;
  }
  // casquette (couleur col) posée sur la tête, visière vers nous
  function capFront(col) {
    var d = shade(col, 0.22);
    return (
      path("M -36,-309 C -37,-333 -20,-348 0,-349 C 20,-348 37,-333 36,-309 C 20,-313 -20,-313 -36,-309 Z", col) +
      path("M -14,-345 C -6,-348 6,-348 14,-345 L 12,-314 C 4,-315 -4,-315 -12,-314 Z", P.tint(col, 0.1)) +
      el(0, -348, 4, 2.6, d) +
      path("M -41,-312 C -22,-320 22,-320 41,-312 C 45,-305 36,-299 0,-299 C -36,-299 -45,-305 -41,-312 Z", d) +
      stroke("M -36,-305 C -16,-302 16,-302 36,-305", shade(col, 0.4), 1.4)
    );
  }
  // chapeau de paille à large bord (jardinier)
  function strawHat(col, band) {
    var d = shade(col, 0.16);
    return (
      path("M -36,-318 C -38,-347 -22,-363 0,-363 C 22,-363 38,-347 36,-318 Z", col) +
      path("M -37,-330 C -20,-326 20,-326 37,-330 L 36,-319 C 20,-315 -20,-315 -36,-319 Z", band || "#8A5A2B") +
      el(0, -316, 72, 13, col) +
      stroke("M -62,-311 C -30,-305 30,-305 62,-311", d, 1.6) +
      stroke("M -50,-322 C -24,-327 24,-327 50,-322", P.tint(col, 0.25), 1.4)
    );
  }
  // foulard noué (commerçante) : c1 tissu, c2 motif
  function scarfFront(id, c1, c2) {
    var cid = id + "-scl";
    var shape = smooth([[-37, -291], [-44, -310], [-48, -333], [-45, -353], [-34, -369], [-16, -379], [4, -382], [23, -379], [38, -369], [47, -353], [49, -332], [45, -310], [38, -291], [26, -301], [12, -307], [0, -308], [-12, -307], [-26, -301]]);
    return (
      '<defs><clipPath id="' + cid + '"><path d="' + shape + '"/></clipPath></defs>' +
      path(smooth([[8, -371], [16, -392], [32, -401], [45, -392], [40, -376], [24, -368]]), shade(c1, 0.1)) +
      path(smooth([[10, -373], [2, -395], [-12, -402], [-22, -393], [-12, -378], [0, -370]]), c1) +
      path(shape, c1) +
      '<g clip-path="url(#' + cid + ')">' + waxDots(-54, -400, 56, -296, 24, c2, c1, 6.5) +
      path("M -52,-322 C -20,-336 20,-340 52,-332 L 52,-322 C 20,-330 -20,-326 -52,-312 Z", shade(c1, 0.16)) + "</g>" +
      el(4, -374, 9, 7, shade(c1, 0.18))
    );
  }
  // stéthoscope autour du cou : la poire à gauche de l'écran, les embouts à droite
  function stethoFront(col) {
    col = col || "#2B3440";
    return (
      stroke("M -19,-236 C -30,-226 -35,-206 -35,-186 C -35,-176 -34,-168 -33,-162", col, 4.6) +
      '<circle cx="-33" cy="-153" r="9.5" fill="#C9CED6" stroke="' + col + '" stroke-width="3.4"/>' +
      stroke("M 19,-236 C 30,-226 34,-208 33,-191", col, 4.6) +
      stroke("M 33,-191 L 26,-175 M 33,-191 L 40,-175", "#8E98A4", 3.2) +
      el(26, -173, 2.8, 2.8, col) +
      el(40, -173, 2.8, 2.8, col)
    );
  }
  // tablier à bavette (couleur col) ; la jupe du tablier est dessinée avec les jambes
  function apronFront(col) {
    var d = shade(col, 0.16);
    return (
      stroke("M -33,-204 L -17,-237", d, 5) +
      stroke("M 33,-204 L 17,-237", d, 5) +
      path("M -42,-207 L 42,-207 L 46,-130 C 58,-118 64,-60 68,22 L -68,22 C -64,-60 -58,-118 -46,-130 Z", col) +
      rr(-30, -98, 60, 42, 6, d) +
      stroke("M -46,-128 L -78,-124", d, 4) +
      stroke("M 46,-128 L 78,-124", d, 4)
    );
  }
  // rabat d'avocat (deux bandes blanches sous le menton), col blanc et épitoge à hermine sur l'épaule gauche
  function rabatFront() {
    return (
      path("M 40,-226 C 50,-228 58,-224 60,-214 L 59,-160 L 37,-160 L 36,-214 C 36,-220 37,-224 40,-226 Z", "#3A4049") + stroke("M 37,-214 L 37,-162 M 59,-214 L 59,-162", "#14171B", 1.6) +
      path("M 37,-162 L 59,-162 L 59,-122 C 52,-116 44,-116 37,-122 Z", "#FFFFFF") +
      el(43, -148, 1.8, 2.6, "#14171B") + el(53, -140, 1.8, 2.6, "#14171B") + el(46, -129, 1.8, 2.6, "#14171B") +
      path("M -16,-236 L -24,-226 L -8,-222 Z", "#FFFFFF") + path("M 16,-236 L 24,-226 L 8,-222 Z", "#EEF1F4") +
      path("M -9,-232 L -1,-232 L -2,-192 L -11,-193 Z", "#FFFFFF") +
      path("M 9,-232 L 1,-232 L 2,-192 L 11,-193 Z", "#EEF1F4")
    );
  }
  // poche de poitrine avec un stylo (blouse)
  function pocketFront(col) {
    return rr(22, -184, 32, 30, 3, shade(col, 0.07)) + rr(27, -194, 5, 18, 2, "#0B2677") + rr(35, -191, 4, 15, 2, "#879A6D");
  }
  // insigne (le conseiller : badge au carré bicolore de BGFIBourse)
  function badgeFront(col) {
    // badge rectangulaire blanc, carré marine et sauge avec l'étoile (motif du logo)
    return rr(24, -190, 30, 22, 3, "#FFFFFF") + rr(28, -186, 11, 14, 1, "#0B2677") + rr(39, -188, 11, 14, 1, col || "#879A6D") + path("M 39,-183 L 40,-180.5 L 43,-180 L 40,-179.4 L 39,-176.8 L 38,-179.4 L 35,-180 L 38,-180.5 Z", "#FFFFFF");
  }

  // ---------------------------------------------------------------- personnage de face
  // o : { x, y, s (échelle), skin, hair, hairColor, top, shirt, tie, bottom, shoes, sex: "f"|"m",
  //       legs: bool, glasses, beard, z,
  //       accessoires : wax: [motif, centre] | tee, scarf: [tissu, motif], cap: couleur, hat: paille, hatBand,
  //       stetho: true|couleur, coat (pans de blouse), pocket, apron: couleur, rabat, badge: couleur,
  //       skirt: [tissu, motif, centre] }
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
    // o.wax = [motif, centre] : haut en wax à encolure ronde ; o.tee : tee-shirt uni à encolure ronde
    var wax = o.wax || null,
      round = !!(o.wax || o.tee);
    var torso =
      '<defs><clipPath id="' + clipId + '"><path d="' + torsoD + '"/></clipPath></defs>' +
      path("M -14,-254 L 14,-254 L 16,-226 L -16,-226 Z", skin) +
      path("M -14,-254 C -6,-246 6,-246 14,-254 L 15,-241 C 5,-234 -5,-234 -15,-241 Z", skinD) +
      path(torsoD, top) +
      '<g clip-path="url(#' + clipId + ')">' +
      (wax ? waxDots(-120, -252, 120, 30, 44, wax[0], wax[1] || top, 9) : "") +
      (round ? rr(26, -250, 140, 290, 0, "#000", ' opacity="0.12"') : rr(26, -250, 140, 290, 0, topD)) +
      path("M " + -(sw - 4) + ",-212 C -60,-226 -30,-232 -16,-234 L -20,-224 C -40,-222 -60,-216 " + -(sw - 10) + ",-204 Z", topL, round ? ' opacity="0.5"' : "") + "</g>" +
      (round
        ? // encolure ronde (haut en wax, tee-shirt) : pas de revers ni de boutons
          path("M -17,-235 C -11,-221 11,-221 17,-235 Z", skin) + stroke("M -19,-235 C -12,-219 12,-219 19,-235", shade(top, 0.22), 3)
        : path(f ? "M -16,-234 L 0,-146 L 16,-234 Z" : "M -16,-234 L 0,-134 L 16,-234 Z", shirt) +
          (o.tie ? path("M -6,-228 L 6,-228 L 9,-156 L 0,-140 L -9,-156 Z", o.tie) + path("M -7,-231 L 7,-231 L 5,-219 L -5,-219 Z", shade(o.tie, 0.2)) : "") +
          path("M -16,-234 L -26,-222 L -9,-207 Z", shirt) + path("M 16,-234 L 26,-222 L 9,-207 Z", shirtD) +
          path(f ? "M -16,-234 L -3,-148 L -30,-174 L -38,-202 L -28,-207 L -36,-226 Z" : "M -16,-234 L -3,-136 L -33,-168 L -42,-202 L -31,-207 L -38,-227 Z", topD) +
          path(f ? "M 16,-234 L 3,-148 L 30,-174 L 38,-202 L 28,-207 L 36,-226 Z" : "M 16,-234 L 3,-136 L 33,-168 L 42,-202 L 31,-207 L 38,-227 Z", topDD) +
          (o.apron ? "" : el(0, -112, 4.6, 4.6, topDD) + (f ? "" : el(0, -78, 4.6, 4.6, topDD)))) +
      (o.rabat ? rabatFront() : "") +
      (o.pocket ? pocketFront(top) : "") +
      (o.apron ? apronFront(o.apron) : "") +
      (o.badge ? badgeFront(o.badge) : "") +
      (o.stetho ? stethoFront(o.stetho === true ? null : o.stetho) : "");
    var face = "M 0,-328 C 21,-328 36,-312 36,-290 C 36,-270 30,-256 20,-247 C 13,-241 7,-238 0,-238 C -7,-238 -13,-241 -20,-247 C -30,-256 -36,-270 -36,-290 C -36,-312 -21,-328 0,-328 Z";
    var head =
      el(-35, -285, 6.5, 10.5, skinD) + el(35, -285, 6.5, 10.5, skinD) + path(face, skin) + faceFront(id, skin, o) +
      (o.scarf ? scarfFront(id, o.scarf[0], o.scarf[1]) : hairFront(o.hair || (f ? "afro" : "short"), hairC)) +
      (o.cap ? capFront(o.cap) : "") +
      (o.hat ? strawHat(o.hat, o.hatBand) : "");

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
      var hand = handFront(x, -8, -k, skin);
      var grip = '<div id="' + id + "-grip" + side + '" class="pp-grip" style="position:absolute;left:' + x + 'px;top:14px;width:0;height:0"></div>';
      return joint(id + "-ua" + side, x, -206, svg([x - 30, -232, 60, 150], ua) + joint(id + "-fa" + side, x, -100, (o.table ? "" : svg([x - 30, -110, 60, 150], fa + hand)) + grip));
    }
    var legs = "";
    if (o.legs) {
      var bot = o.bottom || "#1F2A24",
        shoes = o.shoes || "#1A1C19";
      var lg;
      if (o.skirt) {
        // jupe longue (pagne) : o.skirt = [tissu, motif, centre du motif]
        var sk = o.skirt,
          skId = id + "-skclip",
          skD = "M " + (-hw - 2) + ",-2 L " + (hw + 2) + ",-2 L " + (hw + 12) + ",282 L " + (-hw - 12) + ",282 Z";
        lg =
          rr(-46, 280, 40, 18, 8, shoes) + rr(6, 280, 40, 18, 8, shoes) +
          '<defs><clipPath id="' + skId + '"><path d="' + skD + '"/></clipPath></defs>' +
          path(skD, sk[0]) +
          '<g clip-path="url(#' + skId + ')">' + (sk[1] ? waxDots(-100, 22, 100, 290, 46, sk[1], sk[2] || sk[0], 8) : "") + rr(18, -4, 100, 300, 0, "#000", ' opacity="0.1"') + "</g>" +
          path("M " + (-hw - 2) + ",-2 L " + (hw + 2) + ",-2 L " + (hw + 3) + ",14 L " + (-hw - 3) + ",14 Z", shade(sk[0], 0.2));
      } else {
        lg =
          path("M " + -hw + ",0 L " + hw + ",0 L " + (hw - 4) + ",44 L " + (-hw + 4) + ",44 Z", bot) +
          path("M " + (-hw + 4) + ",20 L -5,20 L -12,292 L -44,292 Z", bot) +
          path("M " + (hw - 4) + ",20 L 5,20 L 12,292 L 44,292 Z", shade(bot, 0.12)) +
          rr(-52, 286, 46, 18, 8, shoes) + rr(6, 286, 46, 18, 8, shoes);
      }
      // pans de la blouse blanche, jusqu'aux genoux
      if (o.coat) lg += path("M " + (-hw - 2) + ",-4 L -2,-4 L -3,40 L -6,168 L " + (-hw - 14) + ",168 Z", top) + path("M " + (hw + 2) + ",-4 L 2,-4 L 3,40 L 6,168 L " + (hw + 14) + ",168 Z", topD);
      // jupe du tablier
      if (o.apron) lg += path("M -68,-4 L 68,-4 L 64,128 L -64,128 Z", o.apron) + rr(-64, 120, 128, 8, 3, shade(o.apron, 0.16));
      legs = svg([-100, -10, 200, 330], lg);
    }
    var body =
      legs +
      svg([-110, -262, 220, 290], torso, o.cut != null ? "overflow:hidden;clip-path:inset(0 0 " + Math.max(0, 28 - o.cut) + "px 0)" : "") +
      joint(id + "-head", 0, -244, svg([-60, -380, 120, 145], head)) +
      arm("L") +
      arm("R") +
      (o.table ? '<div id="' + id + '-table" style="position:absolute;left:0;top:0;width:0;height:0">' + svg([-130, -140, 260, 80], tableArms(-(sx + 106 * Math.sin((14 * Math.PI) / 180)), skin, top, shirt)) + "</div>" : "");
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

  // accessoires de profil (regard vers +x)
  function scarfSide(id, c1, c2) {
    var cid = id + "-ssc";
    var shape = smooth([[32, -303], [25, -324], [9, -337], [-12, -342], [-31, -335], [-44, -317], [-47, -295], [-42, -275], [-32, -263], [-24, -276], [-13, -294], [4, -304], [19, -307]]);
    return (
      '<defs><clipPath id="' + cid + '"><path d="' + shape + '"/></clipPath></defs>' +
      path(smooth([[-20, -333], [-33, -353], [-50, -358], [-57, -344], [-44, -330]]), shade(c1, 0.1)) +
      path(shape, c1) +
      '<g clip-path="url(#' + cid + ')">' + waxDots(-62, -352, 44, -258, 24, c2, c1, 6.5) + path("M -50,-300 C -20,-318 10,-326 40,-322 L 40,-312 C 10,-316 -20,-306 -50,-288 Z", shade(c1, 0.16)) + "</g>"
    );
  }
  function capSide(col) {
    var d = shade(col, 0.22);
    return path("M -31,-298 C -34,-326 -14,-341 6,-341 C 24,-341 35,-328 34,-306 C 14,-310 -10,-306 -31,-298 Z", col) + path("M 24,-309 C 38,-312 52,-308 60,-301 C 50,-298 34,-300 22,-301 Z", d) + el(4, -340, 4, 2.5, d);
  }

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
      var hand = handSide(0, -12, far ? skinD : skin);
      var grip = '<div id="' + id + "-grip" + side + '" class="pp-grip" style="position:absolute;left:0px;top:10px;width:0;height:0"></div>';
      // o.carry : objet tenu dans la main avant (HTML, repère de l'avant-bras ; dessiné sous la main)
      var carry = side === "F" && o.carry ? '<div id="' + id + '-carry" style="position:absolute;left:0;top:0;width:0;height:0">' + o.carry + "</div>" : "";
      return joint(id + "-ua" + side, 0, -206, svg([-30, -232, 60, 150], ua) + joint(id + "-fa" + side, 0, -102, carry + svg([-30, -116, 60, 150], fa + hand) + grip));
    }
    var torsoD = "M -10,-232 C -24,-230 -31,-216 -31,-192 L -33,-110 C -33,-60 -31,-20 -33,16 L 33,16 C 31,-20 27,-60 29,-100 C " + (o.sex === "m" ? "33,-130 33,-160 31,-190" : "38,-128 39,-160 34,-190") + " C 30,-214 18,-230 6,-234 Z";
    var torso =
      rr(-6, -256, 22, 34, 8, skin) + rr(-6, -256, 22, 10, 4, skinD) +
      (o.wax
        ? '<defs><clipPath id="' + id + '-tsc"><path d="' + torsoD + '"/></clipPath></defs>' + path(torsoD, top) +
          '<g clip-path="url(#' + id + '-tsc)">' + waxDots(-60, -252, 60, 24, 44, o.wax[0], o.wax[1] || top, 9) + rr(-40, -250, 22, 280, 0, "#000", ' opacity="0.1"') + "</g>" +
          path("M 2,-233 C 8,-224 18,-226 22,-232 Z", skin)
        : path(torsoD, top) + path("M 6,-232 L 18,-226 L 26,-200 L 12,-214 Z", shirt) + stroke("M 10,-226 L 24,-150", topD, 3));
    var head =
      el(2, -288, 31, 38, skin) +
      path("M 26,-300 C 34,-292 40,-282 36,-277 C 33,-274 29,-275 27,-276 Z", skin) +
      el(18, -262, 14, 11, skin) +
      el(-6, -284, 6, 9, skinD) +
      el(21, -289, 3, 4, "#1C1411") +
      stroke("M 15,-298 Q 21,-301 27,-298", "#1C1411", 2.4) +
      stroke("M 23,-262 L 30,-263", shade(skin, 0.42), 2.4) +
      (o.scarf
        ? scarfSide(id, o.scarf[0], o.scarf[1])
        : o.sex === "m"
          ? path("M -30,-282 C -34,-314 -14,-328 6,-328 C 22,-328 32,-318 32,-304 C 22,-310 10,-312 -2,-308 C -10,-300 -16,-292 -20,-280 C -24,-276 -28,-276 -30,-282 Z", hairC)
          : path("M -33,-276 C -44,-322 -10,-350 16,-341 C 34,-335 43,-318 38,-302 C 28,-310 14,-313 0,-309 C -7,-300 -12,-291 -16,-281 C -22,-273 -30,-271 -33,-276 Z", hairC)) +
      (o.cap ? capSide(o.cap) : "");
    var body =
      arm("B", true) +
      leg("B", true) +
      leg("F", false) +
      (o.skirt
        ? svg(
            [-70, -10, 140, 300],
            '<defs><clipPath id="' + id + '-skc"><path d="M -34,-2 L 34,-2 L 47,274 L -43,274 Z"/></clipPath></defs>' + path("M -34,-2 L 34,-2 L 47,274 L -43,274 Z", o.skirt[0]) +
              '<g clip-path="url(#' + id + '-skc)">' + (o.skirt[1] ? waxDots(-70, 16, 70, 290, 46, o.skirt[1], o.skirt[2] || o.skirt[0], 8) : "") + "</g>",
          )
        : "") +
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
  // pose : "flat" (main à plat), "pen" (tient un stylo), "marker" (tient un surligneur, couleur o.marker),
  // "grip" (tient un objet par le dessus)
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
    var k2 = left ? -1 : 1;
    if (o.pose === "pen" || o.pose === "marker") hand = '<g transform="translate(0,-338) scale(' + k2 + ',1)">' + handTopPen(skin, o.pose === "marker" ? o.marker || "#CFDBAC" : null) + "</g>";
    else if (o.pose === "grip") hand = '<g transform="translate(0,-338) scale(' + k2 + ',1)">' + handTopGrip(skin) + "</g>";
    else if (o.pose === "flat") hand = '<g transform="translate(0,-338) scale(' + k2 + ',1)">' + handTopFlat(skin) + "</g>";
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

  P.V = false;
  window.BGP = P;
})();
