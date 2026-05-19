/** Canonical production URL — single source of truth for SEO, OG, sitemap, and llms.txt */
export const SITE_URL = "https://arunkumar1ly.vercel.app";

export const SITE_NAME = "ArunKumar Kandasamy";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/arunkumar-k.png`;

export const PROFILE_LINKS = {
  linkedin: "https://www.linkedin.com/in/arun1ly/",
  github: "https://github.com/arunkumark1ly",
  stackoverflow: "https://stackoverflow.com/users/3089625/arunkumar-kandasamy",
  voicehunt: "https://voicehunt.news/authors/arun1ly",
  resumePdf: `${SITE_URL}/arunkumar-kandasamy-resume.pdf`,
  email: "kandasamy1ly@gmail.com",
} as const;

export function absoluteUrl(path = ""): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
