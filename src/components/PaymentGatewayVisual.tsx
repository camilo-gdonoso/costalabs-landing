'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SecurityIcon from '@mui/icons-material/Security';

export default function PaymentGatewayVisual() {
    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 450,
            mx: 'auto',
            height: 480,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Background elements */}
            <Box sx={{
                position: 'absolute',
                top: '10%', right: '10%',
                width: 150, height: 150,
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.2)',
                filter: 'blur(50px)',
                animation: 'pulse 4s infinite alternate'
            }} />
            <Box sx={{
                position: 'absolute',
                bottom: '10%', left: '10%',
                width: 200, height: 200,
                borderRadius: '50%',
                background: 'rgba(59, 130, 246, 0.2)',
                filter: 'blur(60px)',
                animation: 'pulse 5s infinite alternate-reverse'
            }} />

            {/* Main Checkout Card */}
            <Box className="checkout-card" sx={{
                width: '100%',
                bgcolor: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                p: { xs: 3, sm: 4 },
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                zIndex: 10,
                position: 'relative',
            }}>
                {/* Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, pb: 2, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ShoppingBagOutlinedIcon sx={{ color: '#10b981' }} />
                        </Box>
                        <Box>
                            <Typography sx={{ color: 'white', fontWeight: 700, lineHeight: 1 }}>Checkout Seguro</Typography>
                            <Typography sx={{ color: '#94a3b8', fontSize: '0.75rem', mt: 0.5 }}>Encriptación SSL 256-bit</Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ color: '#10b981', fontWeight: 800, fontSize: '1.25rem' }}>$199.90</Typography>
                </Box>

                {/* Credit Card Mock */}
                <Box sx={{
                    position: 'relative',
                    width: '100%',
                    height: 160,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    p: 2.5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    mb: 4,
                    overflow: 'hidden',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)'
                }}>
                    <Box sx={{ position: 'absolute', top: -50, right: -50, width: 100, height: 100, borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', filter: 'blur(20px)' }} />
                    <Box sx={{ position: 'absolute', bottom: -30, left: -20, width: 80, height: 80, borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', filter: 'blur(20px)' }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                        <CreditCardIcon sx={{ color: '#cbd5e1', fontSize: 28 }} />
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                            <Box sx={{ width: 24, height: 16, borderRadius: 0.5, bgcolor: '#ef4444', opacity: 0.8 }} />
                            <Box sx={{ width: 24, height: 16, borderRadius: 0.5, bgcolor: '#f59e0b', opacity: 0.8, ml: -1.5 }} />
                        </Box>
                    </Box>
                    <Box sx={{ position: 'relative', zIndex: 2 }}>
                        <Typography sx={{ color: '#f8fafc', letterSpacing: 4, fontSize: '1.1rem', mb: 1, fontFamily: 'monospace', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                            **** **** **** 4829
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ color: '#94a3b8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1 }}>Juan Pérez</Typography>
                            <Typography sx={{ color: '#94a3b8', fontSize: '0.75rem', letterSpacing: 1 }}>12/28</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Animated Button */}
                <Box className="payment-btn-container" sx={{ position: 'relative' }}>
                    <Box className="payment-btn" sx={{
                        width: '100%',
                        bgcolor: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        color: '#10b981',
                        py: 2,
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        cursor: 'default',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.1)'
                    }}>
                        <span className="btn-text" style={{ position: 'absolute' }}>Pagar Ahora</span>
                        <span className="btn-loader" style={{ position: 'absolute', opacity: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <svg style={{ animation: 'spin 1s linear infinite', height: '20px', width: '20px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Procesando...
                        </span>
                        <span className="btn-success" style={{ position: 'absolute', opacity: 0, display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
                            <SecurityIcon /> ¡Pago Exitoso!
                        </span>
                    </Box>
                </Box>
            </Box>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.3; }
                    100% { transform: scale(1.2); opacity: 0.6; }
                }
                
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                /* Animation Sequence for Payment */
                @keyframes btn-text-hide {
                    0%, 15% { opacity: 1; transform: translateY(0); }
                    20%, 100% { opacity: 0; transform: translateY(-20px); }
                }
                @keyframes btn-loader-show {
                    0%, 15% { opacity: 0; transform: translateY(20px); }
                    20%, 55% { opacity: 1; transform: translateY(0); }
                    60%, 100% { opacity: 0; transform: translateY(-20px); }
                }
                @keyframes btn-success-show {
                    0%, 55% { opacity: 0; transform: translateY(20px); }
                    60%, 90% { opacity: 1; transform: translateY(0); }
                    95%, 100% { opacity: 0; transform: translateY(-20px); }
                }
                @keyframes bg-success {
                    0%, 55% { background-color: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.3); color: #10b981; }
                    60%, 90% { background-color: #10b981; border-color: #10b981; color: white; box-shadow: 0 0 20px rgba(16,185,129,0.4); }
                    95%, 100% { background-color: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.3); color: #10b981; }
                }
                @keyframes float-card {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }

                .checkout-card {
                    animation: float-card 6s ease-in-out infinite;
                }

                .payment-btn {
                    animation: bg-success 8s infinite cubic-bezier(0.4, 0, 0.2, 1);
                }
                .btn-text {
                    animation: btn-text-hide 8s infinite cubic-bezier(0.4, 0, 0.2, 1);
                }
                .btn-loader {
                    animation: btn-loader-show 8s infinite cubic-bezier(0.4, 0, 0.2, 1);
                }
                .btn-success {
                    animation: btn-success-show 8s infinite cubic-bezier(0.4, 0, 0.2, 1);
                }
            `}} />
        </Box>
    );
}
