"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const brands = [
  { name: 'Xiaomi', logo: '/logo/xiaomi.svg' },
  { name: 'Segway', logo: '/logo/segway.svg' },
  { name: 'Dualtron', logo: '/logo/dualtron.svg' },
  { name: 'Oxelo', logo: '/logo/oxelo.svg' },
];

export function BrandsCarousel() {
  // Dupliquer les marques pour créer un effet de boucle infinie
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="bg-white overflow-hidden py-8 md:py-12">
      <div className="mb-6 text-center">
        <p className="text-zinc-500 text-sm font-semibold tracking-wide uppercase">
          Marques que nous réparons
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient gauche */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* Gradient droite */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Carrousel */}
        <div className="flex">
          <motion.div
            className="flex gap-12 md:gap-16 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-32 md:w-40 h-16 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={160}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-zinc-400 text-xs">
          Et bien d'autres marques de trottinettes électriques
        </p>
      </div>
    </section>
  );
}

export default BrandsCarousel;
