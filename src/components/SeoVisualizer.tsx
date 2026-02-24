'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';
import LanguageIcon from '@mui/icons-material/Language';
import StarIcon from '@mui/icons-material/Star';

export default function SeoVisualizer() {
    const [typedText, setTypedText] = useState('');
    const fullText = "desarrollo de ecommerce en chile";

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setTypedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    currentIndex = 0;
                    setTypedText('');
                }, 3000); // Reset after 3 seconds of showing full result
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    // Ensure it triggers redraw to loop
    useEffect(() => {
        if (typedText === '') {
            let currentIndex = 0;
            const typingInterval = setInterval(() => {
                if (currentIndex <= fullText.length) {
                    setTypedText(fullText.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 100);
            return () => clearInterval(typingInterval);
        }
    }, [typedText]);

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            minHeight: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Ambient Background Glows */}
            <Box sx={{
                position: 'absolute',
                top: '0%', left: '50%',
                transform: 'translateX(-50%)',
                width: 300, height: 150,
                background: 'rgba(16, 185, 129, 0.15)',
                filter: 'blur(50px)',
                borderRadius: '50%'
            }} />

            {/* Google Search Simulation Box */}
            <Box sx={{
                width: '100%',
                maxWidth: 450,
                mx: 'auto',
                bgcolor: 'rgba(15, 23, 42, 0.7)',
                backdropFilter: 'blur(16px)',
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                overflow: 'hidden',
                zIndex: 10,
                animation: 'float 6s ease-in-out infinite'
            }}>
                {/* Search Chrome Top Bar */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    p: 2,
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    bgcolor: 'rgba(2, 6, 23, 0.5)'
                }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ef4444' }} />
                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#f59e0b' }} />
                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10b981' }} />
                    </Box>
                    <Box sx={{
                        flex: 1,
                        bgcolor: 'rgba(255,255,255,0.05)',
                        borderRadius: 2,
                        py: 0.75,
                        px: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <SearchIcon sx={{ color: '#94a3b8', fontSize: 18 }} />
                        <Typography sx={{ color: '#f8fafc', fontSize: '0.875rem', fontFamily: 'monospace' }}>
                            {typedText}
                            <span className="blinking-cursor">|</span>
                        </Typography>
                    </Box>
                </Box>

                {/* Google Results Simulation */}
                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>

                    {/* Skeleton Result 1 (Competitor) */}
                    <Box sx={{ opacity: 0.4, animation: 'fade-in 1s ease-out forwards' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                            <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                <Box sx={{ width: 120, height: 8, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }} />
                            </Box>
                        </Box>
                        <Typography sx={{ color: '#3b82f6', fontSize: '1.1rem', mb: 1, filter: 'blur(2px)' }}>Agencia de desarrollo web online</Typography>
                        <Box sx={{ width: '90%', height: 8, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1, mb: 0.5 }} />
                        <Box sx={{ width: '60%', height: 8, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1 }} />
                    </Box>

                    {/* Result 2 (Tu Empresa - Highlighted #1) */}
                    <Box sx={{
                        position: 'relative',
                        p: 2,
                        borderRadius: 2,
                        bgcolor: 'rgba(16, 185, 129, 0.05)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        boxShadow: '0 0 20px rgba(16, 185, 129, 0.1)',
                        animation: 'highlight-result 3s ease-in-out infinite alternate',
                        animationDelay: '1s'
                    }}>
                        {/* Decorative Rank Badge */}
                        <Box sx={{
                            position: 'absolute', top: -12, right: -12,
                            width: 35, height: 35, borderRadius: '50%',
                            bgcolor: '#10b981', color: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: 900, fontSize: '1.2rem',
                            boxShadow: '0 4px 10px rgba(16,185,129,0.4)',
                            border: '2px solid #0f172a'
                        }}>
                            #1
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                            <LanguageIcon sx={{ color: '#10b981', fontSize: 18 }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ color: '#f8fafc', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    ostaLabs E-commerce <VerifiedIcon sx={{ fontSize: 14, color: '#3b82f6' }} />
                                </Typography>
                                <Typography sx={{ color: '#10b981', fontSize: '0.65rem' }}>https://costalabs.cl/ecommerce</Typography>
                            </Box>
                        </Box>
                        <Typography sx={{ color: '#60a5fa', fontSize: '1.1rem', fontWeight: 600, mb: 1, textDecoration: 'underline' }}>
                            Expertos en Desarrollo de Tiendas Online - Vende Más
                        </Typography>
                        <Typography sx={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5 }}>
                            Desarrollo <strong>E-commerce</strong> optimizado para Google. Tiendas rápidas, seguras y diseñadas para convertir visitas en ventas. <strong style={{ color: '#cbd5e1' }}>Contacta hoy.</strong>
                        </Typography>

                        {/* Star Ratings Simulation */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
                            <Typography sx={{ color: '#fbbf24', fontSize: '0.75rem', fontWeight: 700, mr: 0.5 }}>5.0</Typography>
                            {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} sx={{ color: '#fbbf24', fontSize: 14 }} />)}
                            <Typography sx={{ color: '#64748b', fontSize: '0.75rem', ml: 1 }}>Verificado por 50+ clientes en Chile</Typography>
                        </Box>
                    </Box>

                    {/* Skeleton Result 3 */}
                    <Box sx={{ opacity: 0.3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                            <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)' }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                <Box sx={{ width: 120, height: 8, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }} />
                            </Box>
                        </Box>
                        <Typography sx={{ color: '#3b82f6', fontSize: '1.1rem', mb: 1, filter: 'blur(2px)' }}>Shopify Expertos en Chile - Crea tu Tienda</Typography>
                        <Box sx={{ width: '80%', height: 8, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1, mb: 0.5 }} />
                        <Box sx={{ width: '40%', height: 8, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1 }} />
                    </Box>

                </Box>
            </Box>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .blinking-cursor {
                    font-weight: 100;
                    font-size: 1.2em;
                    color: #fff;
                    animation: 1s blink step-end infinite;
                }
                @keyframes blink {
                    from, to { color: transparent; }
                    50% { color: #fff; }
                }
                @keyframes highlight-result {
                    0% { border-color: rgba(16, 185, 129, 0.2); box-shadow: 0 0 10px rgba(16, 185, 129, 0.05); }
                    100% { border-color: rgba(16, 185, 129, 0.6); box-shadow: 0 0 30px rgba(16, 185, 129, 0.2); }
                }
            `}} />
        </Box>
    );
}
