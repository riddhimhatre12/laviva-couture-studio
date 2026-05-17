# ✦ Laviva Couture — Agent Handover Documentation

Welcome! This document serves as the primary technical bridge and status report for any future AI agents or developers taking over the **Laviva Couture Studio** project. It contains comprehensive context about the project's architecture, recent changes, active state, and roadmap.

---

## 📋 1. Project Overview

**Laviva Couture** is a luxury designer fashion boutique in Virar West, Mumbai, specializing in premium groom wedding sherwanis, bridal lehengas, contemporary Indo-western drapes, and high-end festive casuals.

This repository is a high-fidelity digital showroom designed to deliver a cinematic, elite shopping/styling experience. 

### 🛠️ Technical Stack
*   **Framework**: [React 19 (Client-Only SPA)](https://react.dev/)
*   **Build System**: [Vite 7](https://vite.dev/)
*   **Routing**: [React Router v6/v7 (react-router-dom)](https://reactrouter.com/) (Standard client-side routing)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (utilizing the new `@tailwindcss/vite` compiler integration)
*   **Animations**: [Framer Motion 12](https://www.motion.dev/)
*   **Notifications**: [Sonner](https://sonner.dev/)
*   **Package Manager**: `npm` (utilizing `package-lock.json`)

---

## 🟢 2. Current Project State

*   **Status**: **Production Ready (Static SPA)**
*   **Compile Integrity**: Generates a clean production bundle via `npm run build` with **0 errors and 0 warnings**.
*   **Bundle Optimization**: By pruning the heavy TanStack Router and Query code, the JS bundle has been reduced from `527.54 kB` to `452.55 kB` (a ~15% size reduction), improving load speeds in slow-network scenarios.
*   **Mock-Data Driven**: Self-contained with rich, editorial product catalogs. There are no live database/CMS connections, making local presentation and static CDN hosting fully functional out of the box.
*   **Clean Repository**: Free of any third-party sandbox platform lock-ins (e.g. LovableDev), server-side rendering overhead, and redundant package manager lockfiles.

---

## ✅ 3. Work Done (SPA & Clean Migration)

We migrated the project from a full-stack, server-rendered **TanStack Start + Vinxi + Cloudflare** model to a robust, client-only **React + Vite SPA**, and subsequently converted all routing layers to standard **React Router** in preparation for **Convex**.

### 🧹 Removed
1.  **TanStack Framework**: Fully uninstalled `@tanstack/react-query`, `@tanstack/react-router`, and `@tanstack/router-plugin` (Vite compiler).
2.  **Lovable Dev Tags**: Deleted `.lovable/` configuration directories, `@lovable.dev/vite-tanstack-config` wrapper, and any other tracking details.
3.  **SSR Infrastructure**: Deleted Vinxi server entrypoints and start instances (`src/server.ts`, `src/start.ts`, `wrangler.jsonc`, `bunfig.toml`).
4.  **Redundant Files**: Removed custom developer-error capture visualization pages (`src/lib/error-capture.ts`, `src/lib/error-page.ts`), the `bun.lock` lockfile, `src/router.tsx`, and the generated `src/routeTree.gen.ts`.

### ➕ Added / Configured
1.  **HTML Entry Point**: Created [index.html](file:///c:/Users/Shubham/laviva-couture-studio/index.html) in the root with custom pre-configured premium SEO meta headers and Google Font imports.
2.  **Standard Page Directory**: Refactored the old TanStack route files into standard React functional components inside `src/pages/`:
    *   `src/pages/IndexPage.tsx` (Homepage)
    *   `src/pages/AboutPage.tsx` (Atelier narrative)
    *   `src/pages/CollectionsPage.tsx` (Full portfolio catalogue)
    *   `src/pages/MensPage.tsx` (Groom's wear series)
    *   `src/pages/WomensPage.tsx` (Bridal & fusion edit)
    *   `src/pages/NewArrivalsPage.tsx` (Volume IV releases)
    *   `src/pages/ContactPage.tsx` (Consultation reservation booking)
3.  **Standard Core Router**: Created [src/App.tsx](file:///c:/Users/Shubham/laviva-couture-studio/src/App.tsx) hosting the standard `<BrowserRouter>`, `<Routes>`, and `<Route>` mappings. It also includes an automatic `<ScrollToTop>` viewport wrapper to ensure clean navigation transitions.
4.  **React Bootstrap**: Updated [src/main.tsx](file:///c:/Users/Shubham/laviva-couture-studio/src/main.tsx) to hook React 19 and render our `<App />` component.
5.  **Standard Vite Config**: Wrote a high-performance [vite.config.ts](file:///c:/Users/Shubham/laviva-couture-studio/vite.config.ts) using `@vitejs/plugin-react`, `@tailwindcss/vite`, and `vite-tsconfig-paths`.
6.  **Dependency Clean-Up**: Pruned 131 unused server-side packages via `npm install`, and installed `react-router-dom`.
7.  **ESLint & TypeScript Polish**: Pruned all vinxi rules and fixed type mismatches in `IndexPage.tsx` where the primitive `<FadeIn>` component was mistakenly passing an unsupported `direction` prop.

---

## 🗺️ 4. Work Needed (Future Development Roadmap & Convex Backend)

If you are the next developer or agent, here is your path forward:

### 1. Convex Backend Setup (Upcoming Integration)
*   *Current State*: Page catalogs are represented as static objects directly inside the routes (e.g. in `src/pages/WomensPage.tsx`).
*   *Task*: 
    1.  Install the Convex client library: `npm install convex`.
    2.  Set up the Convex backend directory by running `npx convex dev` to initialize your database schema (`convex/schema.ts`) and mock database tables.
    3.  Create query functions (e.g., `convex/products.ts`) to fetch collection items dynamically.
    4.  Wrap `src/main.tsx` (or `src/App.tsx`) with the `<ConvexProvider client={convex}>` context wrapper.
    5.  Replace the static items arrays in `MensPage.tsx`, `WomensPage.tsx`, `CollectionsPage.tsx`, and `NewArrivalsPage.tsx` with live query hooks: `const items = useQuery(api.products.get, { category: "mens" });`.

### 2. Concierge Appointment Booking
*   *Current State*: Consultation submissions in `ContactPage.tsx` fire a visual `toast.success("Appointment Request Received")`.
*   *Task*: Create a Convex mutation (e.g., `convex/appointments.ts`) to record client appointment metadata, and optionally set up a webhook trigger using a Convex action to relay a text message or email notification to the boutique managers.

### 3. Shopping Cart & Checkout
*   *Task*: Implement a client-side cart drawer (using `zustand` or React Context). Hook up the [Razorpay Standard Checkout SDK](https://razorpay.com/) or direct clients to a custom WhatsApp booking link carrying their cart payload.

### 4. CDN Asset Offloading
*   *Task*: Host high-res images on a cloud storage provider (like Cloudinary, Imgix, or AWS S3) and serve them using optimized source sets to decrease bundle sizes and increase load speeds.

---

## ⚠️ 5. Technical Rules & Guidelines for Future Agents

To maintain the high-quality code integrity of this project, you **MUST** follow these rules:

### 🔄 A. React Router (Client Routing)
*   **Routing API**: Avoid `<a>` tags for internal links. Always use `<Link>` or `<NavLink>` from `react-router-dom` to preserve application state and maintain instantaneous SPA transition times.
*   **Active Tabs Highlights**: When styling headers/menus, use the standard `({ isActive }) => ...` function parameters on `<NavLink className={...}>` to append the active styling (e.g. `text-gold` / `text-gold italic`).
*   **Navigation Scroll Behavior**: Keep `<ScrollToTop />` rendered inside the `<BrowserRouter>` in `App.tsx` so that moving to new pages resets the window viewport cleanly.

### 🎨 B. Tailwind CSS v4 Styling System
*   **CSS Tokens**: All color and typography variables are maintained in [src/styles.css](file:///c:/Users/Shubham/laviva-couture-studio/src/styles.css) inside `:root` and `@theme inline`.
*   **Class Names**: Do not introduce custom/arbitrary hardcoded hex values (e.g. `bg-[#18181a]`). Always use the custom utility tokens:
    *   `bg-ivory` (Atelier light background)
    *   `bg-ink` (Luxury dark contrast)
    *   `text-gold` (Metallic brand detailing)
    *   `text-champagne` / `bg-nude` (Premium secondary layout)
*   **Typography Classes**:
    *   Use `.font-serif` (`Cormorant Garamond` with italic combinations) for headings, banners, and boutique numbers.
    *   Use `.font-sans` (`Montserrat`) for pricing details, buttons, forms, and general content.

---

*Thank you for contributing to Laviva Couture. Let's make Indian luxury digital fashion gorgeous!*
