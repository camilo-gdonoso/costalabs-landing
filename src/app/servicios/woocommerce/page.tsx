'use client';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import CodeWindow from '@/components/CodeWindow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ExtensionIcon from '@mui/icons-material/Extension';
import SpeedIcon from '@mui/icons-material/Speed';

export default function WooCommercePage() {
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
                            <Typography variant="overline" sx={{ color: '#f59e0b', letterSpacing: 3, fontSize: '0.9rem', fontWeight: 600 }}>
                                DESARROLLO WOOCOMMERCE
                            </Typography>
                            <Typography variant="h1" sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                fontWeight: 800,
                                color: 'white',
                                lineHeight: 1.1,
                                mt: 2,
                                mb: 3
                            }}>
                                Maximiza tus ventas con <span className="text-gradient">WooCommerce</span>
                            </Typography>
                            <Typography sx={{ color: '#94a3b8', fontSize: '1.2rem', mb: 4, lineHeight: 1.6 }}>
                                Desarrollo de tiendas online robustas, escalables y personalizadas sobre la plataforma de comercio electrónico más popular del mundo.
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                href="#contacto"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                    borderRadius: '50px',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                                    }
                                }}
                            >
                                Inicia tu tienda WooCommerce
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
                            <ExtensionIcon sx={{ fontSize: 40, color: '#f59e0b', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Plugins a Medida</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Desarrollamos funcionalidades personalizadas que no existen en el mercado para adaptar tu tienda a tu negocio.</Typography>
                        </Box>
                        <Box sx={{ p: 4, border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <StorefrontIcon sx={{ fontSize: 40, color: '#10b981', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Diseño Personalizado</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Temas únicos optimizados para conversión, mobile-first y velocidad de carga.</Typography>
                        </Box>
                        <Box sx={{ p: 4, border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <SpeedIcon sx={{ fontSize: 40, color: '#3b82f6', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Optimización de Rendimiento</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Hacemos que tu WooCommerce vuele. Auditoría técnica, caché avanzado y optimización de base de datos.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <ContactForm />
            <WhatsAppButton />
        </main>
    );
}
