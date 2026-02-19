'use client';
import { Box, Container, Typography, Link, Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
                        <Typography variant="body2" sx={{ color: '#71717a', mt: 1, fontSize: '0.85rem' }}>
                            Arturo Fernández 2032 depto 801, Iquique, Chile
                        </Typography>
                    </Box>

                    {/* Centro/Derecha: Contacto, Redes y Legales */}
                    <Stack
                        direction="column"
                        alignItems={{ xs: 'center', md: 'flex-end' }}
                        spacing={2}
                    >
                        {/* Redes Sociales */}
                        <Stack direction="row" spacing={1}>
                            <IconButton
                                component="a"
                                href="https://www.linkedin.com/company/costalabs"
                                target="_blank"
                                aria-label="LinkedIn"
                                sx={{ color: '#a1a1aa', '&:hover': { color: '#0077b5', transform: 'translateY(-2px)' }, transition: 'all 0.2s' }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://twitter.com/costalabs"
                                target="_blank"
                                aria-label="Twitter"
                                sx={{ color: '#a1a1aa', '&:hover': { color: '#1DA1F2', transform: 'translateY(-2px)' }, transition: 'all 0.2s' }}
                            >
                                <TwitterIcon />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://instagram.com/costa.labs"
                                target="_blank"
                                aria-label="Instagram"
                                sx={{ color: '#a1a1aa', '&:hover': { color: '#E1306C', transform: 'translateY(-2px)' }, transition: 'all 0.2s' }}
                            >
                                <InstagramIcon />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://wa.me/56993424453"
                                target="_blank"
                                aria-label="WhatsApp"
                                sx={{ color: '#a1a1aa', '&:hover': { color: '#25D366', transform: 'translateY(-2px)' }, transition: 'all 0.2s' }}
                            >
                                <WhatsAppIcon />
                            </IconButton>
                        </Stack>

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
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
