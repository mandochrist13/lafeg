// Éléments de marque et objets récurrents du film « Investir en Bourse avec BGFIBourse ».
// Tout est en SVG inline, sans aléa : mêmes formes à chaque appel ; les identifiants de dégradés
// sont numérotés dans l'ordre des appels.
(function () {
  var NAVY = "#0B2677",
    SAGE = "#879A6D",
    SAGEL = "#CFDBAC",
    BLUE = "#3A77A1",
    INK = "#1C2430",
    SAGED = "#56683F",
    GOLD = "#D3AE55",
    GOLDD = "#A9852F",
    GOLDL = "#EBD08E";
  var n = 0;
  var B = { NAVY: NAVY, SAGE: SAGE, SAGEL: SAGEL, BLUE: BLUE, INK: INK, SAGED: SAGED, GOLD: GOLD, LOGO: "assets/img/bgfibourse-logo.svg" };

  // le carré bicolore du logo (marine à gauche, sauge à droite, étoile blanche à la jonction)
  B.mark = function (w, extra) {
    var id = "bgm" + n++;
    var h = Math.round((w * 216) / 225);
    return (
      '<svg width="' + w + '" height="' + h + '" viewBox="0 0 225 216" style="display:block;' + (extra || "") + '" aria-hidden="true">' +
      '<defs><linearGradient id="' + id + 'n" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a4f8a"/><stop offset="0.3" stop-color="#3a77a1"/><stop offset="0.72" stop-color="#1b5a86"/><stop offset="1" stop-color="#021a52"/></linearGradient>' +
      '<radialGradient id="' + id + 's" cx="0.42" cy="0.42" r="0.78"><stop offset="0" stop-color="#e0ecbd"/><stop offset="0.55" stop-color="#cfdbac"/><stop offset="1" stop-color="#a2af87"/></radialGradient>' +
      '<radialGradient id="' + id + 'g" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fff"/><stop offset="0.4" stop-color="#fff" stop-opacity="0.75"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>' +
      '<rect x="0" y="26" width="112" height="190" fill="url(#' + id + 'n)"/>' +
      '<rect x="112" y="0" width="113" height="200" fill="url(#' + id + 's)"/>' +
      '<circle cx="112" cy="110" r="46" fill="url(#' + id + 'g)"/>' +
      '<path d="M112 54 L119 102 L182 110 L119 118 L112 164 L105 118 L42 110 L105 102 Z" fill="#fff"/>' +
      "</svg>"
    );
  };

  // pièce de monnaie (or mat), diamètre d
  B.coin = function (d, extra) {
    return (
      '<svg width="' + d + '" height="' + d + '" viewBox="0 0 100 100" style="display:block;' + (extra || "") + '" aria-hidden="true">' +
      '<circle cx="50" cy="52" r="46" fill="' + GOLDD + '"/><circle cx="50" cy="48" r="46" fill="' + GOLD + '"/>' +
      '<circle cx="50" cy="48" r="34" fill="none" stroke="' + GOLDD + '" stroke-width="5"/>' +
      '<path d="M 30,30 C 38,20 56,18 66,24" fill="none" stroke="' + GOLDL + '" stroke-width="6" stroke-linecap="round"/>' +
      "</svg>"
    );
  };
  // pile de pièces vue de face (k pièces), largeur w
  B.stack = function (w, k) {
    var h = 18 * k + 26,
      s = "";
    for (var i = 0; i < k; i++) {
      var y = h - 30 - i * 18;
      s += '<ellipse cx="60" cy="' + (y + 14) + '" rx="56" ry="14" fill="' + GOLDD + '"/>' + '<rect x="4" y="' + y + '" width="112" height="14" fill="' + GOLDD + '"/>' + '<ellipse cx="60" cy="' + y + '" rx="56" ry="14" fill="' + GOLD + '"/>' + '<ellipse cx="60" cy="' + y + '" rx="40" ry="9" fill="none" stroke="' + GOLDD + '" stroke-width="3"/>';
    }
    return '<svg width="' + w + '" height="' + Math.round((w * h) / 120) + '" viewBox="0 0 120 ' + h + '" style="display:block" aria-hidden="true">' + s + "</svg>";
  };

  // la Bourse (BVMAC) : temple à six colonnes, une par pays de la CEMAC ; largeur w (repère 600 × 470)
  B.bourse = function (w) {
    var col = "";
    for (var i = 0; i < 6; i++) {
      var x = 86 + i * 86;
      col += '<rect x="' + x + '" y="196" width="40" height="204" fill="#F4F6F8"/>' + '<rect x="' + (x + 26) + '" y="196" width="14" height="204" fill="#DCE3EA"/>' + '<rect x="' + (x - 6) + '" y="186" width="52" height="12" rx="2" fill="#E6EBF0"/>' + '<rect x="' + (x - 6) + '" y="398" width="52" height="10" rx="2" fill="#E6EBF0"/>';
    }
    return (
      '<svg width="' + w + '" height="' + Math.round((w * 470) / 600) + '" viewBox="0 0 600 470" style="display:block" aria-hidden="true">' +
      '<rect x="60" y="182" width="480" height="230" fill="#E9EEF4"/>' + col +
      '<rect x="40" y="128" width="520" height="60" fill="' + NAVY + '"/>' +
      '<rect x="40" y="182" width="520" height="8" fill="' + SAGE + '"/>' +
      '<path d="M 26,132 L 300,28 L 574,132 Z" fill="' + NAVY + '"/><path d="M 70,122 L 300,46 L 530,122 Z" fill="#14357F"/>' +
      '<rect x="40" y="408" width="520" height="20" fill="#DCE3EA"/><rect x="20" y="428" width="560" height="22" fill="#CFD8E2"/><rect x="0" y="450" width="600" height="20" fill="#C3CEDA"/>' +
      "</svg>"
    );
  };

  // l'immeuble de BGFIBourse : façade claire, bandeau marine, plaque au logo ; largeur w (repère 440 × 560)
  B.office = function (w) {
    var win = "";
    for (var r = 0; r < 4; r++)
      for (var c = 0; c < 4; c++) {
        var x = 52 + c * 88,
          y = 196 + r * 74;
        win += '<rect x="' + x + '" y="' + y + '" width="68" height="56" rx="4" fill="' + (r % 2 === c % 2 ? "#BFD3E4" : "#D4E1EC") + '"/>' + '<path d="M ' + (x + 10) + "," + (y + 50) + " L " + (x + 40) + "," + (y + 6) + " L " + (x + 50) + "," + (y + 6) + " L " + (x + 20) + "," + (y + 50) + ' Z" fill="#FFFFFF" opacity="0.45"/>';
      }
    return (
      '<svg width="' + w + '" height="' + Math.round((w * 560) / 440) + '" viewBox="0 0 440 560" style="display:block" aria-hidden="true">' +
      '<rect x="20" y="40" width="400" height="520" fill="#F4F6F8"/><rect x="380" y="40" width="40" height="520" fill="#E4EAF0"/>' +
      '<rect x="10" y="24" width="420" height="22" rx="4" fill="' + NAVY + '"/><rect x="20" y="46" width="400" height="8" fill="' + SAGE + '"/>' +
      '<rect x="48" y="70" width="344" height="104" rx="8" fill="#FFFFFF" stroke="#DCE3EA" stroke-width="3"/>' +
      '<image href="' + B.LOGO + '" x="64" y="80" width="312" height="90" preserveAspectRatio="xMidYMid meet"/>' +
      win +
      '<rect x="150" y="480" width="140" height="80" fill="#2B3440"/><rect x="156" y="486" width="62" height="74" fill="#CFE0EC"/><rect x="222" y="486" width="62" height="74" fill="#CFE0EC"/>' +
      '<rect x="120" y="468" width="200" height="14" rx="4" fill="' + NAVY + '"/>' +
      "</svg>"
    );
  };

  // tirelire (sauge), largeur w (repère 300 × 230)
  B.piggy = function (w) {
    return (
      '<svg width="' + w + '" height="' + Math.round((w * 230) / 300) + '" viewBox="0 0 300 230" style="display:block" aria-hidden="true">' +
      '<rect x="70" y="170" width="34" height="50" rx="10" fill="#6E8158"/><rect x="186" y="170" width="34" height="50" rx="10" fill="#6E8158"/>' +
      '<ellipse cx="150" cy="122" rx="122" ry="86" fill="' + SAGE + '"/>' +
      '<ellipse cx="128" cy="96" rx="80" ry="44" fill="#9CAE80" opacity="0.7"/>' +
      '<path d="M 196,52 L 214,10 L 238,56 Z" fill="#6E8158"/>' +
      '<ellipse cx="268" cy="128" rx="28" ry="32" fill="#9CAE80"/><ellipse cx="262" cy="120" rx="5" ry="8" fill="#56683F"/><ellipse cx="276" cy="132" rx="5" ry="8" fill="#56683F"/>' +
      '<circle cx="224" cy="96" r="8" fill="' + INK + '"/>' +
      '<rect x="112" y="34" width="70" height="12" rx="6" fill="#56683F"/>' +
      '<path d="M 30,120 C 6,112 4,90 20,82" fill="none" stroke="#6E8158" stroke-width="10" stroke-linecap="round"/>' +
      "</svg>"
    );
  };

  // coche ronde (sauge foncé), diamètre d
  B.check = function (d) {
    return (
      '<svg width="' + d + '" height="' + d + '" viewBox="0 0 40 40" style="display:block" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="' + SAGED + '"/>' +
      '<path d="M 11,21 L 17,27 L 29,14" fill="none" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    );
  };

  // immeuble d'entreprise (tour de bureaux), largeur w (repère 300 × 460), parts découpées en grille
  B.company = function (w, parts) {
    var g = "";
    var cols = 3,
      rows = 4;
    for (var r = 0; r < rows; r++)
      for (var c = 0; c < cols; c++) {
        var x = 36 + c * 80,
          y = 70 + r * 88,
          k = r * cols + c;
        g += '<g id="' + (parts ? parts + "-" + k : "") + '"><rect x="' + x + '" y="' + y + '" width="68" height="76" rx="4" fill="#E3EAF1"/>' + '<rect x="' + (x + 10) + '" y="' + (y + 10) + '" width="20" height="24" rx="2" fill="#BFD3E4"/><rect x="' + (x + 38) + '" y="' + (y + 10) + '" width="20" height="24" rx="2" fill="#BFD3E4"/>' + '<rect x="' + (x + 10) + '" y="' + (y + 42) + '" width="20" height="24" rx="2" fill="#BFD3E4"/><rect x="' + (x + 38) + '" y="' + (y + 42) + '" width="20" height="24" rx="2" fill="#BFD3E4"/></g>';
      }
    return (
      '<svg width="' + w + '" height="' + Math.round((w * 460) / 300) + '" viewBox="0 0 300 460" style="display:block;overflow:visible" aria-hidden="true">' +
      '<rect x="20" y="50" width="260" height="410" fill="#F4F6F8"/><rect x="14" y="36" width="272" height="20" rx="4" fill="' + BLUE + '"/>' + g +
      '<rect x="120" y="420" width="60" height="40" fill="#2B3440"/>' +
      "</svg>"
    );
  };

  // bâtiment public (l'État) : fronton et quatre colonnes, largeur w (repère 300 × 300)
  B.state = function (w) {
    var col = "";
    for (var i = 0; i < 4; i++) col += '<rect x="' + (62 + i * 50) + '" y="128" width="26" height="128" fill="#F4F6F8"/><rect x="' + (79 + i * 50) + '" y="128" width="9" height="128" fill="#DCE3EA"/>';
    return (
      '<svg width="' + w + '" height="' + Math.round(w) + '" viewBox="0 0 300 300" style="display:block" aria-hidden="true">' +
      '<rect x="44" y="118" width="212" height="146" fill="#E9EEF4"/>' + col +
      '<path d="M 30,112 L 150,52 L 270,112 Z" fill="' + BLUE + '"/><rect x="34" y="106" width="232" height="16" fill="' + BLUE + '"/>' +
      '<rect x="30" y="256" width="240" height="16" fill="#DCE3EA"/><rect x="18" y="272" width="264" height="18" fill="#CFD8E2"/>' +
      "</svg>"
    );
  };

  // coffre-fort (conservation), largeur w (repère 300 × 300)
  B.safe = function (w, id) {
    var sp = "";
    for (var i = 0; i < 6; i++) {
      var a = (i * Math.PI) / 3;
      sp += '<path d="M ' + (150 + Math.cos(a) * 18).toFixed(1) + "," + (150 + Math.sin(a) * 18).toFixed(1) + " L " + (150 + Math.cos(a) * 52).toFixed(1) + "," + (150 + Math.sin(a) * 52).toFixed(1) + '" stroke="' + SAGEL + '" stroke-width="10" stroke-linecap="round"/>';
    }
    return (
      '<svg width="' + w + '" height="' + w + '" viewBox="0 0 300 300" style="display:block" aria-hidden="true">' +
      '<rect x="20" y="20" width="260" height="250" rx="22" fill="' + NAVY + '"/><rect x="34" y="34" width="232" height="222" rx="14" fill="#14357F"/>' +
      '<rect x="40" y="268" width="40" height="18" rx="4" fill="#0A1E5C"/><rect x="220" y="268" width="40" height="18" rx="4" fill="#0A1E5C"/>' +
      '<g id="' + (id || "bg-safe") + '-wheel" style="transform-origin:150px 150px"><circle cx="150" cy="150" r="78" fill="#0B2677" stroke="' + SAGE + '" stroke-width="10"/>' + sp + '<circle cx="150" cy="150" r="16" fill="' + SAGE + '"/></g>' +
      '<rect x="244" y="118" width="14" height="64" rx="6" fill="' + SAGE + '"/>' +
      "</svg>"
    );
  };

  window.BG = B;
})();
