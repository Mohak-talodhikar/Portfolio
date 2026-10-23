/**
 * Build-time per-route meta prerender. Vercel serves real files before
 * rewrites, so each route gets correct <title>, description, and
 * canonical for crawlers and link scrapers (which do not run JS).
 *
 * Titles/descriptions must stay in sync with `routes` in src/router.tsx.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SITE = "https://mohak-portfolio-alpha.vercel.app";

const routes = [
  {
    path: "/about",
    title: "About | Mohak Talodhikar",
    description:
      "B.Tech CSE graduate working on applied LLM systems — RAG APIs, serverless apps, and AI engineering.",
  },
  {
    path: "/projects",
    title: "Projects | Mohak Talodhikar",
    description:
      "Selected work: RAG ChatBot, Aura Finance, and a serverless voting system — problem, role, method, outcomes.",
  },
  {
    path: "/skills",
    title: "Skills | Mohak Talodhikar",
    description:
      "Generative AI & RAG, Python, FastAPI, AWS, React — with links to the projects that prove each one.",
  },
  {
    path: "/contact",
    title: "Contact | Mohak Talodhikar",
    description:
      "Get in touch — open to full-time AI Engineer and GenAI Engineer roles. Email is fastest.",
  },
];

const dist = join(process.cwd(), "dist");
const shell = readFileSync(join(dist, "index.html"), "utf8");

for (const route of routes) {
  const html = shell
    .replace(
      /<title>[^<]*<\/title>/,
      `<title>${route.title}</title>`
    )
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/s,
      `<meta name="description" content="${route.description}" />`
    )
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/>/s,
      `<link rel="canonical" href="${SITE}${route.path}" />`
    );
  const dir = join(dist, route.path.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  console.log(`prerendered ${route.path} -> ${route.title}`);
}
