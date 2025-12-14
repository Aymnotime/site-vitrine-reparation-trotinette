import { ShieldCheckIcon, TimerIcon, BadgeCheckIcon } from 'lucide-react';

export function TrustSection() {
  const items = [
    { icon: ShieldCheckIcon, title: 'Pièces officielles', desc: 'Composants certifiés constructeur pour une fiabilité maximale.' },
    { icon: BadgeCheckIcon, title: 'Garantie', desc: 'Toutes nos interventions sont garanties pièces et main-d’œuvre.' },
    { icon: TimerIcon, title: 'Rapidité', desc: 'Réparations en 1h selon disponibilité atelier.' },
  ];
  return (
    <section id="trust" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.14)] hover:shadow-[0_20px_60px_-24px_rgba(0,0,0,0.18)] transition hover:-translate-y-[2px]">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB] border border-[#2563EB]/20">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-zinc-900 font-semibold text-lg">{title}</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
