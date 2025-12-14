"use client";
import { Plus, Minus } from 'lucide-react';
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = React.useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div 
      ref={ref}
      className="border border-zinc-200 rounded-2xl bg-white overflow-hidden hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.button 
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ backgroundColor: "rgba(244, 244, 245, 0.5)" }}
      >
        <span className="text-zinc-900 font-semibold">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {open ? <Minus className="h-4 w-4 text-zinc-600" /> : <Plus className="h-4 w-4 text-zinc-600" />}
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 text-zinc-600 text-sm leading-relaxed">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const faqs = [
  { q: 'Quel est le délai de réparation ?', a: 'La plupart des interventions sont réalisées en moins de 2h. Réparation le jour même selon disponibilité.' },
  { q: 'Quelles marques réparez-vous ?', a: 'Nous intervenons sur toutes les marques : Xiaomi, Ninebot, Dualtron, Trottinette Electrique, etc.' },
  { q: 'Avez-vous un diagnostic gratuit ?', a: 'Oui, le diagnostic électronique est offert pour identifier rapidement la panne.' },
  { q: 'Quelle garantie sur les réparations ?', a: 'Toutes nos prestations incluent une garantie de 6 mois sur les pièces et la main d\'œuvre.' },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section className="bg-white" ref={ref}>
      <div className="mx-auto max-w-3xl px-4 md:px-8 lg:px-12 py-16 space-y-4">
        <motion.h2 
          className="text-zinc-900 text-4xl md:text-5xl font-extrabold tracking-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          FAQ
        </motion.h2>
        <FAQItem q="Combien de temps prend une réparation ?" a="La durée varie selon l'intervention : 20-30 min pour un changement de pneu, 45-60 min pour un diagnostic batterie, jusqu'à 90 min pour une révision complète. La plupart des réparations sont effectuées le jour même." delay={0.1} />
        <FAQItem q="Quelle garantie proposez-vous ?" a="Toutes nos réparations bénéficient d'une garantie de 6 mois sur les pièces et la main d'œuvre. Les pièces d'origine peuvent avoir une garantie constructeur plus longue." delay={0.2} />
        <FAQItem q="Quelles marques réparez-vous ?" a="Nous intervenons sur toutes les marques : Xiaomi, Ninebot, Segway, Dualtron, Kaabo, Inokim, E-TWOW, Minimotors et bien d'autres. Contactez-nous pour vérifier la compatibilité de votre modèle." delay={0.3} />
        <FAQItem q="Le diagnostic est-il payant ?" a="Non, le diagnostic électronique complet est gratuit et sans engagement. Il nous permet d'identifier précisément la panne et de vous fournir un devis détaillé avant toute intervention." delay={0.4} />
        <FAQItem q="Faut-il prendre rendez-vous ?" a="Un rendez-vous est recommandé pour garantir votre créneau et éviter l'attente. Pour les urgences, nous acceptons aussi les dépôts sans rendez-vous selon nos disponibilités." delay={0.5} />
        <FAQItem q="Utilisez-vous des pièces d'origine ?" a="Oui, nous privilégions les pièces d'origine constructeur pour garantir qualité et durabilité. Des alternatives certifiées peuvent être proposées selon vos besoins et votre budget." delay={0.6} />
        <FAQItem q="Puis-je assister à la réparation ?" a="Absolument ! Notre atelier est ouvert et transparent. Vous pouvez observer l'intervention et poser vos questions à nos techniciens en temps réel." delay={0.7} />
        <FAQItem q="Que faire en cas de panne sur la route ?" a="Contactez-nous immédiatement. Nous vous guidons par téléphone pour un premier diagnostic et, si nécessaire, nous organisons une prise en charge ou un dépannage selon votre localisation." delay={0.8} />
        <FAQItem q="Proposez-vous un service d'entretien préventif ?" a="Oui, notre forfait révision complète (120€) inclut nettoyage, vérification de tous les composants, resserrage visserie et mise à jour firmware. Recommandé tous les 6 mois ou 1000 km." delay={0.9} />
        <FAQItem q="Comment payer ma réparation ?" a="Nous acceptons les paiements en espèces, carte bancaire (sans contact), et virements. Un devis détaillé vous est toujours fourni avant intervention avec validation obligatoire." delay={1.0} />
      </div>
    </section>
  );
}