'use client';
import { Box, Container, Typography, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function PrivacyPage() {
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
                        Política de Privacidad
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
                                1. Sobre esta Política de Privacidad
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Su privacidad es importante para nosotros. Esta Política de Privacidad establece la base sobre la cual nosotros, CostaLabs SpA, y nuestras filiales (colectivamente 'Costalabs', 'nosotros' o 'nos'), cuidamos de su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, procesamos, compartimos, divulgamos y almacenamos su Información Personal, recopilada a través de sus interacciones con nosotros; incluyendo a través de nuestro sitio web (el 'Sitio'), proceso de ventas, actividades de marketing y otros medios.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                2. Sobre nosotros
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Costalabs SpA es una Sociedad por Acciones con sede en Iquique, Chile. Para los fines de esta Política de Privacidad, somos el controlador de datos de su Información Personal como se describe en este documento, a menos que se especifique expresamente lo contrario.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                3. Información Personal que recopilamos sobre usted
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Recopilamos Información Personal sobre usted a través de nuestras interacciones y a través de nuestros servicios. Usted proporciona algunos de estos datos directamente, y obtenemos otros al recopilar datos sobre sus interacciones, uso y experiencias con nuestros productos. La Información Personal que recopilamos depende del contexto de sus interacciones con nosotros y de las elecciones que realice.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                4. Cómo utilizamos su Información Personal
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Utilizamos su Información Personal para varios propósitos, incluyendo: proporcionar nuestros servicios, mejorar nuestros productos, comunicarnos con usted, realizar análisis y personalizar su experiencia.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                5. Base legal para procesar su Información Personal
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Nos basamos en varias bases legales para recopilar y procesar su Información Personal, incluyendo: su consentimiento, la ejecución de un contrato, obligaciones legales y nuestros intereses legítimos.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                6. Cookies y otras tecnologías
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Utilizamos cookies y otras tecnologías para reconocer su navegador o dispositivo y para proporcionar y mejorar nuestros productos y servicios.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                7. Sus derechos como Titular de Datos
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Usted tiene ciertos derechos con respecto a su Información Personal, incluyendo el derecho a acceder, corregir, eliminar y portar sus datos.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                8. Cómo compartimos su Información Personal
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Podemos compartir su Información Personal con nuestras filiales, proveedores de servicios y otros terceros en ciertas circunstancias.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                9. Transferencias internacionales de datos
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Su Información Personal puede ser transferida y procesada en países distintos a Chile. Tomamos medidas para garantizar que estas transferencias se realicen de acuerdo con las leyes de protección de datos aplicables.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                10. Seguridad de la Información
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Implementamos medidas de seguridad técnicas y organizativas para proteger su Información Personal contra el acceso, la alteración o la destrucción no autorizados.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                11. Retención de datos
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Conservamos su Información Personal solo durante el tiempo necesario para los fines para los que fue recopilada, o según lo requiera la ley.
                            </Typography>
                        </Box>

                        <Box component="section" sx={{ mb: 4 }}>
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                12. Cambios a esta Política de Privacidad
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos sobre cualquier cambio importante.
                            </Typography>
                        </Box>

                        <Box component="section">
                            <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700, mb: 2 }}>
                                13. Cómo contactarnos
                            </Typography>
                            <Typography sx={{ color: '#ccc', lineHeight: 1.8 }}>
                                Si tiene alguna pregunta sobre esta Política de Privacidad o sobre cómo manejamos su Información Personal, por favor contáctenos en <strong style={{ color: 'white' }}>contacto@costalabs.cl</strong>
                            </Typography>
                        </Box>
                    </Paper>
                </Container>
            </Box>

            <WhatsAppButton />
        </main>
    );
}
