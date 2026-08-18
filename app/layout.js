import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://ruta16.com'),
  title: {
    default: 'Mariscos Ruta 16 y Más — La Ruta del Sabor · Pasadena, TX',
    template: '%s — Mariscos Ruta 16 y Más',
  },
  description:
    'Aguachiles, torres y zarandeados del asador — servidos como en Culiacán, aquí en Pasadena, TX.',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'Mariscos Ruta 16 y Más',
    title: 'Mariscos Ruta 16 y Más — La Ruta del Sabor',
    description:
      'Aguachiles, torres y zarandeados del asador — servidos como en Culiacán, aquí en Pasadena, TX.',
    images: ['/media/torre-mariscos.webp'],
  },
  icons: { icon: '/brand/ruta16-icon.png', apple: '/brand/ruta16-icon.png' },
};

export const viewport = {
  themeColor: '#141722',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}
