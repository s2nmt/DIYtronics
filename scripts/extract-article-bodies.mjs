/**
 * One-off / maintenance: extracts `<div class="article-content">` from full HTML
 * files. After migration, `public/articles/post2.html`–`post6.html` are redirects only;
 * keep a backup of the original HTML if you need to run this again.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const re =
  /<div class="article-content">\s*([\s\S]*?)\s*<\/div>\s*<div class="article-meta">/;

for (const n of [2, 3, 4, 5, 6]) {
  const file = path.join(root, 'public/articles', `post${n}.html`);
  const html = fs.readFileSync(file, 'utf8');
  const m = html.match(re);
  if (!m) {
    console.error('no match', n);
    process.exit(1);
  }
  const body = m[1].replace(/^\s{28}/gm, '').trim();
  const out = path.join(root, 'src/content/articles', `post${n}.body.html`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, `${body}\n`, 'utf8');
  console.log(`post${n}`, body.length);
}
