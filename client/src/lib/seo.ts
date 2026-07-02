import {
  DEFAULT_OG_IMAGE,
  PROFILE_LINKS,
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
    includeBreadcrumbs?: boolean;
    faqs?: { question: string; answer: string }[];
  };
}

/** Single source of truth — keep index.html meta in sync when editing these. */
export const HOME_TITLE = "ArunKumar Kandasamy - Engineering Lead";

export const HOME_META_DESCRIPTION =
  "Engineering Lead with 16+ years of experience building scalable platforms, cloud-native systems, and AI-augmented engineering practices. Deep technical expertise and delivery leadership for predictable, high-performing products.";

export const HOME_KEYWORDS =
  "Engineering Lead, AI-augmented engineering, Ruby on Rails Expert, React.js Developer, Next.js, Solutions Architect, Cloud Architecture, Technical Consulting, Full-Stack Development, Scalable Systems, CI/CD, ThinkPro Ventures";

export const CONSULTING_TITLE =
  "Independent Consulting Engagements | ArunKumar Kandasamy";

export const CONSULTING_META_DESCRIPTION =
  "Independent technical consulting engagements — modern frontend engineering, UI craftsmanship, product thinking, and production deployment. Case studies document end-to-end client delivery from concept to production.";

export const CONSULTING_KEYWORDS =
  "Independent consulting, technical consultant, frontend engineering, UI/UX implementation, Terraform AWS deployment, freelance case studies, ArunKumar Kandasamy";

export const THEME_COLOR = "#B77A3D";

export const TWITTER_SITE = "@arunkumarkandasamy";

export const DEFAULT_SEO: SEOProps = {
  title: HOME_TITLE,
  description: HOME_META_DESCRIPTION,
  keywords: HOME_KEYWORDS,
  image: DEFAULT_OG_IMAGE,
  imageSecureUrl: DEFAULT_OG_IMAGE,
  imageWidth: 1122,
  imageHeight: 1402,
  imageType: "image/webp",
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
      "ArunKumar Kandasamy is a Engineering Lead and technical consultant with 16+ years of experience in Ruby on Rails, React, Next.js, cloud architecture, and end-to-end technical delivery for enterprise and SaaS platforms.",
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

const REL_ME_LINKS = [
  PROFILE_LINKS.linkedin,
  PROFILE_LINKS.github,
  PROFILE_LINKS.stackoverflow,
] as const;

export function updateSEO(props: SEOProps = {}) {
  const seo = { ...DEFAULT_SEO, ...props };
  const path = props.path ?? (seo.url?.replace(/https?:\/\/[^/]+/, "") || "/");
  const pageName = seo.title ?? DEFAULT_SEO.title ?? SITE_NAME;

  document.title = seo.title || DEFAULT_SEO.title || "";

  updateMetaTag("description", seo.description);
  updateMetaTag("keywords", seo.keywords);
  updateMetaTag("author", seo.author);
  updateMetaTag("theme-color", THEME_COLOR);

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
  updateMetaProperty("og:locale", "en_IN");

  updateMetaTag("twitter:card", "summary_large_image");
  updateMetaTag("twitter:title", seo.title);
  updateMetaTag("twitter:description", seo.description);
  updateMetaTag("twitter:image", seo.image);
  updateMetaTag("twitter:image:src", seo.image);
  updateMetaTag("twitter:image:alt", seo.imageAlt);
  updateMetaTag("twitter:creator", TWITTER_SITE);
  updateMetaTag("twitter:site", TWITTER_SITE);

  updateMetaTag("image", seo.image);
  updateLinkTag("canonical", seo.url);
  updateRelMeLinks();

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

function updateRelMeLinks() {
  document.querySelectorAll('link[rel="me"]').forEach((el) => el.remove());
  for (const href of REL_ME_LINKS) {
    const link = document.createElement("link");
    link.rel = "me";
    link.href = href;
    document.head.appendChild(link);
  }
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
    includeBreadcrumbs: seo.structuredData?.includeBreadcrumbs,
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
