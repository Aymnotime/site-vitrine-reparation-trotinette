import { ShieldCheck, Timer, MapPin, CheckCircle2 } from 'lucide-react';

export function WhyUsSection() {
  return (
    <section id="trust" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-12">
        <div className="mb-6">
          <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold tracking-tight">Pourquoi nous choisir</h2>
          <p className="text-slate-600 mt-2">Des garanties concrètes, des délais courts et des pièces officielles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="h-10 w-10 rounded-lg bg-[#0EA5E9]/10 text-[#0EA5E9] flex items-center justify-center mb-3">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="text-slate-900 font-semibold">Local</h3>
            <p className="text-slate-600 text-sm">Atelier physique au centre-ville. Accès facile, horaires étendus.</p>
            <ul className="mt-3 text-sm text-zinc-700 space-y-1">
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Y aller (GPS) en un clic</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Ouvert aujourd'hui</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="h-10 w-10 rounded-lg bg-[#0EA5E9]/10 text-[#0EA5E9] flex items-center justify-center mb-3">
              <Timer className="h-5 w-5" />
            </div>
            <h3 className="text-slate-900 font-semibold">Rapide</h3>
            <p className="text-slate-600 text-sm">90% des pannes réparées dans l'heure. Délai moyen 24h.</p>
            <ul className="mt-3 text-sm text-zinc-700 space-y-1">
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Diagnostic offert</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Intervention express</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="h-10 w-10 rounded-lg bg-[#0EA5E9]/10 text-[#0EA5E9] flex items-center justify-center mb-3">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-slate-900 font-semibold">Garantie</h3>
            <p className="text-slate-600 text-sm">Vous repartez avec une facture et une garantie.</p>
            <ul className="mt-3 text-sm text-zinc-700 space-y-1">
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Pièces officielles certifiées</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Contrôle sécurité 15 points</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
