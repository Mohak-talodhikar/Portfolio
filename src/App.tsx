import Header from "./sections/Header.tsx";
import Footer from "./sections/Footer.tsx";
import About from "./sections/About.tsx";
import Projects from "./sections/Projects.tsx";
import Skills from "./sections/Skills.tsx";
import Contact from "./sections/Contact.tsx";
import Hub from "./pages/Hub.tsx";
import NotFound from "./pages/NotFound.tsx";
import { ContactBand } from "./ContactBand.tsx";
import { RouterProvider, useRouter } from "./router.tsx";
import type { ReactNode } from "react";

function scrollToTop() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
}

/** Non-hub pages get top clearance for the fixed header. */
function PageShell({ children }: { children: ReactNode }) {
  return <div className="pt-20 md:pt-24">{children}</div>;
}

function Routes() {
  const { path, isNotFound } = useRouter();

  if (isNotFound) {
    return (
      <PageShell>
        <NotFound />
      </PageShell>
    );
  }

  switch (path) {
    case "/about":
      return (
        <PageShell>
          <About />
          <ContactBand />
        </PageShell>
      );
    case "/projects":
      return (
        <PageShell>
          <Projects />
          <ContactBand />
        </PageShell>
      );
    case "/skills":
      return (
        <PageShell>
          <Skills />
          <ContactBand />
        </PageShell>
      );
    case "/contact":
      return (
        <PageShell>
          <Contact />
        </PageShell>
      );
    case "/":
    default:
      return <Hub />;
  }
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-accent-ink"
      >
        Skip to content
      </a>
      <RouterProvider>
        <Header />
        <main id="main-content">
          <Routes />
        </main>
        <Footer onBackToTop={scrollToTop} />
      </RouterProvider>
    </div>
  );
}
