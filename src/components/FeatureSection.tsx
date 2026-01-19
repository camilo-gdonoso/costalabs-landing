'use client';
import { Box, Typography, Button, Container } from '@mui/material';

export default function FeatureSection() {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            overflow: 'hidden',
            minHeight: { md: '800px' } // Altura mínima para que la imagen luzca imponente
        }}>

            {/* Mitad Izquierda: Imagen */}
            <Box sx={{
                flex: 1.8, // Más espacio para que la imagen respire
                minHeight: { xs: '400px', md: 'auto' },
                backgroundImage: 'url(/team_dev.png)',
                backgroundSize: 'cover',
                backgroundPosition: '0% 20%', // 0% asegura que el logo al borde izquierdo no se corte
                position: 'relative',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, rgba(10,10,11,0.6) 0%, rgba(10,10,11,0) 30%)' // Sombra sutil al inicio
                }
            }} />

            {/* Mitad Derecha: Contenido */}
            <Box sx={{
                flex: 1,
                bgcolor: '#0a0a0b', // Fondo sólido para eliminar el espacio negro residual
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Centrado vertical
                p: { xs: 6, md: 8, lg: 12 },
                borderLeft: { md: '1px solid rgba(255,255,255,0.05)' }
            }}>
                <Box sx={{ maxWidth: '850px', transform: 'translateY(-20px)' }}> {/* Nudge up para mejor encuadre */}
                    <Typography variant="overline" sx={{ color: '#00d4ff', fontWeight: 800, letterSpacing: 4, mb: 3, display: 'block', fontSize: '1.1rem' }}>
                        DESARROLLO DE SOFTWARE A MEDIDA
                    </Typography>

                    <Typography variant="h2" sx={{
                        color: 'white',
                        fontWeight: 900,
                        fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.2rem' }, // Título mucho más grande
                        mb: 4,
                        lineHeight: 1.05,
                        letterSpacing: '-0.03em'
                    }}>
                        ¿Problemas para lanzar <br /> tu proyecto? Estamos <br /> acá para ayudarte.
                    </Typography>

                    <Typography sx={{ color: '#cbd5e1', mb: 4, fontSize: '1.35rem', lineHeight: 1.6, maxWidth: '90%' }}>
                        El desarrollo de software personalizado y el apalancamiento a nuevas tecnologías es la clave para impulsar el crecimiento de tu negocio.
                    </Typography>

                    <Typography sx={{ color: '#94a3b8', mb: 8, fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '90%' }}>
                        Transformamos tus ideas en realidad digital con soluciones adaptadas a tus necesidades específicas. No dejes que los desafíos técnicos frenen tu progreso.
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        href="/agendar"
                        sx={{
                            bgcolor: '#00d4ff',
                            color: 'black',
                            fontWeight: 800,
                            py: 3,
                            px: 8,
                            fontSize: '1.2rem',
                            borderRadius: '100px',
                            textTransform: 'none',
                            boxShadow: '0 20px 40px rgba(0, 212, 255, 0.25)',
                            '&:hover': {
                                bgcolor: '#40e0ff',
                                boxShadow: '0 25px 50px rgba(0, 212, 255, 0.45)',
                                transform: 'scale(1.05) translateY(-5px)'
                            },
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                    >
                        Comenzar Ahora
                    </Button>
                </Box>
            </Box>
        </Box>
        </Box >
    );
}
