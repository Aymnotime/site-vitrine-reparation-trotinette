import { services, type Service } from '@/models/services';

export function getAllServices(): ReadonlyArray<Service> {
  return services;
}

export function getFeaturedServices(): ReadonlyArray<Service> {
  // Règle simple: les services avec tag "Populaire" ou prix <= 25€ sont mis en avant
  return services.filter(
    (s) => s.tags.includes('Populaire') || s.priceEUR <= 25
  );
}

export function filterServicesByQuery(query: string): ReadonlyArray<Service> {
  const q = query.trim().toLowerCase();
  if (!q) return services;
  return services.filter((s) =>
    [
      s.name.toLowerCase(),
      s.description.toLowerCase(),
      ...s.tags.map((t) => t.toLowerCase()),
    ].some((field) => field.includes(q))
  );
}
