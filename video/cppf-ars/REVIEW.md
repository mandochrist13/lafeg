# REVIEW — CPPF · « Allocation de Rentrée Scolaire 2026-2027 », présentée par une abeille (v2, abeille adulte)

## Livrables

- `renders/CPPF-ARS-2026-2027-abeille-v2.mp4` : 1920 × 1080, 30 i/s, 1 min 44 s (104,1 s), voix off et musique, avec l'abeille adulte.
- `renders/CPPF-ARS-2026-2027-abeille.mp4` : la v1, avec l'abeille mascotte.

Pour regénérer : `node tools/build.mjs`, puis `npx hyperframes render --quality delivery -o renders/CPPF-ARS-2026-2027-abeille-v2.mp4`. Le dépôt contient la v2 ; la v1 est dans l'historique git.

## v2 : une abeille adulte (demande de la FEG)

« Je trouve l'abeille trop enfantine. Essaie de la rendre plus adulte ou plus mature. Elle ne doit pas trop ressembler à un programme scolaire pour enfants. »

- **Nouveau personnage**, voir SPEC :
  - une présentatrice en buste, coupée par le bas de l'image comme l'avatar de la vidéo e.cnss ;
  - tailleur bleu CPPF cintré, ouvert sur les rayures de l'abeille ;
  - tête de fourrure miel avec une marque sombre en pointe sur le front, collerette de duvet ;
  - yeux en amande, antennes coudées, mains fines et sombres.
  Elle n'a plus de grosse tête ronde, de joues roses ni de grands yeux ronds.
- **Gestes posés** : mains jointes au repos ; elle présente l'écran coude plié, paume ouverte ; elle salue la main levée ; elle ouvre les bras paumes vers le haut. Elle entre en montant dans le cadre au lieu de traverser l'écran en volant.
- **Comment le dessin a été jugé** : trois versions successives, chacune soumise à une critique d'image automatique, sans complaisance.
  - Première version : pas enfantine (7/10), mais « une femme au teint jaune déguisée en abeille ».
  - Deuxième version : visage « style emoji », collerette « pop-corn ».
  - Version retenue : au classement, première devant les deux autres. Maturité 8/10, élégance 9, beauté 8, identité « abeille » 8 ; l'abeille de la v1 avait 2 en maturité.
  - Remarques restantes du critique : le visage rappelle encore un peu les emoji, et les mains sont un peu massives.
  - Variante écartée : des yeux entièrement sombres, façon abeille, qui donnaient un effet de lunettes noires.
- **Voix gardée** : une écoute automatique de la voix seule la situe vers 20-25 ans : « dynamique, clair, professionnel et accueillant », ni enfantine ni « dessin animé », maturité 8/10.
- **Inchangés** : texte, voix, musique, écrans du site, minutage, carte de fin.
- **Contrôles du rendu v2** :
  - `check` : 0 erreur, 0 avertissement ; contraste : 26 textes sur 26 conformes WCAG AA ;
  - fichier : 1920 × 1080, 30 i/s, 104,1 s, H.264 + AAC, 37,8 Mo. Le duvet en relief alourdit un peu le fichier ;
  - son mesuré, pas écouté : −14,9 LUFS, crête −2,0 dBFS, plage de loudness 3,6 LU. La bande-son est identique, échantillon par échantillon, à celle de la v1 ;
  - 20 images extraites du MP4 : l'entrée, le salut, chaque présentation de l'écran, les cinq étapes et la carte de fin. L'abeille ne recouvre ni texte ni écran du site, à part sa main au bord du navigateur quand elle le montre ;
  - images prises au milieu des gestes : la main reste dans le cadre grâce au raccourci de l'avant-bras. Au tout début d'un geste, en position d'étape, elle frôle le bas de l'image pendant une ou deux images.

## v1 : la demande

« Conformément à la vidéo de la CNSS, la vidéo de la CPPF pareil, mais avec comme avatar une très jolie abeille. »

- **Le fond** vient de la vidéo de la CPPF : toutes ses étapes, dans le même ordre et avec les mêmes boutons :
  - se connecter sur ars.cppf.ga avec le matricule solde et la date de naissance, en cochant les conditions générales ;
  - dans la liste des enfants éligibles, cliquer sur le bouton vert « Traiter » ;
  - remplir le formulaire : matricule du second parent, sexe, établissement, classe. Les champs sur fond jaune sont obligatoires ;
  - « Exporter en PDF », imprimer, faire signer et cacheter par l'école, scanner ;
  - se reconnecter, cliquer sur « Choisir » sur la ligne de l'enfant, valider le téléversement ;
  - recommencer pour chaque enfant, avec un scan lisible.
  - La devise de fin est celle de la CPPF, écrite comme sur sa carte de fin : « Solidaires aujourd'hui, pour un Avenir Prospère ».
- **La forme** vient de la vidéo e.cnss de la CNSS : un avatar qui présente et s'adresse au spectateur, des étapes numérotées avec leurs puces, les écrans du site à côté, une fin sur le logo, l'adresse du site et la devise.
- **L'abeille de la v1** (remplacée en v2) : une mascotte vectorielle dessinée pour ce film. Grosse tête ronde, grands yeux brillants à cils, joues roses, ailes translucides, nœud papillon aux couleurs de la CPPF. Elle vole sur place, cligne des yeux et parle : sa bouche suit la voix. Elle salue, ouvre les bras, montre l'écran sur les mots de la voix, et suit l'action du regard.

## Fabrication

- **Voix** : voix féminine Leda de Gemini TTS, jouée comme une mascotte jeune et souriante. Tout le texte a été enregistré en une seule prise, pour un ton égal du début à la fin, puis découpé en 13 phrases. La découpe automatique tombait parfois dans la mauvaise pause. Chaque phrase a donc été transcrite seule pour vérification, et 12 coupes ont été placées à la main (`CUTS` dans `tools/voice_onepass.mjs`). Pour la synthèse, les sigles sont écrits lettre à lettre (« A-R-S point C-P-P-F point G-A ») et l'année en toutes lettres.
- **Musique** : synthétisée par `tools/music_synth.py` (ukulélé, marimba, basse, percussions légères, nappe ; 118 BPM ; ton joyeux). Le générateur de musique Lyria n'était pas disponible : quota nul, service temps réel introuvable. Écoute automatique de la piste seule : 8/10, « joyeuse, ludique, enfantine, fraîche et dynamique ». Elle relève deux réserves : un timbre un peu synthétique et un motif qui se répète. Sous la voix, la piste est à bas niveau, ce qui atténue les deux. On peut la remplacer par une piste choisie par la FEG : déposer `assets/bgm/musique.mp3`, puis relancer `node tools/build.mjs` et le rendu.
- **Écrans du site** : maquettes HTML reconstruites d'après la vidéo de la CPPF. Ce ne sont pas des captures. Toutes les données sont fictives : matricule 123456, N° CPPF 0012345, « École Les Abeilles », CM2… Les noms des enfants restent des barres grises.

## Écarts assumés avec la vidéo de la CPPF

- Le tableau des enfants est simplifié : la colonne « Nom parent » est retirée, il reste Nom, Prénom, Sexe, Âge, Document et le bouton « Traiter ».
- Les écrans sont dans une fenêtre de navigateur sur fond blanc à nid d'abeilles, au lieu de la tablette sur fond bleu. L'abeille garde ainsi un fond clair et le film reste lisible.
- Au moment du téléchargement, la notification « certificat-scolarite.pdf ✓ Téléchargé » couvre pendant 3 s la fin du titre « CERTIFICAT DE SCOLARITÉ », comme la bulle de téléchargement d'un navigateur.

## v1 : corrections avant livraison

- **Fin de la musique** : quand la musique remontait après la dernière phrase, deux consignes de volume se suivaient à 10 ms d'écart, ce qui creusait le son d'environ 6 dB pendant 30 ms. La remontée est maintenant continue, de 0,17 à 0,7 en 0,55 s.
- **Devise** : « Avenir Prospère » prend ses majuscules, comme sur la carte de fin de la CPPF.
- **Dépôt** : la musique est versionnée en MP3 à 320 kbit/s (4,2 Mo) au lieu du WAV (20 Mo), qui reste reproductible avec `tools/music_synth.py`.

## v1 : contrôles

- `check` : 0 erreur, 0 avertissement ; contraste : 26 textes sur 26 conformes WCAG AA.
  Les maquettes d'écran (`.br`) et les illustrations de l'étape 4 sont marquées comme décor : leur petit texte imite le site et ne porte pas le message, que portent la voix et les puces.
- Son mesuré, pas écouté : −14,9 LUFS, crête −2,0 dBFS, plage de loudness 3,6 LU.
- Images extraites du MP4 (logo, accueil, chacune des cinq étapes, carte de fin) : chaque saisie, chaque clic et chaque puce arrive sur le mot de la voix ; rien ne déborde ; l'abeille ne couvre jamais l'écran du site.
- Écoute automatique Gemini du mixage complet, sans lui donner le texte attendu :
  - transcription identique au script ;
  - intelligibilité 10/10 ;
  - la musique « reste discrète en arrière-plan et ne couvre pas la voix » ;
  - équilibre voix/musique « très agréable », jugé « optimal » ;
  - aucun défaut.
  Cette écoute a porté sur le premier rendu, dont la bande-son est la même que celle du livrable, à la remontée finale près.
- Livrable comparé au premier rendu :
  - les 12 images de contrôle sont identiques, sauf la carte de fin (la devise) ;
  - bande-son identique à 31 dB près (réencodage de la musique en MP3), sauf la remontée finale, qui n'a plus de creux (niveau mesuré par tranches de 5 ms).

## À valider par la FEG ou la CPPF

- **Écrans** : ils reconstituent le site ars.cppf.ga. Avant une diffusion officielle, la CPPF peut vouloir vérifier qu'ils correspondent à son portail actuel.
- **Marque** : le logo et la devise de la CPPF sont utilisés tels que transmis.
- **Version 9:16** pour les réseaux sociaux, à faire sur demande, comme pour la vidéo d'adhésion.
