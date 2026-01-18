'use client';
import { Box, Typography, Button, Container } from '@mui/material';

export default function FeatureSection() {
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, overflow: 'hidden' }}>

            {/* Mitad Izquierda: Imagen */}
            <Box sx={{
                flex: 1,
                minHeight: { xs: '400px', md: 'auto' },
                backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)' // Sombra sutil
                }
            }} />

            {/* Mitad Derecha: Contenido */}
            <Box sx={{
                flex: 1,
                bgcolor: 'rgba(10, 10, 11, 0.4)', // Fondo semitransparente para integrar con el fondo estrellado
                backdropFilter: 'blur(10px)', // Efecto glass moderno
                display: 'flex',
                alignItems: 'center',
                p: { xs: 4, md: 10, lg: 15 },
                borderTop: { xs: '1px solid rgba(255,255,255,0.05)', md: 'none' },
                borderLeft: { xs: 'none', md: '1px solid rgba(255,255,255,0.05)' } // Sutil separación visual
            }}>
                <Box sx={{ maxWidth: '600px' }}>
                    <Typography variant="overline" sx={{ color: '#00d4ff', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block' }}>
                        DESARROLLO DE SOFTWARE A MEDIDA
                    </Typography>

                    <Typography variant="h2" sx={{
                        color: 'white',
                        fontWeight: 800,
                        fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                        mb: 4,
                        lineHeight: 1.1
                    }}>
                        ¿Problemas para lanzar tu proyecto? Estamos acá para ayudarte.
                    </Typography>

                    <Typography sx={{ color: '#94a3b8', mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
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
                            bgcolor: '#00d4ff', // Cyan de la marca
                            color: 'black',
                            fontWeight: 700,
                            py: 1.5,
                            px: 5,
                            fontSize: '1rem',
                            borderRadius: '50px', // Redondeado consistente con otros botones
                            textTransform: 'none',
                            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)', // Glow sutil
                            '&:hover': {
                                bgcolor: '#40e0ff',
                                boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)'
                            }
                        }}
                    >
                        Hablemos
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
