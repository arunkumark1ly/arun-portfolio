/**
 * Post-build SEO validation for prerendered HTML files.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

const STALE_PATTERNS = [
  "Engineering Lead",
  "Lead Technical Consultant",
  "Blend hands-on architecture and engineering leadership",
];

const checks = [
  {
    file: "index.html",
    required: [
      "<title>ArunKumar Kandasamy - Engineering Lead</title>",
      'rel="canonical" href="https://arunkumar1ly.vercel.app/"',
      "Engineering Lead with 16+ years",
      "AI-augmented engineering",
      '"@type":"FAQPage"',
      "og:locale",
      "twitter:site",
      'content="@arunkumarkandasamy"',
    ],
  },
  {
    file: path.join("consulting", "index.html"),
    required: [
      "Independent Consulting Engagements | ArunKumar Kandasamy",
      'rel="canonical" href="https://arunkumar1ly.vercel.app/consulting"',
      '"@type":"BreadcrumbList"',
      '"@type":"CreativeWork"',
      '"@type":"ProfessionalService"',
    ],
  },
];

function readHtml(relativePath) {
  const fullPath = path.join(distDir, relativePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing prerendered file: ${relativePath}`);
  }
  return fs.readFileSync(fullPath, "utf8");
}

function validate() {
  const errors = [];

  for (const check of checks) {
    const html = readHtml(check.file);

    for (const snippet of check.required) {
      if (!html.includes(snippet)) {
        errors.push(`${check.file}: missing "${snippet}"`);
      }
    }

    for (const stale of STALE_PATTERNS) {
      if (html.includes(stale)) {
        errors.push(`${check.file}: contains stale SEO text "${stale}"`);
      }
    }
  }

  if (errors.length) {
    console.error("SEO validation failed:\n" + errors.map((e) => `  - ${e}`).join("\n"));
    process.exit(1);
  }

  console.log("SEO validation passed for all prerendered pages.");
}

validate();
