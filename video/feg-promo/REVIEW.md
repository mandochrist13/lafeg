# REVIEW — film FEG « De la voix à la réforme » (v6)

Deux fichiers, même image, 1920 × 1080, 30 i/s, 1 min 53 s (113,4 s) :

- `renders/FEG-presentation-voix-v6.mp4` : voix off féminine + musique.
- `renders/FEG-presentation-sans-voix-v6.mp4` : musique seule, les titres portent le récit.

Pour regénérer : `node tools/build.mjs` (voix) ou `node tools/build.mjs --sans-voix`, puis `npx hyperframes render`. Une seule racine, `index.html`, reçoit la variante choisie. Le dépôt garde la version voix par défaut.

## v6 : demandes de la FEG

- **Les 9 provinces sur la carte** (plan L03) : chaque socle prend la teinte de sa province. Cinq teintes claires, jamais la même pour deux provinces voisines. Les noms s'affichent un à un, avec « 9 provinces », pendant « Depuis 1959, la Fédération des Entreprises du Gabon ». Les entreprises se lèvent ensuite sur « rassemble ceux qui font l'économie du pays », dans toutes les provinces. La répartition des 71 socles vient de la carte administrative transmise par la FEG, ajustée sur la silhouette du logo (69 points sur 71 tombent dedans ; les deux autres vont à la province la plus proche).
- **Le dialogue ne passe pas que par le GEF** : nouvelle phrase L06b, avant le Gabon Economic Forum : « Il ne passe pas que par les grands forums : au sortir des travaux rapportés par les fédérations métiers, des réunions se tiennent avec le secteur public. » À l'écran, la caméra s'approche de la table du dialogue : les membres font face aux pouvoirs publics, trois dossiers verts des fédérations se posent, et l'étiquette « Réunions avec le secteur public · au sortir des travaux des fédérations métiers » s'affiche. La version sans voix ajoute le titre « Le dialogue public-privé · Pas seulement les grands forums ».
- **Voix de L06b** : même voix (Despina) et même modèle que le reste du film, une seule prise. Une transcription neutre, sans le texte attendu, la restitue mot pour mot, sans défaut relevé.
- Durée : 113,4 s (+ 9,6 s).
- **Contrôles des rendus v6** :
  - `check` : 0 erreur dans les deux versions ; restent 2 avertissements déjà présents en v5 (taille du fichier de la scène 3D, message de performance du pilote graphique) ;
  - son mesuré, pas écouté : version voix −15,7 LUFS, crête −2,3 dBFS ; version sans voix −14,2 LUFS, crête −2,1 dBFS ;
  - écoute automatique Gemini (modèle d'écoute léger) : le passage L06–L07 est transcrit sans écart, avec la même voix et sans rupture ; film entier : intelligibilité 10/10, aucun défaut ;
  - images extraites des deux MP4 : provinces teintées et nommées, levée des entreprises sur « rassemble », table du dialogue avec les dossiers et l'étiquette, titre « Pas seulement les grands forums » dans la version sans voix.

## Version intemporelle (v5, demandes de la FEG)

- **Semaine mondiale de l'entrepreneuriat retirée** : plus de surtitre d'ouverture, et L10 devient « Votre entreprise a sa place à nos côtés : rejoignez la Fédération des Entreprises du Gabon ».
- **Aucune date** : « plus de 1 100 entreprises » (au lieu de 1 118, chiffre daté) ; L07 dit « Lors de sa dernière édition, ses huit ateliers ont abouti à la Déclaration de Libreville » ; à l'écran, le GEF est présenté sans date (« Sous le Très Haut Patronage du Chef de l'État · Palais des Congrès, Libreville · 8 ateliers thématiques ») et le thème sans année.
- **Nouvelle introduction, plus générique** (choix A, « la voix ») : « Mais seule, une entreprise peine à se faire entendre, et pèse peu sur les décisions qui la concernent. » À l'image, une bulle de parole verte monte de l'atelier, puis se dissout en trois ondes qui ne rencontrent personne. La facture et la pile de formulaires ont disparu.
- **Un seul objet du début à la fin** : la bulle remplace la facture dans le circuit (fédération métier → Bureau exécutif → table du dialogue) et se pose sur l'atelier « Dette intérieure et fiscalité » du GEF. Le film raconte ainsi une voix d'abord perdue, puis portée jusqu'aux réformes.
- **Voix** : L02, L03, L07 et L10 régénérées seules (Despina), quatre prises chacune, chaque prise contrôlée par Gemini (texte exact, voix féminine) avant d'être gardée. Le texte de L03 écrit les nombres en toutes lettres : la première prise lisait « dix-neuf cent cinquante-neuf » pour 1959.
- **Version sans voix** : « Seule, une entreprise peine à se faire entendre. » ; la citation du Président ouvre le film sans surtitre ; thème du GEF sans année.
- **Retouches de mise en page** : « plus de » posé au-dessus du compteur (il passait sur deux lignes et « entreprises » touchait la carte) ; surtitre du GEF sur une ligne ; étiquette « Atelier 1 » déplacée au-dessus de la salle (elle croisait une table quand les ateliers se lèvent).

## Ce qui a changé de la v1 à la v2 (demandes de la FEG)

- **Voix plus naturelle** : audition de cinq voix Gemini, classées par une écoute automatique Gemini. Despina arrive en tête (naturel 9/10, engagement 8,5/10, chaleur 9/10, contre 6/10 pour Kore, jugée « robotique »). La narration complète est générée **d'un seul tenant**, ce qui donne une prosodie continue d'une phrase à l'autre, puis découpée aux pauses réelles (`tools/voice_onepass.mjs`).
- **Réforme formulée en creux** : « La dette intérieure, la fiscalité, la commande publique, le financement des PME : ensemble, les entreprises pèsent désormais sur les réformes du pays ». La phrase fait écho à « une entreprise pèse peu » (L02). Le titre à l'écran devient « La voix des entreprises au cœur des réformes ».
- **Source retirée** : la mention « Fichier unique des adhérents, au 31 octobre 2026 » n'apparaît plus.
- **Musique** : SoundHill, « Find Yourself », fournie par la FEG.
- **Version sans voix** : couche de titres `compositions/ov-titres.html`. Elle contient la citation du Président (« L'histoire économique d'un pays s'écrit sur le terrain… », Alain-Claude Kouakoua, site lafeg.ga), « Seule, une entreprise pèse peu », « 13 fédérations métiers », « Porter la voix des entreprises », « Votre préoccupation remonte jusqu'à l'État », « Des services au quotidien » et le thème du GEF (texte exact de la Déclaration).
- Cadrages ajustés pour laisser une zone libre à chaque titre : atelier en bas à droite à l'ouverture, en haut à gauche de la fin.

## Fond blanc (v4)

- La FEG trouvait la pierre froide #E8E9E4 trop terne. Le sol de la maquette et le fond de la page sont désormais en blanc pur (#FFFFFF). La lumière est inchangée : les ombres douces et les faces ombrées gardent le relief des bâtiments blancs, et les verts ressortent davantage.
- Voix (Despina), musique, textes et calage sont inchangés.

## Thème du GEF synchronisé (v3, version voix)

- Pendant la phrase finale, le thème officiel « Des entreprises fortes pour une croissance durable et une prospérité partagée » s'affiche en haut à gauche, sur trois lignes, sous le titre « Thème du Gabon Economic Forum » (année retirée en v5) (`compositions/ov-theme.html`).
- Le texte apparaît en gris clair, puis chaque mot s'encre au moment exact où la voix le prononce, d'après le calage mot à mot de L10 ; « pour » et « et », absents de la phrase dite, s'encrent avec le mot qui les suit. « fortes », « durable » et « partagée » passent en vert d'accent.
- Le thème reste à l'écran jusqu'à « rejoignez », puis s'efface pendant que l'atelier passe au vert. Le vol de caméra vers l'atelier part 0,45 s plus tôt, pour que l'image soit posée avant le premier mot.
- La version sans voix n'a pas changé : elle affichait déjà le thème, en titre fixe.

## Voix (version voix)

- Google Gemini TTS `gemini-3.8-flash-tts`, voix « Despina ».
- **Contrôle Gemini** : dix phrases transcrites sans coupure ni mot manquant, voix féminine, naturel 8/10.
- **Erreur corrigée** : la première prise disait « dette **antérieure** », confirmé par trois modèles. La phrase L08 a été régénérée seule, avec articles, puis vérifiée (« intérieure », voyelle [ɛ̃]) avant d'être gardée (`tools/voice_retake.mjs`).
- Chaque phrase est normalisée à −16 LUFS, crête −1,5 dBTP, avec un gain de 0,79 dans le mixage.

## Musique

- Le morceau dure 138 s à 120 BPM. Sa section finale (accord final à 129,9 s) est calée sur l'arrivée du logo : le film commence au cœur du morceau et se termine sur sa fin naturelle.
- Correspondances : la partie calme (50–59 s du morceau) tombe sous la carte et les fédérations, la remontée sous la naissance de la tour, le sommet d'énergie (93,7 s) sous le Gabon Economic Forum, la descente (115–130 s) sous le message final.
- **Version voix** : enveloppe de volume. Musique présente avant la voix (0,5), en retrait sous la parole (0,19, soit environ 14 dB sous la voix), relevée entre les phrases (0,36) et pleine sur le logo (0,85).
- **Version sans voix** : musique à 0,85 du début à la fin.
- Le crescendo et l'impact de fin ont été retirés : l'accord final du morceau porte l'arrivée du logo. Il reste trois souffles discrets sur les grands mouvements de caméra.
- Licence : morceau présenté comme libre de droits (SoundHill). **Vérifier les conditions de SoundHill**, qui demande souvent une mention de l'artiste dans la description de la vidéo publiée.

## Ce qui a été vérifié (v5)

- `npx hyperframes check` sur les deux versions : 0 erreur ; contraste 64/64 en WCAG AA ; audio sans avertissement. Les avertissements GSAP « cible introuvable » de la couche de titres ont été supprimés.
- Images de contrôle sur chaque mot-repère et sur chaque titre de la version sans voix, puis images extraites des deux MP4 finaux : la bulle se lit puis se dissout, le compteur tient sur une ligne, aucune date ni « Semaine » à l'écran, carte de fin sans mention d'événement.
- Le son a été **mesuré, pas écouté**. Version voix : −15,7 LUFS intégrés, crête −2,3 dBFS. Version sans voix : −14,2 LUFS, crête −2,0 dBFS.
- **Écoute automatique du mixage par Gemini** (version voix, en deux moitiés) : intelligibilité 10/10 et 9/10, la musique ne couvre jamais la voix, aucun défaut audible. Les seuls écarts relevés sont des homophones de transcription (« ses / c'est », « formation / formations »).

## Avertissements conservés

- `composition_file_too_large` (world.html) : la maquette est une seule scène WebGL continue.
- `canvas_content_at_edge` vers 50 s : la tour est volontairement coupée par le bord du cadre pendant le plan de la table du dialogue.
- Messages WebGL « GPU stall due to ReadPixels » : propres au rendu logiciel, sans effet sur l'image.

## Plans les plus faibles, et pistes

- Les missions (tour fixe pendant ~8 s) et le plan large des réformes (liaisons fines à l'échelle de la carte).
- Avec plus de temps : flou de mouvement sur les vols de caméra, fenêtres sur les bâtiments en gros plan, version 9:16 pour les réseaux sociaux.

## Points à valider par la FEG

- « 24 recommandations » : décompte de la Déclaration (8 axes × 3 points).
- Téléphone affiché : +241 11 77 55 95 (pied de page de la Déclaration ; le site mentionne aussi +241 011 77 55 57).
- Mention de l'artiste de la musique selon la licence SoundHill.
