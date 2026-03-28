import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <div className="hero-buttons">
              <Link to="/projects" className="cta-button">
                {t('services.viewProjects')}
              </Link>
            </div>
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
          <div className="products-grid">
            <div className="product-card" data-product="micromouse">
              <a href={assetPath('micromouse.html')} className="product-image-link">
                <div className="product-image">
                  <i className="fas fa-robot icon-micromouse" />
                </div>
              </a>
              <div className="product-info">
                <h3>{t('products.micromouse.title')}</h3>
                <p>{t('products.micromouse.desc')}</p>
                <div className="product-features">
                  <span>{t('products.micromouse.feature1')}</span>
                  <span>{t('products.micromouse.feature2')}</span>
                  <span>{t('products.micromouse.feature3')}</span>
                </div>
                <div className="product-bottom">
                  <div className="product-buttons" style={{ justifyContent: 'center', display: 'flex' }}>
                    <a className="buy-btn" href="#contact">
                      {t('products.buy')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-card" data-product="rfid-nfc">
              <Link to="/products/rfid" className="product-image-link">
                <div className="product-image">
                  <i className="fas fa-id-card" />
                </div>
              </Link>
              <div className="product-info">
                <h3>{t('products.rfid.title')}</h3>
                <p>{t('products.rfid.desc')}</p>
                <div className="product-features">
                  <span>{t('products.rfid.feature1')}</span>
                  <span>{t('products.rfid.feature2')}</span>
                  <span>{t('products.rfid.feature3')}</span>
                </div>
                <div className="product-bottom">
                  <div className="product-buttons" style={{ justifyContent: 'center', display: 'flex' }}>
                    <a className="buy-btn" href="#contact">
                      {t('products.buy')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-card" data-product="translate-mini">
              <a href={assetPath('translate.html')} className="product-image-link">
                <div className="product-image">
                  <i className="fas fa-language" />
                </div>
              </a>
              <div className="product-info">
                <h3>{t('products.translate.title')}</h3>
                <p>{t('products.translate.desc')}</p>
                <div className="product-bottom">
                  <div className="product-buttons" style={{ justifyContent: 'center', display: 'flex' }}>
                    <a className="buy-btn" href="#contact">
                      {t('products.buy')}
                    </a>
                  </div>
                </div>
              </div>
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
