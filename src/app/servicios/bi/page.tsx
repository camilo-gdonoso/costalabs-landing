'use client';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';

import ContactForm from '@/components/ContactForm';
import CodeWindow from '@/components/CodeWindow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import StorageIcon from '@mui/icons-material/Storage';

export default function BIPage() {
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
                            <Typography variant="overline" sx={{ color: '#8b5cf6', letterSpacing: 3, fontSize: '0.9rem', fontWeight: 600 }}>
                                BUSINESS INTELLIGENCE
                            </Typography>
                            <Typography variant="h1" sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                fontWeight: 800,
                                color: 'white',
                                lineHeight: 1.1,
                                mt: 2,
                                mb: 3
                            }}>
                                Toma decisiones <span className="text-gradient">basadas en datos</span>
                            </Typography>
                            <Typography sx={{ color: '#94a3b8', fontSize: '1.2rem', mb: 4, lineHeight: 1.6 }}>
                                Convertimos tus datos en información valiosa. Desarrollamos dashboards interactivos, pipelines de datos y sistemas de reporte automatizados para que tengas visibilidad total de tu negocio.
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                href="#contacto"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                                    borderRadius: '50px',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
                                    }
                                }}
                            >
                                Consulta sobre BI
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
                            <BarChartIcon sx={{ fontSize: 40, color: '#8b5cf6', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Dashboards en Tiempo Real</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Visualiza tus KPIs clave con herramientas como Power BI, Looker Studio o desarrollos a medida en React.</Typography>
                        </Box>
                        <Box sx={{ p: 4, border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <StorageIcon sx={{ fontSize: 40, color: '#f43f5e', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Ingeniería de Datos</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Construimos Data Warehouses y pipelines ETL (Extract, Transform, Load) para centralizar tu información.</Typography>
                        </Box>
                        <Box sx={{ p: 4, border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <ShowChartIcon sx={{ fontSize: 40, color: '#10b981', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Analítica Predictiva</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Utilizamos modelos estadísticos y Machine Learning para proyectar tendencias y anticipar el futuro.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <ContactForm />

        </main>
    );
}
