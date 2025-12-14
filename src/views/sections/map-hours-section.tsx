export function MapHoursSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl overflow-hidden border border-zinc-200">
            <iframe
              title="Google Maps"
              className="w-full h-[280px] md:h-[360px]"
              src="https://maps.google.com/maps?q=Paris&z=14&output=embed"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-slate-900 font-semibold">Adresse</h3>
            <p className="text-slate-700">12 Rue de l'Atelier, 75000 Paris</p>
            <div className="h-px bg-zinc-200 my-4" />
            <h3 className="text-slate-900 font-semibold">Horaires</h3>
            <div className="mt-2 grid grid-cols-2 text-slate-700 text-sm gap-y-1">
              <span>Lundi</span><span>10:00 - 19:00</span>
              <span>Mardi</span><span>10:00 - 19:00</span>
              <span>Mercredi</span><span>10:00 - 19:00</span>
              <span>Jeudi</span><span>10:00 - 19:00</span>
              <span>Vendredi</span><span>10:00 - 19:00</span>
              <span>Samedi</span><span>10:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapHoursSection;
