'use client';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';
import ContactForm from '@/components/ContactForm';

export default function AgendarPage() {
    return (
        <main className="bg-stars" style={{ minHeight: '100vh', background: 'var(--background)' }}>
            <Navbar />

            <Box sx={{ pt: 20, pb: 10 }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 10 }}>
                        <Typography variant="overline" sx={{ color: '#00d4ff', letterSpacing: 2, fontWeight: 600 }}>
                            AGENDA UNA REUNIÓN
                        </Typography>
                        <Typography variant="h1" sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '2.5rem', md: '4rem' }, mt: 2 }}>
                            Hablemos de tu visión.
                        </Typography>
                        <Typography sx={{ color: '#94a3b8', fontSize: '1.2rem', mt: 3, maxWidth: '600px', mx: 'auto' }}>
                            Estamos listos para escuchar tu desafío y proponer una solución técnica que escale tu negocio.
                        </Typography>
                    </Box>

                    {/* Sección del Proceso (Pasos 1, 2, 3) */}
                    <Box sx={{ mb: 15 }}>
                        <ProcessSection />
                    </Box>

                    {/* Formulario de Contacto */}
                    <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
                        <Typography variant="h3" sx={{ color: 'white', fontWeight: 700, mb: 6, textAlign: 'center' }}>
                            Envíanos un mensaje
                        </Typography>
                        <ContactForm />
                    </Box>
                </Container>
            </Box>
        </main>
    );
}
