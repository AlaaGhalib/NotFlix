# Notflix

A tiny Netflix-like UI demo built with React, TypeScript and MUI. It showcases a hero-style movie layout, horizontally scrollable rows, skeleton loaders, and an in-app watch player (uses a placeholder sample video).

**Stack**
- **Framework:** React 19
- **Bundler / Dev server:** Vite (rolldown-vite shim)
- **Language:** TypeScript (~5.9)
- **UI library:** MUI v7 (+ @mui/icons-material)
- **Styling:** @emotion / styled-components integration
- **Routing:** react-router-dom v7

**Quick Start**
- Install dependencies:

  ```bash
  npm install
  ```

- Run dev server (exposes on local network):

  ```bash
  npm run dev -- --host
  ```

- Build for production:

  ```bash
  npm run build
  ```

- Preview the production build:

  ```bash
  npm run preview
  ```
**Project Layout (important files)**
- `src/main.tsx`: App entry — wraps the app with `ThemeProvider` and `RouterProvider`.
- `src/router.tsx`: App routes — includes `/, /browse, /movie/:id, /watch/:id`.
- `src/theme.ts`: MUI theme and overrides (Netflix-like red, button styles, typography).
- `src/pages/Browse.tsx`: Netflix-style browse view — hero + horizontal rows and skeletons.
- `src/pages/Movie.tsx`: Movie details page with hero and an overlay play button.
- `src/pages/Watch.tsx`: Dedicated full-screen watch route (`/watch/:id`) using a sample video.
- `src/components/MovieCard.tsx`: Movie card UI and navigation to movie page.
- `src/components/MovieCardSkeleton.tsx`: Skeleton placeholder used while loading.
- `src/mock/movies.ts` and `src/mock/api.ts`: Simple mock data and fetch helpers used by the demo.
- `src/hooks/useInfiniteScroll.ts`: IntersectionObserver hook used to load more content.

**Customizing**
- Change the placeholder video used by the watch page in `src/pages/Watch.tsx` (currently Big Buck Bunny sample).
- Add fields to the mock movie data in `src/mock/movies.ts` (description, backdrop, director, runtime, etc.) and update the UI references.
- Theme overrides for colors, buttons and typography live in `src/theme.ts`.
---
