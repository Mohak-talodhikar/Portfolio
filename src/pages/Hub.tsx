import Hero from "../sections/Hero.tsx";
import { Reveal } from "../Reveal.tsx";
import { ContactBand } from "../ContactBand.tsx";
import { Link } from "../router.tsx";
import { ArrowRightIcon } from "../icons.tsx";
import {
  projects,
  contact,
  techStack,
} from "../data.ts";

const featured = projects.find((p) => p.title === "RAG ChatBot") ?? projects[0];

function Teaser({
  to,
  title,
  text,
}: {
  to: string;
  title: string;
  text: string;
}) {
  return (
    <Reveal>
      <Link
        to={to}
        className="group block h-full rounded-lg border border-border bg-surface p-6 hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-200"
        ariaLabel={`${title} — open page`}
      >
        <span className="flex items-center justify-between gap-3">
          <span className="font-display text-xl font-semibold group-hover:text-accent transition-colors">
            {title}
          </span>
          <ArrowRightIcon className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </span>
        <span className="mt-2 block text-sm text-muted leading-relaxed">
          {text}
        </span>
      </Link>
    </Reveal>
  );
}

export default function Hub() {
  return (
    <>
      <Hero />
      <section aria-labelledby="hub-explore" className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <Reveal>
            <h2
              id="hub-explore"
              className="font-display text-2xl md:text-3xl font-semibold tracking-tight"
            >
              Explore
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Teaser
              to="/about"
              title="About"
              text="B.Tech CSE graduate — RAG systems and LLMs, open to work from Telangana, India"
            />
            <Teaser
              to="/projects"
              title="Projects"
              text={`${projects.length} case studies with problem, method, and outcomes`}
            />
            <Teaser
              to="/skills"
              title="Skills"
              text={techStack}
            />
            <Teaser
              to="/contact"
              title="Contact"
              text={contact.text}
            />
          </div>
        </div>
      </section>
      <section aria-labelledby="hub-featured" className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <Reveal>
            <h2
              id="hub-featured"
              className="font-display text-2xl md:text-3xl font-semibold tracking-tight"
            >
              {featured.title}
            </h2>
            <p className="mt-2 font-semibold text-accent">{featured.outcome}</p>
            <p className="mt-3 text-muted leading-relaxed max-w-2xl">
              {featured.problem}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-md border border-border font-medium px-6 h-11 hover:border-accent hover:text-accent transition-colors"
              >
                Read the RAG case study{" "}
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open RAG ChatBot repository on GitHub"
                className="inline-flex items-center font-mono text-sm text-accent hover:underline underline-offset-4 min-h-[44px]"
              >
                [source]
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
