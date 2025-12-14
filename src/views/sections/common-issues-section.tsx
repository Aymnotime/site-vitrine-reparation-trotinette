import { Card } from '@/views/components/ui';

export function CommonIssuesSection() {
  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-12">
        <h2 className="text-slate-900 text-2xl md:text-3xl font-extrabold tracking-tight mb-6">
          Forfaits tout compris (Pièces + Main d'œuvre)
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <h2 className="text-slate-900 text-xl font-bold">Changement pneu trottinette</h2>
            <p className="text-slate-500">Chambre à air renforcée incluse. Fait en 30min.</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-zinc-900 text-3xl font-extrabold">35€</span>
            </div>
          </Card>
          <Card>
            <h2 className="text-slate-900 text-xl font-bold">Réglage freins trottinette</h2>
            <p className="text-slate-500">Réglage et sécurité.</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-zinc-900 text-3xl font-extrabold">25€</span>
            </div>
          </Card>
          <Card>
            <h2 className="text-slate-900 text-xl font-bold">Réparation batterie trottinette</h2>
            <p className="text-slate-500">Diagnostic panne et réparation.</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-zinc-900 text-3xl font-extrabold">Sur devis</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default CommonIssuesSection;
