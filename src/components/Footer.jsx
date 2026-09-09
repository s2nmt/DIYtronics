import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="logo">
              Gemify
            </Link>
            <p className="footer-tag">
              Complete IoT solutions and hardware for monitoring, energy, and
              autonomous vehicles.
            </p>
          </div>

          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li>
                <a href="/#services">Monitoring & control</a>
              </li>
              <li>
                <a href="/#services">Energy management</a>
              </li>
              <li>
                <a href="/#services">Autonomous vehicles</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:info@gemify.vn">info@gemify.vn</a>
              </li>
              <li>
                <a href="tel:+842873008868">+84 28 7300 8868</a>
              </li>
              <li>District 7, Ho Chi Minh City</li>
            </ul>
          </div>
        </div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} Gemify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
