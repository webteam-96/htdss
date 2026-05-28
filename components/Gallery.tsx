'use client';

import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

export default function Gallery({ images, columns = 3 }: { images: string[]; columns?: 2 | 3 | 4 }) {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive(i => (i === null ? null : (i + 1) % images.length)), [images.length]);
  const prev = useCallback(() => setActive(i => (i === null ? null : (i - 1 + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, next, prev]);

  const colClass =
    columns === 2 ? 'sm:grid-cols-2' :
    columns === 4 ? 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' :
                    'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <>
      <div className={`grid grid-cols-1 ${colClass} gap-3 sm:gap-4`}>
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setActive(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/20 transition" />
          </button>
        ))}
      </div>

      {active !== null && mounted && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-ink-900/95 grid place-items-center p-4"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            </svg>
          </button>
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-3 sm:left-8 w-12 h-12 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-3 sm:right-8 w-12 h-12 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <img
            src={images[active]}
            alt=""
            className="max-w-[92vw] max-h-[85vh] object-contain rounded-lg"
            onClick={e => e.stopPropagation()}
          />
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-white/70 font-medium tracking-wide">
            {active + 1} / {images.length}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
