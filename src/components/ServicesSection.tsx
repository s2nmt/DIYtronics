import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../utils/assetPath';
import '../styles/services-section.css';

const services = [
  {
    key: 'products',
    image: 'img/platformIot.png',
    icon: 'fas fa-layer-group',
    reverse: false,
  },
  {
    key: 'hardware',
    image: 'img/hardwaredevelop.png',
    icon: 'fas fa-microchip',
    reverse: true,
  },
  {
    key: 'software',
    image: 'img/softwareIoT.png',
    icon: 'fas fa-laptop-code',
    reverse: false,
  },
] as const;

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="services-showcase">
      <div className="container">
        <header className="services-showcase-header">
          <p className="services-showcase-label">{t('services.label')}</p>
          <h2>{t('services.title')}</h2>
          <p className="services-showcase-subtitle">{t('services.subtitle')}</p>
        </header>

        <div className="services-showcase-list">
          {services.map((service, index) => (
            <article
              className={`services-showcase-item${service.reverse ? ' services-showcase-item--reverse' : ''}`}
              key={service.key}
            >
              <div className="services-showcase-media">
                <img
                  className="services-showcase-image"
                  src={assetPath(service.image)}
                  alt={t(`services.${service.key}.title`)}
                  loading="lazy"
                />
              </div>

              <div className="services-showcase-body">
                <div className="services-showcase-meta">
                  <span className="services-showcase-index">{String(index + 1).padStart(2, '0')}</span>
                  <div className="services-showcase-icon" aria-hidden="true">
                    <i className={service.icon} />
                  </div>
                </div>
                <h3>{t(`services.${service.key}.title`)}</h3>
                <p>{t(`services.${service.key}.desc`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
