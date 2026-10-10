import { useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "../utils/assetPath";

const slides = [
  {
    kicker: "Embedded engineering partner",
    title: "Embedded and IoT engineering.",
    sub: "PCB, firmware, Embedded Linux, and IoT platforms — from spec to bring-up.",
    image: "images/hero-pcb.jpg",
    alt: "Printed circuit board",
    showActions: true,
    large: true,
  },
  {
    kicker: "IoT",
    title: "Comprehensive IoT solutions",
    sub: "Hardware, firmware, and software as one project — from the board to the dashboard.",
    image: "images/service-iot.jpg",
    alt: "IoT dashboard",
    showActions: true,
  },
  {
    kicker: "Hardware",
    title: "Advanced PCB design",
    sub: "Schematic, multilayer layout, DFM, and Gerber — a board ready for manufacture.",
    image: "images/service-pcb.jpg",
    alt: "Printed circuit board",
    showActions: true,
  },
  {
    kicker: "Firmware",
    title: "Firmware & Embedded Linux",
    sub: "Bare-metal and RTOS on MCUs, or Linux on SoCs — from bring-up to a production image.",
    image: "images/service-firmware.jpg",
    alt: "Processor in a socket",
    showActions: true,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(0);
  const count = slides.length;

  const go = useCallback(
    (next) => {
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => go(index + 1), 6500);
    return () => window.clearInterval(id);
  }, [paused, index, go]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(index - 1);
      if (e.key === "ArrowRight") go(index + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  return (
    <section
      className="hero"
      id="home"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        startX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - startX.current;
        if (dx > 50) go(index - 1);
        if (dx < -50) go(index + 1);
      }}
    >
      <div
        className="hero__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <article className="hero__slide" key={s.title} aria-hidden={i !== index}>
            <div className={`container hero__layout${s.large ? "" : " hero__layout--photo"}`}>
              <div className="hero__content">
                {s.kicker ? <p className="hero__kicker">{s.kicker}</p> : null}
                {i === index ? (
                  <h1 className={`hero__headline${s.large ? " hero__headline--lg" : ""}`}>
                    {s.title}
                  </h1>
                ) : (
                  <p className={`hero__headline${s.large ? " hero__headline--lg" : ""}`}>
                    {s.title}
                  </p>
                )}
                {s.sub ? <p className="hero__sub">{s.sub}</p> : null}
                {s.showActions ? (
                  <div className="hero__actions">
                    <a href="#contact" className="btn btn--primary">
                      Talk to us
                    </a>
                    <a href="#services" className="btn btn--outline">
                      See services
                    </a>
                  </div>
                ) : null}
              </div>
              <div className="hero__photo-wrap">
                <img
                  className={`hero__photo${s.large ? "" : " hero__photo--lg"}`}
                  src={assetPath(s.image)}
                  alt={s.alt}
                  width="1280"
                  height="720"
                  fetchPriority={i === 0 ? "high" : "low"}
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="hero__arrow hero__arrow--prev"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="hero__arrow hero__arrow--next"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
      >
        ›
      </button>

      <div className="hero__dots" role="tablist" aria-label="Hero slides">
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            className={`hero__dot${i === index ? " is-active" : ""}`}
            aria-selected={i === index}
            aria-label={s.title}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  );
}
