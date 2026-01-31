interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

const DEFAULT_SEO: SEOProps = {
  title: "Technical Lead & Solutions Architect | Engineering Leadership | Co-founder @ ThinkPro Technologies",
  description: "With 16+ years of experience designing and delivering web platforms and enterprise products across Agile and Hybrid delivery models. Blend hands-on architecture and engineering leadership (Ruby on Rails, cloud, performance, distributed systems) with end-to-end technical delivery ownership (scope, planning, risk management, release governance) to ship predictable outcomes.",
  keywords: "Lead Technical Consultant, Technical Product Manager, Ruby on Rails Expert, React.js Developer, Solutions Architect, Agile Leadership, Full-Stack Development, SaaS Product Management, Technical Delivery, Cloud Architecture",
  image: "https://arunkumarkandasamy.com/arunkumar-k.png",
  url: "https://arunkumarkandasamy.com",
  type: "website",
  author: "ArunKumar Kandasamy"
};

export function updateSEO(props: SEOProps = {}) {
  const seo = { ...DEFAULT_SEO, ...props };
  
  // Update page title
  document.title = seo.title || DEFAULT_SEO.title || '';
  
  // Update or create meta description
  updateMetaTag('description', seo.description);
  updateMetaTag('keywords', seo.keywords);
  updateMetaTag('author', seo.author);
  
  // Update Open Graph tags
  updateMetaProperty('og:title', seo.title);
  updateMetaProperty('og:description', seo.description);
  updateMetaProperty('og:image', seo.image);
  updateMetaProperty('og:url', seo.url);
  updateMetaProperty('og:type', seo.type);
  updateMetaProperty('og:site_name', 'ArunKumar Kandasamy');
  
  // Update Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', seo.title);
  updateMetaTag('twitter:description', seo.description);
  updateMetaTag('twitter:image', seo.image);
  updateMetaTag('twitter:creator', '@arunkumarkandasamy');
  
  // Update canonical URL
  updateLinkTag('canonical', seo.url);
  
  // Add structured data
  addStructuredData(seo);
}

function updateMetaTag(name: string, content?: string) {
  if (!content) return;
  
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!tag) {
    tag = document.createElement('meta');
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function updateMetaProperty(property: string, content?: string) {
  if (!content) return;
  
  let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function updateLinkTag(rel: string, href?: string) {
  if (!href) return;
  
  let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!tag) {
    tag = document.createElement('link');
    tag.rel = rel;
    document.head.appendChild(tag);
  }
  tag.href = href;
}

function addStructuredData(seo: SEOProps) {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Person structured data
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "ArunKumar Kandasamy",
    "jobTitle": "Solutions Architect & Product Manager",
    "description": seo.description,
    "url": seo.url,
    "image": seo.image,
    "sameAs": [
      "https://linkedin.com/in/arunkumarkandasamy",
      "https://github.com/arunkumarkandasamy",
      "https://twitter.com/arunkumarkandasamy"
    ],
    "knowsAbout": [
      "Ruby on Rails",
      "React.js",
      "Solutions Architecture",
      "Product Management",
      "Agile Leadership",
      "Cloud Computing",
      "Full-Stack Development"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Consultant"
    }
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(personData);
  document.head.appendChild(script);
}

// Hook for React components
export function useSEO(props: SEOProps) {
  return {
    updateSEO: () => updateSEO(props)
  };
}
