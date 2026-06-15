
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
  'blog/series/yocto-beaglebone-black',
  'blog/series/mqtt-iot',
  'projects',
  'projects/temperature-humidity-monitoring',
  'projects/energy-monitoring',
  'projects/livestock-monitoring-control',
  'projects/smart-agriculture-iot',
  'products',
  'products/beaglebone-black-cape',
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

const articleSlugs = [
  'yocto-beaglebone-black-part-5-mpu6050-imu',
  'yocto-beaglebone-black-part-4-button-p8-keys',
  'yocto-beaglebone-black-part-3-st7789-display',
  'yocto-beaglebone-black-part-2-kernel-local',
  'yocto-beaglebone-black-part-1-introduction',
  'post1',
  'post2',
  'post3',
  'post4',
  'post5',
  'post6',
];

for (const slug of articleSlugs) {
  writeIndexHtml('articles', slug);
}

console.log(
  'copy-spa-fallbacks: wrote index.html for',
  routes.length + articleSlugs.length,
  'SPA paths under dist/',
);
