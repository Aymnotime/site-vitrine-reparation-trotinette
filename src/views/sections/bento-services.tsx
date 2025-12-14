"use client";
import { Wrench, Battery, Disc, ShieldCheck, CheckCircle2, Settings, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  { 
    title: 'Système de Freinage', 
    icon: Disc,
    desc: 'Réparation et entretien complet de vos freins à disque.',
    features: [
      'Purge hydraulique complète',
      'Remplacement plaquettes et disques',
      'Réglage de la tension des câbles',
      'Test de freinage dynamique'
    ],
    duration: '30-45 min',
    price: 'À partir de 35€'
  },
  { 
    title: 'Pneumatiques', 
    icon: Settings,
    desc: 'Changement et réparation de tous types de pneus.',
    features: [
      'Pneus pleins anti-crevaison',
      'Chambre à air gonflable',
      'Réparation de crevaison',
      'Équilibrage et pression optimale'
    ],
    duration: '20-30 min',
    price: 'À partir de 25€'
  },
  { 
    title: 'Batterie & Électronique', 
    icon: Battery,
    desc: 'Diagnostic et réparation système électrique.',
    features: [
      'Diagnostic électronique complet',
      'Test de capacité batterie',
      'Remplacement cellules défectueuses',
      'Calibration BMS (Battery Management System)'
    ],
    duration: '45-60 min',
    price: 'Sur devis'
  },
  { 
    title: 'Contrôle Sécurité', 
    icon: ShieldCheck,
    desc: 'Inspection complète 15 points de contrôle.',
    features: [
      'Vérification freins et suspensions',
      'Contrôle visserie et serrages',
      'Test éclairage avant/arrière',
      'Diagnostic tableau de bord'
    ],
    duration: '15-20 min',
    price: 'Gratuit'
  },
  { 
    title: 'Moteur & Transmission', 
    icon: Zap,
    desc: 'Réparation moteur brushless et système de transmission.',
    features: [
      'Démontage et nettoyage moteur',
      'Remplacement roulements',
      'Tension et graissage courroie',
      'Test de puissance et couple'
    ],
    duration: '60-90 min',
    price: 'À partir de 80€'
  },
  { 
    title: 'Révision Complète', 
    icon: Wrench,
    desc: 'Entretien préventif pour performances optimales.',
    features: [
      'Nettoyage et dégraissage complet',
      'Resserrage visserie générale',
      'Graissage points de friction',
      'Mise à jour firmware si disponible'
    ],
    duration: '90 min',
    price: '120€'
  },
];

export function BentoServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="mb-12">
          <motion.h2 
            className="text-zinc-900 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Nos Prestations
          </motion.h2>
          <motion.p
            className="text-zinc-500 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Services de réparation professionnels pour toutes marques de trottinettes électriques. Pièces d'origine, techniciens certifiés.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              className="rounded-2xl border border-zinc-200/80 bg-white/70 backdrop-blur-sm p-6 hover:bg-white hover:shadow-lg transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div 
                  className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#00D1FF]/10 to-[#00D1FF]/5 text-zinc-900 grid place-items-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <service.icon className="h-6 w-6" />
                </motion.div>
                <div className="text-right">
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Durée</div>
                  <div className="text-sm font-semibold text-zinc-900">{service.duration}</div>
                </div>
              </div>
              
              <h3 className="text-zinc-900 font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-zinc-500 text-sm mb-4 leading-relaxed">{service.desc}</p>
              
              <ul className="space-y-2 mb-5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-600">
                    <CheckCircle2 className="h-4 w-4 text-[#00D1FF] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-zinc-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400 uppercase tracking-wider">Tarif</span>
                  <span className="text-base font-bold text-zinc-900">{service.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 rounded-2xl border border-[#00D1FF]/20 bg-gradient-to-br from-[#00D1FF]/5 to-transparent p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-zinc-900 font-bold text-lg mb-2">Besoin d'une intervention sur mesure ?</h3>
              <p className="text-zinc-600 text-sm">Contactez-nous pour un devis personnalisé adapté à votre modèle et à vos besoins spécifiques.</p>
            </div>
            <motion.button
              className="px-6 py-3 rounded-full bg-zinc-900 text-white text-sm font-semibold whitespace-nowrap hover:bg-zinc-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander un devis
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BentoServices;
