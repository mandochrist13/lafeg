// Les personnages du film « La FESTAC et votre syndicat » : mêmes tenues d'une scène à l'autre.
// Options de people.js (P.front / P.side) ; position et échelle sont ajoutées par chaque scène.
window.CAST = {
  // Aminata, déléguée du personnel : veste bleu FESTAC, badge or
  aminata: { skin: "#6E4429", sex: "f", hair: "bun", top: "#1F487C", shirt: "#FFFFFF", badge: "#D9A21B", bottom: "#14325A", shoes: "#2B2B2B" },
  // Koffi, délégué syndical : tee-shirt rouge, barbe
  koffi: { skin: "#4A2D1C", sex: "m", hair: "short", beard: true, tee: true, top: "#C8423B", shirt: "#C8423B", bottom: "#3A4A5C", shoes: "#2B2B2B" },
  // M. Mba, responsable syndical : costume bleu nuit, cravate or, lunettes, cheveux gris
  mba: { skin: "#5C3A24", sex: "m", hair: "grey", hairColor: "#BFC3BE", glasses: true, top: "#14325A", shirt: "#FFFFFF", tie: "#D9A21B", bottom: "#14325A", shoes: "#151719" },
  // la formatrice du centre de formation : haut or, lunettes
  formatrice: { skin: "#7F5236", sex: "f", hair: "afro", glasses: true, top: "#D9A21B", shirt: "#FFFFFF", bottom: "#3A4A5C", shoes: "#2B2B2B" },
  // un syndicaliste du Sénégal : haut en wax vert et jaune
  ousmane: { skin: "#3E2618", sex: "m", hair: "short", wax: ["#F2C12E", "#2E8B4F"], top: "#2E8B4F", shirt: "#2E8B4F", bottom: "#2B3440", shoes: "#151719" },
  // une syndicaliste de Côte d'Ivoire : foulard et haut en wax orange
  adjoua: { skin: "#6E4429", sex: "f", scarf: ["#F07F1E", "#FFFFFF"], wax: ["#FFFFFF", "#F07F1E"], top: "#F07F1E", shirt: "#F07F1E", bottom: "#2E8B4F", shoes: "#3A2A1E" },
  // l'accueil du siège de la FESTAC : veste bleue, badge rouge
  accueil: { skin: "#5C3A24", sex: "f", hair: "afro", top: "#1F487C", shirt: "#FFFFFF", badge: "#C8423B", bottom: "#14325A", shoes: "#151719" },
};
// copie d'un personnage avec des options en plus (position, échelle, jambes…)
window.CAST.with = function (name, extra) {
  var o = {},
    k;
  for (k in window.CAST[name]) o[k] = window.CAST[name][k];
  for (k in extra) o[k] = extra[k];
  return o;
};
