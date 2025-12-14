"use client";
import Image from 'next/image';
import { Button } from '@/views/components/ui';
import * as React from 'react';

export function HeroSection() {
  const [loading, setLoading] = React.useState(false);
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-24 top-[-12rem] h-72 w-72 rounded-full bg-[#2563EB]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-10 h-80 w-80 rounded-full bg-[#2563EB]/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 pt-12 pb-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-5 order-1">
          <p className="text-[#2563EB] text-sm font-semibold uppercase tracking-[0.08em]">Atelier certifié</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            L'Expertise <span className="text-[#2563EB]">Trottinette</span>.
          </h1>
          <p className="text-zinc-600 text-base md:text-lg">
            Réparations ultra-rapides et garanties par des techniciens agréés. Diagnostic électronique offert et prise de rendez-vous immédiate.
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <Button
              variant="primary"
              className="w-full md:w-auto h-12"
              isLoading={loading}
              onClick={() => {
                setLoading(true);
                setTimeout(() => setLoading(false), 1200);
              }}
            >
              Prendre RDV
            </Button>
            <Button variant="secondary" className="w-full md:w-auto h-12">Demander un devis</Button>
            <a href="https://maps.google.com/?q=atelier+trotinette" target="_blank" rel="noopener" className="w-full md:w-auto">
              <Button variant="ghost" className="w-full md:w-auto h-12">Y aller (GPS)</Button>
            </a>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-zinc-200 px-3 py-2 text-center">
              <div className="text-zinc-900 text-xl font-bold">4.8★</div>
              <div className="text-xs text-zinc-600">Avis Google</div>
            </div>
            <div className="rounded-xl border border-zinc-200 px-3 py-2 text-center">
              <div className="text-zinc-900 text-xl font-bold">24h</div>
              <div className="text-xs text-zinc-600">Délai moyen</div>
            </div>
            <div className="rounded-xl border border-zinc-200 px-3 py-2 text-center">
              <div className="text-zinc-900 text-xl font-bold">300+</div>
              <div className="text-xs text-zinc-600">Réparations/mois</div>
            </div>
          </div>
          {/* Badges retirés à la demande */}
          {/* Éléments d'avatars et compteur retirés pour conformité à la demande */}
        </div>
        <div className="relative order-2 md:order-2 aspect-[4/3] md:aspect-[3/2]">
          <Image src="/hero-placeholder.svg" alt="Atelier de réparation trottinette" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="rounded-3xl object-cover border border-zinc-200 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.25)]" />
        </div>
      </div>
    </section>
  );
}
