import Link from 'next/link';
import { Button } from '@/views/components/ui';

export function HeroArtisan() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-slate-900 text-3xl md:text-4xl font-extrabold tracking-tight">
              Réparation de trottinettes électriques à Votre Ville.
            </h1>
            <p className="text-slate-700 text-base md:text-lg">
              Crevaison, Freins, Batterie. Réparé dans la journée. Sans rendez-vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="#pricing"><Button variant="accent" className="h-12 px-5">Voir les tarifs</Button></Link>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="h-12 px-5 border border-zinc-200">Y aller (GPS)</Button>
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
            <div className="aspect-[4/3] w-full flex items-center justify-center">
              <div className="h-full w-full bg-[url('/placeholder-workshop.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroArtisan;
