
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, '..', 'dist');
const indexPath = path.join(dist, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('copy-spa-fallbacks: dist/index.html missing (run vite build first)');
  process.exit(1);
}

const html = fs.readFileSync(indexPath, 'utf8');

function writeIndexHtml(...segments) {
  const dir = path.join(dist, ...segments);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

const routes = [
  'blog',
  'projects',
  'projects/example-1',
  'projects/energy-monitoring',
  'products/micromouse',
  'products/translate',
  'products/rfid',
  'admin',
  'admin/documents',
  'admin/pricing',
  'admin/design-gallery',
];

for (const r of routes) {
  writeIndexHtml(...r.split('/'));
}

for (let n = 1; n <= 6; n++) {
  writeIndexHtml('articles', `post${n}`);
}

console.log('copy-spa-fallbacks: wrote index.html for', routes.length + 6, 'SPA paths under dist/');
