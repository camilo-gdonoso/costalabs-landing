'use client';
import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';

export default function Hero() {
    return (
        <Box className="bg-stars" sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pt: { xs: 15, md: 24 },
            pb: 10,
            position: 'relative',
            overflow: 'hidden',
            background: 'transparent',
        }}>
            {/* Top Light Beam Effect */}
            <Box sx={{
                position: 'absolute',
                top: -200,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                maxWidth: '800px',
                height: '400px',
                background: 'conic-gradient(from 180deg at 50% 50%, #2bd2ff 0deg, transparent 60deg, transparent 300deg, #2bd2ff 360deg)',
                filter: 'blur(100px)',
                opacity: 0.15,
                zIndex: 0,
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>

                {/* Badge */}
                <Box sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    py: 0.8,
                    px: 2,
                    borderRadius: '50px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    mb: 5,
                    animation: 'fadeInUp 0.8s ease-out'
                }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#2bd2ff', mr: 1.5, boxShadow: '0 0 10px #2bd2ff' }} />
                    <Typography variant="caption" sx={{ color: '#e2e8f0', fontWeight: 500, letterSpacing: 0.5 }}>
                        PIONEROS EN IA NATIVA
                    </Typography>
                </Box>

                {/* Main Title */}
                <Typography variant="h1" sx={{
                    fontSize: { xs: '3rem', md: '5.5rem', lg: '6.5rem' },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: '#ffffff',
                    mb: 4,
                    animation: 'fadeInUp 1s ease-out 0.2s backwards'
                }}>
                    Software a Medida <br />
                    <Box component="span" sx={{
                        background: 'linear-gradient(to right, #00d4ff, #ffffff, #00d4ff)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'textShine 5s linear infinite'
                    }}>
                        con IA Nativa.
                    </Box>
                </Typography>

                {/* Description */}
                <Typography variant="h5" sx={{
                    color: '#94a3b8',
                    fontSize: { xs: '1.1rem', md: '1.4rem' },
                    maxWidth: '850px',
                    mx: 'auto',
                    lineHeight: 1.6,
                    mb: 8,
                    animation: 'fadeInUp 1s ease-out 0.4s backwards'
                }}>
                    Somos parte de la nueva generación de empresas chilenas que lideran la integración de IA avanzada en el sector productivo y la automatización inteligente a escala nacional.
                </Typography>

                {/* Buttons CTA */}
                <Box sx={{
                    display: 'flex',
                    gap: 3,
                    justifyContent: 'center',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                    mb: 10,
                    animation: 'fadeInUp 1s ease-out 0.5s backwards'
                }}>
                    <Button
                        variant="contained"
                        href="/agendar"
                        sx={{
                            bgcolor: '#00d4ff',
                            color: 'black',
                            fontSize: '1rem',
                            fontWeight: 700,
                            py: 1.5,
                            px: 4,
                            borderRadius: '50px',
                            textTransform: 'none',
                            '&:hover': { bgcolor: '#80e9ff' }
                        }}
                    >
                        Agendar Reunión
                    </Button>
                    <Button
                        variant="outlined"
                        href="/Dossier_CostaLabs_2026_FINAL.pdf"
                        download
                        sx={{
                            color: 'white',
                            borderColor: 'rgba(255,255,255,0.2)',
                            fontSize: '1rem',
                            fontWeight: 600,
                            py: 1.5,
                            px: 4,
                            borderRadius: '50px',
                            textTransform: 'none',
                            backdropFilter: 'blur(10px)',
                            background: 'rgba(255,255,255,0.03)',
                            '&:hover': {
                                borderColor: 'white',
                                background: 'rgba(255,255,255,0.08)'
                            }
                        }}
                    >
                        Descargar Dossier 2026
                    </Button>
                </Box>





            </Container>

            {/* Full Width Video Section */}
            <Box sx={{
                width: '100%',
                position: 'relative',
                height: { xs: '350px', md: '600px', lg: '700px' },
                overflow: 'hidden',
                animation: 'fadeInUp 1.2s ease-out 0.6s backwards',
                mt: 4,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.9,
                        display: 'block'
                    }}
                >
                    <source src="/Video_Elegante_para_Marca_Personal.mp4?v=2" type="video/mp4" />
                </video>

                {/* Gradient Overlays for smooth blending */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '150px',
                    background: 'linear-gradient(to bottom, var(--background) 0%, transparent 100%)'
                }} />
                <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '150px',
                    background: 'linear-gradient(to top, var(--background) 0%, transparent 100%)'
                }} />
            </Box>
        </Box>
    );
}
