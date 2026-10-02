import {
  profile,
  heroSocials,
  techPills,
  proofPoints,
  typingRoles,
} from "../data.ts";
import { Reveal } from "../Reveal.tsx";
import { Link } from "../router.tsx";
import { Terminal } from "../Terminal.tsx";
import { useTyping } from "../useTyping.ts";
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  MailIcon,
  ArrowRightIcon,
  DownloadIcon,
} from "../icons.tsx";
import type { ComponentType } from "react";

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  Email: MailIcon,
};

export default function Hero() {
  const { text: typedRole, active } = useTyping(typingRoles);

  return (
    <section
      id="hero"
      aria-labelledby="hero-name"
      className="relative overflow-hidden pt-32 md:pt-44 pb-20 md:pb-28"
    >
      <div aria-hidden="true" className="dot-grid absolute inset-0 pointer-events-none" />
      <div aria-hidden="true" className="hero-glow" />
      <div className="relative max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="small-caps text-accent">{profile.availability}</p>
            <p className="mt-6 font-display text-2xl md:text-3xl text-muted">
              Hi, I&rsquo;m
            </p>
            <h1
              id="hero-name"
              className="mt-2 font-display text-[2.75rem] leading-[1.1] md:text-7xl tracking-[-0.02em]"
            >
              {profile.name}
            </h1>
            <p
              className="mt-4 font-mono text-base md:text-lg text-accent min-h-[1.75em]"
              aria-live={active ? "off" : undefined}
            >
              <span className="text-muted">&gt; </span>
              <span className={active ? "caret" : undefined}>{typedRole}</span>
              <span className="sr-only">
                . Specializations: {typingRoles.join(", ")}.
              </span>
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-7 space-y-2.5 text-left max-w-xl mx-auto lg:mx-0">
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

          <Reveal delay={280}>
            <div className="mt-8 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent text-accent-ink font-medium px-7 min-h-[44px] min-w-[200px] hover:bg-accent-deep transition-colors"
              >
                View Projects <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <a
                href={profile.resume}
                download="Mohak-Talodhikar-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border font-medium px-7 min-h-[44px] min-w-[200px] hover:border-accent hover:text-accent transition-colors"
              >
                Download Resume <DownloadIcon className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-7 flex flex-wrap gap-2 justify-center lg:justify-start">
              {techPills.map((pill) => (
                <span
                  key={pill}
                  className="small-caps px-3 py-1.5 rounded-md border border-border bg-surface text-muted"
                >
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-1">
              {heroSocials.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-muted hover:text-accent transition-colors"
                  >
                    {Icon ? <Icon className="w-5 h-5" /> : null}
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={220} className="w-full">
          <Terminal />
        </Reveal>
      </div>
    </section>
  );
}
