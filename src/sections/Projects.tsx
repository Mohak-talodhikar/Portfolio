import { projects, projectsIntro, type Project } from "../data.ts";
import { Reveal } from "../Reveal.tsx";
import { Link } from "../router.tsx";
import {
  AlertTriangleIcon,
  TerminalIcon,
  ChipIcon,
  CheckCircleIcon,
} from "../icons.tsx";
import type { ComponentType, ReactNode } from "react";

const panelIcons: Record<string, ComponentType<{ className?: string }>> = {
  problem: AlertTriangleIcon,
  role: TerminalIcon,
  method: ChipIcon,
  outcomes: CheckCircleIcon,
};

interface CasePanelProps {
  kind: keyof typeof panelIcons;
  title: string;
  children: ReactNode;
}

/** Case-study panel (The Problem / My Role / Method / Outcomes). */
function CasePanel({ kind, title, children }: CasePanelProps) {
  const Icon = panelIcons[kind];
  return (
    <div className="rounded-lg border border-border bg-surface p-5 md:p-6">
      <p className="flex items-center gap-2 small-caps text-muted">
        {Icon ? <Icon className="w-4 h-4 text-accent" /> : null}
        {title}
      </p>
      <div className="mt-3 text-sm md:text-base leading-relaxed">{children}</div>
    </div>
  );
}

function ProjectArticle({
  project,
  index,
  next,
}: {
  project: Project;
  index: number;
  next: { label: string; href: string; route: boolean };
}) {
  return (
    <article
      id={`dossier-${index}`}
      className={
        index === 0
          ? "rounded-lg border border-border border-t-2 border-t-accent bg-accent/[0.04] p-6 md:p-10 hover:-translate-y-0.5 transition-all duration-200"
          : "rounded-lg border border-border bg-surface p-6 md:p-10 hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-200"
      }
    >
      <p className="small-caps text-muted">{project.category}</p>
      <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold tracking-tight">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          {project.title}
          <span className="sr-only"> (opens GitHub repository in a new tab)</span>
        </a>
      </h3>
      <p className="mt-2 font-semibold text-proof">{project.outcome}</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <CasePanel kind="problem" title="The Problem">
            <p>{project.problem}</p>
          </CasePanel>
          <CasePanel kind="role" title="My Role">
            <p>{project.role}</p>
          </CasePanel>
        </div>
        <div className="space-y-4">
          <CasePanel kind="method" title="Method">
            <ul className="space-y-1.5">
              {project.method.map((step) => (
                <li key={step} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-mono text-accent select-none"
                  >
                    ❯
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </CasePanel>
          <CasePanel kind="outcomes" title="Outcomes">
            <ul className="space-y-1.5">
              {project.stats.map((stat) => (
                    <li key={stat} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="shrink-0 font-mono text-accent select-none"
                      >
                        ❯
                      </span>
                      {stat}
                    </li>
              ))}
            </ul>
          </CasePanel>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-xs font-semibold rounded-md bg-foreground/5 border border-border hover:-translate-y-0.5 hover:border-accent/60 transition-all duration-150"
          >
            {t}
          </span>
        ))}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} repository on GitHub`}
          className="inline-flex items-center ml-1 font-mono text-sm text-accent hover:underline underline-offset-4 min-h-[44px]"
        >
          [source]
        </a>
      </div>
      <p className="mt-6 pt-4 border-t border-border text-sm">
        <span className="text-muted">Next: </span>
        {next.route ? (
          <Link
            to={next.href}
            className="font-semibold text-accent hover:underline underline-offset-4"
          >
            {next.label}
          </Link>
        ) : (
          <a
            href={next.href}
            className="font-semibold text-accent hover:underline underline-offset-4"
          >
            {next.label}
          </a>
        )}
      </p>
    </article>
  );
}

export default function Projects() {
  return (
      <section id="projects" aria-labelledby="projects-heading" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <h1
            id="projects-heading"
            className="font-display text-4xl md:text-6xl font-semibold tracking-tight"
          >
            Projects
          </h1>
          <p className="mt-3 text-muted text-base md:text-lg max-w-2xl">
            {projectsIntro}
          </p>
        </Reveal>

        <div className="mt-6 space-y-6">
          {projects.map((project, i) => {
            const following = projects[i + 1];
            const next = following
              ? { label: following.title, href: `#dossier-${i + 1}`, route: false }
              : { label: "Get in touch", href: "/contact", route: true };
            return (
              <Reveal key={project.title}>
                <ProjectArticle project={project} index={i} next={next} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
