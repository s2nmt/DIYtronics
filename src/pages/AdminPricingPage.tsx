import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import pricingBody from '../content/admin/pricingMain.body.html?raw';
import { pricingTocItems } from '../content/admin/pricingToc';
import { useAdminPricingCarousel } from '../hooks/useAdminPricingCarousel';
import { useAdminPricingToc } from '../hooks/useAdminPricingToc';
import '../styles/admin-pages.css';

export function AdminPricingPage() {
  const tocRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Pricing Process | Gemify Admin';
  }, []);

  useAdminPricingToc(tocRef, contentRef);
  useAdminPricingCarousel(contentRef);

  return (
    <div className="admin-app admin-pricing">
      <section className="admin-page">
        <div className="admin-container">
          <aside ref={tocRef} className="sidebar-toc">
            <div className="toc-card">
              <h3>Table of Contents</h3>
              <ul className="toc-list">
                {pricingTocItems.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="content-wrapper">
            <Link to="/admin/documents" className="back-link">
              <i className="fas fa-arrow-left" aria-hidden />
              <span>Back to Documents</span>
            </Link>

            <div
              ref={contentRef}
              className="pricing-html-root"
              // eslint-disable-next-line react/no-danger -- migrated static pricing document
              dangerouslySetInnerHTML={{ __html: pricingBody }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
