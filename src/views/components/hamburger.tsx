import * as React from 'react';

export function Hamburger({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <button
      aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
      className="md:hidden flex items-center justify-center h-10 w-10 transition focus:outline-none"
      onClick={() => setOpen(!open)}
      type="button"
    >
      <span className="sr-only">Menu</span>
      <div className="relative w-6 h-6 flex flex-col justify-center items-center">
        {/* Barre du haut */}
        <span
          className={`absolute left-0 h-0.5 w-6 bg-zinc-900 rounded transition-all duration-300 ${open ? 'rotate-45 top-3' : 'top-1.5'}`}
        />
        {/* Barre du milieu */}
        <span
          className={`absolute left-0 h-0.5 w-6 bg-zinc-900 rounded transition-all duration-300 ${open ? 'opacity-0 top-3' : 'top-3'}`}
        />
        {/* Barre du bas */}
        <span
          className={`absolute left-0 h-0.5 w-6 bg-zinc-900 rounded transition-all duration-300 ${open ? '-rotate-45 top-3' : 'top-4.5'}`}
        />
      </div>
    </button>
  );
}

export default Hamburger;
