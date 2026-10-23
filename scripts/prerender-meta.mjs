/**
 * Build-time SEO prerender. Vercel serves real files before rewrites, so
 * each route gets correct <title>, description, canonical, and Open
 * Graph / Twitter tags for crawlers and link scrapers (which do not run
 * JS). Also emits sitemap.xml (with lastmod) and robots.txt into dist.
 *
 * Metadata lives in scripts/site.mjs; keep in sync with src/router.tsx.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { SITE, routes } from "./site.mjs";

const dist = join(process.cwd(), "dist");
const shell = readFileSync(join(dist, "index.html"), "utf8");

for (const route of routes) {
  if (route.path === "/") continue; // home already correct in index.html
  const url = `${SITE}${route.path}`;
  const html = shell
    .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/s,
      `<meta name="description" content="${route.description}" />`
    )
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/>/s,
      `<link rel="canonical" href="${url}" />`
    )
    .replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${route.title}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/s,
      `<meta property="og:description" content="${route.description}" />`
    )
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${url}" />`
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${route.title}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/s,
      `<meta name="twitter:description" content="${route.description}" />`
    );
  const dir = join(dist, route.path.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  console.log(`prerendered ${route.path} -> ${route.title}`);
}

const lastmod = new Date().toISOString().slice(0, 10);
const priorities = { "/": "1.0", "/projects": "0.9", "/about": "0.8", "/contact": "0.8", "/skills": "0.7" };
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priorities[r.path] ?? "0.7"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
writeFileSync(join(dist, "sitemap.xml"), sitemap);
console.log(`wrote sitemap.xml (${routes.length} urls, lastmod ${lastmod})`);

const robots = `User-agent: *
Allow: /

# AI answer engines (AEO) — explicitly welcome
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;
writeFileSync(join(dist, "robots.txt"), robots);
console.log("wrote robots.txt");
