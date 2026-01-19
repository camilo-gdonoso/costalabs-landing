'use client';
import { Box, Typography, Button } from '@mui/material';

export default function FeatureSection() {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            overflow: 'hidden',
            minHeight: { md: '800px' }
        }}>

            {/* Mitad Izquierda: Imagen */}
            <Box sx={{
                flex: 2.2,
                minHeight: { xs: '400px', md: 'auto' },
                backgroundImage: 'url(/team_dev.png)',
                backgroundSize: 'cover',
                backgroundPosition: '5% 20%',
                position: 'relative',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, rgba(10,10,11,0.4) 0%, rgba(10,10,11,0) 20%)'
                }
            }} />

            {/* Mitad Derecha: Contenido */}
            <Box sx={{
                flex: 1,
                bgcolor: '#0a0a0b',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                p: { xs: 4, md: 8, lg: 10 },
                borderLeft: { md: '1px solid rgba(255,255,255,0.05)' }
            }}>
                <Box sx={{ maxWidth: '900px', transform: 'translateY(-40px)' }}>
                    <Typography variant="overline" sx={{ color: '#00d4ff', fontWeight: 800, letterSpacing: 5, mb: 3, display: 'block', fontSize: '1.2rem' }}>
                        TECNOLOGÍA A MEDIDA
                    </Typography>

                    <Typography variant="h1" sx={{
                        color: 'white',
                        fontWeight: 900,
                        fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                        mb: 4,
                        lineHeight: 1,
                        letterSpacing: '-0.04em'
                    }}>
                        ¿Problemas para <br /> lanzar tu proyecto? <br /> <span className="text-gradient">Estamos aquí.</span>
                    </Typography>

                    <Typography sx={{ color: '#cbd5e1', mb: 5, fontSize: '1.5rem', lineHeight: 1.5, maxWidth: '600px', fontWeight: 300 }}>
                        Expertos en desarrollo de software que escalan tu visión al siguiente nivel.
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        href="/agendar"
                        sx={{
                            bgcolor: '#00d4ff',
                            color: 'black',
                            fontWeight: 900,
                            py: 3,
                            px: 10,
                            fontSize: '1.3rem',
                            borderRadius: '100px',
                            textTransform: 'none',
                            boxShadow: '0 20px 50px rgba(0, 212, 255, 0.3)',
                            '&:hover': {
                                bgcolor: '#40e0ff',
                                boxShadow: '0 30px 60px rgba(0, 212, 255, 0.5)',
                                transform: 'scale(1.05) translateY(-5px)'
                            },
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                    >
                        Agendar Reunión
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
