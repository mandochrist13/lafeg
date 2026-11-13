# SPEC — « De la facture à la réforme »

GOAL: un chef d'entreprise gabonais comprend ce qu'est la FEG, comment le problème d'une entreprise remonte jusqu'aux réformes du pays (via le Gabon Economic Forum), ce que l'adhésion apporte au quotidien, et retient lafeg.ga pour adhérer.

OUTPUT: HyperFrames, 1920 × 1080, 30 fps, MP4 H.264.

TIME: ~100 s (fixé par la voix off) ≈ 3000 images. Musique ~96 BPM → 18,75 images par temps.

## LOOK

- **Médium** : maquette d'architecte blanche, projection orthographique isométrique vraie (azimut 45°, élévation 35,26°), éclairée comme un modèle en studio. Pas d'horizon : le sol remplit tout le cadre.
- **Sol** : #E8E9E4 (pierre froide), mat (rugosité 1).
- **Maquette** : #F4F4EF, rugosité 0,85, arêtes arrondies à 0,04 u. Bâtiments isolés et non-membres.
- **Vert FEG** : #0A7537 = entreprise membre (le bâtiment change de couleur quand il rejoint) ; #063D21 = institution, titres.
- **Bronze** : #AEAE7D (points du logo, couronne de la tour FEG, sceau de la Déclaration), #DCDAA4 en reflet. Rationné : jamais plus d'un élément bronze par plan avant la fin.
- **État / public** : gris froid #C5CBD0.
- **Papier** : #FFFFFF, encre #1A1C19, tampon #8A8F87.
- **Lumière** : hémisphère ciel #FFFFFF / sol #CDD2CB, intensité 1,7 ; soleil #FFFFFF 2,3 venant du haut gauche (azimut −30°, élévation 55°), ombres PCF douces (rayon 4), carte d'ombre recadrée sur la vue à chaque image.
- **Typo** : Hyundai Sans Head Office Bold (titres, 72–110 px, interlettrage −1 %), Medium (étiquettes 32–36 px), Hyundai Sans Text Office Regular (texte 30 px, sources 28 px). Encre #1A1C19 sur sol clair, titres #063D21, un seul mot accent #0A7537 par plan.

## OBJECTS

- **Atelier héros** : hangar à toit en sheds, porte de chargement, annexe de bureau vitrée, palettes devant.
- **Chantier** : grue à tour (mât en treillis, flèche, contrepoids) ; **commerce** : boutique à auvent ; **bureau** : petit immeuble à bandeaux de fenêtres.
- **Facture** : feuille A4, en-tête « FACTURE », 6 lignes grises, total, tampon « EN ATTENTE DE PAIEMENT ». **Formulaires** : pile de feuilles qui monte.
- **Carte des membres** : 71 socles ronds aux positions exactes des points du logo FEG ; 1 118 bâtiments (15–16 par socle) ; hauteurs selon la répartition réelle des tailles (micro 57 %, petite 31 %, moyenne 9 %, grande 2 %).
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

Temps réels, calés sur la voix off (générés par `tools/build.mjs`) :

| Phrase | Début | Fin |
| --- | --- | --- |
| L01 | 1.00 s | 7.68 s |
| L02 | 8.58 s | 14.70 s |
| L03 | 16.00 s | 28.20 s |
| L04 | 29.10 s | 37.02 s |
| L05 | 38.02 s | 46.66 s |
| L06 | 47.76 s | 56.52 s |
| L07 | 57.82 s | 68.26 s |
| L08 | 69.36 s | 79.52 s |
| L09 | 80.72 s | 90.48 s |
| L10 | 91.78 s | 103.90 s |
| Logo | 103.71 s | 109.40 s (fin) |


1. **L01, le terrain** : atelier seul plein cadre (≥ 40 % de la hauteur), recul lent qui révèle un chantier et une boutique, isolés. Kicker « Semaine mondiale de l'entrepreneuriat 2026 ».
2. **L02, seule** : poussée sur l'atelier ; la facture se soulève, la pile de formulaires monte plus haut que le toit. Reste gris.
3. **L03, le réseau** : grand recul ; 71 socles émergent, 1 118 bâtiments se lèvent depuis Libreville et virent au vert ; « Depuis 1959 » + titre + compteur 1 118 ; puis 13 tours de fédérations se lèvent à droite de la carte, étiquetées.
4. **L04, le poids** : les 13 tours glissent l'une vers l'autre ; « ≈ 80 % du PIB », « + 90 % de la main-d'œuvre formelle » en grands chiffres.
5. **L05, la raison d'être** : les tours fusionnent en tour FEG ; quatre bandeaux s'allument : Informer, Promouvoir, Participer, Défendre.
6. **L06, le circuit** : la facture quitte l'atelier, trace un chemin au sol : Fédération métier (pied de la tour) → Bureau exécutif (sommet) → table du dialogue public-privé.
7. **L07, le GEF** : la caméra file vers le Palais des Congrès ; le toit se soulève ; 8 ateliers ; la facture se pose sur « Dette intérieure et fiscalité » ; 8 feuilles fusionnent en Déclaration de Libreville.
8. **L08, les réformes** : la Déclaration rejoint l'État ; des liaisons vertes repartent vers la carte ; citation exacte de l'Axe 1 ; « 8 axes · 24 recommandations · un comité paritaire de suivi ».
9. **L09, les services** : retour à la tour ; quatre tiroirs sortent un par un avec leur objet et leur étiquette.
10. **L10, l'adhésion** : retour à l'atelier, désormais vert et relié ; grand recul ; la caméra bascule à la verticale ; les quartiers se resserrent en 71 disques bronze = les points du logo ; les arcs et « FEG » apparaissent ; « Devenez membre » · lafeg.ga, tenu 3 s.

## BANNED

Fond sombre vide ; lueurs, bloom, particules ; dégradés violet/bleu, cartes en verre ; papier crème + serif italique ; étiquettes en capitales monospace, pastilles ; tout centré ; tout qui apparaît en fondu-glissé vers le haut ; titres qui dérivent après s'être posés ; coins, cadres, HUD décoratifs ; trois cartes en rang, grilles de KPI ; logo collé dans un coin ; motifs folkloriques ; rebonds de dessin animé (amortissement < 0,6) ; tout chiffre ou réforme absent des sources.

## QA

- t = 0 : vignette lisible (atelier + kicker), jamais vide.
- La facture se lit (FACTURE + tampon) ; la pile dépasse le toit.
- Carte : forme du Gabon reconnaissable ; compteur exact 1 118.
- 13 étiquettes de fédérations lisibles à 1080p (≥ 30 px).
- Tour FEG : 4 étiquettes sur les bons bandeaux.
- Circuit : 3 étapes nommées, dans l'ordre de la voix.
- GEF : 8 tables visibles, Déclaration lisible.
- Fin : les disques 3D tombent exactement sur les points du logo ; CTA tenu ≥ 2 s.
