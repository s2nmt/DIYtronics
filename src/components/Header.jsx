import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const hashLink = (id) => (location.pathname === "/" ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`header ${scrolled || open ? "header--scrolled" : ""}`}>
      <div className="container navbar">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          Gemify
        </Link>

        <button
          className={`menu-btn ${open ? "open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-menu ${open ? "open" : ""}`}>
          <a href={hashLink("services")} className="nav-link" onClick={() => setOpen(false)}>
            Services
          </a>
          <Link to="/products" className="nav-link" onClick={() => setOpen(false)}>
            Products
          </Link>
          <a href={hashLink("process")} className="nav-link" onClick={() => setOpen(false)}>
            Process
          </a>
          <a
            href={hashLink("contact")}
            className="nav-link nav-cta"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
