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
  function handTopPen(skin) {
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
      pen([8, -40], [-80, -262], 9) +
      finger(-20, -104, -112, 108, 23, 18, 4, skin, { crease: d, nail: nail }) +
      sep(-20, -104, 0, -110, -104, 30, 0.1, 0.8, d)
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
  P.hands = { front: handFront, side: handSide, topPen: handTopPen, topGrip: handTopGrip, pen: pen };


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
      var hand = handFront(x, -8, -k, skin);
      var grip = '<div id="' + id + "-grip" + side + '" class="pp-grip" style="position:absolute;left:' + x + 'px;top:14px;width:0;height:0"></div>';
      return joint(id + "-ua" + side, x, -206, svg([x - 30, -232, 60, 150], ua) + joint(id + "-fa" + side, x, -100, (o.table ? "" : svg([x - 30, -110, 60, 150], fa + hand)) + grip));
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
    var k2 = left ? -1 : 1;
    if (o.pose === "pen") hand = '<g transform="translate(0,-338) scale(' + k2 + ',1)">' + handTopPen(skin) + "</g>";
    else if (o.pose === "grip") hand = '<g transform="translate(0,-338) scale(' + k2 + ',1)">' + handTopGrip(skin) + "</g>";
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

  // ---------------------------------------------------------------- version verticale (1080 × 1920)
  // La racine verticale pose window.__FEG_V = true. Chaque scène garde son dessin en repère 16:9 :
  // P.vwrap l'enveloppe dans un conteneur « caméra » ; P.vset / P.vto amènent le point (cx, cy)
  // de la scène 16:9 au point (540, P.VY) de l'écran vertical, à l'échelle k.
  P.V = !!window.__FEG_V;
  P.VY = 935;
  // keep : ids des textes laissés hors de la caméra (remis au premier plan) ;
  // fill : [y16, couleur] prolonge le sol vers le bas ; band : [hauteur, couleur] bande d'en-tête sous les textes
  P.vwrap = function (anyId, keep, fill, band) {
    var any = document.getElementById(anyId);
    // le parent direct : la racine de la scène (celle qui porte la police et le cadre 1080 × 1920)
    var root = any.parentElement;
    var wrap = document.createElement("div");
    wrap.id = anyId.split("-")[0] + "-vcam";
    wrap.style.cssText = "position:absolute;left:0;top:0;width:1920px;height:1080px;transform-origin:0 0";
    // la scène 16:9 dépasse volontairement du cadre vertical : la caméra n'en montre qu'une partie
    wrap.setAttribute("data-layout-allow-overflow", "");
    var kids = Array.prototype.slice.call(root.children);
    keep = keep || [];
    root.insertBefore(wrap, kids[0]);
    kids.forEach(function (k) {
      if (keep.indexOf(k.id) < 0) wrap.appendChild(k);
    });
    if (fill) {
      var f = document.createElement("div");
      f.style.cssText = "position:absolute;left:-3000px;width:8000px;top:" + fill[0] + "px;height:5000px;background:" + fill[1];
      f.setAttribute("data-layout-allow-overflow", "");
      wrap.insertBefore(f, wrap.firstChild);
    }
    if (band) {
      var b = document.createElement("div");
      b.style.cssText =
        "position:absolute;left:0;top:0;width:1080px;height:" + band[0] + "px;background:linear-gradient(to bottom," + band[1] + " 0," + band[1] + " " + (band[0] - 50) + "px,rgba(255,255,255,0) " + band[0] + "px)";
      root.appendChild(b);
    }
    keep.forEach(function (id) {
      var e = document.getElementById(id);
      if (e) root.appendChild(e);
    });
    return wrap;
  };
  // fond prolongé dans un élément donné, qui le suit dans ses mouvements (y16 : haut, h : hauteur, en px 16:9)
  P.vbg = function (id, y16, color, h) {
    var el = document.getElementById(id);
    var f = document.createElement("div");
    f.style.cssText = "position:absolute;left:-4000px;width:10000px;top:" + y16 + "px;height:" + h + "px;background:" + color;
    f.setAttribute("data-layout-allow-overflow", "");
    el.insertBefore(f, el.firstChild);
  };
  P.vset = function (wrap, cx, cy, k) {
    gsap.set(wrap, { x: 540 - cx * k, y: P.VY - cy * k, scale: k, transformOrigin: "0px 0px" });
  };
  P.vto = function (tl, wrap, t, d, cx, cy, k, ease) {
    tl.to(wrap, { x: 540 - cx * k, y: P.VY - cy * k, scale: k, duration: d, ease: ease || "power2.inOut" }, t);
  };
  P.vtext = function (id, css) {
    var e = document.getElementById(id);
    if (!e) return;
    Object.keys(css).forEach(function (k) {
      e.style[k] = css[k];
    });
  };
  // gabarits de textes verticaux : surtitre, titre, sous-titre
  P.vkick = function (id, top) {
    P.vtext(id, { left: "80px", top: (top || 196) + "px", fontSize: "42px", width: "920px" });
  };
  P.vtitle = function (id, top, size) {
    P.vtext(id, { left: "80px", top: (top || 250) + "px", width: "920px", fontSize: (size || 96) + "px", lineHeight: "1.02" });
  };

  window.FEGP = P;
})();
