'use client';
import { Box, Typography, Button, Container } from '@mui/material';

export default function FeatureSection() {
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, overflow: 'hidden' }}>

            {/* Mitad Izquierda: Imagen */}
            <Box sx={{
                flex: 1.5,
                minHeight: { xs: '400px', md: 'auto' },
                backgroundImage: 'url(/team_dev.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center 20%', // Enfoca la acción y omite el logo cortado de la izquierda
                position: 'relative',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)'
                }
            }} />

            {/* Mitad Derecha: Contenido */}
            <Box sx={{
                flex: 1,
                bgcolor: 'rgba(10, 10, 11, 0.4)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                p: { xs: 6, md: 10, lg: 14 }, // Aumentado el padding para mejor distribución
                borderTop: { xs: '1px solid rgba(255,255,255,0.05)', md: 'none' },
                borderLeft: { xs: 'none', md: '1px solid rgba(255,255,255,0.05)' }
            }}>
                <Box sx={{ maxWidth: '800px' }}> {/* Aumentado el ancho máximo */}
                    <Typography variant="overline" sx={{ color: '#00d4ff', fontWeight: 700, letterSpacing: 3, mb: 3, display: 'block', fontSize: '1rem' }}>
                        DESARROLLO DE SOFTWARE A MEDIDA
                    </Typography>

                    <Typography variant="h2" sx={{
                        color: 'white',
                        fontWeight: 900, // Más peso para impacto
                        fontSize: { xs: '2.2rem', md: '3rem', lg: '3.5rem' },
                        mb: 5,
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em'
                    }}>
                        ¿Problemas para lanzar tu proyecto? Estamos acá para ayudarte.
                    </Typography>

                    <Typography sx={{ color: '#cbd5e1', mb: 4, fontSize: '1.2rem', lineHeight: 1.7, fontWeight: 400 }}>
                        El desarrollo de software personalizado y el apalancamiento a nuevas tecnologías es la clave para impulsar el crecimiento de tu negocio. Con soluciones adaptadas a tus necesidades específicas, desde e-commerce hasta aplicaciones móviles, transformamos tus ideas en realidad digital.
                    </Typography>

                    <Typography sx={{ color: '#94a3b8', mb: 8, fontSize: '1.15rem', lineHeight: 1.7 }}>
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
                            py: 2.5, // Botón más grande
                            px: 7,
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            textTransform: 'none',
                            boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
                            '&:hover': {
                                bgcolor: '#40e0ff',
                                boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)',
                                transform: 'scale(1.05)'
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
