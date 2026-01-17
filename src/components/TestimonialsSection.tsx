'use client';
import { useState } from 'react';
import { Box, Container, Typography, IconButton, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
    {
        id: 1,
        text: "CostaLabs transformó nuestra idea en un MVP funcional en solo 8 semanas. Su enfoque ágil nos permitió validar rápidamente nuestro concepto y asegurar financiación. Son más que desarrolladores; son socios estratégicos en innovación.",
        author: "Carlos Méndez",
        role: "CEO, StartUp Latam",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 2,
        text: "La capacidad técnica del equipo es impresionante. Lograron migrar nuestra infraestructura a la nube sin tiempo de inactividad, optimizando nuestros costos en un 40%.",
        author: "Ana Vitale",
        role: "CTO, FinTech Solutions",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 3,
        text: "Entienden perfectamente la intersección entre negocio y tecnología. Su consultoría en IA nos permitió automatizar procesos clave que antes nos tomaban días.",
        author: "Felipe Ríos",
        role: "Gerente de Operaciones, RetailCorp",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <Box sx={{ py: 15, position: 'relative' }}>
            <Container maxWidth="lg">
                <Box sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center', position: 'relative' }}>

                    {/* Estrellas */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, mb: 4 }}>
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} sx={{ color: '#F59E0B', fontSize: 24 }} />
                        ))}
                    </Box>

                    {/* Texto del Testimonio (Cita) */}
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'white',
                            fontWeight: 500,
                            fontSize: { xs: '1.25rem', md: '1.75rem' },
                            fontStyle: 'italic',
                            lineHeight: 1.6,
                            mb: 6,
                            minHeight: { md: '120px' } // Altura mínima para evitar saltos
                        }}
                    >
                        "{testimonials[currentIndex].text}"
                    </Typography>

                    {/* Autor */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <Avatar
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].author}
                            sx={{ width: 64, height: 64, border: '2px solid #00d4ff' }}
                        />
                        <Box>
                            <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>
                                {testimonials[currentIndex].author}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                                {testimonials[currentIndex].role}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Controles de Navegación */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, mt: 6 }}>
                        <IconButton
                            onClick={handlePrev}
                            sx={{
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                                '&:hover': { background: 'rgba(255,255,255,0.1)' }
                            }}
                        >
                            <ArrowBackIosNewIcon fontSize="small" />
                        </IconButton>

                        {/* Indicadores (Puntos) */}
                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                            {testimonials.map((_, index) => (
                                <Box
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    sx={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        bgcolor: index === currentIndex ? '#00d4ff' : 'rgba(255,255,255,0.2)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            ))}
                        </Box>

                        <IconButton
                            onClick={handleNext}
                            sx={{
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                                '&:hover': { background: 'rgba(255,255,255,0.1)' }
                            }}
                        >
                            <ArrowForwardIosIcon fontSize="small" />
                        </IconButton>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
}
