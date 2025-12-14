"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <footer className="border-t border-zinc-200/80 bg-white" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="h-8 w-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white text-xs font-bold">T</div>
            <p className="text-zinc-500 text-sm leading-relaxed">Réparation de trottinettes électroniques. Techniciens agréés, pièces certifiées.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-zinc-900 font-semibold mb-3 text-sm">Navigation</h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              <li><a href="/#services" className="hover:text-zinc-900 transition">Nos prestations</a></li>
              <li><a href="/faq" className="hover:text-zinc-900 transition">Questions fréquentes</a></li>
              <li><a href="/#about" className="hover:text-zinc-900 transition">À propos</a></li>
              <li><a href="/#reservation" className="hover:text-zinc-900 transition">Prendre RDV</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-zinc-900 font-semibold mb-3 text-sm">Contact</h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              <li>12 Rue de la Mobilité, Paris</li>
              <li>Lun–Sam 9h–19h</li>
              <li><a href="tel:0123456789" className="hover:text-zinc-900 transition">01 23 45 67 89</a></li>
            </ul>
          </motion.div>
        </div>
        <motion.div 
          className="mt-12 pt-8 border-t border-zinc-200/80 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© {new Date().getFullYear()} Trottinettes Pro</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-900 transition">Mentions légales</a>
            <a href="#" className="hover:text-zinc-900 transition">Confidentialité</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
