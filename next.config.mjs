/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { dev }) {
    // Désactive le cache webpack en développement pour éviter les erreurs ENOENT sur les packs
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
