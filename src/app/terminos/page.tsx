'use client';
import { Box, Container, Typography, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function TermsPage() {
    return (
        <main className="bg-stars" style={{ minHeight: '100vh', background: 'var(--background)' }}>
            <Navbar />

            <Box sx={{ pt: 15, pb: 10 }}>
                <Container maxWidth="md">
                    <Typography variant="h1" sx={{
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        fontWeight: 800,
                        color: 'white',
                        mb: 2,
                        textAlign: 'center'
                    }}>
                        Términos y Condiciones
                    </Typography>
                    <Typography sx={{ color: '#94a3b8', textAlign: 'center', mb: 8 }}>
                        Última actualización: 27 de noviembre de 2024
                    </Typography>

                    <Paper sx={{
                        p: { xs: 3, md: 6 },
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 4
                    }}>
                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                1. Aceptación de los Términos
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Al acceder y utilizar los sitios web de CostaLabs (en adelante, "nuestros Sitios"), incluyendo www.costalabs.cl y cualquier subdominio asociado, usted acepta estar legalmente obligado por estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, le rogamos que no utilice nuestros Sitios.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                2. Propiedad Intelectual
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Todo el contenido presente en nuestros Sitios, incluyendo pero no limitado a textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de CostaLabs o de sus proveedores de contenido y está protegido por las leyes chilenas e internacionales de propiedad intelectual.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                3. Uso Permitido
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Se le concede un permiso limitado para acceder y hacer uso personal de nuestros Sitios. Este permiso no incluye: (a) la reventa o uso comercial de nuestros Sitios o su contenido; (b) la recopilación y uso de listados de productos, descripciones o precios; (c) cualquier uso derivado de nuestros Sitios o su contenido; (d) la descarga o copia de información de cuenta para el beneficio de otro comerciante; o (e) el uso de minería de datos, robots o herramientas similares de recopilación y extracción de datos.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                4. Precisión de la Información
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                CostaLabs se esfuerza por proporcionar información precisa y actualizada en nuestros Sitios. Sin embargo, no garantizamos que toda la información sea exacta, completa o actual. Nos reservamos el derecho de corregir cualquier error, inexactitud u omisión, y de cambiar o actualizar la información en cualquier momento sin previo aviso.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                5. Enlaces a Terceros
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Nuestros Sitios pueden contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para su conveniencia. CostaLabs no tiene control sobre el contenido de estos sitios y no asume responsabilidad por el contenido de, o las prácticas de privacidad empleadas por, otros sitios.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                6. Limitación de Responsabilidad
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                En la medida máxima permitida por la ley, CostaLabs no será responsable por daños directos, indirectos, incidentales, consecuentes o punitivos resultantes de su acceso o uso de nuestros Sitios.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                7. Ley Aplicable
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de la República de Chile, sin dar efecto a ningún principio de conflictos de leyes.
                            </Typography>
                        </Box>

                        <Box component="section">
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                8. Cambios en los Términos
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en nuestros Sitios. Su uso continuado de nuestros Sitios después de cualquier cambio constituirá su aceptación de tales modificaciones.
                            </Typography>
                        </Box>
                    </Paper>
                </Container>
            </Box>

            <WhatsAppButton />
        </main>
    );
}
