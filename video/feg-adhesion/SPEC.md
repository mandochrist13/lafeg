# SPEC — « Comment adhérer à la FEG » (storyline A, « Le dossier »)

GOAL: un chef d'entreprise gabonais sait qu'il doit d'abord être une entreprise formelle (registre du commerce, identifiant fiscal, à jour CNSS, CNAMGS et impôts), connaît les six étapes du dossier d'adhésion dans l'ordre et sait où le déposer.

OUTPUT: HyperFrames, 1920 × 1080, 30 i/s, MP4 H.264, voix off Despina + musique. Version réseaux sociaux : 1080 × 1920 (9:16), même voix, même musique, même minutage, sous-titres incrustés (voir « 9:16 » plus bas).

TIME: 96,7 s (fixé par la voix off) ≈ 2902 images. Musique SoundHill « Find Yourself », 120 BPM → 15 images par temps.

## LOOK

- **Médium** : illustration vectorielle à plat, formes pleines sans contour. Chaque volume a deux tons : la face éclairée et la face d'ombre, plus sombre de 12 % en luminosité. Ombres de contact en ellipse noire à 10 % ; ombre des papiers `0 6px 18px rgba(0,0,0,.10)`. Pas de dégradé, pas de texture.
- **Fond** : #FFFFFF (celui du film de présentation). Plateau du bureau vu de dessus #F2F3EF, chant #E4E6E0.
- **Encre** : texte #1A1C19, titres #063D21. **Accent** #0A7537 : tampons « À JOUR », coches, veste de la dirigeante, un seul mot accent par titre.
- **Bronze** #AEAE7D : seulement la carte de membre et la carte de fin.
- **Institutions** : façade #F4F4EF, ailettes #C5CBD0, gris foncé #3A4540. **Décor végétal** : sauge #9DB3A4 (jamais le vert accent).
- **Peaux** : #4A2D1C, #5C3A24, #6E4429, #7F5236. Cheveux #1C1411.
- **Typo** : Hyundai Sans Head Bold, titres de 64 à 76 px, interlettrage −1,5 % ; Hyundai Sans Head Medium, surtitres de 30 à 34 px en #0A7537 ; Hyundai Sans Text Regular, étiquettes de 26 à 30 px en #3C423B. Colonne de texte à x = 132 px, marges de 96 px.

## OBJECTS

- **La dirigeante** (fil rouge) : femme d'une quarantaine d'années, peau #6E4429, cheveux courts naturels, veste #0A7537, haut blanc, pantalon #1F2A24. Proportions réelles (tête = 1/7,5 de la hauteur), visage stylisé : yeux ovales, sourcils, nez en ombre douce, bouche en trait. Jamais de caricature.
- **Les mains** : silhouettes d'un seul tenant, doigts effilés et accolés, plis fins, pouce placé, aucun liseré autour des doigts. Vues de dessus : le poing fermé sur la poignée du tampon, la pince à trois doigts sur le stylo (index posé le long du stylo, autres doigts repliés). De face : le dossier tenu par ses bords, doigts repliés sur la couverture ; assis, avant-bras et mains posés l'un sur l'autre sur la table.
- **Les cinq pièces de l'entreprise formelle** : feuilles blanches à bandeau gris, titre et sous-titre : « RCCM · Registre du commerce », « NIF · Identifiant fiscal », « CNSS · Immatriculation », « CNAMGS · Immatriculation », « Impôts · À jour ». Aucun logo d'administration réel.
- **Tampon « À JOUR »** : cadre arrondi #0A7537 incliné de −8°. **Cadenas** gris foncé sur le dossier fermé.
- **Le dossier** : chemise vert profond #063D21, bandeau #C2C08E, « DOSSIER D'ADHÉSION » en blanc. Pages intérieures : les vraies pages du dossier 2026 (lettre de demande p. 3, fiche entreprise p. 4, fédération métier p. 6, déclaration d'engagement p. 9), dont le pied de page reste illisible à l'écran.
- **Signature** : trait d'encre noire qui se dessine. **Cachet** : empreinte ronde verte « VOTRE ENTREPRISE ».
- **Immeuble Odyssée** : tour élancée à ailettes verticales, entrée vitrée, logo FEG au-dessus de la porte ; un agent d'accueil. La FEG est au **8ème étage** : la voix le dit, l'adresse l'écrit sous le titre, la carte de fin le rappelle.
- **La salle des instances** : table vue de face, quatre membres assis, le dossier ouvert. Carte de décision avec les trois cases du vrai dossier : Acceptée, Acceptée sous réserve, Refusée.
- **Trois mois** : trois cases qui se remplissent (délai pour compléter un dossier accepté sous réserve, indiqué par la FEG).
- **Cotisation** : un escalier de dix tranches, sans aucun montant, avec le repère « votre chiffre d'affaires » ; un ticket « Droit d'accès · première adhésion ».
- **Poignée de main** : en pied, de profil, la dirigeante et un représentant de la FEG devant le logo ; les mains serrées à leur taille naturelle (le gros plan de la v1 faisait trop dessiné).
- **Carte de membre** : logo FEG, « Membre », liseré bronze.
- **Table de la fédération** : table ronde, six membres ; une chaise libre que la dirigeante occupe, les autres se tournent vers elle.
- **Calendrier** : page « 31 mars » et flèche circulaire.

## MOTION

- **Personnages** : poses clés reliées en `power2.inOut` de 0,4 à 0,7 s. La tête mène de 2 à 4 images, les bras suivent, jamais les deux bras ensemble. Respiration au repos : ±1,2 % sur la hauteur du buste, période 4 s, fonction du temps. Marche : un pas toutes les 0,5 s, bassin qui monte et descend de 6 px.
- **Objets** : arrivées en `expo.out` de 0,6 à 0,9 s ; papiers qui glissent en `power3.out` 0,5 s. Tampon : levée de 0,18 s, frappe de 0,06 s avec un écrasement de 3 %, l'encre apparaît d'un coup au contact (`tl.set`).
- **Caméra** : poussées et recadrages en `power2.inOut` de 1,0 à 1,6 s, puis immobile. Raccords d'objet à objet entre les plans.
- **Titres** : mot à mot, flou 6 px → 0 et opacité en 0,13 s, décalage 0,067 s ; sortie floue 8 px en 0,22 s `power3.in` ; figés une fois posés. Étiquettes : avec leur objet, 0,2 s.

## SHOTS

Temps réels, calés sur la voix off (générés par `tools/build.mjs`) :

| Plan | Phrases | Début | Fin |
| --- | --- | --- | --- |
| s1 · Le bureau | L01 | 0,00 s | 7,61 s |
| s2 · Entreprise formelle | L02–L03 | 7,61 s | 23,88 s |
| s3 · Le dossier et les justificatifs | L04–L06 | 23,88 s | 42,76 s |
| s5 · Le dépôt | L06 | 42,16 s | 50,40 s |
| s6 · La validation | L07 | 50,40 s | 60,61 s |
| s7 · La cotisation | L08 | 60,61 s | 69,00 s |
| s8 · Membre | L09 | 69,00 s | 77,75 s |
| s9 · Chaque année | L10 | 77,75 s | 84,33 s |
| s10 · Fin | L11 | 84,33 s | 96,73 s (logo à 89,41 s) |

Les étapes 1 et 2 sont dans le même plan (s3), le dossier restant à l'écran.

1. **S1 · Le bureau** (L01) : vue de face, la dirigeante à son bureau tient le dossier vert face à nous, par ses bords ; titre « Comment adhérer à la FEG ? ». Fin : la caméra entre dans la couverture.
2. **S2 · Entreprise formelle** (L02–L03) : vue de dessus, le dossier fermé par un cadenas ; titre « Condition impérative » / « Être une entreprise formelle ». Ses mains posent les cinq pièces, chacune tamponnée « À JOUR » quand la voix la nomme. Au cinquième tampon, le cadenas s'ouvre.
3. **S3 · Le dossier** (L04–L05) : le dossier s'ouvre ; les pages arrivent quand la voix les nomme ; la fédération métier est cochée ; la déclaration est signée puis cachetée. Surtitre « Étape 1 ».
4. **S4 · Les justificatifs** (L06, début) : les justificatifs CNSS et CNAMGS se trombonnent au dossier, qui se ferme ; ses mains le soulèvent. « Étape 2 ».
5. **S5 · Le dépôt** (L06, fin) : vue de face, rue ; elle marche vers l'Immeuble Odyssée et remet le dossier à l'accueil. « Étape 3 », adresse « Immeuble Odyssée, 8ème étage · BP 410 · Libreville » (sur « huitième ») et info@lafeg.ga.
6. **S6 · La validation** (L07) : les instances examinent le dossier ; « Acceptée » se coche ; puis « sous réserve » et trois mois qui se remplissent. « Étape 4 ».
7. **S7 · La cotisation** (L08) : l'escalier des tranches, son repère, puis le droit d'accès. « Étape 5 ». Aucun montant.
8. **S8 · Membre** (L09) : poignée de main en pied devant le logo de la FEG, puis la table de sa fédération qui l'accueille.
9. **S9 · Chaque année** (L10) : le calendrier « 31 mars », la fiche entreprise se met à jour. « Étape 6 ».
10. **S10 · Fin** (L11) : « Bâtir ensemble une économie forte », « pour garantir la souveraineté nationale », puis logo FEG, « Devenez membre · lafeg.ga », info@lafeg.ga, tenus au moins 2,5 s.

## 9:16 (réseaux sociaux)

Même film, recadré pour le téléphone : `node tools/build.mjs --vertical` écrit une racine 1080 × 1920 et des copies des scènes dans `compositions/v/` (le drapeau `window.__FEG_V` active les blocs `if (P.V)` de chaque scène).

- **Caméra** : chaque plan garde son illustration 16:9 et la place dans une caméra verticale (`P.vwrap`, `P.vset`, `P.vto` dans `assets/people.js`), qui suit l'action (le dossier, chaque pièce tamponnée, la marche jusqu'à l'accueil). Les raccords d'objet restent exacts : le dossier est au même endroit et à la même taille de part et d'autre des coupes S1→S2 et S2→S3.
- **Textes** : surtitre 42 px à y = 196, titre de 84 à 104 px à y = 250, colonne à x = 80. Fonds prolongés (bureau, sol, mur, table) pour qu'aucun bord de l'image 16:9 ne se voie.
- **Sous-titres incrustés** : Hyundai Sans Text Medium 46 px, sur un cartouche blanc arrondi à y ≈ 1196, une ligne à la fois. Groupes écrits à la main dans `tools/captions.json`, calés sur les mots de la voix ; graphies d'écran : CNAMGS, 8ème étage, 31 mars.
- **Zone utile** : tout ce qu'il faut lire tient entre 168 et 1330 px (au-dessus des boutons et légendes des applications). Les sujets restent au-dessus des sous-titres.
- **Adaptations par plan** : S2, la rangée des pièces en plan plus large pour que le dossier reste sous le titre ; S6, la carte de décision et les trois mois au-dessus des instances, sans le logo mural ; S8, la poignée de main en plan plus serré ; S10, la phrase en haut, le logo et l'appel au-dessus de la chaîne des membres.

## BANNED

Fond sombre ; lueurs, particules ; dégradés violet/bleu, cartes en verre ; papier crème + serif italique ; étiquettes en capitales monospace, pastilles ; tout centré ; tout qui apparaît en fondu-glissé vers le haut ; titres qui dérivent ; cadres et coins décoratifs ; trois cartes en rang, listes à puces, icônes dans des ronds ; logo collé dans un coin ; **isométrique 3D** (demande de la FEG) ; style « Corporate Memphis » (petites têtes, membres géants, peaux violettes) ; visages caricaturés ; motifs folkloriques ; faux logos d'administrations (CNSS, CNAMGS, impôts) ; **tout montant de cotisation** ; toute année affichée.

## QA

- t = 0 : la dirigeante à son bureau et le titre, lisibles.
- Les cinq pièces nommées et tamponnées, étiquettes ≥ 28 px ; le cadenas ne s'ouvre qu'au cinquième tampon.
- Les vraies pages du dossier reconnaissables ; une fédération cochée ; signature et cachet visibles.
- Dépôt : l'immeuble et l'adresse lisibles.
- Validation : « Acceptée » puis « sous réserve · 3 mois ».
- Cotisation : aucun chiffre en FCFA nulle part.
- La poignée de main se lit au premier coup d'œil ; la table compte au moins six personnes.
- Carte de fin : logo et appel à l'action tenus au moins 2,5 s.
- 9:16 : aucun texte hors de la bande 168–1330 px ; les sous-titres ne cachent ni visage ni tampon ; aucun bord d'image 16:9 visible ; raccords S1→S2 et S2→S3 exacts.
