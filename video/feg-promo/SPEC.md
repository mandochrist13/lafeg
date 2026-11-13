# SPEC — « De la voix à la réforme »

GOAL: un chef d'entreprise gabonais comprend ce qu'est la FEG, comment la voix d'une entreprise remonte jusqu'aux réformes du pays (via le Gabon Economic Forum), ce que l'adhésion apporte au quotidien, et retient lafeg.ga pour adhérer. Film intemporel : aucune date d'événement à l'écran ni dans la voix.

OUTPUT: HyperFrames, 1920 × 1080, 30 fps, MP4 H.264.

TIME: 103,8 s (fixé par la voix off) ≈ 3113 images. Musique SoundHill « Find Yourself », 120 BPM → 15 images par temps.

## LOOK

- **Médium** : maquette d'architecte blanche, projection orthographique isométrique vraie (azimut 45°, élévation 35,26°), éclairée comme un modèle en studio. Pas d'horizon : le sol remplit tout le cadre.
- **Sol** : #FFFFFF (blanc pur, demandé par la FEG après la v2 : la pierre froide #E8E9E4 était jugée trop terne), mat (rugosité 1). Les ombres douces donnent le relief.
- **Maquette** : #F4F4EF, rugosité 0,85, arêtes arrondies à 0,04 u. Bâtiments isolés et non-membres.
- **Vert FEG** : #0A7537 = entreprise membre (le bâtiment change de couleur quand il rejoint) ; #063D21 = institution, titres.
- **Bronze** : #AEAE7D (points du logo, couronne de la tour FEG, sceau de la Déclaration), #DCDAA4 en reflet. Rationné : jamais plus d'un élément bronze par plan avant la fin.
- **État / public** : gris froid #C5CBD0.
- **Papier** : #FFFFFF, encre #1A1C19, tampon #8A8F87.
- **Lumière** : hémisphère ciel #FFFFFF / sol #E2E5DF, intensité 2,9 ; soleil #FFFFFF 1,9 venant du haut gauche (direction −0,35 / 1 / 0,75), unités physiques (albédo divisé par π, chaque couleur calée pour rendre son hex exact sur les faces horizontales), ombres PCF douces, carte d'ombre recadrée sur la vue à chaque image.
- **Typo** : Hyundai Sans Head Office Bold (titres, 72–110 px, interlettrage −1 %), Medium (étiquettes 32–36 px), Hyundai Sans Text Office Regular (texte 30 px, sources 28 px). Encre #1A1C19 sur sol clair, titres #063D21, un seul mot accent #0A7537 par plan.

## OBJECTS

- **Atelier héros** : hangar à toit en sheds, porte de chargement, annexe de bureau vitrée, palettes devant.
- **Chantier** : grue à tour (mât en treillis, flèche, contrepoids) ; **commerce** : boutique à auvent ; **bureau** : petit immeuble à bandeaux de fenêtres.
- **Bulle de parole** (la voix de l'entreprise) : bulle verte #0A7537 à coins arrondis et queue, onde sonore de 7 barres blanches ; trois anneaux verts s'élargissent quand elle se dissout. C'est l'objet qui voyage ensuite de l'atelier jusqu'au GEF.
- **Les 9 provinces** : chaque socle appartient à sa province (carte administrative transmise par la FEG, ajustée sur la silhouette du logo). Cinq teintes claires (sauge, sable, brume, argile, lilas), jamais la même pour deux provinces voisines ; noms en Hyundai Sans Text Medium 28 px, posés sur leur province.
- **Carte des membres** : 71 socles ronds aux positions exactes des points du logo FEG ; 1 118 bâtiments, l'effectif réel, non affiché (15–16 par socle) ; hauteurs selon la répartition réelle des tailles (micro 57 %, petite 31 %, moyenne 9 %, grande 2 %).
- **13 fédérations** : 13 tours de cubes (1 cube = 1 entreprise, 9 par étage), étiquette nom + effectif.
- **Tour FEG** (inspirée de l'Immeuble Odyssée) : tour élancée à ailettes verticales, couronne bronze, enseigne au logo réel ; quatre bandeaux de mission.
- **Bureau exécutif** : table ronde au sommet. **Table du dialogue public-privé** : longue table entre la tour FEG et l'État, figurines de chaque côté.
- **État** : façade classique, 6 colonnes, fronton, gris froid.
- **Palais des Congrès** : grande halle basse, toit en porte-à-faux qui se soulève ; enseigne au logo GEF réel ; 8 tables rondes avec figurines assises.
- **Déclaration** : document relié, couverture vert profond, sceau bronze ; la vraie page 1 en texture.
- **Étages de services** : tiroirs qui sortent de la tour : documents (veille), chaises et tableau (formation), table de réunion (réseau), balance (médiation et arbitrage).

## MOTION

- Caméra : `power2.inOut`, 1,2–2,2 s par mouvement, puis immobile pendant que l'action se joue. Le zoom orthographique sert de travelling avant/arrière.
- Arrivées d'objets : `expo.out` 0,6–0,9 s ; bâtiments qui se lèvent : ressort amorti 0,8 (dépassement ≤ 4 %), 0,5 s chacun, décalés de 6–12 ms selon la distance au point de départ.
- Documents en vol : arc, `power2.inOut`, 1,0–1,4 s. Sorties : `power3.in`, 40–50 % plus courtes que les entrées.
- Titres : flou 6 px → 0 et opacité par mot en 0,13 s, 0,067 s d'écart ; ou gris clair → encre par mot ; figés une fois posés. Chiffres : comptage 1,4 s en chiffres tabulaires.

## SHOTS

Temps réels, calés sur la voix off Despina (générés par `tools/build.mjs`, identiques dans la version sans voix) :

| Phrase | Début | Fin |
| --- | --- | --- |
| L01 | 1.20 s | 7.13 s |
| L02 | 8.13 s | 14.42 s |
| L03 | 16.02 s | 27.08 s |
| L04 | 29.48 s | 35.35 s |
| L05 | 36.65 s | 44.44 s |
| L06 | 45.94 s | 52.68 s |
| L06b | 53.98 s | 62.31 s |
| L07 | 63.91 s | 73.76 s |
| L08 | 75.66 s | 85.03 s |
| L09 | 86.53 s | 95.08 s |
| L10 | 96.68 s | 107.86 s |
| Logo | 107.29 s | 113.39 s (fin) |


1. **L01, le terrain** : atelier seul plein cadre (≥ 40 % de la hauteur), recul lent qui révèle un chantier, une boutique et un bureau, isolés. Pas de surtitre.
2. **L02, seule** : poussée sur l'atelier ; sur « entreprise », une bulle de parole verte monte du toit ; sur « pèse », elle grossit, pâlit et se dissout en trois ondes qui s'élargissent sans rien atteindre. L'atelier reste gris et seul.
3. **L03, le réseau** : grand recul ; 71 socles émergent et prennent la teinte de leur province ; les 9 noms et « 9 provinces » s'affichent pendant « Depuis 1959, la Fédération des Entreprises du Gabon » ; sur « rassemble », les bâtiments se lèvent depuis Libreville et virent au vert, les teintes et les noms s'effacent ; « Depuis 1959 » + titre + « plus de 1 100 entreprises » (compteur) ; puis 13 tours de fédérations se lèvent à droite de la carte, étiquetées.
4. **L04, le poids** : les 13 tours glissent l'une vers l'autre ; « ≈ 80 % du PIB », « + 90 % de la main-d'œuvre formelle » en grands chiffres.
5. **L05, la raison d'être** : les tours fusionnent en tour FEG ; quatre bandeaux s'allument : Informer, Promouvoir, Participer, Défendre.
6. **L06, le circuit** : la bulle réapparaît sur l'atelier et trace un chemin au sol : Fédération métier (pied de la tour) → Bureau exécutif (sommet) → table du dialogue public-privé.
6 bis. **L06b, les réunions** : la caméra s'approche de la table : les membres face aux pouvoirs publics ; la bulle s'élève ; sur « travaux », trois dossiers verts des fédérations se posent ; étiquette « Réunions avec le secteur public · au sortir des travaux des fédérations métiers ». Version sans voix : « Le dialogue public-privé · Pas seulement les grands forums ».
7. **L07, le GEF** : la caméra file vers le Palais des Congrès ; le toit se soulève ; la bulle se pose sur la table « Atelier 1 · Dette intérieure et fiscalité » ; les 8 ateliers se lèvent ; 8 feuilles fusionnent en Déclaration de Libreville. Surtitre « Sous le Très Haut Patronage du Chef de l'État », sans date.
8. **L08, les réformes** : la Déclaration rejoint l'État ; des liaisons vertes repartent vers la carte ; citation exacte de l'Axe 1 ; « 8 axes · 24 recommandations · 1 comité paritaire de suivi ».
9. **L09, les services** : retour à la tour ; quatre tiroirs sortent un par un avec leur objet et leur étiquette.
10. **L10, l'adhésion** : retour à l'atelier, désormais vert et relié ; le thème du Gabon Economic Forum s'encre mot à mot avec la voix (version voix) ; sur « rejoignez », grand recul ; la caméra bascule à la verticale ; les quartiers se resserrent en 71 disques bronze = les points du logo ; les arcs et « FEG » apparaissent ; « Devenez membre · lafeg.ga », tenu 3 s.

## BANNED

Fond sombre vide ; lueurs, bloom, particules ; dégradés violet/bleu, cartes en verre ; papier crème + serif italique ; étiquettes en capitales monospace, pastilles ; tout centré ; tout qui apparaît en fondu-glissé vers le haut ; titres qui dérivent après s'être posés ; coins, cadres, HUD décoratifs ; trois cartes en rang, grilles de KPI ; logo collé dans un coin ; motifs folkloriques ; rebonds de dessin animé (amortissement < 0,6) ; tout chiffre ou réforme absent des sources ; toute date d'événement ou mention de la Semaine mondiale de l'entrepreneuriat (film intemporel).

## QA

- t = 0 : vignette lisible (atelier plein cadre), jamais vide.
- La bulle se lit (onde sonore) et se dissout sans destinataire avant la fin de L02.
- Carte : forme du Gabon reconnaissable ; « plus de 1 100 entreprises » sur une seule ligne, loin de la carte.
- Aucune date, aucune année d'édition, aucune « Semaine ».
- 13 étiquettes de fédérations lisibles à 1080p (≥ 30 px).
- Tour FEG : 4 étiquettes sur les bons bandeaux.
- Circuit : 3 étapes nommées, dans l'ordre de la voix.
- GEF : 8 tables visibles, Déclaration lisible.
- Fin : les disques 3D tombent exactement sur les points du logo ; CTA tenu ≥ 2 s.
