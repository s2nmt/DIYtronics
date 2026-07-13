import { Link, NavLink } from "react-router-dom";
import "./BlogHeader.css";

export default function BlogHeader() {
  return (
    <header className="blog-chrome-header">
      <div className="blog-chrome-header__inner">
        <Link to="/blog" className="blog-chrome-logo">
          Gemify <span>Blog</span>
        </Link>

        <nav className="blog-chrome-nav" aria-label="Blog">
          <NavLink to="/blog" end className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            Posts
          </NavLink>
          <a href="/" className="blog-chrome-site">
            Company site
          </a>
        </nav>
      </div>
    </header>
  );
}
