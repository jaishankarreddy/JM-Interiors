# Modern Interior & Architectural Studio Showcase

> **Awwwards-Caliber Digital Showcase & Portfolio Platform**  
> Built with React 19, TypeScript, Tailwind CSS, GSAP, Lenis, and shadcn/ui.  
> **Repository:** [https://github.com/Varun-Esarapu/JM-Interiors.git](https://github.com/Varun-Esarapu/JM-Interiors.git)

---

## 🏛️ Executive Summary & Concept

This project is a high-performance, responsive portfolio and digital showcase engineered for a modern interior architecture and turnkey design studio.

Designed from the ground up as an **Awwwards-tier editorial architectural portfolio**, the application features:
- **Light Theme Only**: Natural stone paper, gallery white surfaces, deep charcoal typography, and warm terracotta accents.
- **Fluid Momentum Scrolling**: Powered by Lenis and synchronized with the GSAP animation ticker.
- **GSAP 60fps Motion Design**: Contextual magnetic cursor, smooth ScrollTrigger reveals, and micro-interactions.
- **Interactive Before / After Transformation Slider**: 1:1 camera-aligned comparison showing raw concrete structures turning into turnkey finished spaces.
- **Interactive Turnkey Cost Estimator**: Instant, real-time budget calculator with pre-configured parameters and 1-click WhatsApp quote forwarding.
- **Editorial Architectural Layout**: Clean typographic hierarchy, generous spatial breathing room, and responsive bento grids.

---

## 🛠️ Complete Tech Stack

| Technology | Version / Tooling | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Component architecture, state hooks, and client-side rendering |
| **Language** | [TypeScript 5.7](https://www.typescriptlang.org/) | Strict type checking, interfaces for site content, props, and calculators |
| **Build Tool** | [Vite 6](https://vitejs.dev/) | Lightning-fast HMR, Rollup bundling, and asset optimization |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern CSS engine with CSS variables and responsive utility classes |
| **Design System** | [shadcn/ui](https://ui.shadcn.com/) + Radix UI | Accessible primitives (Accordion, Badge, Button, Card, Dialog, Slider, Tabs) |
| **Animation Engine** | [GSAP 3.12](https://gsap.com/) | Hardware-accelerated tweens, `quickTo` cursor physics, and timeline orchestration |
| **Scroll Trigger** | [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Viewport-driven reveals, scroll milestones, and timeline synchronization |
| **Smooth Scroll** | [Lenis 1.1](https://lenis.darkroom.engineering/) | Smooth momentum scrolling tied directly to the GSAP Ticker loop |
| **Icons** | [Material Symbols Outlined](https://fonts.google.com/icons) & [Lucide](https://lucide.dev/) | Geometric UI iconography, status indicators, and contact symbols |

---

## 🎨 Design System & Color Palette

The site rejects generic AI dark-mode glows and gold gradients, adopting an authentic **architectural editorial aesthetic** inspired by award-winning references (*Mecha*, *Obys Grids*, *Agrumea*):

### Color Tokens

| Token Name | Hex Code | HSL / Variable | Usage |
| :--- | :--- | :--- | :--- |
| **Warm Canvas (Background)** | `#FAF8F5` | `hsl(38, 28%, 97%)` | Primary background surface (matte architectural paper) |
| **Card / Surface White** | `#FFFFFF` | `hsl(0, 0%, 100%)` | Interactive cards, modal dialogs, and calculator containers |
| **Architectural Charcoal** | `#1C1917` | `hsl(24, 10%, 10%)` | Primary headlines, navigation text, and high-emphasis CTAs |
| **Muted Stone Slate** | `#78716C` | `hsl(25, 5%, 45%)` | Subtitles, section numbers, technical labels, and captions |
| **Terracotta Clay (Accent)** | `#8C4830` | `hsl(15, 49%, 37%)` | Brand accent, active states, key tags, and highlight accents |
| **Warm Slate Border** | `#E6E2DC` | `hsl(35, 14%, 88%)` | Crisp 1px structural grid dividing lines and card outlines |

---

## 🔤 Typography & Font Hierarchy

The typography combines a clean geometric sans with an architectural monospace for technical data:

### Font Families
1. **Primary Sans (`Plus Jakarta Sans`)**: Clean, contemporary grotesque sans used across the navbar, headings, body copy, and dialogs.
   - Weights: `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold), `800` (ExtraBold)
2. **Technical Monospace (`Space Mono`)**: Used for project numbering (`01 WORK`, `02 CAPABILITIES`), cost slips, dimension units, and status badges.
   - Weights: `400` (Regular), `700` (Bold)
3. **UI Iconography (`Material Symbols Outlined`)**: Google variable font icons rendered via CSS ligature classes.

### Typography Scale & Specs

| Hierarchy Level | Font Family | Size (Desktop / Mobile) | Weight | Tracking & Leading |
| :--- | :--- | :--- | :--- | :--- |
| **Display Title (H1)** | Plus Jakarta Sans | `64px - 72px` / `36px - 44px` | ExtraBold (`800`) | Tracking `-0.03em`, Leading `0.98` |
| **Section Header (H2)** | Plus Jakarta Sans | `40px - 48px` / `28px - 32px` | ExtraBold (`800`) | Tracking `-0.02em`, Leading `1.05` |
| **Card Title (H3)** | Plus Jakarta Sans | `22px - 24px` / `18px - 20px` | Bold (`700`) | Tracking `-0.01em`, Leading `1.2` |
| **Body Large** | Plus Jakarta Sans | `16px - 18px` / `14px - 15px` | Regular (`400`) | Leading `1.6`, Color `#57534E` |
| **Technical Labels** | Space Mono | `11px - 12px` | Bold (`700`) | Tracking `+0.15em`, Uppercase |
| **Metadata & Subtitles**| Space Mono | `10px - 11px` | Regular (`400`) | Tracking `+0.12em`, Uppercase |

---

## ⚡ Animation & Motion Architecture

### 1. GSAP Custom Magnetic Cursor (`CustomCursor.tsx`)
- Physics-based trailing cursor implemented with `gsap.quickTo(..., "x", { duration: 0.15, ease: "power3" })`.
- Context-aware hover badges dynamically injected via HTML `data-cursor` attributes:
  - `data-cursor="DRAG"` on the Before/After transformation slider
  - `data-cursor="VIEW"` on portfolio project cards
  - `data-cursor="CALC"` on the investment estimator
  - `data-cursor="WHATSAPP"` on direct WhatsApp consultation triggers
  - `data-cursor="CONTACT"` on consultation CTAs

### 2. Lenis Momentum Smooth Scroll
- Lenis instance bound to the GSAP Ticker in `App.tsx`:
  ```ts
  const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  ```

### 3. Interactive 1:1 Before/After Transformation Slider (`BeforeAfterSlider.tsx`)
- High-precision drag comparison using the **identical perspective and photograph** (`project-living.jpg`).
- Left panel shows raw structural concrete/blueprint framing with desaturation and grid overlay.
- Right panel reveals the turnkey warm architectural finish.
- Dual touch and mouse drag support with normalized percentage calculations.

### 4. Interactive Turnkey Cost Estimator (`CostCalculator.tsx`)
- Formula-driven pricing engine based on carpet area (sq.ft.), property configuration (2 BHK, 3 BHK, 4 BHK Villa, Commercial Office), scope of execution, and finish specification tier (*Signature, Avant-Garde, Bespoke Haute Joinery*).
- Generates an itemized project estimate slip with guaranteed handover SLA and warranty badges.
- Includes pre-filled WhatsApp quote forwarding and direct consultation actions.

### 5. Architectural Process Timeline (`ProcessTimeline.tsx`)
- 4-step architectural execution workflow:
  1. **Visit Project** — Site evaluation & spatial measurement
  2. **Planning Design** — Conceptual layouts & 3D space planning
  3. **Project Sketch** — Material selections & engineering blueprints
  4. **Start Working** — In-house factory joinery & on-site turnkey installation

---

## 📂 Project Architecture

```
Interior Design/
├── public/
│   ├── assets/                 # High-resolution architectural photography
│   └── favicon.svg             # Minimalist architectural brand mark
├── src/
│   ├── assets/                 # Project images, hero visuals, textures
│   ├── components/
│   │   ├── ui/                 # Reusable shadcn/ui primitives
│   │   │   ├── accordion.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── slider.tsx
│   │   │   └── tabs.tsx
│   │   ├── AboutSection.tsx        # Studio pillars, experience metrics
│   │   ├── BeforeAfterSlider.tsx   # 1:1 pixel-perfect transformation slider
│   │   ├── BentoServices.tsx       # 4 core service cards
│   │   ├── ConsultationModal.tsx   # Lead capture booking dialog
│   │   ├── CostCalculator.tsx      # Turnkey price estimator
│   │   ├── CustomCursor.tsx        # GSAP quickTo magnetic pointer
│   │   ├── FAQSection.tsx          # Architectural FAQs and inquiry accordion
│   │   ├── Footer.tsx              # Studio navigation, links, and sitemap
│   │   ├── Hero.tsx                # Clean, un-congested editorial hero
│   │   ├── Navbar.tsx              # Uniform Plus Jakarta Sans navigation
│   │   ├── ProcessTimeline.tsx     # 4-stage execution workflow
│   │   ├── ProjectShowcase.tsx     # Filterable commercial & residential gallery
│   │   └── TestimonialMarquee.tsx  # Client reviews & partner ticker
│   ├── data/
│   │   └── site-data.ts        # Single source of truth for site content & config
│   ├── lib/
│   │   └── utils.ts            # clsx and tailwind-merge helper
│   ├── App.tsx                 # Root layout, Lenis init, and state handlers
│   ├── index.css               # Tailwind v4 import, fonts, color tokens
│   └── main.tsx                # React 19 entry point
├── index.html                  # HTML head, typography preconnects
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` or `pnpm`

### Installation
```bash
# Clone the repository
git clone https://github.com/Varun-Esarapu/JM-Interiors.git

# Navigate into the project folder
cd JM-Interiors

# Install dependencies
npm install
```

### Local Development
```bash
# Start the Vite development server
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### Production Build
```bash
# Typecheck with tsc and build production bundle with Vite
npm run build

# Preview the production build locally
npm run preview
```
