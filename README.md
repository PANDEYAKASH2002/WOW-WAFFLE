# WOW! WAFFLE — Premium Waffle Cart SPA

A high-performance, visually stunning, single-page application built for **WOW! WAFFLE** with Next.js 16, TypeScript, Tailwind CSS, Framer Motion, and custom SVG illustrations.

---

## 🌟 Key Features

- **Bold Brand Aesthetics**: Custom black-and-yellow color scheme (`#080808` & `#FFD400`) with Google Display Fonts (`Bowlby One SC` & `Poppins`).
- **Interactive Menu**: Full menu recreating Classic, Special, Kid's Special, Premium, and Fudge Brownies with Mini/Lolly pricing in `₹`.
- **Branch Directory (8 Outlets)**: Confirmed outlet in Ankleshwar with Google Maps directions, plus 7 editable placeholder records with live instant search.
- **Interactive Confetti Effects**: Celebration confetti buttons using `canvas-confetti` with custom toast notifications.
- **Custom SVG System**: Dedicated SVG waffle illustrations (`WowWaffleLogo`, `WaffleIcon`, `WaffleSlice`, `WaffleStack`, `StarBurst`, `Sparkle`, `WowSticker`).
- **Zero PostCSS Constraint**: Configured directly with Next.js 16 without custom PostCSS pipelines or `postcss.config.js`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 🛠️ How to Update Menu & Branch Data

### 1. Updating Menu Items & Prices
Edit [`data/menu.ts`](file:///C:/Users/imdea/Desktop/waffle/data/menu.ts):
```typescript
{
  id: 'classic-choco-river',
  name: 'Choco River',
  category: 'Classic',
  prices: { mini: 60, lolly: 90 },
  description: 'Crispy waffle drenched in rich, flowing milk chocolate.',
}
```

### 2. Updating Outlet / Branch Information
Edit [`data/branches.ts`](file:///C:/Users/imdea/Desktop/waffle/data/branches.ts):
```typescript
{
  id: 'branch-02',
  code: 'Branch 02',
  name: 'WOW! WAFFLE — Vadodara',
  city: 'Vadodara',
  state: 'Gujarat',
  address: 'Shop No. 12, Alkapuri, Vadodara, Gujarat',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=...',
  isConfirmed: true,
  tagline: 'Opening Soon in Alkapuri'
}
```
