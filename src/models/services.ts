export type ServiceTag = 'Populaire' | 'Promo' | 'Premium' | 'Rapide' | 'Diagnostic';

export interface Service {
  id: string;
  name: string;
  priceEUR: number; // en euros
  durationMinutes: number; // durée estimée
  description: string;
  tags: ServiceTag[];
}

export const services: Service[] = [
  {
    id: 'srv-tyre-solid',
    name: 'Changement Pneu Plein',
    priceEUR: 35,
    durationMinutes: 45,
    description:
      "Remplacement de pneu plein pour une meilleure résistance aux crevaisons. Réalisé par techniciens agréés.",
    tags: ['Populaire', 'Rapide'],
  },
  {
    id: 'srv-diagnostic-electro',
    name: 'Diagnostic Électronique',
    priceEUR: 0,
    durationMinutes: 20,
    description:
      "Analyse complète du système électrique et de la batterie. Idéal pour identifier rapidement l'origine d'une panne.",
    tags: ['Diagnostic', 'Promo'],
  },
  {
    id: 'srv-brakes-adjust',
    name: 'Réglage Freins',
    priceEUR: 20,
    durationMinutes: 30,
    description:
      "Réglage précis et sécurisation du système de freinage pour une réponse optimale en toutes conditions.",
    tags: ['Rapide'],
  },
  {
    id: 'srv-bearing-replace',
    name: 'Remplacement Roulements',
    priceEUR: 40,
    durationMinutes: 60,
    description:
      "Remplacement des roulements pour une conduite fluide et silencieuse. Pièces officielles uniquement.",
    tags: ['Premium'],
  },
  {
    id: 'srv-stem-align',
    name: 'Redressage & Alignement Guidon',
    priceEUR: 25,
    durationMinutes: 35,
    description:
      "Correction et alignement du guidon pour une tenue de route irréprochable.",
    tags: ['Rapide'],
  },
];
