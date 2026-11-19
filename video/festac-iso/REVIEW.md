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

`renders/FESTAC-presentation-3D.mp4`.
