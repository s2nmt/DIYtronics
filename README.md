# Gemify website

Marketing / blog site for Gemify: **Vite + React 18 + TypeScript + React Router**. Global styles in `styles.css` (also copied to `dist/` in `postbuild` for legacy static pages under `public/`).

## Scripts

- `npm run dev` — local dev server  
- `npm run build` — typecheck, Vite production build, then `404.html` = SPA shell and `styles.css` copied into `dist/`  
- `npm run preview` — preview production build  

## Deploy

GitHub Actions workflow `.github/workflows/deploy-pages.yml` builds and publishes `dist/` to GitHub Pages.

## Content

- **App:** `src/` (`App.tsx` routes, `pages/`, `components/`, `content/`)  
- **Static assets & redirects:** `public/` (`img/`, `CNAME`, `.nojekyll`, `*.html` stubs)  
- **Blog posts (React):** `src/content/articles/*.body.html`, metadata in `articleConfig.ts`  
- **Admin (React):** `/admin`, `/admin/documents`, `/admin/pricing`, `/admin/design-gallery` — `public/admin/*.html` are redirects for old URLs  

See also `articles/README.md` for blog article layout.
