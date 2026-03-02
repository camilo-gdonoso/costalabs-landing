'use client';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import CaseStudyCustomTrip from '@/components/CaseStudyCustomTrip';

import ContactForm from '@/components/ContactForm';
import CodeWindow from '@/components/CodeWindow';
import MethodologyHero from '@/components/MethodologyHero';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import GroupsIcon from '@mui/icons-material/Groups';

export default function SoftwareAMedidaPage() {
    return (
        <main className="bg-stars" style={{ minHeight: '100vh', background: 'transparent', width: '100vw', overflowX: 'hidden' }}>
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
                            <CodeWindow />
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- POR QUÉ ELEGIRNOS --- */}
            <Box sx={{ py: 10, background: 'transparent' }}>
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
                                    &quot;Las empresas que adoptan tecnología personalizada y metodologías ágiles tienen 2.5 veces más probabilidades de ser líderes en su industria&quot;
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
                        <Box sx={{ p: 3, height: '100%', background: 'transparent', borderRadius: 4 }}>
                            <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>+50</Typography>
                            <Typography sx={{ color: '#00d4ff', fontWeight: 600, mb: 2 }}>Proyectos Exitosos</Typography>
                            <Typography sx={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Contamos con años de experiencia entregando soluciones probadas y eficaces.</Typography>
                        </Box>
                        <Box sx={{ p: 3, height: '100%', background: 'transparent', borderRadius: 4 }}>
                            <GroupsIcon sx={{ color: 'white', fontSize: 40, mb: 2 }} />
                            <Typography sx={{ color: '#00d4ff', fontWeight: 600, mb: 2 }}>Equipo de Expertos</Typography>
                            <Typography sx={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Especialistas en React, Next.js, Python, Typescript, AWS y arquitectura Cloud.</Typography>
                        </Box>
                        <Box sx={{ p: 3, height: '100%', background: 'transparent', borderRadius: 4 }}>
                            <SpeedIcon sx={{ color: 'white', fontSize: 40, mb: 2 }} />
                            <Typography sx={{ color: '#00d4ff', fontWeight: 600, mb: 2 }}>Metodología Ágil</Typography>
                            <Typography sx={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Sprints semanales con entregables tangibles para adaptarnos rápidamente a los cambios.</Typography>
                        </Box>
                        <Box sx={{ p: 3, height: '100%', background: 'transparent', borderRadius: 4 }}>
                            <CheckCircleOutlineIcon sx={{ color: 'white', fontSize: 40, mb: 2 }} />
                            <Typography sx={{ color: '#00d4ff', fontWeight: 600, mb: 2 }}>Soporte Continuo</Typography>
                            <Typography sx={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Plan de mantenimiento adaptado para asegurar la evolución de tu software.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- CASO DE ÉXITO --- */}
            <CaseStudyCustomTrip />

            {/* --- NUEVA METODOLOGÍA HERO --- */}
            <MethodologyHero />

            {/* --- CONTACT FORM SECTION (Reused Component) --- */}
            <ContactForm />


        </main>
    );
}
