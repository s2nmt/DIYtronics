import { useArticleToc } from '../hooks/useArticleToc';
import { assetPath } from '../utils/assetPath';
import '../styles/article-page.css';

export type ArticleRelatedPost = {
  href: string;
  cover: string;
  title: string;
};

export function ArticlePostShell({
  bodyHtml,
  title,
  cover,
  category,
  metaLine,
  contentId,
  tocListId,
  tocKey,
  relatedPosts,
}: {
  bodyHtml: string;
  title: string;
  cover: string;
  category: string;
  metaLine: string;
  contentId: string;
  tocListId: string;
  tocKey: string;
  relatedPosts: ArticleRelatedPost[];
}) {
  useArticleToc(`#${contentId}`, tocListId, tocKey);

  return (
    <div className="article-post-page">
      <article className="article-page">
        <div className="article-container">
          <div className="article-wrapper">
            <aside className="article-toc">
              <div className="toc-title">Table of Contents</div>
              <ul className="toc-list" id={tocListId} />
            </aside>

            <div className="article-main">
              <header className="article-header">
                <h1 className="article-title">{title}</h1>
              </header>

              <img
                src={assetPath(cover)}
                alt=""
                className="article-featured-image"
              />

              <div
                id={contentId}
                className="article-content"
                // eslint-disable-next-line react/no-danger -- long-form article HTML from bundled fragment
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
              />

              <div className="article-meta">
                <span className="article-category">{category}</span>
                <span className="article-date">
                  <i className="far fa-calendar" aria-hidden />
                  <span>{metaLine}</span>
                </span>
              </div>
            </div>

            <aside className="article-sidebar">
              <div className="article-footer-section">
                <h4>Related Articles</h4>
                <div className="related-articles-grid">
                  {relatedPosts.map((p) => (
                    <a
                      key={p.href}
                      href={assetPath(p.href)}
                      className="related-article-card"
                    >
                      <div className="related-article-image">
                        <img src={assetPath(p.cover)} alt="" />
                      </div>
                      <div className="related-article-content">
                        <h5>{p.title}</h5>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="sidebar-ad">
                <h4>Our Services</h4>
                <p>Gemify provides embedded systems and IoT solutions.</p>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
}
