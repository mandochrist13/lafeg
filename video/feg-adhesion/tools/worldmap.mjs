// Carte du monde à plat (projection Equal Earth) pour la scène « Hors du Gabon » : terres en gris clair,
// le Gabon et les pays de la diaspora en chemins séparés (teintés pendant l'animation), villes et trajets vers Libreville.
// Écrit assets/worldmap.js (chemins, en repère 1920 × 1080) et assets/img/worldmap-poster.svg (l'affiche du comité).
// Source : Natural Earth (domaine public), via world-atlas 2.0.2 (1:110m pour les terres, 1:50m pour les pays mis en avant).
// Les pays de la diaspora sont des exemples, pas une liste officielle.
// usage (depuis un dossier qui a d3-geo et topojson-client) :
//   node worldmap.mjs <countries-110m.json> <countries-50m.json> <dossier assets du projet>
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";

const [f110, f50, assets] = process.argv.slice(2);
const t110 = JSON.parse(readFileSync(f110, "utf8"));
const t50 = JSON.parse(readFileSync(f50, "utf8"));
const c110 = feature(t110, t110.objects.countries).features;
const c50 = feature(t50, t50.objects.countries).features;

// cadre 16:9 : la carte remplit l'image ; les villes tiennent entre x 900 et 1830 (à gauche, un voile blanc porte le texte)
const BOX = [
  [900, 150],
  [1830, 1030],
];
const VIEW = { lon: [-78, 56], lat: [-35, 52] };
const proj = geoEqualEarth().rotate([10, 0]).precision(0.2);
{
  const ring = [];
  for (let lon = VIEW.lon[0]; lon <= VIEW.lon[1]; lon += 2) ring.push([lon, VIEW.lat[0]], [lon, VIEW.lat[1]]);
  proj.fitExtent(BOX, { type: "MultiPoint", coordinates: ring });
}
const path = geoPath(proj);
const r1 = (d) => (d ? d.replace(/(\d+\.\d)\d+/g, "$1") : "");
const P = (lonlat) => proj(lonlat).map((v) => +v.toFixed(1));

// pays mis en avant (nom Natural Earth → clé, libellé à l'écran)
const COUNTRIES = [
  { key: "ga", ne: "Gabon" },
  { key: "fr", ne: "France", label: "France" },
  { key: "be", ne: "Belgium", label: "Belgique" },
  { key: "gb", ne: "United Kingdom", label: "Royaume-Uni" },
  { key: "ca", ne: "Canada", label: "Canada" },
  { key: "us", ne: "United States of America", label: "États-Unis" },
  { key: "ma", ne: "Morocco", label: "Maroc" },
  { key: "sn", ne: "Senegal", label: "Sénégal" },
  { key: "ci", ne: "Côte d'Ivoire", label: "Côte d'Ivoire" },
  { key: "za", ne: "South Africa", label: "Afrique du Sud" },
  { key: "ae", ne: "United Arab Emirates", label: "Émirats arabes unis" },
];
// une ville par pays (point de départ du trajet), courbure du trajet (fraction de sa longueur, signe = côté)
const CITIES = {
  fr: { name: "Paris", at: [2.35, 48.86], bend: 0.2 },
  be: { name: "Bruxelles", at: [4.35, 50.85], bend: 0.05 },
  gb: { name: "Londres", at: [-0.13, 51.51], bend: 0.36 },
  ca: { name: "Montréal", at: [-73.57, 45.5], bend: -0.3 },
  us: { name: "Washington", at: [-77.04, 38.9], bend: -0.25 },
  ma: { name: "Casablanca", at: [-7.59, 33.57], bend: 0.12 },
  sn: { name: "Dakar", at: [-17.44, 14.69], bend: -0.15 },
  ci: { name: "Abidjan", at: [-4.03, 5.36], bend: 0.3 },
  za: { name: "Johannesburg", at: [28.05, -26.2], bend: -0.18 },
  ae: { name: "Dubaï", at: [55.27, 25.2], bend: 0.2 },
};
const LBV = [9.45, 0.39];

const find = (fs, name) => fs.find((f) => f.properties.name === name);
const keep = new Set(COUNTRIES.map((c) => c.ne));
// France : seulement la métropole (les départements d'outre-mer sortent du cadre ou sont minuscules)
const metroOnly = (f) => ({
  type: "Feature",
  properties: {},
  geometry: { type: "MultiPolygon", coordinates: f.geometry.coordinates.filter((poly) => poly[0].some(([lon, lat]) => lat > 40 && lon > -6 && lon < 10)) },
});
const shapes = {};
// grands pays en 1:110m (assez fin à cette échelle, fichier plus léger), petits pays en 1:50m
const COARSE = new Set(["ca", "us", "za", "ma"]);
for (const c of COUNTRIES) {
  let f = COARSE.has(c.key) ? find(c110, c.ne) : find(c50, c.ne) || find(c110, c.ne);
  if (!f) throw new Error("pays introuvable : " + c.ne);
  if (c.key === "fr") f = metroOnly(f);
  shapes[c.key] = r1(path(f));
}
const others = c110.filter((f) => !keep.has(f.properties.name) && f.properties.name !== "Antarctica");
const land = r1(others.map((f) => path(f)).filter(Boolean).join(""));

const lbv = P(LBV);
const cities = {};
for (const [k, c] of Object.entries(CITIES)) {
  const a = P(c.at);
  const dx = lbv[0] - a[0],
    dy = lbv[1] - a[1];
  const len = Math.hypot(dx, dy);
  // point de contrôle : milieu décalé perpendiculairement (normale à droite du trajet, à l'écran)
  const nx = -dy / len,
    ny = dx / len;
  const cx = +(a[0] + dx / 2 + nx * c.bend * len).toFixed(1),
    cy = +(a[1] + dy / 2 + ny * c.bend * len).toFixed(1);
  cities[k] = { name: c.name, xy: a, ctrl: [cx, cy], arc: `M ${a[0]},${a[1]} Q ${cx},${cy} ${lbv[0]},${lbv[1]}`, len: +len.toFixed(1) };
}

const W = 1920,
  H = 1080;
const BASE = "#E3E7E1",
  EDGE = "#FFFFFF";

// affiche du comité : la même carte, la diaspora teintée, les trajets vers le Gabon
const SAGE = "#9DB3A4",
  GREEN = "#0A7537";
const posterSvg =
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">` +
  `<g fill="${BASE}" stroke="${EDGE}" stroke-width="2" stroke-linejoin="round"><path d="${land}"/></g>` +
  `<g fill="${SAGE}" stroke="${EDGE}" stroke-width="2" stroke-linejoin="round">${COUNTRIES.filter((c) => c.key !== "ga")
    .map((c) => `<path d="${shapes[c.key]}"/>`)
    .join("")}</g>` +
  `<path d="${shapes.ga}" fill="${GREEN}"/>` +
  `<g fill="none" stroke="${GREEN}" stroke-width="7" stroke-linecap="round" stroke-dasharray="16 13">${Object.values(cities)
    .map((c) => `<path d="${c.arc}"/>`)
    .join("")}</g>` +
  `<g fill="#063D21" stroke="#FFFFFF" stroke-width="4">${Object.values(cities)
    .map((c) => `<circle cx="${c.xy[0]}" cy="${c.xy[1]}" r="12"/>`)
    .join("")}<circle cx="${lbv[0]}" cy="${lbv[1]}" r="15"/></g></svg>`;
writeFileSync(join(assets, "img/worldmap-poster.svg"), posterSvg);

const data = {
  source: "Natural Earth (domaine public), via world-atlas 2.0.2 ; projection Equal Earth",
  box: BOX,
  land,
  countries: Object.fromEntries(COUNTRIES.map((c) => [c.key, { d: shapes[c.key], label: c.label || null }])),
  cities,
  lbv,
};
writeFileSync(
  join(assets, "worldmap.js"),
  "// Généré par tools/worldmap.mjs (Natural Earth, domaine public) : pays mis en avant, villes et trajets vers Libreville.\n" +
    "window.__FEG_MAP = " +
    JSON.stringify(data) +
    ";\n",
);
console.log("terres", land.length, "affiche", posterSvg.length);
console.log("Libreville", lbv);
for (const [k, c] of Object.entries(cities)) console.log(k, c.name, c.xy, "ctrl", c.ctrl, "long.", c.len);
for (const k of Object.keys(shapes)) {
  const ne = COUNTRIES.find((c) => c.key === k).ne;
  const f = k === "fr" ? metroOnly(find(c50, "France")) : find(COARSE.has(k) ? c110 : c50, ne);
  const b = path.bounds(f);
  console.log("bornes", k, b.map((p) => p.map((v) => Math.round(v))));
}
