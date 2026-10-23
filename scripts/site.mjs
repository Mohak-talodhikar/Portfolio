/**
 * Single source of truth for site-wide SEO URLs and per-route metadata.
 * Consumed by scripts/prerender-meta.mjs and scripts/indexnow.mjs.
 * Titles/descriptions must stay in sync with `routes` in src/router.tsx.
 */

export const SITE = "https://mohaktalodhikar.runs-on.dev";

export const PERSON = {
  name: "Mohak Talodhikar",
  jobTitle: "AI Engineer",
  email: "mohaktalodhikar@gmail.com",
  sameAs: [
    "https://github.com/Mohak-talodhikar",
    "https://linkedin.com/in/mohak-talodhikar",
    "https://instagram.com/mohak_talodhikar",
  ],
};

export const routes = [
  {
    path: "/",
    title: "Mohak Talodhikar | AI Engineer",
    description:
      "Mohak Talodhikar — AI Engineer building grounded RAG chatbots and serverless web apps with Python, FastAPI, FAISS, and AWS.",
  },
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
