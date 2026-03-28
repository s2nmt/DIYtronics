import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { ProductDetailStrings } from '../content/micromouseProduct';
import { assetPath } from '../utils/assetPath';
import '../styles/product-detail.css';

export type ProductGallery =
  | { kind: 'image'; src: string }
  | { kind: 'video'; src: string };

export function ProductDetailTemplate({
  strings: c,
  introImage,
  gallery,
}: {
  strings: ProductDetailStrings;
  introImage: { src: string; width: 'half' | 'third' | 'full' };
  gallery?: ProductGallery | null;
}) {
  useEffect(() => {
    document.title = c.documentTitle;
  }, [c.documentTitle]);

  const imgClass =
    introImage.width === 'half'
      ? 'intro-img intro-img--half'
      : introImage.width === 'third'
        ? 'intro-img intro-img--third'
        : 'intro-img';

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
          <h2>{c.sidebarTitle}</h2>
          <div className="desc">{c.sidebarDesc}</div>
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
            {c.sidebarAbout}
          </Link>
        </aside>

        <div className="main-content">
          <section className="product-section">
            <h1 className="product-title">{c.productTitle}</h1>
            <img src={assetPath(introImage.src)} alt="" className={imgClass} />
            <h2>{c.introHeading}</h2>
            <p>{c.introBody}</p>
          </section>

          <section className="product-section">
            <h2>{c.specsHeading}</h2>
            <ul>
              {c.specLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <section className="product-section">
            <h2>{c.detailsHeading}</h2>
            <p>{c.detailsBody}</p>
          </section>

          {gallery ? (
            <section className="product-section">
              <h2>{c.galleryHeading}</h2>
              {gallery.kind === 'image' ? (
                <img src={assetPath(gallery.src)} alt="" className="gallery-img" />
              ) : (
                <video controls className="product-detail-video">
                  <source src={assetPath(gallery.src)} type="video/mp4" />
                </video>
              )}
            </section>
          ) : null}
        </div>
      </div>
    </main>
  );
}
