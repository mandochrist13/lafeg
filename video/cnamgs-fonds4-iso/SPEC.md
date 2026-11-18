# CNAMGS — « Le Fonds 4 » (vidéo 3D isométrique)

## Objet

Présenter le concept du Fonds 4 de la CNAMGS en une minute et demie :

- la couverture maladie s'étend à toutes les personnes qui ont une activité génératrice de revenus ;
- les fonds 1, 2 et 3 existent déjà ; le Fonds 4 s'ouvre aux travailleurs indépendants et aux assurés volontaires ;
- qui est concerné, à quels soins il donne accès, comment il est financé, où s'immatriculer.

Le but est que les personnes concernées se fassent immatriculer.

Ce film est de la même famille que la présentation de la FEG (`video/feg-promo`) : une seule prise continue à travers une maquette d'architecte isométrique, blanche, avec les couleurs de la marque en accent. Son pendant explicatif est la vidéo 2D `video/cnamgs-fonds4-guide`.

## Format

- 1920 × 1080, 30 im/s, 89,76 s.
- Rendu : `renders/CNAMGS-Fonds4-3D.mp4`.
- Commandes :
  - `node tools/build.mjs` : recalcule les temps depuis la voix ;
  - `npx --yes hyperframes@0.9.41 check` ;
  - `npx --yes hyperframes@0.9.41 render --quality delivery -o renders/CNAMGS-Fonds4-3D.mp4`.

## Sources du contenu

- L'affiche « Opérationnalisation du Fonds 4 ».
- Le communiqué de la CNAMGS du 15 janvier 2026.
- L'article de presse transmis (déclarations du délégué provincial Erwan Ossiali Ongaye). C'est la source des définitions des fonds 1, 2 et 3.

Le projet de décret n'a pas été repris, car il n'est pas encore adopté. Aucun chiffre n'a été inventé : ni montant de cotisation, ni taux de prise en charge, ni nombre de bureaux, ni numéro de téléphone.

## Charte

| Rôle | Valeur |
| --- | --- |
| Bleu CNAMGS | `#0067A3` : coupoles, liaisons, bandeaux, toits de la rue |
| Vert CNAMGS | `#4F9A36` : liseré de la coupole du Fonds 4, repères des unités, coches |
| Jaune CNAMGS | `#F3CF1B` : auvent du commerce, toit du studio, bande centrale du drapeau |
| Bleu profond | `#0B3F63` : titres |
| Encre | `#16202A` |
| Maquette | blanc cassé `#F6F6F1`, toits `#DEDFD9`, vitrages `#7F8C86` |
| Police | Montserrat 500 à 800, dans `assets/fonts` (licence OFL) |
| Taille minimale du texte | 28 px |
| Logo | `assets/img/cnamgs-logo.png`, sur l'enseigne du siège et sur la carte de fin |

Les couleurs du logo sont celles du drapeau gabonais. Le film les reprend à la fin, sur la carte du pays.

## Voix

- Voix Gemini TTS « Sulafat », en une seule prise découpée aux pauses (`tools/voice_onepass.mjs`), au volume 0,8.
- Neuf phrases ; leur texte est dans `tools/lines.json`. Les mots sont calés dans `audio_meta.json`.
- Le script écrit « Knam-GS » pour que la voix dise « knam-jé-èss ». L'écran écrit toujours CNAMGS.

Les neuf phrases :

1. Au Gabon, beaucoup de femmes et d'hommes travaillent à leur compte : dans un commerce, un atelier, un cabinet, ou au service d'une maison.
2. La couverture maladie s'étend désormais à toutes les personnes qui exercent une activité génératrice de revenus.
3. La CNAMGS couvre déjà les salariés du privé, avec le Fonds 1, les agents de l'État, avec le Fonds 2, et les Gabonais économiquement faibles, avec le Fonds 3.
4. Avec le Fonds 4, elle s'ouvre aux travailleurs indépendants et aux assurés volontaires.
5. Sont concernés : les professions libérales de la santé, du droit et du conseil, les commerçants, les artisans, les artistes, les employés de maison, et les étrangers qui résident régulièrement au Gabon.
6. Le Fonds 4 donne accès aux consultations, aux examens, aux hospitalisations, aux médicaments et aux évacuations sanitaires.
7. Il est financé par une cotisation forfaitaire, payée chaque trimestre, par voie électronique.
8. Pour en bénéficier, faites-vous immatriculer dans un bureau de la CNAMGS : délégation provinciale, unité départementale ou communale, partout dans le pays.
9. Avec le Fonds 4, la CNAMGS renforce la solidarité nationale, pour ne laisser personne de côté. La solidarité a un sens.

## Musique

« Find Yourself » de SoundHill, le même morceau que les films de la FEG et que la vidéo 2D.

- Le film part de 47,90 s dans le morceau, avec un fondu d'entrée de 1,2 s.
- L'accord final du morceau (130,16 s) tombe sur le logo de la carte de fin, à 82,26 s dans le film.

Volume de la musique (courbe dans `index.html`, écrite par `tools/build.mjs`) :

| Moment | Volume |
| --- | --- |
| Seule, au début | 0,52 |
| Sous la voix | 0,19 |
| Dans les silences de plus d'une seconde | 0,36 |
| Sur la carte de fin | 0,85 |

## La maquette

Tout ce que l'on voit est calculé par `render(t)` dans `compositions/world.html` (Three.js, caméra orthographique isométrique). Les temps viennent des mots de la voix (`assets/cues.js`).

La ville est un plan en étoile :

- au centre, le siège de la CNAMGS, avec son enseigne sur le toit ;
- quatre avenues partent du siège ;
- au bout de chacune, un quartier, c'est-à-dire un fonds :

| Place à l'écran | Quartier | Fonds |
| --- | --- | --- |
| En haut à gauche | Tours de bureaux et usine | 1 · Salariés du privé |
| En haut à droite | Ministère à colonnes et drapeau | 2 · Agents de l'État |
| En bas à gauche | Maisons et familles | 3 · Gabonais économiquement faibles |
| En bas à droite | La rue des indépendants | 4 · Travailleurs indépendants et assurés volontaires |

La rue des indépendants compte cinq lots :

- un cabinet, avec trois plaques : santé, droit, conseil ;
- un commerce, avec son étal ;
- un atelier ;
- un studio d'artiste ;
- une maison, avec son jardin et sa voiture.

Chaque fonds est figuré par une coupole bleue translucide. Elle naît sur le mot « Fonds » et reçoit une liaison tracée depuis le siège. La coupole du Fonds 4 a un liseré vert.

La ville est posée sur la dalle de Libreville. Les autres dalles de la carte du Gabon se lèvent au moment du grand recul de L08.

## Plan par plan

| Temps (s) | Voix | Ce qu'on voit |
| --- | --- | --- |
| 0 → 3,4 | — | La rue se construit lot par lot ; la caméra pousse lentement. |
| 3,4 → 11,8 | L01 | Les femmes apparaissent sur « femmes », les hommes sur « hommes ». Chacun est à son poste. Recul sur toute la rue. Sur « commerce », « atelier », « cabinet » et « maison », chaque lot prend sa couleur et reçoit son étiquette. |
| 11,8 → 18,6 | L02 | Grand recul. Le siège, les avenues et les trois autres quartiers se lèvent. Sur « s'étend », une onde bleue part du siège et couvre toute la ville. Les habitants apparaissent sur « personnes ». |
| 18,6 → 29,2 | L03 | L'enseigne CNAMGS apparaît sur « CNAMGS ». Pour chaque fonds : le quartier se teinte de bleu et l'étiquette apparaît sur sa population ; sur « Fonds 1 », « Fonds 2 », « Fonds 3 », la liaison part du siège et la coupole se forme. |
| 29,2 → 34,5 | L04 | La caméra glisse vers la rue des indépendants, à droite. Sur « Fonds 4 », la quatrième coupole se forme. À gauche, le titre « Fonds 4 · Travailleurs indépendants et assurés volontaires » (`ov-fonds4`). Sur « assurés volontaires », deux passants entrent sous la coupole. |
| 34,5 → 47,9 | L05 | Dans la rue, une étiquette par catégorie, sur son mot : Professions libérales (santé, droit et conseil s'allument un à un, ainsi que les trois plaques du cabinet), Commerçants, Artisans, Artistes, Employés de maison, Étrangers résidant régulièrement au Gabon (une carte de séjour stylisée apparaît au-dessus de deux passants). |
| 47,9 → 56,5 | L06 | Le pôle de soins se lève. Sur chaque mot, un bâtiment prend sa couleur et son étiquette : consultations, examens, hospitalisations, médicaments. Sur « évacuations sanitaires », l'hélicoptère décolle de l'hôpital. |
| 56,5 → 62,5 | L07 | Un grand téléphone se dresse devant le commerce, avec à l'écran « Fonds 4 · Cotisation trimestrielle · T1 T2 T3 T4 · Payer ». Sur « trimestre », quatre pièces y entrent ; sur « électronique », une coche verte. À gauche, « Une cotisation forfaitaire · Chaque trimestre (T1 à T4) · Par voie électronique » (`ov-cotisation`). |
| 62,5 → 72,1 | L08 | Au siège, une habitante marche jusqu'à l'entrée. Sur « immatriculer », coche verte et étiquette « Immatriculation ». Puis grand recul jusqu'à la carte du Gabon : les dalles se lèvent depuis Libreville, et chaque province prend une teinte. Les repères apparaissent sur leurs mots : un grand repère bleu par province sur « délégation provinciale », de petits repères verts sur « unité départementale » et « communale ». Sur « partout », tous rebondissent. La légende est à gauche. |
| 72,1 → 81,4 | L09 | Les repères s'effacent. Sur « solidarité », une vague part de Libreville et colore le pays en trois bandes vert, jaune et bleu, les couleurs du drapeau et du logo. Sur « personne de côté », un habitant apparaît sur chaque dalle, les plus éloignées en dernier. |
| 81,7 → 89,8 | — | Carte de fin (`ov-end`), sur fond blanc. Le logo se révèle sur l'accord final. Suivent « Fonds 4 · Travailleurs indépendants et assurés volontaires », « Faites-vous immatriculer dans un bureau de la CNAMGS », la barrette tricolore, « La solidarité a un sens. » et cnamgs.ga. |

## Fichiers

| Fichier | Contenu |
| --- | --- |
| `tools/build.mjs` | Calage : écrit `assets/cues.js` (temps des phrases et des mots, fenêtres des titres) et `index.html` (maquette, titres, voix, musique et sa courbe de volume). |
| `tools/lines.json` | Le texte de la voix et les silences. |
| `audio_meta.json` | Durées des voix et mots alignés. |
| `compositions/world.html` | La maquette 3D : ville, coupoles, pôle de soins, téléphone, carte, caméra, étiquettes. |
| `compositions/ov-fonds4.html` | Titre « Fonds 4 ». |
| `compositions/ov-cotisation.html` | Titre « Une cotisation forfaitaire ». |
| `compositions/ov-end.html` | Carte de fin. |
| `lib/` | GSAP, Three.js (licence dans `lib/THREE-LICENSE.txt`), RoundedBoxGeometry. |
