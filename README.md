# Trottinettes Pro — Vitrine (Mobile-first, Next.js 14)

## Vue d’ensemble
Vitrine mobile-first orientée “app native” pour un atelier de réparation de trottinettes électriques. Architecture MVC (models/controllers/views) hors dossier `app`, avec App Router pour le routing.

## Stack
- Next.js 14 (App Router) + TypeScript strict
- Tailwind CSS + clsx
- Icônes Lucide React
- Structure MVC: `src/models`, `src/controllers`, `src/views`

## UX / UI (état actuel)
- Fond clair uniforme, accents cyan (#0EA5E9), composants clairs (cards, inputs, boutons).
- Mobile-first: navigation classique, barre d’action bas mobile “Appeler l’atelier”, CTA full width.
- Hero: split responsive, badges garanties/pièces officielles, CTA accent.
- Pricing: grille 1→2→3, cartes professionnelles avec prix “Sur devis” si 0€, CTA principal “Appeler l’atelier”, bouton “Détails”, badge “Populaire”.
- Trust: barre de preuves pro (pièces officielles, garantie, rapidité) en badges inline.
- Diagnostic: section retirée de la page d’accueil pour éviter le doublon avec Pricing (toujours disponible pour une réintégration ultérieure si souhaité).

## Architecture (MVC)
- Model: `src/models/services.ts`
- Controller: `src/controllers/serviceController.ts`
- View: `src/views/components/*`, `src/views/sections/*`, pages dans `app/`
	- Page d’accueil: `app/page.tsx` (sans `InteractiveDiagnostic` pour éviter le doublon)

## Points perfectibles (B2B / production)
1) Identité premium: affiner palette via Tailwind `extend.colors`, typo titres plus distinctive, motif clair subtil.
2) Hero: ajouter KPIs (note, délais, volume), CTA secondaire “Obtenir un devis”, vraie photo HD.
3) Pricing: packs (Diagnostic/Express/Premium) avec inclusions, toggle TTC/HT, badge dispo.
4) Diagnostic: chips rapides, empty state soigné, CTA contextualisé par carte.
5) Trust social: logos clients B2B + 2 avis courts chiffrés.
6) Accessibilité/perf: audit contrastes, `prefers-reduced-motion`, `Image` hero optimisée.

## Lancer en local
```bash
npm install
npm run dev
```
Ouvrir http://localhost:3000 (ou 3001 si 3000 occupé).

Note dev: le cache webpack est désactivé en développement pour éviter les erreurs `ENOENT` liées aux fichiers `.pack.gz`. Voir `next.config.mjs`.

## Arborescence clé
- app/layout.tsx, app/page.tsx
- src/models/services.ts
- src/controllers/serviceController.ts
- src/views/components/{ui,navbar,bottom-action-bar,footer}.tsx
- src/views/sections/{hero-section,trust-section,pricing-section}

## TODO suggérés (prochaines itérations)
- Section KPIs hero + vrais visuels HD.
- Packs pricing + toggle TTC/HT.
- Chips diagnostic + empty state.
- Logos clients + avis courts.
- Motif/gradient léger cohérent avec fond clair.
