'use client';
import { Box, Typography, Button } from '@mui/material';

export default function FeatureSection() {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            overflow: 'hidden',
        }}>

            {/* Mitad Izquierda: Imagen */}
            <Box sx={{
                flex: { xs: 1, md: 1.8 }, // Más ancho para que la imagen original se muestre completa
                minHeight: { xs: '400px', md: 'auto' },
                backgroundImage: 'url(/team_dev.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'left center', // Anclamos a la izquierda para asegura que el logo (C) se vea
                position: 'relative',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // Gradiente más sutil para no tapar la imagen
                    background: 'linear-gradient(90deg, rgba(10,10,11,0.2) 0%, rgba(10,10,11,0) 50%)'
                }
            }} />

            {/* Mitad Derecha: Contenido */}
            <Box sx={{
                flex: 1,
                bgcolor: '#0a0a0b',
                display: 'flex',
                alignItems: 'center',
                p: { xs: 6, md: 8, lg: 12 },
                borderLeft: { md: '1px solid rgba(255,255,255,0.05)' }
            }}>
                <Box sx={{ maxWidth: '800px' }}>
                    <Typography variant="overline" sx={{ color: '#00d4ff', fontWeight: 800, letterSpacing: 3, mb: 3, display: 'block', fontSize: '1rem' }}>
                        DESARROLLO DE SOFTWARE A MEDIDA
                    </Typography>

                    <Typography variant="h2" sx={{
                        color: 'white',
                        fontWeight: 900,
                        fontSize: { xs: '2.5rem', md: '3rem', lg: '3.8rem' },
                        mb: 4,
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em'
                    }}>
                        ¿Problemas para lanzar <br /> tu proyecto? Estamos <br /> acá para ayudarte.
                    </Typography>

                    <Typography sx={{ color: '#cbd5e1', mb: 3, fontSize: '1.2rem', lineHeight: 1.7, fontWeight: 300 }}>
                        El desarrollo de software personalizado y el apalancamiento a nuevas tecnologías es la clave para impulsar el crecimiento de tu negocio. Con soluciones adaptadas a tus necesidades específicas, desde e-commerce hasta aplicaciones móviles, transformamos tus ideas en realidad digital.
                    </Typography>

                    <Typography sx={{ color: '#94a3b8', mb: 6, fontSize: '1.1rem', lineHeight: 1.7 }}>
                        No dejes que los desafíos técnicos frenen tu progreso. Contáctanos hoy y descubre cómo nuestro expertise en desarrollo de software puede potenciar tu proyecto y llevarlo al siguiente nivel.
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        href="/agendar"
                        sx={{
                            bgcolor: '#00d4ff',
                            color: 'black',
                            fontWeight: 800,
                            py: 2,
                            px: 6,
                            fontSize: '1.1rem',
                            borderRadius: '100px',
                            textTransform: 'none',
                            boxShadow: '0 10px 30px rgba(0, 212, 255, 0.2)',
                            '&:hover': {
                                bgcolor: '#40e0ff',
                                boxShadow: '0 20px 40px rgba(0, 212, 255, 0.4)',
                                transform: 'translateY(-2px)'
                            },
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Hablemos
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
