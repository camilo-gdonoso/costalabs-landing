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
    default: "CostaLabs | Soluciones Tecnológicas y Desarrollo Web",
    template: "%s | CostaLabs"
  },
  description: "CostaLabs transforma negocios con desarrollo web a medida, aplicaciones móviles y consultoría tecnológica. Expertos en Next.js y transformación digital.",
  metadataBase: new URL('https://www.costalabs.com'), // Reemplazar con dominio real cuando exista
  keywords: ["Desarrollo Web", "Next.js", "Apps Móviles", "Transformación Digital", "Software a Medida", "Tecnología Corporativa"],
  authors: [{ name: "CostaLabs Team" }],
  creator: "CostaLabs",
  publisher: "CostaLabs",
  openGraph: {
    title: "CostaLabs | El Futuro Digital de tu Empresa",
    description: "Impulsamos tu negocio con soluciones tecnológicas de vanguardia. Desarrollo web, apps y diseño UX/UI.",
    url: 'https://www.costalabs.com',
    siteName: 'CostaLabs',
    images: [
      {
        url: '/hero-illustration.png', // Usamos la imagen generada como preview
        width: 1200,
        height: 630,
        alt: 'CostaLabs Soluciones Digitales',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CostaLabs",
    description: "Soluciones tecnológicas corporativas y desarrollo de software a medida.",
    images: ['/hero-illustration.png'],
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
