// Temps du film, partagés par compositions/world.html et compositions/ov-end.html.
// Tout est calé sur la grille des temps de la musique (104 bpm) : temps n à b0 + n × beat secondes.
// Chaque page a un « ancrage » : le temps où la caméra s'y pose et où son premier élément atterrit.
window.__FT = {
  beat: 0.577,
  b0: 0.036,
  anchors: {
    A: 0, // valeurs : travail, dignité, justice, solidarité
    B: 7, // la Tribune
    C1: 14, // la FESTAC
    C2: 23, // 10 pays membres
    D1: 32, // mission 01
    D2: 38, // mission 02
    D3: 44, // mission 03
    E: 51, // au cœur de nos émissions
    F: 59, // à votre écoute
    G: 67, // ensemble pour la justice sociale
  },
  sheetBeat: 71, // la feuille blanche de la carte de fin tombe
  logoBeat: 73, // le médaillon se pose
  ctaBeats: [74, 74.5, 75], // l'appel, ligne après ligne
  total: 45.6,
};
(function (F) {
  F.at = function (b) {
    return F.b0 + b * F.beat;
  };
  F.sheet = F.at(F.sheetBeat);
  F.logo = F.at(F.logoBeat);
  F.ovEnd = F.sheet;
})(window.__FT);
