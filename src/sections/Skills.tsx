import { skillGroups, specialistNote } from "../data.ts";
import { Reveal } from "../Reveal.tsx";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="small-caps text-accent">03 · Capabilities</p>
          <h2
            id="skills-heading"
            className="mt-2 font-display text-3xl md:text-5xl font-semibold tracking-tight"
          >
            Skills
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="h-full rounded-lg border border-border bg-surface p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold">
                  {group.title}
                </h3>
                <div aria-hidden="true" className="mt-3 h-px w-12 bg-accent" />
                <ul className="mt-4">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm md:text-base border-b border-border py-2.5 last:border-0"
                    >
                      <span
                        aria-hidden="true"
                        className={
                          i === 0
                            ? "w-1.5 h-1.5 shrink-0 rounded-full bg-accent"
                            : "w-1.5 h-1.5 shrink-0 rounded-full border border-accent"
                        }
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="mt-8 small-caps text-muted">
            <span aria-hidden="true" className="text-accent">●</span> core
            stack&ensp;·&ensp;
            <span aria-hidden="true" className="text-accent">○</span> supporting
          </p>
          <blockquote className="mt-6 rounded-lg border border-accent bg-accent/[0.06] p-6 md:p-8 max-w-3xl">
            <p className="font-display text-xl md:text-2xl italic leading-relaxed">
              <span aria-hidden="true" className="text-accent">
                &ldquo;
              </span>
              {specialistNote.text}
            </p>
            <footer className="mt-3 small-caps text-muted">
              {specialistNote.title}
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
