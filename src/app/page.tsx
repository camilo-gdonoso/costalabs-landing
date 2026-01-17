import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesDetail from '@/components/ServicesDetail';
import TechCarousel from '@/components/TechCarousel';
import CertificationsSection from '@/components/CertificationsSection';
import PartnersSection from '@/components/PartnersSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { DNASection, SectorsSection } from '@/components/DossierSections';
import { Box, Container, Typography, Button } from '@mui/material'; // Import para el CTA inline

export default function Home() {
  return (
    <main className="bg-stars" style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navbar />
      <Hero />
      <TechCarousel />
      <DNASection />
      <ServicesDetail />
      {/* ProcessSection movido a /agendar */}
      <SectorsSection />
      <CertificationsSection />
      <PartnersSection />

      {/* CTA Final para reemplazar Contacto */}
      <Box sx={{ py: 15, textAlign: 'center', background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0, 212, 255, 0.05) 100%)' }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, mb: 4 }}>
            ¿Listo para construir el futuro?
          </Typography>
          <Typography sx={{ color: '#94a3b8', fontSize: '1.25rem', mb: 6 }}>
            Tu próximo gran proyecto comienza con una conversación. Hablemos de cómo la tecnología puede escalar tu negocio.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/agendar"
            sx={{
              bgcolor: '#00d4ff',
              color: 'black',
              fontSize: '1.2rem',
              fontWeight: 700,
              py: 2,
              px: 6,
              borderRadius: '50px',
              '&:hover': { bgcolor: '#80e9ff' }
            }}
          >
            Agendar una Reunión
          </Button>
        </Container>
      </Box>

      <WhatsAppButton />
    </main>
  );
}
