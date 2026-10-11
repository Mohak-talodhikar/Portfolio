import { about, proofPoints } from "../data.ts";
import { Reveal } from "../Reveal.tsx";
import { Link } from "../router.tsx";
import { ArrowRightIcon } from "../icons.tsx";
import { useCallback, useEffect, useRef, useState } from "react";

const stats = [
  { value: "500+", label: "Students impacted" },
  { value: "3", label: "Projects shipped" },
  { value: "5", label: "Core technologies" },
];

/**
 * One-shot count-up for a "NNN<suffix>" stat. Runs once when scrolled
 * into view (~1.1s ease-out); reduced-motion shows the final value
 * immediately. Numbers are decorative emphasis — the static text in
 * data.ts remains the source of truth.
 */
function Stat({ value, label }: { value: string; label: string }) {
  const target = parseInt(value, 10);
  const suffix = value.slice(String(target).length);
  const [n, setN] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const start = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    const t0 = performance.now();
    const duration = 1100;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [target]);

  return (
    <Reveal onVisible={start}>
      <div className="flex flex-col">
        <dd className="font-display text-4xl md:text-5xl text-proof">
          {n}
          {suffix}
        </dd>
        <dt className="mt-2 small-caps text-muted">{label}</dt>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
      <section id="about" aria-labelledby="about-heading" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <h2
            id="about-heading"
            className="font-display text-4xl md:text-6xl font-semibold tracking-tight"
          >
            {about.heading}
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-8">
          <Reveal className="md:col-span-3">
            <div className="space-y-4 text-base md:text-lg text-muted leading-relaxed max-w-2xl">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal className="md:col-span-2">
            <dl className="rounded-lg border border-border bg-surface p-6 grid grid-cols-2 md:grid-cols-1 gap-5">
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="small-caps text-muted">{fact.label}</dt>
                  <dd
                    className={`mt-1.5 font-display text-lg leading-snug ${
                      fact.label === "Status" ? "text-status" : ""
                    }`}
                  >
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Reveal>
          <ul className="mt-10 space-y-2.5 max-w-2xl">
            {proofPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm md:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-[9px] w-1.5 h-1.5 shrink-0 rounded-full bg-accent"
                />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10 text-center">
            {stats.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </dl>
        </Reveal>
        <Reveal>
          <p className="mt-10">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-md border border-border font-medium px-6 h-11 hover:border-accent hover:text-accent transition-colors"
            >
              See the work{" "}
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
