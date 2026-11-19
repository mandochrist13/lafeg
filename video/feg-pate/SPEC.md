# SPEC — FEG, « Pâte à modeler »

GOAL : présenter la FEG dans un style tendre et mémorable. Un chef d'entreprise gabonais comprend :

- qu'une entreprise seule pèse peu ;
- que la FEG rassemble plus de 1 100 entreprises depuis 1959 ;
- comment leur voix remonte jusqu'aux réformes : Bureau exécutif, dialogue public-privé, Gabon Economic Forum ;
- ce que la FEG apporte au quotidien.

Il retient lafeg.ga pour adhérer. Le film est intemporel : il ne montre aucune date d'événement.

OUTPUT : HyperFrames 0.9.41, 1920 × 1080, 30 im/s, MP4 H.264 + AAC.

TIME : 86,7 s. La durée suit la narration commune aux quatre films de cette série (10 phrases, 69 s de parole), plus la carte de fin.

## Idée

Un grand plateau de pâte à modeler. Au centre, la carte du Gabon en 71 coussins verts, la trame du logo FEG. Tout autour, les « ateliers » du récit. La caméra fait le tour de la carte d'un atelier à l'autre, puis monte à la verticale : les coussins deviennent les 71 points du logo.

## Look

- **Matière.** Pâte mate et bosselée (relief de doigts, formes légèrement irrégulières), lumière chaude de trois quarts avant, ombres douces, contre-jour froid.
- **Miniature.** Flou en haut et en bas de l'image, net au centre, vignette chaude. Rendu hors écran, puis flou, tonalité ACES et vignette appliqués à toute l'image.
- **Image par image.** Les personnages et les objets changent de pose 12 fois par seconde, avec de petites variations de forme d'une pose à l'autre. La caméra, elle, glisse en continu.
- **Couleurs.** Plateau sable #E7C9A0, carte en verts de pâte, accents orange, jaune et bleu des métiers, bronze du logo #AEAE7D à la fin.
- **Titres.** Hyundai Sans Head Bold, vert foncé #0E5631 en relief, comme des lettres en pâte, et sous-titres brun chaud. Étiquettes en plaques de pâte claire. Aucun texte sous 28 px.

## Récit (temps du film)

| Phrase | Voix | Image |
| --- | --- | --- |
| L01 | Chaque entreprise compte : un atelier, un commerce, un chantier qui fait vivre le pays. | Trois bosses frémissent dans la pâte. L'artisan (marteau), la commerçante (cagette de fruits) et le bâtisseur (casque, brique) en sortent chacun sur son mot, avec « un atelier », « un commerce », « un chantier ». |
| L02 | Mais seule, une entreprise pèse peu, et sa voix se perd. | Les deux autres rentrent dans la pâte. La caméra recule : la commerçante est seule sur la grande table. Sa bulle gonfle, puis se dégonfle et tombe. |
| L03 | Depuis 1959, la FEG rassemble ceux qui font l'économie du pays : plus de 1 100 entreprises. | Les 71 coussins de la carte se lèvent depuis Libreville, avec des maisons et des arbres. Les deux autres reviennent sur « rassemble ». Titres : « Depuis 1959 », « Fédération des Entreprises du Gabon », « plus de 1 100 entreprises ». |
| L04 | Ensemble, près de 80 % du PIB et plus de 90 % de la main-d'œuvre formelle. | De part et d'autre de la carte, deux anneaux se remplissent perle après perle : orange 80 %, vert 90 %. |
| L05 | Réunies en treize fédérations métiers, elles parlent d'une seule voix. | Treize fanions en rangée, de la plus grande fédération à la plus petite ; le mât suit l'effectif, chaque étiquette donne le nom et le nombre d'entreprises. Sur « une seule voix », ils ondulent ensemble. |
| L06 | Leurs préoccupations remontent jusqu'au Bureau exécutif, puis à la table du dialogue public-privé. | Des enveloppes sautent des fanions jusqu'à la table ronde du « Bureau exécutif ». Puis vient la longue table du « Dialogue public-privé », côté FEG en vert et côté « Pouvoirs publics » en bleu, devant un bâtiment à colonnes. |
| L07 | Ce dialogue a son grand rendez-vous : le Gabon Economic Forum. Lors de sa dernière édition, ses huit ateliers ont abouti à la Déclaration de Libreville. | Un amphithéâtre rempli de public, « Gabon Economic Forum ». Huit tables d'ateliers sortent sur « huit ». Un chevalet monte au centre avec la vraie page 1 de la Déclaration. |
| L08 | Dette intérieure, fiscalité, commande publique, financement des PME : ensemble, les entreprises pèsent sur les réformes du pays. | Quatre panneaux sortent penchés, chacun sur son mot. Sur « pèsent », les trois personnages sortent entre eux et les redressent. |
| L09 | Et au quotidien : une veille sur les réformes, des formations, un réseau d'affaires, la médiation et l'arbitrage. | Quatre socles : une loupe, un livre ouvert, un réseau de boules reliées, une balance qui trouve son équilibre. |
| L10 | Des entreprises fortes, une prospérité partagée. Votre entreprise a sa place à nos côtés : rejoignez la Fédération des Entreprises du Gabon. | Retour devant la carte, les personnages saluent. Sur « rejoignez », la caméra monte à la verticale, les coussins s'aplatissent en points bronze calés sur le logo, l'image blanchit, puis le logo se dessine : « Devenez membre · lafeg.ga », info@lafeg.ga · +241 11 77 55 95. |

## Son

- **Voix.** Narration commune aux quatre films de la série : voix Despina, L01, L02 et L10 générées en une requête, L03 à L09 reprises du film « La lumière », toutes normalisées à −16 LUFS et calées mot à mot.
- **Musique.** SoundHill « Find Yourself » ; son dernier accord tombe sur le logo.

## Fichiers

- `tools/lines.json` (texte et silences) et `tools/build.mjs` (calage, `assets/cues.js`, `index.html`).
- `compositions/world.html` : le plateau 3D (Three.js). Tout ce qu'on voit est une fonction du temps.
- `compositions/ov-titles.html` (titres) et `compositions/ov-end.html` (blanchiment, points bronze exacts, logo, appel).
- `renders/FEG-pate-a-modeler.mp4`.
