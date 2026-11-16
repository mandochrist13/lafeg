# SPEC — CPPF · « Allocation de Rentrée Scolaire 2026-2027 » (tutoriel ars.cppf.ga, présenté par une abeille)

GOAL: un agent de l'État gabonais sait imprimer le certificat de scolarité de chacun de ses enfants sur ars.cppf.ga, le faire signer et cacheter par l'école, puis le téléverser pour l'Allocation de Rentrée Scolaire 2026-2027.

OUTPUT: HyperFrames, 1920 × 1080, 30 i/s, MP4 H.264 + AAC, voix off Leda + musique.

TIME: 104,1 s (fixé par la voix off : 3,6 s d'entrée, 13 phrases, 6,5 s de queue) ≈ 3124 images.

## Sources

- **Contenu** : la vidéo tutorielle de la CPPF sur ars.cppf.ga, transmise par la FEG. Les étapes, les libellés des boutons (« Se connecter », « Traiter », « Exporter en PDF », « Choisir ») et la mise en page des écrans viennent de cette vidéo. Le texte de la voix est réécrit pour l'abeille, à la première personne, sans rien ajouter à la procédure.
- **Forme** : la vidéo e.cnss de la CNSS, transmise en même temps. On reprend sa construction : un avatar présentateur en buste et en costume aux couleurs de l'institution, des bandeaux de titre, des puces qui s'écrivent avec la voix, les écrans du site, une fin sur le logo et la devise.
- **Marque** : le logo de la CPPF transmis par la FEG (`assets/img/cppf-logo.png`, fond rendu transparent). La devise de fin, « Solidaires aujourd'hui, pour un Avenir Prospère », est écrite comme sur la carte de fin de la vidéo de la CPPF, majuscules comprises.

## LOOK

- **Fond** : blanc, avec un nid d'abeilles d'hexagones au trait bleu très pâle, plus dense dans les coins, et quelques alvéoles pleines jaune pâle (`KIT.honey()`).
- **Palette CPPF** (reprise du logo) : bleu #3A75BC, vert #1FA05A, jaune #F6CF2A ; encre #1C2B4A. Les trois couleurs, qui sont aussi celles du drapeau du Gabon, forment le filet tricolore sous les bandeaux et sur la carte de fin.
- **Typo** : Montserrat (OFL, `assets/fonts/`), titres d'étape 800 à 46 px en bleu, puces 500 (mots clés 700) à 30 px, aucune lettre sous 28 px hors maquettes d'écran.
- **Étapes** : hexagone jaune numéroté + titre bleu, en haut à gauche ; puces à triangle jaune dessous ; le navigateur à droite (600, 104, 1240 × 872), barre d'adresse avec cadenas.
- **Écrans du site** : maquettes HTML reconstruites d'après la vidéo de la CPPF : page de connexion (fond bleu nuit #1A1D4E, carte blanche, bouton violet), liste des enfants (bandeau « ALLOCATION DE RENTRÉE SCOLAIRE 2026-2027 », carte de l'agent, tableau, boutons « CHOISIR » et « TRAITER » vert), formulaire « CERTIFICAT DE SCOLARITÉ » (barre verte, champs obligatoires sur fond jaune, bandeau rouge, bouton « EXPORTER EN PDF »), fenêtre « Téléverser le certificat ».
- **Données fictives** : matricule 123456, né le 15/03/1985, N° CPPF 0012345, trois enfants (F 11 ans, M 8 ans, F 15 ans), matricule du second parent 654321, « École Les Abeilles », CM2, née le 02/02/2015. Les noms et prénoms restent des barres grises : aucune personne réelle à l'écran.

## L'ABEILLE (`assets/bee.js`, `compositions/bee.html`)

Une présentatrice adulte, pas une mascotte d'enfant (demande de la FEG, v2). Elle est cadrée en buste et coupée par le bas de l'image, comme l'avatar en costume vert de la vidéo e.cnss.

- **Tête** : fourrure dorée couleur miel (#F7C766 → #ECAD48 → #DE9A3C), bords duveteux (filtre `feTurbulence` + `feDisplacementMap`, graine fixe). Sur le dessus, une marque sombre (#2E1D12) qui descend en pointe au milieu du front, à la place de cheveux. Museau un peu plus clair. Ombre franche sur la joue droite, lumière à gauche : un modelé d'illustration, pas une boule en dégradé.
- **Visage** : yeux en amande à iris brun-ambre, trait de paupière fin et trois cils au coin externe, pli de paupière, sourcils en fines marques ambrées. Pas de nez. Lèvres baie (#A5424E, #BF5D69), sourire discret. Ni joues roses ni grands yeux ronds.
- **Antennes** : coudées comme celles d'une vraie abeille, fines, terminées par une petite massue.
- **Collerette** : col rond de duvet doré sous le menton, le thorax de l'abeille ; il cache le cou.
- **Tailleur** : veste bleu CPPF (#4A84C8 → #3368AC → #244F88) cintrée à la taille, revers à cran avec surpiqûre, coutures princesse, un bouton, poche poitrine. L'encolure profonde montre les rayures de l'abeille (miel et brun #2A1A10). Sur le revers, une épingle hexagonale aux trois couleurs de la CPPF.
- **Mains** : fines et sombres, comme des gants (#6A4A30 → #25160C), poignets de chemise blancs. Au repos, mains jointes à la taille.
- **Ailes** : deux paires translucides aux nervures fines, avec un léger reflet irisé, derrière les épaules.
- **Bras articulés** : épaule, coude, poignet, en groupes imbriqués. Une main au repos et une main ouverte, échangées au milieu de chaque geste. L'avant-bras se raccourcit à mi-geste, comme s'il pointait vers la caméra, pour que la main ne décrive pas un arc sous le coude.
- **Mouvement permanent** : respiration (±3 px, 3,4 s), léger balancement de la tête (±1,2°), frémissement des ailes, antennes qui bougent à peine, clignement toutes les 3,1 à 3,7 s.
- **Parole** : la bouche s'ouvre selon l'énergie de la voix, 15 fois par seconde (`assets/talk.js`, calculé par `tools/build.mjs` à partir de chaque WAV).
- **Gestes posés, sans rebond** :
  - salut de la main levée sur « Bonjour » et « Solidaires » ;
  - bras ouverts, paumes vers le haut, sur « Aujourd'hui », « Imprimez », « Répétez » et « Avec » ;
  - présentation de l'écran, coude plié et paume ouverte, sur « certificat », « Rendez-vous », « Saisissez », « cocher », « liste », « Traiter », « Remplissez », « établissement », « jaune », « Exporter », « signer », « scannez » et « Choisir » ;
  - hochements et légères inclinaisons de tête ; sourcils levés sur « Bienvenue » ; regard vers l'écran pendant les étapes.
- **Places** (boîte 640 × 800) :
  - grande, à gauche, quand elle se présente (échelle 1,2) ;
  - en bas à gauche pendant les étapes (échelle 0,7), la main tendue vers le navigateur ;
  - de nouveau grande sur la carte de fin.
  Elle entre en montant dans le cadre.

## VOIX

- Gemini TTS, voix **Leda**, une seule prise de tout le texte (`assets/voice/raw/full-Leda.wav`, 84,7 s), découpée en 13 phrases aux silences (`tools/voice_onepass.mjs --split-only`, coupes forcées `CUTS=` vérifiées une à une), puis calée mot à mot (`tools/voice.mjs --align-only`).
- Consigne de jeu (prise d'origine, inchangée) : jeune voix féminine souriante de mascotte, sigles épelés, pauses d'environ une seconde. Une écoute automatique la situe vers 20-25 ans, « dynamique, claire, professionnelle et accueillante », non enfantine (maturité 8/10) ; elle est gardée pour l'abeille adulte.
- Graphies pour la synthèse (`tools/lines.json`) : « A-R-S point C-P-P-F point G-A », « C-P-P-F », « deux mille vingt-six, deux mille vingt-sept ».

## MUSIQUE

- Synthétisée par `tools/music_synth.py` (numpy, graine 7) : ukulélé en cordes pincées (Karplus-Strong), marimba, basse, kick, clap, shaker, nappe et réverbération ; 118 BPM, grille Do–Sol–Lam–Fa ; la dernière mesure tombe sur un temps fort à la fin du film. Le modèle Lyria n'était pas disponible (quota nul).
- `python3 tools/music_synth.py 104.11 assets/bgm/musique.wav`, puis `ffmpeg -i assets/bgm/musique.wav -c:a libmp3lame -b:a 320k assets/bgm/musique.mp3` (seul le MP3 est versionné).
- Mixage (`tools/build.mjs`) : voix à 0,82 ; musique à 0,62 sur le logo, 0,17 sous la voix, 0,36 dans les respirations de plus d'une seconde, remontée à 0,7 après la dernière phrase, fondu de sortie de 2,5 s.

## SCÈNES

Temps réels, calés sur la voix (générés par `tools/build.mjs`) :

| Scène | Phrases | Début | Fin |
| --- | --- | --- | --- |
| c1 · Logo | — | 0,00 s | 3,00 s |
| c2 · Accueil | L01–L02 | 3,00 s | 20,76 s |
| c3 · Étape 1 « Connectez-vous » | L03–L04 | 20,76 s | 34,43 s |
| c4 · Étape 2 « Vos enfants éligibles » | L05 | 34,43 s | 42,48 s |
| c5 · Étape 3 « Remplissez le formulaire » | L06–L08 | 42,48 s | 64,60 s |
| c6 · Étape 4 « Signature et cachet de l'école » | L09–L10 | 64,60 s | 73,65 s |
| c7 · Étape 5 « Téléversez le certificat » | L10–L12 | 73,65 s | 90,22 s |
| c8 · Fin | L13 | 90,22 s | 104,11 s |

1. **c1 · Logo** : le nid d'abeilles apparaît, le logo CPPF grandit puis s'efface.
2. **c2 · Accueil** (L01–L02) : l'abeille monte dans le cadre et salue. « Le service en ligne de la CPPF », l'adresse ars.cppf.ga dans une pastille avec loupe. Puis le bandeau « Allocation de Rentrée Scolaire », « 2026-2027 » en grand, et deux puces : imprimer le certificat de scolarité, le téléverser en ligne pour chaque enfant.
3. **c3 · Connexion** (L03–L04) : l'adresse se tape, la page de connexion s'ouvre ; le curseur saisit le matricule solde et la date de naissance, coche les conditions générales, clique « SE CONNECTER ».
4. **c4 · Liste** (L05) : la liste des enfants éligibles se remplit ; les trois boutons « TRAITER » pulsent ; clic sur le premier, le formulaire se prépare.
5. **c5 · Formulaire** (L06–L08) : le matricule du second parent se tape, « Féminin » se coche, l'établissement et la classe s'écrivent ; sur « jaune », les champs obligatoires s'illuminent et le bandeau rouge clignote ; clic sur « EXPORTER EN PDF », l'icône PDF part vers le coin et la notification « certificat-scolarite.pdf ✓ Téléchargé » apparaît.
6. **c6 · École** (L09–L10) : l'imprimante sort le certificat ; l'école (drapeau du Gabon) ; le document s'agrandit, la signature se dessine, le cachet « CACHET ÉCOLE » frappe ; le téléphone arrive et le scanne (badge « ✓ SCANNÉ »).
7. **c7 · Téléversement** (L10–L12) : l'adresse se retape, la liste revient ; clic sur « CHOISIR », la fenêtre « Téléverser le certificat » montre certificat-signe.pdf ; « VALIDER », barre de progression, la ligne affiche « CHANGER » et « ✓ CERTIFICAT » ; les deux autres enfants suivent ; une loupe sur le scan et « ✓ Scan lisible ».
8. **c8 · Fin** (L13) : logo CPPF, « Vos démarches en ligne, en toute simplicité », la pastille ars.cppf.ga, la devise « Solidaires aujourd'hui, pour un Avenir Prospère » et le filet tricolore ; l'abeille salue. Tenu 6,5 s après la voix.

## MOTION

- Titres d'étape : arrivée en 0,45 s `power3.out` ; puces mot à mot ou ligne à ligne sur le mot de la voix (`KIT.words`, `KIT.li`).
- Curseur : déplacements de 0,4 à 0,7 s qui finissent sur le mot du clic ; clic = curseur qui s'enfonce + onde (`KIT.click`), bouton qui s'enfonce (`KIT.press`).
- Saisie : un caractère à la fois (`KIT.type`).
- Tout est piloté par des timelines GSAP en pause, déterministes, calées sur les mots de la voix par `window.__CPPF_CUES.at(phrase, mot)`.

## Reconstruire

```bash
node tools/build.mjs                 # cues.js, talk.js et index.html à partir de la voix
npx hyperframes check                # 0 erreur, 0 avertissement attendu
npx hyperframes render --quality delivery -o renders/CPPF-ARS-2026-2027-abeille.mp4
```
