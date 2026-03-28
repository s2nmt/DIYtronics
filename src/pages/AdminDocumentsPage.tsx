import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/admin-pages.css';

export function AdminDocumentsPage() {
  useEffect(() => {
    document.title = 'Documents | Gemify Admin';
  }, []);

  return (
    <div className="admin-app">
      <section className="admin-page">
        <div className="admin-container">
          <Link to="/admin" className="back-link">
            <i className="fas fa-arrow-left" aria-hidden />
            <span>Back to Admin</span>
          </Link>

          <div className="admin-header">
            <h1>Documents</h1>
            <p>List of documents and procedures</p>
          </div>

          <div className="admin-grid">
            <div className="admin-card">
              <div className="admin-card-icon">
                <i className="fas fa-dollar-sign" aria-hidden />
              </div>
              <h3>Pricing Process</h3>
              <p>Customer pricing and quotation procedures</p>
              <Link to="/admin/pricing" className="admin-btn">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
