"use client";

import * as React from 'react';
import LogoCarousel from '@/views/components/logo-carousel';

export function LogosBlock() {
  const [logos, setLogos] = React.useState<string[]>([]);
  React.useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch('/api/logos');
        const data = await res.json();
        if (active && Array.isArray(data?.logos)) setLogos(data.logos);
      } catch {}
    })();
    return () => {
      active = false;
    };
  }, []);

  if (!logos.length) return null;
  return (
    <div className="mx-auto max-w-7xl px-0 md:px-8 lg:px-12 pb-12">
      <LogoCarousel speed={18} images={logos} />
    </div>
  );
}

export default LogosBlock;
