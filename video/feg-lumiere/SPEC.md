# SPEC — « La lumière des entreprises »

GOAL : présenter la FEG autrement que les deux films précédents (3D isométrique, 2D). Un chef d'entreprise gabonais comprend qu'une entreprise seule porte peu, que la FEG rassemble plus de 1 100 entreprises depuis 1959, comment leur voix remonte jusqu'aux réformes (Bureau exécutif, dialogue public-privé, Gabon Economic Forum), ce que la FEG apporte au quotidien, et retient lafeg.ga pour adhérer. Film intemporel : aucune date d'événement.

OUTPUT : HyperFrames 0.9.41, 1920 × 1080, 30 im/s, MP4 H.264 + AAC.

TIME : 85,5 s, fixée par la voix (10 phrases, 69 s de parole) et la carte de fin.

## Idée

Une entreprise = une lumière. Le film suit 1 100 lumières, une par entreprise membre, dans la nuit. Seules, elles se perdent. Ensemble, elles dessinent le Gabon, forment 13 galaxies, font briller le Bureau exécutif et rejoignent la table du dialogue. À la fin, le jour se lève et elles deviennent les 71 points du logo FEG.

## LOOK : data-art lumineux

- **Fond** : nuit vert très sombre (#0A1E14 au centre, #02070A aux bords), légère vignette, étoiles lointaines. À la fin, aube crème puis blanc pur.
- **Lumières** : points doux en mélange additif (cœur + halo), avec un vrai halo (bloom) calculé sur toute l'image : la scène est rendue hors écran, floutée en cascade sur 4 niveaux et ajoutée à l'image.
- **Lumières principales** (première lumière, atelier, commerce, chantier, ateliers du GEF, réformes, services, nouvelle lumière) : étoiles à aigrettes.
- **Couleurs** : blanc chaud #FFF1C8, or #F3D27A, vert FEG lumineux #5FE0A0 (les fédérations vont du vert à l'or), bleu froid #BCD8FF pour les pouvoirs publics, bronze du logo #AEAE7D à la fin.
- **Typographie** : Hyundai Sans Head Bold (chiffres 150 px, titres 54–72 px), Medium (surtitres 38 px, noms des fédérations 28 px), Hyundai Sans Text (petites étiquettes 30 px). Texte clair à léger halo doré. Aucun texte sous 28 px.
- **Caméra** : perspective (30°), une seule prise continue qui suit les lumières. Le plan final est calculé pour que les points tombent exactement sur ceux du logo de la carte de fin (0,62 px écran par px du logo).

## Données

- **1 100 lumières** = plus de 1 100 entreprises membres.
- **13 fédérations**, effectifs du film v6 : Construction 337, Services divers 118, Commerce 110, Conseil 83, Logistique et manutention 83, Industries extractives 67, Numérique 67, Industrie 61, Finance 50, Santé 43, Bois 30, Tourisme 29, Agriculture et pêche 22. Chaque galaxie contient exactement ce nombre de lumières ; son rayon suit la racine de l'effectif.
- **Carte** : les 71 points du logo FEG, 15 ou 16 lumières par point. La place d'une lumière sur la carte est symbolique : ce n'est pas l'adresse réelle d'une entreprise.
- **Jauges** : près de 80 % du PIB (anneau or), plus de 90 % de la main-d'œuvre formelle (anneau vert).

## Récit (temps du film)

| Phrase | Voix | Image |
| --- | --- | --- |
| — | 0–2,6 s | Nuit. Une première lumière s'allume. |
| L01 | Chaque entreprise est une lumière : un atelier, un commerce, un chantier qui fait vivre le pays. | Trois lumières s'allument sur leurs mots, avec « un atelier », « un commerce », « un chantier » ; sur « vivre le pays », des centaines d'autres. |
| L02 | Mais seule, sa lumière porte peu, et sa voix se perd. | Les autres s'éteignent ; gros plan sur une lumière isolée ; des ondes s'en éloignent et s'effacent. |
| L03 | Depuis 1959, la FEG rassemble ceux qui font l'économie du pays : plus de 1 100 entreprises. | Les lumières convergent depuis Libreville et dessinent la carte du Gabon (la trame du logo). « Depuis 1959 », « Fédération des Entreprises du Gabon », compteur « plus de 1 100 entreprises ». |
| L04 | Ensemble, près de 80 % du PIB et plus de 90 % de la main-d'œuvre formelle. | Deux anneaux de lumière se remplissent autour de la carte, avec les chiffres. |
| L05 | Réunies en treize fédérations métiers, elles parlent d'une seule voix. | La carte se défait en 13 galaxies sur un anneau, de la plus grande à la plus petite, avec nom et effectif ; « 13 fédérations métiers » au centre ; sur « une seule voix », les 13 galaxies pulsent ensemble et une onde part du centre. |
| L06 | Leurs préoccupations remontent jusqu'au Bureau exécutif, puis à la table du dialogue public-privé. | Les galaxies se vident vers le centre : une sphère, « Bureau exécutif ». La caméra glisse vers « Pouvoirs publics » (sphère bleue) ; un pont de lumière : « Dialogue public-privé ». |
| L07 | Ce dialogue a son grand rendez-vous : le Gabon Economic Forum. Lors de sa dernière édition, ses huit ateliers ont abouti à la Déclaration de Libreville. | Un grand anneau doré entoure les deux sphères ; 8 ateliers s'allument dessus ; leurs faisceaux convergent vers la page 1 de la Déclaration, lumineuse. |
| L08 | Dette intérieure, fiscalité, commande publique, financement des PME : ensemble, les entreprises pèsent sur les réformes du pays. | La sphère éclate et redessine la carte ; quatre réformes s'allument en colonne ; sur « pèsent », la carte pulse et nourrit chacune d'elles. |
| L09 | Et au quotidien : une veille sur les réformes, des formations, un réseau d'affaires, la médiation et l'arbitrage. | Quatre services s'allument autour de la carte, chacun sur son mot, et rayonnent vers elle. |
| L10 | Des entreprises fortes, une prospérité partagée. Ajoutez votre lumière : rejoignez la Fédération des Entreprises du Gabon. | Lueur chaude ; slogan. Sur « lumière », une nouvelle lumière part du texte et rejoint Libreville. Sur « rejoignez », la caméra recule de face, les lumières se resserrent sur les 71 points ; le jour se lève ; les points deviennent bronze ; le logo se dessine, « Devenez membre · lafeg.ga », info@lafeg.ga · +241 11 77 55 95. |

## Son

- **Voix** : Gemini TTS, voix Despina (celle du film v6), une seule requête pour les 10 phrases, coupée à la main aux silences, normalisée à −16 LUFS, calée mot à mot.
- **Musique** : SoundHill « Find Yourself », déjà fournie pour les films FEG ; son dernier accord tombe sur le logo. Elle descend sous la voix et remonte dans les respirations.

## Fichiers

- `tools/lines.json` : texte et silences ; `tools/build.mjs` : calage, `assets/cues.js` et `index.html`.
- `compositions/world.html` : la scène (Three.js) ; tout ce qu'on voit est une fonction du temps.
- `compositions/ov-titles.html` : chiffres et titres ; `compositions/ov-end.html` : carte de fin.
- `renders/FEG-lumiere.mp4` : le film.
