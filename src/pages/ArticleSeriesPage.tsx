import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  articleSeriesBySlug,
  isArticleSeriesSlug,
  resolveSeriesArticles,
} from '../content/articleSeries';
import { assetPath } from '../utils/assetPath';
import '../styles/article-series-page.css';

export function ArticleSeriesPage() {
  const { seriesSlug } = useParams<{ seriesSlug: string }>();
  const { t, language } = useLanguage();

  const series =
    seriesSlug && isArticleSeriesSlug(seriesSlug)
      ? articleSeriesBySlug[seriesSlug]
      : undefined;

  useEffect(() => {
    if (series) {
      document.title = `${series.title} | ${t('blog.documentTitle')}`;
    }
  }, [series, t, language]);

  if (!series) {
    return <Navigate to="/blog" replace />;
  }

  const articles = resolveSeriesArticles(series);
  const publishedCount = articles.filter((a) => a.status === 'published').length;
  const heroBg = `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${assetPath(series.cover)})`;

  return (
    <main className="article-series-page-root">
      <section className="article-series-hero" style={{ backgroundImage: heroBg }}>
        <div className="article-series-hero-content">
          <p className="article-series-hero-eyebrow">{t('series.eyebrow')}</p>
          <h1>{series.title}</h1>
          <p>{series.description}</p>
          <p className="article-series-hero-meta">
            {publishedCount} {t('series.publishedOf')} {articles.length} {t('series.parts')}
          </p>
        </div>
      </section>

      <section className="article-series-page">
        <div className="article-series-wrapper">
          <div className="article-series-main">
            <h2>{t('series.allParts')}</h2>
            <div className="article-series-list">
              {articles.map((item) =>
                item.status === 'published' ? (
                  <article key={item.part} className="article-series-card">
                    <img src={assetPath(item.cover!)} alt="" className="article-series-card-image" />
                    <div className="article-series-card-content">
                      <span className="article-series-card-part">
                        {t('series.part')} {item.part}
                      </span>
                      <h3>
                        <a href={assetPath(item.href!)}>{item.title}</a>
                      </h3>
                      {item.date ? <div className="article-series-card-date">{item.date}</div> : null}
                      {item.excerpt ? <p>{item.excerpt}</p> : null}
                      <a href={assetPath(item.href!)} className="article-series-card-link">
                        {t('blog.readMore')}
                      </a>
                    </div>
                  </article>
                ) : (
                  <article
                    key={item.part}
                    className="article-series-card article-series-card--planned"
                  >
                    <div className="article-series-card-placeholder" aria-hidden>
                      <span>{t('series.part')} {item.part}</span>
                    </div>
                    <div className="article-series-card-content">
                      <span className="article-series-card-part">
                        {t('series.part')} {item.part}
                      </span>
                      <h3>{item.title}</h3>
                      <span className="article-series-card-soon">{t('series.comingSoon')}</span>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>

          <aside className="article-series-sidebar">
            <a href={assetPath('blog')} className="article-series-back">
              ← {t('series.backToBlog')}
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
