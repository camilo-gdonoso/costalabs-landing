import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesBento from '@/components/ServicesBento';
import TechCarousel from '@/components/TechCarousel';

export default function Home() {
  return (
    <main className="bg-stars" style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navbar />
      <Hero />
      <TechCarousel />
      <ServicesBento />
    </main>
  );
}
