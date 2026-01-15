'use client';
import { Fab, Tooltip, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppButton() {
    const phoneNumber = '56993424453'; // +569 93424453
    const welcomeMessage = encodeURIComponent(
        '¡Hola! Me gustaría obtener más información sobre los servicios de CostaLabs SPA. ¿Podrían ayudarme?'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${welcomeMessage}`;

    return (
        <Tooltip title="Contáctanos por WhatsApp" placement="left" arrow>
            <Fab
                component="a"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
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
                    animation: 'pulse 2s ease-in-out infinite',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #1ebe57 0%, #128C7E 100%)',
                        transform: 'scale(1.1) translateY(-4px)',
                        boxShadow: '0 12px 32px rgba(37, 211, 102, 0.6)',
                    },
                    '@keyframes pulse': {
                        '0%, 100%': {
                            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
                        },
                        '50%': {
                            boxShadow: '0 8px 32px rgba(37, 211, 102, 0.7)',
                        },
                    },
                }}
            >
                <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
            </Fab>
        </Tooltip>
    );
}
