'use client';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

export default function CertificationsSection() {
    // Cuando tengas las imágenes reales, guárdalas en public/certs/ con estos nombres
    // O cambia las rutas aquí.
    const certifications = [
        {
            title: "Professional Cloud Architect",
            issuer: "Google Cloud",
            image: "https://images.credly.com/images/5e381ebf-10c0-484c-83b3-85817d2a5a54/gcp-professional-cloud-architect.png", // URL pública real de ejemplo (puedes cambiarla por tu archivo local)
            width: 150
        },
        {
            title: "Associate Cloud Engineer",
            issuer: "Google Cloud",
            image: "https://images.credly.com/images/3d6322b7-8d76-4fb7-87dd-6302484a0d84/gcp-associate-cloud-engineer.png",
            width: 150,
            link: "https://www.credly.com/badges/a849e303-c7b8-4462-8456-192a0b95f1cd" // Link al perfil real
        },
        {
            title: "Datadog Certified",
            issuer: "Datadog",
            image: "https://images.credly.com/images/6df26164-3d07-4e78-831d-258053704203/Datadog_Certified_Professional.png", // Ejemplo genérico, actualízalo si es otro
            width: 150
        },
        // Placeholder para el Master, ya que no tiene badge standard de credly usualmente
        /*
        {
            title: "Magíster en DevOps",
            issuer: "Universidad",
            image: "/certs/master-devops.png", // Sube tu diploma aquí
            width: 200
        }
        */
    ];

    return (
        <Box sx={{ py: 10, borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(20,20,20,0.6) 100%)' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="overline" sx={{ color: '#00d4ff', letterSpacing: 2, fontWeight: 600 }}>
                        EXCELENCIA TÉCNICA ACREDITADA
                    </Typography>
                    <Typography variant="h3" sx={{ color: 'white', fontWeight: 700, mt: 1, mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
                        Certificados y Credenciales
                    </Typography>
                    <Typography sx={{ color: '#94a3b8', maxWidth: '600px', mx: 'auto' }}>
                        Validamos nuestra experiencia con las certificaciones más exigentes de la industria tecnológica.
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: { xs: 6, md: 10 },
                    alignItems: 'center'
                }}>
                    {certifications.map((cert, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                                transition: 'transform 0.3s ease',
                                '&:hover': { transform: 'scale(1.05)' }
                            }}
                        >
                            <Box sx={{
                                position: 'relative',
                                width: cert.width,
                                height: cert.width,
                                filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.05))',
                                '& img': { transition: 'transform 0.3s' },
                                '&:hover img': { transform: 'scale(1.1)' }
                            }}>
                                {/* Si hay link, envolver en anchor tag */}
                                {cert.link ? (
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    </a>
                                ) : (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                )}
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>
                                    {cert.title}
                                </Typography>
                                <Typography sx={{ color: '#64748b', fontSize: '0.8rem' }}>
                                    {cert.issuer}
                                </Typography>
                            </Box>
                        </Box>
                    ))}

                    {/* Badge manual para Master si no hay imagen */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.05)' }
                    }}>
                        <Box sx={{
                            width: 140,
                            height: 140,
                            borderRadius: '50%',
                            border: '2px solid #eab308',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(234, 179, 8, 0.1)',
                            boxShadow: '0 0 20px rgba(234, 179, 8, 0.2)'
                        }}>
                            <Typography variant="h5" sx={{ color: '#eab308', fontWeight: 800 }}>MSc</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>
                                Magíster en DevOps
                            </Typography>
                            <Typography sx={{ color: '#64748b', fontSize: '0.8rem' }}>
                                & Cloud Computing
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
}
