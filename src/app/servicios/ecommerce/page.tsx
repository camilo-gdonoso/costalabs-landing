'use client';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import PaymentGatewayVisual from '@/components/PaymentGatewayVisual';
import SeoVisualizer from '@/components/SeoVisualizer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function EcommercePage() {
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
                            <Typography variant="overline" sx={{ color: '#10b981', letterSpacing: 3, fontSize: '0.9rem', fontWeight: 600 }}>
                                E-COMMERCE & ESTRATEGIA DIGITAL
                            </Typography>
                            <Typography variant="h1" sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                fontWeight: 800,
                                color: 'white',
                                lineHeight: 1.1,
                                mt: 2,
                                mb: 3
                            }}>
                                Vende más con una <span className="text-gradient">tienda online optimizada</span>
                            </Typography>
                            <Typography sx={{ color: '#94a3b8', fontSize: '1.2rem', mb: 4, lineHeight: 1.6 }}>
                                Diseñamos y desarrollamos experiencias de compra online que convierten visitantes en clientes fieles. Desde plataformas personalizadas hasta estrategias de marketing digital integradas.
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                href="#contacto"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                    borderRadius: '50px',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                                    }
                                }}
                            >
                                Inicia tu proyecto E-commerce
                            </Button>
                        </Box>
                        <Box>
                            <PaymentGatewayVisual />
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
                            <StorefrontIcon sx={{ fontSize: 40, color: '#10b981', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Diseño UX/UI Centrado en Conversión</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Interfaces intuitivas y atractivas diseñadas para guiar al usuario hacia la compra.</Typography>
                        </Box>
                        <Box sx={{ p: 4, border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <ShoppingCartIcon sx={{ fontSize: 40, color: '#3b82f6', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Plataformas Escalables</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Desarrollamos sobre arquitecturas modernas como Headless Shopify o soluciones a medida con Next.js preparadas para crecer.</Typography>
                        </Box>
                        <Box sx={{ p: 4, border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <LocalShippingIcon sx={{ fontSize: 40, color: '#f59e0b', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Integraciones Logísticas y de Pago</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Conectamos tu tienda con pasarelas de pago locales (Transbank, MercadoPago) y operadores logísticos.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- SEO & ESTRATEGIA --- */}
            <Box sx={{ py: 15 }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'center' }}>
                        <Box>
                            <Typography variant="overline" sx={{ color: '#10b981', letterSpacing: 2 }}>ESTRATEGIA 360°</Typography>
                            <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, mt: 1, mb: 4 }}>
                                No basta con existir, <br />
                                <span className="text-gradient">tienen que encontrarte.</span>
                            </Typography>
                            <Typography sx={{ color: '#94a3b8', fontSize: '1.1rem', mb: 4 }}>
                                Todos nuestros desarrollos incluyen una base sólida de <strong>SEO Técnico</strong> desde el día uno. Optimizamos cada línea de código para que Google ame tu sitio tanto como tus clientes.
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <CheckCircleIcon sx={{ color: '#10b981' }} />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 700 }}>SEO Técnico Avanzado</Typography>
                                        <Typography sx={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Estructura de datos Schema.org, sitemaps XML, meta etiquetas dinámicas y optimización de Core Web Vitals.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <CheckCircleIcon sx={{ color: '#10b981' }} />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 700 }}>Google Business Profile</Typography>
                                        <Typography sx={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Configuración y optimización de tu ficha de negocio para dominar las búsquedas locales y aparecer en Google Maps.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <CheckCircleIcon sx={{ color: '#10b981' }} />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 700 }}>Estrategia de Contenidos a Medida</Typography>
                                        <Typography sx={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Crearemos una hoja de ruta para posicionar tus palabras clave, tal como lo hacemos en <strong>ostaLabs</strong> y <strong>Tierra Producciones</strong>.</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            height: '100%',
                            minHeight: '400px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <SeoVisualizer />
                        </Box>
                    </Box>
                </Container>
            </Box>

            <ContactForm />
            <WhatsAppButton />
        </main>
    );
}
