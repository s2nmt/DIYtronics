/**
 * Extracts main pricing document HTML for React (?raw) bundle.
 * Run from repo root: node scripts/extract-pricing-content.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const pricingPath = path.join(root, 'public', 'admin', 'pricing.html');
const html = fs.readFileSync(pricingPath, 'utf8');

const startMark = '<div class="content-wrapper">';
const cw = html.indexOf(startMark);
if (cw === -1) throw new Error('content-wrapper not found');
const innerStart = html.indexOf('<div class="content-card">', cw);
if (innerStart === -1) throw new Error('content-card not found');

const endRe =
  /\r?\n\s*<\/div>\r?\n\s*<\/div>\r?\n\s*<\/div>\r?\n\s*<\/section>/;
const endMatch = html.slice(innerStart).match(endRe);
if (!endMatch || endMatch.index === undefined) throw new Error('end pattern not found');
const relEnd = innerStart + endMatch.index;
let body = html.slice(innerStart, relEnd);

// Remove embedded carousel <style> block (moved to admin-pages.css)
body = body.replace(/<style>[\s\S]*?<\/style>\s*(?=<h3 id="demo-product")/m, '');

// Fix link to design gallery
body = body.replace(/href="design-gallery\.html"/g, 'href="/admin/design-gallery"');

// Fix heading typo h3/h2
body = body.replace(
  '<h3 id="overview">Tổng Quan</h2>',
  '<h3 id="overview">Tổng Quan</h3>',
);

const out = path.join(root, 'src', 'content', 'admin', 'pricingMain.body.html');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, body.trim() + '\n', 'utf8');
console.log('Wrote', out, body.length);
