import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
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
              <Link to="/projects/example-1" className="project-read-more">
                {t('projects.readMore')}
              </Link>
            </div>
            <div className="project-card">
              <div className="service-icon">
                <i className="fas fa-bolt" />
              </div>
              <h3>{t('outsource.project2.title')}</h3>
              <p>{t('outsource.project2.desc')}</p>
              <Link to="/projects/energy-monitoring" className="project-read-more">
                {t('projects.readMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
