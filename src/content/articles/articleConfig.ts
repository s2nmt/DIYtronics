import type { ArticleRelatedPost } from '../../components/ArticlePostShell';
import post1Body from './post1.body.html?raw';
import post2Body from './post2.body.html?raw';
import post3Body from './post3.body.html?raw';
import post4Body from './post4.body.html?raw';
import post5Body from './post5.body.html?raw';
import post6Body from './post6.body.html?raw';
import yoctoBeagleboneBlackPart1Body from './yocto-beaglebone-black-part-1-introduction.body.html?raw';
import yoctoBeagleboneBlackPart2Body from './yocto-beaglebone-black-part-2-kernel-local.body.html?raw';
import yoctoBeagleboneBlackPart3Body from './yocto-beaglebone-black-part-3-st7789-display.body.html?raw';
import yoctoBeagleboneBlackPart4Body from './yocto-beaglebone-black-part-4-button-p8-keys.body.html?raw';
import yoctoBeagleboneBlackPart5Body from './yocto-beaglebone-black-part-5-mpu6050-imu.body.html?raw';

function rel(href: string, cover: string, title: string): ArticleRelatedPost {
  return { href, cover, title };
}

export type ArticleConfig = {
  documentTitle: string;
  title: string;
  cover: string;
  category: string;
  metaLine: string;
  body: string;
  contentId: string;
  tocListId: string;
  related: ArticleRelatedPost[];
};

export const ARTICLE_SLUGS = [
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
] as const;

export type ArticleSlug = (typeof ARTICLE_SLUGS)[number];

export const articlesBySlug: Record<ArticleSlug, ArticleConfig> = {
  'yocto-beaglebone-black-part-5-mpu6050-imu': {
    documentTitle:
      'Yocto on BeagleBone Black — Part 5: MPU6050 IMU | Gemify Blog',
    title: 'Yocto on BeagleBone Black — Part 5: Enabling the MPU6050 IMU',
    cover: 'img/articles/yocto-beaglebone-black-part-5-mpu6050-imu/cover.png',
    category: 'Series',
    metaLine: 'by Tuan Nguyen | Jun 15, 2026',
    body: yoctoBeagleboneBlackPart5Body,
    contentId: 'article-yocto-bbb-part-5-content',
    tocListId: 'toc-list-yocto-bbb-part-5',
    related: [],
  },
  'yocto-beaglebone-black-part-4-button-p8-keys': {
    documentTitle:
      'Yocto on BeagleBone Black — Part 4: P8 Buttons & LEDs | Gemify Blog',
    title: 'Yocto on BeagleBone Black — Part 4: P8 Buttons & LEDs (button-p8-keys)',
    cover: 'img/articles/yocto-beaglebone-black-part-4-button-p8-keys/cover.png',
    category: 'Series',
    metaLine: 'by Tuan Nguyen | Jun 15, 2026',
    body: yoctoBeagleboneBlackPart4Body,
    contentId: 'article-yocto-bbb-part-4-content',
    tocListId: 'toc-list-yocto-bbb-part-4',
    related: [],
  },
  'yocto-beaglebone-black-part-3-st7789-display': {
    documentTitle:
      'Yocto on BeagleBone Black — Part 3: ST7789 Display | Gemify Blog',
    title: 'Yocto on BeagleBone Black — Part 3: Enabling the ST7789 Display',
    cover: 'img/articles/yocto-beaglebone-black-part-3-st7789-display/cover.png',
    category: 'Series',
    metaLine: 'by Tuan Nguyen | Jun 15, 2026',
    body: yoctoBeagleboneBlackPart3Body,
    contentId: 'article-yocto-bbb-part-3-content',
    tocListId: 'toc-list-yocto-bbb-part-3',
    related: [],
  },
  'yocto-beaglebone-black-part-2-kernel-local': {
    documentTitle:
      'Yocto on BeagleBone Black — Part 2: Building the Kernel Locally | Gemify Blog',
    title: 'Yocto on BeagleBone Black — Part 2: Building the Kernel Locally',
    cover: 'img/articles/yocto-beaglebone-black-part-2-kernel-local/cover.png',
    category: 'Series',
    metaLine: 'by Tuan Nguyen | Jun 15, 2025',
    body: yoctoBeagleboneBlackPart2Body,
    contentId: 'article-yocto-bbb-part-2-content',
    tocListId: 'toc-list-yocto-bbb-part-2',
    related: [],
  },
  'yocto-beaglebone-black-part-1-introduction': {
    documentTitle:
      'Yocto on BeagleBone Black — Part 1: Build Image & Flash SD Card | Gemify Blog',
    title: 'Yocto on BeagleBone Black — Part 1: Build Image & Flash SD Card',
    cover: 'img/articles/yocto-beaglebone-black-part-1-introduction/cover.png',
    category: 'Series',
    metaLine: 'by Tuan Nguyen | Jun 15, 2025',
    body: yoctoBeagleboneBlackPart1Body,
    contentId: 'article-yocto-bbb-part-1-content',
    tocListId: 'toc-list-yocto-bbb-part-1',
    related: [],
  },
  post1: {
    documentTitle:
      'How to Set up an MQTT Broker Using Aedes MQTT on Ubuntu | Gemify Blog',
    title: 'How to Set up an MQTT Broker Using Aedes MQTT on Ubuntu',
    cover: 'img/post1/cover.png',
    category: 'Series',
    metaLine: 'by Tuan Nguyen | Jan 20, 2025',
    body: post1Body,
    contentId: 'article-post1-content',
    tocListId: 'toc-list-post1',
    related: [],
  },
  post2: {
    documentTitle: 'How to Send Email Using Node.js | Gemify Blog',
    title: 'How to Send Email Using Node.js',
    cover: 'img/post2/cover.png',
    category: 'Tutorial',
    metaLine: 'by Tuan Nguyen | Jan 21, 2025',
    body: post2Body,
    contentId: 'article-post2-content',
    tocListId: 'toc-list-post2',
    related: [
      rel('blog/series/mqtt-iot', 'img/post1/cover.png', 'MQTT & MQTTS for IoT'),
    ],
  },
  post3: {
    documentTitle: 'Public MQTTS on ESP32 | Gemify Blog',
    title: 'Public MQTTS on ESP32',
    cover: 'img/post3/cover.png',
    category: 'Series',
    metaLine: 'by Tuan Nguyen | Jan 22, 2025',
    body: post3Body,
    contentId: 'article-post3-content',
    tocListId: 'toc-list-post3',
    related: [],
  },
  post4: {
    documentTitle: 'MQTTS on W5500 and ESP32 | Gemify Blog',
    title: 'MQTTS on W5500 and ESP32',
    cover: 'img/post4/cover.png',
    category: 'Series',
    metaLine: 'by Tuan Nguyen | Jan 23, 2025',
    body: post4Body,
    contentId: 'article-post4-content',
    tocListId: 'toc-list-post4',
    related: [],
  },
  post5: {
    documentTitle: 'MQTTS in A76xx | Gemify Blog',
    title: 'MQTTS in A76xx',
    cover: 'img/post5/cover.png',
    category: 'Series',
    metaLine: 'by Tuan Nguyen | Jan 24, 2025',
    body: post5Body,
    contentId: 'article-post5-content',
    tocListId: 'toc-list-post5',
    related: [],
  },
  post6: {
    documentTitle: 'ESP32 OTA Firmware Update over HTTPS | Gemify Blog',
    title: 'ESP32 OTA Firmware Update over HTTPS',
    cover: 'img/post3/cover.png',
    category: 'Tutorial',
    metaLine: 'by Tuan Nguyen | Mar 3, 2025',
    body: post6Body,
    contentId: 'article-post6-content',
    tocListId: 'toc-list-post6',
    related: [
      rel('blog/series/mqtt-iot', 'img/post1/cover.png', 'MQTT & MQTTS for IoT'),
    ],
  },
};

export function isArticleSlug(s: string): s is ArticleSlug {
  return (ARTICLE_SLUGS as readonly string[]).includes(s);
}
