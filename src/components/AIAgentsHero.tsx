'use client';
import React from 'react';
import { Box, Container, Typography, Button, Avatar, AvatarGroup } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

export default function AIAgentsHero() {
    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            background: 'transparent',
            pt: { xs: 15, lg: 20 },
            pb: { xs: 10, lg: 15 }
        }}>
            {/* Background Elements */}
            <div className="grid-bg-ia"></div>
            <div className="glow-orb-ia orb-1-ia"></div>
            <div className="glow-orb-ia orb-2-ia"></div>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>

                {/* Header Labels */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, width: '100%', mb: 6, gap: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {/* Etiquetas de Problema/Solución */}
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 1, borderRadius: '50px', border: '1px solid #334155', bgcolor: 'rgba(30, 41, 59, 0.5)', color: '#cbd5e1', width: 'max-content', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            <CloseIcon sx={{ color: '#f87171', fontSize: '1.2rem' }} />
                            <Typography sx={{ fontWeight: 500, fontSize: 'inherit' }}>Pierdes ventas por demorar en responder</Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'inline-flex' }, alignItems: 'center', gap: 1, px: 2, py: 1, borderRadius: '50px', border: '1px solid rgba(6, 182, 212, 0.3)', bgcolor: 'rgba(6, 182, 212, 0.1)', color: '#67e8f9', width: 'max-content', boxShadow: '0 0 15px rgba(56,189,248,0.1)', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            <CheckIcon sx={{ color: '#22d3ee', fontSize: '1.2rem' }} />
                            <Typography sx={{ fontWeight: 500, fontSize: 'inherit' }}>Respuestas instantáneas 24/7 con IA</Typography>
                        </Box>
                    </Box>

                    {/* Badge Superior Derecha */}
                    <Box sx={{ px: 2.5, py: 1, borderRadius: '50px', border: '1px solid rgba(168, 85, 247, 0.3)', bgcolor: 'rgba(168, 85, 247, 0.1)', color: '#d8b4fe', fontWeight: 700, letterSpacing: 1, fontSize: { xs: '0.75rem', md: '0.875rem' }, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 1, mt: { xs: 2, md: 0 } }}>
                        <Box sx={{ position: 'relative', display: 'flex', height: 12, width: 12 }}>
                            <Box sx={{ animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite', position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', bgcolor: '#c084fc', opacity: 0.75 }} />
                            <Box sx={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', height: 12, width: 12, bgcolor: '#a855f7' }} />
                        </Box>
                        Ventas en Automático
                    </Box>
                </Box>

                {/* Main Content Area: 2 Columns */}
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '7fr 5fr' }, gap: { xs: 8, lg: 6 }, alignItems: 'center' }}>

                    {/* Left Text Column */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '3.75rem', md: '4.5rem' }, fontWeight: 800, lineHeight: 1.05, mb: 3, color: 'white', letterSpacing: '-0.02em' }}>
                            Tu negocio <Box component="br" sx={{ display: { xs: 'none', sm: 'block' } }} />
                            no duerme, <Box component="br" sx={{ display: { xs: 'none', sm: 'block' } }} />
                            <span className="text-gradient-ia">tu asistente tampoco.</span>
                        </Typography>

                        <Typography sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem' }, color: '#cbd5e1', lineHeight: 1.6, fontWeight: 300, mb: 5, maxWidth: 600 }}>
                            Implementamos Agentes de Inteligencia Artificial que{' '}
                            <Box component="strong" sx={{ color: 'white', fontWeight: 600 }}>atienden prospectos, agendan citas y cierran ventas</Box>{' '}
                            por WhatsApp de forma automática y humana.
                        </Typography>

                        {/* CTA Button */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Button href="#contacto" className="btn-glow-ia" variant="contained" endIcon={<ArrowForwardIcon />} sx={{ bgcolor: 'white', color: '#0f172a', fontWeight: 800, fontSize: { xs: '1rem', sm: '1.125rem', lg: '1.25rem' }, py: { xs: 2, sm: 2.5 }, px: { xs: 4, sm: 5 }, borderRadius: '50px', textTransform: 'none', width: 'max-content', transition: 'all 0.3s ease', '&:hover': { transform: 'scale(1.05)', bgcolor: 'white' } }}>
                                Quiero automatizar mis ventas
                            </Button>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, ml: { md: 2 }, mt: 1 }}>
                                <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 32, height: 32, border: '2px solid #0f172a' } }}>
                                    <Avatar alt="User 1" src="https://i.pravatar.cc/100?img=1" />
                                    <Avatar alt="User 2" src="https://i.pravatar.cc/100?img=2" />
                                    <Avatar alt="User 3" src="https://i.pravatar.cc/100?img=3" />
                                </AvatarGroup>
                                <Typography sx={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: 500 }}>+50 empresas ya escalaron con nosotros</Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Right Visual Column */}
                    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 400 }}>

                        {/* Background Abstract Graphic */}
                        <Box className="floating-delayed-ia" sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, opacity: 0.4, transform: { xs: 'scale(1.1)', md: 'scale(1.3) translateX(40px)' }, pointerEvents: 'none' }}>
                            <svg width="400" height="400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', maxWidth: '400px' }}>
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="url(#paint0_linear)" strokeWidth="0.5" strokeDasharray="2 2" />
                                <circle cx="12" cy="12" r="6" stroke="url(#paint1_linear)" strokeWidth="1" />
                                <circle cx="12" cy="12" r="3" fill="#38BDF8" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
                                <path d="M12 6V9M12 15V18M6 12H9M15 12H18M7.5 7.5L9.5 9.5M14.5 14.5L16.5 16.5M7.5 16.5L9.5 14.5M14.5 7.5L16.5 9.5" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#38BDF8" />
                                        <stop offset="1" stopColor="#C084FC" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear" x1="6" y1="6" x2="18" y2="18" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#38BDF8" />
                                        <stop offset="1" stopColor="#C084FC" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </Box>

                        {/* Chat UI Window */}
                        <Box className="glass-panel-ia floating-ia" sx={{ width: '100%', maxWidth: 448, borderRadius: '2rem', p: { xs: 2.5, sm: 3 }, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', position: 'relative', zIndex: 20 }}>

                            {/* Chat Header */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, pb: 2, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <Box sx={{ position: 'relative' }}>
                                    <Box sx={{ width: { xs: 48, sm: 56 }, height: { xs: 48, sm: 56 }, borderRadius: '50%', background: 'linear-gradient(to top right, #06b6d4, #2563eb)', p: '2px' }}>
                                        <Box sx={{ width: '100%', height: '100%', bgcolor: '#0f172a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <span style={{ fontSize: '1.5rem' }}>🤖</span>
                                        </Box>
                                    </Box>
                                    <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: { xs: 12, sm: 16 }, height: { xs: 12, sm: 16 }, bgcolor: '#22c55e', border: '2px solid #0f172a', borderRadius: '50%' }}></Box>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: 700, color: 'white', fontSize: { xs: '1.125rem', sm: '1.25rem' }, letterSpacing: '-0.02em' }}>KallpaBot IA</Typography>
                                    <Typography sx={{ color: '#22d3ee', fontSize: { xs: '0.75rem', sm: '0.875rem' }, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                                        En línea • Responde al instante
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Chat Bubbles */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                                {/* User Message */}
                                <Box className="glass-bubble-ia" sx={{ alignSelf: 'flex-end', color: 'white', p: { xs: 1.5, sm: 2 }, px: { xs: 2, sm: 2.5 }, borderRadius: '1rem', borderTopRightRadius: '0.125rem', maxWidth: '85%', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                                    Hola, ¿qué precio tiene el servicio y tienen disponibilidad hoy?
                                </Box>

                                {/* AI Message */}
                                <Box sx={{ alignSelf: 'flex-start', background: 'linear-gradient(to bottom right, rgba(8, 51, 68, 0.4), rgba(30, 58, 138, 0.4))', border: '1px solid rgba(6, 182, 212, 0.3)', color: 'white', p: { xs: 2, sm: 2.5 }, borderRadius: '1rem', borderTopLeftRadius: '0.125rem', maxWidth: '95%', position: 'relative', boxShadow: '0 4px 20px rgba(56,189,248,0.15)' }}>
                                    {/* Typing Indicator */}
                                    <Box sx={{ position: 'absolute', top: -16, left: -8, bgcolor: '#1e293b', border: '1px solid rgba(6, 182, 212, 0.3)', px: 1.5, py: 0.75, borderRadius: '9999px', display: 'flex', gap: 0.75, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
                                        <Box sx={{ width: { xs: 4, sm: 6 }, height: { xs: 4, sm: 6 }, bgcolor: '#22d3ee', borderRadius: '50%', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></Box>
                                        <Box sx={{ width: { xs: 4, sm: 6 }, height: { xs: 4, sm: 6 }, bgcolor: '#22d3ee', borderRadius: '50%', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '0.2s' }}></Box>
                                        <Box sx={{ width: { xs: 4, sm: 6 }, height: { xs: 4, sm: 6 }, bgcolor: '#22d3ee', borderRadius: '50%', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '0.4s' }}></Box>
                                    </Box>

                                    ¡Hola! 👋 El servicio premium cuesta $99/mes. <br /><br />
                                    Tengo un espacio libre hoy a las <strong style={{ fontWeight: 600 }}>4:00 PM</strong>. ¿Te gustaría agendar una reunión rápida por Zoom para mostrarte cómo funciona? ⚡

                                    {/* Interactive AI Buttons */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                                        <Box component="span" sx={{ fontSize: '0.75rem', bgcolor: 'rgba(6, 182, 212, 0.2)', color: '#67e8f9', px: 1.5, py: 0.75, borderRadius: '0.5rem', border: '1px solid rgba(6, 182, 212, 0.2)', cursor: 'pointer', transition: 'background-color 0.2s', '&:hover': { bgcolor: 'rgba(6, 182, 212, 0.4)' } }}>Sí, agendar a las 4pm</Box>
                                        <Box component="span" sx={{ fontSize: '0.75rem', bgcolor: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1', px: 1.5, py: 0.75, borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.1)', cursor: 'pointer', transition: 'background-color 0.2s', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}>Ver otro horario</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Container>

            {/* Embedded custom style for animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes ping {
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: .5;
                    }
                }
            `}} />
        </Box>
    );
}
