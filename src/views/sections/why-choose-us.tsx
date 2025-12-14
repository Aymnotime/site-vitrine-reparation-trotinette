"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Clock, Award, Users, Wrench, ThumbsUp } from 'lucide-react';

const stats = [
  { value: '98%', label: 'Satisfaction client', icon: ThumbsUp },
  { value: '2500+', label: 'Réparations effectuées', icon: Wrench },
  { value: '< 48h', label: 'Délai moyen', icon: Clock },
  { value: '6 mois', label: 'Garantie pièces', icon: Shield },
];

const advantages = [
  {
    icon: Award,
    title: 'Techniciens Certifiés',
    desc: 'Tous nos techniciens sont formés et agréés par les principaux fabricants. Expertise reconnue depuis 2018.',
  },
  {
    icon: Shield,
    title: 'Pièces d\'Origine Garanties',
    desc: 'Nous utilisons exclusivement des pièces d\'origine constructeur ou certifiées pour garantir durabilité et sécurité.',
  },
  {
    icon: Clock,
    title: 'Réparation Express',
    desc: 'La majorité des interventions sont réalisées en moins de 2h. Service prioritaire disponible pour les urgences.',
  },
  {
    icon: Users,
    title: 'Transparence Totale',
    desc: 'Diagnostic gratuit, devis détaillé avant intervention, et possibilité d\'observer la réparation en temps réel.',
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-zinc-900 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Pourquoi nous choisir ?
          </motion.h2>
          <motion.p
            className="text-zinc-500 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            L'excellence technique au service de votre mobilité. Notre engagement : qualité, rapidité, transparence.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-6 text-center hover:bg-white hover:shadow-md transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <motion.div 
                className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#00D1FF]/10 to-[#00D1FF]/5 text-zinc-900 grid place-items-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <stat.icon className="h-6 w-6" />
              </motion.div>
              <div className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-zinc-200/80 bg-zinc-50/30 p-8 hover:bg-white hover:shadow-lg transition-all group"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#00D1FF]/10 to-[#00D1FF]/5 text-zinc-900 grid place-items-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <adv.icon className="h-7 w-7" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-zinc-900 font-bold text-xl mb-2">{adv.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          className="mt-12 rounded-2xl border border-[#00D1FF]/20 bg-gradient-to-br from-[#00D1FF]/5 to-transparent p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#00D1FF]" />
              <span className="text-sm font-semibold text-zinc-900">Agrément professionnel</span>
            </div>
            <div className="h-px md:h-6 w-full md:w-px bg-zinc-200"></div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-[#00D1FF]" />
              <span className="text-sm font-semibold text-zinc-900">Certification qualité ISO 9001</span>
            </div>
            <div className="h-px md:h-6 w-full md:w-px bg-zinc-200"></div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#00D1FF]" />
              <span className="text-sm font-semibold text-zinc-900">2500+ clients satisfaits</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
