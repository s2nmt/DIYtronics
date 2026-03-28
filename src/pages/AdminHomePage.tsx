import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/admin-pages.css';

export function AdminHomePage() {
  useEffect(() => {
    document.title = 'Admin Panel | Gemify';
  }, []);

  return (
    <div className="admin-app">
      <section className="admin-page">
        <div className="admin-container">
          <div className="admin-header">
            <h1>Admin Panel</h1>
            <p>Management and documentation</p>
          </div>

          <div className="admin-grid">
            <div className="admin-card">
              <div className="admin-card-icon">
                <i className="fas fa-folder" aria-hidden />
              </div>
              <h3>Documents</h3>
              <p>View list of documents and procedures</p>
              <Link to="/admin/documents" className="admin-btn">
                View Documents
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
