'use client';
import { Box, Paper, Typography, Fade } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import BugReportIcon from '@mui/icons-material/BugReport';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from 'react';

const steps = [
    {
        label: 'Code',
        icon: <CodeIcon sx={{ fontSize: 32 }} />,
        color: '#3b82f6', // Azul
        description: 'Git Commit'
    },
    {
        label: 'Build',
        icon: <BuildIcon sx={{ fontSize: 32 }} />,
        color: '#f59e0b', // Naranja
        description: 'Docker Build'
    },
    {
        label: 'Test',
        icon: <BugReportIcon sx={{ fontSize: 32 }} />,
        color: '#10b981', // Verde
        description: 'Unit Tests'
    },
    {
        label: 'Deploy',
        icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />,
        color: '#f43f5e', // Rojo
        description: 'K8s Cluster'
    },
    {
        label: 'Monitor',
        icon: <MonitorHeartIcon sx={{ fontSize: 32 }} />,
        color: '#8b5cf6', // Púrpura
        description: 'Grafana'
    }
];

export default function DevOpsVisual() {
    const [activeStep, setActiveStep] = useState(0);

    // Animación del ciclo infinito
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 1500); // Cambiar paso cada 1.5s
        return () => clearInterval(interval);
    }, []);

    return (
        <Paper elevation={0} sx={{
            p: 4,
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative'
        }}>
            {/* Header simulado de terminal */}
            <Box sx={{ display: 'flex', gap: 1, mb: 4, borderBottom: '1px solid rgba(255,255,255,0.05)', pb: 2 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ef4444' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#eab308' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#22c55e' }} />
                <Typography sx={{ ml: 2, fontSize: '0.8rem', color: '#64748b', fontFamily: 'monospace' }}>
                    pipeline-status.sh — zsh
                </Typography>
            </Box>

            {/* Pipeline Visual */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                position: 'relative'
            }}>
                {steps.map((step, index) => {
                    const isActive = index === activeStep;
                    const isPast = index < activeStep;

                    return (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' }, width: '100%' }}>
                            {/* Step Node */}
                            <Box sx={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                zIndex: 2,
                                width: '100%'
                            }}>
                                <Box sx={{
                                    width: 64,
                                    height: 64,
                                    borderRadius: '16px',
                                    background: isActive ? `${step.color}20` : 'rgba(255,255,255,0.03)',
                                    border: `2px solid ${isActive ? step.color : 'rgba(255,255,255,0.1)'}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: isActive ? step.color : '#64748b',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                                    boxShadow: isActive ? `0 0 20px ${step.color}40` : 'none',
                                }}>
                                    {step.icon}
                                </Box>

                                <Box sx={{ mt: 2, textAlign: 'center' }}>
                                    <Typography sx={{
                                        color: isActive ? 'white' : '#64748b',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        transition: 'color 0.3s'
                                    }}>
                                        {step.label}
                                    </Typography>
                                    <Typography sx={{
                                        color: isActive ? step.color : '#475569',
                                        fontSize: '0.75rem',
                                        fontFamily: 'monospace',
                                        opacity: isActive ? 1 : 0.7,
                                        transition: 'all 0.3s'
                                    }}>
                                        {step.description}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Arrow Connector (excepto el último) */}
                            {index < steps.length - 1 && (
                                <Box sx={{
                                    flexGrow: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0.3,
                                    mx: 1,
                                    color: '#64748b',
                                    transform: { xs: 'rotate(90deg)', sm: 'rotate(0deg)' },
                                    py: { xs: 2, sm: 0 }
                                }}>
                                    <ArrowForwardIcon sx={{ fontSize: 20 }} />
                                </Box>
                            )}
                        </Box>
                    );
                })}
            </Box>

            {/* Status Log Dummy */}
            <Box sx={{
                mt: 6,
                p: 2,
                background: '#0f172a',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '0.8rem',
                borderLeft: '4px solid #10b981'
            }}>
                <Typography sx={{ color: '#10b981' }}>✓ Pipeline #3429 successful</Typography>
                <Typography sx={{ color: '#64748b' }}>  Duration: 2m 14s</Typography>
                <Typography sx={{ color: '#64748b' }}>  Commit: 8f3d2a1 (feat: update infra)</Typography>
            </Box>
        </Paper>
    );
}
