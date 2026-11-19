# Relecture — « FESTAC, la voix des travailleurs africains » (3D isométrique)

## Contrôle automatique

`npx hyperframes check` : **0 erreur**, contrôle passé.

| Contrôle | Résultat |
| --- | --- |
| Lint | 0 erreur ; 1 avertissement : le monde 3D tient dans un seul fichier (une seule scène continue, comme les films 3D CNAMGS et BGFI) |
| Exécution | 0 erreur, 0 avertissement |
| Mise en page | 0 problème |
| Mouvement | 0 problème |
| Contraste | textes conformes WCAG AA |
| Audio | 0 problème (11 phrases, musique) |

## Ce que la relecture a corrigé

Le film a été vu en images fixes toutes les 4 secondes, puis à chaque moment retouché.

| Moment | Problème | Correction |
| --- | --- | --- |
| Calage de la voix | Les mots après « : » étaient décalés d'une pause ; FESTAC et CIPRES comptaient 6 syllabes au lieu de 2. | Nouveau calage `tools/align.py` (pauses réelles appariées à la ponctuation) ; sigles dits comme des mots comptés à part. |
| Carte | Carte invisible (dalles blanches sur fond blanc). | Dalles grises, pays membres en bleu qui montent ; Libreville reste à part, sur sa propre dalle blanche. |
| Ouverture | Un auvent cachait les compteurs de la caisse. | Auvent retiré, caméra recadrée. |
| Étiquettes | Noms de pays peu lisibles ; Togo et Bénin se chevauchaient ; commissions hors cadre ; Libreville encombrée. | Noms en blanc ombré, étiquettes décalées, recadrages. |
| Valeurs | « Coopération » passait sur la foule de l'Assemblée générale. | Valeurs détourées de blanc. |
| Phrase finale | « La voix des travailleurs africains » passait sur le médaillon de la Tribune et les logos des partenaires. | Fond blanc arrondi sous la phrase. |
| Tribune | Une seconde de bâtiment vide avant le médaillon. | Le médaillon se pose dès « informe ». |

## Rendu

`renders/FESTAC-presentation-3D.mp4` est le rendu en qualité « delivery ». Il a pris 31 min 42 s, en WebGL logiciel.

| Mesure | Valeur |
| --- | --- |
| Image | 1920 × 1080, 30 im/s, H.264 |
| Durée | 114,9 s |
| Poids | 59,1 Mo |
| Son | AAC stéréo 48 kHz ; −15,4 LUFS intégré, plage 3,5 LU, crête −2,3 dBFS |
| Images noires | aucune |
| Images figées | seulement la carte de fin, tenue à partir de 110,8 s |

Planche contact du fichier rendu, une image toutes les 6 s : toutes les étapes sont conformes à la relecture.

`renders/FESTAC-presentation-3D-whatsapp.mp4` est la même vidéo, réencodée pour WhatsApp et les réseaux sociaux :

- H.264 CRF 23, 3 Mbit/s au plus, son AAC 160 kbit/s ;
- 15,8 Mo, quasi identique au rendu d'origine (SSIM 0,997).
