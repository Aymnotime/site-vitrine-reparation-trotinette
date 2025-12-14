import { FintechHero } from '@/views/sections/fintech-hero';
import { BrandsCarousel } from '@/views/sections/brands-carousel';
import { BentoServices } from '@/views/sections/bento-services';
import { ProcessSection } from '@/views/sections/process-section-new';
import { WhyChooseUs } from '@/views/sections/why-choose-us';
import { AboutSection } from '@/views/sections/about-section';
import { LocationSection } from '@/views/sections/location-section-new';
import { ContactReservation } from '@/views/sections/contact-reservation';

export default function HomePage() {
  return (
    <main className="bg-zinc-50">
      <div className="pt-20">
        <FintechHero />
        <BentoServices />
        <ProcessSection />
        <WhyChooseUs />
        <AboutSection />
        <LocationSection />
        <BrandsCarousel />
        <ContactReservation />
      </div>
    </main>
  );
}
