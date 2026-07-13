# Gemify Website

React site for Gemify — IoT platform outsourcing, hardware development, and ready-made IoT device solutions.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

`postbuild` copies `404.html` and SPA path shells under `dist/` so GitHub Pages deep links work.

## Deploy (GitHub Pages)

Workflow: `.github/workflows/deploy-pages.yml` — builds on push to `main`/`master` and publishes `dist/`.

**Repo settings → Pages → Build and deployment:** set Source to **GitHub Actions** (not “Deploy from a branch”).
