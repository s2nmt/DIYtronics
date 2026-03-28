import { useCallback, useEffect, useState } from 'react';
import { assetPath } from '../utils/assetPath';

export type GalleryImage = { src: string; alt: string };

type Props = {
  sectionId: string;
  title: string;
  images: GalleryImage[];
  prevAria: string;
  nextAria: string;
};

export function ProjectArticleGallerySection({
  sectionId,
  title,
  images,
  prevAria,
  nextAria,
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex((i) => (images.length ? Math.min(i, images.length - 1) : 0));
  }, [images.length, sectionId]);

  const showCarousel = images.length > 1;
  const safeIndex = images.length ? index % images.length : 0;
  const slide = images.length === 0 ? undefined : images[safeIndex]!;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  if (!slide) return null;

  return (
    <section className="project-article-gallery-section" aria-labelledby={`gallery-${sectionId}`}>
      <h3 className="project-article-gallery-heading" id={`gallery-${sectionId}`}>
        {title}
      </h3>
      <div className="project-article-carousel">
        {showCarousel ? (
          <button
            type="button"
            className="project-article-carousel-btn"
            onClick={goPrev}
            aria-label={prevAria}
          >
            ‹
          </button>
        ) : (
          <span className="project-article-carousel-spacer" aria-hidden />
        )}
        <figure className="project-article-figure">
          <img
            key={slide.src}
            src={assetPath(slide.src)}
            alt={slide.alt}
            loading="lazy"
            decoding="async"
          />
          {showCarousel ? (
            <figcaption className="project-article-carousel-dots">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  className={
                    i === safeIndex
                      ? 'project-article-carousel-dot is-active'
                      : 'project-article-carousel-dot'
                  }
                  aria-label={`${i + 1} / ${images.length}`}
                  aria-current={i === safeIndex ? 'true' : undefined}
                  onClick={() => setIndex(i)}
                />
              ))}
            </figcaption>
          ) : null}
        </figure>
        {showCarousel ? (
          <button
            type="button"
            className="project-article-carousel-btn"
            onClick={goNext}
            aria-label={nextAria}
          >
            ›
          </button>
        ) : (
          <span className="project-article-carousel-spacer" aria-hidden />
        )}
      </div>
    </section>
  );
}
