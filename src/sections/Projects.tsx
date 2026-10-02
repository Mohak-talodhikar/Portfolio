import { projects, projectsIntro, type Project } from "../data.ts";
import { Reveal } from "../Reveal.tsx";
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
  index: string;
  kind: keyof typeof panelIcons;
  title: string;
  children: ReactNode;
}

/** Numbered case-study panel (01 / The Problem … 04 / Outcomes). */
function CasePanel({ index, kind, title, children }: CasePanelProps) {
  const Icon = panelIcons[kind];
  return (
    <div className="rounded-lg border border-border bg-surface p-5 md:p-6">
      <p className="flex items-center gap-2 small-caps text-muted">
        {Icon ? <Icon className="w-4 h-4 text-accent" /> : null}
        <span aria-hidden="true">{index}</span>
        <span aria-hidden="true">/</span> {title}
      </p>
      <div className="mt-3 text-sm md:text-base leading-relaxed">{children}</div>
    </div>
  );
}

function ProjectArticle({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className={
        index === 0
          ? "rounded-lg border border-border border-t-2 border-t-accent bg-accent/[0.04] p-6 md:p-10"
          : "rounded-lg border border-border bg-surface p-6 md:p-10"
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
      <p className="mt-2 font-semibold text-accent">{project.outcome}</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <CasePanel index="01" kind="problem" title="The Problem">
            <p>{project.problem}</p>
          </CasePanel>
          <CasePanel index="02" kind="role" title="My Role">
            <p>{project.role}</p>
          </CasePanel>
        </div>
        <div className="space-y-4">
          <CasePanel index="03" kind="method" title="Method">
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
          <CasePanel index="04" kind="outcomes" title="Outcomes">
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
            className="px-3 py-1 text-xs font-semibold rounded-md bg-foreground/5 border border-border"
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
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="small-caps text-accent">02 · Selected Work</p>
          <h2
            id="projects-heading"
            className="mt-2 font-display text-3xl md:text-5xl font-semibold tracking-tight"
          >
            Projects
          </h2>
          <p className="mt-3 text-muted text-base md:text-lg max-w-2xl">
            {projectsIntro}
          </p>
        </Reveal>

        <div className="mt-6 space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={Math.min(i * 80, 160)}>
              <ProjectArticle project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
