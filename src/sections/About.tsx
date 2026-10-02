import { about } from "../data.ts";
import { Reveal } from "../Reveal.tsx";
import { Link } from "../router.tsx";
import { ArrowRightIcon } from "../icons.tsx";

const stats = [
  { value: "500+", label: "Students impacted" },
  { value: "3", label: "Projects shipped" },
  { value: "5", label: "Core technologies" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="small-caps text-accent">01 · Background</p>
          <h2
            id="about-heading"
            className="mt-2 font-display text-3xl md:text-5xl font-semibold tracking-tight"
          >
            {about.heading}
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-8">
          <Reveal className="md:col-span-3" delay={80}>
            <div className="space-y-4 text-base md:text-lg text-muted leading-relaxed max-w-2xl">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal className="md:col-span-2" delay={160}>
            <dl className="rounded-lg border border-border bg-surface p-6 grid grid-cols-2 md:grid-cols-1 gap-5">
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="small-caps text-muted">{fact.label}</dt>
                  <dd className="mt-1.5 font-display text-lg leading-snug">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dd className="font-display text-4xl md:text-5xl text-accent">
                  {stat.value}
                </dd>
                <dt className="mt-2 small-caps text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={260}>
          <p className="mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md border border-border font-medium px-6 h-11 hover:border-accent hover:text-accent transition-colors"
            >
              See the work <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
