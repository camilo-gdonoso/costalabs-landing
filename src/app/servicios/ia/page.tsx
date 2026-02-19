'use client';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import AIChileVisual from '@/components/AIChileVisual'; // Visual generated
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import StorageIcon from '@mui/icons-material/Storage';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ScienceIcon from '@mui/icons-material/Science';

export default function IAPage() {
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
                            <Typography variant="overline" sx={{ color: '#ec4899', letterSpacing: 3, fontSize: '0.9rem', fontWeight: 600 }}>
                                INTELIGENCIA ARTIFICIAL & RAG
                            </Typography>
                            <Typography variant="h1" sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                fontWeight: 800,
                                color: 'white',
                                lineHeight: 1.1,
                                mt: 2,
                                mb: 3
                            }}>
                                Potencia tu negocio con <span className="text-gradient">IA Generativa</span>
                            </Typography>
                            <Typography sx={{ color: '#94a3b8', fontSize: '1.2rem', mb: 4, lineHeight: 1.6 }}>
                                Transformamos la forma en que interactúas con tus datos. Desarrollamos soluciones de Chatbots avanzados, motores RAG (Retrieval-Augmented Generation) y agentes autónomos con modelos como Gemini y GPT-4.
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                href="#contacto"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                                    borderRadius: '50px',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #be185d 0%, #9d174d 100%)',
                                    }
                                }}
                            >
                                Agenda una demo de IA
                            </Button>
                        </Box>

                        {/* --- VISUAL CAMPAIGN MOCKUP --- */}
                        <Box>
                            <AIChileVisual />
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- ENFOQUE RAG & CHATBOTS --- */}
            <Box sx={{ py: 10, background: 'rgba(255,255,255,0.02)' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" sx={{ color: '#ec4899', letterSpacing: 2 }}>CASOS DE USO</Typography>
                        <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, mt: 1 }}>Soluciones Inteligentes</Typography>
                    </Box>

                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 4
                    }}>
                        <Box sx={{ p: 4, height: '100%', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <StorageIcon sx={{ fontSize: 40, color: '#ec4899', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>RAG: Tu Base de Conocimiento</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>
                                Implementamos sistemas RAG (Retrieval-Augmented Generation) que permiten a la IA consultar tus propios documentos PDF, bases de datos y wikis para dar respuestas precisas y verificables, sin alucinaciones.
                            </Typography>
                        </Box>
                        <Box sx={{ p: 4, height: '100%', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <ChatBubbleOutlineIcon sx={{ fontSize: 40, color: '#10b981', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Chatbots Avanzados</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>
                                Creamos asistentes virtuales que van más allá de respuestas predefinidas. Entienden el contexto, recuerdan conversaciones pasadas y ejecutan acciones en tus sistemas.
                            </Typography>
                        </Box>
                        <Box sx={{ p: 4, height: '100%', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <PsychologyIcon sx={{ fontSize: 40, color: '#8b5cf6', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Agentes Autónomos Gemini</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>
                                Desarrollamos agentes basados en modelos como Google Gemini Pro y GPT-4 capaces de planificar tareas complejas, navegar por la web y generar contenido multimodal.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- PRODUCTOS PROPIOS (Fix and Flow) --- */}
            <Box sx={{ py: 15, background: 'rgba(10, 10, 11, 0.5)' }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'center' }}>
                        <Box>
                            <Typography variant="overline" sx={{ color: '#ec4899', letterSpacing: 2, fontWeight: 700 }}>NUESTROS PRODUCTOS</Typography>
                            <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, mt: 1, mb: 3 }}>
                                Innovación aplicada: <br /> Fix & Flow
                            </Typography>
                            <Typography sx={{ color: '#94a3b8', fontSize: '1.1rem', mb: 4 }}>
                                Más allá de servicios, creamos productos que resuelven problemas reales. <strong>Fix & Flow</strong> es nuestra plataforma insignia para gestión operativa, integrando inteligencia artificial para predecir necesidades de mantenimiento y optimizar flujos de trabajo en tiempo real.
                            </Typography>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: '#ec4899',
                                    color: '#ec4899',
                                    borderRadius: '50px',
                                    px: 4,
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    '&:hover': {
                                        borderColor: '#be185d',
                                        background: 'rgba(236, 72, 153, 0.05)'
                                    }
                                }}
                            >
                                Conocer Fix & Flow
                            </Button>
                        </Box>
                        <Box sx={{
                            position: 'relative',
                            height: '400px',
                            background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
                            borderRadius: 4,
                            border: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}>
                            {/* Placeholder visual para la app */}
                            <AutoGraphIcon sx={{ fontSize: 120, color: 'rgba(255,255,255,0.05)' }} />
                            <Typography variant="h4" sx={{ position: 'absolute', color: 'white', fontWeight: 900, opacity: 0.8 }}>
                                Fix & Flow
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- TECNOLOGÍAS --- */}
            <Box sx={{ py: 10 }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h3" sx={{ color: 'white', fontWeight: 800 }}>Stack de IA</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 3
                    }}>
                        {['Google Gemini', 'OpenAI GPT-4', 'LangChain', 'Pinecone (Vector DB)', 'LlamaIndex', 'Hugging Face', 'Python', 'TensorFlow'].map((tech, i) => (
                            <Paper key={i} sx={{
                                px: 3,
                                py: 1.5,
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50px',
                                color: '#e2e8f0',
                                fontWeight: 500
                            }}>
                                {tech}
                            </Paper>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* --- CONTACT FORM SECTION (Reused Component) --- */}
            <ContactForm />

            <WhatsAppButton />
        </main>
    );
}
