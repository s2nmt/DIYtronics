import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="logo">
              Gemify <span>Technology</span>
            </Link>
            <p className="footer-tag">
              Project-based embedded engineering. You keep the source.
            </p>
          </div>

          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li>
                <a href="/#about">About us</a>
              </li>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#projects">Projects</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="/#services">Hardware PCB</a>
              </li>
              <li>
                <a href="/#services">Firmware & Embedded Linux</a>
              </li>
              <li>
                <a href="/#services">IoT platform</a>
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
          © {new Date().getFullYear()} Gemify Technology. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
