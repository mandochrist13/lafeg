# SPEC — FEG, « Les archives » (mannequins)

GOAL : présenter la FEG dans le style de la vidéo de référence fournie : des mannequins blancs sans visage, habillés, dans une salle d'archives aux étagères de classeurs colorés, avec des étiquettes blanches reliées par un trait fin aux objets qu'elles nomment, et une caméra tenue à l'épaule.

Un chef d'entreprise gabonais comprend :

- qu'une entreprise seule pèse peu ;
- que la FEG rassemble plus de 1 100 entreprises depuis 1959 ;
- comment leur voix remonte jusqu'aux réformes : Bureau exécutif, dialogue public-privé, Gabon Economic Forum ;
- ce que la FEG apporte au quotidien.

Il retient lafeg.ga pour adhérer. Le film est intemporel : il ne montre aucune date d'événement.

OUTPUT : HyperFrames 0.9.41, 1920 × 1080, 30 im/s, MP4 H.264 + AAC.

TIME : 86,7 s. La durée suit la narration commune aux films de cette série (10 phrases), plus la carte de fin.

## Référence et écart assumé

La référence est une courte image de synthèse photoréaliste (6,8 s). Ce film en reprend :

- les mannequins blancs mats sans visage, habillés (sweat à capuche avec cordon et badge, chemise bleue, tenues sombres) ;
- la salle d'archives : étagères métalliques, classeurs à levier de couleur, cartons, escabeau ;
- les étiquettes blanches à trait fin qui suivent les objets ;
- la caméra à l'épaule, la faible profondeur de champ.

Il est construit en 3D dans le navigateur (Three.js), pas généré par une IA d'image. La lumière et les matières s'en approchent, mais l'image reste moins photoréaliste que la référence.

## Look

- **Lumière.** Plafonniers et fenêtre, ombres douces, environnement réfléchi. Rendu hors écran en haute dynamique, puis tonalité ACES appliquée à l'image entière.
- **Optique.** Profondeur de champ calculée depuis la profondeur de la scène, léger halo des zones claires, vignette et grain.
- **Caméra.** Toujours en mouvement : bougé doux à l'épaule, travellings lents, coupes franches dans les respirations de la voix.
- **Mannequins.** Corps blancs mats, membres arrondis, articulations simples ; poses et marche animées par le temps, mains placées sur les objets.
- **Couleurs.** Classeurs rouges, verts, blancs, jaunes et bleus ; vert FEG #0A7537 et #063D21 sur les écrans ; bronze #AEAE7D.
- **Étiquettes.** Hyundai Sans Head Bold, blanc avec ombre portée, trait blanc de 2 px qui se dessine depuis l'objet. Aucun texte sous 28 px.

## Récit (temps du film)

| Phrase | Voix | Image |
| --- | --- | --- |
| L01 | Chaque entreprise compte : un atelier, un commerce, un chantier qui fait vivre le pays. | La salle d'archives. Le mannequin au sweat entre et va vers les rayonnages ; à droite, un collègue en chemise bleue tient une tasse. Étiquettes sur les classeurs : « Chaque entreprise compte », « Un atelier », « Un commerce », « Un chantier ». |
| L02 | Mais seule, une entreprise pèse peu, et sa voix se perd. | Gros plan : il tire l'unique classeur d'une étagère presque vide. « Seule, une entreprise pèse peu ». |
| L03 | Depuis 1959, la Fédération des Entreprises du Gabon rassemble ceux qui font l'économie du pays : plus de 1 100 entreprises. | Travelling arrière dans l'allée pleine. « Depuis 1959 », « Fédération des Entreprises du Gabon », « plus de 1 100 entreprises ». |
| L04 | Ensemble, elles représentent près de 80 % du PIB, et plus de 90 % de la main-d'œuvre formelle. | Il ouvre le classeur et lit, d'abord de trois quarts, puis en vue subjective : deux anneaux se remplissent sur la page, 80 % et 90 %, avec leurs étiquettes. |
| L05 | Réunies en treize fédérations métiers, elles parlent d'une seule voix. | Vue d'ensemble des 13 rayonnages : chaque étiquette donne le nom d'une fédération et son nombre d'entreprises. « 13 fédérations, une seule voix ». |
| L06 | Leurs préoccupations remontent jusqu'au Bureau exécutif, puis à la table du dialogue public-privé. | La salle de réunion, logo FEG à l'écran. « Bureau exécutif » d'un côté de la table, « Pouvoirs publics » de l'autre, « Dialogue public-privé » sur la table. |
| L07 | Ce dialogue a son grand rendez-vous : le Gabon Economic Forum. Lors de sa dernière édition, ses huit ateliers ont abouti à la Déclaration de Libreville. | Un membre du Bureau, debout à côté de l'écran, montre le Gabon Economic Forum, puis les 8 ateliers. Il s'avance et tient la vraie page 1 de la Déclaration de Libreville face à la caméra. |
| L08 | Dette intérieure, fiscalité, commande publique, financement des PME : ensemble, les entreprises pèsent sur les réformes du pays. | Au bureau, devant la fenêtre : quatre classeurs se posent un par un, chacun sur son mot. Sur « ensemble », les quatre étiquettes laissent place à « Ensemble, elles pèsent sur les réformes ». |
| L09 | Et au quotidien : une veille sur les réformes, des formations, un réseau d'affaires, la médiation et l'arbitrage. | Retour en salle de réunion : un mannequin à l'ordinateur (« Veille sur les réformes »), une diapositive de formation, une poignée de main (« Réseau d'affaires »), deux personnes assises face à face (« Médiation et arbitrage »). |
| L10 | Des entreprises fortes, une prospérité partagée. Votre entreprise a sa place à nos côtés : rejoignez la Fédération des Entreprises du Gabon. | Dans les archives, il remet le classeur à sa place, parmi les autres. Sur « rejoignez », la caméra recule, l'image blanchit, puis la carte de fin : logo FEG, « Devenez membre · lafeg.ga », info@lafeg.ga · +241 11 77 55 95. |

## Son

- **Voix.** Narration commune aux films de la série : voix Despina, L01, L02 et L10 générées en une requête, L03 à L09 reprises du film « La lumière », toutes normalisées et calées mot à mot.
- **Musique.** SoundHill « Find Yourself », comme les autres films FEG ; son dernier accord tombe sur le logo.

## Fichiers

- `tools/lines.json` (texte et silences) et `tools/build.mjs` (calage, `assets/cues.js`, `index.html`).
- `compositions/world.html` : les décors 3D, les mannequins et les étiquettes (Three.js). Tout ce qu'on voit est une fonction du temps.
- `compositions/ov-end.html` : la carte de fin.
- `renders/FEG-mannequins.mp4`, réencodé pour l'envoi ; le rendu d'origine est `renders/FEG-mannequins-master.mp4`.
