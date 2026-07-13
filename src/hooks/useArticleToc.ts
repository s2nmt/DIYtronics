import { useEffect } from 'react';

const HEADER_OFFSET = 90;

export function useArticleToc(
  contentSelector: string,
  tocListId: string,
  contentKey: string,
) {
  useEffect(() => {
    const content = document.querySelector(contentSelector);
    const tocList = document.getElementById(tocListId);
    if (!content || !tocList) return;

    tocList.innerHTML = '';
    const headings = content.querySelectorAll('h2, h3');
    const scrollToHeading = (id: string) => {
      const target = document.getElementById(id);
      if (!target) return;
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    headings.forEach((heading) => {
      const el = heading as HTMLElement;
      if (!el.id) {
        el.id = el.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '') ?? '';
      }
      const li = document.createElement('li');
      li.className = `toc-item toc-level-${el.tagName.toLowerCase()}`;
      const a = document.createElement('a');
      a.href = `#${el.id}`;
      a.textContent = el.textContent ?? '';
      a.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToHeading(el.id);
      });
      li.appendChild(a);
      tocList.appendChild(li);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          tocList.querySelectorAll('a').forEach((x) => x.classList.remove('active'));
          const link = tocList.querySelector(`a[href="#${id}"]`);
          link?.classList.add('active');
        });
      },
      { rootMargin: '-100px 0px -66%', threshold: 0 },
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [contentSelector, tocListId, contentKey]);
}
