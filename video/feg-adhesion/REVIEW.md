# REVIEW — « Comment adhérer à la FEG » (v7, 16:9 et 9:16)

## Livrables

- `renders/FEG-comment-adherer-v7.mp4` : 1920 × 1080, 30 i/s, 2 min 10 s (129,6 s), voix off et musique, avec le plan « Hors du Gabon » (la diaspora).
- `renders/FEG-comment-adherer-v7-whatsapp.mp4` : la même, réencodée sous 16 Mo pour WhatsApp.
- `renders/FEG-comment-adherer-9x16-v4.mp4` : 1080 × 1920, 30 i/s, même durée, même bande-son, sous-titres incrustés, pour les réseaux sociaux.
- `livret/FEG-comment-adherer-9x16-v4-texte.docx` : le texte de la vidéo, mis en page pour le livret.

Pour regénérer : `node tools/build.mjs` (16:9) ou `node tools/build.mjs --vertical` (9:16), puis `npx hyperframes render --quality delivery -o renders/<nom>.mp4`. Le dépôt garde la racine 16:9 ; la version 9:16 se reconstruit à la demande.

## v5 : demandes de la FEG

- **Fiche circuit** jointe au dossier comme pièce justificative, avec les justificatifs CNSS et CNAMGS :
  - voix : « Joignez vos justificatifs CNSS et CNAMGS, ainsi que la fiche circuit, puis déposez le dossier complet… » ;
  - écran : une troisième feuille « Pièce justificative · Fiche circuit » se pose sur les deux autres ; le sous-titre de l'étape 2 devient « CNSS · CNAMGS · Fiche circuit ». Le dossier 2026 ne contient pas de modèle de fiche circuit : la feuille est un formulaire neutre (cases et lignes).
- **8ème et 9ème étages** : « aux huitième et neuvième étages de l'immeuble Odyssée » dans la voix, « Immeuble Odyssée, 8ème et 9ème étages » sous le titre du dépôt et sur la carte de fin.
- **Téléphone** sur la carte de fin : « info@lafeg.ga · +241 77 55 95/97 », écrit tel que transmis.
- **Conditions** : RCCM et NIF portent un tampon « ✓ VALIDÉ » avec une icône de validation ; CNSS, CNAMGS et impôts gardent « À JOUR ».
- **Voix de L06**, toujours Despina. Le quota du jour du modèle de voix principal était épuisé. La phrase garde donc le début de la prise précédente, « Joignez vos justificatifs CNSS et CNAMGS, », dont le « knam » est vérifié. La suite vient d'une prise du second modèle, même voix, accélérée de 10 % : « ainsi que la fiche circuit, puis déposez le dossier complet à la Fédération, aux huitième et neuvième étages de l'immeuble Odyssée, à Libreville ». La coupe tombe dans la respiration après « CNAMGS, ». Les prises de la phrase entière par le second modèle ont été écartées : leur CNAMGS n'était pas un « knam » net. **À confirmer à l'oreille.**
- **Calage des mots de L06 refait à la main** (`tools/align/L06.json`, `tools/align_segments.mjs`), mesuré sur le signal. Le calage automatique confondait la pause après « CNAMGS, » avec une virgule plus loin. Cela corrige aussi un décalage d'environ une seconde de la v4 : les pages CNSS et CNAMGS, et le passage vers la rue, arrivaient un peu tôt.
- **Enchaînement** : le dossier se soulève et la caméra passe dans la rue sur « le dossier complet » ; la marche jusqu'à l'accueil est plus courte. Les feuilles qui se posent sont maintenant opaques dès leur entrée.
- Durée : 98,5 s.
- **Contrôles des rendus v5 (16:9 et 9:16)** :
  - `check` : 0 erreur, 0 avertissement dans les deux formats. La petite mention « Pièce justificative » de la fiche circuit est marquée comme décor : le contrôle la croyait masquée quand la feuille glisse sur la page CNAMGS, alors qu'elle est au-dessus et reste lisible plus d'une seconde ;
  - son mesuré, pas écouté : −15,4 LUFS, crête −1,2 dBFS, plage de loudness 3,0 LU ; la bande-son est identique dans les deux formats ;
  - écoute automatique Gemini du mixage final (modèle d'écoute léger, les modèles principaux ayant atteint leur quota du jour) : film entier transcrit sans écart ; « ainsi que la fiche circuit » et « aux 8e et 9e étages de l'immeuble Odyssée » entendus ; même voix sans rupture dans L06 ; intelligibilité 10/10 ; aucun défaut ;
  - images extraites des deux MP4 : tampons « ✓ VALIDÉ » et « À JOUR », fiche circuit, adresse, carte de fin. Les pages et les sous-titres arrivent avec les mots de la voix.

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
- L'aspect de la fiche circuit (formulaire neutre, faute de modèle dans le dossier).
- Le numéro de téléphone « +241 77 55 95/97 » : un seul numéro ou deux numéros (…95 et …97) ? Il est écrit tel que transmis.
- Le délai de **trois mois** pour compléter un dossier accepté sous réserve : la page 2 du dossier d'adhésion 2026 dit encore « six (6) mois ».
- Le raccord de la voix dans L06, après « Fédération » (voir v4).

## v6 : la diaspora (16:9 v6, 9:16 v3)

Ajout demandé par la FEG avant sa rencontre avec les entreprises de la diaspora gabonaise en France : un plan « Hors du Gabon » entre l'étape 6 et la conclusion.

- **Voix.** Trois phrases Despina (LD1–LD3), lues à la suite de L10 dans une seule requête pour garder le ton.
  - Contrôle Gemini : les mots clés sont bien articulés (« droit étranger », « capitaux gabonais », « Rayonnement à l'international »).
  - De L10 à L11, l'enchaînement avec la prise d'origine est jugé « parfaitement homogène » : même voix, même acoustique, même rythme.
  - Whisper entendait « Capito Gabonet » et « Réunionnement » : ce sont ses erreurs, la diction est nette.
- **Images.** Vues en images fixes à chaque temps fort, en 16:9 et en 9:16.

| Moment | Problème | Correction |
| --- | --- | --- |
| Carte de la diaspora | Elle s'ouvrait en grand cadre presque vide, avec une seule ligne. | Elle grandit ligne par ligne, sur la voix. |
| Libreville | Le trajet Paris → Libreville frôlait l'étiquette. | Étiquette passée sous la ville. |
| Comité (9:16) | Bande blanche sous la table après le recul ; tableau coupé au bord. | Mur et devant de table prolongés, comme au plan 8 ; tableau rentré dans le cadre. |
| Carte de la diaspora (9:16) | Agrandie pour rester lisible, elle couvrait Paris. | En vertical, elle passe sous le titre, hors du globe ; les modalités prennent ensuite sa place. |
| Noms de villes (9:16) | « Libreville » tombait à 27 px une fois réduit par la caméra. | 46 px avant réduction, soit 29 px à l'écran. |
| Contrôle | Le globe était chargé deux fois (doublon de média). | Le tableau du comité l'affiche en image de fond. |

- **Contrôle.**
  - 16:9 : `npx hyperframes check` passé, 0 erreur, 16 textes sur 16 conformes en contraste.
  - 9:16 : passé, 0 erreur, 18 textes sur 18 conformes.
  - Les avertissements de zone sûre du 9:16 concernent des plans existants, conçus pour la bande utile 168–1330 px de la SPEC.

### À valider (v6)

- Le nom exact du comité : « comité Rayonnement à l'international ».
- La formule « selon des modalités adaptées », et le renvoi à info@lafeg.ga pour les détails.
- La place des entreprises de droit étranger à capitaux gabonais : membres à part entière, ou rattachées au comité ?

### Rendus v6

| Fichier | Image | Durée | Poids | Son |
| --- | --- | --- | --- | --- |
| `renders/FEG-comment-adherer-v6.mp4` | 1920 × 1080, 30 im/s | 120,3 s | 14,7 Mo | −15,3 LUFS, crête −1,1 dBFS |
| `renders/FEG-comment-adherer-9x16-v3.mp4` | 1080 × 1920, 30 im/s | 120,3 s | 15,4 Mo | −15,3 LUFS, crête −1,1 dBFS |

- Les deux fichiers restent sous les 16 Mo de WhatsApp.
- Aucune image noire. Les plans calmes (le globe pendant que le trajet se trace, la carte complète) ne sont pas figés : seul un petit élément y bouge.
- Planches des fichiers rendus sur le plan « Hors du Gabon » : conformes aux images de contrôle.
- Livret : `livret/FEG-comment-adherer-9x16-v3-texte.docx`, 3 pages, avec la section « Hors du Gabon ».

## v7 : la diaspora dans plusieurs pays (16:9 v7, 9:16 v4)

Demandes de la FEG sur la v6 : la diaspora n'est pas qu'à Paris ; le comité s'appelle « Rayonnement international » ; dire explicitement qu'on écrit à info@lafeg.ga pour les conditions d'adhésion de la diaspora et pour toute information.

| Demande | Ce qui a été fait |
| --- | --- |
| Plusieurs pays | Le globe Europe-Afrique devient une carte du monde. Sur « Où que vous soyez dans le monde », la caméra recule depuis le Gabon. Dix pays s'allument, sur quatre continents, avec un trajet vers Libreville. |
| « Rayonnement international » | Nouveau nom à la voix, au titre du plan du comité, dans les sous-titres et dans le livret. |
| Contact explicite | Nouvelle phrase LD3 et nouveau plan : « Conditions d'adhésion de la diaspora », « Pour toute information, contactez-nous : ». L'adresse info@lafeg.ga s'écrit en grand, lettre à lettre au rythme de la voix. |

- **Voix.** Trois phrases Despina relues à la suite de L10, dans une seule requête.
  - Gemini entend le texte exact, sur un ton naturel, posé, non publicitaire.
  - « comité Rayonnement international » est entendu clairement.
  - L'adresse est entendue « info arobase lafeg point g a ». « lafeg » est dit comme un mot ; l'écran l'écrit en toutes lettres pendant qu'elle le dit.
- **Corrigé pendant la relecture.**

| Moment | Problème | Correction |
| --- | --- | --- |
| Découpage de la prise | La pause après « Gabon ? » était prise pour une fin de phrase : LD1 tombait à 2 s. | Le découpage choisit les pauses qui donnent à chaque phrase un débit régulier. |
| Calage de LD1 | « Gabon » était calé après la pause, et le pays s'allumait une seconde trop tard. | Calage refait sans les micro-silences de consonne ; « Gabon » tombe à 87,8 s. |
| Carte du monde | Les Émirats touchaient le bord droit. | Carte recadrée, avec une marge de chaque côté. |
| Ordinateur portable | Les mains dépassaient sous l'ordinateur. | L'ordinateur est descendu : il les cache, comme sur un clavier. |
| Enveloppe | Elle naissait devant le visage. | Elle sort à droite de l'écran, puis s'envole. |
| Bureau (9:16) | La bande des sous-titres cachait l'ordinateur. | Plan réduit à 0,85 : les sous-titres tombent sur la façade du bureau. |
| Carte de la diaspora (9:16) | Sous le titre, elle aurait couvert le Canada et l'Europe. | En vertical, elle prend la place du titre. |

- **Contrôle.**
  - 16:9 : `npx hyperframes check` passé, 0 erreur.
  - 9:16 : passé, 0 erreur, 21 textes sur 21 conformes en contraste.
  - Les avertissements de zone sûre du 9:16 suivent la bande utile 168–1330 px de la SPEC, comme aux versions précédentes. Ils concernent aussi les noms de pays au bord de la carte.

### À valider (v7)

- Les dix pays de la carte, choisis comme exemples : Canada, États-Unis, Royaume-Uni, Belgique, France, Maroc, Sénégal, Côte d'Ivoire, Afrique du Sud, Émirats arabes unis.
- La place des entreprises de droit étranger à capitaux gabonais : membres à part entière, ou rattachées au comité ?

### Rendus v7

| Fichier | Image | Durée | Poids | Son |
| --- | --- | --- | --- | --- |
| `renders/FEG-comment-adherer-v7.mp4` | 1920 × 1080, 30 im/s | 129,6 s | 20,2 Mo | −15,3 LUFS, crête −1,0 dBFS |
| `renders/FEG-comment-adherer-v7-whatsapp.mp4` | 1920 × 1080, 30 im/s | 129,6 s | 15,4 Mo | AAC 128 kbit/s |
| `renders/FEG-comment-adherer-9x16-v4.mp4` | 1080 × 1920, 30 im/s | 129,6 s | 17,1 Mo | −15,3 LUFS, crête −1,0 dBFS |
| `renders/FEG-comment-adherer-9x16-v4-whatsapp.mp4` | 1080 × 1920, 30 im/s | 129,6 s | 15,9 Mo | AAC 128 kbit/s |

- Les deux rendus dépassent les 16 Mo de WhatsApp : les copies « whatsapp » sont réencodées en deux passes (800 et 820 kbit/s). Elles restent quasi identiques aux rendus (SSIM 0,9996 et 0,9998) ; les noms de pays et l'adresse restent nets.
- Le globe de la v6 (`tools/globe.mjs`, `assets/globe.js`, `assets/img/globe-base.svg`) est retiré : la carte du monde le remplace.
- Aucune image noire. La planche du fichier rendu sur le plan « Hors du Gabon » est conforme aux images de contrôle.
- Livret : `livret/FEG-comment-adherer-9x16-v4-texte.docx`, 3 pages.
