'use client';

import * as React from 'react';
import { Input, Card } from '@/views/components/ui';
import { filterServicesByQuery } from '@/controllers/serviceController';

export function InteractiveDiagnostic() {
  const [query, setQuery] = React.useState('');
  const results = filterServicesByQuery(query);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-10">
        <h2 className="text-slate-900 text-3xl font-extrabold mb-3">Quel est le problème ?</h2>
        <div className="max-w-xl">
          <Input
            placeholder="Ex: pneu crevé, freins, batterie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((s) => (
            <Card
              key={s.id}
              title={s.name}
              subtitle={`${s.durationMinutes} min`}
              headerRight={<span className="font-mono text-zinc-900 text-base font-semibold">{s.priceEUR}€</span>}
            >
              <p className="text-zinc-600 text-sm">{s.description}</p>
              <div className="mt-2 flex gap-2 flex-wrap">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-zinc-100 text-zinc-700 px-2.5 py-1 border border-zinc-200">{t}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
