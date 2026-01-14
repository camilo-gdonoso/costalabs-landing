'use client';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { Download, Email, MapsHomeWork, Language } from '@mui/icons-material';

export function DNASection() {
    return (
        <Box id="adn" sx={{ py: 15, position: 'relative', overflow: 'hidden' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{
                    textAlign: 'center',
                    mb: 8,
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}>
                    Nuestro <span className="text-gradient">ADN</span>
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
                    gap: 4
                }}>
                    <Paper className="glass-card" sx={{ p: 4, height: '100%', background: 'rgba(255,255,255,0.03)' }}>
                        <Typography variant="h4" sx={{ color: '#00d4ff', mb: 2, fontWeight: 700 }}>Misión</Typography>
                        <Typography sx={{ color: '#ccc', lineHeight: 1.7 }}>
                            Traer una nueva energía a la transformación digital nacional, aplicando las últimas herramientas de IA para crear software más seguro, rápido y eficiente.
                        </Typography>
                    </Paper>
                    <Paper className="glass-card" sx={{ p: 4, height: '100%', background: 'rgba(255,255,255,0.03)' }}>
                        <Typography variant="h4" sx={{ color: '#00d4ff', mb: 2, fontWeight: 700 }}>Visión</Typography>
                        <Typography sx={{ color: '#ccc', lineHeight: 1.7 }}>
                            Ser reconocidos como la nueva alternativa de excelencia para empresas que buscan salir de lo tradicional y dar un salto al futuro.
                        </Typography>
                    </Paper>
                    <Paper className="glass-card" sx={{ p: 4, height: '100%', background: 'rgba(255,255,255,0.03)' }}>
                        <Typography variant="h4" sx={{ color: '#00d4ff', mb: 2, fontWeight: 700 }}>Valores</Typography>
                        <Box component="ul" sx={{ pl: 2, color: '#ccc', lineHeight: 1.8 }}>
                            <li><strong>Calidad Intransable:</strong> Hacemos las cosas bien o no las hacemos.</li>
                            <li><strong>Innovación con Sentido:</strong> Tecnología avanzada, pero útil.</li>
                            <li><strong>Transparencia:</strong> Procesos claros y seguros.</li>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}

export function SectorsSection() {
    const sectors = [
        { name: 'FinOps', icon: '📊' },
        { name: 'Minería 4.0', icon: '⛏️' },
        { name: 'Retail & E-commerce', icon: '🛒' },
        { name: 'DevOps', icon: '♾️' },
    ];

    return (
        <Box id="sectores" sx={{ py: 15, background: 'rgba(255,255,255,0.02)' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{
                    textAlign: 'center',
                    mb: 8,
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}>
                    Sectores que <span className="text-gradient">Impulsamos</span>
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
                    gap: 4
                }}>
                    {sectors.map((sector) => (
                        <Box key={sector.name} sx={{
                            p: 4,
                            textAlign: 'center',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'translateY(-10px)', borderColor: '#00d4ff' }
                        }}>
                            <Typography variant="h1" sx={{ mb: 2 }}>{sector.icon}</Typography>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: 'white' }}>{sector.name}</Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export function ContactSection() {
    return (
        <Box id="contacto" sx={{ py: 15, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <Container maxWidth="md">
                <Paper className="glass-card" sx={{
                    p: { xs: 4, md: 8 },
                    textAlign: 'center',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(10,10,11,0.5) 100%)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 0 40px rgba(0,0,0,0.4)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Subtle Top Shine */}
                    <Box sx={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0,
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), transparent)'
                    }} />

                    <Typography variant="h2" sx={{
                        fontWeight: 800,
                        mb: 2,
                        color: 'white',
                        fontSize: { xs: '2rem', md: '3rem' }
                    }}>
                        Solicitar Consultoría
                    </Typography>
                    <Typography sx={{ color: '#94a3b8', mb: 8, fontSize: '1.1rem', maxWidth: '600px', mx: 'auto' }}>
                        Transformación digital de alto nivel. Cupos limitados para nuevos partners estratégicos.
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', mb: 8 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: '#e2e8f0', fontSize: '1.1rem' }}>
                            <Email sx={{ color: '#00d4ff', fontSize: 28 }} /> contacto@costalabs.cl
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: '#e2e8f0', fontSize: '1.1rem' }}>
                            <Language sx={{ color: '#00d4ff', fontSize: 28 }} /> https://costalabs.cl/
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: '#e2e8f0', fontSize: '1.1rem' }}>
                            <MapsHomeWork sx={{ color: '#00d4ff', fontSize: 28 }} /> Iquique, Chile
                        </Box>
                    </Box>

                    <Button
                        variant="outlined"
                        size="large"
                        startIcon={<Download />}
                        href="/CostaLabs_Dossier_2026.pdf"
                        target="_blank"
                        sx={{
                            color: '#00d4ff',
                            borderColor: '#00d4ff',
                            px: 4, py: 1.5,
                            borderRadius: '50px',
                            fontWeight: 600,
                            '&:hover': { background: 'rgba(0, 212, 255, 0.1)', borderColor: '#00d4ff' }
                        }}
                    >
                        Descargar Dossier Corporativo
                    </Button>
                </Paper>
            </Container>
        </Box>
    );
}
