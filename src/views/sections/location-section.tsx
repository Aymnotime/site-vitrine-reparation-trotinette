import { MapPinIcon, CircleIcon } from 'lucide-react';
import { Button } from '@/views/components/ui';

export function LocationSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="h-64 rounded-xl bg-[linear-gradient(135deg,_#eef2ff_0%,_#fafafa_100%)] border border-zinc-200 grid place-items-center text-zinc-500">
            Google Maps Placeholder
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-3">
          <h3 className="text-zinc-900 text-xl font-semibold tracking-tight">Nous trouver</h3>
          <p className="text-zinc-700 inline-flex items-center gap-2"><MapPinIcon className="h-4 w-4 text-[#2563EB]" /> 12 Rue de la Mobilité, 75000 Paris</p>
          <div className="inline-flex items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1 text-emerald-600"><CircleIcon className="h-3 w-3 fill-emerald-500 stroke-emerald-500" /> Ouvert actuellement</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-700">Lun–Sam: 9h–19h</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a href="https://maps.google.com/?q=atelier+trotinette" target="_blank" rel="noopener" className="inline-flex">
              <Button variant="accent" className="w-full h-11">📍 Y aller (GPS)</Button>
            </a>
            <a href="tel:0123456789" className="inline-flex">
              <Button variant="secondary" className="w-full h-11">📞 Appeler</Button>
            </a>
          </div>
          <div className="text-sm text-zinc-700 space-y-1">
            <div>Aujourd'hui: <span className="font-semibold">10:00 – 19:00</span></div>
            <div>Samedi: <span className="font-semibold">10:00 – 17:00</span></div>
            <div>Dimanche: <span className="font-semibold">Fermé</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}