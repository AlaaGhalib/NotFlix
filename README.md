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

**Notes / Troubleshooting**
- If you see the React "Invalid hook call" error in the browser console, the project has a Vite alias configured in `vite.config.ts` to force a single `react` / `react-dom` instance. That prevents duplicate React copies in development builds.

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

**Development Tips**
- When adding third-party libraries that also depend on React, ensure they resolve to the same React instance to avoid hooks-related runtime errors.
- Use the `MovieCard` and `MovieCardSkeleton` components as building blocks for additional rows and previews.

---

If you'd like, I can:
- wire Browse/Movie Play buttons to navigate to the `/watch/:id` route instead of opening the overlay, or
- add hover-preview behavior for cards (thumbnail + brief meta), or
- add tests and a small CI workflow.

License: MIT (demo project)
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
