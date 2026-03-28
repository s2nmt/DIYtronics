import { type RefObject, useEffect } from 'react';

const HEADER_OFFSET = 100;

export function useAdminPricingToc(
  tocRoot: RefObject<HTMLElement | null>,
  contentRoot: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const toc = tocRoot.current;
    const content = contentRoot.current;
    if (!toc || !content) return;

    const links = toc.querySelectorAll<HTMLAnchorElement>('.toc-list a[href^="#"]');
    const sections = content.querySelectorAll<HTMLElement>('h2[id], h3[id]');

    const onTocClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a');
      if (!a || !toc.contains(a)) return;
      const href = a.getAttribute('href');
      if (!href?.startsWith('#')) return;
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    toc.addEventListener('click', onTocClick);

    const onScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
          current = section.id;
        }
      });
      links.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      toc.removeEventListener('click', onTocClick);
      window.removeEventListener('scroll', onScroll);
    };
  }, [tocRoot, contentRoot]);
}
