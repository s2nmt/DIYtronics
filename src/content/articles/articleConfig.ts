import type { ArticleRelatedPost } from '../../components/ArticlePostShell';
import post1Body from './post1.body.html?raw';
import post2Body from './post2.body.html?raw';
import post3Body from './post3.body.html?raw';
import post4Body from './post4.body.html?raw';
import post5Body from './post5.body.html?raw';
import post6Body from './post6.body.html?raw';

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
  'post1',
  'post2',
  'post3',
  'post4',
  'post5',
  'post6',
] as const;

export type ArticleSlug = (typeof ARTICLE_SLUGS)[number];

export const articlesBySlug: Record<ArticleSlug, ArticleConfig> = {
  post1: {
    documentTitle:
      'How to Set up an MQTT Broker Using Aedes MQTT on Ubuntu | Gemify Blog',
    title: 'How to Set up an MQTT Broker Using Aedes MQTT on Ubuntu',
    cover: 'img/post1/cover.png',
    category: 'Tutorial',
    metaLine: 'by Tuan Nguyen | Jan 20, 2025',
    body: post1Body,
    contentId: 'article-post1-content',
    tocListId: 'toc-list-post1',
    related: [
      rel('articles/post5', 'img/post5/cover.png', 'MQTTS in A76xx'),
      rel('articles/post4', 'img/post4/cover.png', 'MQTTS on W5500 and ESP32'),
      rel('articles/post2', 'img/post2/cover.png', 'How to Send Email Using Node.js'),
      rel('articles/post3', 'img/post3/cover.png', 'Public MQTTs on ESP32'),
    ],
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
      rel('articles/post5', 'img/post5/cover.png', 'MQTTS in A76xx'),
      rel('articles/post4', 'img/post4/cover.png', 'MQTTS on W5500 and ESP32'),
      rel('articles/post1', 'img/post1/cover.png', 'How to Set up an MQTT Broker Using Aedes MQTT on Ubuntu'),
    ],
  },
  post3: {
    documentTitle: 'Public MQTTS on ESP32 | Gemify Blog',
    title: 'Public MQTTS on ESP32',
    cover: 'img/post3/cover.png',
    category: 'Tutorial',
    metaLine: 'by Tuan Nguyen | Jan 22, 2025',
    body: post3Body,
    contentId: 'article-post3-content',
    tocListId: 'toc-list-post3',
    related: [
      rel('articles/post5', 'img/post5/cover.png', 'MQTTS in A76xx'),
      rel('articles/post4', 'img/post4/cover.png', 'MQTTS on W5500 and ESP32'),
      rel('articles/post2', 'img/post2/cover.png', 'How to Send Email Using Node.js'),
    ],
  },
  post4: {
    documentTitle: 'MQTTS on W5500 and ESP32 | Gemify Blog',
    title: 'MQTTS on W5500 and ESP32',
    cover: 'img/post4/cover.png',
    category: 'Tutorial',
    metaLine: 'by Tuan Nguyen | Jan 23, 2025',
    body: post4Body,
    contentId: 'article-post4-content',
    tocListId: 'toc-list-post4',
    related: [
      rel('articles/post5', 'img/post5/cover.png', 'MQTTS in A76xx'),
      rel('articles/post3', 'img/post3/cover.png', 'Public MQTTs on ESP32'),
      rel('articles/post2', 'img/post2/cover.png', 'How to Send Email Using Node.js'),
    ],
  },
  post5: {
    documentTitle: 'MQTTS in A76xx | Gemify Blog',
    title: 'MQTTS in A76xx',
    cover: 'img/post5/cover.png',
    category: 'Tutorial',
    metaLine: 'by Tuan Nguyen | Jan 24, 2025',
    body: post5Body,
    contentId: 'article-post5-content',
    tocListId: 'toc-list-post5',
    related: [
      rel('articles/post4', 'img/post4/cover.png', 'MQTTS on W5500 and ESP32'),
      rel('articles/post3', 'img/post3/cover.png', 'Public MQTTs on ESP32'),
      rel('articles/post1', 'img/post1/cover.png', 'How to Set up an MQTT Broker Using Aedes MQTT on Ubuntu'),
    ],
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
      rel('articles/post5', 'img/post5/cover.png', 'MQTTS in A76xx'),
      rel('articles/post4', 'img/post4/cover.png', 'MQTTS on W5500 and ESP32'),
      rel('articles/post3', 'img/post3/cover.png', 'Public MQTTs on ESP32'),
      rel('articles/post1', 'img/post1/cover.png', 'How to Set up an MQTT Broker Using Aedes MQTT on Ubuntu'),
    ],
  },
};

export function isArticleSlug(s: string): s is ArticleSlug {
  return (ARTICLE_SLUGS as readonly string[]).includes(s);
}
