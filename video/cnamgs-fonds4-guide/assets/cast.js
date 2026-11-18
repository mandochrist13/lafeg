// Les personnages du film « Le Fonds 4 de la CNAMGS » : mêmes tenues d'une scène à l'autre.
// Options de people.js (P.front / P.side) ; position et échelle sont ajoutées par chaque scène.
window.CAST = {
  // Awa, commerçante : foulard bleu à pois jaunes, haut en wax vert, pagne bleu nuit
  awa: { skin: "#6E4429", sex: "f", scarf: ["#0066A8", "#F7D21E"], top: "#5AA137", shirt: "#5AA137", wax: ["#F7D21E", "#5AA137"], skirt: ["#084E86", "#5AA137", "#084E86"], shoes: "#3A2A1E" },
  // Moussa, artisan menuisier : tee-shirt clair, tablier de cuir
  moussa: { skin: "#4A2D1C", sex: "m", hair: "short", beard: true, tee: true, top: "#DCE3EA", shirt: "#DCE3EA", apron: "#9B6B3F", bottom: "#3A4A5C", shoes: "#2B2B2B" },
  // Maître Ndong, avocat : robe noire et rabat blanc, lunettes
  avocat: { skin: "#5C3A24", sex: "m", hair: "short", glasses: true, top: "#23272E", shirt: "#23272E", rabat: true, bottom: "#23272E", shoes: "#151719" },
  // l'infirmière : blouse blanche, tenue bleu ciel, stéthoscope
  infirmiere: { skin: "#7F5236", sex: "f", hair: "bun", top: "#F4F6F8", shirt: "#BFD9EE", stetho: true, pocket: true, coat: true, bottom: "#BFD9EE", shoes: "#E3E8EE" },
  // le chauffeur : casquette bleu nuit, veste grise
  chauffeur: { skin: "#3E2618", sex: "m", hair: "short", cap: "#084E86", top: "#5B6573", shirt: "#FFFFFF", bottom: "#2B3440", shoes: "#151719" },
  // le jardinier : chapeau de paille, tablier vert
  jardinier: { skin: "#5C3A24", sex: "m", hair: "short", hat: "#E2C37A", tee: true, top: "#CFE0EE", shirt: "#CFE0EE", apron: "#3F8526", bottom: "#5B4636", shoes: "#2B2B2B" },
  // le médecin : blouse blanche, cravate bleue, stéthoscope, cheveux gris
  medecin: { skin: "#5C3A24", sex: "m", hair: "grey", hairColor: "#BFC3BE", glasses: true, top: "#F4F6F8", shirt: "#FFFFFF", tie: "#0066A8", stetho: true, pocket: true, coat: true, bottom: "#3A4A5C", shoes: "#151719" },
};
// copie d'un personnage avec des options en plus (position, échelle, jambes…)
window.CAST.with = function (name, extra) {
  var o = {},
    k;
  for (k in window.CAST[name]) o[k] = window.CAST[name][k];
  for (k in extra) o[k] = extra[k];
  return o;
};
