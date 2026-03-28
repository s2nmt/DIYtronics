import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ProjectArticleGallerySection } from '../components/ProjectArticleGallerySection';
import { projectArticleEnergy } from '../content/projectArticleEnergy';
import '../styles/project-article.css';

export function ProjectArticleEnergyPage() {
  const { language } = useLanguage();
  const c = projectArticleEnergy[language];

  useEffect(() => {
    document.title = c.documentTitle;
  }, [c.documentTitle]);

  return (
    <main className="project-article-page">
      <article>
        <div className="project-article-container">
          <Link to="/projects" className="project-article-back">
            {c.back}
          </Link>
          <h1 className="project-article-title">{c.title}</h1>
          <p className="project-article-meta">{c.meta}</p>

          <div className="project-article-content">
            <p>{c.lead}</p>

            <h2>{c.overviewTitle}</h2>
            <p>{c.overview}</p>

            <h2>{c.featuresTitle}</h2>
            <ul>
              {c.features.map((item) => (
                <li key={item.strong}>
                  <strong>{item.strong}</strong>
                  {item.text}
                </li>
              ))}
            </ul>

            <h2>{c.techTitle}</h2>
            <div className="tech-tags">
              {c.techTags.map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>
            <p>{c.techBody}</p>

            <h2>{c.uiTitle}</h2>
            <p>{c.uiBody}</p>
            {c.uiGallerySections.length > 0 ? (
              <div className="project-article-ui-galleries">
                {c.uiGallerySections.map((section) => (
                  <ProjectArticleGallerySection
                    key={`${section.id}-${language}`}
                    sectionId={section.id}
                    title={section.sectionTitle}
                    images={section.images}
                    prevAria={c.uiCarouselPrevAria}
                    nextAria={c.uiCarouselNextAria}
                  />
                ))}
              </div>
            ) : null}

            <h2>{c.outcomeTitle}</h2>
            <p>{c.outcomeBody}</p>
          </div>
        </div>
      </article>
    </main>
  );
}
