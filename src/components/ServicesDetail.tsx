'use client';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import WebIcon from '@mui/icons-material/Web';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CloudSyncIcon from '@mui/icons-material/CloudSync';

const detailedServices = [
    {
        icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
        title: 'Integración de Inteligencia Artificial',
        description: 'Implementamos soluciones de IA nativa y RAG para automatizar procesos, mejorar la experiencia del usuario y optimizar decisiones de negocio.',
        cta: 'Implementa IA en tu negocio',
        link: '/servicios/ia',
        color: '#00d4ff',
    },
    {
        icon: <AutoFixHighIcon sx={{ fontSize: 40 }} />,
        title: 'Automatización con Agentes de IA',
        description: 'Optimizamos tus flujos de trabajo mediante la orquestación de Agentes de IA (Elite Agents) y n8n, integrando múltiples sistemas con memoria de largo plazo.',
        cta: 'Automatiza tus procesos',
        link: '/servicios/agentes-ia',
        color: '#14b8a6',
    },
    {
        icon: <CodeIcon sx={{ fontSize: 40 }} />,
        title: 'Desarrollo de Software a Medida',
        description: 'Creamos soluciones de software a medida que se adaptan perfectamente a las necesidades únicas de tu empresa. Especialistas en arquitecturas escalables y modernas.',
        cta: 'Explora nuestro desarrollo de software',
        link: '/servicios/software-a-medida',
        color: '#f43f5e',
    },
    {
        icon: <CloudSyncIcon sx={{ fontSize: 40 }} />,
        title: 'DevOps y Automatización CI/CD',
        description: 'Potenciamos el ciclo de vida de tu software con pipelines automatizados. Expertos en infraestructuras Docker/FastAPI para alto rendimiento.',
        cta: 'Optimiza tu infraestructura hoy',
        link: '/servicios/devops',
        color: '#8b5cf6',
    },
    {
        icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
        title: 'Estrategias Digitales y E-commerce',
        description: 'Potenciamos tu presencia online con desarrollos para e-commerce de alto impacto y automatizaciones de venta activa 24/7.',
        cta: 'Descubre nuestras soluciones',
        link: '/servicios/ecommerce',
        color: '#10b981',
    },
    {
        icon: <BarChartIcon sx={{ fontSize: 40 }} />,
        title: 'Inteligencia de Negocios y Datos',
        description: 'Transformamos datos en insights accionables con dashboards personalizados y soluciones de visualización de datos a medida.',
        cta: 'Conoce nuestros servicios de BI',
        link: '/servicios/bi',
        color: '#ec4899',
    },
    {
        icon: <StorefrontIcon sx={{ fontSize: 40 }} />,
        title: 'Headless E-commerce',
        description: 'Tiendas online de velocidad extrema con Next.js + Shopify para mayor rendimiento, mejor SEO y experiencias premium.',
        cta: 'Lleva tu tienda al siguiente nivel',
        link: '/servicios/ecommerce',
        color: '#96bf48',
    },
    /*
    {
        icon: <WebIcon sx={{ fontSize: 40 }} />,
        title: 'Soluciones WordPress Empresariales',
        description: 'Creamos sitios WordPress robustos y escalables para empresas. Ofrecemos desarrollo de temas personalizados, plugins a medida y optimización de rendimiento para maximizar tu presencia digital.',
        cta: 'Descubre nuestras soluciones WordPress',
        link: '/servicios/wordpress',
        color: '#3b82f6',
    },
    */
];

export default function ServicesDetail() {
    return (
        <Box
            id="servicios-detalle"
            sx={{
                py: { xs: 10, md: 20 },
                position: 'relative'
                // background removido para continuidad
            }}
        >
            <Container maxWidth="lg">
                {/* Header Section */}
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 }, maxWidth: '900px', mx: 'auto' }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 900,
                            color: 'white',
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 3,
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1
                        }}
                    >
                        Todo lo que necesitas para<br />
                        <span style={{
                            background: 'linear-gradient(90deg, #fff 0%, #94a3b8 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            escalar tu negocio.
                        </span>
                    </Typography>
                    <Typography
                        sx={{
                            color: '#e0dfdf',
                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                            lineHeight: 1.6,
                            maxWidth: '700px',
                            mx: 'auto',
                            opacity: 0.9
                        }}
                    >
                        Stack tecnológico de última generación para productos de clase mundial.
                    </Typography>
                </Box>

                {/* Services Grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                        gap: 4,
                    }}
                >
                    {detailedServices.map((service, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                p: 4,
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '20px',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                position: 'relative',
                                overflow: 'hidden',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    borderColor: service.color,
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    boxShadow: `0 20px 40px -20px ${service.color}40`,
                                },
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '3px',
                                    background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                },
                                '&:hover::before': {
                                    opacity: 1,
                                }
                            }}
                        >
                            {/* Icon */}
                            <Box
                                sx={{
                                    width: 64,
                                    height: 64,
                                    borderRadius: '16px',
                                    background: `${service.color}15`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 3,
                                    color: service.color,
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {service.icon}
                            </Box>

                            {/* Title */}
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: 'white',
                                    mb: 2,
                                    fontSize: '1.25rem',
                                    lineHeight: 1.3
                                }}
                            >
                                {service.title}
                            </Typography>

                            {/* Description */}
                            <Typography
                                sx={{
                                    color: '#94a3b8',
                                    lineHeight: 1.7,
                                    mb: 3,
                                    fontSize: '0.95rem'
                                }}
                            >
                                {service.description}
                            </Typography>

                            {/* CTA Link */}
                            <Button
                                href={service.link || "#contacto"}
                                sx={{
                                    color: service.color,
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    p: 0,
                                    fontSize: '0.9rem',
                                    '&:hover': {
                                        background: 'transparent',
                                        transform: 'translateX(8px)',
                                    },
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                {service.cta} →
                            </Button>
                        </Paper>
                    ))}
                </Box>

            </Container>
        </Box>
    );
}
