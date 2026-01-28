import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'ArunKumar Kandasamy - Solution Architect & Tech Lead',
    template: '%s | ArunKumar Kandasamy'
  },
  description: 'Forward-focused Solution Architect with 16+ years of experience designing and delivering web platforms and enterprise products. Expert in Ruby on Rails, React, cloud architecture, and technical leadership.',
  keywords: [
    'Solution Architect',
    'Tech Lead',
    'Ruby on Rails',
    'React',
    'Next.js',
    'Cloud Architecture',
    'Performance Engineering',
    'DevOps',
    'Technical Leadership',
    'Web Development',
    'Enterprise Software',
    'API Design',
    'System Architecture'
  ],
  authors: [{ name: 'ArunKumar Kandasamy' }],
  creator: 'ArunKumar Kandasamy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arunkumar-portfolio.com',
    siteName: 'ArunKumar Kandasamy - Portfolio',
    title: 'ArunKumar Kandasamy - Solution Architect & Tech Lead',
    description: 'Forward-focused Solution Architect with 16+ years experience designing web platforms and enterprise products.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ArunKumar Kandasamy - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArunKumar Kandasamy - Solution Architect & Tech Lead',
    description: 'Forward-focused Solution Architect with 16+ years experience designing web platforms and enterprise products.',
    images: ['/og-image.jpg'],
    creator: '@arun1ly',
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fira+Code:wght@300..700&family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&family=Oxanium:wght@200..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
