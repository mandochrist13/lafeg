# Sous-titres incrustés des films FEG

Pour les projections sans son : la voix off est écrite à l'écran, un groupe de mots à la fois, au rythme de la voix.

Films traités :

- `feg-adhesion` (Comment adhérer à la FEG, 16:9 v7) ;
- `feg-pate` (pâte à modeler) ;
- `feg-collage` (collage photo) ;
- `feg-point` (le point bronze) ;
- `feg-lumiere` (la lumière des entreprises).

## Principe

1. Dans chaque projet, `tools/captions.json` donne les groupes de sous-titres, phrase par phrase, en graphie d'écran.
   - Exemples : « 1959 » pour « mille neuf cent cinquante-neuf », « 13 fédérations », « info@lafeg.ga ».
   - `_subst` relie ces graphies aux mots dits.
   - Les groupes suivent les pauses et la ponctuation de la voix : une ligne, 56 signes au plus.
2. `sous-titres/sous-titrer.sh <projet> <film>.mp4 <sortie>.mp4 [crf]` fait le reste :
   - `captions.mjs` cale chaque groupe sur les mots de la voix (`assets/cues.js`) et écrit la piste `compositions/cap.html`, plus une racine temporaire `captions.html` qui ne contient qu'elle, sur fond transparent ;
   - HyperFrames rend cette couche seule (`render -c captions.html --format webm`) : un WebM VP9 avec transparence, en 2 min environ ;
   - la racine temporaire est supprimée, car un projet ne doit garder qu'une racine (`index.html`) ;
   - `incruste.sh` incruste la couche sur le rendu existant du film. Le son est repris tel quel.

Exemple :

```bash
sous-titres/sous-titrer.sh feg-point feg-point/renders/FEG-point-bronze.mp4 feg-point/renders/FEG-point-bronze-sous-titres.mp4
```

Le film n'est pas rendu une deuxième fois : son image est seulement réencodée avec la couche de sous-titres par-dessus (H.264, CRF 18 ; CRF 20 pour le collage, comme sa version d'envoi).

## Style

- Cartouche vert foncé de la FEG (#063D21, opacité 0,88), coins arrondis, texte blanc.
- Police Hyundai Sans Text Medium, 48 px.
- Centré, à 50 px du bas de l'image, sous les étiquettes des films.
- Un groupe à la fois : il s'ouvre 0,08 s avant son premier mot et reste 0,3 s après le dernier, sans chevaucher le suivant.
- Un groupe peut s'écarter d'un élément du film : sur le côté (`"align": "left"` ou `"right"`) ou plus bas (`"bottom": 24`).
  - Collage : le tampon « Depuis 1959 » et le « ensemble ! » manuscrit.
  - Comment adhérer : l'axe « Chiffre d'affaires » et l'étiquette « Fédération · Logistique et manutention ».
