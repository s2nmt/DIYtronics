import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  articleSeriesBySlug,
  isArticleSeriesSlug,
  resolveSeriesArticles,
} from "../content/articleSeries";
import { assetPath } from "../utils/assetPath";
import "../styles/article-series-page.css";

export default function ArticleSeriesPage() {
  const { seriesSlug } = useParams();

  const series =
    seriesSlug && isArticleSeriesSlug(seriesSlug)
      ? articleSeriesBySlug[seriesSlug]
      : undefined;

  useEffect(() => {
    if (series) document.title = `${series.title} | Gemify Blog`;
  }, [series]);

  if (!series) return <Navigate to="/blog" replace />;

  const articles = resolveSeriesArticles(series);
  const publishedCount = articles.filter((a) => a.status === "published").length;

  return (
    <div className="article-series-page-root">
      <section className="article-series-hero">
        <div className="article-series-hero-content">
          <p className="article-series-hero-eyebrow">Series</p>
          <h1>{series.title}</h1>
          <p>{series.description}</p>
          <p className="article-series-hero-meta">
            {publishedCount} of {articles.length} parts published
          </p>
        </div>
      </section>

      <section className="article-series-page">
        <div className="article-series-wrapper">
          <div className="article-series-main">
            <h2>All parts</h2>
            <div className="article-series-list">
              {articles.map((item) =>
                item.status === "published" ? (
                  <article key={item.part} className="article-series-card">
                    <img
                      src={assetPath(item.cover)}
                      alt=""
                      className="article-series-card-image"
                    />
                    <div className="article-series-card-content">
                      <span className="article-series-card-part">Part {item.part}</span>
                      <h3>
                        <Link to={`/${item.href}`}>{item.title}</Link>
                      </h3>
                      {item.date ? (
                        <div className="article-series-card-date">{item.date}</div>
                      ) : null}
                      {item.excerpt ? <p>{item.excerpt}</p> : null}
                      <Link to={`/${item.href}`} className="article-series-card-link">
                        Read more →
                      </Link>
                    </div>
                  </article>
                ) : (
                  <article
                    key={item.part}
                    className="article-series-card article-series-card--planned"
                  >
                    <div className="article-series-card-placeholder" aria-hidden>
                      <span>Part {item.part}</span>
                    </div>
                    <div className="article-series-card-content">
                      <span className="article-series-card-part">Part {item.part}</span>
                      <h3>{item.title}</h3>
                      <p className="article-series-card-planned">Coming soon</p>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
