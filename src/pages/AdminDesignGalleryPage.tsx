import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assetPath } from '../utils/assetPath';
import '../styles/admin-pages.css';

const shots = [
  {
    src: 'img/price_processing/home.png',
    title: 'Home Layout',
    caption: 'Giao diện trang chủ tổng quan',
  },
  {
    src: 'img/price_processing/temperature.png',
    title: 'Temperature Feature',
    caption: 'Tính năng theo dõi nhiệt độ',
  },
  {
    src: 'img/price_processing/humidity.png',
    title: 'Humidity Feature',
    caption: 'Tính năng theo dõi độ ẩm',
  },
  {
    src: 'img/price_processing/warning.png',
    title: 'Warning Feature',
    caption: 'Tính năng cảnh báo hệ thống',
  },
] as const;

export function AdminDesignGalleryPage() {
  useEffect(() => {
    document.title = 'Design Gallery | Gemify Admin';
  }, []);

  return (
    <div className="admin-app design-gallery-page">
      <section className="admin-page">
        <div className="admin-container-wide">
          <Link to="/admin/pricing" className="back-button">
            <i className="fas fa-arrow-left" aria-hidden /> Quay lại Pricing Process
          </Link>

          <div className="content-card">
            <h2 className="section-title">Design layout và mô tả các tính năng hệ thống</h2>

            <div className="design-grid">
              {shots.map((s) => (
                <div key={s.src} className="design-item">
                  <img src={assetPath(s.src)} alt="" />
                  <h3>{s.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                    {s.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
