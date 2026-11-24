// Globe orthographique (Europe et Afrique) en chemins SVG, d'après Natural Earth (world-atlas).
// usage : node globe.mjs <countries-110m.json> <countries-50m.json> <sortie.json>
import { readFileSync, writeFileSync } from "node:fs";
import { geoOrthographic, geoPath, geoGraticule10, geoInterpolate, geoDistance } from "d3-geo";
import { feature } from "topojson-client";
const [f110, f50, out] = process.argv.slice(2);
const t110 = JSON.parse(readFileSync(f110, "utf8"));
const t50 = JSON.parse(readFileSync(f50, "utf8"));
const R = 380;
const CENTER = [8, 22];
const proj = geoOrthographic().rotate([-CENTER[0], -CENTER[1]]).scale(R).translate([0, 0]).clipAngle(90).precision(0.3);
const path = geoPath(proj);
const r1 = (d) => (d ? d.replace(/(\d+\.\d)\d+/g, "$1") : "");
const land110 = feature(t110, t110.objects.countries).features;
const c50 = feature(t50, t50.objects.countries).features;
const find = (fs, name) => fs.find((f) => f.properties.name === name);
const gabon = find(c50, "Gabon"),
  france = find(c50, "France");
// France métropolitaine seule (les départements d'outre-mer sont hors du globe ou minuscules)
const metro = { type: "Feature", properties: {}, geometry: { type: "MultiPolygon", coordinates: france.geometry.coordinates.filter((poly) => poly[0].some(([lon, lat]) => lat > 40 && lon > -6 && lon < 10)) } };
const others = land110.filter((f) => f.properties.name !== "Gabon" && f.properties.name !== "France");
const PARIS = [2.35, 48.86],
  LBV = [9.45, 0.39];
const ip = geoInterpolate(PARIS, LBV);
const arc = [];
for (let i = 0; i <= 60; i++) {
  const p = proj(ip(i / 60));
  arc.push([+p[0].toFixed(1), +p[1].toFixed(1)]);
}
const res = {
  source: "Natural Earth (domaine public), via world-atlas 2.0.2 : 1:110m pour les terres, 1:50m pour le Gabon et la France",
  R,
  center: CENTER,
  land: r1(others.map((f) => path(f)).filter(Boolean).join("")),
  gabon: r1(path(gabon)),
  france: r1(path(metro)),
  grat: r1(path(geoGraticule10())),
  paris: proj(PARIS).map((v) => +v.toFixed(1)),
  lbv: proj(LBV).map((v) => +v.toFixed(1)),
  arc,
  arcKm: Math.round(geoDistance(PARIS, LBV) * 6371),
};
writeFileSync(out, JSON.stringify(res));
console.log("land", res.land.length, "gabon", res.gabon.length, "france", res.france.length, "grat", res.grat.length, "paris", res.paris, "lbv", res.lbv, "km", res.arcKm);
