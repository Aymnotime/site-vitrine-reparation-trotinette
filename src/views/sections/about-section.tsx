"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Target, Zap, Users2 } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    desc: 'Passionnés par la mobilité électrique, nous mettons notre expertise au service de votre sécurité.',
  },
  {
    icon: Target,
    title: 'Précision',
    desc: 'Chaque intervention est réalisée avec rigueur et attention aux détails pour un résultat optimal.',
  },
  {
    icon: Zap,
    title: 'Réactivité',
    desc: 'Nous comprenons l\'importance de votre mobilité. Réparations rapides sans compromis sur la qualité.',
  },
  {
    icon: Users2,
    title: 'Proximité',
    desc: 'Une relation de confiance basée sur la transparence, l\'écoute et le conseil personnalisé.',
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-zinc-50" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2 
            className="text-zinc-900 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            À propos de nous
          </motion.h2>
          <motion.p
            className="text-zinc-600 text-lg leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Depuis 2018, nous sommes <strong className="text-zinc-900">l'atelier de référence</strong> pour la réparation de trottinettes électriques à Paris. Notre mission : rendre la mobilité urbaine accessible, sûre et durable.
          </motion.p>
          <motion.p
            className="text-zinc-600 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Avec plus de <strong className="text-zinc-900">2 500 réparations</strong> effectuées et un taux de satisfaction de <strong className="text-zinc-900">98%</strong>, nous sommes fiers d'accompagner quotidiennement des milliers d'usagers dans leur mobilité.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <motion.h3
            className="text-zinc-900 text-2xl md:text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Nos valeurs
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="rounded-2xl border border-zinc-200/80 bg-white/70 backdrop-blur-sm p-6 hover:bg-white hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <motion.div 
                  className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#00D1FF]/10 to-[#00D1FF]/5 text-zinc-900 grid place-items-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <value.icon className="h-6 w-6" />
                </motion.div>
                <h4 className="text-zinc-900 font-bold text-lg mb-2">{value.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Banner */}
        <motion.div
          className="mt-0 rounded-2xl border border-[#00D1FF]/20 bg-gradient-to-br from-[#00D1FF]/5 to-transparent p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center">
            <h4 className="text-zinc-900 font-bold text-xl mb-4">Certifications & Agréments</h4>
            <p className="text-zinc-600 text-sm mb-6 max-w-2xl mx-auto">
              Nos techniciens sont formés et certifiés par les principaux fabricants. Atelier agréé et conforme aux normes de sécurité en vigueur.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="px-4 py-2 rounded-full border border-zinc-200 bg-white text-sm font-semibold text-zinc-900">
                Xiaomi Certified
              </div>
              <div className="px-4 py-2 rounded-full border border-zinc-200 bg-white text-sm font-semibold text-zinc-900">
                Ninebot Official Partner
              </div>
              <div className="px-4 py-2 rounded-full border border-zinc-200 bg-white text-sm font-semibold text-zinc-900">
                ISO 9001
              </div>
              <div className="px-4 py-2 rounded-full border border-zinc-200 bg-white text-sm font-semibold text-zinc-900">
                Agrément Professionnel
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;