export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://costalabs.cl',
        name: 'CostaLabs',
        description: 'Empresa de desarrollo de software en el norte de Chile. Servicios de IA, DevOps, FinOps, e-commerce y marketing digital en Arica, Iquique y Antofagasta.',
        url: 'https://costalabs.cl',
        logo: 'https://costalabs.cl/logo.svg',
        image: 'https://costalabs.cl/hero-dashboard-v2.png',
        priceRange: '$$',
        telephone: '+569 9342 4453',
        email: 'contacto@costalabs.cl',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Arturo Fernandez #2032',
            addressLocality: 'Iquique',
            addressRegion: 'Tarapacá',
            postalCode: '1100000',
            addressCountry: 'CL'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -20.2307,  // Coordenadas centrales de Iquique (oficina principal)
            longitude: -70.1355
        },
        // Coordenadas adicionales para cobertura multi-ciudad
        additionalProperty: [
            {
                '@type': 'PropertyValue',
                name: 'Arica GPS',
                value: '-18.4783,-70.3126'
            },
            {
                '@type': 'PropertyValue',
                name: 'Iquique GPS',
                value: '-20.2307,-70.1355'
            },
            {
                '@type': 'PropertyValue',
                name: 'Antofagasta GPS',
                value: '-23.6509,-70.3975'
            },
            {
                '@type': 'PropertyValue',
                name: 'Calama GPS',
                value: '-22.4667,-68.9333'
            },
            {
                '@type': 'PropertyValue',
                name: 'La Serena GPS',
                value: '-29.9027,-71.2519'
            },
            {
                '@type': 'PropertyValue',
                name: 'Santiago GPS',
                value: '-33.4489,-70.6693'
            }
        ],
        areaServed: [
            {
                '@type': 'City',
                name: 'Arica',
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: -18.4783,
                    longitude: -70.3126
                }
            },
            {
                '@type': 'City',
                name: 'Iquique',
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: -20.2307,
                    longitude: -70.1355
                }
            },
            {
                '@type': 'City',
                name: 'Antofagasta',
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: -23.6509,
                    longitude: -70.3975
                }
            },
            {
                '@type': 'City',
                name: 'Calama',
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: -22.4667,
                    longitude: -68.9333
                }
            },
            {
                '@type': 'City',
                name: 'La Serena',
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: -29.9027,
                    longitude: -71.2519
                }
            },
            {
                '@type': 'City',
                name: 'Santiago',
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: -33.4489,
                    longitude: -70.6693
                }
            },
            {
                '@type': 'State',
                name: 'Arica y Parinacota'
            },
            {
                '@type': 'State',
                name: 'Tarapacá'
            },
            {
                '@type': 'State',
                name: 'Antofagasta'
            },
            {
                '@type': 'State',
                name: 'Coquimbo'
            },
            {
                '@type': 'State',
                name: 'Región Metropolitana'
            },
            {
                '@type': 'Country',
                name: 'Chile'
            }
        ],
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
            }
        ],
        sameAs: [
            'https://www.linkedin.com/company/costalabs',
            'https://twitter.com/costalabs',
            // Agregar más redes sociales cuando existan
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Servicios de Desarrollo de Software y Tecnología',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Inteligencia Artificial (IA)',
                        description: 'Desarrollo de soluciones de IA y Machine Learning personalizadas para empresas chilenas'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'DevOps y Cloud',
                        description: 'Servicios de DevOps, CI/CD, automatización y arquitectura cloud en AWS, Azure y Google Cloud'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'FinOps',
                        description: 'Optimización de costos cloud y gestión financiera de infraestructura tecnológica'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'E-commerce',
                        description: 'Desarrollo de tiendas online y plataformas de comercio electrónico personalizadas'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Marketing Digital',
                        description: 'Estrategias de marketing digital, SEO, SEM y gestión de redes sociales'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Desarrollo Web',
                        description: 'Sitios web modernos y aplicaciones web con Next.js, React y tecnologías de vanguardia'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Aplicaciones Móviles',
                        description: 'Apps nativas y multiplataforma para iOS y Android'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Transformación Digital',
                        description: 'Consultoría y desarrollo de soluciones tecnológicas empresariales integrales'
                    }
                }
            ]
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '12'
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
