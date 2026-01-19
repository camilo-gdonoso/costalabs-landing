'use client';
import { useState } from 'react';
import { Box, Container, Typography, IconButton, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
    {
        id: 1,
        text: "Trabajar con CostaLabs ha sido una experiencia transformadora para Tierra Producciones. Su capacidad para entender nuestra visión y plasmarla en soluciones tecnológicas robustas nos ha permitido escalar nuestro negocio de manera eficiente.",
        author: "Marcela Donoso",
        role: "CEO & Founder at Tierraproducciones",
        image: "/testimonials/marce.jpeg"
    },
    {
        id: 2,
        text: "La experiencia de CostaLabs en arquitectura cloud y automatización es sobresaliente. Han sido un socio clave en el desarrollo de nuestra infraestructura tecnológica, permitiéndonos enfocarnos en la innovación de nuestro producto principal con total confianza.",
        author: "Sebastian Aranguiz",
        role: "CTO & CoFounder at Raptorsystems.cl",
        image: "/testimonials/sebaperfil.jpeg"
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
