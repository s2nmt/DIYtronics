# Blog articles

All six posts are rendered by the React app:

- **Route:** `/articles/post1` … `/articles/post6` (see **`src/pages/ArticlePostPage.tsx`**).
- **Copy:** **`src/content/articles/post*.body.html`** (bundled with `?raw`).
- **Metadata & related links:** **`src/content/articles/articleConfig.ts`**.
- **Layout / TOC:** **`src/components/ArticlePostShell.tsx`**, **`src/hooks/useArticleToc.ts`**, **`src/styles/article-page.css`**.

Do **not** add `public/articles/postN.html` redirect stubs: on GitHub Pages, `/articles/postN` is served as `postN.html` when that file exists, so the stub wins over `articles/postN/index.html` from the build and you only see “Redirect…” instead of the React article. Use `/articles/postN` (SPA + `scripts/copy-spa-fallbacks.mjs`).

To re-extract bodies from **full** HTML backups, point the script at those files or place them outside `public/articles/` temporarily, then run `node scripts/extract-article-bodies.mjs` (requires `<div class="article-content">` … `<div class="article-meta">`).

`styles.css` is copied into `dist/` in `postbuild` for any remaining static pages.
