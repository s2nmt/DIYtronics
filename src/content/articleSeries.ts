import { articlesBySlug, type ArticleSlug } from './articles/articleConfig';

export const ARTICLE_SERIES_SLUGS = ['yocto-beaglebone-black', 'mqtt-iot'] as const;

export type ArticleSeriesSlug = (typeof ARTICLE_SERIES_SLUGS)[number];

export type PublishedSeriesPart = {
  status: 'published';
  slug: ArticleSlug;
  part: number;
  date: string;
  excerpt: string;
};

export type PlannedSeriesPart = {
  status: 'planned';
  part: number;
  title: string;
};

export type ArticleSeriesPart = PublishedSeriesPart | PlannedSeriesPart;

export type ArticleSeriesConfig = {
  slug: ArticleSeriesSlug;
  title: string;
  description: string;
  cover: string;
  author: string;
  date: string;
  parts: ArticleSeriesPart[];
};

export type ResolvedSeriesArticle = {
  part: number;
  status: 'published' | 'planned';
  slug?: ArticleSlug;
  href?: string;
  title: string;
  cover?: string;
  date?: string;
  excerpt?: string;
};

export const articleSeriesBySlug: Record<ArticleSeriesSlug, ArticleSeriesConfig> = {
  'yocto-beaglebone-black': {
    slug: 'yocto-beaglebone-black',
    title: 'Yocto on BeagleBone Black',
    description:
      'Build custom embedded Linux for BeagleBone Black with Yocto Scarthgap — image build, SD flash, kernel source, and board bring-up.',
    cover: 'img/articles/yocto-beaglebone-black-part-1-introduction/cover.png',
    author: 'Tuan Nguyen',
    date: 'Jun 15, 2026',
    parts: [
      {
        status: 'published',
        slug: 'yocto-beaglebone-black-part-1-introduction',
        part: 1,
        date: 'Jun 15, 2026',
        excerpt:
          'Ubuntu host setup, clone Poky Scarthgap with meta-openembedded/meta-arm/meta-ti, build core-image-minimal for beaglebone, and flash the .wic.xz image to microSD.',
      },
      {
        status: 'published',
        slug: 'yocto-beaglebone-black-part-2-kernel-local',
        part: 2,
        date: 'Jun 15, 2026',
        excerpt:
          'Fetch and unpack virtual/kernel with BitBake and use devtool modify for local kernel changes.',
      },
      { status: 'planned', part: 3, title: 'UART debug board & bitbake append' },
      { status: 'planned', part: 4, title: 'Custom layers & device tree' },
    ],
  },
  'mqtt-iot': {
    slug: 'mqtt-iot',
    title: 'MQTT & MQTTS for IoT',
    description:
      'End-to-end MQTT tutorials: run a secure broker on Ubuntu, then connect ESP32 over Wi‑Fi, W5500 Ethernet, and A76xx LTE with MQTTS.',
    cover: 'img/post1/cover.png',
    author: 'Tuan Nguyen',
    date: 'Jan 24, 2025',
    parts: [
      {
        status: 'published',
        slug: 'post1',
        part: 1,
        date: 'Jan 20, 2025',
        excerpt:
          'Set up an MQTT/MQTTS broker on Ubuntu with Aedes and Node.js, including TLS certificates and WebSocket support.',
      },
      {
        status: 'published',
        slug: 'post3',
        part: 2,
        date: 'Jan 22, 2025',
        excerpt:
          'Implement MQTT publish and subscribe on ESP32 over Wi‑Fi with MQTTS, larger buffers, and last-will tracking.',
      },
      {
        status: 'published',
        slug: 'post4',
        part: 3,
        date: 'Jan 23, 2025',
        excerpt:
          'Use the W5500 Ethernet module with ESP32 for wired MQTT/MQTTS with LWT, publish, and subscribe.',
      },
      {
        status: 'published',
        slug: 'post5',
        part: 4,
        date: 'Jan 24, 2025',
        excerpt:
          'A76xx LTE modules over cellular: AT commands for MQTTS connect, LWT, subscribe, publish, and URC handling.',
      },
    ],
  },
};

export function isArticleSeriesSlug(s: string): s is ArticleSeriesSlug {
  return (ARTICLE_SERIES_SLUGS as readonly string[]).includes(s);
}

export function getSeriesForArticle(
  articleSlug: ArticleSlug,
): { series: ArticleSeriesConfig; part: number } | null {
  for (const series of Object.values(articleSeriesBySlug)) {
    for (const entry of series.parts) {
      if (entry.status === 'published' && entry.slug === articleSlug) {
        return { series, part: entry.part };
      }
    }
  }
  return null;
}

export function resolveSeriesArticles(series: ArticleSeriesConfig): ResolvedSeriesArticle[] {
  return series.parts.map((entry) => {
    if (entry.status === 'planned') {
      return {
        part: entry.part,
        status: 'planned',
        title: `Part ${entry.part}: ${entry.title}`,
      };
    }

    const article = articlesBySlug[entry.slug];

    return {
      part: entry.part,
      status: 'published',
      slug: entry.slug,
      href: `articles/${entry.slug}`,
      title: article.title,
      cover: article.cover,
      date: entry.date,
      excerpt: entry.excerpt,
    };
  });
}

export function getSeriesRelatedPosts(
  articleSlug: ArticleSlug,
): { href: string; cover: string; title: string }[] {
  const info = getSeriesForArticle(articleSlug);
  if (!info) return [];

  return resolveSeriesArticles(info.series)
    .filter((a) => a.status === 'published' && a.slug !== articleSlug)
    .sort((a, b) => a.part - b.part)
    .map((a) => ({
      href: a.href!,
      cover: a.cover!,
      title: a.title,
    }));
}

export const articleSeriesList = ARTICLE_SERIES_SLUGS.map((slug) => articleSeriesBySlug[slug]);
