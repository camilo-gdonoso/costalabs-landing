'use client';
import { Box, Container, Typography, Button } from '@mui/material';

export default function ProcessSection() {
    return (
        <Box sx={{ py: 15 }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, mb: 4, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                            Nuestro proceso es simple, <br />
                            <span className="text-gradient">fluido y optimizado.</span>
                        </Typography>
                        <Box sx={{ position: 'relative', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Proceso de desarrollo"
                                sx={{ width: '100%', height: 'auto', display: 'block', opacity: 0.8 }}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {/* Paso 1 */}
                            <Box sx={{ display: 'flex', gap: 3 }}>
                                <Box sx={{ flexShrink: 0 }}>
                                    <Box sx={{ width: 48, height: 48, borderRadius: '50%', background: '#00d4ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontWeight: 'bold' }}>1</Box>
                                </Box>
                                <Box>
                                    <Typography variant="overline" sx={{ color: '#94a3b8', fontWeight: 600 }}>PASO 1</Typography>
                                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>Llamada de exploración</Typography>
                                    <Typography sx={{ color: '#a1a1aa' }}>
                                        Cuéntanos más sobre el desafío que quieres resolver. Discutiremos el estado actual y los objetivos para asegurarnos de estar alineados.
                                    </Typography>
                                </Box>
                            </Box>
                            {/* Paso 2 */}
                            <Box sx={{ display: 'flex', gap: 3 }}>
                                <Box sx={{ flexShrink: 0 }}>
                                    <Box sx={{ width: 48, height: 48, borderRadius: '50%', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontWeight: 'bold' }}>2</Box>
                                </Box>
                                <Box>
                                    <Typography variant="overline" sx={{ color: '#94a3b8', fontWeight: 600 }}>PASO 2</Typography>
                                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>Planificación y Estrategia</Typography>
                                    <Typography sx={{ color: '#a1a1aa' }}>
                                        Finalizaremos las especificaciones, acordaremos el modelo de trabajo y definiremos los hitos clave con un plan detallado.
                                    </Typography>
                                </Box>
                            </Box>
                            {/* Paso 3 */}
                            <Box sx={{ display: 'flex', gap: 3 }}>
                                <Box sx={{ flexShrink: 0 }}>
                                    <Box sx={{ width: 48, height: 48, borderRadius: '50%', background: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>3</Box>
                                </Box>
                                <Box>
                                    <Typography variant="overline" sx={{ color: '#94a3b8', fontWeight: 600 }}>PASO 3</Typography>
                                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>Ejecución y Seguimiento</Typography>
                                    <Typography sx={{ color: '#a1a1aa' }}>
                                        Comenzamos a trabajar de inmediato. Haremos un seguimiento del progreso con actualizaciones constantes y iteraciones ágiles.
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ pt: 2 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    href="https://calendly.com/contacto-costalabs/30min"
                                    target="_blank"
                                    sx={{
                                        background: '#00d4ff', // Cyan vibrante de la marca
                                        color: 'black',
                                        fontWeight: 700,
                                        py: 1.5,
                                        px: 4,
                                        textTransform: 'none',
                                        '&:hover': { background: '#40e0ff', boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)' }
                                    }}
                                >
                                    Programa una llamada
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
