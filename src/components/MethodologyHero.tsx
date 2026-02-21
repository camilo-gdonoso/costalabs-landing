'use client';
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BarChartIcon from '@mui/icons-material/BarChart';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ShieldIcon from '@mui/icons-material/Shield';

export default function MethodologyHero() {
    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            background: 'transparent',
            pt: { xs: 15, lg: 20 },
            pb: { xs: 10, lg: 15 },
        }}>
            {/* Background Elements */}
            <Box sx={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle, rgba(0,212,255,0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                zIndex: 1
            }} />
            <Box sx={{ position: 'absolute', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.15, zIndex: 0, bgcolor: '#00d4ff', top: '-100px', right: '-50px', width: '600px', height: '600px' }} />
            <Box sx={{ position: 'absolute', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.15, zIndex: 0, bgcolor: '#0056D2', bottom: '-150px', left: '-100px', width: '700px', height: '700px' }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
                {/* Header Badge */}
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 6 }}>
                    <Box sx={{
                        px: 3, py: 1.25, borderRadius: '50px', border: '1px solid rgba(0, 212, 255, 0.3)',
                        bgcolor: 'rgba(0, 212, 255, 0.1)', color: '#00d4ff', fontWeight: 700,
                        letterSpacing: 1, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: 1.5
                    }}>
                        <Box sx={{ position: 'relative', display: 'flex', height: 12, width: 12 }}>
                            <Box sx={{ animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite', position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', bgcolor: '#00d4ff', opacity: 0.75 }} />
                            <Box sx={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', height: 12, width: 12, bgcolor: '#00d4ff' }} />
                        </Box>
                        METODOLOGÍA TRANSPARENTE
                    </Box>
                </Box>

                {/* Main Content Layout */}
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '7fr 5fr' }, gap: { xs: 8, lg: 6 }, alignItems: 'center' }}>

                    {/* Left Text Column */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography sx={{ color: '#00d4ff', fontWeight: 800, letterSpacing: 2, fontSize: { xs: '1.125rem', md: '1.25rem' }, textTransform: 'uppercase' }}>
                                Adiós a la incertidumbre
                            </Typography>
                            <Typography variant="h2" sx={{ fontSize: { xs: '3rem', sm: '3.75rem', md: '4.5rem' }, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'white', mb: 2 }}>
                                Software <br />
                                sin <Box component="span" sx={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(to right, #00d4ff, #0090ff, #0056D2)', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.1)' }}>cajas negras.</Box>
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mb: 6, mt: 2 }}>
                            {[
                                { icon: <BarChartIcon sx={{ color: '#00d4ff', fontSize: 28 }} />, title: 'Avance Real 24/7', desc: 'Acceso total a nuestro Trello/Jira. Mira en qué estamos trabajando hoy, sin pedir reuniones.' },
                                { icon: <RocketLaunchIcon sx={{ color: '#0090ff', fontSize: 28 }} />, title: 'MVP en tiempo récord', desc: 'Lanzamos una versión operativa rápido. Valida tu idea con usuarios reales, no con promesas.' },
                                { icon: <ShieldIcon sx={{ color: '#0056D2', fontSize: 28 }} />, title: 'Modelo Seguro: 30 / 30 / 40', desc: 'Pagas contra avances validados y paso a producción. Sin sorpresas, sin riesgos.' }
                            ].map((item, idx) => (
                                <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 2, md: 2.5 } }}>
                                    <Box sx={{ bgcolor: 'rgba(0, 212, 255, 0.1)', p: 1.5, borderRadius: 3, border: '1px solid rgba(0, 212, 255, 0.2)', display: 'flex', flexShrink: 0 }}>
                                        {item.icon}
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 700, color: 'white', mb: 0.5, fontStyle: idx === 2 ? 'italic' : 'normal' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography sx={{ color: '#cbd5e1', fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.4 }}>
                                            {item.desc}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        {/* CTA */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <Button href="#contacto" variant="contained" endIcon={<ArrowForwardIcon />} sx={{ bgcolor: 'white', color: '#0f172a', fontWeight: 900, fontSize: { xs: '1.25rem', lg: '1.5rem' }, py: 2, px: { xs: 4, lg: 5 }, borderRadius: 4, textTransform: 'none', width: 'max-content', transition: 'all 0.3s ease', '&:hover': { bgcolor: '#e2e8f0', transform: 'scale(1.05)', boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)' } }}>
                                COTIZAR MI PROYECTO
                            </Button>
                        </Box>
                    </Box>

                    {/* Right Visual Column: Kanban Abstracto */}
                    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: { xs: 5, lg: 0 } }}>
                        <Box className="group" sx={{ bgcolor: 'rgba(5, 16, 26, 0.7)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)', width: '100%', maxWidth: 500, height: { xs: 450, sm: 480 }, borderRadius: '2rem', p: { xs: 2.5, sm: 3 }, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', position: 'relative', zIndex: 10, overflow: 'hidden', transform: { lg: 'scale(1.05)' } }}>

                            {/* App Header */}
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: { xs: 3, sm: 4 }, pb: 2, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: '#0056D2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>K</Box>
                                    <Typography sx={{ fontWeight: 900, color: 'white', fontSize: { xs: '1.125rem', sm: '1.25rem' }, textTransform: 'uppercase', letterSpacing: '-0.05em' }}>Sprint Dashboard</Typography>
                                </Box>
                                <Box sx={{ width: 32, height: 32, flexShrink: 0, borderRadius: '50%', bgcolor: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem', fontWeight: 700, color: '#00d4ff' }}>DEV</Box>
                            </Box>

                            {/* Kanban Columns */}
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: { xs: 1, sm: 1.5 }, height: 'calc(100% - 100px)' }}>
                                {/* Backlog Column */}
                                <Box sx={{ bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 4, p: { xs: 1, sm: 2 }, display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 }, position: 'relative' }}>
                                    <Typography sx={{ fontSize: { xs: '0.5625rem', sm: '0.625rem' }, fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 2, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Backlog</Typography>
                                    {/* Static Card */}
                                    <Box sx={{ bgcolor: 'rgba(15, 23, 42, 0.8)', p: { xs: 1, sm: 1.5 }, borderRadius: 3, border: '1px solid rgba(255,255,255,0.05)', opacity: 0.4 }}>
                                        <Box sx={{ height: 8, width: '75%', bgcolor: '#475569', borderRadius: 4, mb: 1 }} />
                                        <Box sx={{ height: 8, width: '50%', bgcolor: '#475569', borderRadius: 4 }} />
                                    </Box>
                                    {/* Animated Card Container */}
                                    <Box sx={{ position: 'absolute', left: { xs: 8, sm: 16 }, right: { xs: 8, sm: 16 }, top: { xs: 64, sm: 76 }, height: '100%', pointerEvents: 'none' }}>
                                        <Box className="kanban-card-anim" sx={{ bgcolor: '#0f172a', p: { xs: 1.5, sm: 2 }, borderRadius: 3, border: '1px solid rgba(0, 212, 255, 0.3)', boxShadow: '0 10px 30px rgba(0,212,255,0.1)', position: 'absolute', width: '100%' }}>
                                            <Box sx={{ width: { xs: 24, sm: 32 }, height: 6, bgcolor: '#00d4ff', borderRadius: 4, mb: { xs: 1, sm: 1.5 } }} />
                                            <Box sx={{ height: { xs: 8, sm: 12 }, width: '100%', bgcolor: 'rgba(255,255,255,0.9)', borderRadius: 1.5, mb: 1 }} />
                                            <Box sx={{ height: { xs: 8, sm: 12 }, width: '66%', bgcolor: 'rgba(255,255,255,0.5)', borderRadius: 1.5 }} />
                                        </Box>
                                    </Box>
                                </Box>

                                {/* In Progress Column */}
                                <Box sx={{ bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 4, p: { xs: 1, sm: 2 } }}>
                                    <Typography sx={{ fontSize: { xs: '0.5625rem', sm: '0.625rem' }, fontWeight: 900, color: '#00d4ff', textTransform: 'uppercase', letterSpacing: 2, textAlign: 'center', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Progress</Typography>
                                </Box>

                                {/* Done Column */}
                                <Box sx={{ bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 4, p: { xs: 1, sm: 2 }, display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 }, overflow: 'hidden' }}>
                                    <Typography sx={{ fontSize: { xs: '0.5625rem', sm: '0.625rem' }, fontWeight: 900, color: '#10b981', textTransform: 'uppercase', letterSpacing: 2, textAlign: 'center', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Done</Typography>
                                    <Box sx={{ bgcolor: 'rgba(16, 185, 129, 0.1)', p: { xs: 1, sm: 1.5 }, borderRadius: 3, border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Box sx={{ width: { xs: 16, sm: 24 }, height: 6, bgcolor: '#10b981', borderRadius: 4 }} />
                                            <Typography sx={{ fontSize: { xs: '0.625rem', sm: '0.75rem' } }}>✅</Typography>
                                        </Box>
                                        <Box sx={{ height: 8, width: '100%', bgcolor: 'rgba(100, 116, 139, 0.2)', borderRadius: 4 }} />
                                    </Box>
                                </Box>
                            </Box>

                            {/* Overlay Sello Garantía */}
                            <Box sx={{ position: 'absolute', bottom: 24, left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 20 }}>
                                <Box sx={{ bgcolor: 'white', color: '#020617', px: { xs: 2, sm: 2.5 }, py: 1, borderRadius: 4, fontWeight: 900, fontSize: { xs: '0.625rem', sm: '0.75rem', md: '0.875rem' }, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', transform: 'rotate(3deg)' }}>
                                    ENTREGA GARANTIZADA
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
                @keyframes move-card-pro {
                    0% { transform: translate(0, 0) scale(1); opacity: 1; }
                    25% { transform: translate(15px, -10px) rotate(2deg) scale(1.02); }
                    75% { transform: translate(calc(200% + 24px), 10px) rotate(-2deg) scale(0.98); }
                    100% { transform: translate(calc(200% + 24px), 20px) scale(1); opacity: 1; }
                }
                @media (min-width: 640px) {
                    .kanban-card-anim {
                        animation: move-card-pro 5s ease-in-out infinite alternate;
                    }
                    .group:hover .kanban-card-anim {
                        animation: none;
                        transform: none;
                    }
                }
                @media (max-width: 639px) {
                    @keyframes move-card-pro-mobile {
                        0% { transform: translate(0, 0) scale(1); opacity: 1; }
                        25% { transform: translate(10px, -5px) rotate(2deg) scale(1.02); }
                        75% { transform: translate(calc(200% + 16px), 5px) rotate(-2deg) scale(0.98); }
                        100% { transform: translate(calc(200% + 16px), 10px) scale(1); opacity: 1; }
                    }
                    .kanban-card-anim {
                        animation: move-card-pro-mobile 5s ease-in-out infinite alternate;
                    }
                    .group:hover .kanban-card-anim {
                        animation: none;
                        transform: none;
                    }
                }
            `}} />
        </Box>
    );
}
