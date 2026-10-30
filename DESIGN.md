---
name: Opulent Culinary Heritage
colors:
  surface: '#111412'
  surface-dim: '#111412'
  surface-bright: '#373a38'
  surface-container-lowest: '#0c0f0d'
  surface-container-low: '#191c1b'
  surface-container: '#1d201f'
  surface-container-high: '#282b29'
  surface-container-highest: '#323533'
  on-surface: '#e1e3e0'
  on-surface-variant: '#d7c2b8'
  inverse-surface: '#e1e3e0'
  inverse-on-surface: '#2e312f'
  outline: '#9f8d84'
  outline-variant: '#52443c'
  surface-tint: '#ffb68d'
  primary: '#ffb68d'
  on-primary: '#502405'
  primary-container: '#995e3b'
  on-primary-container: '#ffebe2'
  inverse-primary: '#88502e'
  secondary: '#f2ba9f'
  on-secondary: '#4a2715'
  secondary-container: '#673f2b'
  on-secondary-container: '#e3ac92'
  tertiary: '#8bd2d6'
  on-tertiary: '#003739'
  tertiary-container: '#2c777b'
  on-tertiary-container: '#b9fbff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbc9'
  primary-fixed-dim: '#ffb68d'
  on-primary-fixed: '#331200'
  on-primary-fixed-variant: '#6c391a'
  secondary-fixed: '#ffdbcb'
  secondary-fixed-dim: '#f2ba9f'
  on-secondary-fixed: '#311304'
  on-secondary-fixed-variant: '#643d29'
  tertiary-fixed: '#a7eff3'
  tertiary-fixed-dim: '#8bd2d6'
  on-tertiary-fixed: '#002021'
  on-tertiary-fixed-variant: '#004f53'
  background: '#111412'
  on-background: '#e1e3e0'
  surface-variant: '#323533'
  champagne-accent: '#D4AF37'
  deep-charcoal: '#040605'
  rich-earth: '#36463F'
  warm-bronze: '#6D4629'
  muted-terra: '#522E1B'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 28px
  body-lg:
    fontFamily: Mona Sans
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 28px
  body-md:
    fontFamily: Mona Sans
    fontSize: 15px
    fontWeight: '300'
    lineHeight: 24px
  body-sm:
    fontFamily: Mona Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-lg:
    fontFamily: Mona Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Mona Sans
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.15em
spacing:
  gutter: 2rem
  margin: 4rem
  space-xs: 0.5rem
  space-sm: 1rem
  space-md: 2rem
  space-lg: 4rem
  space-xl: 8rem
---

## Brand & Style

This design system embodies the essence of high-end fine dining, merging tactile luxury with a modern, restrained digital presence. The brand personality is exclusive, intimate, and impeccably refined. It evokes a feeling of anticipation, sophistication, and quiet confidence. 

We embrace a **Minimalism** approach infused with deep, dramatic contrast and atmospheric depth. Visual noise is eliminated in favor of pristine typography, abundant negative space, and deliberate, jewel-like color accents that guide the eye naturally through the culinary narrative.

## Colors

The palette is anchored by an absolute dark charcoal canvas (`#040605`), creating an immersive, theatre-like backdrop for culinary imagery. Warm bronze and champagne tones (`#995E3B`, `#6D4629`) function as primary accents to denote interactivity and status, while deep organic undertones provide subtle nuance. Color is used sparingly—reserved exclusively for focal points, active states, and editorial highlights.

## Typography

Typography establishes an immediate sense of timeless elegance. Editorial serif headings in **Playfair Display** command attention with generous proportions and high contrast, while **Mona Sans** delivers razor-sharp legibility for body copy and UI elements. Letter-spacing is intentionally widened for small uppercase labels to evoke classical print luxury.

## Layout & Spacing

The layout follows a **fluid grid** model paired with generous, deliberate whitespace to mirror the atmosphere of a physical luxury dining space. 

- **Breakpoints:** Mobile (< 768px), Tablet (768px – 1200px), Desktop (> 1200px).
- **Margins:** Outer canvas margins scale from 1.5rem on mobile to 4rem+ on desktop, ensuring content remains centered and uncrowded.
- **Rhythm:** Vertical rhythm relies on multi-ples of 8px, heavily favoring expansive section gaps (`space-xl`) to isolate key visual moments, menus, and reservation CTAs.

## Elevation & Depth

Depth is achieved through **tonal layering** and ultra-low-opacity ambient lighting rather than heavy drop shadows. Surfaces sit on staggered charcoal elevations, utilizing subtle border gradients (ghost borders using 10% white or bronze) to separate interactive cards from the background canvas. This maintains a flat, ultra-modern aesthetic while preserving spatial hierarchy.

## Shapes

The design system enforces strict **sharp (0px roundedness)** geometry across all structural containers, buttons, and image frames. Sharp edges project a crisp, architectural precision that complements the classical serifs and feels distinctly high-fashion and uncompromising.

## Components

### Buttons
Primary buttons feature sharp rectangular boundaries, solid bronze or champagne backgrounds with dark text, and subtle high-contrast hover inversions. Secondary buttons utilize ghost borders with transparent fills and tracking-expanded uppercase labels.

### Input Fields
Forms rely on bottom-border-only text fields or stark, border-defined boxes with generous internal padding. Focus states illuminate the input with a soft bronze glow against the dark charcoal canvas.

### Cards
Menu items, tasting journeys, and press highlights are housed within border-defined grid cards. Imagery bleeds edge-to-edge with no border radius, paired with clean typography offset by ample negative space.

### Additional Components
- **Reservations Widget:** A multi-step, distraction-free modal overlay for date, time, and party selection.
- **Tasting Menu Accordion:** Expandable course listings featuring delicate divider lines and minimalist numbering.