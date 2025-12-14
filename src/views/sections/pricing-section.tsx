'use client';

import * as React from 'react';
import { getAllServices } from '@/controllers/serviceController';
import { Card, Button } from '@/views/components/ui';
import clsx from 'clsx';
import LogoCarousel from '@/views/components/logo-carousel';

// Removed legacy PricingSection to avoid duplicate definitions

export function PricingSection() {
  const services = getAllServices();
  const [openIds, setOpenIds] = React.useState<Set<string>>(new Set());
  const [showHT, setShowHT] = React.useState(false);
  const VAT = 0.2; // 20% TVA

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
          <div className="flex flex-col gap-2">
            <p className="text-[#0EA5E9] text-xs font-semibold uppercase tracking-[0.12em]">Tarifs atelier</p>
            <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold tracking-tight">Forfaits tout compris</h2>
            <p className="text-slate-600 text-sm md:text-base">Pièces officielles + main d'œuvre. Réparation dans la journée.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-zinc-700 text-xs md:text-sm">
              Intervention express
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-zinc-700 text-xs md:text-sm">
              Garantie incluse
            </span>
            <label className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-zinc-700 text-xs md:text-sm cursor-pointer">
              <input type="checkbox" checked={showHT} onChange={(e) => setShowHT(e.target.checked)} /> Afficher HT
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const isOpen = openIds.has(s.id);
            const featured = s.tags.includes('Populaire');
            const isOnQuote = s.priceEUR === 0;
            const priceValue = showHT ? Math.round(s.priceEUR / (1 + VAT)) : s.priceEUR;
            const priceLabel = isOnQuote ? 'Sur devis' : `${priceValue}€${showHT ? ' HT' : ''}`;
            const pack = s.tags.includes('Premium') ? 'Premium' : s.tags.includes('Diagnostic') ? 'Diagnostic' : s.tags.includes('Rapide') ? 'Express' : undefined;
            const inclusions = [
              'Pièces officielles',
              'Main d\'œuvre incluse',
              'Contrôle sécurité',
            ];
            return (
              <Card
                key={s.id}
                className={clsx(
                  'relative overflow-hidden bg-white rounded-2xl border border-zinc-200',
                  featured && 'border-[#0EA5E9]'
                )}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-slate-900 text-lg md:text-xl font-bold">{s.name}</h2>
                    <p className="text-zinc-500 text-sm">{s.durationMinutes} min</p>
                  </div>
                  <div className="text-right">
                    <div className="text-zinc-900 text-2xl md:text-3xl font-extrabold">{priceLabel}</div>
                    {!isOnQuote && (
                      <div className="text-xs text-zinc-500">À partir de</div>
                    )}
                    {featured && (
                      <span className="mt-1 inline-flex rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-semibold px-3 py-1 border border-[#0EA5E9]/20">Populaire</span>
                    )}
                    <span className="mt-1 ml-2 inline-flex rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 border border-emerald-200">Dispo aujourd'hui</span>
                  </div>
                </div>

                <div className="mt-3 text-zinc-700 text-sm">{s.description}</div>

                {pack && (
                  <div className="mt-3">
                    <span className="inline-flex rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold px-3 py-1 border border-zinc-200">Pack {pack}</span>
                  </div>
                )}

                <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-zinc-700">
                  {inclusions.map((inc) => (
                    <li key={inc} className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {inc}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex gap-2 flex-wrap">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-zinc-100 text-zinc-700 px-2.5 py-1 border border-zinc-200">{t}</span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <a href="tel:0123456789" className="flex-1">
                    <Button variant="success" className="w-full h-11">Appeler l'atelier</Button>
                  </a>
                  <Button
                    variant="secondary"
                    className="h-11 px-4 hidden md:inline-flex"
                    onClick={() => {}}
                  >
                    Demander un devis
                  </Button>
                  <Button
                    variant="ghost"
                    className="h-11 px-4 hidden md:inline-flex"
                    onClick={() => toggle(s.id)}
                  >
                    {isOpen ? 'Masquer' : 'Détails'}
                  </Button>
                </div>

                {isOpen && (
                  <div className="mt-3 text-zinc-600 text-sm">
                    Pièces officielles. Main d'œuvre incluse. Diagnostic gratuit si nécessaire.
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
