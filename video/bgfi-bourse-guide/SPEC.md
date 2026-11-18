# BGFIBourse — « Investir en Bourse, mode d'emploi » (vidéo explicative 2D)

## Objet

Expliquer simplement comment investir en Bourse en Afrique centrale avec BGFIBourse :

- ce que sont une action et une obligation ;
- où elles s'échangent (la BVMAC, sous le contrôle de la COSUMAF) ;
- les trois étapes avec BGFIBourse : le compte, l'ordre, la conservation ;
- les OPC et le conseil ;
- une levée de fonds réelle : l'entrée en Bourse de BGFI Holding Corporation ;
- une mise en garde sur le risque ;
- la carte de fin.

Le but est de donner envie aux épargnants de passer à l'acte, sans rien promettre.

Ce film est le pendant explicatif de la vidéo 3D isométrique (`video/bgfi-bourse-iso`). Il est de la même famille que « Le Fonds 4, mode d'emploi » (`video/cnamgs-fonds4-guide`) et « Comment adhérer à la FEG » (`video/feg-adhesion`) :

- illustration vectorielle à plat ;
- personnages articulés ;
- titres d'étapes nets ;
- papier et main vus de dessus ;
- bruitages calés sur les mots.

## Format

- 1920 × 1080, 30 im/s, 109,47 s.
- Rendu : `renders/BGFIBourse-guide.mp4`.
- Commandes :
  - `node tools/build.mjs` ;
  - `npx --yes hyperframes@0.9.41 check` ;
  - `npx --yes hyperframes@0.9.41 render --quality delivery -o renders/BGFIBourse-guide.mp4`.

## Sources du contenu

- La vidéo de BGFIBourse transmise (épisode « Qu'est-ce qu'une société de bourse ? »). Elle donne les métiers : courtage, OPC, conservation et conseil, ainsi que l'aide aux entreprises et aux États pour lever des fonds.
- L'annuaire des sociétés de bourse de la BVMAC : BGFIBourse, agrément MFAC-SB-002/2006 du 20 décembre 2006, Libreville.
- La page « Accès des investisseurs au marché » de la BVMAC. Elle donne la démarche :
  - prendre contact avec une société de bourse ;
  - ouvrir un compte titres et espèces ;
  - prendre connaissance des conditions tarifaires.
- L'avis n° 020/2026 de la BVMAC et la presse financière régionale, sur l'entrée en Bourse de BGFI Holding Corporation :
  - première cotation le 7 mai 2026, code BGFI HC ;
  - 45,32 milliards de FCFA levés ;
  - BGFIBourse arrangeur et chef de file.
- Les sièges des institutions : la BVMAC à Douala, la COSUMAF à Libreville.

Aucun chiffre n'a été inventé : ni tarif, ni montant minimum, ni rendement, ni numéro de téléphone, ni adresse. Les définitions (action, obligation, OPC) sont générales.

## Charte

| Rôle | Valeur |
| --- | --- |
| Bleu marine BGFI | `#0B2677` : titres, textes forts, bandeaux, pastilles foncées |
| Vert sauge « Bourse » | `#879A6D` : aplats, vestes, filets. Jamais en texte sur blanc (3,1:1) |
| Sauge foncé (texte vert) | `#56683F`, 6,1:1 sur blanc : « Faites fructifier votre épargne », « levés » |
| Sauge clair | `#CFDBAC`, et `#EEF3E4` pour les pastilles claires |
| Bleu | `#3A77A1` : surtitres (4,85:1 sur blanc), courbes, accessoires |
| Encre | `#1C2430` ; ardoise `#33415C` |
| Pièces | or mat `#D3AE55`, sans aucun chiffre |
| Polices | Tenor Sans 400 pour les titres, proche du lettrage du logo ; Lato 400, 700 et 900 pour les textes. Fichiers dans `assets/fonts`, licence OFL |
| Taille minimale du texte | 28 px |
| Logo | `assets/img/bgfibourse-logo.svg`, redessiné en vectoriel d'après l'image fournie ; version PNG 3120 × 900 |

Motif de marque : le petit carré bicolore du logo (marine, sauge, étoile blanche). Il précède chaque surtitre et se retrouve sur le bon d'ordre, les cartes, le badge du conseiller et la carte de fin (`assets/brand.js`).

## Voix

- Voix Gemini TTS « Charon » (voix masculine, calme), modèle `gemini-3.8-flash-tts`, au volume 0,8. C'est le registre de la vidéo de BGFIBourse.
- Douze phrases, une seule prise découpée aux pauses. La prise d'un seul tenant avait sauté la phrase L02 : celle-ci a été reprise seule, avec la même voix, et vérifiée par transcription.
- Le texte est dans `tools/lines.json`, les mots calés dans `audio_meta.json`.
- La voix dit « BGFI Bourse » (bé-jé-èf-i), « Cosumaf », « Cémac ». L'écran écrit BGFIBourse, COSUMAF, CEMAC.

Les douze phrases :

1. Vous avez de l'épargne et vous voulez la faire travailler ?
2. La Bourse vous ouvre deux portes : les actions et les obligations.
3. Une action, c'est une part d'une entreprise. Vous devenez actionnaire, et vous pouvez recevoir une part de ses bénéfices : le dividende.
4. Une obligation, c'est un prêt à une entreprise ou à un État. L'emprunteur vous verse des intérêts, puis vous rembourse à l'échéance.
5. En Afrique centrale, actions et obligations se négocient à la BVMAC, sous le contrôle de la Cosumaf. Pour y accéder, passez par une société de bourse agréée, comme BGFI Bourse.
6. Première étape : ouvrez un compte titres et espèces chez BGFI Bourse, et renseignez-vous sur ses tarifs.
7. Deuxième étape : passez votre ordre. Quel titre, combien, à quel prix : BGFI Bourse le transmet et l'exécute sur le marché. C'est le courtage.
8. Troisième étape : vos titres sont inscrits sur votre compte, et conservés en sécurité. Dividendes et intérêts vous y sont versés.
9. Vous préférez déléguer ? Avec les OPC, votre épargne est mise en commun et gérée par des professionnels. Et BGFI Bourse vous conseille selon vos objectifs.
10. Les entreprises, elles, y lèvent des fonds. En deux mille vingt-six, BGFI Bourse a conduit l'entrée en Bourse de BGFI Holding Corporation : plus de quarante-cinq milliards de francs CFA levés.
11. À savoir : la valeur des titres peut monter, mais aussi baisser. Investissez selon vos moyens et votre horizon.
12. BGFI Bourse, la société de bourse du groupe BGFI Bank : courtage, OPC, conservation et conseil. Faites fructifier votre épargne.

## Musique et son

### Musique

« Find Yourself » de SoundHill, le même morceau que les films de la FEG et du Fonds 4.

- Le film part de 27,59 s dans le morceau, avec un fondu d'entrée de 1,2 s.
- L'accord final du morceau (130,16 s) tombe sur le logo de la carte de fin, à 102,57 s dans le film, juste après « Faites fructifier votre épargne ».
- La carte de fin tient 6,9 s, le temps que la musique s'éteigne.

Volume de la musique (courbe écrite par `tools/build.mjs` dans `index.html`) :

| Moment | Volume |
| --- | --- |
| Seule | 0,5 |
| Sous la voix | 0,18 |
| Dans les silences de plus d'une seconde | 0,34 |
| Sur la carte de fin | 0,85 |

### Bruitages

59 bruitages, listés dans `tools/sfx.json` et crédités dans `assets/sfx/CREDITS.md`. Chacun est calé sur un mot :

- pièces dans la tirelire, puis portes qui s'ouvrent ;
- déclics des étiquettes ;
- tintements des pièces (dividendes, intérêts, mise en commun, levée de fonds) ;
- feuille des conditions tarifaires ;
- stylo sur le bon d'ordre ;
- souffle de la transmission de l'ordre ;
- verrou du coffre ;
- souffle du logo.

## Personnages

Les personnages sont dans `assets/cast.js`, à partir de `assets/people.js`. C'est la bibliothèque de la FEG et du Fonds 4 ; l'insigne et la poche y sont passés aux couleurs de BGFIBourse.

| Personnage | Tenue |
| --- | --- |
| Nadia, l'épargnante (personnage principal) | Veste sauge, chemisier crème, jupe longue ardoise, chignon |
| Le conseiller BGFIBourse | Costume marine, chemise blanche, cravate sauge, lunettes, badge au carré bicolore |
| Paul, Aline, Michel | Les autres épargnants de la scène des OPC (tee-shirt bleu ; wax marine et sauge ; veste brune et cheveux gris) |
| La gérante | Tailleur ardoise, chignon |

## Scènes

La musique joue seule pendant 3 s avant la première phrase. Le titre du film est à l'écran dès la première image.

| Scène | Fenêtre (s) | Voix | Ce qu'on voit |
| --- | --- | --- | --- |
| s1 · deux portes | 0 → 11,27 | L01–L02 | « Mode d'emploi · Investir en Bourse · avec BGFIBourse ». Nadia, à côté de sa tirelire où tombent trois pièces. La question s'écrit mot à mot. Puis « La Bourse vous ouvre deux portes » : deux portes s'ouvrent sur leur mot, « Actions » (une part de disque) et « Obligations » (un titre scellé). |
| s2 · l'action | 11,27 → 19,23 | L03 | « Une action, c'est une part d'une entreprise ». Une part de l'immeuble s'allume, quitte l'immeuble et devient, près de Nadia, un titre « Action ». « Vous devenez actionnaire », puis trois pièces, « Le dividende · une part des bénéfices ». |
| s3 · l'obligation | 19,23 → 27,53 | L04 | « Un prêt à une entreprise ou à un État ». La pile de pièces de Nadia part vers l'entreprise et l'État, sur leur mot. Une frise : Prêt, trois pièces d'intérêts, « Remboursement à l'échéance ». |
| s4 · le marché | 27,53 → 38,92 | L05 | « Actions et obligations se négocient à la BVMAC ». Le temple de la BVMAC (six colonnes), « Douala · 6 pays de la CEMAC ». « COSUMAF · le régulateur » et un cadre en pointillés autour du marché. Flèche de Nadia vers l'immeuble de BGFIBourse : « Société de bourse agréée », puis « BGFIBourse · agréée depuis 2006 ». |
| s5 · le compte | 38,92 → 45,38 | L06 | « Étape 1 · Le compte · Ouvrez un compte titres et espèces ». Les deux comptes se révèlent sur leur mot. Le conseiller, derrière un bureau au logo, reçoit Nadia. Une feuille « Conditions tarifaires » sans chiffres, et « Renseignez-vous sur ses tarifs ». |
| s6 · l'ordre | 45,38 → 56,05 | L07 | « Étape 2 · L'ordre · Passez votre ordre ». La main de Nadia remplit le bon d'ordre (Titre, Quantité, Prix), pendant que « Quel titre ? · Combien ? · À quel prix ? » s'affichent. Le bon part vers BGFIBourse, puis vers la BVMAC, où une coche apparaît. « Le courtage ». |
| s7 · la conservation | 56,05 → 64,00 | L08 | « Étape 3 · La conservation · Vos titres, conservés en sécurité ». Les lignes Actions et Obligations s'inscrivent au compte titres, leurs copies entrent dans le coffre, dont la roue tourne. Dividendes et intérêts tombent dans le compte espèces. |
| s8 · OPC et conseil | 64,00 → 73,70 | L09 | « Les OPC · Une épargne mise en commun ». Quatre épargnants versent chacun une pièce dans le pot « OPC », qui se remplit. La gérante et sa courbe : « Gérée par des professionnels ». Puis « Le conseil · Selon vos objectifs » : le conseiller et Nadia, une bulle « Vos objectifs », « BGFIBourse vous conseille ». |
| s9 · lever des fonds | 73,70 → 84,72 | L10 | « Lever des fonds · Les entreprises y lèvent des fonds ». Les pièces des investisseurs rejoignent une entreprise en chantier. La fiche « 2026 · Introduction en Bourse » : BGFI Holding Corporation, cotée à la BVMAC depuis le 7 mai 2026 (BGFI HC), un compteur jusqu'à « 45,32 milliards de FCFA levés », « Arrangeur et chef de file : BGFIBourse ». |
| s10 · à savoir | 84,72 → 92,33 | L11 | « À savoir · La valeur des titres peut monter, mais aussi baisser ». Une courbe sans chiffres monte, redescend puis repart. « Investissez selon vos moyens · selon votre horizon ». |
| s11 · fin | 92,33 → 109,47 | L12 | Nadia et le conseiller de part et d'autre, le carré bicolore au centre. « La société de bourse du groupe BGFIBank », puis les quatre métiers, chacun sur son mot : Courtage, OPC, Conservation, Conseil. « Faites fructifier votre épargne ». Sur l'accord final, le texte descend et le logo se révèle. |

Les scènes entrent en moins de 0,6 s et sortent par un flou de 0,3 s ; leurs fenêtres sont bout à bout. Les textes blancs sur fond marine se révèlent par un volet, ou arrivent avec leur support, jamais en fondu : leur contraste reste plein.

## Fichiers

| Fichier | Contenu |
| --- | --- |
| `tools/build.mjs` | Calage : écrit `assets/cues.js` (temps des phrases et des mots, fenêtres des scènes) et `index.html` (scènes, voix, musique et sa courbe de volume, bruitages). |
| `tools/lines.json` | Le texte de la voix et les silences. |
| `audio_meta.json` | Durées des voix et mots alignés. |
| `tools/sfx.json` | Le plan des bruitages. |
| `tools/voice_onepass.mjs`, `voice.mjs`, `voice_finish.mjs`, `voice_retake.mjs` | Voix : prise d'un seul tenant, calage, finition, reprise d'une phrase. |
| `compositions/s1-portes.html` … `s11-fin.html` | Une scène par fichier. |
| `assets/people.js`, `assets/cast.js` | Les personnages et leurs tenues. |
| `assets/brand.js` | Le carré bicolore, les pièces, la Bourse, l'immeuble de BGFIBourse, la tirelire, le coffre, l'entreprise, l'État. |
