# Design Implementation - FEG Website

## Overview
This document describes the implementation of two key visual patterns integrated into the FEG website, following the approved mockup design.

---

## 1. News Ticker Banner with Featured Article Overlay

### Location
- **Component**: [components/hero-editorial.tsx](components/hero-editorial.tsx)
- **Page**: Homepage (app/(user)/page.tsx)

### Visual Features

#### News Ticker Banner
A ribbon-style banner positioned above the featured article:

```css
.news-flag {
  background: var(--green-primary);
  color: #fff;
  clip-path: polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%);
}
```

- **Pure CSS implementation** using `clip-path` polygon (no SVG/images)
- Green background (#063d21) with white text
- Arrow-shaped right edge creating a modern banner effect
- Displays: "ACTUALITÉ" label + featured article title

#### Featured Article with Direct Overlay
The article title and metadata are displayed **directly on the photo** instead of separately below:

```css
.featured-overlay {
  background: linear-gradient(0deg,
    rgba(4,26,15,0.96) 15%,
    rgba(4,26,15,0.55) 60%,
    transparent 100%);
}
```

**Key elements:**
- Dark green gradient overlay ensures text readability on any photo
- Bronze-colored category tag
- White title text (26px on desktop)
- White metadata (date + read link)
- Underlined "Lire l'article →" link with hover effect

### Data Structure
```typescript
interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  link: string;
  featured?: boolean;
}
```

### Responsive Behavior
- **Desktop**: Full-height banner (450px) with clear text overlay
- **Mobile**: Reduced height (320px), text remains readable
- Banner ribbon adapts with padding adjustments
- Title truncates gracefully with `max-w-[24ch]`

---

## 2. 3D Publication Covers (Magazine-Style)

### Location
- **Component**: [components/publication-cover-3d.tsx](components/publication-cover-3d.tsx) (new)
- **Integration**: [components/publication.tsx](components/publication.tsx)

### Visual Features

Publications are displayed as **tangible 3D objects** (book/magazine covers) rather than flat thumbnails:

```css
.cover {
  transform: rotateY(-22deg) rotateX(3deg);
  box-shadow: 26px 22px 30px -14px rgba(5,38,23,0.4);
  border-radius: 1px 5px 5px 1px;
}
```

**3D Effect breakdown:**
- **Perspective**: CSS `perspective: 900px` creates depth
- **Rotation**: `rotateY(-22deg)` + `rotateX(3deg)` for realistic angle
- **Shadow**: Pronounced shadow on bottom-right simulates lift from surface
- **Border radius**: Asymmetric (sharper left edge for spine, rounded right for pages)
- **Spine**: Left edge has gradient overlay simulating book thickness

#### Cover Content (Generated Dynamically)

When no custom cover image exists, covers are generated with:
- **Background**: Green gradient (`from-primary to-[#05261a]`)
- **Top**: Category label in bronze (uppercase, small)
- **Middle**: Document title in Source Serif 4 font (serif, bold)
- **Bottom**: "FEG · [Date]" footer

```tsx
<PublicationCover3D
  title="Lettre Circulaire Dette intérieure"
  category="Circulaires"
  date="15 mars 2025"
  customCoverImage="/path/to/custom/cover.jpg" // optional
/>
```

### Hover Interaction
```css
.cover:hover {
  transform: rotateY(-14deg) rotateX(2deg); /* Slightly straightens */
}
```

- Cover "straightens" slightly on hover (reduces Y-rotation)
- Smooth 300ms transition
- Maintains tangible object feeling

### Typography
- **Font**: Source Serif 4 (imported via Next.js Google Fonts)
- **Config**: Added to [tailwind.config.ts](tailwind.config.ts:26-28) as `font-serif`
- **Usage**: Provides editorial, magazine-like quality

### Responsive Behavior

**Desktop** (default):
- Rotation: `rotateY(-22deg) rotateX(3deg)`
- Full shadow effect
- Clear text on cover

**Mobile** (< 640px):
```css
@media (max-width: 640px) {
  .publication-cover {
    transform: rotateY(-10deg) rotateX(2deg); /* Less rotation */
  }
}
```

- **Reduced rotation angle** (-10deg vs -22deg) ensures text remains readable
- Maintains 3D effect without sacrificing usability
- Cover text scales appropriately (13px → 14px on larger screens)

### Custom Cover Images
The component supports real cover designs:

```tsx
<PublicationCover3D
  title="Rapport Annuel 2024"
  category="Rapports"
  date="2024"
  customCoverImage="/images/covers/rapport-2024.jpg"
/>
```

When `customCoverImage` is provided:
- Image replaces generated gradient background
- 3D effect and shadow remain identical
- Perspective/rotation preserved

---

## Design System Compliance

### Colors Used
- **Primary Green**: `#063d21` (banners, gradients, overlays)
- **Bronze**: `#b0b08b` (category tags, accents - used sparingly)
- **Text**: White on dark backgrounds, dark gray on light
- **No orange/red** (except PDF icon which is standard convention)

### Consistency
- Both patterns integrate seamlessly with existing design
- Typography matches site-wide system (Inter for body, Source Serif for editorial)
- Spacing follows existing grid (gap-6, gap-8, padding standards)
- Hover effects align with site-wide duration (300ms transitions)

---

## Technical Implementation Notes

### Pure CSS Approach
- **No JavaScript libraries** for 3D (Three.js, etc.)
- **No image generation** - all effects are CSS transforms + gradients
- Lightweight and performant
- Works with or without JavaScript enabled

### Accessibility
- Text contrast verified (dark green gradient ensures WCAG compliance)
- Alt text on images
- Keyboard navigation maintained
- Focus states preserved

### Browser Support
- Modern browsers (last 2 versions)
- CSS `clip-path` and 3D transforms widely supported
- Graceful degradation: covers still readable if transforms fail

---

## Files Modified

### Created
- `components/publication-cover-3d.tsx` - Reusable 3D cover component

### Modified
- `components/hero-editorial.tsx` - Added news ticker + direct overlay
- `components/publication.tsx` - Integrated 3D covers
- `app/layout.tsx` - Added Source Serif 4 font
- `tailwind.config.ts` - Added serif font family

---

## Data Integration

Both components are **CMS-ready**:

### News Ticker
Currently uses static data in `hero-editorial.tsx`:
```typescript
const featuredNews: NewsItem = { /* ... */ };
```

**To connect to CMS**: Replace static data with API call or props from parent component.

### Publication Covers
Currently uses static array in `publication.tsx`:
```typescript
const publications = [/* ... */];
```

**To connect to CMS**:
1. Fetch publications from backend/CMS
2. Map data to include `customCoverImage` field when available
3. Component automatically handles generated vs. custom covers

---

## Testing Checklist

- [x] News ticker ribbon displays correctly (polygon clip-path)
- [x] Featured article overlay text is readable on all sample images
- [x] 3D publication covers render with proper perspective
- [x] Hover effects work smoothly (both components)
- [x] Mobile: Banner text doesn't overflow/truncate awkwardly
- [x] Mobile: Cover text remains legible with reduced rotation
- [x] Source Serif font loads correctly
- [ ] Test with real/varied publication cover images
- [ ] Verify performance with 20+ publications
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

---

## Future Enhancements

### News Ticker
- Auto-rotate through multiple recent news items (ticker carousel)
- Smooth slide animation between articles
- Pause on hover

### Publication Covers
- Support for different aspect ratios (landscape reports, square brochures)
- Color-coded covers by category (Circulaires = green, Rapports = bronze, etc.)
- Spine text (visible when tilted)
- Page edge texture (subtle gradient)

---

## Maintenance

### Updating News Ticker Content
Edit `components/hero-editorial.tsx`:
```typescript
const featuredNews: NewsItem = {
  title: "New article title",
  imageUrl: "/path/to/image.jpg",
  // ...
};
```

### Adding New Publications
Edit `components/publication.tsx`:
```typescript
const publications = [
  {
    id: 7,
    title: "New Document Title",
    category: "Rapports",
    date: "2025",
    // ... other fields
  },
  // ...
];
```

### Customizing 3D Effect
Adjust in `components/publication-cover-3d.tsx`:
```css
transform: rotateY(-22deg) rotateX(3deg); /* Change angles */
box-shadow: 26px 22px 30px -14px rgba(...); /* Adjust shadow */
```

---

## Support

For issues or questions about these implementations:
1. Review this documentation
2. Check component files for inline comments
3. Verify Tailwind classes in [tailwind.config.ts](tailwind.config.ts)
4. Test responsive behavior at breakpoints: 640px, 768px, 1024px

**Color variables reference**: [tailwind.config.ts:38-53](tailwind.config.ts:38-53)
