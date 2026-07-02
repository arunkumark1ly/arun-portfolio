/**
 * Generate sitemap.xml with current build date as lastmod.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const siteUrl = "https://arunkumar1ly.vercel.app";
const lastmod = new Date().toISOString().slice(0, 10);

const urls = [
  { loc: `${siteUrl}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${siteUrl}/consulting`, changefreq: "monthly", priority: "0.9" },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const outPath = path.join(root, "client", "public", "sitemap.xml");
fs.writeFileSync(outPath, xml, "utf8");
console.log(`Generated ${path.relative(root, outPath)} (lastmod: ${lastmod})`);
