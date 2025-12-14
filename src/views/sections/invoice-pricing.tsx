"use client";
import { getAllServices } from '@/controllers/serviceController';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function InvoicePricing() {
  const services = getAllServices();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section id="tarifs" className="bg-white" ref={ref}>
      <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <motion.h2 
          className="text-zinc-900 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-8 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Tarifs
        </motion.h2>
        <div className="overflow-x-auto -mx-4 md:mx-0">
          <motion.div 
            className="rounded-2xl border border-zinc-200/80 overflow-hidden bg-white/70 backdrop-blur-sm min-w-[600px] md:min-w-0 mx-4 md:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <table className="w-full border-collapse">
            <thead className="bg-zinc-50/50">
              <tr className="text-left">
                <th className="p-5 text-xs font-semibold uppercase tracking-wider text-zinc-500 border-b border-zinc-200/50">Prestation</th>
                <th className="p-5 text-xs font-semibold uppercase tracking-wider text-zinc-500 border-b border-zinc-200/50">Durée</th>
                <th className="p-5 text-xs font-semibold uppercase tracking-wider text-zinc-500 border-b border-zinc-200/50 text-right">Prix</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s, i) => (
                <motion.tr 
                  key={s.id} 
                  className="text-sm hover:bg-zinc-50/50 transition group cursor-default"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  whileHover={{ scale: 1.01, backgroundColor: "rgba(244, 244, 245, 0.8)" }}
                >
                  <td className="p-5 border-b border-zinc-100 text-zinc-900 font-medium">{s.name}</td>
                  <td className="p-5 border-b border-zinc-100 text-zinc-500">{s.durationMinutes} min</td>
                  <td className="p-5 border-b border-zinc-100 text-right font-mono text-zinc-900 font-semibold">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-block"
                    >
                      {s.priceEUR === 0 ? 'Sur devis' : `${s.priceEUR}€`}
                    </motion.span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        </div>
        <motion.p 
          className="mt-4 text-center text-zinc-400 text-xs"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Main d'œuvre incluse. Prix indicatifs selon modèle.
        </motion.p>
      </div>
    </section>
  );
}

export default InvoicePricing;
