'use client';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import CodeWindow from '@/components/CodeWindow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WebIcon from '@mui/icons-material/Web';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';

export default function WordPressPage() {
    return (
        <main className="bg-stars" style={{ minHeight: '100vh', background: 'transparent', width: '100vw', overflowX: 'hidden' }}>
            <Navbar />

            {/* --- HERO SECTION --- */}
            <Box sx={{ pt: 20, pb: 10, position: 'relative', overflow: 'hidden' }}>
                <Container maxWidth="lg">
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: 8,
                        alignItems: 'center'
                    }}>
                        <Box>
                            <Typography variant="overline" sx={{ color: '#3b82f6', letterSpacing: 3, fontSize: '0.9rem', fontWeight: 600 }}>
                                DESARROLLO WORDPRESS
                            </Typography>
                            <Typography variant="h1" sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                fontWeight: 800,
                                color: 'white',
                                lineHeight: 1.1,
                                mt: 2,
                                mb: 3
                            }}>
                                Soluciones empresariales con <span className="text-gradient">WordPress</span>
                            </Typography>
                            <Typography sx={{ color: '#94a3b8', fontSize: '1.2rem', mb: 4, lineHeight: 1.6 }}>
                                Llevamos WordPress al nivel empresarial. Sitios corporativos, intranets y plataformas de contenido escalables, seguras y autogestionables.
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                href="#contacto"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                                    borderRadius: '50px',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                                    }
                                }}
                            >
                                Cotiza tu sitio WordPress
                            </Button>
                        </Box>
                        <Box>
                            <CodeWindow />
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- FEATURES --- */}
            <Box sx={{ py: 10, background: 'transparent' }}>
                <Container maxWidth="lg">
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 4
                    }}>
                        <Box sx={{ p: 4, border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <WebIcon sx={{ fontSize: 40, color: '#3b82f6', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Desarrollo Full-Site Editing</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Aprovechamos las últimas capacidades de WordPress para crear sitios completamente editables y modulares.</Typography>
                        </Box>
                        <Box sx={{ p: 4, border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <BuildIcon sx={{ fontSize: 40, color: '#10b981', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Headless WordPress</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Desacoplamos el frontend con Next.js o React para lograr velocidades extremas y seguridad de nivel bancario.</Typography>
                        </Box>
                        <Box sx={{ p: 4, border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <SecurityIcon sx={{ fontSize: 40, color: '#f43f5e', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Mantención y Seguridad</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Planes de mantenimiento continuo, actualizaciones seguras y monitoreo proactivo contra amenazas.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <ContactForm />
            <WhatsAppButton />
        </main>
    );
}
