'use client';

import { useEffect, useState, useCallback } from 'react';

const SLIDES = [
  '/wp-content/uploads/2021/02/s1.jpg',
  '/wp-content/uploads/2021/02/slidcer.jpg',
  '/wp-content/uploads/2021/02/slider-new.jpg',
  '/wp-content/uploads/2021/02/slider-8.jpg',
  '/wp-content/uploads/2021/02/s2.jpg',
  '/wp-content/uploads/2021/02/s3.jpg',
  '/wp-content/uploads/2021/02/WhatsApp-Image-2025-06-10-at-1.18.47-PM.jpeg',
  '/wp-content/uploads/2021/02/WhatsApp-Image-2025-06-10-at-1.37.03-PM.jpeg',
  '/wp-content/uploads/2021/02/WhatsApp-Image-2025-06-10-at-1.37.03-PM-1.jpeg',
  '/wp-content/uploads/2021/02/WhatsApp-Image-2025-06-10-at-1.37.04-PM.jpeg',
  '/wp-content/uploads/2021/02/slider-7.jpg',
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => go(index + 1), [index, go]);
  const prev = useCallback(() => go(index - 1), [index, go]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex(i => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  return (
    <section
      className="relative overflow-hidden bg-ink-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="HTDSS image slider"
    >
      <div className="relative w-full aspect-[1894/940] max-h-[80vh]">
        {SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={i !== index}
          />
        ))}

        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-black/30 backdrop-blur hover:bg-black/50 text-white transition"
        >
          <span aria-hidden className="text-2xl leading-none">‹</span>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-black/30 backdrop-blur hover:bg-black/50 text-white transition"
        >
          <span aria-hidden className="text-2xl leading-none">›</span>
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-8 bg-accent' : 'w-3 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
