import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector('.header');
      if (!header) return;
      if (window.scrollY > 100) {
        (header as HTMLElement).style.background = 'rgba(255, 255, 255, 0.98)';
        (header as HTMLElement).style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
      } else {
        (header as HTMLElement).style.background = 'rgba(255, 255, 255, 0.95)';
        (header as HTMLElement).style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
