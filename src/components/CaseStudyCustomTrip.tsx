'use client';
import { Box, Container, Typography, Button, Chip } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';

export default function CaseStudyCustomTrip() {
    return (
        <Box sx={{ py: 15, background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(30,41,59,0.3) 100%)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'center' }}>

                    {/* Text Content */}
                    <Box>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', mb: 2, px: 2, py: 0.5, borderRadius: 20, background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.2)' }}>
                            <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#00d4ff', mr: 1 }} />
                            <Typography variant="caption" sx={{ color: '#00d4ff', fontWeight: 700, letterSpacing: 1 }}>CASO DE ÉXITO</Typography>
                        </Box>

                        <Typography variant="h3" sx={{ color: 'white', fontWeight: 800, mb: 2, lineHeight: 1.1 }}>
                            CustomTrip: <br />
                            <span className="text-gradient">Tu propio ecosistema de reservas.</span>
                        </Typography>

                        <Typography sx={{ color: '#94a3b8', fontSize: '1.1rem', mb: 4, lineHeight: 1.6 }}>
                            Diseñamos y desarrollamos una plataforma integral de gestión de alquileres temporales, similar a Airbnb o Booking.com, pero 100% personalizada y sin comisiones de terceros.
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 6 }}>
                            <Chip icon={<SpeedIcon sx={{ fontSize: '1rem !important' }} />} label="CI/CD Automatizado" sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <Chip icon={<SecurityIcon sx={{ fontSize: '1rem !important' }} />} label="Pagos Seguros" sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <Chip icon={<StorageIcon sx={{ fontSize: '1rem !important' }} />} label="Docker & Postgres" sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.1)' }} />
                        </Box>

                        <Button
                            variant="contained"
                            endIcon={<LaunchIcon />}
                            href="https://app.costalabs.cl"
                            target="_blank"
                            sx={{
                                bgcolor: '#00d4ff',
                                color: 'black',
                                fontWeight: 700,
                                py: 1.5,
                                px: 4,
                                '&:hover': { bgcolor: '#40e0ff' }
                            }}
                        >
                            Ver Demo en Vivo
                        </Button>
                    </Box>

                    {/* Features Grid */}
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                        {/* Viajeros */}
                        <FeatureCard
                            title="Para Viajeros"
                            color="#27c93f"
                            items={[
                                "Búsqueda avanzada con filtros",
                                "Reservas en tiempo real",
                                "Integración MercadoPago/Transbank",
                                "Perfil de usuario completo"
                            ]}
                        />
                        {/* Hosts */}
                        <FeatureCard
                            title="Para Anfitriones"
                            color="#ffbd2e"
                            items={[
                                "Panel de gestión de propiedades",
                                "Geolocalización con Leaflet",
                                "Calendario de disponibilidad",
                                "Gestión de precios y fotos"
                            ]}
                        />
                        {/* Admin */}
                        <FeatureCard
                            title="Panel Admin"
                            color="#ff5f56"
                            items={[
                                "Dashboard de control total",
                                "Aprobación de publicaciones",
                                "Métricas y usuarios",
                                "Supervisión del negocio"
                            ]}
                        />
                        {/* Tech */}
                        <FeatureCard
                            title="Ingeniería (Tech)"
                            color="#a855f7"
                            items={[
                                "Arquitectura escalable en Docker",
                                "Notificaciones automáticas (Resend)",
                                "Autenticación robusta",
                                "Base de datos PostgreSQL"
                            ]}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

function FeatureCard({ title, color, items }: { title: string, color: string, items: string[] }) {
    return (
        <Box sx={{
            p: 3,
            borderRadius: 4,
            bgcolor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.05)',
            height: '100%',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'translateY(-5px)', bgcolor: 'rgba(255,255,255,0.05)' }
        }}>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: color }} />
                {title}
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2, '& li': { color: '#94a3b8', fontSize: '0.9rem', mb: 1 } }}>
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </Box>
        </Box>
    );
}
