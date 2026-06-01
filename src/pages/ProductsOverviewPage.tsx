import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../utils/assetPath';
import '../styles/products-overview-page.css';

const featuredProducts = [
  {
    key: 'project1',
    icon: 'fas fa-thermometer-half',
    route: '/projects/temperature-humidity-monitoring',
    titleKey: 'outsource.project1.title',
    descKey: 'outsource.project1.desc',
  },
  {
    key: 'rfid',
    icon: 'fas fa-id-card',
    route: '/products/rfid',
    titleKey: 'products.rfid.title',
    descKey: 'products.rfid.desc',
  },
  {
    key: 'beagleboneBlackCape',
    icon: 'fab fa-linux',
    route: '/products/beaglebone-black-cape',
    titleKey: 'products.beagleboneBlackCape.title',
    descKey: 'products.beagleboneBlackCape.desc',
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

export function ProductsOverviewPage() {
  const { t, language } = useLanguage();
  const heroBg = `linear-gradient(rgba(10, 20, 32, 0.62), rgba(10, 20, 32, 0.62)), url(${assetPath('img/IOT.jpg')})`;

  useEffect(() => {
    document.title = t('products.pageTitle');
  }, [t, language]);

  return (
    <main className="products-overview-root">
      <section className="products-overview-hero" style={{ backgroundImage: heroBg }}>
        <div className="container">
          <div className="products-overview-hero-content">
            <h1>{t('products.pageTitle')}</h1>
            <p>{t('products.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="products-overview-page">
        <div className="container">
          <div className="products-overview-welcome">
            <h2>{t('products.welcomeTitle')}</h2>
            <p>{t('products.welcomeBody')}</p>
          </div>

          <div className="products-overview-grid">
            {featuredProducts.map((product) => (
              <article className="products-overview-card" key={product.key}>
                <div className="products-overview-card-head">
                  <div className="products-overview-icon">
                    <i className={product.icon} />
                  </div>
                </div>
                <div className="products-overview-card-content">
                  <h3>{t(product.titleKey)}</h3>
                  <p>{t(product.descKey)}</p>
                  <Link aria-label={t('projects.readMore')} className="products-overview-read-more" to={product.route}>
                    {t('projects.readMore')}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
