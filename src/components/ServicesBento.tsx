'use client';
import { Box, Typography, Container, Paper } from '@mui/material';

// Data for the bento grid
const services = [
    {
        title: 'Desarrollo Web & Apps',
        desc: 'Arquitecturas escalables con Next.js y React Native.',
        colSpan: 2,
        rowSpan: 2,
        color: 'linear-gradient(135deg, #00d4ff 0%, #0056D2 100%)',
    },
    {
        title: 'Diseño UX/UI',
        desc: 'Interfaces que enamoran y convierten.',
        colSpan: 1,
        rowSpan: 1,
        color: 'rgba(255,255,255,0.03)',
    },
    {
        title: 'Cloud & DevOps',
        desc: 'Infraestructura AWS/Azure optimizada.',
        colSpan: 1,
        rowSpan: 1,
        color: 'rgba(255,255,255,0.03)',
    },
    {
        title: 'Consultoría IA',
        desc: 'Integración de modelos LLM en tu negocio.',
        colSpan: 1,
        rowSpan: 1,
        color: 'rgba(255,255,255,0.03)',
    },
    {
        title: 'E-commerce',
        desc: 'Tiendas de alto rendimiento.',
        colSpan: 1,
        rowSpan: 1,
        color: 'rgba(255,255,255,0.03)',
    },
];

export default function ServicesBento() {
    return (
        <Box sx={{ py: 20, position: 'relative' }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 10, textAlign: 'center' }}>
                    <Typography variant="h2" sx={{
                        fontWeight: 800,
                        color: 'white',
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        mb: 2,
                        letterSpacing: '-0.03em'
                    }}>
                        Todo lo que necesitas para <br />
                        <span className="text-gradient">escalar tu negocio.</span>
                    </Typography>
                    <Typography sx={{ color: '#a1a1aa', fontSize: '1.2rem' }}>
                        Stack tecnológico de última generación para productos de clase mundial.
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                    gridTemplateRows: { md: 'repeat(2, 300px)' },
                    gap: 3,
                }}>
                    {services.map((item, i) => (
                        <Paper
                            key={i}
                            elevation={0}
                            className="glass-card"
                            sx={{
                                gridColumn: { xs: 'span 1', md: `span ${item.colSpan}` },
                                gridRow: { xs: 'auto', md: `span ${item.rowSpan}` },
                                p: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                cursor: 'pointer',
                                background: item.colSpan === 2
                                    ? 'radial-gradient(circle at top right, rgba(46, 125, 233, 0.15), transparent 60%), rgba(255, 255, 255, 0.03)'
                                    : 'rgba(255, 255, 255, 0.03)',
                                '&:hover .icon-box': {
                                    transform: 'scale(1.1)',
                                    background: 'rgba(255,255,255,0.1)'
                                }
                            }}
                        >
                            <Box className="icon-box" sx={{
                                width: 48,
                                height: 48,
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 3,
                                transition: 'all 0.3s ease'
                            }}>
                                {/* Placeholder Icon */}
                                <Box sx={{ width: 24, height: 24, background: 'white', mask: 'url(https://api.iconify.design/lucide:zap.svg) no-repeat center', WebkitMask: 'url(https://api.iconify.design/lucide:zap.svg) no-repeat center' }} />
                            </Box>

                            <Box>
                                <Typography variant={item.colSpan === 2 ? "h3" : "h5"} sx={{
                                    fontWeight: 700,
                                    color: 'white',
                                    mb: 1.5,
                                    fontSize: item.colSpan === 2 ? '2rem' : '1.25rem',
                                    letterSpacing: '-0.02em'
                                }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{
                                    color: '#a1a1aa',
                                    fontSize: '1rem',
                                    lineHeight: 1.6
                                }}>
                                    {item.desc}
                                </Typography>
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
