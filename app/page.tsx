import { Metadata } from 'next';
import StructuredData from '@/StructuredData';
import HomePage from '@/HomePage';

export const metadata: Metadata = {
  title: 'ArunKumar Kandasamy - Solution Architect & Tech Lead',
  description: 'Forward-focused Solution Architect with 16+ years of experience designing and delivering web platforms and enterprise products. Expert in Ruby on Rails, React, cloud architecture, and technical leadership.',
  openGraph: {
    title: 'ArunKumar Kandasamy - Solution Architect & Tech Lead',
    description: 'Forward-focused Solution Architect with 16+ years experience designing web platforms and enterprise products.',
    url: '/',
    type: 'website',
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
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <HomePage />
    </>
  );
}
