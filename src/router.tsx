import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
}

export const routes: RouteMeta[] = [
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

function currentPath() {
  return window.location.pathname;
}

interface RouterValue {
  path: string;
  navigate: (to: string) => void;
  isNotFound: boolean;
}

const RouterContext = createContext<RouterValue>({
  path: "/",
  navigate: () => {},
  isNotFound: false,
});

function applyRouteMeta(path: string) {
  const meta = routes.find((r) => r.path === path);
  const title = meta
    ? meta.title
    : "Not found | Mohak Talodhikar";
  const description = meta
    ? meta.description
    : "This page does not exist. Head back to the homepage.";
  document.title = title;
  const descTag = document.querySelector('meta[name="description"]');
  if (descTag) descTag.setAttribute("content", description);
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute(
      "href",
      `https://mohak-portfolio-alpha.vercel.app${path}`
    );
  }
}

function scrollToTop() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "instant" });
}

/**
 * Scroll to a hash target. `content-visibility: auto` sections report a
 * placeholder height until rendered, which throws off fragment offsets
 * on cross-page arrivals — force the containing section to real size
 * first so the scroll lands on the element, not mid-section.
 */
function scrollToTarget(el: HTMLElement, behavior: ScrollBehavior) {
  const section = el.closest("section");
  if (section instanceof HTMLElement) {
    section.style.contentVisibility = "visible";
  }
  el.scrollIntoView({ behavior });
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(currentPath);

  const navigate = useCallback((to: string) => {
    const [pathname, hash] = to.split("#");
    // Same-page navigation: scroll to the hash target (or top) in place.
    if (pathname === window.location.pathname) {
      const el = hash ? document.getElementById(hash) : null;
      if (el) {
        scrollToTarget(
          el,
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth"
        );
        return;
      }
      scrollToTop();
      return;
    }
    window.history.pushState(null, "", to);
    setPath(pathname);
  }, []);

  useEffect(() => {
    const onPopState = () => setPath(currentPath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    applyRouteMeta(path);
    // Deep link: land on the hash target when present, else the top.
    const hash = window.location.hash.slice(1);
    const target = hash ? document.getElementById(hash) : null;
    if (target) {
      scrollToTarget(target, "auto");
    } else {
      scrollToTop();
    }
    // Move focus to the page heading so keyboard and screen-reader
    // users land at the start of the new page, not the top chrome.
    const heading = document.querySelector("main h1, main h2");
    if (heading instanceof HTMLElement) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
  }, [path]);

  const known = routes.some((r) => r.path === path);
  return (
    <RouterContext.Provider value={{ path, navigate, isNotFound: !known }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({
  to,
  children,
  className,
  onClick,
  ariaLabel,
  ariaCurrent,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  ariaCurrent?: "true" | undefined;
}) {
  const { navigate } = useRouter();
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }
    e.preventDefault();
    onClick?.();
    navigate(to);
  };
  return (
    <a
      href={to}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
    >
      {children}
    </a>
  );
}
