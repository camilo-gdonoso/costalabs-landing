'use client';
import { Box, Container, Typography } from '@mui/material';

export default function PartnersSection() {
    const partners = [
        { name: 'Tierra Producciones', url: 'https://tierraproducciones.cl', domain: 'tierraproducciones.cl' },
        { name: 'Cavancha Exclusivo', url: 'https://cavanchaexclusivo.cl', domain: 'cavanchaexclusivo.cl' },
        { name: 'Colabora 360', url: 'https://colabora360.com', domain: 'colabora360.com' },
        { name: 'Raptor Systems', url: 'https://raptorsystems.cl', domain: 'raptorsystems.cl' },
    ];

    return (
        <Box sx={{ py: 10, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="overline"
                    sx={{
                        display: 'block',
                        textAlign: 'center',
                        color: '#64748b',
                        mb: 6,
                        letterSpacing: 3,
                        fontWeight: 600
                    }}
                >
                    PARTNERS Y ALIANZAS
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: 4, md: 8, lg: 12 }
                }}>
                    {partners.map((partner) => (
                        <Box
                            key={partner.name}
                            component="a"
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                textDecoration: 'none',
                                opacity: 0.5,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    opacity: 1,
                                    transform: 'scale(1.05)'
                                }
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                                    fontFamily: 'var(--font-geist-sans)', // Usar la fuente del sitio
                                }}
                            >
                                {partner.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
