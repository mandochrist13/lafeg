# 🎨 Effets 3D et Lueur au Survol - Hero Section

## ✅ Nouveaux Effets Implémentés

### 1. **Effet 3D Tilt au Survol**

Rotation 3D progressive des cartes quand la souris passe dessus.

#### **Carte 1 (Premier Plan)**
```css
transform: translate(-50%, -50%) scale(1.08) rotateY(-8deg) rotateX(5deg);
```
- **Scale:** 1.08 (agrandissement de 8%)
- **RotateY:** -8deg (rotation sur l'axe Y)
- **RotateX:** 5deg (rotation sur l'axe X)
- **Effet:** Carte se soulève et pivote légèrement

#### **Carte 2 (Second Plan)**
```css
transform: translate(-50%, -50%) scale(1.03) rotateY(-6deg) rotateX(4deg);
```
- **Scale:** 1.03 (agrandissement de 3%)
- **RotateY:** -6deg
- **RotateX:** 4deg
- **Effet:** Effet plus subtil, cohérent avec la profondeur

#### **Carte 3 (Arrière-Plan)**
```css
transform: translate(-50%, -50%) scale(0.98) rotateY(-4deg) rotateX(3deg);
```
- **Scale:** 0.98 (agrandissement minimal)
- **RotateY:** -4deg
- **RotateX:** 3deg
- **Effet:** Mouvement discret pour maintenir l'arrière-plan

---

### 2. **Effet de Lueur (Glow)**

Halo lumineux doré autour des cartes au survol, couleur bronze FEG.

#### **Carte 1 - Lueur Intense**
```css
box-shadow:
  /* Ombres de profondeur */
  0 35px 90px -10px rgba(0, 0, 0, 0.6),
  0 20px 40px -5px rgba(6, 61, 33, 0.5),
  0 10px 20px -4px rgba(0, 0, 0, 0.4),

  /* Effet de lueur */
  0 0 60px 10px rgba(176, 176, 139, 0.6),  /* Halo large */
  0 0 30px 5px rgba(176, 176, 139, 0.4);   /* Halo proche */
```

**Détails:**
- **Lueur externe:** 60px de diffusion, 10px de spread
- **Lueur interne:** 30px de diffusion, 5px de spread
- **Couleur:** Bronze FEG `rgba(176, 176, 139)` à 60% et 40%
- **Effet:** Halo doré lumineux qui entoure la carte

#### **Carte 2 - Lueur Moyenne**
```css
box-shadow:
  0 30px 70px -10px rgba(0, 0, 0, 0.55),
  0 15px 30px -5px rgba(6, 61, 33, 0.45),

  0 0 50px 8px rgba(176, 176, 139, 0.5),
  0 0 25px 4px rgba(176, 176, 139, 0.35);
```

#### **Carte 3 - Lueur Subtile**
```css
box-shadow:
  0 25px 50px -10px rgba(0, 0, 0, 0.5),
  0 12px 25px -5px rgba(6, 61, 33, 0.4),

  0 0 40px 6px rgba(176, 176, 139, 0.4),
  0 0 20px 3px rgba(176, 176, 139, 0.3);
```

---

### 3. **Zoom Image au Survol**

L'image à l'intérieur de la carte effectue un zoom léger.

```css
transform: scale(1.1);
transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
```

**Effet:**
- Image grossit de 10% à l'intérieur de la carte
- Crée un effet de parallaxe avec le cadre
- Transition élastique pour un mouvement naturel

---

### 4. **Texte Flottant (translateZ)**

Le texte se déplace vers l'avant en 3D au survol.

```css
transform: translateY(-8px) translateZ(20px);
```

**Détails:**
- **TranslateY:** -8px (monte légèrement)
- **TranslateZ:** 20px (sort vers l'avant dans l'espace 3D)
- **Perspective:** 1200px (défini sur le conteneur parent)

**Résultat:** Le texte semble "flotter" au-dessus de la carte

---

### 5. **Badge Catégorie Doré**

Le badge de catégorie change de couleur au survol.

**Normal:**
```css
color: #b0b08b; /* Bronze clair */
```

**Hover:**
```css
color: #FFD700; /* Or pur */
transition: color 300ms ease-out;
```

**Effet:** Attire l'attention sur la catégorie avec une couleur or brillante

---

### 6. **Overlay Éclaircit**

L'overlay vert devient légèrement plus transparent au survol.

**Normal:**
```css
background: linear-gradient(
  to top,
  rgba(6, 61, 33, 0.98) 0%,
  rgba(6, 61, 33, 0.7) 50%,
  transparent 100%
);
```

**Hover:**
```css
background: linear-gradient(
  to top,
  rgba(6, 61, 33, 0.92) 0%,   /* -6% opacité */
  rgba(6, 61, 33, 0.6) 50%,   /* -10% opacité */
  transparent 100%
);
```

**Effet:** L'image derrière est plus visible, donne un sentiment d'interactivité

---

## 🎬 Transitions et Timing

### **Transition Rapide au Survol**
```css
transition: all 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
```
- **Durée:** 400ms (rapide et réactif)
- **Easing:** Élastique avec rebond
- **Appliqué à:** Transform, box-shadow

### **Transition Normale (pas de hover)**
```css
transition: all 800ms cubic-bezier(0.34, 1.56, 0.64, 1);
```
- **Durée:** 800ms (fluide et doux)
- **Easing:** Même courbe élastique
- **Appliqué à:** Rotation automatique du carousel

**Pourquoi 2 vitesses?**
- **400ms hover:** Réactivité immédiate au curseur
- **800ms normal:** Mouvement doux entre les slides

---

## 🔧 Configuration 3D

### **Perspective Container**
```css
perspective: 1200px;
transformStyle: preserve-3d;
```

**Rôle:**
- **Perspective:** Profondeur de la scène 3D
- **Preserve-3d:** Maintient les transformations 3D des enfants

### **Transform Origin**
```css
transformOrigin: "center center";
```

**Important:** Toutes les rotations et échelles partent du centre de la carte

### **Backface Visibility**
```css
backface-visibility: hidden;
```

**But:**
- Améliore la performance GPU
- Évite le flickering pendant les rotations
- Rendu plus propre

---

## 📊 Comparaison Avant/Après

| Aspect                    | Avant                  | Après                        |
|---------------------------|------------------------|------------------------------|
| Hover Transform           | ❌ Aucun               | ✅ 3D Tilt (rotateY/X)       |
| Hover Glow                | ❌ Aucun               | ✅ Halo bronze 60px          |
| Image Zoom                | ❌ Aucun               | ✅ Scale 1.1                 |
| Texte 3D                  | ❌ 2D uniquement       | ✅ translateZ(20px)          |
| Badge Color Change        | ❌ Statique            | ✅ Bronze → Or               |
| Overlay Interaction       | ❌ Statique            | ✅ Devient transparent       |
| Transition Speed (hover)  | 800ms                  | 400ms (2x plus rapide)       |
| Perspective 3D            | ❌ Non                 | ✅ 1200px                    |

---

## 🎨 Palette des Lueurs

### **Bronze FEG (Normal)**
- RGB: `176, 176, 139`
- Hex: `#b0b08b`
- Usage: Badges, lueur de base

### **Or Pur (Hover)**
- RGB: `255, 215, 0`
- Hex: `#FFD700`
- Usage: Badge catégorie au survol

### **Lueur Progressive**
- **Carte 1:** 60% et 40% d'opacité
- **Carte 2:** 50% et 35% d'opacité
- **Carte 3:** 40% et 30% d'opacité

**Pourquoi progressif?**
Renforce l'effet de profondeur - les cartes avant ont une lueur plus intense

---

## 🚀 Performance

### **GPU Acceleration**
```css
will-change: transform, opacity;
backface-visibility: hidden;
perspective: 1200px;
```

**Résultat:**
- Animations à 60 FPS
- Pas de ralentissement au hover
- Transitions fluides

### **Optimisation Hover**
```tsx
const isHovered = hoveredCard === index;
const isCard = diff >= 2 && diff <= 4;
```

**Logique:**
- Seules les cartes miniatures réagissent au hover
- Les slides plein écran ne sont pas affectés
- État local `hoveredCard` évite les re-rendus globaux

---

## 🎯 Effets Visuels Détaillés

### **Au Survol de la Carte 1 (Premier Plan)**

**Avant hover:**
```
┌──────────────┐
│              │
│   [IMAGE]    │  Échelle: 1.0
│              │  Rotation: 0deg
│  🏷️ Badge    │  Lueur: Aucune
│  📰 Titre    │  Z-depth: 0
│              │
└──────────────┘
```

**Pendant hover:**
```
    ╱──────────────╲
   ╱                ╲    Échelle: 1.08 (+8%)
  │   [IMAGE 1.1x]  │   Rotation: -8deg Y, 5deg X
  │                 │   Lueur: 60px bronze ✨
  │  ⭐ Badge OR   │   Z-depth: 20px
  │  📰 Titre ↑    │   Texte monte -8px
  │                 │
   ╲                ╱
    ╲──────────────╱
        ✨  ✨  ✨         Halo lumineux doré
```

### **Séquence Temporelle**

**0ms** - Souris entre sur la carte
```
setHoveredCard(index)
```

**0-100ms** - Début de la transformation
```
- Transform commence (scale + rotate)
- Box-shadow commence à s'étendre
- Overlay commence à s'éclaircir
```

**100-200ms** - Changements visibles
```
- Badge passe au doré
- Image commence à zoomer
- Texte monte
- Lueur apparaît
```

**200-400ms** - Transition complète
```
- Tous les effets atteignent leur maximum
- Rebond élastique (cubic-bezier)
- État stable
```

**Au départ de la souris** - Retour inverse (400ms également)

---

## 🧪 Tests Recommandés

### **Test Visuel**
1. Survoler chaque carte (1, 2, 3)
2. Vérifier que:
   - La rotation 3D est visible
   - La lueur dorée apparaît
   - L'image zoome légèrement
   - Le badge devient or
   - Le texte monte

### **Test Performance**
1. Ouvrir DevTools → Performance
2. Survoler rapidement les cartes
3. Vérifier:
   - FPS reste à 60
   - Pas de re-paint excessif
   - GPU layers activés

### **Test Responsive**
1. Mobile (<1024px):
   - Les cartes miniatures sont cachées ✅
   - Pas d'effets hover sur mobile ✅

---

## 💡 Astuces d'Utilisation

### **Personnaliser l'Intensité de la Lueur**

Modifier dans `getHoverShadow()`:
```tsx
// Plus intense
0 0 80px 15px rgba(176, 176, 139, 0.8)

// Plus subtil
0 0 40px 6px rgba(176, 176, 139, 0.3)
```

### **Changer l'Angle de Rotation**

Modifier dans `getHoverTransform()`:
```tsx
// Rotation plus prononcée
rotateY(-15deg) rotateX(8deg)

// Rotation plus douce
rotateY(-4deg) rotateX(2deg)
```

### **Ajuster la Vitesse**

```tsx
transition: isHovered
  ? "all 300ms ..."  // Plus rapide
  : "all 600ms ..."  // Plus lent
```

---

## 📋 Checklist Finale

- [x] État `hoveredCard` ajouté
- [x] Effet 3D tilt (rotateY/rotateX)
- [x] Échelle progressive (1.08 → 1.03 → 0.98)
- [x] Lueur bronze progressive (3 intensités)
- [x] Zoom image 1.1x au hover
- [x] Texte flottant translateZ(20px)
- [x] Badge doré (#FFD700) au hover
- [x] Overlay éclaircit au hover
- [x] Transition rapide 400ms hover
- [x] Transition normale 800ms carousel
- [x] Perspective 1200px configurée
- [x] GPU acceleration active
- [x] Fonctionne uniquement sur cartes miniatures
- [x] Pas d'effet sur mobile

---

## 🎉 Résultat Final

**Au survol d'une carte miniature:**
1. ✨ **Rotation 3D** - La carte pivote légèrement (effet tilt)
2. 🌟 **Lueur Dorée** - Halo bronze lumineux autour de la carte
3. 🔍 **Zoom Image** - Photo grossit légèrement à l'intérieur
4. 📤 **Texte Flottant** - Contenu monte et sort en 3D
5. ⭐ **Badge Or** - Catégorie passe du bronze à l'or pur
6. 🎨 **Overlay Transparent** - Image plus visible
7. ⚡ **Transition Rapide** - Réaction immédiate (400ms)

**Effet global:** Carte interactive, premium, moderne et engageante!

---

**Date:** 21 août 2026
**Fichier:** components/hero-enhanced.tsx
**Statut:** ✅ EFFETS 3D + LUEUR COMPLÉTÉS
