import { type RefObject, useEffect } from 'react';

const IMAGES = [
  { src: '/img/price_processing/home.png', caption: 'Home Layout' },
  { src: '/img/price_processing/temperature.png', caption: 'Temperature Feature' },
  { src: '/img/price_processing/humidity.png', caption: 'Humidity Feature' },
  { src: '/img/price_processing/warning.png', caption: 'Warning Feature' },
] as const;

export function useAdminPricingCarousel(contentRoot: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = contentRoot.current;
    if (!root) return;

    const carouselTrack = root.querySelector<HTMLDivElement>('#carousel-track');
    const imageCaption = root.querySelector<HTMLElement>('#image-caption');
    const carouselContainer = root.querySelector<HTMLElement>('#carousel-container');
    const dotsContainer = root.querySelector<HTMLElement>('#dots-indicator');
    const prevArrow = root.querySelector<HTMLButtonElement>('#prev-arrow');
    const nextArrow = root.querySelector<HTMLButtonElement>('#next-arrow');

    if (
      !carouselTrack ||
      !imageCaption ||
      !carouselContainer ||
      !dotsContainer ||
      !prevArrow ||
      !nextArrow
    ) {
      return;
    }

    let currentImageIndex = 0;
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let offsetX = 0;

    const createDots = () => {
      dotsContainer.innerHTML = '';
      IMAGES.forEach((image, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'pricing-carousel-dot';
        if (index === currentImageIndex) dot.classList.add('active');
        dot.setAttribute('aria-label', `Go to ${image.caption}`);
        dot.addEventListener('click', () => goToImage(index));
        dotsContainer.appendChild(dot);
      });
    };

    const updateCarousel = () => {
      const items = carouselTrack.querySelectorAll<HTMLElement>('.carousel-item');
      const prevIndex = (currentImageIndex - 1 + IMAGES.length) % IMAGES.length;
      const nextIndex = (currentImageIndex + 1) % IMAGES.length;

      items.forEach((item) => {
        item.classList.remove('active', 'prev', 'next');
        const itemIndex = parseInt(item.dataset.index ?? '0', 10);
        if (itemIndex === currentImageIndex) item.classList.add('active');
        else if (itemIndex === prevIndex) item.classList.add('prev');
        else if (itemIndex === nextIndex) item.classList.add('next');
      });

      const cur = IMAGES[currentImageIndex];
      if (cur) imageCaption.textContent = cur.caption;
      dotsContainer.querySelectorAll('.pricing-carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentImageIndex);
      });
    };

    const goToImage = (index: number) => {
      currentImageIndex = (index + IMAGES.length) % IMAGES.length;
      updateCarousel();
    };

    const goToNext = () => goToImage(currentImageIndex + 1);
    const goToPrev = () => goToImage(currentImageIndex - 1);

    carouselTrack.innerHTML = '';
    IMAGES.forEach((image, index) => {
      const item = document.createElement('div');
      item.className = 'carousel-item';
      item.dataset.index = String(index);
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.caption;
      item.appendChild(img);
      carouselTrack.appendChild(item);
    });
    createDots();
    updateCarousel();

    const onPrevClick = (e: Event) => {
      e.stopPropagation();
      goToPrev();
    };
    const onNextClick = (e: Event) => {
      e.stopPropagation();
      goToNext();
    };
    prevArrow.addEventListener('click', onPrevClick);
    nextArrow.addEventListener('click', onNextClick);

    const onTrackClick = (e: MouseEvent) => {
      const item = (e.target as HTMLElement).closest('.carousel-item') as HTMLElement | null;
      if (item && !item.classList.contains('active')) {
        goToImage(parseInt(item.dataset.index ?? '0', 10));
      }
    };
    carouselTrack.addEventListener('click', onTrackClick);

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.clientX;
      carouselContainer.style.cursor = 'grabbing';
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      currentX = e.clientX;
      offsetX = currentX - startX;
    };
    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      carouselContainer.style.cursor = 'grab';
      const threshold = 50;
      if (Math.abs(offsetX) > threshold) {
        if (offsetX > 0) goToPrev();
        else goToNext();
      }
      offsetX = 0;
    };
    const onMouseLeave = () => {
      if (isDragging) {
        isDragging = false;
        carouselContainer.style.cursor = 'grab';
        offsetX = 0;
      }
    };

    carouselContainer.addEventListener('mousedown', onMouseDown);
    carouselContainer.addEventListener('mousemove', onMouseMove);
    carouselContainer.addEventListener('mouseup', endDrag);
    carouselContainer.addEventListener('mouseleave', onMouseLeave);

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      isDragging = true;
      startX = t.clientX;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const t = e.touches[0];
      if (!t) return;
      currentX = t.clientX;
      offsetX = currentX - startX;
    };
    const onTouchEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      const threshold = 50;
      if (Math.abs(offsetX) > threshold) {
        if (offsetX > 0) goToPrev();
        else goToNext();
      }
      offsetX = 0;
    };

    carouselContainer.addEventListener('touchstart', onTouchStart, { passive: true });
    carouselContainer.addEventListener('touchmove', onTouchMove, { passive: true });
    carouselContainer.addEventListener('touchend', onTouchEnd);

    const onKeyDown = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      prevArrow.removeEventListener('click', onPrevClick);
      nextArrow.removeEventListener('click', onNextClick);
      carouselTrack.removeEventListener('click', onTrackClick);
      carouselContainer.removeEventListener('mousedown', onMouseDown);
      carouselContainer.removeEventListener('mousemove', onMouseMove);
      carouselContainer.removeEventListener('mouseup', endDrag);
      carouselContainer.removeEventListener('mouseleave', onMouseLeave);
      carouselContainer.removeEventListener('touchstart', onTouchStart);
      carouselContainer.removeEventListener('touchmove', onTouchMove);
      carouselContainer.removeEventListener('touchend', onTouchEnd);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [contentRoot]);
}
