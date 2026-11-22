# SPEC — BGFIBourse, version lumière (« Votre partenaire pour l'avenir »)

GOAL : présenter BGFIBourse autrement que les deux films précédents (3D isométrique, 2D), avec les étoiles et les lumières que BGFI aime, dans un ton froid, sobre et accueillant. L'épargnant d'Afrique centrale comprend :

- qu'une épargne seule pèse peu ;
- que, réunies, les épargnes financent les projets des entreprises et des États, en se rencontrant sur la BVMAC ;
- qu'il faut pour y accéder une société de bourse agréée par la COSUMAF ;
- que BGFIBourse est ce guide, et ce qu'elle fait ;
- une preuve récente : l'entrée en Bourse de BGFI Holding Corporation.

OUTPUT : HyperFrames 0.9.41, 1920 × 1080, 30 im/s, MP4 H.264 + AAC.

TIME : 80,0 s. La voix dure de 3,2 s à 71,1 s (10 phrases) ; le logo arrive à 72,5 s, à la fin de la dernière montée de la musique.

## Idée

Une épargne = une petite lumière. BGFIBourse = l'étoile qui guide, celle du logo officiel : huit branches (quatre grandes, quatre diagonales), entre le pavé bleu et le pavé sauge.

La nuit, on lève les yeux : l'étoile guide brille dans le ciel. En bas, l'épargne de l'Afrique centrale s'allume, lumière après lumière, sur la carte des six pays de la CEMAC. Réunies, ces lumières financent des projets tracés en constellations, et se rencontrent sur la BVMAC, une étoile bleue à Douala. La COSUMAF trace l'anneau du marché réglementé. Il y faut un guide : l'étoile descend du ciel et prend la place de la société de bourse.

À la fin, sur « votre partenaire pour l'avenir », l'étoile s'élève, l'épargne la suit, et le jour se lève à partir d'elle. L'étoile devient celle du logo : les deux pavés apparaissent autour d'elle, puis le nom se dessine, puis le slogan de BGFIBourse.

## LOOK : froid, sobre, accueillant

- **Fond** : nuit bleu marine (#091026 au centre, #010309 aux bords), vignette légère. Ciel étoilé : 2 300 étoiles et une voie lactée de poussière d'étoiles (3 600 points fins, voile très léger), en diagonale.
  - Au début, une lueur d'horizon à peine visible.
  - À la fin, le jour se lève depuis l'étoile, en cercle qui s'élargit, jusqu'au blanc du fond du logo officiel (#FDFFFF).
- **Lumières** : points doux en mélange additif, avec un halo (bloom) sélectif calculé sur toute l'image.
- **Couleurs**, peu nombreuses et froides :
  - l'épargne, d'un blanc à peine chaud #FFF1DA : la seule touche chaude, pour l'accueil ;
  - blanc glacé #E2ECFF ;
  - bleu BGFI lumineux #8FC3F0 : la BVMAC et le marché ;
  - sauge lumineuse #D5E2B0 : les projets ;
  - argent #C9D4E8 : la COSUMAF ;
  - bleu gris #7D93BD : les traits discrets.
- **L'étoile BGFIBourse** : dessinée d'après celle du logo officiel, mesurée sur l'image fournie. Elle a quatre grandes branches égales effilées en ligne droite (demi-épaisseur de base 0,13) et quatre diagonales de 0,66, avec un cœur blanc et un halo bleu-sauge discret. Les autres étoiles (BVMAC, pays, BGFI HC) ont des aigrettes faibles : elle reste la seule étoile à huit branches.
- **Typographie** (charte BGFIBourse) :
  - Tenor Sans : titres de 40 à 100 px ;
  - Lato : textes de 28 à 38 px ;
  - texte clair, léger halo bleu ; aucun texte sous 28 px.
- **Caméra** : perspective (30°), une seule prise continue. Le plan final est calculé pour que l'étoile tombe exactement sur celle du logo de la carte de fin : (1 414,9 ; 374,2) px, grande branche de 59,4 px.

## Données et faits

Les faits viennent de la recherche faite pour les deux films précédents (`../bgfi-bourse-iso/SPEC.md`, sources citées) :

| Fait | Source |
| --- | --- |
| BGFIBourse est la société de bourse du groupe BGFIBank, agréée par la COSUMAF depuis 2006 (agrément MFAC-SB-002/2006) | [Annuaire BVMAC des sociétés de bourse](https://www.bvm-ac.org/societes-de-bourse-par-pays/) |
| Ses métiers : courtage (ordres d'achat et de vente), conservation des titres, OPC, conseil, levée de fonds pour les entreprises et les États | La vidéo de BGFIBourse transmise par la FEG |
| La BVMAC (Bourse des valeurs mobilières de l'Afrique centrale) est la bourse commune aux six pays de la CEMAC, à Douala | [BVMAC](https://www.bvm-ac.org/?p=6226) |
| La COSUMAF est le régulateur du marché financier de l'Afrique centrale | [Wikipédia : COSUMAF](https://en.wikipedia.org/wiki/Central_African_Financial_Market_Supervisory_Commission) |
| Entrée en Bourse de BGFI Holding Corporation : 45,32 milliards de FCFA levés ; BGFIBourse arrangeur et chef de file | [African Markets](https://www.african-markets.com/fr/actualite/afrique-centrale/gabon/bvmac-lipo-de-bgfi-holding-cloturee-avec-45-3-milliards-de-fcfa-leves) |
| Première cotation le 7 mai 2026, sous le code BGFI HC | [Avis BVMAC n°020/2026](https://www.bvm-ac.org/?p=15743) |

La carte des six pays (Cameroun, Centrafrique, Congo, Gabon, Guinée équatoriale, Tchad) vient de Natural Earth 1:50m, domaine public, par le paquet npm `world-atlas` 2.0.2. Le script `tools/cemac_map.py` produit `assets/data/cemac.json` et `cemac.js`.

- Contours extérieurs et frontières intérieures en pointillés.
- 953 lumières posées sur une grille régulière à l'intérieur des pays.
- Leur nombre et leur place sont symboliques : la densité suit la surface des pays, pas le nombre réel d'épargnants.
- La première lumière (« chaque épargne », puis « votre épargne ») est à Libreville.

Aucun chiffre n'a été inventé : ni tarif, ni cours, ni nombre d'épargnants, ni coordonnées.

## Récit

| Phrase | Voix | Image |
| --- | --- | --- |
| — | 0–3,2 s | Ciel de nuit, voie lactée ; la caméra regarde vers le bas. |
| L01 | La nuit, on lève les yeux vers les étoiles pour trouver son chemin. | La caméra lève les yeux. L'étoile guide (BGFIBourse) s'allume et brille sur « étoiles » ; sur « trouver son chemin », un chemin pointillé monte vers elle. |
| L02 | En Afrique centrale, chaque épargne est une petite lumière. Seule, elle brille peu. | Les contours des six pays se tracent d'ouest en est. Une lumière s'allume à Libreville (« une épargne »), puis une onde allume la carte entière. Titre : « Chaque épargne est une petite lumière. » Sur « Seule », gros plan : les autres s'effacent, elle vacille. Titre : « Seule, elle brille peu. » |
| L03 | Réunies, ces lumières financent les projets des entreprises et des États : des usines, des routes, des logements. | Toute la carte se rallume, une onde la traverse. Des flux partent de toute la carte, se rejoignent et filent vers la droite : « Entreprises et États ». Une usine, une route, des logements se tracent en constellations sauge, chacun sur son mot. |
| L04 | Elles se rencontrent sur la Bourse commune aux six pays de la Cémac : la BVMAC, à Douala. | Vue d'ensemble : l'épargne d'un côté, les projets de l'autre ; leurs flux se rencontrent sur une étoile bleue qui s'allume sur « Bourse ». Les six pays s'éclairent tour à tour, avec leur nom, et se relient à elle ; « BVMAC · Bourse des valeurs mobilières de l'Afrique centrale » ; Douala marquée sur la côte, reliée à l'étoile. |
| L05 | Pour y accéder, il faut un guide agréé par le régulateur, la Cosumaf : une société de bourse. | « Votre épargne » part de Libreville vers la Bourse ; un anneau argenté se ferme et l'arrête. Une place vide en pointillés apparaît sur l'anneau ; « COSUMAF · le régulateur » ; « Société de bourse · agréée ». |
| L06 | Ce guide, c'est BGFI Bourse, la société de bourse du groupe BGFI Bank. Elle est agréée depuis deux mille six. | La caméra lève les yeux vers l'étoile guide, qui descend du ciel et prend la place vide (éclat, onde). Titre : « BGFIBourse », « La société de bourse du groupe BGFIBank », « Agréée par la COSUMAF depuis 2006 » ; une impulsion parcourt l'anneau jusqu'à l'étoile. |
| L07 | Elle transmet et exécute vos ordres d'achat et de vente, conserve vos titres en sécurité, et rassemble l'épargne de chacun dans des OPC, gérés par des professionnels. | Les ordres (bleus : achat, sauge : vente) vont de votre épargne à l'étoile, puis à la Bourse : « Courtage ». Les titres reviennent et se mettent à l'abri dans une sphère de lumière : « Conservation ». Des épargnes de toute la carte forment un amas : « OPC », puis deux orbites réglées, « gérée par des professionnels ». |
| L08 | Elle vous conseille selon vos objectifs, et accompagne les entreprises et les États qui lèvent des fonds. | L'étoile éclaire votre épargne ; un objectif s'allume, un chemin pointillé y mène : « Conseil · selon vos objectifs ». Vue d'ensemble : l'épargne passe par la Bourse vers les projets, l'étoile les accompagne : « Levée de fonds ». |
| L09 | En deux mille vingt-six, elle a conduit l'entrée en Bourse de BGFI Holding Corporation, la maison mère du groupe : plus de quarante-cinq milliards de francs CFA levés. | Une nouvelle étoile, guidée par BGFIBourse, passe la porte et rejoint la Bourse : « BGFI HC ». Titre : « Entrée en Bourse · 2026 », « BGFI Holding Corporation », « la maison mère du groupe BGFIBank » ; l'épargne afflue vers la nouvelle étoile, compteur jusqu'à « 45,32 milliards FCFA levés » ; « Arrangeur et chef de file : BGFIBourse ». |
| L10 | BGFI Bourse : votre partenaire pour l'avenir. | Le marché s'efface. Sur « votre partenaire pour l'avenir », l'étoile s'élève ; six lumières sur dix quittent la carte et la suivent en traîne. Plan final calé sur le logo ; le jour se lève à partir de l'étoile. |
| Fin | 72,5–80,0 s | Les deux pavés du logo officiel apparaissent autour de l'étoile, puis le nom « BGFIBourse » se dessine. Slogan : « Votre partenaire pour l'avenir » ; « La société de bourse du groupe BGFIBank ». |

## Son

- **Voix** : Gemini TTS, voix Charon (masculine, calme, chaleureuse, comme un conseiller qui accueille).
  - Une seule requête pour les 10 phrases (`tools/voice_onepass.mjs`, consigne dans `tools/voice_style.mjs`), coupée aux vrais silences avec l'aide de Whisper (`tools/resplit.py`).
  - Puis normalisée à −16 LUFS et calée mot à mot (`tools/align.py`).
  - La phrase 9 a été refaite seule, avec la même voix et la même consigne (`tools/voice_line.mjs --extra`) : dans la prise d'origine, « vingt » passait vite et « deux mille vingt-six » pouvait s'entendre « deux mille six ». Gemini entend « deux mille vingt-six » trois fois sur trois dans la nouvelle prise, et la juge homogène avec les phrases 8 et 10.
  - La phrase 10 porte le slogan de BGFIBourse. Lue seule, elle prenait un ton publicitaire, en rupture avec le récit. Elle a donc été lue à la suite de la phrase 9, dans la même requête (`tools/voice_context.mjs`), comme dans la prise d'origine ; seule la phrase 10 est gardée. Sa hauteur moyenne (98,9 Hz) est celle du narrateur (99,2 Hz sur la phrase 8).
  - Prononciation vérifiée par Gemini : BGFI, OPC et CFA épelés ; Cosumaf et Cémac dits comme des mots ; « BGFI Bank » à l'anglaise ; Douala.
- **Musique** : la musique propre au film, pour ne pas reprendre celle des films de la FEG.
  - « Horizon », d'Andrewkn ([Freesound](https://freesound.org/people/Andrewkn/sounds/509740/)), sous licence CC BY 4.0 : nappes de synthétiseur, résonances cristallines, sans percussion. Une ambiance de nuit, froide et sobre mais rassurante.
  - Trouvée par Openverse parmi les seules licences qui permettent l'usage commercial et le montage (CC0 et CC BY). Une douzaine de pistes ont été écoutées par Gemini ; « Horizon » a obtenu 9,5/10 (adéquation et qualité).
  - Deux pistes tout aussi bien notées (UNIVERSFIELD) ont été écartées, car retirées de Freesound par leur auteur.
  - Extrait de 149,5 s à 229,5 s du morceau, volume relevé de 6 dB. La fin de sa dernière montée (222 s) tombe sur le logo ; elle redescend ensuite sur la carte de fin, puis un fondu la termine.
  - Elle reste sous la voix (environ −14 dB) et revient à plein sur la carte de fin.
  - Crédit obligatoire là où le film est publié : « Musique : "Horizon" par Andrewkn (freesound.org), sous licence CC BY 4.0 » (voir `assets/bgm/CREDITS.md`).

## Fichiers

- `tools/lines.json` : texte et silences ; `tools/build.mjs` : calage, `assets/cues.js` et `index.html`.
- `compositions/world.html` : la scène (Three.js) ; tout ce qu'on voit est une fonction du temps.
- `compositions/ov-titles.html` : titres ; `compositions/ov-end.html` : carte de fin.
- `assets/img/bgfibourse-logo-officiel.jpg` : le logo officiel fourni par la FEG. `tools/logo_split.py` le découpe en deux PNG transparents : `bgfibourse-mark.png` (pavés et étoile) et `bgfibourse-word.png` (le nom). `bgfibourse-logo.json` donne leurs cadres et les mesures de l'étoile.
- `renders/BGFIBourse-lumiere.mp4` : le film.

## À valider

- **Le slogan** « Votre partenaire pour l'avenir ». Il figure dans les métadonnées du site de BGFIBourse et dans l'annuaire Filao. C'est aussi la signature historique du groupe BGFIBank, dont la campagne actuelle est « Le meilleur est Avenir ». Le site n'était pas joignable d'ici pour le vérifier en direct.
- **Le crédit de la musique** (CC BY 4.0) doit accompagner le film là où il est publié.
- **La carte** est symbolique : 953 lumières réparties selon la surface des pays, pas selon le nombre d'épargnants.
- **L'année 2026** : c'est celle de la première cotation (7 mai 2026). La période de souscription n'est pas datée dans le film.
- **BVMAC** est dit vite : Gemini l'entend tantôt épelé, tantôt « bé-vé-mac ». L'écran l'écrit en entier.
