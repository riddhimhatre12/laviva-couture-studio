# ✦ Laviva Couture — Luxury Designer Fashion Boutique

An elegant, high-end digital atelier showcasing the exquisite collections of **Laviva Couture**, a premium designer fashion boutique located in Virar West, Mumbai.

This project has been crafted to deliver an ultra-premium, cinematic, and immersive experience for clients exploring groom wedding sherwanis, bridal lehengas, contemporary Indo-western drapes, and luxury pret.

---

## ✦ Design Aesthetics & UX Philosophy

*   **Sophisticated Colors**: Designed around a curated, harmonious custom palette containing `Ivory` (warm white), `Champagne` (soft cream), `Nude` (delicate beige), `Gold` (rich metallic), and `Ink` (deep charcoal black).
*   **Typography**: Combines `Cormorant Garamond` (a stunning serif for titles and luxury editorial headers) with `Montserrat` (a clean, modern sans-serif for numbers, details, and navigation).
*   **Micro-Animations**: Leverages `Framer Motion` and custom Tailwind CSS keyframes to produce fluid reveal animations (`fade-up`, `reveal`, and edge-masked recognition marquees) that feel alive and responsive.
*   **Mobile Concierge Integration**: Contains interactive concierge consultation scheduling forms and floating WhatsApp quick-links to connect clients directly with private stylists.

---

## ✦ Technology Stack

The project runs on a state-of-the-art, lightning-fast client-side stack:

1.  **Core**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
2.  **Build Tool**: [Vite 7](https://vite.dev/) (Client-side Single Page Application)
3.  **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using native `@tailwindcss/vite` compiler integration)
4.  **Routing**: [React Router](https://reactrouter.com/) (standard client-side routing)
5.  **Animations**: [Framer Motion](https://www.motion.dev/)
6.  **Icons**: [Lucide React](https://lucide.dev/)
7.  **Toast Notifications**: [Sonner](https://sonner.dev/)

---

## ✦ Repository Structure

```filepath
laviva-couture-studio/
├── dist/                  # Production-ready client assets (after npm run build)
├── src/
│   ├── assets/            # High-resolution optimized collection campaign assets
│   ├── components/
│   │   ├── site/          # Site layout components (Nav, Footer, CoutureCollectionPage, Reveal)
│   │   └── ui/            # Reusable primitive design system components (Accordion, Dialog, etc.)
│   ├── lib/
│   │   └── utils.ts       # Class merging and design helper utilities
│   ├── pages/             # Page components
│   │   ├── IndexPage.tsx      # Cinematic landing homepage with collections spotlight
│   │   ├── collections.tsx    # The full couture series catalog
│   │   ├── mens.tsx           # The Groom's Atelier series
│   │   ├── womens.tsx         # The Bridal & Fusion drapes
│   │   ├── new-arrivals.tsx   # Volume IV seasonal spotlight
│   │   ├── about.tsx          # Atelier story and history
│   │   └── contact.tsx        # Consultation reservation booking
│   ├── App.tsx            # Main application router and core layout
│   ├── main.tsx           # React SPA entry bootstrapper
│   └── styles.css         # Custom Tailwind v4 styling system & tokens
├── index.html             # HTML entry shell & SEO metadata
├── vite.config.ts         # Standard Vite config (React, Tailwind v4, React Router)
├── eslint.config.js       # ESLint rules and settings
├── package.json           # Project dependencies & scripts
└── tsconfig.json          # TypeScript compiler rules
```

---

## ✦ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 1. Installation

Clone the repository, navigate into the directory, and install dependencies:

```bash
npm install
```

### 2. Development Server

Start the local development server with hot-module replacement (HMR):

```bash
npm run dev
```

The application will be running locally at `http://localhost:5173`.

### 3. Production Build

Compile the application into a highly optimized client bundle:

```bash
npm run build
```

This creates a `dist/` folder containing minified static assets (`HTML`, `JS`, `CSS`, and optimized images), ready to be served from any static hosting provider (Vercel, Netlify, Cloudflare Pages, GitHub Pages, or AWS S3).

### 4. Code Quality & Formatting

```bash
# Run ESLint validation
npm run lint

# Format all files using Prettier
npm run format
```
