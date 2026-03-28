import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../utils/assetPath';

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, location.hash, closeMenu]);

  const hashLink = (id: string) => (location.pathname === '/' ? `#${id}` : `/#${id}`);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <Link to="/">
              <h1>Gemify</h1>
            </Link>
          </div>
          <ul className={`nav-menu${menuOpen ? ' active' : ''}`}>
            <li>
              <a href={hashLink('home')}>{t('nav.home')}</a>
            </li>
            <li>
              <a href={hashLink('products')}>{t('nav.products')}</a>
            </li>
            <li>
              <a href={hashLink('about')}>{t('nav.about')}</a>
            </li>
            <li>
              <a href={hashLink('services')}>{t('nav.services')}</a>
            </li>
            <li>
              <Link to="/blog">{t('nav.blog')}</Link>
            </li>
          </ul>
          <div className="language-switcher">
            <button
              type="button"
              className={`lang-btn${language === 'vi' ? ' active' : ''}`}
              onClick={() => setLanguage('vi')}
              aria-pressed={language === 'vi'}
            >
              <img
                src={assetPath('img/flagVN.png')}
                alt=""
                className="flag-icon"
                style={{ height: 20, verticalAlign: 'middle', marginRight: 4 }}
              />
              <span className="lang-text">VI</span>
            </button>
            <button
              type="button"
              className={`lang-btn${language === 'en' ? ' active' : ''}`}
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
            >
              <span className="flag">
                <i className="fas fa-globe" />
              </span>
              <span className="lang-text">EN</span>
            </button>
          </div>
          <button
            type="button"
            className={`hamburger${menuOpen ? ' active' : ''}`}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
