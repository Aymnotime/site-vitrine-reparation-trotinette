'use client';

import { Button } from '@/views/components/ui';
import { PhoneIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function BottomActionBar() {
  return (
    <motion.div 
      className="fixed bottom-4 left-0 right-0 z-40 md:hidden flex justify-center px-4"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.5 }}
    >
      <motion.div 
        className="rounded-full border border-zinc-200/80 bg-white/90 backdrop-blur-md shadow-lg px-4 py-3 w-full max-w-md"
        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex gap-2 items-center">
          <a href="tel:0123456789" className="flex-1">
            <motion.button 
              className="w-full h-10 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition"
              whileTap={{ scale: 0.95 }}
            >
              Appeler
            </motion.button>
          </a>
          <motion.button 
            className="flex-1 h-10 rounded-full bg-[#00D1FF] text-zinc-900 text-sm font-semibold hover:bg-[#00D1FF]/90 transition"
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Prendre RDV
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
