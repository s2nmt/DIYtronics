import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../utils/assetPath';
import { blogPosts, blogRecentSidebarCount } from '../content/blogPosts';
import '../styles/blog-page.css';

export function BlogPage() {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState('');

  useEffect(() => {
    document.title = t('blog.documentTitle');
  }, [t, language]);

  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!q) return blogPosts;
    return blogPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q),
    );
  }, [q]);

  const recent = blogPosts.slice(0, blogRecentSidebarCount);

  const heroBg = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${assetPath('img/cover_blog.jpg')})`;

  return (
    <main className="blog-page-root">
      <section
        className="blog-hero"
        style={{ backgroundImage: heroBg }}
      >
        <div className="blog-hero-content">
          <h1>{t('blog.heroTitle')}</h1>
          <p>{t('blog.heroSubtitle')}</p>
        </div>
      </section>

      <section className="blog-page">
        <div className="blog-wrapper">
          <div className="blog-main">
            <div className="welcome-section">
              <h2>{t('blog.welcomeTitle')}</h2>
              <p>{t('blog.welcomeBody')}</p>
            </div>

            {filtered.map((post) => (
              <article key={post.href} className="blog-post">
                <img
                  src={assetPath(post.cover)}
                  alt=""
                  className="blog-post-image"
                />
                <div className="blog-post-content">
                  <h3 className="blog-post-title">
                    <a href={assetPath(post.href)}>{post.title}</a>
                  </h3>
                  <div className="blog-post-meta">
                    {t('blog.by')} {post.author} | {post.date}
                  </div>
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                  <a href={assetPath(post.href)} className="blog-read-more">
                    {t('blog.readMore')}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <aside className="blog-sidebar">
            <div className="sidebar-widget">
              <h3>{t('blog.recentPosts')}</h3>
              {recent.map((post) => (
                <div key={post.href} className="recent-post">
                  <img src={assetPath(post.cover)} alt="" />
                  <div className="recent-post-content">
                    <h4>
                      <a href={assetPath(post.href)}>{post.title}</a>
                    </h4>
                    <div className="date">{post.date}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="sidebar-widget">
              <h3>{t('blog.search')}</h3>
              <form
                className="search-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="search"
                  placeholder={t('blog.searchPlaceholder')}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label={t('blog.search')}
                />
                <button type="submit" aria-label={t('blog.search')}>
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>

            <div className="sidebar-widget">
              <h3>{t('blog.categories')}</h3>
              <ul className="categories-list">
                <li>
                  <a href="#">{t('blog.categoryTutorial')}</a>
                </li>
                <li>
                  <a href="#">{t('blog.categoryTechnology')}</a>
                </li>
              </ul>
            </div>

            <div className="sidebar-widget">
              <h3>{t('blog.tags')}</h3>
              <div className="tags-list">
                {(
                  [
                    'blog',
                    'design',
                    'technology',
                    'tutorial',
                    'IoT',
                    'Node.js',
                    'email',
                    'ESP32',
                    'MQTT',
                    'OTA',
                  ] as const
                ).map((tag) => (
                  <a key={tag} href="#">
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
