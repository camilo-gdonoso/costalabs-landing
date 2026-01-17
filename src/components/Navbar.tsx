'use client';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

export default function Navbar() {
    return (
        <AppBar position="fixed" sx={{
            background: 'rgba(10, 10, 11, 0.6)',
            backdropFilter: 'blur(16px)',
            boxShadow: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            transition: 'all 0.3s ease'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ height: 72 }}>
                    <Box
                        component="a"
                        href="/"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            mr: 2
                        }}
                    >
                        {/* Mobile Logo */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                            <img src="/logo.svg" alt="CostaLabs" style={{ height: 32, width: 'auto' }} />
                        </Box>

                        {/* Desktop Logo */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                            <img src="/logo.svg" alt="CostaLabs" style={{ height: 40, width: 'auto' }} />
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
                                fontWeight: 800,
                                color: '#ffffff',
                                fontSize: '28px',
                                letterSpacing: '-0.03rem',
                                lineHeight: 1,
                                ml: -0.7 // Acercar texto a la C (menos agresivo)
                            }}
                        >
                            ostaLabs
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                        {[
                            { name: 'Servicios', id: 'servicios' },
                            { name: 'Stack', id: 'stack' },
                            { name: 'Sectores', id: 'sectores' }, // Replacing 'Proyectos' with 'Sectores' as per dossier
                            { name: 'ADN', id: 'adn' } // Replacing 'Nosotros' with 'ADN'
                        ].map((item) => (
                            <Button
                                key={item.name}
                                component="a"
                                href={`#${item.id}`}
                                sx={{
                                    color: '#a1a1aa',
                                    fontSize: '0.9rem',
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    '&:hover': { color: 'white', background: 'transparent' }
                                }}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                    <Button
                        variant="contained"
                        href="/agendar"
                        className="btn-primary"
                        sx={{
                            ml: 3,
                            display: { xs: 'none', md: 'flex' },
                            background: 'white',
                            color: 'black',
                            '&:hover': { background: '#dedede' },
                            borderRadius: '999px',
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            px: 3,
                            py: 0.8
                        }}
                    >
                        Agendar
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
