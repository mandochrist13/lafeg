# SPEC — « Le point bronze »

GOAL : présenter la FEG par un personnage. Un des 71 points du logo prend vie : seul, sa voix se perd ; il découvre les entreprises de la FEG, leurs 13 fédérations qui parlent d'une seule voix, le chemin de cette voix jusqu'aux réformes, les services du quotidien, puis il saute dans sa place vide. Message : « Votre entreprise a sa place à nos côtés ». Film intemporel : aucune date d'événement.

OUTPUT : HyperFrames 0.9.41, 1920 × 1080, 30 im/s, MP4 H.264 + AAC.

TIME : 86,7 s, fixée par la narration commune aux quatre films (10 phrases) et la carte de fin.

## LOOK

- **Fond** : blanc chaud (#FFFDF8 au centre, #F0EBDE aux bords), blanc pur pour la carte de fin.
- **Personnages** : des disques bronze (#D0CC9D → #AAA673 → #8F8A52) avec yeux, pupilles et reflet ; le héros est plus grand, avec des joues. Points endormis : disque clair cerclé. Pouvoirs publics : même personnage en bleu gris.
- **Métiers** : marteau (atelier), auvent rayé (commerce), casque jaune (chantier).
- **Animation** : sauts avec anticipation, étirement en vol, écrasement à l'atterrissage puis rebond amorti ; regards qui suivent l'action ; clignements ; bouches qui s'ouvrent pour chanter.
- **Typographie** : Hyundai Sans Head Bold (chiffres 150 px, titres 56–80 px), Medium (surtitres, noms des fédérations 28 px), Hyundai Sans Text (petites étiquettes 32 px). Vert profond #063D21, bronze #8A8450. Aucun texte sous 28 px.
- **Caméra** : 2D, une seule prise qui suit le héros. À zoom 1, le monde est l'écran final : les 71 points sont à la place exacte de ceux du logo (691,54 ; 222 ; 0,62 px par px du logo).

## Données

- 13 fédérations et leurs effectifs : Construction 337, Services divers 118, Commerce 110, Conseil 83, Logistique et manutention 83, Industries extractives 67, Numérique 67, Industrie 61, Finance 50, Santé 43, Bois 30, Tourisme 29, Agriculture et pêche 22.
- 70 points se répartissent entre les fédérations en proportion de ces effectifs (22, 8, 7, 5, 5, 4, 4, 4, 3, 3, 2, 2, 1) ; le héros est le 71e. Les étiquettes donnent les vrais effectifs.
- Jauges en points : 16 cases sur 20 (près de 80 % du PIB), 18 sur 20 (plus de 90 % de la main-d'œuvre formelle).

## Récit

| Phrase | Image |
| --- | --- |
| — | Le héros dort dans un grand espace blanc. |
| L01 | Il ouvre les yeux sur « Chaque entreprise compte » ; un atelier, un commerce et un chantier apparaissent autour de lui, chacun sur son mot ; tous sautent sur « vivre le pays ». |
| L02 | Les trois partent ; la caméra recule : le héros est seul. Sa petite bulle rétrécit et s'efface sur « sa voix se perd », il baisse les yeux. |
| L03 | La carte des 71 points s'éveille depuis Libreville ; le héros la rejoint par bonds et s'arrête devant une place vide (cercle pointillé). « Depuis 1959 », « Fédération des Entreprises du Gabon », compteur « plus de 1 100 entreprises ». |
| L04 | Des points sautent de la carte dans deux jauges : près de 80 % du PIB, plus de 90 % de la main-d'œuvre formelle. |
| L05 | Les points migrent et forment l'anneau des 13 fédérations (noms et effectifs) ; « 13 fédérations métiers » ; sur « une seule voix », tous chantent et une grande bulle commune apparaît. |
| L06 | La bulle monte jusqu'à la table du « Bureau exécutif », puis à la table du « Dialogue public-privé » (FEG d'un côté, « Pouvoirs publics » de l'autre). |
| L07 | Recul : l'anneau devient le « Gabon Economic Forum » ; 8 ateliers ; la page 1 de la « Déclaration de Libreville » se lève au centre. |
| L08 | Les points rentrent sur la carte ; quatre panneaux : Dette intérieure, Fiscalité, Commande publique, Financement des PME ; sur « pèsent », tous les points poussent vers les réformes. |
| L09 | « Au quotidien » : chaque service s'inscrit et son badge vole jusqu'au héros (veille, formations, réseau d'affaires, médiation et arbitrage). |
| L10 | Les points font la vague (« Des entreprises fortes, une prospérité partagée ») ; sur « Votre entreprise a sa place à nos côtés », le héros saute dans sa place ; sur « rejoignez », recul, les yeux se ferment, les points deviennent l'aplat bronze du logo ; le logo se dessine, « Devenez membre · lafeg.ga ». |

## Son

Narration commune (voix Despina), musique SoundHill « Find Yourself » : son dernier accord tombe sur le logo.

## Fichiers

- `compositions/world.html` : la scène (canvas 2D) et les étiquettes posées dans le monde.
- `compositions/ov-titles.html` : titres fixes ; `compositions/ov-end.html` : carte de fin.
- `tools/build.mjs` : calage, `assets/cues.js`, `index.html`.
- `renders/FEG-point-bronze.mp4` : le film.
