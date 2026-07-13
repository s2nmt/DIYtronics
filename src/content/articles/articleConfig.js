import post1Body from "./post1.body.html?raw";
import post2Body from "./post2.body.html?raw";
import post3Body from "./post3.body.html?raw";
import post4Body from "./post4.body.html?raw";
import post5Body from "./post5.body.html?raw";
import post6Body from "./post6.body.html?raw";
import yoctoBeagleboneBlackPart1Body from "./yocto-beaglebone-black-part-1-introduction.body.html?raw";
import yoctoBeagleboneBlackPart2Body from "./yocto-beaglebone-black-part-2-kernel-local.body.html?raw";
import yoctoBeagleboneBlackPart3Body from "./yocto-beaglebone-black-part-3-st7789-display.body.html?raw";
import yoctoBeagleboneBlackPart4Body from "./yocto-beaglebone-black-part-4-button-p8-keys.body.html?raw";
import yoctoBeagleboneBlackPart5Body from "./yocto-beaglebone-black-part-5-mpu6050-imu.body.html?raw";
import stm32OtaBareMetalBody from "./stm32-ota-bare-metal.body.html?raw";
import stm32OtaBareMetalPart2KeygenBody from "./stm32-ota-bare-metal-part-2-keygen.body.html?raw";
import stm32Part3Body from "./stm32-ota-bare-metal-part-3-main.body.html?raw";
import stm32Part4Body from "./stm32-ota-bare-metal-part-4-rcc-system.body.html?raw";
import stm32Part5Body from "./stm32-ota-bare-metal-part-5-gpio.body.html?raw";
import stm32Part6Body from "./stm32-ota-bare-metal-part-6-uart.body.html?raw";
import stm32Part7Body from "./stm32-ota-bare-metal-part-7-flash.body.html?raw";
import stm32Part8Body from "./stm32-ota-bare-metal-part-8-nvic-tick-iwdg.body.html?raw";
import stm32Part9Body from "./stm32-ota-bare-metal-part-9-crypto.body.html?raw";
import stm32Part10Body from "./stm32-ota-bare-metal-part-10-bootloader.body.html?raw";
import stm32Part11Body from "./stm32-ota-bare-metal-part-11-img-verify.body.html?raw";
import stm32Part12Body from "./stm32-ota-bare-metal-part-12-ota-parser.body.html?raw";
import stm32Part13Body from "./stm32-ota-bare-metal-part-13-ota-handlers.body.html?raw";
import stm32Part14Body from "./stm32-ota-bare-metal-part-14-application.body.html?raw";
import stm32Part15Body from "./stm32-ota-bare-metal-part-15-startup-linker.body.html?raw";
import stm32Part16Body from "./stm32-ota-bare-metal-part-16-tools.body.html?raw";

function rel(href, cover, title) {
  return { href, cover, title };
}

const STM32_COVER = "img/articles/stm32-ota-bare-metal/cover.png";

function stm32Article(slug, part, title, body, contentSuffix, date = "Jul 13, 2026") {
  return {
    documentTitle: `STM32F103 Bare-Metal Secure OTA — Part ${part}: ${title} | Gemify Blog`,
    title: `STM32F103 Bare-Metal Secure OTA — Part ${part}: ${title}`,
    cover: STM32_COVER,
    category: "Series",
    metaLine: `by Tuan Nguyen | ${date}`,
    body,
    contentId: `article-stm32-ota-part-${contentSuffix}-content`,
    tocListId: `toc-list-stm32-ota-part-${contentSuffix}`,
    related: [],
  };
}

export const ARTICLE_SLUGS = [
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

export const articlesBySlug = {
  "stm32-ota-bare-metal-part-16-tools": stm32Article(
    "stm32-ota-bare-metal-part-16-tools",
    16,
    "Host tools (main.py, sign_image.py)",
    stm32Part16Body,
    "16"
  ),
  "stm32-ota-bare-metal-part-15-startup-linker": stm32Article(
    "stm32-ota-bare-metal-part-15-startup-linker",
    15,
    "Startup, linker & VTOR",
    stm32Part15Body,
    "15"
  ),
  "stm32-ota-bare-metal-part-14-application": stm32Article(
    "stm32-ota-bare-metal-part-14-application",
    14,
    "Application main & ota_req",
    stm32Part14Body,
    "14"
  ),
  "stm32-ota-bare-metal-part-13-ota-handlers": stm32Article(
    "stm32-ota-bare-metal-part-13-ota-handlers",
    13,
    "ota.c — START, DATA, END & slot swap",
    stm32Part13Body,
    "13"
  ),
  "stm32-ota-bare-metal-part-12-ota-parser": stm32Article(
    "stm32-ota-bare-metal-part-12-ota-parser",
    12,
    "ota.c — frame parser & CRC16",
    stm32Part12Body,
    "12"
  ),
  "stm32-ota-bare-metal-part-11-img-verify": stm32Article(
    "stm32-ota-bare-metal-part-11-img-verify",
    11,
    "IMG1 header & verify",
    stm32Part11Body,
    "11"
  ),
  "stm32-ota-bare-metal-part-10-bootloader": stm32Article(
    "stm32-ota-bare-metal-part-10-bootloader",
    10,
    "bootloader.c — slots & jump",
    stm32Part10Body,
    "10"
  ),
  "stm32-ota-bare-metal-part-9-crypto": stm32Article(
    "stm32-ota-bare-metal-part-9-crypto",
    9,
    "SHA-256 & ECDSA P-256",
    stm32Part9Body,
    "9"
  ),
  "stm32-ota-bare-metal-part-8-nvic-tick-iwdg": stm32Article(
    "stm32-ota-bare-metal-part-8-nvic-tick-iwdg",
    8,
    "NVIC, SysTick & IWDG",
    stm32Part8Body,
    "8"
  ),
  "stm32-ota-bare-metal-part-7-flash": stm32Article(
    "stm32-ota-bare-metal-part-7-flash",
    7,
    "flash.c — erase & program",
    stm32Part7Body,
    "7"
  ),
  "stm32-ota-bare-metal-part-6-uart": stm32Article(
    "stm32-ota-bare-metal-part-6-uart",
    6,
    "uart.c — IRQ ring & printf",
    stm32Part6Body,
    "6"
  ),
  "stm32-ota-bare-metal-part-5-gpio": stm32Article(
    "stm32-ota-bare-metal-part-5-gpio",
    5,
    "gpio.c — PC13 LED",
    stm32Part5Body,
    "5"
  ),
  "stm32-ota-bare-metal-part-4-rcc-system": stm32Article(
    "stm32-ota-bare-metal-part-4-rcc-system",
    4,
    "RCC & SystemClock",
    stm32Part4Body,
    "4"
  ),
  "stm32-ota-bare-metal-part-3-main": stm32Article(
    "stm32-ota-bare-metal-part-3-main",
    3,
    "bootloader main.c",
    stm32Part3Body,
    "3"
  ),
  "stm32-ota-bare-metal-part-2-keygen": {
    documentTitle:
      "STM32F103 Bare-Metal Secure OTA — Part 2: keygen.py | Gemify Blog",
    title: "STM32F103 Bare-Metal Secure OTA — Part 2: keygen.py",
    cover: STM32_COVER,
    category: "Series",
    metaLine: "by Tuan Nguyen | Jul 7, 2026",
    body: stm32OtaBareMetalPart2KeygenBody,
    contentId: "article-stm32-ota-part-2-content",
    tocListId: "toc-list-stm32-ota-part-2",
    related: [],
  },
  "stm32-ota-bare-metal": {
    documentTitle:
      "STM32F103 Bare-Metal Secure OTA — Part 1: Overview & Architecture | Gemify Blog",
    title: "STM32F103 Bare-Metal Secure OTA — Part 1: Overview & Architecture",
    cover: STM32_COVER,
    category: "Series",
    metaLine: "by Tuan Nguyen | Jul 4, 2026",
    body: stm32OtaBareMetalBody,
    contentId: "article-stm32-ota-content",
    tocListId: "toc-list-stm32-ota",
    related: [],
  },
  "yocto-beaglebone-black-part-5-mpu6050-imu": {
    documentTitle: "Yocto on BeagleBone Black — Part 5: MPU6050 IMU | Gemify Blog",
    title: "Yocto on BeagleBone Black — Part 5: Enabling the MPU6050 IMU",
    cover: "img/articles/yocto-beaglebone-black-part-5-mpu6050-imu/cover.png",
    category: "Series",
    metaLine: "by Tuan Nguyen | Jun 15, 2026",
    body: yoctoBeagleboneBlackPart5Body,
    contentId: "article-yocto-bbb-part-5-content",
    tocListId: "toc-list-yocto-bbb-part-5",
    related: [],
  },
  "yocto-beaglebone-black-part-4-button-p8-keys": {
    documentTitle: "Yocto on BeagleBone Black — Part 4: P8 Buttons & LEDs | Gemify Blog",
    title: "Yocto on BeagleBone Black — Part 4: P8 Buttons & LEDs (button-p8-keys)",
    cover: "img/articles/yocto-beaglebone-black-part-4-button-p8-keys/cover.png",
    category: "Series",
    metaLine: "by Tuan Nguyen | Jun 15, 2026",
    body: yoctoBeagleboneBlackPart4Body,
    contentId: "article-yocto-bbb-part-4-content",
    tocListId: "toc-list-yocto-bbb-part-4",
    related: [],
  },
  "yocto-beaglebone-black-part-3-st7789-display": {
    documentTitle: "Yocto on BeagleBone Black — Part 3: ST7789 Display | Gemify Blog",
    title: "Yocto on BeagleBone Black — Part 3: Enabling the ST7789 Display",
    cover: "img/articles/yocto-beaglebone-black-part-3-st7789-display/cover.png",
    category: "Series",
    metaLine: "by Tuan Nguyen | Jun 15, 2026",
    body: yoctoBeagleboneBlackPart3Body,
    contentId: "article-yocto-bbb-part-3-content",
    tocListId: "toc-list-yocto-bbb-part-3",
    related: [],
  },
  "yocto-beaglebone-black-part-2-kernel-local": {
    documentTitle:
      "Yocto on BeagleBone Black — Part 2: Building the Kernel Locally | Gemify Blog",
    title: "Yocto on BeagleBone Black — Part 2: Building the Kernel Locally",
    cover: "img/articles/yocto-beaglebone-black-part-2-kernel-local/cover.png",
    category: "Series",
    metaLine: "by Tuan Nguyen | Jun 15, 2025",
    body: yoctoBeagleboneBlackPart2Body,
    contentId: "article-yocto-bbb-part-2-content",
    tocListId: "toc-list-yocto-bbb-part-2",
    related: [],
  },
  "yocto-beaglebone-black-part-1-introduction": {
    documentTitle:
      "Yocto on BeagleBone Black — Part 1: Build Image & Flash SD Card | Gemify Blog",
    title: "Yocto on BeagleBone Black — Part 1: Build Image & Flash SD Card",
    cover: "img/articles/yocto-beaglebone-black-part-1-introduction/cover.png",
    category: "Series",
    metaLine: "by Tuan Nguyen | Jun 15, 2025",
    body: yoctoBeagleboneBlackPart1Body,
    contentId: "article-yocto-bbb-part-1-content",
    tocListId: "toc-list-yocto-bbb-part-1",
    related: [],
  },
  post1: {
    documentTitle:
      "How to Set up an MQTT Broker Using Aedes MQTT on Ubuntu | Gemify Blog",
    title: "How to Set up an MQTT Broker Using Aedes MQTT on Ubuntu",
    cover: "img/post1/cover.png",
    category: "Series",
    metaLine: "by Tuan Nguyen | Jan 20, 2025",
    body: post1Body,
    contentId: "article-post1-content",
    tocListId: "toc-list-post1",
    related: [],
  },
  post2: {
    documentTitle: "How to Send Email Using Node.js | Gemify Blog",
    title: "How to Send Email Using Node.js",
    cover: "img/post2/cover.png",
    category: "Tutorial",
    metaLine: "by Tuan Nguyen | Jan 21, 2025",
    body: post2Body,
    contentId: "article-post2-content",
    tocListId: "toc-list-post2",
    related: [rel("blog/series/mqtt-iot", "img/post1/cover.png", "MQTT & MQTTS for IoT")],
  },
  post3: {
    documentTitle: "Public MQTTS on ESP32 | Gemify Blog",
    title: "Public MQTTS on ESP32",
    cover: "img/post3/cover.png",
    category: "Series",
    metaLine: "by Tuan Nguyen | Jan 22, 2025",
    body: post3Body,
    contentId: "article-post3-content",
    tocListId: "toc-list-post3",
    related: [],
  },
  post4: {
    documentTitle: "MQTTS on W5500 and ESP32 | Gemify Blog",
    title: "MQTTS on W5500 and ESP32",
    cover: "img/post4/cover.png",
    category: "Series",
    metaLine: "by Tuan Nguyen | Jan 23, 2025",
    body: post4Body,
    contentId: "article-post4-content",
    tocListId: "toc-list-post4",
    related: [],
  },
  post5: {
    documentTitle: "MQTTS in A76xx | Gemify Blog",
    title: "MQTTS in A76xx",
    cover: "img/post5/cover.png",
    category: "Series",
    metaLine: "by Tuan Nguyen | Jan 24, 2025",
    body: post5Body,
    contentId: "article-post5-content",
    tocListId: "toc-list-post5",
    related: [],
  },
  post6: {
    documentTitle: "ESP32 OTA Firmware Update over HTTPS | Gemify Blog",
    title: "ESP32 OTA Firmware Update over HTTPS",
    cover: "img/post3/cover.png",
    category: "Tutorial",
    metaLine: "by Tuan Nguyen | Mar 3, 2025",
    body: post6Body,
    contentId: "article-post6-content",
    tocListId: "toc-list-post6",
    related: [rel("blog/series/mqtt-iot", "img/post1/cover.png", "MQTT & MQTTS for IoT")],
  },
};

export function isArticleSlug(s) {
  return ARTICLE_SLUGS.includes(s);
}
