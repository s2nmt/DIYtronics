import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../utils/assetPath';
import '../styles/projects-page.css';

export function ProjectsPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = 'Projects | Gemify';
  }, []);

  return (
    <main>
      <section className="projects-hero">
        <div className="container">
          <h1>{t('projects.pageTitle')}</h1>
          <p>{t('projects.subtitle')}</p>
        </div>
      </section>
      <section className="projects-page">
        <div className="container">
          <div className="projects-list">
            <div className="project-card">
              <div className="service-icon">
                <i className="fas fa-thermometer-half" />
              </div>
              <h3>{t('outsource.project1.title')}</h3>
              <p>{t('outsource.project1.desc')}</p>
              <a href={assetPath('project-articles/example-1/index.html')} className="project-read-more">
                {t('projects.readMore')}
              </a>
            </div>
            <div className="project-card">
              <div className="service-icon">
                <i className="fas fa-door-open" />
              </div>
              <h3>{t('outsource.project2.title')}</h3>
              <p>{t('outsource.project2.desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
