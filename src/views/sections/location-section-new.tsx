"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="bg-zinc-50" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-zinc-900 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Où nous trouver ?
          </motion.h2>
          <motion.p
            className="text-zinc-500 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Atelier situé au cœur de Paris, accessible en transport en commun
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            className="rounded-2xl overflow-hidden border border-zinc-200 h-[400px]"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722687886!2d2.277019!3d48.85884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b005%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de l'atelier"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Address */}
            <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/30 p-6 hover:bg-white hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#00D1FF]/10 text-zinc-900 grid place-items-center flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-zinc-900 font-bold text-lg mb-2">Adresse</h3>
                  <p className="text-zinc-600">
                    12 Rue de la Mobilité<br />
                    75000 Paris, France
                  </p>
                  <p className="text-zinc-400 text-sm mt-2">
                    Métro : Ligne 1, 4, 7 - Station Châtelet
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/30 p-6 hover:bg-white hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#00D1FF]/10 text-zinc-900 grid place-items-center flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-zinc-900 font-bold text-lg mb-2">Horaires d'ouverture</h3>
                  <div className="text-zinc-600 space-y-1">
                    <p className="flex justify-between gap-8">
                      <span className="font-medium">Lundi - Samedi</span>
                      <span>9h00 - 19h00</span>
                    </p>
                    <p className="flex justify-between gap-8">
                      <span className="font-medium">Dimanche</span>
                      <span className="text-zinc-400">Fermé</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/30 p-6 hover:bg-white hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#00D1FF]/10 text-zinc-900 grid place-items-center flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-zinc-900 font-bold text-lg mb-2">Contact</h3>
                  <div className="text-zinc-600 space-y-2">
                    <p>
                      <a href="tel:0123456789" className="text-[#00D1FF] hover:underline font-medium">
                        01 23 45 67 89
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a href="mailto:contact@trottinettes-pro.fr" className="text-[#00D1FF] hover:underline">
                        contact@trottinettes-pro.fr
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
