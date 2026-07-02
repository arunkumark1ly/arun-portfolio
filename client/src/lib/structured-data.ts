import { getConsultingProjects } from "@/data/consulting-projects";
import {
  DEFAULT_OG_IMAGE,
  PROFILE_LINKS,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site-config";

interface SeoLike {
  title?: string;
  description?: string;
}

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROFESSIONAL_SERVICE_ID = `${SITE_URL}/#consulting-service`;

export function buildPersonSchema(description?: string) {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    jobTitle: "Engineering Lead",
    description,
    url: `${SITE_URL}/`,
    image: DEFAULT_OG_IMAGE,
    email: PROFILE_LINKS.email,
    telephone: "+91-9360-740047",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "professional inquiries",
      email: PROFILE_LINKS.email,
      telephone: "+91-9360-740047",
      availableLanguage: ["English", "Tamil"],
      areaServed: "Worldwide",
    },
    sameAs: [
      PROFILE_LINKS.linkedin,
      PROFILE_LINKS.github,
      PROFILE_LINKS.stackoverflow,
      PROFILE_LINKS.voicehunt,
      PROFILE_LINKS.resumePdf,
    ],
    knowsAbout: [
      "Ruby on Rails",
      "React.js",
      "Next.js",
      "Solutions Architecture",
      "Technical Consulting",
      "Cloud Computing",
      "Full-Stack Development",
      "Frontend Engineering",
      "AI-augmented engineering",
      "Claude",
      "Cursor IDE",
      "LLM-based coding assistants",
    ],
    worksFor: {
      "@type": "Organization",
      name: "ThinkPro Ventures",
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    publisher: { "@id": PERSON_ID },
    inLanguage: "en",
  };
}

export function buildWebPageSchema(
  path: string,
  name: string,
  description?: string,
) {
  const url = absoluteUrl(path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    inLanguage: "en",
  };
}

export function buildProfilePageSchema(description?: string) {
  return {
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: `${SITE_URL}/`,
    name: `${SITE_NAME} — Engineering Lead`,
    description,
    mainEntity: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en",
  };
}

export function buildBreadcrumbSchema(path: string) {
  const items: { name: string; url: string }[] = [
    { name: "Home", url: absoluteUrl("/") },
  ];

  if (path === "/consulting") {
    items.push({
      name: "Consulting Engagements",
      url: absoluteUrl("/consulting"),
    });
  }

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildProfessionalServiceSchema(description?: string) {
  return {
    "@type": "ProfessionalService",
    "@id": PROFESSIONAL_SERVICE_ID,
    name: "Independent Technical Consulting",
    description,
    url: absoluteUrl("/consulting"),
    provider: { "@id": PERSON_ID },
    areaServed: "Worldwide",
    serviceType: [
      "Frontend Engineering",
      "Technical Architecture",
      "Production Deployment",
      "UI/UX Implementation",
    ],
  };
}

export function buildCreativeWorkSchemas() {
  return getConsultingProjects().map((project) => {
    const displayName = project.nameAccent
      ? `${project.name} ${project.nameAccent}`
      : project.name;
    return {
      "@type": "CreativeWork",
      "@id": `${absoluteUrl(`/consulting#${project.slug}`)}#creativework`,
      name: displayName,
      description: project.tagline,
      url: project.website,
      author: { "@id": PERSON_ID },
      genre: project.category,
      keywords: project.techStack.map((t) => t.label).join(", "),
    };
  });
}

export function buildFaqSchema(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildStructuredDataGraph(
  seo: SeoLike,
  options: {
    path?: string;
    pageName?: string;
    includeProfilePage?: boolean;
    includeCreativeWorks?: boolean;
    includeBreadcrumbs?: boolean;
    faqs?: { question: string; answer: string }[];
  } = {},
) {
  const path = options.path ?? "/";
  const pageName = options.pageName ?? seo.title ?? SITE_NAME;

  const graph: Record<string, unknown>[] = [
    buildPersonSchema(seo.description),
    buildWebSiteSchema(),
    buildWebPageSchema(path, pageName, seo.description),
  ];

  if (options.includeProfilePage && path === "/") {
    graph.push(buildProfilePageSchema(seo.description));
  }

  if (options.includeBreadcrumbs && path !== "/") {
    graph.push(buildBreadcrumbSchema(path));
  }

  if (options.includeCreativeWorks) {
    graph.push(buildProfessionalServiceSchema(seo.description));
    graph.push(...buildCreativeWorkSchemas());
  }

  if (options.faqs?.length) {
    graph.push(buildFaqSchema(options.faqs));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
