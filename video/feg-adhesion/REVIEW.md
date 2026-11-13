# REVIEW — « Comment adhérer à la FEG » (v2)

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


Un fichier : `renders/FEG-comment-adherer-v2.mp4`, 1920 × 1080, 30 i/s, 1 min 32 s (91,7 s), voix off et musique.

Pour regénérer : `node tools/build.mjs`, puis `npx hyperframes render --quality delivery -o renders/FEG-comment-adherer-v2.mp4`.

## Choix de création

- **Storyline A, « Le dossier »**, choisie par la FEG : une dirigeante de PME suit tout le parcours. Les deux autres pistes, non construites, restent décrites dans `STORYLINES.md` : B « Le contrôle » (un parcours fléché, style signalétique) et C « Le fil » (un seul trait qui dessine tout).
- **Style 2D à plat** (demande : pas d'isométrique, des formes humaines, des partenariats). Les personnages sont articulés (`assets/people.js`) : tête, bras, avant-bras, yeux et bouche s'animent. Proportions réelles, peaux brunes, aucune caricature. Les partenariats sont montrés par une poignée de main en pied devant le logo, la table de la fédération qui accueille la dirigeante et, à la fin, sept membres main dans la main sous le logo.
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
- **Voix contrôlée par Gemini**, phrase par phrase : les 11 phrases sont transcrites sans écart, les sigles CNSS et CNAMGS sont dits lettre par lettre, le naturel est noté de 9 à 10 sur 10.
- Revue complète : images de début et de milieu de chaque plan, chaque raccord de −0,2 à +0,2 s, et le film à la largeur d'un téléphone. Corrections faites après la revue : une image blanche à un raccord, un point parasite, un plan vide pendant une demi-seconde, des mains qui semblaient pointer du doigt, des poignets invisibles sur fond blanc.
- Le son est **mesuré, pas écouté** : −15,3 LUFS intégrés, crête −1,1 dBFS, plage de loudness 3,0 LU.
- **Écoute automatique du mixage final par Gemini** (film entier) : texte conforme sans écart, intelligibilité 10/10, la musique ne couvre jamais la voix, aucun défaut relevé.
- Images extraites du MP4 final sur 18 instants clés : conformes aux images de contrôle.

## Avertissements conservés

- 9 informations `container_overflow` sur le décor de l'immeuble Odyssée (plan 5) : les ailettes dépassent volontairement du cadre.

## Plans les plus faibles, et pistes

- **Le dépôt** (plan 5) : les personnages y sont plus petits et la marche de profil reste simple.
- **La poignée de main** : un dessin à plat assez graphique.
- Avec plus de temps : une marche plus souple, plus d'expressions de visage, une version 9:16 pour les réseaux sociaux, une version sans voix.

## Points à valider par la FEG

- La fédération donnée en exemple : Logistique et manutention.
- La mention « une seule case cochée » pour la fédération métier (texte du dossier : « une seule case »).
- Les coordonnées de la carte de fin : lafeg.ga, info@lafeg.ga, Immeuble Odyssée, BP 410, Libreville (pied de page du dossier).
- La pièce « Fiche circuit » n'est pas montrée.
