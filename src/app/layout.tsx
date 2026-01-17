import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CostaLabs | Desarrollo de Software en el Norte de Chile - IA, DevOps & E-commerce",
    template: "%s | CostaLabs"
  },
  description: "Empresa de desarrollo de software en Chile. Servicios de IA, DevOps, FinOps, e-commerce y marketing digital. Presencia en Arica, Iquique, Antofagasta, Calama, La Serena y Santiago. Transformación digital para empresas chilenas.",
  metadataBase: new URL('https://www.costalabs.cl'),
  keywords: [
    // Keywords regionales del norte de Chile
    "empresa software norte de chile",
    "desarrollo software Arica",
    "desarrollo software Iquique",
    "desarrollo software Antofagasta",
    "desarrollo software Calama",
    "desarrollo software La Serena",
    "desarrollo software Santiago",
    "empresa tecnología norte chile",
    "software a medida chile",

    // Keywords técnicas y servicios principales
    "ia en chile",
    "inteligencia artificial chile",
    "machine learning chile",
    "devops chile",
    "devops servicios",
    "finops chile",
    "cloud computing chile",
    "marketing digital chile",
    "marketing digital norte",
    "e-commerce chile",
    "tienda online chile",
    "desarrollo e-commerce",

    // Keywords de servicios técnicos
    "desarrollo web chile",
    "desarrollo web moderno",
    "aplicaciones móviles chile",
    "apps móviles",
    "transformación digital chile",
    "consultoría tecnológica",
    "arquitectura cloud",
    "microservicios",
    "ci/cd pipeline",

    // Tecnologías específicas
    "Next.js chile",
    "React desarrollo",
    "Node.js servicios",
    "AWS chile",
    "azure chile",
    "google cloud chile",

    // Keywords de nicho
    "automatización procesos chile",
    "sistemas empresariales",
    "erp personalizado",
    "crm desarrollo",
    "business intelligence",
    "analítica de datos",

    // Geo-targeting combinado
    "software Tarapacá",
    "tecnología Arica Parinacota",
    "desarrollo web Antofagasta",
    "transformación digital norte grande"
  ],
  authors: [{ name: "CostaLabs Team" }],
  creator: "CostaLabs",
  publisher: "CostaLabs",
  openGraph: {
    title: "CostaLabs | Software, IA, DevOps & E-commerce en el Norte de Chile",
    description: "Desarrollo de software, IA, DevOps, FinOps y marketing digital en Chile. Presencia en Arica, Iquique, Antofagasta, Calama, La Serena y Santiago. Transformación digital para empresas chilenas.",
    url: 'https://www.costalabs.cl',
    siteName: 'CostaLabs',
    images: [
      {
        url: '/hero-dashboard-v2.png',
        width: 1200,
        height: 630,
        alt: 'CostaLabs - Desarrollo de Software en el Norte de Chile',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CostaLabs | IA, DevOps & E-commerce en Chile",
    description: "Desarrollo de software, IA, DevOps, FinOps y marketing digital en el norte de Chile.",
    images: ['/hero-dashboard-v2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "lsOxxn9Ilo9ieizN320EFVcIZOZoFVRQA7aYDR4n2EY",
  },
  other: {
    'google-site-verification': 'lsOxxn9Ilo9ieizN320EFVcIZOZoFVRQA7aYDR4n2EY',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <Providers>
          <JsonLd />
          {children}
        </Providers>
      </body>
    </html>
  );
}
