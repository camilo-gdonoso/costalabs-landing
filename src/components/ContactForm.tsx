'use client';
import { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, CircularProgress } from '@mui/material';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        empresa: '',
        descripcion: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Hubo un error al enviar el mensaje.');
            }

            setStatus('success');
            setFormData({ nombre: '', apellido: '', telefono: '', email: '', empresa: '', descripcion: '' }); // Limpiar forulario
        } catch (error) {
            console.error(error);
            setStatus('error');
            setErrorMessage('No pudimos enviar tu mensaje. Por favor intenta nuevamente o contáctanos por WhatsApp.');
        }
    };

    return (
        <Box id="contacto" sx={{ py: 15, background: 'rgba(10, 10, 11, 0.5)' }}>
            <Box sx={{ maxWidth: '900px', mx: 'auto', px: 2 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h4" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                        ¿Buscas soluciones de Tecnología a Medida?
                    </Typography>
                    <Typography variant="h3" sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' } }}>
                        Estamos aquí para ayudarte. <br /> Contáctanos
                    </Typography>
                </Box>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{
                    maxWidth: 800,
                    mx: 'auto',
                    '& .MuiTextField-root': { mb: 3 },
                    '& .MuiInputLabel-root': { color: '#9ca3af' },
                    '& .MuiInputBase-input': { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                        '&:hover fieldset': { borderColor: 'white' },
                        '&.Mui-focused fieldset': { borderColor: '#00d4ff' },
                    }
                }}>
                    {/* ... (campos) ... */}
                    <Box sx={{ mt: 4 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            disabled={status === 'loading' || status === 'success'}
                            sx={{
                                bgcolor: '#00d4ff',
                                color: 'black',
                                fontWeight: 700,
                                py: 2,
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                '&:hover': { bgcolor: '#40e0ff', boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)' },
                                '&:disabled': { bgcolor: 'rgba(0, 212, 255, 0.1)', color: '#555' }
                            }}
                        >
                            {status === 'loading' ? <CircularProgress size={24} color="inherit" /> : 'Enviar Mensaje'}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
