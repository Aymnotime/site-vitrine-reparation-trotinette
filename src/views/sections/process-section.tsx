import { MapPinIcon, EyeIcon, WrenchIcon, CheckIcon } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    { icon: MapPinIcon, title: 'Dépôt (Sans RDV)', desc: 'Vous passez quand vous voulez.' },
    { icon: EyeIcon, title: 'Diagnostic Live', desc: 'On regarde ensemble, on fixe le prix.' },
    { icon: WrenchIcon, title: 'Réparation', desc: 'Vous recevez un SMS quand c\'est prêt.' },
    { icon: CheckIcon, title: 'Repartir', desc: 'Paiement CB ou Apple Pay.' },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-12">
        <h2 className="text-zinc-900 text-3xl font-extrabold tracking-tight mb-6">Comment ça se passe</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200" />
          <ul className="space-y-6">
            {steps.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="relative pl-12">
                <span className="absolute left-0 top-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB] border border-[#2563EB]/20">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-zinc-900 font-semibold">{title}</h3>
                <p className="text-zinc-600 text-sm">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}