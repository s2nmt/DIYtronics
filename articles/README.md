# Blog articles

All six posts are rendered by the React app:

- **Route:** `/articles/post1` … `/articles/post6` (see **`src/pages/ArticlePostPage.tsx`**).
- **Copy:** **`src/content/articles/post*.body.html`** (bundled with `?raw`).
- **Metadata & related links:** **`src/content/articles/articleConfig.ts`**.
- **Layout / TOC:** **`src/components/ArticlePostShell.tsx`**, **`src/hooks/useArticleToc.ts`**, **`src/styles/article-page.css`**.

**`public/articles/post*.html`** are short redirects so old `…/postN.html` URLs still work.

To re-extract bodies from **full** HTML backups, point the script at those files or restore them under `public/articles/` temporarily, then run `node scripts/extract-article-bodies.mjs` (requires `<div class="article-content">` … `<div class="article-meta">`).

`styles.css` is copied into `dist/` in `postbuild` for any remaining static pages.
