# SPEC — « Ceux qui font l'économie du pays » (collage photo)

GOAL : présenter la FEG en style collage. Un chef d'entreprise gabonais comprend qu'une entreprise seule pèse peu, que la FEG rassemble plus de 1 100 entreprises depuis 1959, comment leur voix remonte jusqu'aux réformes (Bureau exécutif, dialogue public-privé, Gabon Economic Forum), ce que la FEG apporte au quotidien, et retient lafeg.ga pour adhérer. Film intemporel : aucune date d'événement.

OUTPUT : HyperFrames 0.9.41, 1920 × 1080, 30 im/s, MP4 H.264 + AAC.

TIME : 86,7 s, fixée par la narration commune aux quatre films (10 phrases) et par la carte de fin.

## Idée

Toute l'histoire se construit sur une grande table de papier kraft, plus large que le cadre. La caméra la parcourt d'une zone à l'autre, comme un banc-titre tenu à la main. Les papiers arrivent comme en animation image par image, à 12 poses par seconde : ils glissent, tombent, se posent avec un petit rebond. Puis on les scotche, on les tamponne, on les annote au feutre. Aucun élément ne disparaît sans raison : la table garde la trace du récit.

## LOOK

- **Table** : kraft clair #E6D8BB, grain et fibres, taches de lumière ; vignette douce comme une photo de table.
- **Papiers** : blanc cassé #FBF8F0, vert FEG #0B5A33, bronze #B3AE78, manille #EAD9AD ; bords déchirés irréguliers ; ombres portées qui grandissent quand un papier est encore en l'air.
- **Photos** : tirages à bord blanc, polaroïd pour le siège, trombone pour la Déclaration ; ruban adhésif aux coins.
- **Écriture** : titres en bandes de papier, Hyundai Sans Head Bold (54 à 116 px) ; annotations et post-it au feutre vert, police Caveat ; tampons à l'encre rouge #7D2A1F, encre mangée par endroits.
- **Laine rouge** #B4322A tendue entre des punaises.

## Récit (temps du film)

| Phrase | Voix | Image |
| --- | --- | --- |
| — | 0–2,6 s | La table vide : un crayon, un trombone, un bout de ruban se posent. |
| L01 | Chaque entreprise compte : un atelier, un commerce, un chantier qui fait vivre le pays. | Bande « Chaque entreprise compte » ; trois découpages arrivent sur leurs mots : l'atelier (engrenage, marteau, clé), le commerce (boutique à auvent), le chantier (grue, immeuble). Leurs noms s'écrivent au feutre ; un trait les relie. |
| L02 | Mais seule, une entreprise pèse peu, et sa voix se perd. | Le titre, l'atelier et le chantier sont retirés de la table ; gros plan sur la boutique seule, « seule… » au feutre ; sa bulle « … » rétrécit et s'envole. |
| L03 | Depuis 1959, la FEG rassemble ceux qui font l'économie du pays : plus de 1 100 entreprises. | Le Gabon en papier vert déchiré tombe sur la table, tampon « DEPUIS 1959 », carton du logo FEG ; « Ceux qui font / l'économie / du pays » ; étiquette « plus de 1 100 entreprises » ; les 71 points du logo se posent en confettis bronze. |
| L04 | Ensemble, près de 80 % du PIB et plus de 90 % de la main-d'œuvre formelle. | « ensemble » au feutre ; deux disques de papier dont le quartier vert se découpe sur les chiffres. |
| L05 | Réunies en treize fédérations métiers, elles parlent d'une seule voix. | « 13 fédérations métiers » ; 13 étiquettes épinglées, nom et effectif ; bulle verte « une seule voix ». |
| L06 | Leurs préoccupations remontent jusqu'au Bureau exécutif, puis à la table du dialogue public-privé. | Des fils de laine partent des 13 punaises vers « Bureau exécutif » ; puis vers les bulles « privé » et « public », reliées aux « Pouvoirs publics » ; « Dialogue public-privé ». |
| L07 | Ce dialogue a son grand rendez-vous : le Gabon Economic Forum. Lors de sa dernière édition, ses huit ateliers ont abouti à la Déclaration de Libreville. | Photo de salle, « Gabon Economic Forum », carton du logo du Forum ; 8 cartes numérotées, « 8 ateliers » ; la page 1 de la Déclaration avec son trombone, « Déclaration de Libreville ». |
| L08 | Dette intérieure, fiscalité, commande publique, financement des PME : ensemble, les entreprises pèsent sur les réformes du pays. | Quatre rubans annotés se collent sur la Déclaration ; « ensemble ! » au feutre ; tampon « RÉFORMES ». |
| L09 | Et au quotidien : une veille sur les réformes, des formations, un réseau d'affaires, la médiation et l'arbitrage. | « Au quotidien » ; quatre post-it sur leurs mots ; deux photos (formation, mains réunies). |
| L10 | Des entreprises fortes, une prospérité partagée. Votre entreprise a sa place à nos côtés : rejoignez la Fédération des Entreprises du Gabon. | Bandes du slogan ; polaroïd du siège (immeuble Odyssée) ; « Votre entreprise a sa place / à nos côtés. » ; une grande feuille blanche se pose sur tout le cadre et se fait scotcher ; le logo s'y pose en trois poses sur le dernier accord ; « Devenez membre · lafeg.ga », info@lafeg.ga · +241 11 77 55 95. |

## Son

- **Voix** : narration commune aux quatre films (Despina) ; L01, L02 et L10 générées en une requête, L03 à L09 reprises du film « La lumière des entreprises » ; calage mot à mot.
- **Musique** : SoundHill « Find Yourself » ; son dernier accord tombe sur le logo. Elle descend sous la voix et remonte dans les respirations.

## Fichiers

- `tools/lines.json`, `audio_meta.json`, `assets/voice/` : la narration commune (ne pas modifier).
- `tools/build.mjs` : calage, `assets/cues.js` et `index.html`.
- `compositions/world.html` : la table, tous les papiers et la caméra ; tout ce qu'on voit est une fonction du temps.
- `compositions/ov-end.html` : logo et appel de la carte de fin.
- `renders/FEG-collage.mp4` : le film.
