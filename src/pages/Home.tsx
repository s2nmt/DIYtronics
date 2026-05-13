import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../utils/assetPath';
export function Home() {
  const { t } = useLanguage();

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

      <section id="services" className="services">
        <div className="container">
          <h2>{t('services.title')}</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image-wrap">
                <img className="service-image" src={assetPath('img/platformIot.png')} alt={t('services.products.title')} />
              </div>
              <h3>{t('services.products.title')}</h3>
              <p>{t('services.products.desc')}</p>
            </div>
            <div className="service-card">
              <div className="service-image-wrap">
                <img className="service-image" src={assetPath('img/hardwaredevelop.png')} alt={t('services.hardware.title')} />
              </div>
              <h3>{t('services.hardware.title')}</h3>
              <p>{t('services.hardware.desc')}</p>
            </div>
            <div className="service-card">
              <div className="service-image-wrap">
                <img className="service-image" src={assetPath('img/softwareIoT.png')} alt={t('services.software.title')} />
              </div>
              <h3>{t('services.software.title')}</h3>
              <p>{t('services.software.desc')}</p>
            </div>
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

    </main>
  );
}
