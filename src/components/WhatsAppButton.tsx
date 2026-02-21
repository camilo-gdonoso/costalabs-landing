'use client';
import { useState, useRef, useEffect } from 'react';
import { Fab, Tooltip, Box, Typography, TextField, IconButton, Paper, CircularProgress } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

export default function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', text: '¡Hola! Soy el Asistente Ventas de CostaLabs. Ayudamos a empresas a escalar mediante soluciones de Inteligencia Artificial. ¿En qué etapa se encuentra tu empresa respecto al uso de IA?\n1. Apenas estamos explorando.\n2. Ya usamos algunas herramientas, pero queremos algo a medida.\n3. Buscamos automatizar procesos específicos.' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        const currentInput = input;
        setInput('');
        setLoading(true);

        try {
            const resp = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: currentInput, session_id: 'web_user' })
            });
            const data = await resp.json();
            setMessages(prev => [...prev, { role: 'assistant', text: data.response }]);
        } catch (err) {
            setMessages(prev => [...prev, { role: 'assistant', text: 'Lo siento, ha ocurrido un error al conectar con nuestro asesor virtual. Por favor intenta más tarde o contáctanos directamente.' }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {isOpen && (
                <Paper
                    elevation={12}
                    sx={{
                        position: 'fixed',
                        bottom: { xs: 90, md: 110 },
                        right: { xs: 16, md: 32 },
                        width: { xs: 'calc(100vw - 32px)', sm: 380 },
                        height: { xs: '60vh', sm: 500 },
                        maxHeight: '80vh',
                        display: 'flex',
                        flexDirection: 'column',
                        zIndex: 9999,
                        borderRadius: 3,
                        overflow: 'hidden',
                        bgcolor: '#0b141a', // Fondo WhatsApp dark mode
                    }}
                >
                    {/* Header */}
                    <Box sx={{
                        bgcolor: '#202c33',
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{
                                width: 40, height: 40, borderRadius: '50%',
                                bgcolor: '#005c4b', display: 'flex',
                                alignItems: 'center', justifyContent: 'center',
                                color: 'white', fontWeight: 'bold'
                            }}>
                                CL
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 600, lineHeight: 1.2 }}>
                                    Asistente CostaLabs
                                </Typography>
                                <Typography variant="caption" sx={{ color: '#25D366' }}>
                                    en línea
                                </Typography>
                            </Box>
                        </Box>
                        <IconButton size="small" onClick={() => setIsOpen(false)} sx={{ color: '#8696a0' }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    {/* Área de mensajes */}
                    <Box sx={{
                        flex: 1,
                        overflowY: 'auto',
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5,
                        backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")',
                        backgroundBlendMode: 'overlay',
                        bgcolor: '#0b141a',
                        opacity: 0.95
                    }}>
                        {messages.map((m, i) => (
                            <Box key={i} sx={{
                                display: 'flex',
                                justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start'
                            }}>
                                <Box sx={{
                                    maxWidth: '85%',
                                    p: 1.5,
                                    borderRadius: 2,
                                    borderTopRightRadius: m.role === 'user' ? 0 : 8,
                                    borderTopLeftRadius: m.role === 'assistant' ? 0 : 8,
                                    bgcolor: m.role === 'user' ? '#005c4b' : '#202c33',
                                    color: '#e9edef',
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
                                }}>
                                    <Typography variant="body2" sx={{ whiteSpace: 'pre-line', lineHeight: 1.4 }}>
                                        {m.text}
                                    </Typography>
                                    <Typography variant="caption" sx={{
                                        display: 'block',
                                        textAlign: 'right',
                                        mt: 0.5,
                                        fontSize: '0.65rem',
                                        color: 'rgba(255,255,255,0.5)'
                                    }}>
                                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                        {loading && (
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Box sx={{ bgcolor: '#202c33', p: 1.5, borderRadius: 2, borderTopLeftRadius: 0, display: 'flex', gap: 0.5 }}>
                                    <CircularProgress size={16} sx={{ color: '#25D366' }} />
                                </Box>
                            </Box>
                        )}
                        <div ref={chatEndRef} />
                    </Box>

                    {/* Área de Input */}
                    <Box sx={{
                        p: 1.5,
                        bgcolor: '#202c33',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Escribe un mensaje..."
                            size="small"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    bgcolor: '#2a3942',
                                    color: '#d1d7db',
                                    borderRadius: 5,
                                    '& fieldset': { border: 'none' },
                                }
                            }}
                        />
                        <IconButton
                            onClick={handleSend}
                            disabled={!input.trim()}
                            sx={{
                                bgcolor: '#005c4b',
                                color: 'white',
                                width: 40,
                                height: 40,
                                '&:hover': { bgcolor: '#008f75' },
                                '&.Mui-disabled': { bgcolor: '#2a3942', color: '#8696a0' }
                            }}
                        >
                            <SendIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Paper>
            )}

            <Tooltip title={isOpen ? "Cerrar chat" : "Chatear con nuestro Asistente"} placement="left" arrow>
                <Fab
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Contactar por WhatsApp"
                    sx={{
                        position: 'fixed',
                        bottom: { xs: 24, md: 32 },
                        right: { xs: 24, md: 32 },
                        width: { xs: 56, md: 64 },
                        height: { xs: 56, md: 64 },
                        background: 'linear-gradient(135deg, #25D366 0%, #1ebe57 100%)',
                        color: 'white',
                        boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
                        zIndex: 9999,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        animation: isOpen ? 'none' : 'pulse 2s ease-in-out infinite',
                        '&:hover': {
                            background: 'linear-gradient(135deg, #1ebe57 0%, #128C7E 100%)',
                            transform: 'scale(1.1) translateY(-4px)',
                            boxShadow: '0 12px 32px rgba(37, 211, 102, 0.6)',
                        },
                        '@keyframes pulse': {
                            '0%, 100%': { boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)' },
                            '50%': { boxShadow: '0 8px 32px rgba(37, 211, 102, 0.7)' },
                        },
                    }}
                >
                    {isOpen ? <CloseIcon sx={{ fontSize: { xs: 24, md: 28 } }} /> : <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />}
                </Fab>
            </Tooltip>
        </>
    );
}
