# La Revi — Michelin Three Stars Haute Cuisine & Cellar

An opulent, fully responsive web application transformed from the Google Stitch design package into a production-grade luxury dining digital experience.

## ✨ Features & Capabilities

- **Opulent Brand Aesthetic**: Strict adherence to the `DESIGN.md` specification (`#111412` dark charcoal canvas, `#ffb68d` bronze and `#D4AF37` champagne accents, Playfair Display typography, sharp 0px geometry).
- **Interactive Seasonal Tasting Menus**:
  - Filterable by Category: *All Creations*, *Starters (Entrées)*, *Mains (Plats)*, *Desserts & Fromages*, *Cellar & Cocktails*.
  - Live Currency Conversion: Switch instantly between **USD ($)**, **EUR (€)**, **GBP (£)**, and **JPY (¥)**.
  - Interactive Dish Modals: High-resolution view, flavor profile, chef's notes, ingredient provenance, and sommelier pairing recommendations.
  - Quick action to pre-select dishes into reservation requests.
- **The 10-Course Grand Tasting Journey**:
  - An interactive step-by-step walkthrough of the 3.5-hour flagship degustation from *L'Éveil* (Uni & Yuzu pearls) to *Mignardises*.
- **Subterranean Wine Cellar & Cocktail Vault**:
  - Highlights from Head Sommelier Éléonore Mercier’s 2,500-bottle cellar, Grand Cru Coravin flights, and bespoke smoked mixology.
- **Visual Atmosphere Lightbox Gallery**:
  - Full-screen high-resolution inspection of the Main Dining Room, Le Salon Privé, Wine Vault, and Chef's pass.
- **Private Dining & Event Proposal Calculator**:
  - Real-time interactive proposal generator based on salon choice (*Le Salon Privé* or *The Glass Atrium*), guest count slider, menu tier, and pairing selections with instant per-guest breakdown.
- **Interactive Online Table Reservation Engine**:
  - Dynamic party size, seating zone (*Main Room*, *Chef's Counter*, *Salon Privé*, *Terrace*).
  - Date picker with live time slot availability badges (18:00, 19:30, 21:00).
  - Tasting menu tier selection and luxury add-ons (Prestige Wine Flight, Royal Oscietra Caviar, Celebration Package).
  - Booking confirmation generator with unique reference code (e.g., `#LR-84291`).
  - **Instant `.ics` Calendar Invite**: Generates and downloads an iCalendar file compatible with Apple Calendar, Google Calendar, and Microsoft Outlook.
  - **Print / Save Voucher**: Printable voucher formatting.
  - **Local Persistence**: Stores bookings in browser `localStorage`.
- **Reservation Lookup Modal**:
  - Guests can look up, view, or gracefully cancel active reservations on their device.
- **Digital Luxury Gift Card Voucher**:
  - Interactive voucher customizer with live gold-bordered presentation certificate preview, customizable recipient, message, and denominations.
- **Atmospheric Acoustic Soundscape (Web Audio API)**:
  - Generative, velvet acoustic lounge chord drone with low-pass filter and confirmation chime, togglable directly from the navigation bar.
- **Dining Etiquette & FAQ Accordions**:
  - Interactive answers for dress code, dietary accommodations, cancellation terms, and valet parking.
- **Fully Responsive**:
  - Dedicated mobile drawer navigation, responsive typography, and touch-optimized controls.

## 🚀 Running on Localhost

1. **Option A (One-Click Launch)**:
   Double-click `start-website.bat` in the project root. It will open `http://localhost:3000` in your default browser and start the lightweight local server.

2. **Option B (PowerShell)**:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\server.ps1 -Port 3000
   ```
   Then open `http://localhost:3000` in any web browser.

