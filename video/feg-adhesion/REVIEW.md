# REVIEW — « Comment adhérer à la FEG » (v4, 16:9 et 9:16)

## Livrables

- `renders/FEG-comment-adherer-v4.mp4` : 1920 × 1080, 30 i/s, 1 min 37 s (96,7 s), voix off et musique.
- `renders/FEG-comment-adherer-9x16.mp4` : 1080 × 1920, 30 i/s, même durée, même bande-son, sous-titres incrustés, pour les réseaux sociaux.

Pour regénérer : `node tools/build.mjs` (16:9) ou `node tools/build.mjs --vertical` (9:16), puis `npx hyperframes render --quality delivery -o renders/<nom>.mp4`. Le dépôt garde la racine 16:9 ; la version 9:16 se reconstruit à la demande.

## v4 : demandes de la FEG

- **La FEG est au 8ème étage de l'immeuble Odyssée.** La voix le dit (« … déposez le dossier complet à la Fédération, au huitième étage de l'immeuble Odyssée, à Libreville »). L'écran l'écrit sous le titre du dépôt (« Immeuble Odyssée, 8ème étage · BP 410 · Libreville ») et sur la carte de fin.
- **Voix de L06 régénérée** (Despina), en deux morceaux raccordés. Le quota du jour du modèle principal s'est épuisé avant d'obtenir une prise propre de toute la phrase : les prises complètes disaient « sé-nam » ou « Les Brevilles ». La phrase garde donc la prise principale jusqu'à « … à la Fédération, », puis la fin (« au huitième étage de l'immeuble Odyssée, à Libreville ») vient d'une seconde prise de la même voix, accélérée de 10 % pour garder le débit. La coupe tombe dans la pause naturelle après « Fédération ». **À confirmer à l'oreille.**
- Durée : 96,7 s.
- **Contrôles du rendu v4 (16:9)** :
  - `check` : 0 erreur, 0 avertissement ;
  - son mesuré, pas écouté : −15,3 LUFS, crête −1,0 dBFS, plage de loudness 3,1 LU ;
  - écoute automatique Gemini du mixage final, sans lui donner le texte attendu : il transcrit « au 8e étage de l'immeuble Odyssée à Libreville », la même voix du début à la fin de L06, aucune rupture ni aucun défaut ; intelligibilité 9/10, la musique ne couvre pas la voix.

## v4 : version 9:16 pour les réseaux sociaux

- **Même film, recadré** : chaque plan garde son illustration et la montre par une caméra verticale qui suit l'action (le dossier, chaque pièce tamponnée, la marche jusqu'à l'accueil, la poignée de main). Les textes passent en en-tête, en haut de l'image.
- **Sous-titres incrustés**, une ligne à la fois, calés sur la voix : beaucoup de vidéos se regardent sans le son sur les réseaux. CNAMGS, « 8ème étage » et « 31 mars » y sont écrits comme à l'écran.
- **Zone utile** : tout le texte tient entre 168 et 1330 px, au-dessus des boutons et des légendes des applications. Les visages, les tampons et la signature restent au-dessus des sous-titres.
- **Adaptations** :
  - S2 : la rangée des cinq pièces en plan plus large, pour que le dossier cadenassé reste sous le titre ;
  - S6 : la carte de décision et les trois mois au-dessus des instances ; le logo mural est retiré, la carte prend sa place ;
  - S8 : la poignée de main en plan plus serré ;
  - S10 : la phrase de fin en haut, puis le logo et l'appel au-dessus de la chaîne des membres.
- **Contrôles du rendu 9:16** :
  - `check` sur la racine verticale : 0 erreur, 0 avertissement. Au plan 2, en plan large, les petites mentions des pièces (« Registre du commerce »…) tombent à 23 px : elles sont marquées comme décor, car le nom de chaque pièce et le sous-titre portent l'information ;
  - bande-son identique, échantillon par échantillon, à celle de la version 16:9 (−15,3 LUFS, crête −1,0 dBFS) ;
  - 17 images extraites du MP4 final : textes dans la zone utile, chaque sous-titre sur une seule ligne, aucun bord de l'illustration 16:9 visible ;
  - chaque coupe vérifiée à l'image près ; le dossier garde sa place et sa taille de part et d'autre des coupes S1→S2 et S2→S3 ;
  - la racine 16:9, reconstruite ensuite, redonne les images du rendu v4 (écart limité au bruit de compression).

## v3 : demandes de la FEG

- **Phrase de fin** : « S'unir pour être plus fort » devient « Bâtir ensemble une économie forte, pour garantir la souveraineté nationale : rejoignez la Fédération des Entreprises du Gabon. » À l'écran, la phrase s'affiche avant le logo, avec « souveraineté nationale » en vert.
- **Dossier incomplet** : accepté sous réserve, avec **trois mois** (et non six) pour le compléter, dans la voix comme à l'écran (trois cases qui se remplissent). Attention : la page 2 du dossier d'adhésion 2026 indique encore « six (6) mois ».
- **Voix** : L07 et L11 régénérées (Despina). Une première prise de L11 disait « Bâtissons » au lieu de « Bâtir » ; elle a été refaite avec la consigne de lire le texte mot pour mot. Une transcription neutre (sans le texte attendu) entend « Bâtir », et « trois mois ».
- Durée : 95,6 s.
- **Contrôles du rendu v3** : `check` sans erreur ni avertissement. Son mesuré, pas écouté : −15,4 LUFS, crête −1,0 dBFS. Dans le mixage final, Gemini transcrit « trois mois », « Bâtir » et « souveraineté nationale », sans écart ni défaut, intelligibilité 10/10.

## v2 : demandes de la FEG

- **CNAMGS se prononce « knam-jé-èss »** et non lettre par lettre. Les phrases L03 et L06 ont été régénérées avec la même voix (Despina). Pour la synthèse, le texte écrit « Knam-GS » et « CNAM-GS » ; à l'écran, on lit toujours CNAMGS. Chaque prise a été contrôlée par écoute automatique Gemini : une vérification dirigée, puis une question neutre sur les syllabes entendues. Les deux phrases donnent « knam-jé-ès ». Une première prise de L03 commençait par un son « s » (« snam ») ; elle a été refaite en forçant le « k ». **À confirmer à l'oreille.**
- **Mains et doigts redessinés, plus sobres** :
  - chaque main est une silhouette d'un seul tenant, avec des doigts effilés et accolés et des plis fins ; il n'y a plus de contour autour de chaque doigt, ce qui donnait l'effet « boudins » ;
  - main au tampon fermée sur une vraie poignée ;
  - main au stylo en pince à trois doigts ;
  - dossier tenu par ses bords, doigts repliés sur la couverture ;
  - personnes assises : mains posées sur la table ;
  - mains pendantes avec un pouce dessiné.
- **Poignée de main** : le gros plan est remplacé par un plan en pied. La dirigeante et un représentant de la FEG, de profil devant le logo, se serrent la main. Les mains sont à leur taille naturelle, et le plan montre aussi la relation entre les deux personnes.
- Durée : 91,7 s (la nouvelle prononciation est plus courte).
- **Contrôles du rendu v2** :
  - `check` : 0 erreur, 0 avertissement ;
  - son mesuré, pas écouté : −15,3 LUFS, crête −1,0 dBFS ;
  - dans le mixage final, Gemini entend « knam-gé-esse » (3 syllabes) dans les deux phrases et ne relève aucun défaut ; intelligibilité 9/10, la musique ne couvre pas la voix ;
  - images des mains vérifiées dans le MP4 final.


## Choix de création

- **Storyline A, « Le dossier »**, choisie par la FEG : une dirigeante de PME suit tout le parcours. Les deux autres pistes, non construites, restent décrites dans `STORYLINES.md` : B « Le contrôle » (un parcours fléché, style signalétique) et C « Le fil » (un seul trait qui dessine tout).
- **Style 2D à plat** (demande : pas d'isométrique, des formes humaines, des partenariats). Les personnages sont articulés (`assets/people.js`) : tête, bras, avant-bras, yeux et bouche s'animent. Proportions réelles, peaux brunes, aucune caricature. Les partenariats sont montrés par une poignée de main en pied devant le logo, la table de la fédération qui accueille la dirigeante et, à la fin, sept membres main dans la main sous le logo, sur « Bâtir ensemble une économie forte ».
- **Entreprise formelle en tête du film** : « Condition impérative ». Le dossier est fermé par une sangle et un cadenas, qui ne s'ouvre qu'une fois les cinq pièces tamponnées « À JOUR » (RCCM, NIF, CNSS, CNAMGS, impôts), chacune au mot près dans la voix.
- **Les vraies pages du dossier 2026** (procédure, lettre de demande, fiche entreprise, choix de la fédération métier, déclaration d'engagement) apparaissent quand la voix les nomme. La fédération cochée, « Logistique et manutention », est un exemple.
- **Aucun montant de cotisation** (choix de la FEG) : un escalier de dix tranches sans chiffre, avec la marche de la dirigeante, puis un ticket « Droit d'accès · première adhésion ».
- **Six étapes numérotées comme dans le dossier** : remplir et signer, joindre les justificatifs, déposer, examen et validation, cotisation et droit d'accès, mise à jour annuelle avant le 31 mars.
- **Voix** : Gemini TTS « Despina », la voix du film de présentation, générée d'un seul tenant. **Musique** : SoundHill « Find Yourself », dont la section finale est calée sur l'arrivée du logo. **Bruitages** synthétisés (tampons, feuilles, stylo, cadenas, poignée de main) et discrets.

## Sources

- Dossier d'adhésion FEG 2026 : procédure (p. 2), lettre (p. 3), fiche entreprise (p. 4), fédérations (p. 6), conditions financières (p. 7), grille (p. 8, non montrée), déclaration d'engagement (p. 9).
- Critères d'adhésion de la page « Devenir membre » de lafeg.ga, dans le texte transmis par la FEG. Le site n'est pas joignable depuis l'environnement de production.

## Ce qui a été vérifié

- `npx hyperframes check` : 0 erreur, 0 avertissement. Contraste 26/26 en WCAG AA. Toutes les étiquettes font au moins 28 px.
- **Voix contrôlée par Gemini**, phrase par phrase : les 11 phrases sont transcrites sans écart, CNSS est dit lettre par lettre (et CNAMGS « knam-jé-èss » depuis la v2), le naturel est noté de 9 à 10 sur 10.
- Revue complète : images de début et de milieu de chaque plan, chaque raccord de −0,2 à +0,2 s, et le film à la largeur d'un téléphone. Corrections faites après la revue : une image blanche à un raccord, un point parasite, un plan vide pendant une demi-seconde, des mains qui semblaient pointer du doigt, des poignets invisibles sur fond blanc.
- Le son est **mesuré, pas écouté** : −15,3 LUFS intégrés, crête −1,1 dBFS, plage de loudness 3,0 LU.
- **Écoute automatique du mixage final par Gemini** (film entier) : texte conforme sans écart, intelligibilité 10/10, la musique ne couvre jamais la voix, aucun défaut relevé.
- Images extraites du MP4 final sur 18 instants clés : conformes aux images de contrôle.

## Avertissements conservés

- 9 informations `container_overflow` sur le décor de l'immeuble Odyssée (plan 5) : les ailettes dépassent volontairement du cadre.

## Plans les plus faibles, et pistes

- **Le dépôt** (plan 5) : les personnages y sont plus petits et la marche de profil reste simple.
- **La poignée de main** : un dessin à plat assez graphique.
- Avec plus de temps : une marche plus souple, plus d'expressions de visage, une version sans voix.

## Points à valider par la FEG

- La fédération donnée en exemple : Logistique et manutention.
- La mention « une seule case cochée » pour la fédération métier (texte du dossier : « une seule case »).
- Les coordonnées de la carte de fin : lafeg.ga, info@lafeg.ga, Immeuble Odyssée, BP 410, Libreville (pied de page du dossier).
- La pièce « Fiche circuit » n'est pas montrée.
- Le délai de **trois mois** pour compléter un dossier accepté sous réserve : la page 2 du dossier d'adhésion 2026 dit encore « six (6) mois ».
- Le raccord de la voix dans L06, après « Fédération » (voir v4).
