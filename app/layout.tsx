import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/views/components/navbar';
import { Footer } from '@/views/components/footer';
import { BottomActionBar } from '@/views/components/bottom-action-bar';

export const metadata: Metadata = {
  title: {
    default: 'Atelier Trottinettes — Réparation locale, rapide et honnête',
    template: '%s | Atelier Trottinettes',
  },
  description: "Atelier de réparation de trottinettes électriques: proximité, efficacité et honnêteté. Crevaison, freins, batterie, réparé dans la journée.",
  keywords: ['réparation trottinette', 'atelier', 'freins', 'pneu', 'batterie', 'local'],
  authors: [{ name: 'Atelier Trottinettes' }],
  openGraph: {
    title: 'Atelier Trottinettes — Artisan Expert',
    description:
      "Réparation locale et rapide. Pièces + main d'œuvre, garantie, facture.",
    type: 'website',
    url: 'https://example.com',
  },
};

export const viewport: Viewport = {
  themeColor: '#0EA5E9',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-zinc-50 text-zinc-900">
        <Navbar />
        {children}
        <BottomActionBar />
        <Footer />
      </body>
    </html>
  );
}
