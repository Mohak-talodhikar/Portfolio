import { skillCategories, projects, specialistNote } from "../data.ts";
import { Reveal } from "../Reveal.tsx";
import { Link } from "../router.tsx";

/**
 * Skills as categorized chips. Chips with real project evidence link
 * straight to that dossier (`/projects#dossier-N`); the rest stay
 * quiet text — no fictional links. AI-first category order for AI /
 * GenAI Engineer roles.
 */
export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-28 md:py-36 border-t border-border"
    >
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <h1
            id="skills-heading"
            className="font-display text-4xl md:text-6xl font-semibold tracking-tight"
          >
            Skills
          </h1>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title}>
              <div
                className={`h-full rounded-lg border p-6 md:p-8 ${
                  i === 0 ? "border-accent/50 bg-accent/[0.03]" : "border-border bg-surface"
                }`}
              >
                <h3 className="font-display text-xl font-semibold">
                  {category.title}
                </h3>
                <div aria-hidden="true" className="mt-3 h-px w-12 bg-accent" />
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const chipClass =
                      "inline-flex items-center px-3 py-1.5 min-h-[36px] text-sm font-semibold rounded-md bg-foreground/5 border border-border transition-all duration-150";
                    if (skill.project === undefined) {
                      return (
                        <li key={skill.name}>
                          <span className={chipClass}>{skill.name}</span>
                        </li>
                      );
                    }
                    const project = projects[skill.project];
                    return (
                      <li key={skill.name}>
                        <Link
                          to={`/projects#dossier-${skill.project}`}
                          ariaLabel={`${skill.name} — see the ${project.title} case study`}
                          className={`${chipClass} hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent`}
                        >
                          {skill.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <blockquote className="mt-8 rounded-lg border border-accent bg-accent/[0.06] p-6 md:p-8 max-w-3xl">
            <p className="font-display text-xl md:text-2xl italic leading-relaxed">
              <span aria-hidden="true" className="text-proof">
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
