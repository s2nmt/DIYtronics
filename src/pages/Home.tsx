import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
export function Home() {
  const { t } = useLanguage();
  const [projectStartIndex, setProjectStartIndex] = useState(0);
  const featuredProjects = [
    {
      key: 'micromouse',
      icon: 'fas fa-robot',
      route: '/products/micromouse',
      titleKey: 'products.micromouse.title',
      descKey: 'products.micromouse.desc',
    },
    {
      key: 'rfid',
      icon: 'fas fa-id-card',
      route: '/products/rfid',
      titleKey: 'products.rfid.title',
      descKey: 'products.rfid.desc',
    },
    {
      key: 'translate',
      icon: 'fas fa-language',
      route: '/products/translate',
      titleKey: 'products.translate.title',
      descKey: 'products.translate.desc',
    },
    {
      key: 'project1',
      icon: 'fas fa-thermometer-half',
      route: '/projects/temperature-humidity-monitoring',
      titleKey: 'outsource.project1.title',
      descKey: 'outsource.project1.desc',
    },
    {
      key: 'project2',
      icon: 'fas fa-bolt',
      route: '/projects/energy-monitoring',
      titleKey: 'outsource.project2.title',
      descKey: 'outsource.project2.desc',
    },
    {
      key: 'project3',
      icon: 'fas fa-paw',
      route: '/projects/livestock-monitoring-control',
      titleKey: 'outsource.project3.title',
      descKey: 'outsource.project3.desc',
    },
    {
      key: 'project4',
      icon: 'fas fa-seedling',
      route: '/projects/smart-agriculture-iot',
      titleKey: 'outsource.project4.title',
      descKey: 'outsource.project4.desc',
    },
  ] as const;
  const visibleProjectCount = 3;
  const totalProjectPages = Math.ceil(featuredProjects.length / visibleProjectCount);
  const currentProjectPage = Math.floor(projectStartIndex / visibleProjectCount);
  const visibleProjects = featuredProjects.slice(projectStartIndex, projectStartIndex + visibleProjectCount);

  const goToProjectPage = (pageIndex: number) => {
    setProjectStartIndex(pageIndex * visibleProjectCount);
  };

  useEffect(() => {
    document.title = 'Gemify - Technology';
  }, []);

  return (
    <main>
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>{t('hero.title')}</h1>
            <p>{t('hero.subtitle')}</p>
            {/* <div className="hero-buttons">
              <Link to="/projects" className="cta-button">
                {t('services.viewProjects')}
              </Link>
            </div> */}
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <i className="fas fa-microchip" />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="products">
        <div className="container">
          <h2>{t('products.title')}</h2>
          <div>
            <div className="products-grid featured-projects-grid" key={currentProjectPage}>
              {visibleProjects.map((project) => (
                <div className="product-card" data-product={project.key} key={project.key}>
                  <Link to={project.route} className="product-image-link">
                    <div className="product-image">
                      <i className={project.icon} />
                    </div>
                  </Link>
                  <div className="product-info">
                    <h3>{t(project.titleKey)}</h3>
                    <p>{t(project.descKey)}</p>
                    <div className="product-bottom">
                      <div className="product-buttons featured-project-btn-wrap">
                        <Link aria-label={t('projects.readMore')} className="details-btn" to={project.route}>
                          {t('projects.readMore')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {totalProjectPages > 1 && (
              <div className="featured-projects-pagination" aria-label="Featured project pages">
                {Array.from({ length: totalProjectPages }).map((_, pageIndex) => (
                  <button
                    aria-label={`Project page ${pageIndex + 1}`}
                    className={`featured-projects-dot ${pageIndex === currentProjectPage ? 'active' : ''}`}
                    key={`page-${pageIndex}`}
                    onClick={() => goToProjectPage(pageIndex)}
                    type="button"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>{t('about.title')}</h2>
              <p>{t('about.desc1')}</p>
              <p>{t('about.desc2')}</p>
              <div className="about-stats">
                <div className="stat">
                  <h3>20+</h3>
                  <p>{t('about.stats.products')}</p>
                </div>
                <div className="stat">
                  <h3>24/7</h3>
                  <p>{t('about.stats.support')}</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-placeholder">
                <i className="fas fa-tools" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>{t('services.title')}</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-laptop-code" />
              </div>
              <h3>{t('services.products.title')}</h3>
              <p>{t('services.products.desc')}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-microchip" />
              </div>
              <h3>{t('services.hardware.title')}</h3>
              <p>{t('services.hardware.desc')}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cloud" />
              </div>
              <h3>{t('services.software.title')}</h3>
              <p>{t('services.software.desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
