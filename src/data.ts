/**
 * Every word of site content lives here — edit this file to update the site.
 * (Carried over from the previous portfolio; the fake CareerTimeline entries
 * were deliberately left out: they were template placeholder data.)
 */

export const profile = {
  name: "Mohak Talodhikar",
  role: "AI Engineer",
  tagline:
    "I build chatbots that answer from your documents — not from thin air. Python, FastAPI, and FAISS on the backend; currently looking for a full-time AI Engineer role.",
  availability: "Open to work · Replies within a day",
  email: "mohaktalodhikar@gmail.com",
  location: "Telangana, India",
  resume: "/resume.pdf",
};

export interface Social {
  label: string;
  href: string;
  external: boolean;
}

export const heroSocials: Social[] = [
  { label: "GitHub", href: "https://github.com/Mohak-talodhikar", external: true },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohak-talodhikar",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/mohak_talodhikar",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    external: false,
  },
];

export const contactLinks: Social[] = [
  { label: "Email", href: `mailto:${profile.email}`, external: false },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohak-talodhikar",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Mohak-talodhikar",
    external: true,
  },
];

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export const techStack = "Python, RAG, LLMs, AWS, FastAPI, React";

export const proofPoints = [
  "Built a PDF-grounded RAG API with Python, FastAPI, LangChain, and FAISS",
  "Shipped a serverless voting app on AWS used by 500+ students",
];

export const techPills = ["Python", "RAG", "LLMs", "AWS", "FastAPI", "React"];

/** Cycled by the hero typing line (module-level = stable reference). */
export const typingRoles = [
  "RAG Systems",
  "LLMs",
  "Agentic AI",
  "Cloud Architecture",
];

export const projectsIntro =
  "Three things I built to learn how this stuff actually works. All on GitHub.";

export interface Project {
  title: string;
  category: string;
  outcome: string;
  tech: string[];
  link: string;
  /** Case-study rows (Method panel renders bullets). */
  problem: string;
  role: string;
  method: string[];
  stats: string[];
}

export const projects: Project[] = [
  {
    title: "RAG ChatBot",
    category: "AI / RAG",
    outcome: "A chatbot that's only allowed to quote your PDFs",
    tech: ["Python", "RAG", "FAISS"],
    link: "https://github.com/Mohak-talodhikar/RAG-ChatBot",
    problem:
      "Chatbots invent answers. I wanted one that's only allowed to quote your documents.",
    role: "Solo build — API, pipeline, and local deployment, end to end.",
    method: [
      "FastAPI with /upload and /ask endpoints",
      "PDFs parsed with PyPDFLoader — 1000-character chunks, 200 overlap",
      "Embedded with all-MiniLM-L6-v2, FAISS top-k 3 retrieval",
      "Answered by flan-t5-small (512 max tokens), fully local",
      "Plus PDF validation, temp-file cleanup, and dedup of repeated sentences",
    ],
    stats: [
      "Every reply is assembled from retrieved passages, so answers stay grounded — and the whole pipeline runs locally, so there is no API bill at all.",
      "No cloud, no keys, no data leaving the machine. The system runs end to end offline.",
      "The repo documents the full setup, so anyone can reproduce it from scratch.",
    ],
  },
  {
    title: "Aura Finance",
    category: "AI / FinTech",
    outcome:
      "Monthly budgets, transactions, and live stock prices in one place",
    tech: ["React", "Firebase", "Gemini API"],
    link: "https://github.com/Mohak-talodhikar/Aura-Finance",
    problem:
      "Budgeting meant notebooks and scattered notes — manual tracking nobody keeps up with.",
    role: "Solo personal project — I designed and built the whole app.",
    method: [
      "React + TypeScript + Vite frontend, Tailwind styling",
      "Firebase Auth + Firestore for login and cloud data",
      "Gemini API for AI insights",
      "Finnhub for Indian + US stock prices",
    ],
    stats: [
      "Monthly budgets, transaction history, and live Indian and US prices live in one place instead of scattered notes.",
      "Made for people who want to stay organized without maintaining a spreadsheet habit.",
    ],
  },
  {
    title: "Serverless Voting System",
    category: "Web App",
    outcome: "Secure student elections with real-time counting",
    tech: ["AWS Lambda", "DynamoDB", "Cognito"],
    link: "https://github.com/Mohak-talodhikar/Online-voting-system",
    problem:
      "Department elections on paper: slow counting, zero transparency.",
    role: "Frontend owner in a team of 4 — login, candidate selection, confirmation, results display. Supported the backend setup.",
    method: [
      "Multi-step voting flow I built: Login → OTP → Select → Confirm → Submit, in React 18 + Material UI + Router v6",
      "15 UI components with a mock/HTTP API switcher, so the frontend runs with or without AWS behind it",
      "Real-time election status, animated results, and an admin dashboard (start/stop, candidates, one-click results, CSV upload)",
      "AWS console stack underneath (Lambda, API Gateway, DynamoDB, Cognito) with one-vote-per-student validation, enforced live with the team",
    ],
    stats: [
      "500+ students voted in the live departmental election.",
      "Votes were counted in real time as they came in.",
      "One-vote-per-student validation held through the entire election — zero integrity incidents.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Proficient",
    skills: ["Python", "React / TypeScript", "FastAPI", "RAG Systems & LLMs", "AWS"],
  },
  {
    title: "Familiar",
    skills: [
      "Docker",
      "Hugging Face",
      "FAISS",
      "Git & GitHub",
      "n8n Automation",
      "Firebase",
      "Google Gemini APIs",
    ],
  },
];

export const specialistNote = {
  title: "AI & RAG Specialist",
  text: "Most of my time goes into one problem: making language models say things they can point to.",
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a B.Tech CSE graduate working on applied LLM systems. I built a PDF-grounded RAG API — Python, FastAPI, LangChain, FAISS — and the frontend for a serverless voting app on AWS that 500+ students actually used.",
    "I work in TypeScript and React when I'm not elbows-deep in vectors. Looking for a full-time AI Engineer role.",
  ],
  facts: [
    { label: "Specialty", value: "RAG Systems & LLMs" },
    { label: "Location", value: "Telangana, India" },
    { label: "Experience", value: "2022 – 2026" },
    { label: "Status", value: "Open to work" },
  ],
};

export const contact = {
  heading: "Let's Connect",
  text: "Open to full-time AI Engineer roles and freelance AI work. Email is fastest — I read every message.",
};
