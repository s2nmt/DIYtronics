/** Resolve paths for static files in `public/` (respects Vite `base`). */
export function assetPath(relativePath) {
  const base = import.meta.env.BASE_URL;
  const p = relativePath.replace(/^\//, "");
  if (base === "/") return `/${p}`;
  return `${base.endsWith("/") ? base : `${base}/`}${p}`;
}

/** Make relative article/blog links work from any route. */
export function rewriteArticleHtml(html) {
  return html
    .replace(/href="articles\//g, 'href="/articles/')
    .replace(/href="\.\.\/articles\//g, 'href="/articles/')
    .replace(/href="blog\//g, 'href="/blog/');
}
