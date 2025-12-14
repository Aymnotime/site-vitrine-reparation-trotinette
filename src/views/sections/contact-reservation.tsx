"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, MessageSquare, Send } from 'lucide-react';

export function ContactReservation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<'reservation' | 'contact'>('reservation');

  return (
    <section id="reservation" className="bg-zinc-50" ref={ref}>
      <div className="mx-auto max-w-5xl px-4 md:px-8 lg:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-zinc-900 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Réservez votre intervention
          </motion.h2>
          <motion.p
            className="text-zinc-500 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choisissez un créneau en ligne ou contactez-nous pour toute question
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div 
          className="flex items-center justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => setActiveTab('reservation')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'reservation'
                ? 'bg-zinc-900 text-white shadow-md'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            }`}
          >
            <Calendar className="h-4 w-4" />
            Réserver un créneau
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'contact'
                ? 'bg-zinc-900 text-white shadow-md'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            Nous contacter
          </button>
        </motion.div>

        {/* Content */}
        <motion.div
          className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Reservation Tab */}
          {activeTab === 'reservation' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 md:p-8 bg-white">
                <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-[#00D1FF]/5 border border-[#00D1FF]/20">
                  <Calendar className="h-5 w-5 text-[#00D1FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-zinc-900 font-semibold text-sm mb-1">Réservation instantanée</h3>
                    <p className="text-zinc-600 text-xs leading-relaxed">
                      Choisissez votre créneau et le type d'intervention. Confirmation immédiate par email.
                    </p>
                  </div>
                </div>

                {/* Calendly Embed */}
                <div className="rounded-xl overflow-hidden border border-zinc-200">
                  <iframe
                    src="https://calendly.com/aymen-atif10/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=18181b&primary_color=00d1ff"
                    width="100%"
                    height="700"
                    frameBorder="0"
                    className="w-full"
                  />
                </div>

                <p className="text-center text-zinc-400 text-xs mt-4">
                  Vous recevrez un email de confirmation avec tous les détails de votre rendez-vous.
                </p>
              </div>
            </motion.div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 md:p-8 bg-white">
                <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-[#00D1FF]/5 border border-[#00D1FF]/20">
                  <MessageSquare className="h-5 w-5 text-[#00D1FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-zinc-900 font-semibold text-sm mb-1">Formulaire de contact</h3>
                    <p className="text-zinc-600 text-xs leading-relaxed">
                      Pour toute question ou demande spécifique. Réponse sous 2h en journée.
                    </p>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-zinc-900 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-[#00D1FF] focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/20 transition"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-zinc-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-[#00D1FF] focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/20 transition"
                        placeholder="jean.dupont@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-zinc-900 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-[#00D1FF] focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/20 transition"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-zinc-900 mb-2">
                        Type de réparation
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 focus:border-[#00D1FF] focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/20 transition">
                        <option>Sélectionnez...</option>
                        <option>Freinage</option>
                        <option>Pneumatiques</option>
                        <option>Batterie & Électronique</option>
                        <option>Moteur & Transmission</option>
                        <option>Révision complète</option>
                        <option>Autre / Diagnostic</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-zinc-900 mb-2">
                      Marque et modèle de votre trottinette
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-[#00D1FF] focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/20 transition"
                      placeholder="Ex: Xiaomi M365 Pro"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-zinc-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-[#00D1FF] focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/20 transition resize-none"
                      placeholder="Décrivez votre problème ou votre demande..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-all shadow-md"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="h-4 w-4" />
                    Envoyer ma demande
                  </motion.button>

                  <p className="text-center text-zinc-400 text-xs">
                    * Champs obligatoires - Vos données sont protégées et ne seront jamais partagées.
                  </p>
                </form>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="p-4">
            <div className="text-zinc-900 font-bold mb-1">Téléphone</div>
            <a href="tel:0123456789" className="text-[#00D1FF] hover:underline">
              01 23 45 67 89
            </a>
          </div>
          <div className="p-4">
            <div className="text-zinc-900 font-bold mb-1">Email</div>
            <a href="mailto:contact@trottinettes-pro.fr" className="text-[#00D1FF] hover:underline">
              contact@trottinettes-pro.fr
            </a>
          </div>
          <div className="p-4">
            <div className="text-zinc-900 font-bold mb-1">Horaires</div>
            <div className="text-zinc-600 text-sm">Lun–Sam : 9h–19h</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactReservation;
