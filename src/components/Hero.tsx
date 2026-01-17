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
            background: 'radial-gradient(ellipse at top, #1B2735 0%, var(--background) 100%)', // Subtle top glow
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
                        v2.0 IS NOW LIVE
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
                    El Futuro Digital <br />
                    <Box component="span" sx={{
                        background: 'linear-gradient(to right, #94a3b8, #ffffff, #94a3b8)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'textShine 5s linear infinite'
                    }}>
                        Reimaginado.
                    </Box>
                </Typography>

                {/* Description */}
                <Typography variant="h5" sx={{
                    color: '#94a3b8',
                    fontSize: { xs: '1.1rem', md: '1.4rem' },
                    maxWidth: '680px',
                    mx: 'auto',
                    lineHeight: 1.6,
                    mb: 8,
                    animation: 'fadeInUp 1s ease-out 0.4s backwards'
                }}>
                    Expertos en desarrollo de software a medida y estrategias digitales impulsadas por IA. Transformamos tus desafíos en ventajas competitivas con soluciones seguras, rápidas y eficientes, diseñadas para empresas que buscan salir de lo tradicional y liderar el futuro.
                </Typography>


                {/* Warp-like Terminal/Interface Visual */}
                <Box sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1000px',
                    mx: 'auto',
                    animation: 'fadeInUp 1.2s ease-out 0.6s backwards',
                }}>
                    <Box sx={{
                        background: '#0f1115',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '16px',
                        boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 20px 50px -10px rgba(0,0,0,0.5)',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        {/* Fake Window Header */}
                        <Box sx={{ height: 40, background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', px: 2, gap: 1 }}>
                            <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                            <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                            <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                        </Box>

                        {/* Content Area */}

                        <Box sx={{ position: 'relative', height: { xs: '300px', md: '500px' } }}>
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    opacity: 0.9
                                }}
                            >
                                <source src="/Animación_de_Imagen_con_Rayos_Digitales.mp4" type="video/mp4" />
                            </video>
                            {/* Gradient Overlay */}
                            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,11,1) 0%, transparent 50%)' }} />
                        </Box>
                    </Box>

                    {/* Decorative Glow behind the window */}
                    <Box sx={{
                        position: 'absolute',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '90%', height: '90%',
                        background: 'radial-gradient(circle, rgba(43, 210, 255, 0.15) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                        zIndex: -1
                    }} />
                </Box>

            </Container>
        </Box>
    );
}
