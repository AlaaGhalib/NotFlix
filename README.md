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

  -

  # Notflix (parody)

  A small demo app to showcase a Netflix-style UI and front-end skills.

  Quick summary
  - Stack: React 19 + TypeScript, Vite, MUI v7, react-router-dom.
  - Purpose: UI/demo only — uses mocked movie data and a sample video.

  Quick start
  ```bash
  npm install
  npm run dev -- --host
  ```

  Project layout
  - `src/main.tsx` — app entry and providers
  - `src/router.tsx` — routes (`/`, `/browse`, `/movie/:id`, `/watch/:id`)
  - `src/theme.ts` — MUI theme & overrides
  - `src/pages` — `Browse`, `Movie`, `Watch`, `Home`, `NotFound`
  - `src/components` — `MovieCard`, `MovieCardSkeleton`, `Navbar`
  - `src/mock` — `movies.ts`, `api.ts` (mock data + fetch helpers)
  - `src/hooks/useInfiniteScroll.ts` — intersection observer helper

  Customizing
  - Swap the sample video in `src/pages/Watch.tsx`.
  - Edit `src/mock/movies.ts` to change mock fields shown in the UI.
  - Tweak colors/typography in `src/theme.ts`.

  Development tips
  - Keep React dependencies deduped (Vite alias is configured to avoid duplicate React instances).
  - Use the skeleton components for smooth loading UX when adding async data.

  That's it — let me know if you want the Play buttons wired to `/watch/:id` or overlay behavior adjusted.

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
