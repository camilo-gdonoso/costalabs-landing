'use client';
import { Box, Container, Typography } from '@mui/material';

export default function CertificationsSection({ disablepy }: { disablepy?: boolean }) {

    // Contenido interno reutilizable
    const Content = () => (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, // Grid de 2 columnas para layout compacto
            gap: 4,
            width: '100%'
        }}>
            {/* Google Cloud Badge */}
            <CertificationItem
                icon={<img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_light_clr_74x24px.svg" alt="Google" style={{ height: 20 }} />}
                title="Cloud Professional"
                subtitle="Architect"
                color="#4285F4"
            />

            {/* Google Cloud Associate */}
            <CertificationItem
                icon={<img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_light_clr_74x24px.svg" alt="Google" style={{ height: 20 }} />}
                title="Associate Cloud"
                subtitle="Engineer"
                color="#34A853"
            />

            {/* Datadog */}
            <CertificationItem
                icon={<Box sx={{ width: 24, height: 24, background: '#632CA6', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white', fontSize: '0.7rem' }}>DD</Box>}
                title="Datadog"
                subtitle="Certified"
                color="#632CA6"
            />

            {/* MSc DevOps */}
            <CertificationItem
                icon={<Box sx={{ width: 24, height: 24, border: '1px solid #eab308', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#eab308', fontSize: '0.6rem', fontWeight: 'bold' }}>M</Box>}
                title="Magíster en"
                subtitle="DevOps"
                color="#eab308"
            />
        </Box>
    );

    if (disablepy) {
        return <Content />;
    }

    return (
        <Box sx={{ py: 6, borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)' }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
                    <Typography variant="body2" sx={{ color: '#64748b', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600, minWidth: '200px' }}>
                        Liderado por ingenieros certificados en:
                    </Typography>
                    <Content />
                </Box>
            </Container>
        </Box>
    );
}

function CertificationItem({ icon, title, subtitle, color }: { icon: React.ReactNode, title: string, subtitle: string, color: string }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, borderRadius: 2, bgcolor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <Box>{icon}</Box>
            <Box>
                <Typography sx={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.85rem', lineHeight: 1.2 }}>
                    {title}
                </Typography>
                <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    {subtitle}
                </Typography>
            </Box>
        </Box>
    );
}
