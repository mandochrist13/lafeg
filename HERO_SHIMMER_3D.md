# ✨ Effet Shimmer + 3D Interactif - Hero Section

## 🎯 Nouveaux Effets Implémentés

### 1. **Effet Shimmer (Reflet Lumineux)**

Un reflet lumineux blanc qui suit la position du curseur sur la carte.

#### **Technique:**
```tsx
// Shimmer qui suit le curseur
<div
  style={{
    background: `radial-gradient(
      circle 150px at ${shimmerPos.x}% ${shimmerPos.y}%,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 60%
    )`,
  }}
/>
```

**Caractéristiques:**
- **Rayon:** 150px
- **Couleur:** Blanc semi-transparent (30% opacité)
- **Position:** Suit le curseur en temps réel
- **Dégradé:** Radial, disparaît à 60% du rayon

**Effet visuel:**
```
      Curseur
         ↓
    ╭────●────╮
    │  ✨✨✨  │  ← Reflet blanc lumineux
    │ ✨  ✨  │  ← Suit la souris
    │  ✨✨✨  │
    ╰─────────╯
```

---

### 2. **3D Interactif (Suit le Curseur)**

La carte pivote en 3D selon la position du curseur sur celle-ci.

#### **Logique de Calcul:**

**Étape 1: Capture position souris**
```tsx
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;  // 0 to 1
  const y = (e.clientY - rect.top) / rect.height;  // 0 to 1

  // Convert to -1 to 1 range (centered)
  const normalizedX = (x - 0.5) * 2;
  const normalizedY = (y - 0.5) * 2;

  setMousePosition({ x: normalizedX, y: normalizedY });
};
```

**Étape 2: Calculer rotations**
```tsx
const rotateY = -x * 20 * intensity; // Max ±20deg
const rotateX = y * 15 * intensity;  // Max ±15deg
```

**Étape 3: Appliquer transform**
```tsx
transform: `translate(-50%, -50%) scale(${scale}) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
```

---

### 3. **Positions du Curseur → Rotations**

#### **Curseur en Haut à Gauche**
```
┌─────────────┐
│ ●           │  ← Curseur (x=-1, y=-1)
│             │
│             │
│      👁️     │  ← Point de vue
│             │
└─────────────┘

Rotation:
- rotateY: +20deg (carte pivote vers la droite)
- rotateX: -15deg (carte pivote vers le haut)

Effet: La carte se "relève" et pivote à droite
```

#### **Curseur en Haut à Droite**
```
┌─────────────┐
│           ● │  ← Curseur (x=+1, y=-1)
│             │
│             │
│      👁️     │
│             │
└─────────────┘

Rotation:
- rotateY: -20deg (carte pivote vers la gauche)
- rotateX: -15deg (carte pivote vers le haut)

Effet: La carte se "relève" et pivote à gauche
```

#### **Curseur en Bas à Gauche**
```
┌─────────────┐
│             │
│             │
│      👁️     │
│             │
│ ●           │  ← Curseur (x=-1, y=+1)
└─────────────┘

Rotation:
- rotateY: +20deg (carte pivote vers la droite)
- rotateX: +15deg (carte pivote vers le bas)

Effet: La carte "plonge" et pivote à droite
```

#### **Curseur en Bas à Droite**
```
┌─────────────┐
│             │
│             │
│      👁️     │
│             │
│           ● │  ← Curseur (x=+1, y=+1)
└─────────────┘

Rotation:
- rotateY: -20deg (carte pivote vers la gauche)
- rotateX: +15deg (carte pivote vers le bas)

Effet: La carte "plonge" et pivote à gauche
```

#### **Curseur au Centre**
```
┌─────────────┐
│             │
│             │
│      ●      │  ← Curseur (x=0, y=0)
│      👁️     │
│             │
└─────────────┘

Rotation:
- rotateY: 0deg (pas de rotation horizontale)
- rotateX: 0deg (pas de rotation verticale)

Effet: Carte face à l'utilisateur (neutre)
```

---

### 4. **Intensité Progressive selon Profondeur**

L'effet 3D est moins intense pour les cartes en arrière-plan.

| Carte | Diff | Intensité | RotateY Max | RotateX Max | Scale Hover |
|-------|------|-----------|-------------|-------------|-------------|
| 1     | 2    | 100%      | ±20deg      | ±15deg      | 1.05        |
| 2     | 3    | 70%       | ±14deg      | ±10.5deg    | 1.0         |
| 3     | 4    | 50%       | ±10deg      | ±7.5deg     | 0.95        |

**Pourquoi progressif?**
- Les cartes avant réagissent plus fortement (effet premium)
- Les cartes arrière bougent doucement (maintient la hiérarchie)
- Renforce la perception de profondeur 3D

---

## 🎬 Démonstration Visuelle

### **État Normal (Sans Survol)**
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│          │  │          │  │          │
│  [IMG]   │  │  [IMG]   │  │  [IMG]   │
│          │  │          │  │          │
│  Badge   │  │  Badge   │  │  Badge   │
│  Titre   │  │  Titre   │  │  Titre   │
└──────────┘  └──────────┘  └──────────┘
  Carte 1       Carte 2       Carte 3
```

### **Survol - Curseur en Haut à Droite**
```
Curseur ● ────┐
              ▼
         ╱────────╲
        ╱          ╲     ← Rotation 3D
       │  ✨  [IMG] │    ← Shimmer suit curseur
       │ ✨ ✨      │    ← Zoom 1.05x
       │  Badge    │
       │  Titre ↑  │    ← Texte monte
        ╲          ╱
         ╲────────╱

  rotateY: -20deg (pivote gauche)
  rotateX: -15deg (relève)
  Shimmer: Haut-droite
```

### **Survol - Curseur se Déplace**
```
Mouvement du curseur:

  ●  →  →  →  ●
  ↓           ↓
  ●  ←  ←  ←  ●

┌──────────┐
│ ✨       │  Shimmer suit
│    ✨    │  le mouvement
│       ✨ │  du curseur
│          │
└──────────┘

Carte pivote en temps réel
selon position curseur!
```

---

## 💻 Code Clé

### **1. Tracking Position Souris**
```tsx
const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  const normalizedX = (x - 0.5) * 2;  // -1 to 1
  const normalizedY = (y - 0.5) * 2;  // -1 to 1

  setMousePosition({ x: normalizedX, y: normalizedY });
};
```

### **2. Calcul Rotation 3D**
```tsx
const get3DTransform = () => {
  if (!isHovered || !mousePosition) return style.transform;

  const { x, y } = mousePosition;

  // Intensité selon profondeur
  let intensity = diff === 2 ? 1 : diff === 3 ? 0.7 : 0.5;

  // Rotations
  const rotateY = -x * 20 * intensity;
  const rotateX = y * 15 * intensity;

  // Scale
  const scale = diff === 2 ? 1.05 : diff === 3 ? 1.0 : 0.95;

  return `translate(-50%, -50%) scale(${scale}) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
};
```

### **3. Shimmer Radial**
```tsx
const getShimmerPosition = () => {
  if (!isHovered || !mousePosition) return { x: -100, y: -100 };

  const { x, y } = mousePosition;
  return {
    x: ((x + 1) / 2) * 100,  // -1~1 → 0~100%
    y: ((y + 1) / 2) * 100,
  };
};

const shimmerPos = getShimmerPosition();

// Rendu
<div
  style={{
    background: `radial-gradient(
      circle 150px at ${shimmerPos.x}% ${shimmerPos.y}%,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 60%
    )`
  }}
/>
```

### **4. Handlers d'Événements**
```tsx
<div
  onMouseEnter={() => setHoveredCard(index)}
  onMouseLeave={() => {
    setHoveredCard(null);
    setMousePosition(null);  // Reset position
  }}
  onMouseMove={handleMouseMove}  // Track curseur
>
```

---

## ⚡ Performance

### **Optimisations Appliquées**

**1. Transition Sélective**
```tsx
transition: isHovered
  ? "box-shadow 300ms ease-out"  // Seulement ombre au hover
  : "all 800ms cubic-bezier(...)" // Tout au carousel
```

**Pourquoi?**
- Transform n'a PAS de transition au hover
- Rotation 3D suit curseur instantanément (0ms)
- Plus réactif et fluide

**2. GPU Acceleration**
```css
will-change: transform, opacity;
backface-visibility: hidden;
perspective: 1200px;
```

**3. Pas de Transition sur Shimmer**
```tsx
transition: "none"  // Shimmer suit curseur sans délai
```

---

## 🎨 Effets Combinés

### **Au Survol d'une Carte:**

1. ✅ **Rotation 3D** - Suit la position du curseur
2. ✨ **Shimmer** - Reflet lumineux qui suit le curseur
3. 🔍 **Zoom** - Image grossit à 1.05x
4. 📤 **Texte monte** - Content monte de 4px
5. ⚡ **Instantané** - Pas de délai, réactivité maximale

### **Différence avec Version Précédente:**

| Aspect              | Avant (Lueur)          | Après (Shimmer)        |
|---------------------|------------------------|------------------------|
| Effet lumineux      | Halo doré statique     | Reflet qui suit souris |
| Rotation 3D         | Fixe (-8deg, 5deg)     | Suit position curseur  |
| Réactivité          | 400ms transition       | Instantané (0ms)       |
| Badge couleur       | Bronze → Or            | Bronze (constant)      |
| TranslateZ texte    | 20px                   | 0px (removed)          |
| Interactivité       | Moyenne                | Très haute             |

---

## 📊 Formules Mathématiques

### **Normalisation Position**

**Input:** Position pixel du curseur
**Output:** Coordonnées -1 à 1

```
x_pixel = position du curseur en X
rect_width = largeur de la carte

x_normalized = ((x_pixel / rect_width) - 0.5) * 2

Exemples:
- Curseur à 0px (gauche)     → x = -1
- Curseur à width/2 (centre) → x = 0
- Curseur à width (droite)   → x = +1
```

### **Calcul Rotation**

**RotateY (horizontal):**
```
rotateY = -x * 20° * intensity

Exemples (intensity = 1):
- x = -1 (gauche) → rotateY = +20° (pivote droite)
- x = 0 (centre)  → rotateY = 0°
- x = +1 (droite) → rotateY = -20° (pivote gauche)
```

**RotateX (vertical):**
```
rotateX = y * 15° * intensity

Exemples (intensity = 1):
- y = -1 (haut) → rotateX = -15° (relève)
- y = 0 (centre) → rotateX = 0°
- y = +1 (bas)  → rotateX = +15° (plonge)
```

### **Position Shimmer (0-100%)**

```
shimmer_x = ((x + 1) / 2) * 100

Exemples:
- x = -1 → shimmer_x = 0%
- x = 0  → shimmer_x = 50%
- x = +1 → shimmer_x = 100%
```

---

## 🎯 Cas d'Usage

### **Exemple 1: Curseur en Haut à Gauche**
```
Position: x = -0.8, y = -0.7

Calculs (Carte 1, intensity = 1):
- rotateY = -(-0.8) * 20 = +16deg  → Pivote droite
- rotateX = (-0.7) * 15 = -10.5deg → Relève
- shimmer_x = ((-0.8 + 1) / 2) * 100 = 10%
- shimmer_y = ((-0.7 + 1) / 2) * 100 = 15%

Résultat visuel:
- Carte se relève et pivote à droite
- Shimmer en position haut-gauche (10%, 15%)
```

### **Exemple 2: Curseur au Centre-Droit**
```
Position: x = 0.5, y = 0

Calculs (Carte 2, intensity = 0.7):
- rotateY = -(0.5) * 20 * 0.7 = -7deg    → Pivote gauche
- rotateX = (0) * 15 * 0.7 = 0deg        → Pas de tilt vertical
- shimmer_x = ((0.5 + 1) / 2) * 100 = 75%
- shimmer_y = ((0 + 1) / 2) * 100 = 50%

Résultat visuel:
- Carte pivote légèrement à gauche
- Pas de rotation verticale
- Shimmer au centre-droit (75%, 50%)
```

---

## 🚀 Test et Démo

### **Pour Tester:**

1. Lancez le serveur:
```bash
start-clean.bat
```

2. Ouvrez:
```
http://localhost:3000
```

3. Passez la souris sur une carte miniature et:
   - **Déplacez vers le haut** → Carte se relève
   - **Déplacez vers le bas** → Carte plonge
   - **Déplacez à gauche** → Carte pivote à droite
   - **Déplacez à droite** → Carte pivote à gauche
   - **Tracez des cercles** → Carte suit votre mouvement!
   - Observez le **reflet blanc** qui suit le curseur ✨

---

## 📋 Checklist

- [x] État mousePosition ajouté
- [x] Handler onMouseMove implémenté
- [x] Calcul normalisation position (-1 à 1)
- [x] Calcul rotations 3D selon curseur
- [x] Intensité progressive (100% → 70% → 50%)
- [x] Shimmer radial qui suit curseur
- [x] Pas de transition sur transform (0ms)
- [x] Zoom image 1.05x
- [x] Reset position au mouseLeave
- [x] GPU acceleration active
- [x] Performance optimisée

---

## ✨ Résultat Final

**Effet Shimmer:**
- Reflet blanc lumineux (30% opacité)
- Suit le curseur en temps réel
- Rayon 150px avec dégradé radial
- Aucun délai (transition: none)

**Effet 3D Interactif:**
- Rotation selon position curseur
- Max ±20deg horizontal, ±15deg vertical
- Intensité progressive selon profondeur
- Réponse instantanée (0ms transition)
- Transformation depuis le centre

**Combinaison:**
Un effet **premium et interactif** qui donne vie aux cartes! 🎉

---

**Date:** 21 août 2026
**Fichier:** components/hero-enhanced.tsx
**Statut:** ✅ SHIMMER + 3D INTERACTIF IMPLÉMENTÉS
