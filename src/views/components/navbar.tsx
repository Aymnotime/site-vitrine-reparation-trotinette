'use client';

import * as React from 'react';

import { Button } from './ui';
import { motion, AnimatePresence } from 'framer-motion';
import { Hamburger } from './hamburger';


export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className="fixed top-2 md:top-4 left-0 right-0 z-50 flex justify-center px-2 md:px-0"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className={`rounded-full border border-zinc-200/80 bg-white/80 backdrop-blur-md shadow-sm px-4 md:px-6 py-2.5 md:py-3 transition-all duration-300 ${
          scrolled ? 'w-[98%] md:w-[95%] max-w-5xl' : 'w-full md:w-[90%] max-w-6xl'
        }`}
        whileHover={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)" }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center w-full">
          <motion.div 
            className="flex items-center gap-2 flex-1 justify-start min-w-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="h-6 w-6 md:h-7 md:w-7 rounded-lg bg-zinc-900 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">T</div>
            <span className="font-semibold text-zinc-900 text-sm md:text-base truncate block">Trottinettes Pro</span>
          </motion.div>
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-600 flex-1 justify-center">
            <motion.a 
              href="/" 
              className="hover:text-zinc-900 transition"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Accueil
            </motion.a>
            <motion.a 
              href="/#services" 
              className="hover:text-zinc-900 transition"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Prestations
            </motion.a>
            <motion.a 
              href="/#about" 
              className="hover:text-zinc-900 transition"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              À propos
            </motion.a>
            <motion.a 
              href="/faq" 
              className="hover:text-zinc-900 transition"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              FAQ
            </motion.a>
          </div>
          <div className="flex items-center gap-2 flex-1 justify-end min-w-0">
            {/* Afficher le bouton uniquement sur desktop */}
            <Button variant="primary" className="h-8 md:h-9 px-3 md:px-5 text-xs md:text-sm whitespace-nowrap hidden md:inline-flex" onClick={() => window.location.href = '/#reservation'}>Prendre RDV</Button>
            {/* Hamburger mobile en haut à droite */}
            <div className="md:hidden flex items-center justify-center ml-2">
              <Hamburger open={menuOpen} setOpen={setMenuOpen} />
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="md:hidden absolute left-0 right-0 top-[110%] z-50 bg-white rounded-2xl shadow-xl border border-zinc-200/80 mx-0 mt-2 px-6 py-6 flex flex-col items-center gap-4"
            >
              <a href="/" className="w-full text-center text-zinc-900 font-semibold py-2 rounded hover:bg-zinc-100 transition" onClick={() => setMenuOpen(false)}>Accueil</a>
              <a href="/#services" className="w-full text-center text-zinc-900 font-semibold py-2 rounded hover:bg-zinc-100 transition" onClick={() => setMenuOpen(false)}>Prestations</a>
              <a href="/#about" className="w-full text-center text-zinc-900 font-semibold py-2 rounded hover:bg-zinc-100 transition" onClick={() => setMenuOpen(false)}>À propos</a>
              <a href="/faq" className="w-full text-center text-zinc-900 font-semibold py-2 rounded hover:bg-zinc-100 transition" onClick={() => setMenuOpen(false)}>FAQ</a>
              <Button variant="primary" className="w-full mt-2" onClick={() => { setMenuOpen(false); window.location.href = '/#reservation'; }}>Prendre RDV</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}
