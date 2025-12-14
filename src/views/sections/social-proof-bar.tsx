"use client";
import { BadgeCheckIcon, ShieldCheckIcon, WrenchIcon, Timer } from 'lucide-react';

export function SocialProofBar() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-center flex-wrap gap-2 md:gap-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-zinc-700 text-sm font-medium">
            <ShieldCheckIcon className="h-4 w-4 text-[#0EA5E9]" /> Pièces certifiées
          </span>
          <span className="hidden md:inline-block mx-4 h-5 w-px bg-zinc-200" aria-hidden />
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-zinc-700 text-sm font-medium">
            <WrenchIcon className="h-4 w-4 text-[#0EA5E9]" /> Techniciens agréés
          </span>
          <span className="hidden md:inline-block mx-4 h-5 w-px bg-zinc-200" aria-hidden />
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-zinc-700 text-sm font-medium">
            <BadgeCheckIcon className="h-4 w-4 text-[#0EA5E9]" /> Garantie incluse
          </span>
          <span className="hidden md:inline-block mx-4 h-5 w-px bg-zinc-200" aria-hidden />
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-zinc-700 text-sm font-medium">
            <Timer className="h-4 w-4 text-[#0EA5E9]" /> Réparation le jour même
          </span>
        </div>
        {/* Avis clients retirés à la demande pour éviter tout contenu non vérifié */}
      </div>
    </section>
  );
}