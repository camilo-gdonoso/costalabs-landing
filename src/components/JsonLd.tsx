export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'CostaLabs',
        url: 'https://www.costalabs.com',
        logo: 'https://www.costalabs.com/logo.png', // Placeholder
        sameAs: [
            'https://www.linkedin.com/company/costalabs',
            'https://twitter.com/costalabs'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-555-555-5555',
            contactType: 'customer service',
            areaServed: 'Global',
            availableLanguage: ['English', 'Spanish']
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
