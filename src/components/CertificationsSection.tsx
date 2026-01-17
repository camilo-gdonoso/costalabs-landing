'use client';
import { Box, Container, Typography } from '@mui/material';

export default function CertificationsSection() {
    return (
        <Box sx={{ py: 6, borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)' }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: { xs: 4, md: 8 }
                }}>
                    <Typography variant="body2" sx={{ color: '#64748b', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600 }}>
                        Liderado por ingenieros certificados en:
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 6,
                        alignItems: 'center',
                        opacity: 0.7
                    }}>

                        {/* Google Cloud Badge (SVG Construct) */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <img
                                src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_light_clr_74x24px.svg"
                                alt="Google"
                                style={{ height: 20 }}
                            />
                            <Box sx={{ borderLeft: '1px solid #444', pl: 1.5 }}>
                                <Typography sx={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.8rem', lineHeight: 1.1 }}>
                                    Cloud Professional<br />
                                    Architect
                                </Typography>
                            </Box>
                        </Box>

                        {/* Google Cloud Associate */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <img
                                src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_light_clr_74x24px.svg"
                                alt="Google"
                                style={{ height: 20 }}
                            />
                            <Box sx={{ borderLeft: '1px solid #444', pl: 1.5 }}>
                                <Typography sx={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.8rem', lineHeight: 1.1 }}>
                                    Associate Cloud<br />
                                    Engineer
                                </Typography>
                            </Box>
                        </Box>

                        {/* Datadog (Text based) */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box sx={{ width: 24, height: 24, background: '#632CA6', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white', fontSize: '0.7rem' }}>DD</Box>
                            <Box sx={{ borderLeft: '1px solid #444', pl: 1.5 }}>
                                <Typography sx={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.8rem', lineHeight: 1.1 }}>
                                    Datadog<br />
                                    Certified
                                </Typography>
                            </Box>
                        </Box>

                        {/* MSc DevOps (Text based) */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box sx={{ width: 24, height: 24, border: '1px solid #eab308', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#eab308', fontSize: '0.6rem', fontWeight: 'bold' }}>M</Box>
                            <Box sx={{ borderLeft: '1px solid #444', pl: 1.5 }}>
                                <Typography sx={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.8rem', lineHeight: 1.1 }}>
                                    Magíster en<br />
                                    DevOps
                                </Typography>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
