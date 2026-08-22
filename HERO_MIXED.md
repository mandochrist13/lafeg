# ✅ Hero Section - Slides & Actualités Mélangés

## 🎯 Design Final

Tous les **slides** (6) et **actualités** (3) sont maintenant **mélangés ensemble** dans un seul carousel unifié de **9 items**!

---

## 📐 Structure

```
┌──────────────────────────────────────────┐
│                                          │
│  CAROUSEL UNIFIÉ (9 items mélangés)     │
│                                          │
│  ┌─────────────────────┐                │
│  │                     │                │
│  │  ITEM PRINCIPAL     │    ┌─┐         │
│  │  (Background)       │    │2│         │
│  │                     │    └─┘         │
│  └─────────────────────┘                │
│                             ┌─┐         │
│  ┌─────────────────────┐    │3│         │
│  │                     │    └─┘         │
│  │  ITEM AVEC CONTENU  │                │
│  │  (Foreground)       │    ┌─┐         │
│  │                     │    │4│         │
│  │  • Badge            │    └─┘         │
│  │  • Titre            │                │
│  │  • Description      │    ┌─┐         │
│  │  • Bouton CTA       │    │5│         │
│  │                     │    └─┘         │
│  └─────────────────────┘                │
│                                          │
│  [←] [●●●●●●●○○] [→]                    │
│        ↑                                 │
│     9 indicateurs                        │
│  (6 slides + 3 actualités)               │
└──────────────────────────────────────────┘
```

---

## 🔄 Composition du Carousel

### Items Mélangés (9 total)

```javascript
const allItems = [
  // 6 SLIDES
  {id: 1, title: "Gabon Economic Forum 2026", category: "ÉVÉNEMENT MAJEUR", ...},
  {id: 2, title: "Dialogue avec les Institutions", category: "INFLUENCE", ...},
  {id: 3, title: "Formation & Accompagnement", category: "SERVICES", ...},
  {id: 4, title: "Événements & Networking", category: "ÉVÉNEMENTS", ...},
  {id: 5, title: "Devenez Membre", category: "ADHÉSION", ...},
  {id: 6, title: "Publications & Ressources", category: "RESSOURCES", ...},

  // 3 ACTUALITÉS
  {id: 7, title: "Table ronde refinancement...", category: "Événements", ...},
  {id: 8, title: "Assises nationales emploi...", category: "Événements", ...},
  {id: 9, title: "Forum innovation Libreville...", category: "Agenda", ...},
];
```

### Ordre de Rotation

1. → Slide 1 (Gabon Economic Forum)
2. → Slide 2 (Dialogue Institutions)
3. → Slide 3 (Formation)
4. → Slide 4 (Networking)
5. → Slide 5 (Devenir Membre)
6. → Slide 6 (Publications)
7. → **Actualité 1** (Table ronde)
8. → **Actualité 2** (Assises emploi)
9. → **Actualité 3** (Forum innovation)
10. → Recommence au Slide 1...

---

## 🎨 Affichage Uniforme

### Tous les Items Utilisent le Même Style

**Cartes Miniatures** (positions 2-5):
- Dimensions: 200×300px
- Overlay: Gradient vert
- Badge bronze + titre blanc
- Hover: Overlay éclaircit

**Item Principal** (position 0):
- Full screen (background)
- Image visible sans contenu

**Item Avec Contenu** (position 1):
- Full screen (foreground)
- Overlay sombre
- Badge catégorie
- Titre + sous-titre + description
- Bouton CTA

---

## 🎬 Comportement

### Auto-rotation
- **Intervalle**: 6 secondes
- **Pause**: Au survol de la souris
- **Loop**: Infini (9 → 1 → 9...)

### Navigation
- **Boutons**: Précédent / Suivant
- **Indicateurs**: 9 dots cliquables
- **Clavier**: Flèches gauche/droite (si activé)

### Transitions
- **Durée**: 600ms
- **Easing**: ease-in-out
- **Transform origin**: center center (scale depuis centre)

---

## 📊 Différences Slides vs Actualités

| Propriété | Slides (6) | Actualités (3) | Résultat |
|-----------|-----------|----------------|----------|
| **Image source** | slide.image | news.imageUrl → item.image | ✅ Unifié |
| **Titre** | slide.title | news.title | ✅ Même champ |
| **Catégorie** | slide.category | news.category | ✅ Même champ |
| **Sous-titre** | slide.subtitle | news.category → item.subtitle | ✅ Adapté |
| **Description** | slide.description | news.date → item.description | ✅ Adapté |
| **CTA** | slide.ctaText | "Lire plus" | ✅ Standardisé |
| **Lien** | slide.link | news.link | ✅ Même champ |
| **Affichage** | Identique | Identique | ✅ Uniforme |

---

## 💻 Code Clé

### Fusion des Tableaux

```tsx
const allItems = [
  ...slides,
  ...recentNews.map(news => ({
    ...news,
    image: news.imageUrl,          // Normaliser le nom
    subtitle: news.category,        // Catégorie → Sous-titre
    description: `${news.date}`,    // Date → Description
    ctaText: "Lire plus",           // CTA standardisé
  }))
];
```

### Utilisation dans le Rendu

```tsx
{allItems.map((item, index) => {
  const diff = (index - currentIndex + allItems.length) % allItems.length;
  // Même logique pour tous (slides + actualités)
  return <div>{/* Rendu uniforme */}</div>
})}
```

### Navigation Mise à Jour

```tsx
// Basé sur allItems.length (9) au lieu de slides.length (6)
const handleNext = () => {
  setCurrentIndex((prev) => (prev + 1) % allItems.length); // 0-8
};
```

---

## ✅ Avantages du Design Mélangé

### 1. **Expérience Utilisateur Fluide**
- Un seul carousel cohérent
- Pas de séparation gauche/droite
- Navigation intuitive

### 2. **Mise en Valeur des Actualités**
- Les actualités apparaissent dans le flux principal
- Même visibilité que les slides éditoriaux
- Augmente clics sur actualités

### 3. **Simplicité Visuelle**
- Layout unifié
- Pas de colonnes multiples
- Focus sur le contenu

### 4. **Maintenance Simplifiée**
- Un seul tableau de données
- Logique unique de rotation
- Code plus DRY (Don't Repeat Yourself)

---

## 🎯 Ordre Recommandé (Personnalisable)

### Option A: Intercaler (Actuel)
```
Slide 1 → Slide 2 → Slide 3 → Slide 4 → Slide 5 → Slide 6 →
Actu 1 → Actu 2 → Actu 3 → Loop
```

### Option B: Alternance
```javascript
const allItems = [
  slides[0],
  recentNews[0],
  slides[1],
  recentNews[1],
  slides[2],
  recentNews[2],
  slides[3],
  slides[4],
  slides[5],
];
```
Résultat: Slide → Actu → Slide → Actu...

### Option C: Actualités en Premier
```javascript
const allItems = [
  ...recentNews,  // Actualités d'abord
  ...slides,      // Puis slides
];
```

---

## 🔧 Personnalisation

### Changer l'Ordre

Éditer `components/hero-enhanced.tsx` lignes 137-144:

```tsx
// Ordre actuel: slides puis actualités
const allItems = [...slides, ...recentNews.map(...)];

// Ordre inversé: actualités puis slides
const allItems = [...recentNews.map(...), ...slides];

// Ordre personnalisé: intercaler
const allItems = [
  slides[0],
  slides[1],
  recentNews[0],
  slides[2],
  recentNews[1],
  // ... etc
];
```

### Ajouter Plus d'Actualités

```tsx
const recentNews: NewsItem[] = [
  // ... 3 actualités existantes
  {
    id: 4,
    title: "Nouvelle actualité",
    date: "21 août 2026",
    category: "Communiqués",
    link: "/actualites/nouvelle",
    imageUrl: "/images/nouvelle.jpg",
  },
];
// Résultat: 10 items au total (6 slides + 4 actualités)
```

---

## 🚀 Pour Tester

```bash
npm run dev
```

Ouvrir: **http://localhost:3000**

### Vérifications

1. ✅ **9 indicateurs** en bas (6 + 3)
2. ✅ **Rotation automatique** toutes les 6 secondes
3. ✅ **Pause** au survol
4. ✅ **Actualités** apparaissent après les slides
5. ✅ **Même style** pour tous (slides + actualités)
6. ✅ **Navigation fluide** (boutons prev/next)

### Tester l'Ordre

- Attendre que le carousel atteigne le 7e item
- C'est la **première actualité** (Table ronde)
- Puis 8e item = **2e actualité** (Assises emploi)
- Puis 9e item = **3e actualité** (Forum innovation)
- Puis retour au slide 1 (Gabon Economic Forum)

---

## 📊 Statistiques

- **Total items**: 9 (6 slides + 3 actualités)
- **Durée cycle complet**: 54 secondes (9 × 6s)
- **Indicateurs**: 9 dots
- **Cartes visibles simultanément**: 6 (2 full + 4 mini)
- **Auto-rotation**: Oui (6s intervalle)
- **Responsive**: Cartes mini cachées mobile

---

## 🎉 Résultat

Vous avez maintenant:

✅ **Un seul carousel unifié** (pas de séparation gauche/droite)
✅ **9 items mélangés** (6 slides + 3 actualités)
✅ **Style identique** pour tous les items
✅ **Rotation fluide** à travers tout le contenu
✅ **Actualités intégrées** dans le flux principal
✅ **Navigation cohérente** (9 indicateurs)
✅ **Expérience utilisateur optimale**

**Le hero section est complet et unifié!** 🎊

---

**Fichier**: [components/hero-enhanced.tsx](components/hero-enhanced.tsx)

**Lignes clés**:
- Fusion arrays: 137-144
- Rendu unifié: 242-288
- Navigation: 146-158, 368-385

---

**Créé le**: 21 août 2026
**Version**: 5.0 (Mélangé/Unifié)
**Statut**: ✅ Production Ready
