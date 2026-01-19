'use client';
import { Box, Container, Typography } from '@mui/material';

export default function PartnersSection({ disablepy }: { disablepy?: boolean }) {
    const partners = [
        { name: 'Davortech', url: 'https://davortech.com/' },
        { name: 'Cavancha Exclusivo', url: 'https://cavanchaexclusivo.cl' },
        { name: 'Colabora 360', url: 'https://colabora360.com' },
        { name: 'Raptor Systems', url: 'https://raptorsystems.cl' },
    ];

    const Content = () => (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 4,
            width: '100%'
        }}>
            {partners.map((partner) => (
                <Box
                    key={partner.name}
                    component="a"
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 3,
                        borderRadius: 2,
                        bgcolor: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.06)',
                            borderColor: 'rgba(255,255,255,0.2)',
                            transform: 'translateY(-2px)'
                        }
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#e2e8f0',
                            fontWeight: 700,
                            fontSize: '1rem',
                            textAlign: 'center'
                        }}
                    >
                        {partner.name}
                    </Typography>
                </Box>
            ))}
        </Box>
    );

    if (disablepy) {
        return <Content />; // Sin título, sin container, sin padding
    }

    return (
        <Box sx={{ py: 10, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <Container maxWidth="lg">
                <Typography variant="overline" sx={{ display: 'block', textAlign: 'center', color: '#64748b', mb: 6, letterSpacing: 3, fontWeight: 600 }}>
                    PARTNERS Y ALIANZAS
                </Typography>
                <Content />
            </Container>
        </Box>
    );
}
