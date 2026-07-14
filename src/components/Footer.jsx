import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="logo">
              Gemify
            </Link>
            <p className="footer-tag">
              Your partner for IoT platform outsourcing, PCB & firmware, and
              mechanical design.
            </p>
          </div>

          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="/#services">Platform outsourcing</a>
              </li>
              <li>
                <a href="/#services">PCB & firmware</a>
              </li>
              <li>
                <a href="/#services">Mechanical design</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="/#contact">Get in touch</a>
              </li>
              <li>
                <a href="mailto:hello@gemify.vn">hello@gemify.vn</a>
              </li>
              <li>
                <a href="tel:+842873008868">+84 28 7300 8868</a>
              </li>
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
