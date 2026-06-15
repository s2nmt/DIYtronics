import type { ArticleSeriesConfig, ResolvedSeriesArticle } from '../content/articleSeries';
import { resolveSeriesArticles } from '../content/articleSeries';
import { assetPath } from '../utils/assetPath';

type ArticleSeriesNavProps = {
  series: ArticleSeriesConfig;
  currentPart?: number;
  compact?: boolean;
};

export function ArticleSeriesNav({
  series,
  currentPart,
  compact = false,
}: ArticleSeriesNavProps) {
  const articles = resolveSeriesArticles(series);

  return (
    <nav
      className={`article-series-nav${compact ? ' article-series-nav--compact' : ''}`}
      aria-label={series.title}
    >
      <div className="article-series-nav-header">
        <span className="article-series-nav-label">Series</span>
        <a href={assetPath(`blog/series/${series.slug}`)} className="article-series-nav-title">
          {series.title}
        </a>
      </div>
      <ol className="article-series-nav-list">
        {articles.map((item) => (
          <SeriesNavItem key={item.part} item={item} currentPart={currentPart} />
        ))}
      </ol>
    </nav>
  );
}

function SeriesNavItem({
  item,
  currentPart,
}: {
  item: ResolvedSeriesArticle;
  currentPart?: number;
}) {
  const isCurrent = currentPart === item.part;
  const partLabel = `Part ${item.part}`;

  if (item.status === 'planned') {
    return (
      <li className="article-series-nav-item article-series-nav-item--planned">
        <span className="article-series-nav-part">{partLabel}</span>
        <span className="article-series-nav-item-title">{item.title}</span>
        <span className="article-series-nav-badge">Coming soon</span>
      </li>
    );
  }

  return (
    <li
      className={`article-series-nav-item${isCurrent ? ' article-series-nav-item--current' : ''}`}
    >
      <span className="article-series-nav-part">{partLabel}</span>
      {isCurrent ? (
        <span className="article-series-nav-item-title" aria-current="page">
          {item.title}
        </span>
      ) : (
        <a href={assetPath(item.href!)} className="article-series-nav-item-title">
          {item.title}
        </a>
      )}
    </li>
  );
}
