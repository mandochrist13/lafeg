# SPEC — « Tribune des Droits Sociaux » (collage photo, vertical)

GOAL : refaire la vidéo WhatsApp de la Tribune des Droits Sociaux (25 s, motion design bleu nuit) en style collage photo, et l'enrichir avec ce que montre festac.org. Un travailleur, un syndicaliste ou un partenaire comprend :

- que la Tribune est le média panafricain des droits sociaux, créé par la FESTAC ;
- ce qu'est la FESTAC : une fédération de syndicats, siège à Libreville, 10 pays membres ;
- ses trois missions et les cinq thèmes de ses émissions ;
- qui l'anime : Richard NDI BEKOUNG, Secrétaire permanent de la FESTAC.

Il retient comment la suivre : WhatsApp, YouTube, festac.org.

OUTPUT : HyperFrames 0.9.41, 1080 × 1920 (vertical, comme la vidéo d'origine), 30 im/s, MP4 H.264 + AAC.

TIME : 45,6 s. Tout est calé sur la grille des temps de la musique (104 bpm) : chaque page et chaque papier tombent sur un temps. Pas de voix.

## Idée

Comme le film FEG « collage » : une grande table de papier kraft, plus grande que le cadre. La caméra passe d'une page à l'autre, comme un banc-titre tenu à la main. Pendant chaque trajet, elle se lève un peu (zoom arrière), puis redescend.

Les papiers arrivent comme en animation image par image, à 12 poses par seconde : ils glissent, tombent et se posent avec un petit rebond. Ensuite, on les scotche, on les tamponne et on les annote au feutre.

Rien ne disparaît : quand la caméra repasse, la table garde la trace du récit.

## Look

- **Table.** Kraft clair #E6D8BB, grain et fibres, vignette douce.
- **Couleurs de la Tribune.**
  - Bleu nuit #14284F et or #D9A21B, repris du médaillon et de la vidéo d'origine.
  - Bandes panafricaines comme les bordures de l'original : vert #1F8A3C, jaune #F2C12E, rouge #C8202F, noir #161616.
- **Papiers.** Blanc cassé #FBF8F0 et manille #EAD9AD, bords déchirés ; les ombres grandissent quand un papier est en l'air.
- **Photos.** Tirages à bord blanc, ruban adhésif aux coins, légendes au feutre.
- **Écriture.**
  - Mots forts en Oswald Bold, en capitales, de 110 à 170 px.
  - Sous-titres en Montserrat Bold, en capitales espacées.
  - Notes au feutre bleu #1F3F8F en Caveat.
  - Tampons à l'encre rouge #A12A24.
  - Aucun texte sous 30 px.
- **Médaillon et logo.** Le médaillon est découpé dans la vidéo d'origine ; le logo FESTAC vient de festac.org.
- **Drapeaux.** Les 10 drapeaux des pays membres sont redessinés en papier découpé. Ce sont des formes simples, et les photos de drapeaux du site sont des images de banque, dont une filigranée.

## Récit

| Temps | Page | Image |
| --- | --- | --- |
| 0–4,1 s | Valeurs | Deux rubans panafricains se collent en travers. Quatre bandes tombent une à une, au rythme : « TRAVAIL », « DIGNITÉ », « JUSTICE », « SOLIDARITÉ ». Un trait d'or au feutre les souligne. |
| 4,1–8,1 s | La Tribune | Le médaillon se pose comme un autocollant. Dessous : « LE MÉDIA PANAFRICAIN / DES DROITS SOCIAUX ». Note au feutre : « créé par la FESTAC → ». |
| 8,1–13,3 s | La FESTAC | La caméra glisse à droite. Carton du logo FESTAC, puis « Fédération des Syndicats des Travailleurs des Pays Affiliés à la CIPRES ». Photo du siège inauguré à Libreville, tampon « SIÈGE · LIBREVILLE ». « La voix des travailleurs africains ». |
| 13,3–18,5 s | 10 pays | « 10 pays membres ». Les drapeaux se posent un par un, chacun avec son nom : Cameroun, Gabon, Bénin, Burkina Faso, Côte d'Ivoire, Guinée, Mali, Niger, Sénégal, Togo. |
| 18,5–22 s | Mission 01 | Bandeau « NOTRE MISSION ». « 01 », « INFORMER », « sur les droits sociaux en Afrique » ; affiche d'une émission de la Tribune. |
| 22–25,4 s | Mission 02 | « 02 », « DONNER LA PAROLE », « aux travailleurs et aux acteurs sociaux » ; trois photos de prises de parole au micro. |
| 25,4–29,5 s | Mission 03 | « 03 », « PROMOUVOIR », « le dialogue social et la justice sociale » ; photo de la table ronde, légendée au feutre « table ronde FESTAC – CNSS ». |
| 29,5–34,1 s | Émissions | « AU CŒUR DE NOS ÉMISSIONS ». Cinq tickets avec une icône découpée : Droits sociaux, Travailleurs, Syndicalisme, Protection sociale, Sécurité sociale. |
| 34,1–38,7 s | À votre écoute | « À votre écoute » au feutre. Tirage de Richard NDI BEKOUNG au micro, puis « Secrétaire permanent de la FESTAC » et « Responsable de la Tribune des Droits Sociaux ». |
| 38,7–41 s | Ensemble | Rubans panafricains ; « ENSEMBLE » et « pour la justice sociale ». |
| 41–45,6 s | Fin | Une grande feuille blanche couvre le cadre et se fait scotcher. Le médaillon et le logo FESTAC s'y posent sur le dernier temps fort, puis « Suivez la Tribune des Droits Sociaux · WhatsApp · YouTube · festac.org ». |

## Son

- **Voix.** Aucune, comme demandé.
- **Musique.** Créée pour le film : instrumentale panafricaine, joyeuse et entraînante, 104 bpm.
  - Elle est générée en local avec MusicGen (Meta, modèle « medium »), car Lyria n'est pas disponible avec la clé du projet.
  - Trois prises ont été générées et écoutées par Gemini ; la prise « kora » a été retenue (9/10, mixage propre). Les deux autres étaient plus funk ou plus apaisées.
  - Le montage (`tools/musique.py`) revient du temps 44 au temps 12 de la prise (8 mesures rejouées) pour atteindre 45,6 s ; le raccord tombe sur un temps.
  - Un fondu de fin commence avec l'appel final ; le niveau est de −15,2 LUFS, crête à −1,8 dBFS.
  - Licence : les poids de MusicGen sont sous CC BY-NC 4.0 (usage non commercial), à valider pour la diffusion.
- **Bruitages.** Aucun : la musique porte le rythme des poses.

## Fichiers

- `compositions/world.html` : la table, tous les papiers et la caméra. Tout ce qu'on voit est une fonction du temps.
- `compositions/ov-end.html` : le médaillon, le logo et l'appel de la carte de fin.
- `assets/timing.js` : la grille des temps et l'ancrage de chaque page, partagés par les deux compositions.
- `assets/bgm/musique-tribune.wav` : la musique montée.
- `tools/medaillon.py` : la découpe du médaillon dans la vidéo d'origine.
- `tools/tempo.py`, `tools/grille.py`, `tools/musique.py`, `tools/ecoute.py` : l'analyse du tempo, le montage et l'écoute automatique de la musique.
- `renders/FESTAC-tribune.mp4` : le film.
