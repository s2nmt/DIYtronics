import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ArticlePostShell } from '../components/ArticlePostShell';
import { articlesBySlug, isArticleSlug } from '../content/articles/articleConfig';

export function ArticlePostPage() {
  const { slug } = useParams<{ slug: string }>();

  const def = slug && isArticleSlug(slug) ? articlesBySlug[slug] : undefined;

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
        relatedPosts={def.related}
      />
    </main>
  );
}
