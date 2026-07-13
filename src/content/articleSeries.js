import { articlesBySlug } from "./articles/articleConfig";

export const ARTICLE_SERIES_SLUGS = [
  "stm32-ota-bare-metal",
  "yocto-beaglebone-black",
  "mqtt-iot",
];

export const articleSeriesBySlug = {
  "stm32-ota-bare-metal": {
    slug: "stm32-ota-bare-metal",
    title: "STM32F103 Bare-Metal Secure OTA Bootloader",
    description:
      "Line-by-line walkthrough of the UART bootloader on Blue Pill: bare-metal drivers, dual-slot A/B OTA, SHA-256 + ECDSA P-256 signed images, and the Python host tool — no STM32 HAL.",
    cover: "img/articles/stm32-ota-bare-metal/cover.png",
    author: "Tuan Nguyen",
    date: "Jul 7, 2026",
    parts: [
      {
        status: "published",
        slug: "stm32-ota-bare-metal",
        part: 1,
        date: "Jul 4, 2026",
        excerpt:
          "Repository layout, flash memory map, boot flow, signed IMG1 format, UART OTA protocol, and quick-start build/flash/sign steps.",
      },
      {
        status: "published",
        slug: "stm32-ota-bare-metal-part-2-keygen",
        part: 2,
        date: "Jul 7, 2026",
        excerpt:
          "Line-by-line walkthrough of keygen.py: deterministic ECDSA P-256 key derivation, boot_pubkey.c output, and link to sign_image.py.",
      },
      {
        status: "planned",
        part: 3,
        title: "bootloader/Src/main.c — reset, OTA flag, and boot decision",
      },
      {
        status: "planned",
        part: 4,
        title: "lib/drivers — types, conf, rcc, system (clock & reset)",
      },
      {
        status: "planned",
        part: 5,
        title: "lib/drivers/gpio.c — pin modes, LED, and register access",
      },
      {
        status: "planned",
        part: 6,
        title: "lib/drivers/uart.c — USART1 IRQ, ring buffer, and printf",
      },
      {
        status: "planned",
        part: 7,
        title: "lib/drivers/flash.c — unlock, page erase, and program",
      },
      {
        status: "planned",
        part: 8,
        title: "lib/drivers — nvic, tick, iwdg, init, msp",
      },
      {
        status: "planned",
        part: 9,
        title: "lib/crypto — SHA-256 and ECDSA P-256 verify wrapper",
      },
      {
        status: "planned",
        part: 10,
        title: "lib/boot/bootloader.c — slot map, active slot, jump_to_application",
      },
      {
        status: "planned",
        part: 11,
        title: "lib/boot/img.c & verify.c — IMG1 header and signature check",
      },
      {
        status: "planned",
        part: 12,
        title: "lib/boot/ota.c (1) — UART frame parser and CRC16",
      },
      {
        status: "planned",
        part: 13,
        title: "lib/boot/ota.c (2) — START, DATA, END handlers and slot swap",
      },
      {
        status: "planned",
        part: 14,
        title: "application/ — main.c, ota_req.c, and linker offsets",
      },
      {
        status: "planned",
        part: 15,
        title: "Startup, linker script, and vector table placement",
      },
      {
        status: "planned",
        part: 16,
        title: "bootloader/tools/ — main.py, serial.py, sign_image.py",
      },
    ],
  },
  "yocto-beaglebone-black": {
    slug: "yocto-beaglebone-black",
    title: "Yocto on BeagleBone Black",
    description:
      "Build custom embedded Linux for BeagleBone Black with Yocto Scarthgap — image build, local kernel, ST7789 display, P8 I/O, MPU6050 IMU, and board bring-up.",
    cover: "img/articles/yocto-beaglebone-black-part-1-introduction/cover.png",
    author: "Tuan Nguyen",
    date: "Jun 15, 2026",
    parts: [
      {
        status: "published",
        slug: "yocto-beaglebone-black-part-1-introduction",
        part: 1,
        date: "Jun 15, 2026",
        excerpt:
          "Ubuntu host setup, clone Poky Scarthgap with meta-openembedded/meta-arm/meta-ti, build core-image-minimal for beaglebone, and flash the .wic.xz image to microSD.",
      },
      {
        status: "published",
        slug: "yocto-beaglebone-black-part-2-kernel-local",
        part: 2,
        date: "Jun 15, 2026",
        excerpt:
          "Full guide: upstream linux-bb.org recipe, meta-bbb bbappend, externalsrc, config flow, build steps, and troubleshooting.",
      },
      {
        status: "published",
        slug: "yocto-beaglebone-black-part-3-st7789-display",
        part: 3,
        date: "Jun 15, 2026",
        excerpt:
          "Device tree, fbtft/fb_st7789v modules, no-fbcon fragment, image packages, verification, and optional boot splash for ST7789 on SPI1.",
      },
      {
        status: "published",
        slug: "yocto-beaglebone-black-part-4-button-p8-keys",
        part: 4,
        date: "Jun 15, 2026",
        excerpt:
          "Out-of-tree button-p8-keys module: P8 buttons and LEDs via sysfs, device tree, Yocto recipe, build, and on-board usage.",
      },
      {
        status: "published",
        slug: "yocto-beaglebone-black-part-5-mpu6050-imu",
        part: 5,
        date: "Jun 15, 2026",
        excerpt:
          "MPU6050 on I2C2 with inv-mpu6050 IIO driver: device tree, kernel modules, i2c-tools, verification, and reading accel/gyro data.",
      },
    ],
  },
  "mqtt-iot": {
    slug: "mqtt-iot",
    title: "MQTT & MQTTS for IoT",
    description:
      "End-to-end MQTT tutorials: run a secure broker on Ubuntu, then connect ESP32 over Wi‑Fi, W5500 Ethernet, and A76xx LTE with MQTTS.",
    cover: "img/post1/cover.png",
    author: "Tuan Nguyen",
    date: "Jan 24, 2025",
    parts: [
      {
        status: "published",
        slug: "post1",
        part: 1,
        date: "Jan 20, 2025",
        excerpt:
          "Set up an MQTT/MQTTS broker on Ubuntu with Aedes and Node.js, including TLS certificates and WebSocket support.",
      },
      {
        status: "published",
        slug: "post3",
        part: 2,
        date: "Jan 22, 2025",
        excerpt:
          "Implement MQTT publish and subscribe on ESP32 over Wi‑Fi with MQTTS, larger buffers, and last-will tracking.",
      },
      {
        status: "published",
        slug: "post4",
        part: 3,
        date: "Jan 23, 2025",
        excerpt:
          "Use the W5500 Ethernet module with ESP32 for wired MQTT/MQTTS with LWT, publish, and subscribe.",
      },
      {
        status: "published",
        slug: "post5",
        part: 4,
        date: "Jan 24, 2025",
        excerpt:
          "A76xx LTE modules over cellular: AT commands for MQTTS connect, LWT, subscribe, publish, and URC handling.",
      },
    ],
  },
};

export function isArticleSeriesSlug(s) {
  return ARTICLE_SERIES_SLUGS.includes(s);
}

export function getSeriesForArticle(articleSlug) {
  for (const series of Object.values(articleSeriesBySlug)) {
    for (const entry of series.parts) {
      if (entry.status === "published" && entry.slug === articleSlug) {
        return { series, part: entry.part };
      }
    }
  }
  return null;
}

export function resolveSeriesArticles(series) {
  return series.parts.map((entry) => {
    if (entry.status === "planned") {
      return {
        part: entry.part,
        status: "planned",
        title: `Part ${entry.part}: ${entry.title}`,
      };
    }

    const article = articlesBySlug[entry.slug];
    return {
      part: entry.part,
      status: "published",
      slug: entry.slug,
      href: `articles/${entry.slug}`,
      title: article.title,
      cover: article.cover,
      date: entry.date,
      excerpt: entry.excerpt,
    };
  });
}

export function getSeriesRelatedPosts(articleSlug) {
  const info = getSeriesForArticle(articleSlug);
  if (!info) return [];

  return resolveSeriesArticles(info.series)
    .filter((a) => a.status === "published" && a.slug !== articleSlug)
    .sort((a, b) => a.part - b.part)
    .map((a) => ({
      href: a.href,
      cover: a.cover,
      title: a.title,
    }));
}

export const articleSeriesList = ARTICLE_SERIES_SLUGS.map(
  (slug) => articleSeriesBySlug[slug]
);
