'use client';
import { Box, Typography } from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory';
import BusinessIcon from '@mui/icons-material/Business';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BoltIcon from '@mui/icons-material/Bolt';

export default function AIChileVisual() {
    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            height: '500px',
            background: 'radial-gradient(circle at center, #0f172a 0%, #000 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: 4,
            border: '1px solid rgba(255,255,255,0.1)'
        }}>
            {/* Grid de fondo animado */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.3,
                animation: 'pulseGrid 4s infinite ease-in-out',
                zIndex: 0
            }} />

            {/* Núcleo Central IA */}
            <Box sx={{
                position: 'relative',
                zIndex: 2,
                textAlign: 'center'
            }}>
                <Box sx={{
                    position: 'relative',
                    width: 120,
                    height: 120,
                    margin: '0 auto',
                    borderRadius: '50%',
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '2px solid #8b5cf6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 50px rgba(139, 92, 246, 0.5)'
                }}>
                    <MemoryIcon sx={{ fontSize: 60, color: '#8b5cf6' }} />
                    <Box sx={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '1px solid transparent', borderTopColor: '#f43f5e', animation: 'spin 3s linear infinite' }} />
                </Box>
                <Typography variant="h3" sx={{ mt: 4, fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: 2 }}>
                    Tu Negocio
                </Typography>
                <Typography variant="h4" sx={{ color: '#8b5cf6', fontWeight: 700 }}>
                    Potenciado por IA
                </Typography>
            </Box>

            {/* Nodos Satélite orbitando */}
            <Box sx={{ position: 'absolute', top: '20%', left: '20%', textAlign: 'center', opacity: 0.8 }}>
                <EngineeringIcon sx={{ fontSize: 40, color: '#f59e0b' }} />
                <Typography variant="caption" sx={{ display: 'block', color: 'rgba(255,255,255,0.7)' }}>Minería 4.0</Typography>
            </Box>

            <Box sx={{ position: 'absolute', bottom: '20%', right: '20%', textAlign: 'center', opacity: 0.8 }}>
                <BusinessIcon sx={{ fontSize: 40, color: '#10b981' }} />
                <Typography variant="caption" sx={{ display: 'block', color: 'rgba(255,255,255,0.7)' }}>Corporativo</Typography>
            </Box>

            <Box sx={{ position: 'absolute', top: '20%', right: '20%', textAlign: 'center', opacity: 0.8 }}>
                <BoltIcon sx={{ fontSize: 40, color: '#f43f5e' }} />
                <Typography variant="caption" sx={{ display: 'block', color: 'rgba(255,255,255,0.7)' }}>Energía</Typography>
            </Box>

            {/* Líneas de conexión */}
            <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
            </svg>

            <style jsx global>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes pulseGrid {
                    0% { opacity: 0.2; }
                    50% { opacity: 0.4; }
                    100% { opacity: 0.2; }
                }
            `}</style>
        </Box>
    );
}
