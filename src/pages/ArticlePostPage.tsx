import { useEffect, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ArticlePostShell } from '../components/ArticlePostShell';
import { getSeriesRelatedPosts } from '../content/articleSeries';
import { articlesBySlug, isArticleSlug } from '../content/articles/articleConfig';

export function ArticlePostPage() {
  const { slug } = useParams<{ slug: string }>();

  const def = slug && isArticleSlug(slug) ? articlesBySlug[slug] : undefined;

  const { relatedPosts, relatedHeading } = useMemo(() => {
    if (!slug || !isArticleSlug(slug) || !def) {
      return { relatedPosts: def?.related ?? [], relatedHeading: 'Related Articles' as const };
    }
    const seriesRelated = getSeriesRelatedPosts(slug);
    if (seriesRelated.length > 0) {
      return { relatedPosts: seriesRelated, relatedHeading: 'More in this series' as const };
    }
    return { relatedPosts: def.related, relatedHeading: 'Related Articles' as const };
  }, [slug, def]);

  useEffect(() => {
    if (def) document.title = def.documentTitle;
  }, [def]);

  if (!def) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main>
      <ArticlePostShell
        tocKey={def.body}
        contentId={def.contentId}
        tocListId={def.tocListId}
        title={def.title}
        cover={def.cover}
        category={def.category}
        metaLine={def.metaLine}
        bodyHtml={def.body}
        relatedPosts={relatedPosts}
        relatedHeading={relatedHeading}
      />
    </main>
  );
}
