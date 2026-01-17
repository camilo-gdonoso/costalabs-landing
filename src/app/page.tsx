import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesDetail from '@/components/ServicesDetail';
import ProcessSection from '@/components/ProcessSection';
import TechCarousel from '@/components/TechCarousel';
import CertificationsSection from '@/components/CertificationsSection';
import PartnersSection from '@/components/PartnersSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { DNASection, SectorsSection, ContactSection } from '@/components/DossierSections';

export default function Home() {
  return (
    <main className="bg-stars" style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navbar />
      <Hero />
      <TechCarousel />
      <DNASection />
      <ServicesDetail />
      <ProcessSection />
      <SectorsSection />
      <CertificationsSection />
      <PartnersSection />
      <ContactSection />
      <WhatsAppButton />
    </main>
  );
}
