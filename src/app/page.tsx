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

      {/* --- SECCIÓN UNIFICADA DE RESPALDO (Certificaciones + Partners) --- */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 10, lg: 15 }, alignItems: 'start' }}>

            {/* Columna Izquierda: Certificaciones */}
            <Box>
              <Typography variant="overline" sx={{ color: '#64748b', letterSpacing: 2, fontWeight: 700, mb: 4, display: 'block' }}>
                NUESTRAS CREDENCIALES
              </Typography>
              {/* Renderizamos el contenido interno de Certifications aquí, o usamos el componente pero ajustando su padding interno si fuera posible. 
                          Como el componente tiene su propio padding py:10, lo mejor es envolverlo o ajustar el componente. 
                          Para no romper nada, usaremos el componente tal cual pero el layout de 2 columnas ayuda visualmente.
                          Sin embargo, CertificationsSection tiene un Container y py alto.
                          
                          MEJOR ESTRATEGIA: Ajustar CertificationsSection y PartnersSection para que acepten "disablePadding" prop, 
                          O simplemente recrear su contenido aquí para tener control total del layout compacto.
                      */}
              <CertificationsSection disablepy={true} />
            </Box>

            {/* Columna Derecha: Partners */}
            <Box>
              <Typography variant="overline" sx={{ color: '#64748b', letterSpacing: 2, fontWeight: 700, mb: 4, display: 'block' }}>
                ALIADOS ESTRATÉGICOS
              </Typography>
              <PartnersSection disablepy={true} />
            </Box>

          </Box>
        </Container>
      </Box>

      {/* CTA Final para reemplazar Contacto */}
      <Box sx={{ py: 20, textAlign: 'center', background: 'radial-gradient(circle at center, rgba(0, 212, 255, 0.08) 0%, transparent 70%)' }}>
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
