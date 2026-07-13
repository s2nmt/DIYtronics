/**
 * GitHub Pages has no SPA rewrite: deep links need an index.html (or 404.html)
 * under each path so the React app can boot and Router can resolve the URL.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "..", "dist");
const indexPath = path.join(dist, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("copy-spa-fallbacks: dist/index.html missing (run vite build first)");
  process.exit(1);
}

const html = fs.readFileSync(indexPath, "utf8");

fs.writeFileSync(path.join(dist, "404.html"), html);

function writeIndexHtml(...segments) {
  const dir = path.join(dist, ...segments);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

const routes = [
  "blog",
  "blog/series/stm32-ota-bare-metal",
  "blog/series/yocto-beaglebone-black",
  "blog/series/mqtt-iot",
  "products",
  "products/climatelink-th",
  "products/relaylink-remote",
  "products/tagsense-nfc-rfid",
];

for (const r of routes) {
  writeIndexHtml(...r.split("/"));
}

const articleSlugs = [
  "stm32-ota-bare-metal-part-16-tools",
  "stm32-ota-bare-metal-part-15-startup-linker",
  "stm32-ota-bare-metal-part-14-application",
  "stm32-ota-bare-metal-part-13-ota-handlers",
  "stm32-ota-bare-metal-part-12-ota-parser",
  "stm32-ota-bare-metal-part-11-img-verify",
  "stm32-ota-bare-metal-part-10-bootloader",
  "stm32-ota-bare-metal-part-9-crypto",
  "stm32-ota-bare-metal-part-8-nvic-tick-iwdg",
  "stm32-ota-bare-metal-part-7-flash",
  "stm32-ota-bare-metal-part-6-uart",
  "stm32-ota-bare-metal-part-5-gpio",
  "stm32-ota-bare-metal-part-4-rcc-system",
  "stm32-ota-bare-metal-part-3-main",
  "stm32-ota-bare-metal-part-2-keygen",
  "stm32-ota-bare-metal",
  "yocto-beaglebone-black-part-5-mpu6050-imu",
  "yocto-beaglebone-black-part-4-button-p8-keys",
  "yocto-beaglebone-black-part-3-st7789-display",
  "yocto-beaglebone-black-part-2-kernel-local",
  "yocto-beaglebone-black-part-1-introduction",
  "post1",
  "post2",
  "post3",
  "post4",
  "post5",
  "post6",
];

for (const slug of articleSlugs) {
  writeIndexHtml("articles", slug);
}

console.log(
  "copy-spa-fallbacks: wrote 404.html + index.html for",
  routes.length + articleSlugs.length,
  "SPA paths under dist/"
);
