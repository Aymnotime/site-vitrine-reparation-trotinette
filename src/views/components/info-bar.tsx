export function InfoBar({ city = 'Ville', area = 'Centre-ville', closingHour = '19h' }: { city?: string; area?: string; closingHour?: string }) {
  return (
    <div className="w-full bg-white border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-4 py-2 text-xs md:text-sm text-zinc-700 flex items-center justify-between">
        <span>📍 {city} — Quartier {area}</span>
        <span className="text-emerald-600 font-semibold">🟢 Ouvert aujourd'hui jusqu'à {closingHour}</span>
      </div>
    </div>
  );
}