export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'ArunKumar Kandasamy',
    jobTitle: 'Solution Architect & Tech Lead',
    description: 'Forward-focused Solution Architect with 16+ years of experience designing and delivering web platforms and enterprise products.',
    url: 'https://arunkumar-portfolio.com',
    email: 'k.arun@outlook.com',
    telephone: '+91 9003457395',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://linkedin.com/in/arun1ly',
      'https://github.com/arunkumark1ly',
    ],
    knowsAbout: [
      'Solution Architecture',
      'Ruby on Rails',
      'React',
      'Next.js',
      'Cloud Architecture',
      'Performance Engineering',
      'DevOps',
      'Technical Leadership',
      'API Design',
      'System Architecture',
      'PostgreSQL',
      'Docker',
      'CI/CD',
    ],
    offers: {
      '@type': 'Service',
      serviceType: 'Technical Consulting & Solution Architecture',
      description: 'Expert consultation on web platform architecture, performance optimization, and technical delivery leadership',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
