import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Gemify</h3>
            <p>{t('footer.tagline')}</p>
          </div>
          <div className="footer-section">
            <h4>{t('footer.follow')}</h4>
            <div className="social-links">
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
          </div>
          <div className="footer-section" id="contact">
            <h4>{t('footer.contact')}</h4>
            <p
              style={{
                color: 'var(--muted)',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                fontSize: '0.9rem',
              }}
            >
              {t('contact.desc')}
            </p>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <i className="fas fa-envelope" />
                <span>Gemifyvn@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-phone" />
                <span>+84 123-4567</span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-map-marker-alt" />
                <span>Ho Chi Minh City, Viet Nam</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
