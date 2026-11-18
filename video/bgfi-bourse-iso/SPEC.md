# BGFIBourse — vidéo 3D isométrique « au cœur du marché financier de l'Afrique centrale »

## Objet

Présenter BGFIBourse en une minute et demie :

- ce qu'est le marché financier de l'Afrique centrale : des épargnants d'un côté, des entreprises et des États de l'autre, la BVMAC entre les deux ;
- pourquoi il faut une société de bourse agréée par la COSUMAF ;
- ce que fait BGFIBourse, la société de bourse du groupe BGFIBank : courtage, conservation, OPC, conseil, levée de fonds ;
- une preuve récente : l'entrée en Bourse de BGFI Holding Corporation, conduite par BGFIBourse.

Ce film est de la même famille que les vidéos 3D de la FEG et du Fonds 4 : une seule prise continue à travers une maquette d'architecte isométrique, blanche, avec les couleurs de la marque en accent. Son pendant explicatif est la vidéo 2D `video/bgfi-bourse-guide`.

Il prolonge l'épisode « Qu'est-ce qu'une société de bourse ? » transmis par BGFIBourse (tableau blanc, voix d'homme, 71 s) : même logique, même voix masculine et posée, enrichie des informations publiques sur BGFIBourse et le groupe BGFIBank.

## Format

- 1920 × 1080, 30 im/s, 84,2 s.
- Rendu : `renders/BGFIBourse-3D.mp4`.
- Commandes :
  - `node tools/build.mjs` : recalcule les temps depuis la voix ;
  - `npx --yes hyperframes@0.9.41 check` ;
  - `npx --yes hyperframes@0.9.41 render --quality delivery -o renders/BGFIBourse-3D.mp4`.

## Sources du contenu

Le site de BGFIBourse et celui du groupe n'étaient pas joignables depuis l'environnement de travail (accès réseau restreint). Les faits viennent de recherches web et de documents publics.

| Fait | Source |
| --- | --- |
| BGFIBourse est la société de bourse du groupe BGFIBank ; elle annonce les métiers courtage, OPC, conservation et conseil, et aide entreprises et États à lever des fonds | La vidéo de BGFIBourse transmise par la FEG |
| BGFIBourse est agréée par la COSUMAF depuis 2006 (agrément MFAC-SB-002/2006 du 20 décembre 2006), à Libreville | [Annuaire BVMAC des sociétés de bourse](https://www.bvm-ac.org/societes-de-bourse-par-pays/) |
| Le groupe BGFIBank est né à Libreville en avril 1971 | [Wikipédia : BGFIBank Group](https://en.wikipedia.org/wiki/BGFIBank_Group) |
| La BVMAC est la bourse commune aux six pays de la CEMAC, à Douala | [BVMAC](https://www.bvm-ac.org/?p=6226) |
| La COSUMAF est le régulateur du marché financier de l'Afrique centrale, à Libreville | [Wikipédia : COSUMAF](https://en.wikipedia.org/wiki/Central_African_Financial_Market_Supervisory_Commission) |
| Entrée en Bourse de BGFI Holding Corporation : 45,32 milliards de FCFA levés, BGFIBourse arrangeur et chef de file | [African Markets](https://www.african-markets.com/fr/actualite/afrique-centrale/gabon/bvmac-lipo-de-bgfi-holding-cloturee-avec-45-3-milliards-de-fcfa-leves) |
| Première cotation le 7 mai 2026, sous le code BGFI HC | [Avis BVMAC n°020/2026](https://www.bvm-ac.org/?p=15743) ; [Daba Finance](https://dabafinance.com/fr/nouvelles/bgfi-holding-bvmac-listing-central-africa) |

Aucun chiffre n'a été inventé : ni tarif, ni montant minimum, ni cours, ni numéro de téléphone. L'adresse de BGFIBourse n'est pas affichée, car les sources se contredisent.

## Charte

| Rôle | Valeur |
| --- | --- |
| Bleu marine BGFI | `#0B2677` : titres, volume gauche de la tour, colonnes, tableau des cours |
| Vert sauge « Bourse » | `#879A6D` : volume droit de la tour, accents |
| Sauge clair | `#CFDBAC` : toits, dôme de la COSUMAF, courbe du tableau |
| Bleu du carré | `#3A77A1` : bandeaux de la tour, ordres d'achat |
| Sauge foncé (texte vert) | `#56683F`, 6:1 sur blanc |
| Police des titres | Tenor Sans, proche du lettrage du logo (licence OFL) |
| Police des textes | Lato 400, 700, 900 (licence OFL) |
| Taille minimale du texte | 28 px |
| Logo | `assets/img/bgfibourse-logo.svg` et `.png` : redessin vectoriel de l'image fournie (voir REVIEW.md) |

La tour BGFIBourse reprend le carré du logo : un volume bleu marine, un volume sauge un peu plus haut, et l'étoile blanche à leur jonction.

## Voix

- Voix Gemini TTS « Charon », masculine, calme et posée, comme le narrateur de la série de BGFIBourse.
- Une seule prise, découpée aux pauses (`tools/voice_onepass.mjs`), au volume 0,8.
- Trois prises ont été comparées : deux de Charon (la seconde plus posée) et une de Sadaltager. Une écoute automatique les a classées, puis la seconde prise de Charon a été retenue.
- Texte exact vérifié par transcription. Sigles bien prononcés : BGFI, BVMAC, OPC et CFA lettre par lettre ; Cosumaf et Cémac comme des mots.
- Le script écrit « BGFI Bourse », « Cosumaf », « Cémac », et les années en lettres, pour la prononciation. L'écran écrit BGFIBourse, COSUMAF, CEMAC et les chiffres.

Les dix phrases :

1. En Afrique centrale, beaucoup de femmes et d'hommes épargnent, et aimeraient faire fructifier leur argent.
2. De leur côté, des entreprises et des États doivent financer leurs projets : des usines, des routes, des logements.
3. Tous se retrouvent sur la Bourse commune aux six pays de la CEMAC : la BVMAC, à Douala.
4. Pour y acheter ou y vendre des actions et des obligations, il faut un intermédiaire agréé par le régulateur, la COSUMAF : une société de bourse.
5. BGFIBourse est la société de bourse du groupe BGFIBank, né à Libreville en 1971. Elle est agréée depuis 2006.
6. Elle transmet vos ordres d'achat et de vente, et les exécute sur le marché : c'est le courtage.
7. Elle conserve vos titres en toute sécurité, et vous propose des OPC : une épargne mise en commun, gérée par des professionnels.
8. Elle vous conseille selon vos objectifs, et accompagne les entreprises et les États qui lèvent des fonds en Bourse.
9. En 2026, elle a ainsi conduit l'entrée en Bourse de la maison mère du groupe, BGFI Holding Corporation : plus de 45 milliards de francs CFA levés.
10. BGFIBourse : la société de bourse du groupe BGFIBank, pour investir en Afrique centrale.

## Musique

« Find Yourself » de SoundHill, le même morceau que les films de la FEG et du Fonds 4. Le modèle de musique Lyria n'était pas disponible (quota épuisé).

- Le film part de 53,47 s dans le morceau, avec un fondu d'entrée de 1,2 s.
- L'accord final (130,16 s du morceau) tombe sur le logo de la carte de fin, à 76,69 s.
- Volume de la musique :

| Moment | Volume |
| --- | --- |
| Seule | 0,52 |
| Sous la voix | 0,19 |
| Dans les silences de plus d'une seconde | 0,36 |
| Sur la carte de fin | 0,85 |

## La maquette

Tout ce que l'on voit est calculé par `render(t)` dans `compositions/world.html` (Three.js, caméra orthographique isométrique), à partir des mots de la voix (`assets/cues.js`).

| Place à l'écran | Élément |
| --- | --- |
| À gauche | Les épargnants : maisons, habitants avec leur épargne, l'arbre à pièces |
| Au centre gauche | BGFIBourse : tour bicolore, enseigne au logo, coffre de conservation, cuve des OPC |
| Derrière, à droite de la tour | La tour du groupe BGFIBank |
| Au centre droit | La BVMAC : six colonnes (une par pays de la CEMAC), fronton « BVMAC », tableau des cours |
| En haut | La COSUMAF : rotonde à dôme ; elle trace au sol le périmètre du marché régulé |
| À droite | Entreprises et États : usine, bureaux, bâtiment public, logements en chantier, grue, route |

## Plan par plan

| Temps (s) | Voix | Ce qu'on voit |
| --- | --- | --- |
| 0 → 3,2 | — | Le quartier des épargnants se construit. |
| 3,2 → 8,3 | L01 | Les femmes, puis les hommes ; chacun reçoit sa pile de pièces sur « épargnent ». L'arbre à pièces pousse sur « fructifier ». |
| 8,3 → 15,0 | L02 | Glissement vers la droite : les entreprises (usine, bureaux), puis les États (bâtiment public) se lèvent sur leurs mots. Sur « usines », « routes », « logements », l'usine se teinte, la route s'étire, les logements sortent de terre avec la grue. |
| 15,0 → 21,0 | L03 | Grand recul : la BVMAC se lève au centre ; ses six colonnes s'allument sur « six pays » ; étiquette « BVMAC · Bourse des valeurs mobilières de l'Afrique centrale · Douala · 6 pays de la CEMAC ». |
| 21,0 → 31,1 | L04 | Les cartes « Actions » et « Obligations » flottent au-dessus de la Bourse. Une liaison directe partie des épargnants est refusée (croix grise). Une place vide en pointillés apparaît : « Intermédiaire agréé », puis « Société de bourse ». La COSUMAF se lève et trace le périmètre du marché régulé. |
| 31,1 → 40,8 | L05 | La tour BGFIBourse se lève dans la place vide, avec son enseigne et l'étoile. À gauche, le titre (`ov-bgfi`) : logo, « La société de bourse du groupe BGFIBank », puis « Agréée par la COSUMAF depuis 2006 ». La tour du groupe se lève (« Groupe BGFIBank · Né à Libreville en 1971 »). Sur « agréée », une liaison part de la COSUMAF et une coche se pose sur la tour. |
| 40,8 → 45,1 | L06 | Les ordres d'achat (bleus) puis de vente (sauge) partent des épargnants vers BGFIBourse, puis vers la Bourse ; le tableau réagit sur « exécute » ; « Courtage ». |
| 45,1 → 52,9 | L07 | Les titres reviennent dans le coffre, qui se referme : « Conservation ». Les pièces de plusieurs épargnants se rassemblent dans la cuve des OPC, et deux gérants apparaissent : « OPC · Une épargne mise en commun, gérée par des professionnels ». |
| 52,9 → 59,6 | L08 | Un conseiller BGFIBourse rejoint les épargnants (bulle à cible) : « Conseil · Selon vos objectifs ». Puis les fonds partent de la Bourse vers les entreprises et les États : les logements s'achèvent, la route aussi, la grue tourne. « Levée de fonds ». |
| 59,6 → 69,0 | L09 | Le tableau affiche « BGFI HC · Nouvelle cotation » ; une liaison relie la tour du groupe à la BVMAC ; les souscriptions des épargnants passent par BGFIBourse jusqu'à la tour du groupe. À gauche (`ov-ipo`) : « Entrée en Bourse · 2026 », « BGFI Holding Corporation », « La maison mère du groupe BGFIBank », compteur « 45,32 milliards FCFA levés », « Arrangeur et chef de file : BGFIBourse ». |
| 69,0 → 76,1 | L10 | Recul sur tout le marché ; récapitulatif : Épargnants, BGFIBourse, BVMAC, Entreprises et États. |
| 76,1 → 84,2 | — | Carte de fin (`ov-end`) : logo sur l'accord final, « La société de bourse du groupe BGFIBank », Courtage · OPC · Conservation · Conseil, « Pour investir en Afrique centrale ». |

## Fichiers

| Fichier | Contenu |
| --- | --- |
| `tools/build.mjs` | Calage : `assets/cues.js` et `index.html` (maquette, titres, voix, musique et sa courbe de volume). |
| `tools/lines.json` | Le texte de la voix et les silences. |
| `tools/voice_onepass.mjs`, `voice.mjs`, `voice_finish.mjs` | Voix : prise unique, découpe, calage mot à mot, finition. |
| `audio_meta.json` | Durées des voix et mots alignés. |
| `compositions/world.html` | La maquette 3D. |
| `compositions/ov-bgfi.html`, `ov-ipo.html`, `ov-end.html` | Les trois titres. |
| `assets/img/bgfibourse-logo.svg`, `.png` | Le logo redessiné. |
