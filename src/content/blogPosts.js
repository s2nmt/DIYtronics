/** Standalone posts only — series are listed via `articleSeriesList`. Newest first. */
export const blogPosts = [
  {
    href: "articles/post6",
    cover: "img/post3/cover.png",
    title: "ESP32 OTA Firmware Update over HTTPS",
    author: "Tuan Nguyen",
    date: "Mar 3, 2025",
    excerpt:
      "Update ESP32 firmware over the air: the device checks an HTTPS URL for a new binary, verifies the server with a Root CA, and installs the update. Includes version header (304 when up to date) and full sketch walkthrough.",
  },
  {
    href: "articles/post2",
    cover: "img/post2/cover.png",
    title: "How to Send Email Using Node.js",
    author: "Tuan Nguyen",
    date: "Jan 21, 2025",
    excerpt:
      "Sending emails programmatically is a common requirement in modern web applications. Learn how to send emails using Node.js with the popular Nodemailer library, including HTML emails, attachments, and best practices.",
  },
];

export const blogRecentSidebarCount = 4;

export const blogCategories = ["Tutorial", "Technology", "Series"];

export const blogTags = [
  "IoT",
  "ESP32",
  "MQTT",
  "OTA",
  "Yocto",
  "BeagleBone",
  "Embedded Linux",
  "STM32",
  "Node.js",
  "Firmware",
];
