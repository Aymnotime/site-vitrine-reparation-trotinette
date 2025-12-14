import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0f172a',
        },
        brand: {
          primary: '#00D1FF',
          secondary: '#0A0A0A',
          success: '#10B981',
          warning: '#F59E0B',
        },
      },
    },
  },
  darkMode: 'class',
};
export default config;
