/** Resolve paths for static files in `public/` (respects Vite `base`). */
export function assetPath(relativePath: string): string {
  const base = import.meta.env.BASE_URL;
  const p = relativePath.replace(/^\//, '');
  if (base === '/') return `/${p}`;
  return `${base.endsWith('/') ? base : `${base}/`}${p}`;
}
