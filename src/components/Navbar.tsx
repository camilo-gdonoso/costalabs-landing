'use client';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import FilterDramaIcon from '@mui/icons-material/FilterDrama'; // Using a cloud-like icon for specific tech feel or similar

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
                    <FilterDramaIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#ffffff', fontSize: 28 }} />
                    <Typography
                        variant="h6"
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex' },
                            fontFamily: 'inherit',
                            fontWeight: 600,
                            letterSpacing: '-0.02em',
                            fontSize: '1.25rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        CostaLabs
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                        {['Servicios', 'Metodología', 'Proyectos', 'Nosotros'].map((page) => (
                            <Button key={page} sx={{
                                color: '#a1a1aa',
                                fontSize: '0.9rem',
                                textTransform: 'none',
                                fontWeight: 500,
                                '&:hover': { color: 'white', background: 'transparent' }
                            }}>
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Button variant="contained" className="btn-primary" sx={{
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
                    }}>
                        Agendar Llamada
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
