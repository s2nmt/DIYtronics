import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServicesSection } from '../components/ServicesSection';

export function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = 'Gemify - Technology';
  }, []);

  return (
    <main>
      <section id="home" className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-blob hero-blob--1" />
          <div className="hero-blob hero-blob--2" />
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">{t('hero.badge')}</span>
            <h1>
              {t('hero.titleBrand')}{' '}
              <span className="hero-highlight">{t('hero.titleHighlight')}</span>
            </h1>
            <p>{t('hero.subtitle')}</p>
            <div className="hero-actions">
              <a className="cta-button cta-button--primary" href="#services">
                {t('nav.services')}
              </a>
              <a className="cta-button cta-button--outline" href="#contact">
                {t('nav.contact')}
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <i className="fas fa-microchip" />
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

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
