'use client';
import { Box, Container, Typography, Link, Stack } from '@mui/material';

export default function Footer() {
    return (
        <Box component="footer" sx={{
            py: 6,
            background: 'black',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            color: '#a1a1aa'
        }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 4
                }}>
                    {/* Izquierda: Logo y Copyright */}
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
                            CostaLabs
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#71717a' }}>
                            © 2026 CostaLabs. Todos los derechos reservados.
                        </Typography>
                    </Box>

                    {/* Centro/Derecha: Contacto y Legales */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 2, sm: 4 }}
                        alignItems="center"
                    >
                        <Link href="mailto:contacto@costalabs.cl" sx={{ color: '#a1a1aa', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                            contacto@costalabs.cl
                        </Link>
                        <Link href="/privacidad" sx={{ color: '#71717a', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>
                            Política de Privacidad
                        </Link>
                        <Link href="/terminos" sx={{ color: '#71717a', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>
                            Términos de Servicio
                        </Link>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
