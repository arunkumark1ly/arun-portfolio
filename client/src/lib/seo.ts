import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
} from "@/lib/site-config";
import { buildStructuredDataGraph } from "@/lib/structured-data";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  imageSecureUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageType?: string;
  imageAlt?: string;
  url?: string;
  type?: string;
  author?: string;
  path?: string;
  structuredData?: {
    includeProfilePage?: boolean;
    includeCreativeWorks?: boolean;
    faqs?: { question: string; answer: string }[];
  };
}

const DEFAULT_DESCRIPTION =
  "With 16+ years of experience designing and delivering web platforms and enterprise products across Agile and Hybrid delivery models. Blend hands-on architecture and engineering leadership (Ruby on Rails, cloud, performance, distributed systems) with end-to-end technical delivery ownership (scope, planning, risk management, release governance) to ship predictable outcomes.";

export const DEFAULT_SEO: SEOProps = {
  title: "ArunKumar Kandasamy - Engineering Lead",
  description: DEFAULT_DESCRIPTION,
  keywords:
    "Lead Technical Consultant, Technical Product Manager, Ruby on Rails Expert, React.js Developer, Solutions Architect, Agile Leadership, Full-Stack Development, SaaS Product Management, Technical Delivery, Cloud Architecture",
  image: DEFAULT_OG_IMAGE,
  imageSecureUrl: DEFAULT_OG_IMAGE,
  imageWidth: 1200,
  imageHeight: 630,
  imageType: "image/png",
  imageAlt: "ArunKumar Kandasamy - Engineering Lead",
  url: absoluteUrl("/"),
  path: "/",
  type: "website",
  author: SITE_NAME,
  structuredData: {
    includeProfilePage: true,
  },
};

export const HOME_FAQS = [
  {
    question: "What is ArunKumar Kandasamy's professional focus?",
    answer:
      "ArunKumar Kandasamy is an Engineering Lead and technical consultant with 16+ years of experience in Ruby on Rails, React, Next.js, cloud architecture, and end-to-end technical delivery for enterprise and SaaS platforms.",
  },
  {
    question: "What consulting services does Arun offer?",
    answer:
      "Independent consulting engagements covering modern frontend engineering, UI/UX implementation, technical architecture, production deployment (Terraform, AWS), and full-cycle delivery ownership from concept to production.",
  },
  {
    question: "What technologies does Arun specialize in?",
    answer:
      "Ruby on Rails, React, Next.js, PostgreSQL, Redis, AWS, Docker, CI/CD (GitHub Actions, Jenkins), Tailwind CSS, and performance optimization for high-traffic web platforms.",
  },
  {
    question: "Where is ArunKumar Kandasamy based?",
    answer:
      "Chennai, India. Available for remote consulting engagements and technical leadership roles.",
  },
  {
    question: "How can I contact Arun for consulting or opportunities?",
    answer:
      "Email kandasamy1ly@gmail.com, book a conversation via the Calendly embed on the portfolio, or connect on LinkedIn at linkedin.com/in/arun1ly.",
  },
  {
    question: "What consulting projects has Arun delivered?",
    answer:
      "Case studies include The Legacy Apparels (thelegacyapparels.com) — a fashion brand website built with HTML, Tailwind CSS, JavaScript, deployed via Terraform and AWS S3. More engagements are documented at /consulting.",
  },
] as const;

export function updateSEO(props: SEOProps = {}) {
  const seo = { ...DEFAULT_SEO, ...props };
  const path = props.path ?? (seo.url?.replace(/https?:\/\/[^/]+/, "") || "/");
  const pageName = seo.title ?? DEFAULT_SEO.title ?? SITE_NAME;

  document.title = seo.title || DEFAULT_SEO.title || "";

  updateMetaTag("description", seo.description);
  updateMetaTag("keywords", seo.keywords);
  updateMetaTag("author", seo.author);

  updateMetaProperty("og:title", seo.title);
  updateMetaProperty("og:description", seo.description);
  updateMetaProperty("og:image", seo.image);
  updateMetaProperty("og:image:secure_url", seo.imageSecureUrl);
  updateMetaProperty("og:image:width", seo.imageWidth?.toString());
  updateMetaProperty("og:image:height", seo.imageHeight?.toString());
  updateMetaProperty("og:image:type", seo.imageType);
  updateMetaProperty("og:image:alt", seo.imageAlt);
  updateMetaProperty("og:url", seo.url);
  updateMetaProperty("og:type", seo.type);
  updateMetaProperty("og:site_name", SITE_NAME);

  updateMetaTag("twitter:card", "summary_large_image");
  updateMetaTag("twitter:title", seo.title);
  updateMetaTag("twitter:description", seo.description);
  updateMetaTag("twitter:image", seo.image);
  updateMetaTag("twitter:image:src", seo.image);
  updateMetaTag("twitter:image:alt", seo.imageAlt);
  updateMetaTag("twitter:creator", "@arunkumarkandasamy");

  updateMetaTag("image", seo.image);
  updateLinkTag("canonical", seo.url);

  addStructuredData(seo, path, pageName);
}

function updateMetaTag(name: string, content?: string) {
  if (!content) return;

  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function updateMetaProperty(property: string, content?: string) {
  if (!content) return;

  let tag = document.querySelector(
    `meta[property="${property}"]`,
  ) as HTMLMetaElement;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function updateLinkTag(rel: string, href?: string) {
  if (!href) return;

  let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!tag) {
    tag = document.createElement("link");
    tag.rel = rel;
    document.head.appendChild(tag);
  }
  tag.href = href;
}

function addStructuredData(seo: SEOProps, path: string, pageName: string) {
  document
    .querySelectorAll('script[type="application/ld+json"]')
    .forEach((el) => el.remove());

  const graph = buildStructuredDataGraph(seo, {
    path,
    pageName,
    includeProfilePage: seo.structuredData?.includeProfilePage,
    includeCreativeWorks: seo.structuredData?.includeCreativeWorks,
    faqs: seo.structuredData?.faqs,
  });

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(graph);
  document.head.appendChild(script);
}

export function useSEO(props: SEOProps) {
  return {
    updateSEO: () => updateSEO(props),
  };
}
