"use client";
import { Button } from '@/views/components/ui';
import { motion } from 'framer-motion';

export function FintechHero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,209,255,0.08),transparent_50%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <div className="relative mx-auto max-w-3xl px-4 md:px-8 lg:px-12 py-16 md:py-24 text-center">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Réparation de trottinettes.<br className="hidden sm:block" /><span className="sm:hidden"> </span>Rapide. Précise. Transparente.
        </motion.h1>
        <motion.p 
          className="mt-6 text-base sm:text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Un flux de réservation fluide façon checkout. Tarifs clairs, techniciens agréés.
        </motion.p>
        <motion.div 
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button variant="primary" className="w-full sm:w-auto" onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}>Prendre RDV</Button>
          <Button variant="ghost" className="w-full sm:w-auto" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Voir les prestations</Button>
        </motion.div>
      </div>
    </section>
  );
}

export default FintechHero;
