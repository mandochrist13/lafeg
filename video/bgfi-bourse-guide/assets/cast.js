// Les personnages du film « Investir en Bourse avec BGFIBourse » : mêmes tenues d'une scène à l'autre.
// Options de people.js (P.front / P.side) ; position et échelle sont ajoutées par chaque scène.
window.CAST = {
  // Nadia, l'épargnante (personnage principal) : veste sauge, chemisier crème, jupe longue ardoise
  nadia: { skin: "#6B4029", sex: "f", hair: "bun", top: "#7E9165", shirt: "#F4F1E6", skirt: ["#33415C"], bottom: "#33415C", shoes: "#3A2A1E" },
  // le conseiller BGFIBourse : costume marine, chemise blanche, cravate sauge, badge au carré bicolore
  conseiller: { skin: "#4A2D1C", sex: "m", hair: "short", glasses: true, top: "#0B2677", shirt: "#FFFFFF", tie: "#879A6D", badge: "#879A6D", bottom: "#0B2677", shoes: "#151719" },
  // trois autres épargnants (OPC : l'épargne mise en commun)
  paul: { skin: "#5C3A24", sex: "m", hair: "short", tee: true, top: "#3A77A1", shirt: "#3A77A1", bottom: "#3A4A5C", shoes: "#2B2B2B" },
  aline: { skin: "#7F5236", sex: "f", hair: "afro", wax: ["#CFDBAC", "#0B2677"], top: "#3A77A1", shirt: "#3A77A1", skirt: ["#0B2677", "#CFDBAC", "#3A77A1"], shoes: "#3A2A1E" },
  michel: { skin: "#4E3020", sex: "m", hair: "grey", hairColor: "#C9CCC6", top: "#6B5B4A", shirt: "#FFFFFF", tie: "#3A77A1", bottom: "#3A3A3A", shoes: "#151719" },
  // la gérante d'OPC : tailleur ardoise, chignon
  gerante: { skin: "#5A3622", sex: "f", hair: "bun", top: "#33415C", shirt: "#FFFFFF", bottom: "#33415C", shoes: "#151719" },
};
// copie d'un personnage avec des options en plus (position, échelle, jambes…)
window.CAST.with = function (name, extra) {
  var o = {},
    k;
  for (k in window.CAST[name]) o[k] = window.CAST[name][k];
  for (k in extra) o[k] = extra[k];
  return o;
};
