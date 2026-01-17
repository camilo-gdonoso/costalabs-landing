import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesBento from '@/components/ServicesBento';
import ServicesDetail from '@/components/ServicesDetail';
import TechCarousel from '@/components/TechCarousel';
import WhatsAppButton from '@/components/WhatsAppButton';
import { DNASection, SectorsSection, ContactSection } from '@/components/DossierSections';

export default function Home() {
  return (
    <main className="bg-stars" style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navbar />
      <Hero />
      <TechCarousel />
      <DNASection />
      <ServicesBento />
      <ServicesDetail />
      <SectorsSection />
      <ContactSection />
      <WhatsAppButton />
    </main>
  );
}
