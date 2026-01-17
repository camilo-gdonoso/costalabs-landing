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
        icon: <CodeIcon sx={{ fontSize: 40 }} />,
        title: 'Desarrollo de Software a Medida',
        description: 'Creamos soluciones de software a medida que se adaptan perfectamente a las necesidades únicas de tu empresa. Nuestro equipo experto desarrolla software personalizado, desde aplicaciones web hasta sistemas complejos.',
        cta: 'Explora nuestro desarrollo de software a medida',
        link: '/servicios/software-a-medida',
        color: '#00d4ff',
    },
    {
        icon: <CloudSyncIcon sx={{ fontSize: 40 }} />,
        title: 'DevOps y Automatización CI/CD',
        description: 'Potenciamos el ciclo de vida de tu software con pipelines automatizados. Utilizamos herramientas líderes como Ansible, GitLab y Jenkins para asegurar despliegues rápidos, seguros y escalables.',
        cta: 'Optimiza tu infraestructura hoy',
        color: '#f43f5e',
    },
    {
        icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
        title: 'Estrategias Digitales y E-commerce',
        description: 'Potenciamos tu presencia online con estrategias digitales integrales y desarrollo de software para e-commerce. Implementamos soluciones de software a medida para maximizar tu alcance digital y aumentar conversiones.',
        cta: 'Descubre nuestras soluciones de e-commerce',
        color: '#10b981',
    },
    {
        icon: <BarChartIcon sx={{ fontSize: 40 }} />,
        title: 'Inteligencia de Negocios y Visualización de Datos',
        description: 'Transformamos datos en insights accionables con nuestros servicios de desarrollo de software para inteligencia de negocios. Creamos dashboards personalizados y soluciones de visualización de datos a medida.',
        cta: 'Conoce nuestros servicios de BI y dashboards',
        color: '#8b5cf6',
    },
    {
        icon: <StorefrontIcon sx={{ fontSize: 40 }} />,
        title: 'Desarrollo WooCommerce Personalizado',
        description: 'Maximiza tu tienda online con soluciones WooCommerce personalizadas. Desarrollamos plugins a medida, temas personalizados y optimizamos la experiencia de compra para aumentar tus ventas.',
        cta: 'Potencia tu tienda con WooCommerce',
        color: '#f59e0b',
    },
    {
        icon: <WebIcon sx={{ fontSize: 40 }} />,
        title: 'Soluciones WordPress Empresariales',
        description: 'Creamos sitios WordPress robustos y escalables para empresas. Ofrecemos desarrollo de temas personalizados, plugins a medida y optimización de rendimiento para maximizar tu presencia digital.',
        cta: 'Descubre nuestras soluciones WordPress',
        color: '#3b82f6',
    },
    {
        icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
        title: 'Integración de Inteligencia Artificial',
        description: 'Implementamos soluciones de IA para automatizar procesos, mejorar la experiencia del usuario y optimizar decisiones de negocio. Desde chatbots inteligentes hasta análisis predictivo.',
        cta: 'Implementa IA en tu negocio',
        color: '#ec4899',
    },
    {
        icon: <AutoFixHighIcon sx={{ fontSize: 40 }} />,
        title: 'Automatización con Agentes de IA',
        description: 'Optimizamos tus flujos de trabajo mediante la automatización con agentes de IA y n8n. Desarrollamos soluciones personalizadas que integran múltiples sistemas para mejorar la eficiencia operativa.',
        cta: 'Automatiza tus procesos',
        color: '#14b8a6',
    },
];

export default function ServicesDetail() {
    return (
        <Box
            id="servicios-detalle"
            sx={{
                py: { xs: 10, md: 15 },
                background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)',
            }}
        >
            <Container maxWidth="lg">
                {/* Header Section */}
                {/* Header Section */}
                <Box sx={{ textAlign: 'left', mb: { xs: 6, md: 10 }, maxWidth: '800px' }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            color: 'white',
                            fontSize: { xs: '2rem', md: '3rem' },
                            mb: 3,
                            letterSpacing: '-0.02em',
                            lineHeight: 1.2
                        }}
                    >
                        Desarrollo de software a medida para<br />
                        <span className="text-gradient">impulsar tu negocio</span>
                    </Typography>
                    <Typography
                        sx={{
                            color: '#94a3b8',
                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                            lineHeight: 1.8
                        }}
                    >
                        Transformamos desafíos tecnológicos en oportunidades de crecimiento mediante desarrollo de software a la medida.
                        Nuestras soluciones de software personalizadas y estrategias digitales impulsan la innovación y eficiencia en tu empresa.
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

                {/* Bottom CTA */}
                <Box sx={{ textAlign: 'center', mt: { xs: 8, md: 12 } }}>
                    <Typography
                        sx={{
                            color: '#64748b',
                            mb: 3,
                            fontSize: '1.1rem'
                        }}
                    >
                        ¿Listo para transformar tu negocio con tecnología?
                    </Typography>
                    <Button
                        href="#contacto"
                        variant="contained"
                        size="large"
                        sx={{
                            background: 'linear-gradient(135deg, #00d4ff 0%, #0056D2 100%)',
                            color: 'white',
                            fontWeight: 600,
                            px: 5,
                            py: 1.8,
                            borderRadius: '50px',
                            textTransform: 'none',
                            fontSize: '1rem',
                            boxShadow: '0 10px 30px -10px rgba(0, 212, 255, 0.5)',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #00b8e6 0%, #0047b3 100%)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 15px 40px -10px rgba(0, 212, 255, 0.6)',
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Solicitar Consultoría Gratuita
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
