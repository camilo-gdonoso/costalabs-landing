'use client';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import CodeWindow from '@/components/CodeWindow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

import AIAgentsHero from '@/components/AIAgentsHero';

export default function AIAutomationPage() {
    return (
        <main className="bg-stars" style={{ minHeight: '100vh', background: 'transparent', width: '100vw', overflowX: 'hidden' }}>
            <Navbar />

            {/* --- HERO SECTION --- */}
            <AIAgentsHero />

            {/* --- FEATURES --- */}
            <Box sx={{ py: 10, background: 'transparent' }}>
                <Container maxWidth="lg">
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 4
                    }}>
                        <Box sx={{ p: 4, border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <AutorenewIcon sx={{ fontSize: 40, color: '#14b8a6', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Workflows con n8n y Make</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Conectamos APIs dispares para crear &quot;pegamento digital&quot; que mueve datos entre sistemas automáticamente.</Typography>
                        </Box>
                        <Box sx={{ p: 4, border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <SmartToyIcon sx={{ fontSize: 40, color: '#10b981', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>Agentes IA Autónomos</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Desarrollamos &quot;empleados digitales&quot; que pueden leer correos, clasificar leads, generar reportes y agendar reuniones.</Typography>
                        </Box>
                        <Box sx={{ p: 4, border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
                            <PrecisionManufacturingIcon sx={{ fontSize: 40, color: '#f59e0b', mb: 2 }} />
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>RPA (Robotic Process Automation)</Typography>
                            <Typography sx={{ color: '#a1a1aa' }}>Automatización de tareas de escritorio y navegación web para procesos legacy que no tienen API.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <ContactForm />
            <WhatsAppButton />
        </main>
    );
}
