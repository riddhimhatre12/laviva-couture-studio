# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-05-17

### Added
*   **HTML Shell Entrypoint**: Created [index.html](file:///c:/Users/Shubham/laviva-couture-studio/index.html) in the root of the project to bootstrap the Single Page Application (SPA), housing SEO metadata, description tags, and Google Web Font links.
*   **React Entrypoint Bootstrapper**: Created [src/main.tsx](file:///c:/Users/Shubham/laviva-couture-studio/src/main.tsx) to mount the React 19 app and tie in the TanStack `RouterProvider` under client-side strict mode.
*   **Standard Build Pipeline**: Configured production static asset bundling utilizing modern Vite commands.

### Changed..............
*   **SPA Migration**: Migrated the codebase from a full-stack server-rendering (**TanStack Start + Vinxi**) model to a highly efficient **React + Vite SPA** client-side application.
*   **Router Simplification**: Updated [src/routes/__root.tsx](file:///c:/Users/Shubham/laviva-couture-studio/src/routes/__root.tsx) to act as a client-side layout, completely removing server-only head metadata injections, server script injection hooks (`HeadContent`, `Scripts`), and server shell wrappers.
*   **Vite Configurations**: Rewrote [vite.config.ts](file:///c:/Users/Shubham/laviva-couture-studio/vite.config.ts) to utilize standard frontend plugins (`@vitejs/plugin-react`, `@tailwindcss/vite`, `@tanstack/router-plugin/vite`, `vite-tsconfig-paths`) and removed `@lovable.dev` specific bundles.
*   **ESLint Rules**: Cleaned [eslint.config.js](file:///c:/Users/Shubham/laviva-couture-studio/eslint.config.js) to prune Vinxi build ignores and server-only import restriction validation rules.
*   **Clean Package Manager**: Removed redundant lockfiles (`bun.lock` / `bunfig.toml`) and configured the project to align entirely with standard `package-lock.json`.

### Removed
*   **Lovable Dev Tags**: Completely wiped all Lovable tagging, metadata folders (`.lovable/`), and package configurations (`@lovable.dev/vite-tanstack-config`).
*   **SSR Boilerplate**: Removed SSR specific code files including the server entry wrapper (`src/server.ts`), server start configs (`src/start.ts`), Cloudflare wrangler setups (`wrangler.jsonc`), and custom dev-error visualization pages (`src/lib/error-capture.ts`, `src/lib/error-page.ts`).
*   **Cloudflare Bindings**: Pruned `@cloudflare/vite-plugin` and `@tanstack/react-start` to avoid unnecessary server dependencies.

---

[1.0.0]: https://github.com/riddhimhatre12/laviva-couture-studio/releases/tag/v1.0.0
