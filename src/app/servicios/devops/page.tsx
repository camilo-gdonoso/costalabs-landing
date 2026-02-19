'use client';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import CodeWindow from '@/components/CodeWindow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import StorageIcon from '@mui/icons-material/Storage';

export default function DevOpsPage() {
    return (
        <main className="bg-stars" style={{ minHeight: '100vh', background: 'var(--background)' }}>
            <Navbar />

            {/* --- HERO SECTION --- */}
            <Box sx={{ pt: 20, pb: 10, position: 'relative', overflow: 'hidden' }}>
                <Container maxWidth="lg">
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: 8,
                        alignItems: 'center'
                    }}>
                        <Box>
                            <Typography variant="overline" sx={{ color: '#f43f5e', letterSpacing: 3, fontSize: '0.9rem', fontWeight: 600 }}>
                                DEVOPS & CI/CD
                            </Typography>
                            <Typography variant="h1" sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                fontWeight: 800,
                                color: 'white',
                                lineHeight: 1.1,
                                mt: 2,
                                mb: 3
                            }}>
                                Automatiza y escala tu <span className="text-gradient">ciclo de software</span>
                            </Typography>
                            <Typography sx={{ color: '#94a3b8', fontSize: '1.2rem', mb: 4, lineHeight: 1.6 }}>
                                Potenciamos el ciclo de vida de tu software con pipelines automatizados. Utilizamos herramientas líderes como Ansible, GitLab y Jenkins para asegurar despliegues rápidos, seguros y escalables.
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                href="#contacto"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    background: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
                                    borderRadius: '50px',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
                                    }
                                }}
                            >
                                Agenda una consultoría DevOps
                            </Button>
                        </Box>

                        {/* --- CODE MOCKUP (Reused for visual balance) --- */}
                        <Box>
                            <CodeWindow />
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- POR QUÉ ELEGIRNOS --- */}
            <Box sx={{ py: 10, background: 'rgba(255,255,255,0.02)' }}>
                <Container maxWidth="lg">
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 4
                    }}>
                        <Box sx={{ p: 3, height: '100%', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <AutorenewIcon sx={{ fontSize: 40, color: '#f43f5e', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Automatización Total</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Elimina tareas manuales y errores humanos con pipelines de CI/CD robustos y confiables.</Typography>
                        </Box>
                        <Box sx={{ p: 3, height: '100%', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <SpeedIcon sx={{ fontSize: 40, color: '#10b981', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Despliegues Rápidos</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Reduce el tiempo de entrega de software de semanas a minutos con entregas continuas.</Typography>
                        </Box>
                        <Box sx={{ p: 3, height: '100%', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <SecurityIcon sx={{ fontSize: 40, color: '#8b5cf6', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Seguridad (DevSecOps)</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Integramos análisis de seguridad y cumplimiento normativo directamente en tu flujo de desarrollo.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- TECNOLOGÍAS --- */}
            <Box sx={{ py: 15 }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" sx={{ color: '#f43f5e', letterSpacing: 2 }}>STACK TECNOLÓGICO</Typography>
                        <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, mt: 1 }}>Herramientas que dominamos</Typography>
                    </Box>

                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                        gap: 4
                    }}>
                        {[
                            { name: 'GitLab CI', icon: <IntegrationInstructionsIcon sx={{ fontSize: 40, color: '#FC6D26' }} /> },
                            { name: 'Jenkins', icon: <AutorenewIcon sx={{ fontSize: 40, color: '#D24939' }} /> },
                            { name: 'Ansible', icon: <StorageIcon sx={{ fontSize: 40, color: '#EE0000' }} /> },
                            { name: 'Docker', icon: <CloudSyncIcon sx={{ fontSize: 40, color: '#2496ED' }} /> },
                            { name: 'Kubernetes', icon: <Box component="span" sx={{ fontSize: 40, fontWeight: 'bold', color: '#326CE5' }}>K8s</Box> },
                            { name: 'AWS Cloud', icon: <CloudSyncIcon sx={{ fontSize: 40, color: '#FF9900' }} /> },
                            { name: 'Terraform', icon: <StorageIcon sx={{ fontSize: 40, color: '#7B42BC' }} /> },
                            { name: 'GitHub Actions', icon: <IntegrationInstructionsIcon sx={{ fontSize: 40, color: 'white' }} /> },
                        ].map((tech, i) => (
                            <Paper key={i} sx={{
                                p: 3,
                                textAlign: 'center',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 3,
                                transition: 'transform 0.2s',
                                '&:hover': { transform: 'translateY(-5px)', border: '1px solid #f43f5e' }
                            }}>
                                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>{tech.icon}</Box>
                                <Typography sx={{ color: 'white', fontWeight: 600 }}>{tech.name}</Typography>
                            </Paper>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* --- PROCESO --- */}
            <Box sx={{ py: 10, background: 'rgba(10, 10, 11, 0.8)' }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'center' }}>
                        <Box>
                            <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, mb: 4, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                                De código a producción <br />
                                <span className="text-gradient">sin fricción.</span>
                            </Typography>
                            <Typography sx={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                                Implementamos una cultura DevOps que une a tus equipos de desarrollo y operaciones para entregar valor más rápido y con mayor calidad.
                            </Typography>
                        </Box>
                        <Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                {/* Paso 1 */}
                                <Box sx={{ display: 'flex', gap: 3 }}>
                                    <Box sx={{ flexShrink: 0 }}>
                                        <Box sx={{ width: 48, height: 48, borderRadius: '50%', background: '#f43f5e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontWeight: 'bold' }}>1</Box>
                                    </Box>
                                    <Box>
                                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>Diagnóstico y Estrategia</Typography>
                                        <Typography sx={{ color: '#a1a1aa' }}>
                                            Evaluamos tu infraestructura actual, procesos y cuellos de botella para diseñar un roadmap de automatización a medida.
                                        </Typography>
                                    </Box>
                                </Box>
                                {/* Paso 2 */}
                                <Box sx={{ display: 'flex', gap: 3 }}>
                                    <Box sx={{ flexShrink: 0 }}>
                                        <Box sx={{ width: 48, height: 48, borderRadius: '50%', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontWeight: 'bold' }}>2</Box>
                                    </Box>
                                    <Box>
                                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>Implementación CI/CD</Typography>
                                        <Typography sx={{ color: '#a1a1aa' }}>
                                            Configuramos repositorios, pipelines de integración continua y despliegue automatizado con las mejores prácticas.
                                        </Typography>
                                    </Box>
                                </Box>
                                {/* Paso 3 */}
                                <Box sx={{ display: 'flex', gap: 3 }}>
                                    <Box sx={{ flexShrink: 0 }}>
                                        <Box sx={{ width: 48, height: 48, borderRadius: '50%', background: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>3</Box>
                                    </Box>
                                    <Box>
                                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>Monitoreo y Escalado</Typography>
                                        <Typography sx={{ color: '#a1a1aa' }}>
                                            Establecemos métricas clave, alertas y sistemas de auto-escalado para asegurar la disponibilidad y rendimiento.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- CONTACT FORM SECTION (Reused Component) --- */}
            <ContactForm />

            <WhatsAppButton />
        </main>
    );
}
