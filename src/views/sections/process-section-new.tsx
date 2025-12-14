"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Search, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Réservez en ligne",
    desc: "Choisissez votre créneau via Calendly. Confirmation immédiate par email.",
  },
  {
    icon: Search,
    number: "02",
    title: "Diagnostic gratuit",
    desc: "Nos techniciens identifient la panne et vous proposent un devis transparent sous 20 min.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Réparation express",
    desc: "Intervention rapide avec pièces d'origine. 80% des réparations en moins de 2h.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Récupération & garantie",
    desc: "Test de sécurité complet. Garantie 6 mois pièces et main d'œuvre incluse.",
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="bg-zinc-50" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-zinc-900 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Comment ça marche ?
          </motion.h2>
          <motion.p
            className="text-zinc-500 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Un processus simple et transparent, de la prise de rendez-vous à la récupération
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl border border-zinc-200/80 bg-white p-6 hover:shadow-xl transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-gradient-to-br from-[#00D1FF] to-[#00A3CC] text-white font-bold text-lg grid place-items-center shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <motion.div 
                className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#00D1FF]/10 to-[#00D1FF]/5 text-zinc-900 grid place-items-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <step.icon className="h-7 w-7" />
              </motion.div>

              {/* Content */}
              <h3 className="text-zinc-900 font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{step.desc}</p>

              {/* Connector Line (hidden on last item and on mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-zinc-200 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-zinc-500 mb-4">Prêt à commencer ?</p>
          <motion.a
            href="#reservation"
            className="inline-flex items-center justify-center rounded-full text-sm font-semibold px-8 py-4 bg-zinc-900 text-white hover:bg-zinc-800 transition-all shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Réserver maintenant
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default ProcessSection;
