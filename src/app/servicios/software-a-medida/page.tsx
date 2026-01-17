'use client';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import GroupsIcon from '@mui/icons-material/Groups';

export default function SoftwareAMedidaPage() {
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
                            <Typography variant="overline" sx={{ color: '#00d4ff', letterSpacing: 3, fontSize: '0.9rem', fontWeight: 600 }}>
                                DESARROLLO DE SOFTWARE A MEDIDA
                            </Typography>
                            <Typography variant="h1" sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                fontWeight: 800,
                                color: 'white',
                                lineHeight: 1.1,
                                mt: 2,
                                mb: 3
                            }}>
                                Desarrollo de software a medida para hacer realidad tu <span className="text-gradient">visión digital</span>
                            </Typography>
                            <Typography sx={{ color: '#94a3b8', fontSize: '1.2rem', mb: 4, lineHeight: 1.6 }}>
                                Desarrollamos software a medida y MVPs para startups y empresas, ayudándote a transformar tus ideas en soluciones digitales efectivas.
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                href="#contacto"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    background: 'linear-gradient(135deg, #00d4ff 0%, #0056D2 100%)',
                                    borderRadius: '50px',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'none'
                                }}
                            >
                                Solicita tu consulta gratuita
                            </Button>
                        </Box>

                        {/* --- CODE MOCKUP --- */}
                        <Box>
                            <Paper sx={{
                                background: '#1e1e1e',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                            }}>
                                {/* Window Graphic Header */}
                                <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', px: 2, py: 1.5, background: 'rgba(255,255,255,0.02)' }}>
                                    <Box sx={{ display: 'flex', gap: 1, mr: 2 }}>
                                        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ff5f56' }} />
                                        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                                        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#27c93f' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', fontSize: '0.8rem', color: '#6b7280', gap: 2 }}>
                                        <Box sx={{ color: 'white', borderBottom: '1px solid #00d4ff', pb: 0.5 }}>Layout.tsx</Box>
                                        <Box>App.tsx</Box>
                                    </Box>
                                </Box>
                                {/* Code Content */}
                                <Box sx={{ p: 3, fontFamily: 'monospace', fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.6, overflowX: 'auto' }}>
                                    <div style={{ color: '#c792ea' }}>export default function <span style={{ color: '#82aaff' }}>RootLayout</span>({'{'}</div>
                                    <div style={{ paddingLeft: 20 }}>children,</div>
                                    <div>{'}: Readonly<{'}</div>
                                    <div style={{ paddingLeft: 20 }}>children: React.ReactNode;</div>
                                    <div>{'>) {'}</div>
                                    <div style={{ paddingLeft: 20, color: '#c792ea' }}>return (</div>
                                    <div style={{ paddingLeft: 40, color: '#89ddff' }}>&lt;html lang="es"&gt;</div>
                                    <div style={{ paddingLeft: 60, color: '#89ddff' }}>&lt;body&gt;</div>
                                    <div style={{ paddingLeft: 80, color: '#89ddff' }}>&lt;HeaderMenu /&gt;</div>
                                    <div style={{ paddingLeft: 80, color: '#7fdbca' }}>{'{children}'}</div>
                                    <div style={{ paddingLeft: 80, color: '#89ddff' }}>&lt;Footer /&gt;</div>
                                    <div style={{ paddingLeft: 60, color: '#89ddff' }}>&lt;/body&gt;</div>
                                    <div style={{ paddingLeft: 40, color: '#89ddff' }}>&lt;/html&gt;</div>
                                    <div style={{ paddingLeft: 20, color: '#c792ea' }}>);</div>
                                    <div>{'}'}</div>
                                </Box>
                            </Paper>
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
                            <CodeIcon sx={{ fontSize: 40, color: '#00d4ff', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Soluciones a medida</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Experiencia en desarrollo de software a medida y MVPs adaptados a tu flujo de negocio.</Typography>
                        </Box>
                        <Box sx={{ p: 3, height: '100%', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <SpeedIcon sx={{ fontSize: 40, color: '#10b981', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Desarrollo Agil de MVPs</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Desarrollamos software de calidad, escalable y seguro con entregas rápidas.</Typography>
                        </Box>
                        <Box sx={{ p: 3, height: '100%', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <SecurityIcon sx={{ fontSize: 40, color: '#8b5cf6', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Tecnología de vanguardia</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Utilizamos tecnologías modernas (Next.js, React, Cloud) probadas para tu proyecto.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- STATS SECTION --- */}
            <Box sx={{ py: 15 }}>
                <Container maxWidth="lg">
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: 8,
                        alignItems: 'center'
                    }}>
                        <Box>
                            <Typography variant="h2" sx={{ fontWeight: 800, color: 'white', mb: 4, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                                Impulsa tu negocio con <br />
                                <span className="text-gradient">tecnología a medida</span>
                            </Typography>
                            <Typography sx={{ color: '#94a3b8', fontSize: '1.1rem', mb: 3 }}>
                                En la era digital, la adopción de software personalizado se ha convertido en un factor crítico para el éxito empresarial.
                            </Typography>
                            <Box sx={{ borderLeft: '3px solid #00d4ff', pl: 3, mt: 4 }}>
                                <Typography sx={{ color: 'white', fontStyle: 'italic', fontSize: '1.2rem' }}>
                                    "Las empresas que adoptan tecnología personalizada y metodologías ágiles tienen 2.5 veces más probabilidades de ser líderes en su industria"
                                </Typography>
                                <Typography sx={{ color: '#64748b', mt: 1, fontSize: '0.9rem' }}>— MIT Sloan Management Review</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {/* Stat Card 1 */}
                            <Paper sx={{ p: 4, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 3 }}>
                                <Typography variant="h3" sx={{ color: '#00d4ff', fontWeight: 800 }}>+58%</Typography>
                                <Typography sx={{ color: 'white', fontWeight: 600, mb: 1 }}>Eficiencia Operativa</Typography>
                                <Typography sx={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Las empresas que invierten en tecnología personalizada experimentan un aumento drástico en eficiencia (Deloitte).</Typography>
                            </Paper>
                            {/* Stat Card 2 */}
                            <Paper sx={{ p: 4, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 3 }}>
                                <Typography variant="h3" sx={{ color: '#10b981', fontWeight: 800 }}>+23%</Typography>
                                <Typography sx={{ color: 'white', fontWeight: 600, mb: 1 }}>Incremento en Ingresos</Typography>
                                <Typography sx={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Organizaciones con software a medida ven mayor crecimiento en los primeros dos años (McKinsey).</Typography>
                            </Paper>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- DIFERENCIADORES --- */}
            <Box sx={{ py: 10, background: 'rgba(10, 10, 11, 0.8)' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" sx={{ color: '#00d4ff', letterSpacing: 2 }}>NUESTROS DIFERENCIADORES</Typography>
                        <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, mt: 1 }}>Lo que nos hace únicos</Typography>
                        <Typography sx={{ color: '#94a3b8', mt: 2, maxWidth: 600, mx: 'auto' }}>
                            Descubre cómo nuestro enfoque único te ayuda a resolver tus desafíos de negocio de manera efectiva.
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                        gap: 4
                    }}>
                        <Box sx={{ p: 3, height: '100%', background: 'rgba(255,255,255,0.02)', borderRadius: 4 }}>
                            <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>+50</Typography>
                            <Typography sx={{ color: '#00d4ff', fontWeight: 600, mb: 2 }}>Proyectos Exitosos</Typography>
                            <Typography sx={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Contamos con años de experiencia entregando soluciones probadas y eficaces.</Typography>
                        </Box>
                        <Box sx={{ p: 3, height: '100%', background: 'rgba(255,255,255,0.02)', borderRadius: 4 }}>
                            <GroupsIcon sx={{ color: 'white', fontSize: 40, mb: 2 }} />
                            <Typography sx={{ color: '#00d4ff', fontWeight: 600, mb: 2 }}>Equipo de Expertos</Typography>
                            <Typography sx={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Especialistas en React, Next.js, Python, Typescript, AWS y arquitectura Cloud.</Typography>
                        </Box>
                        <Box sx={{ p: 3, height: '100%', background: 'rgba(255,255,255,0.02)', borderRadius: 4 }}>
                            <SpeedIcon sx={{ color: 'white', fontSize: 40, mb: 2 }} />
                            <Typography sx={{ color: '#00d4ff', fontWeight: 600, mb: 2 }}>Metodología Ágil</Typography>
                            <Typography sx={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Sprints semanales con entregables tangibles para adaptarnos rápidamente a los cambios.</Typography>
                        </Box>
                        <Box sx={{ p: 3, height: '100%', background: 'rgba(255,255,255,0.02)', borderRadius: 4 }}>
                            <CheckCircleOutlineIcon sx={{ color: 'white', fontSize: 40, mb: 2 }} />
                            <Typography sx={{ color: '#00d4ff', fontWeight: 600, mb: 2 }}>Soporte Continuo</Typography>
                            <Typography sx={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Plan de mantenimiento adaptado para asegurar la evolución de tu software.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- PROCESO --- */}
            <Box sx={{ py: 10 }}>
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
                                            background: '#8b0000', // Rojo oscuro similar a la referencia
                                            color: 'white',
                                            fontWeight: 700,
                                            py: 1.5,
                                            px: 4,
                                            textTransform: 'none',
                                            '&:hover': { background: '#a50000' }
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

            {/* --- CONTACT FORM SECTION (Reused Component) --- */}
            <ContactForm />

            <WhatsAppButton />
        </main>
    );
}
