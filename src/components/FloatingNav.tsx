'use client';
import { useState, useEffect } from 'react';
import { Box, Tooltip, IconButton, Fab } from '@mui/material';
import { Link } from 'react-scroll';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function FloatingNav() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const sections = [
        { id: 'hero', name: 'Inicio' },
        { id: 'adn', name: 'Nuestro ADN' },
        { id: 'ai-solutions', name: 'AI Solutions' },
        { id: 'servicios-detalle', name: 'Servicios' },
        { id: 'sectores', name: 'Sectores' },
    ];

    return (
        <>
            {/* Scroll to Top Arrow */}
            <Box sx={{
                position: 'fixed',
                bottom: { xs: 90, md: 100 },
                left: { xs: 24, md: 32 },
                zIndex: 9998,
                transition: 'all 0.3s ease',
                opacity: showTopBtn ? 1 : 0,
                visibility: showTopBtn ? 'visible' : 'hidden',
                transform: showTopBtn ? 'translateY(0)' : 'translateY(20px)'
            }}>
                <Fab
                    size="small"
                    onClick={scrollToTop}
                    sx={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        '&:hover': {
                            background: '#00d4ff',
                            color: 'black'
                        }
                    }}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </Box>

            {/* Side Navigation Dots */}
            <Box sx={{
                position: 'fixed',
                top: '50%',
                right: 16,
                transform: 'translateY(-50%)',
                zIndex: 9997,
                display: { xs: 'none', lg: 'flex' },
                flexDirection: 'column',
                gap: 2,
                background: 'rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(8px)',
                p: 1.5,
                borderRadius: 5,
                border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
                {sections.map((section) => (
                    <Link
                        key={section.id}
                        to={section.id}
                        spy={true}
                        smooth={true}
                        duration={800}
                        offset={-80}
                        activeClass="active-dot"
                    >
                        <Tooltip title={section.name} placement="left" arrow>
                            <Box sx={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                background: 'rgba(255, 255, 255, 0.3)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    transform: 'scale(1.2)'
                                },
                            }} className="nav-dot" />
                        </Tooltip>
                    </Link>
                ))}
            </Box>
        </>
    );
}
