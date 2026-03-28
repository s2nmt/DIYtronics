import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../utils/assetPath';
import '../styles/product-detail.css';

export function RfidProductPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t('rfid.productTitle')} | Gemify`;
  }, [t]);

  return (
    <main className="product-detail-page">
      <div className="product-layout">
        <aside className="sidebar-diy">
          <div className="logo">
            <i
              className="fas fa-microchip"
              style={{
                fontSize: '4.5rem',
                color: '#111',
                marginBottom: '0.7rem',
                display: 'block',
              }}
              aria-hidden
            />
          </div>
          <h2>{t('rfid.sidebarTitle')}</h2>
          <div className="desc">{t('rfid.sidebarDesc')}</div>
          <div className="sidebar-social">
            <a href="https://github.com/s2nmt" target="_blank" rel="noreferrer">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube" />
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://www.tiktok.com/@gemify_technology" target="_blank" rel="noreferrer">
              <i className="fab fa-tiktok" />
            </a>
          </div>
          <Link to="/#about" className="about-btn">
            {t('rfid.sidebarAbout')}
          </Link>
        </aside>

        <div className="main-content">
          <section className="product-section">
            <h1 className="product-title">{t('rfid.productTitle')}</h1>
            <img
              src={assetPath('img/case_cover_smart_parking.png')}
              alt=""
              className="intro-img"
            />
            <h2>{t('rfid.introHeading')}</h2>
            <p>{t('rfid.introBody')}</p>
          </section>

          <section className="product-section">
            <h2>{t('rfid.specsHeading')}</h2>
            <ul>
              <li>
                {t('rfid.labelProcessor')}: STM32F103, BW16
              </li>
              <li>
                {t('rfid.labelConnectivity')}: WiFi, RS485
              </li>
              <li>
                {t('rfid.labelPower')}: {t('rfid.powerValue')}
              </li>
              <li>
                {t('rfid.labelDimensions')}: 100×80×30mm
              </li>
            </ul>
          </section>

          <section className="product-section">
            <h2>{t('rfid.detailsHeading')}</h2>
            <p>{t('rfid.detailsBody')}</p>
          </section>

          <section className="product-section">
            <h2>{t('rfid.galleryHeading')}</h2>
            <img
              src={assetPath('img/case_smart_parking.jpg')}
              alt=""
              className="gallery-img"
            />
          </section>
        </div>
      </div>
    </main>
  );
}
