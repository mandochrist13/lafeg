# Guide: Images Gratuites pour Hero Slider 3D

## Images à Télécharger (6 slides)

### 📥 Slide 1: "Fédération des Entreprises du Gabon"
**Nom du fichier**: `hero-business-gabon.jpg`
**Thème**: Bureau moderne africain, équipe diverse en réunion

**Sources recommandées**:

#### Unsplash
- **Photo ID**: `4Mw7nkQDByk`
  - URL: https://unsplash.com/photos/4Mw7nkQDByk
  - Description: African business team in modern office
  - Photographe: krakenimages

- **Alternative**: `SBdToHSZTlU`
  - URL: https://unsplash.com/photos/SBdToHSZTlU
  - Description: Diverse team meeting in bright office
  - Photographe: Annie Spratt

#### Pexels
- **Photo ID**: `3184418`
  - URL: https://www.pexels.com/photo/photo-of-people-doing-handshakes-3184418/
  - Description: Professional handshake in office

**Dimensions recommandées**: 1920x1080px (16:9)

---

### 📥 Slide 2: "Dialogue avec les Institutions"
**Nom du fichier**: `hero-dialogue-institutions.jpg`
**Thème**: Salle de conférence, négociation, bâtiment gouvernemental

**Sources recommandées**:

#### Unsplash
- **Photo ID**: `5fNmWej4tAA`
  - URL: https://unsplash.com/photos/5fNmWej4tAA
  - Description: Modern conference room
  - Photographe: Headway

- **Alternative**: `VieM9BdZKFo`
  - URL: https://unsplash.com/photos/VieM9BdZKFo
  - Description: Government building exterior
  - Photographe: Giammarco Boscaro

#### Pexels
- **Photo ID**: `3183197`
  - URL: https://www.pexels.com/photo/photo-of-people-near-wooden-table-3183197/
  - Description: Business negotiation meeting

**Dimensions recommandées**: 1920x1080px

---

### 📥 Slide 3: "Formation & Accompagnement"
**Nom du fichier**: `hero-formation.jpg`
**Thème**: Formation professionnelle, salle de classe moderne, apprentissage

**Sources recommandées**:

#### Unsplash
- **Photo ID**: `QckxruozjRg`
  - URL: https://unsplash.com/photos/QckxruozjRg
  - Description: People in training seminar
  - Photographe: Antenna

- **Alternative**: `376KN_ISplE`
  - URL: https://unsplash.com/photos/376KN_ISplE
  - Description: Workshop participants
  - Photographe: Good Faces

#### Pexels
- **Photo ID**: `1438072`
  - URL: https://www.pexels.com/photo/man-wearing-black-and-white-stripe-shirt-looking-at-white-printer-papers-on-the-wall-1438072/
  - Description: Business training session

**Dimensions recommandées**: 1920x1080px

---

### 📥 Slide 4: "Événements & Networking"
**Nom du fichier**: `hero-networking.jpg`
**Thème**: Événement professionnel, networking, cocktail business

**Sources recommandées**:

#### Unsplash
- **Photo ID**: `1K6IQsQbizI`
  - URL: https://unsplash.com/photos/1K6IQsQbizI
  - Description: Business networking event
  - Photographe: Campaign Creators

- **Alternative**: `pAtA8xe_iVM`
  - URL: https://unsplash.com/photos/pAtA8xe_iVM
  - Description: Professional conference
  - Photographe: Product School

#### Pexels
- **Photo ID**: `3321953` (Video - extraire frame)
  - URL: https://www.pexels.com/video/business-conference-3321953/
  - Alternative image: `1181406`
  - URL: https://www.pexels.com/photo/group-of-people-watching-on-laptop-1181406/

**Dimensions recommandées**: 1920x1080px

---

### 📥 Slide 5: "Devenez Membre"
**Nom du fichier**: `hero-member.jpg`
**Thème**: Poignée de main, signature de contrat, accord business

**Sources recommandées**:

#### Unsplash
- **Photo ID**: `Hcfwew744z4`
  - URL: https://unsplash.com/photos/Hcfwew744z4
  - Description: Business handshake
  - Photographe: Sebastian Herrmann

- **Alternative**: `wD1LRb9OeEo`
  - URL: https://unsplash.com/photos/wD1LRb9OeEo
  - Description: Contract signing
  - Photographe: Cytonn Photography

#### Pexels
- **Photo ID**: `3184465`
  - URL: https://www.pexels.com/photo/two-women-looking-at-the-code-at-laptop-3184465/
  - Description: Professional collaboration

**Dimensions recommandées**: 1920x1080px

---

### 📥 Slide 6: "Publications & Ressources"
**Nom du fichier**: `hero-publications.jpg`
**Thème**: Documents, rapports, bibliothèque moderne, lecture professionnelle

**Sources recommandées**:

#### Unsplash
- **Photo ID**: `s9CC2SKySJM`
  - URL: https://unsplash.com/photos/s9CC2SKySJM
  - Description: Reading business documents
  - Photographe: Christin Hume

- **Alternative**: `MYbhN8KaaEc`
  - URL: https://unsplash.com/photos/MYbhN8KaaEc
  - Description: Modern library with books
  - Photographe: Janko Ferlič

#### Pexels
- **Photo ID**: `3184339`
  - URL: https://www.pexels.com/photo/man-standing-in-front-of-people-sitting-beside-table-with-laptop-computers-3184339/
  - Description: Business presentation with documents

**Dimensions recommandées**: 1920x1080px

---

## 🔧 Comment Télécharger

### Méthode 1: Téléchargement Manuel (Recommandé)

1. **Créer les dossiers**:
   ```bash
   mkdir -p public/images
   ```

2. **Pour chaque image Unsplash**:
   - Aller sur l'URL fournie (ex: `https://unsplash.com/photos/4Mw7nkQDByk`)
   - Cliquer sur "Download" (bouton vert en haut à droite)
   - Choisir taille "Large" (1920x1080px ou plus)
   - Renommer le fichier selon le nom indiqué (ex: `hero-business-gabon.jpg`)
   - Placer dans `public/images/`

3. **Pour chaque image Pexels**:
   - Aller sur l'URL fournie
   - Cliquer sur "Free Download"
   - Choisir "Original" ou "Large"
   - Renommer et placer dans `public/images/`

### Méthode 2: API Unsplash (Automatique)

```bash
# Installer Unsplash API client
npm install unsplash-js

# Créer script de téléchargement
node scripts/download-hero-images.js
```

**Script**: `scripts/download-hero-images.js`
```javascript
const { createApi } = require('unsplash-js');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const unsplash = createApi({
  accessKey: 'YOUR_UNSPLASH_ACCESS_KEY', // Gratuit sur unsplash.com/developers
  fetch: fetch,
});

const images = [
  { id: '4Mw7nkQDByk', name: 'hero-business-gabon.jpg' },
  { id: '5fNmWej4tAA', name: 'hero-dialogue-institutions.jpg' },
  { id: 'QckxruozjRg', name: 'hero-formation.jpg' },
  { id: '1K6IQsQbizI', name: 'hero-networking.jpg' },
  { id: 'Hcfwew744z4', name: 'hero-member.jpg' },
  { id: 's9CC2SKySJM', name: 'hero-publications.jpg' },
];

async function downloadImages() {
  for (const img of images) {
    try {
      const photo = await unsplash.photos.get({ photoId: img.id });
      const downloadUrl = photo.response.urls.full;

      const response = await fetch(downloadUrl);
      const buffer = await response.buffer();

      const filePath = path.join(__dirname, '..', 'public', 'images', img.name);
      fs.writeFileSync(filePath, buffer);

      console.log(`✓ Downloaded: ${img.name}`);
    } catch (error) {
      console.error(`✗ Failed: ${img.name}`, error.message);
    }
  }
}

downloadImages();
```

---

## 🎨 Optimisation des Images

### Avec Next.js Image Optimizer (Automatique)
Next.js optimise automatiquement les images via le composant `<Image>`. Aucune action requise.

### Optimisation Manuelle (Optionnel)

**Utiliser ImageOptim (Mac) ou Squoosh (Web)**:

1. **Squoosh.app** (https://squoosh.app)
   - Glisser-déposer l'image
   - Régler qualité: 85%
   - Format: WebP ou JPEG moderne
   - Télécharger

2. **TinyPNG** (https://tinypng.com)
   - Upload jusqu'à 20 images
   - Compression automatique (perte ~60% poids)
   - Télécharger compressées

**Poids cible**: 150-300 KB par image (après optimisation)

---

## 📋 Checklist de Vérification

Après téléchargement, vérifier:

- [ ] 6 images présentes dans `public/images/`
- [ ] Noms de fichiers corrects (sans espaces, minuscules)
- [ ] Dimensions: minimum 1920x1080px
- [ ] Format: JPG ou WebP
- [ ] Poids: < 500 KB chacune
- [ ] Rendu correct sur écran 4K (tester avec zoom 200%)
- [ ] Texte lisible sur overlay sombre (contraste suffisant)

---

## 🆓 Licences & Crédits

### Unsplash License
- **Type**: Unsplash License (libre de droits commerciaux)
- **Attribution**: Recommandée mais non obligatoire
- **Modifications**: Autorisées
- **Usage commercial**: ✅ Autorisé

### Pexels License
- **Type**: Pexels License (libre de droits)
- **Attribution**: Non obligatoire
- **Modifications**: Autorisées
- **Usage commercial**: ✅ Autorisé

**Aucune attribution requise** pour ces images, mais vous pouvez ajouter en footer:
```
"Photos: Unsplash & Pexels Contributors"
```

---

## 🔄 Alternatives Si Liens Cassés

Si une photo Unsplash/Pexels n'est plus disponible:

### Unsplash - Mots-clés de recherche
```
african business meeting
gabon office
corporate africa
handshake business
conference hall
professional training
networking event
```

### Pexels - Collections utiles
- "African Business": https://www.pexels.com/search/african%20business/
- "Corporate Meeting": https://www.pexels.com/search/corporate%20meeting/
- "Office Team": https://www.pexels.com/search/office%20team/

### Pixabay (Alternative complète)
- URL: https://pixabay.com
- Licence: CC0 (domaine public)
- Recherche similaire aux mots-clés ci-dessus

---

## 🎯 Images Temporaires (Développement)

Si vous voulez tester sans télécharger, utilisez les placeholders Unsplash:

```tsx
// Dans hero-slider-3d.tsx, remplacer temporairement:
image: "https://source.unsplash.com/1920x1080/?african,business"
image: "https://source.unsplash.com/1920x1080/?conference,office"
image: "https://source.unsplash.com/1920x1080/?training,seminar"
image: "https://source.unsplash.com/1920x1080/?networking,event"
image: "https://source.unsplash.com/1920x1080/?handshake,contract"
image: "https://source.unsplash.com/1920x1080/?documents,library"
```

**⚠️ Attention**: Ces URLs génèrent des images aléatoires à chaque chargement. **Ne pas utiliser en production**.

---

## 📊 Tableau Récapitulatif

| Slide | Fichier | Source | Photo ID | Taille |
|-------|---------|--------|----------|--------|
| 1 | hero-business-gabon.jpg | Unsplash | 4Mw7nkQDByk | 1920x1080 |
| 2 | hero-dialogue-institutions.jpg | Unsplash | 5fNmWej4tAA | 1920x1080 |
| 3 | hero-formation.jpg | Unsplash | QckxruozjRg | 1920x1080 |
| 4 | hero-networking.jpg | Unsplash | 1K6IQsQbizI | 1920x1080 |
| 5 | hero-member.jpg | Unsplash | Hcfwew744z4 | 1920x1080 |
| 6 | hero-publications.jpg | Unsplash | s9CC2SKySJM | 1920x1080 |

---

## 🚀 Prochaines Étapes

Après téléchargement des images:

1. ✅ Placer les 6 images dans `public/images/`
2. ✅ Vérifier les noms de fichiers
3. ✅ Tester le hero slider localement
4. ✅ Vérifier responsive (mobile, tablette, desktop)
5. ✅ Optimiser si nécessaire (< 300 KB/image)
6. ✅ Déployer en production

**Temps estimé**: 15-20 minutes pour téléchargement manuel + vérification

---

**Document créé le**: 21 août 2026
**Dernière mise à jour**: 21 août 2026
**Version**: 1.0
