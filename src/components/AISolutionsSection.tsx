'use client';
import { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Tab, Tabs, Button, Stack, useTheme, useMediaQuery } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ShieldCheckIcon from '@mui/icons-material/VerifiedUser';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface PricingTier {
    name: string;
    details: string;
    maintenance?: string;
    idealFor?: string;
}

const modelA: PricingTier[] = [
    {
        name: 'Essential',
        details: 'Configuración de API de WhatsApp Business + Trigger de contacto.',
        maintenance: 'Fee básico de mantenimiento y uptime.'
    },
    {
        name: 'Data-First',
        details: 'Ingesta de documentos + Engine de búsqueda semántica (RAG).',
        maintenance: 'Fee por almacenamiento y gestión de vectores.'
    },
    {
        name: 'Flash AI',
        details: 'Ingeniería de Prompt + Contexto transaccional dinámico.',
        maintenance: 'Consumo de tokens + Fee de optimización.'
    },
    {
        name: 'Elite Agents',
        details: 'Orquestación de Agentes (Tools/APIs) + Memoria de largo plazo.',
        maintenance: 'Premium (Monitoreo de logs, seguridad y ajustes).'
    }
];

const modelB: PricingTier[] = [
    {
        name: 'Web Pro + Essential Bot',
        details: 'Landing page de alto impacto con arquitectura optimizada para conversiones y SEO.',
        idealFor: 'Servicios profesionales, consultoras boutique y servicios de respuesta inmediata.'
    },
    {
        name: 'Web Business + Data-First Bot',
        details: 'Sitio corporativo multi-sección con consultor experto que indexa toda la información sin alucinaciones.',
        idealFor: 'Instituciones educativas, estudios de ingeniería/arquitectura y clínicas.'
    },
    {
        name: 'Web E-Commerce + Flash AI Bot',
        details: 'E-commerce con pasarelas de pago + Asistente de ventas 24/7 que recomienda productos.',
        idealFor: 'Retail especializado, automotriz y marcas de consumo masivo.'
    },
    {
        name: 'Web Enterprise + Elite Agent',
        details: 'Aplicación web compleja + Agente autónomo capaz de consultar DBs y generar PDFs.',
        idealFor: 'Inmobiliarias, empresas de logística y plataformas SaaS B2B.'
    }
];

export default function AISolutionsSection() {
    const [tabValue, setTabValue] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <Box id="ai-solutions" sx={{ py: { xs: 10, md: 20 }, position: 'relative', overflow: 'hidden' }}>
            {/* Background Decor */}
            <Box sx={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '40%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: 0
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <Box sx={{ mb: 10, textAlign: 'center' }}>
                    <Typography variant="overline" sx={{ color: '#00d4ff', fontWeight: 800, letterSpacing: 3, mb: 2, display: 'block' }}>
                        NUESTRA ESPECIALIDAD
                    </Typography>
                    <Typography variant="h2" sx={{
                        fontWeight: 900,
                        color: 'white',
                        fontSize: { xs: '2.5rem', md: '4rem' },
                        mb: 3,
                        lineHeight: 1
                    }}>
                        ostaLabs <span style={{ color: '#00d4ff' }}>AI Solutions</span>
                    </Typography>
                    <Typography sx={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '800px', mx: 'auto' }}>
                        No instalamos chats, construimos ingeniería inteligente para transformar cada interacción en una oportunidad de negocio real.
                    </Typography>
                </Box>

                {/* Main Models Switcher */}
                <Box sx={{ mb: 8 }}>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        centered
                        sx={{
                            '& .MuiTabs-indicator': { bgcolor: '#00d4ff', height: 4, borderRadius: 2 },
                            '& .MuiTab-root': {
                                color: '#64748b',
                                fontSize: { xs: '0.9rem', md: '1.2rem' },
                                fontWeight: 600,
                                textTransform: 'none',
                                px: { xs: 2, md: 4 },
                                '&.Mui-selected': { color: 'white' }
                            }
                        }}
                    >
                        <Tab label="Modelo A: Smart Plug-in" />
                        <Tab label="Modelo B: Full Digital Ecosystem" />
                    </Tabs>
                </Box>

                {/* Content Area */}
                <Box sx={{ mb: 15 }}>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, lg: 4 }}>
                            <Paper sx={{
                                p: 4,
                                height: '100%',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Typography variant="h4" sx={{ color: 'white', fontWeight: 800, mb: 3 }}>
                                    {tabValue === 0 ? 'Integración en Plataformas Existentes' : 'Web a Medida + IA Nativa'}
                                </Typography>
                                <Typography sx={{ color: '#94a3b8', mb: 4, lineHeight: 1.8 }}>
                                    {tabValue === 0
                                        ? 'Inyectamos inteligencia mediante APIs en tu infraestructura actual (WordPress, Shopify, React, etc.). Despliegue ligero y alto rendimiento.'
                                        : 'Servicio integral 360°. Desarrollamos tu presencia digital desde la arquitectura base, donde la IA es el eje central de la experiencia.'}
                                </Typography>
                                <Stack spacing={2}>
                                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                        <DeviceHubIcon sx={{ color: '#00d4ff' }} />
                                        <Typography sx={{ color: 'white', fontWeight: 600 }}>
                                            {tabValue === 0 ? 'Backend en FastAPI + Docker' : 'Next.js + Arquitectura Cloud'}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                        <RocketLaunchIcon sx={{ color: '#00d4ff' }} />
                                        <Typography sx={{ color: 'white', fontWeight: 600 }}>
                                            {tabValue === 0 ? 'LangChain Native' : 'IA Nativa en el UX'}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Paper>
                        </Grid>

                        <Grid size={{ xs: 12, lg: 8 }}>
                            <Grid container spacing={2}>
                                {(tabValue === 0 ? modelA : modelB).map((tier, idx) => (
                                    <Grid size={{ xs: 12, md: 6 }} key={idx}>
                                        <Paper sx={{
                                            p: 3,
                                            height: '100%',
                                            background: 'rgba(0, 212, 255, 0.03)',
                                            border: '1px solid rgba(0, 212, 255, 0.1)',
                                            borderRadius: 3,
                                            transition: 'transform 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                background: 'rgba(0, 212, 255, 0.05)',
                                                borderColor: '#00d4ff'
                                            }
                                        }}>
                                            <Typography variant="h6" sx={{ color: '#00d4ff', fontWeight: 800, mb: 1 }}>
                                                {tier.name}
                                            </Typography>
                                            <Typography sx={{ color: 'white', fontSize: '0.95rem', mb: 2, lineHeight: 1.5 }}>
                                                {tier.details}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: '#64748b', display: 'block', fontStyle: 'italic' }}>
                                                {tier.maintenance || `Ideal para: ${tier.idealFor}`}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                {/* Differentiators Section */}
                <Box>
                    <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 800, color: 'white', mb: 8 }}>
                        Diferenciadores Estratégicos
                    </Typography>
                    <Grid container spacing={4}>
                        {[
                            {
                                icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
                                title: 'Independencia Tecnológica',
                                desc: 'No dependemos de herramientas No-Code limitadas. Usamos LangChain y Python para darte control total y los costos más competitivos.'
                            },
                            {
                                icon: <ShieldCheckIcon sx={{ fontSize: 40 }} />,
                                title: 'Seguridad de Grado Empresarial',
                                desc: 'Construcción a medida. Los datos no transitan por intermediarios innecesarios; todo viaja encriptado entre tu plataforma y la IA.'
                            },
                            {
                                icon: <CheckCircleOutlineIcon sx={{ fontSize: 40 }} />,
                                title: 'Compromiso con el Resultado',
                                desc: 'Nuestra meta es implementar la potencia digital que tu proyecto necesita para transformar cada interacción en negocio real.'
                            }
                        ].map((diff, i) => (
                            <Grid size={{ xs: 12, md: 4 }} key={i}>
                                <Box sx={{ textAlign: 'center', p: 4 }}>
                                    <Box sx={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 3,
                                        background: 'linear-gradient(135deg, rgba(0,212,255,0.2) 0%, transparent 100%)',
                                        color: '#00d4ff',
                                        border: '1px solid rgba(0,212,255,0.2)'
                                    }}>
                                        {diff.icon}
                                    </Box>
                                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
                                        {diff.title}
                                    </Typography>
                                    <Typography sx={{ color: '#94a3b8', lineHeight: 1.6 }}>
                                        {diff.desc}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Final CTA for bots */}
                <Box sx={{ mt: 10, textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        size="large"
                        href="/agendar"
                        sx={{
                            bgcolor: '#00d4ff',
                            color: '#03101c',
                            fontWeight: 800,
                            px: 6,
                            py: 2,
                            borderRadius: '50px',
                            '&:hover': { bgcolor: '#80e9ff' }
                        }}
                    >
                        Quiero automatizar mis ventas con ostaBot
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
