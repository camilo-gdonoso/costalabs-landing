'use client';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import ContactForm from '@/components/ContactForm';

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

                <Box sx={{ maxWidth: '800px', mx: 'auto', mb: 8, textAlign: 'center' }}>
                    <Typography sx={{ color: '#ccc', fontSize: '1.2rem', lineHeight: 1.8, mb: 2 }}>
                        La historia de CostaLabs es la historia de dos amigos de la infancia que decidieron unir sus mundos.
                    </Typography>
                    <Typography sx={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        Mientras uno recorrió el camino comercial aprendiendo a entender las necesidades de los negocios, el otro se sumergió en las profundidades de la ingeniería y el código. Hoy, unimos esa visión estratégica con la excelencia técnica para ofrecer algo único: tecnología de vanguardia, pero con un trato cercano y humano.
                    </Typography>
                </Box>

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
        <Box id="sectores" sx={{ py: 15 }}>
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
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <ContactForm />

            {/* Dossier Link Small Below Form */}
            <Box sx={{ textAlign: 'center', pb: 10, background: 'rgba(10, 10, 11, 0.5)' }}>
                <Container>
                    <Button
                        startIcon={<Download />}
                        href="/CostaLabs_Dossier_2026.pdf"
                        target="_blank"
                        sx={{ color: '#64748b', textTransform: 'none' }}
                    >
                        Descargar Dossier Corporativo
                    </Button>
                </Container>
            </Box>
        </Box>
    );
}
