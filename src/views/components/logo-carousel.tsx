"use client";

import * as React from 'react';
import clsx from 'clsx';

type LogoCarouselProps = {
  images: string[]; // chemins relatifs sous /logo, ex: "/logo/xiaomi.svg"
  className?: string;
  speed?: number; // secondes pour un cycle
};

export function LogoCarousel({ images, className, speed = 18 }: LogoCarouselProps) {
  const trackStyle: React.CSSProperties = { animationDuration: `${speed}s` };
  // Dupliquer la liste pour une boucle parfaite à -50%
  const loopImages = React.useMemo(() => [...images, ...images], [images]);

  return (
    <div className={clsx('relative overflow-hidden py-10 bg-white', className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" aria-hidden />

      <div className="logo-marquee" style={trackStyle}>
        {loopImages.map((src, idx) => (
          <div key={`${src}-${idx}`} className="inline-flex h-20 items-center opacity-90 hover:opacity-100 transition">
            <img
              src={src}
              alt="logo"
              className="mx-10 h-14 min-h-14 max-h-14 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoCarousel;