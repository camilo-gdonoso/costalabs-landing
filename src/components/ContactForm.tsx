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
                    <Typography variant="h4" sx={{ color: '#ef4444', fontWeight: 700, mb: 2 }}>
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
                        '&.Mui-focused fieldset': { borderColor: '#ef4444' },
                    }
                }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                        <TextField
                            required label="Nombre" name="nombre"
                            variant="outlined" fullWidth
                            value={formData.nombre} onChange={handleChange}
                        />
                        <TextField
                            required label="Apellido" name="apellido"
                            variant="outlined" fullWidth
                            value={formData.apellido} onChange={handleChange}
                        />
                    </Box>

                    <TextField
                        required label="Teléfono" name="telefono"
                        variant="outlined" fullWidth
                        value={formData.telefono} onChange={handleChange}
                    />
                    <TextField
                        required label="Email" name="email" type="email"
                        variant="outlined" fullWidth
                        value={formData.email} onChange={handleChange}
                    />
                    <TextField
                        label="Empresa" name="empresa"
                        variant="outlined" fullWidth
                        value={formData.empresa} onChange={handleChange}
                    />

                    <TextField
                        required
                        label="Descripción del Proyecto" name="descripcion"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        value={formData.descripcion} onChange={handleChange}
                    />

                    {status === 'error' && (
                        <Alert severity="error" sx={{ mb: 3 }}>{errorMessage}</Alert>
                    )}

                    {status === 'success' && (
                        <Alert severity="success" sx={{ mb: 3 }}>
                            ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo a la brevedad.
                        </Alert>
                    )}

                    <Box sx={{ mt: 4 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            disabled={status === 'loading' || status === 'success'}
                            sx={{
                                bgcolor: '#2563eb',
                                color: 'white',
                                fontWeight: 700,
                                py: 2,
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                '&:hover': { bgcolor: '#1d4ed8' },
                                '&:disabled': { bgcolor: 'rgba(37, 99, 235, 0.5)', color: '#ccc' }
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
