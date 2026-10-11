import {
  profile,
  heroSocials,
  proofStrip,
  typingRoles,
} from "../data.ts";
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
import type { ComponentType, CSSProperties, ReactNode } from "react";

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  Email: MailIcon,
};

/** One entrance slot in the hero's orchestrated load sequence. */
function HeroIn({
  delay = 0,
  className = "",
  children,
}: {
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`hero-in ${className}`}
      style={{ "--hero-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  const { text: typedRole, active } = useTyping(typingRoles);

  return (
    <section
      id="hero"
      aria-labelledby="hero-name"
      className="relative overflow-hidden pt-32 md:pt-44 pb-20 md:pb-28"
    >
      <div aria-hidden="true" className="dot-grid absolute inset-0 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="text-center lg:text-left">
          <HeroIn>
            <p className="small-caps text-status inline-flex items-center gap-2">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-status" />
              {profile.availability}
            </p>
            <h1
              id="hero-name"
              className="mt-6 font-display text-[clamp(3.5rem,8vw,7rem)] leading-[1.05] tracking-[-0.03em]"
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
          </HeroIn>

          <HeroIn delay={140}>
            <p className="mt-6 font-display text-xl md:text-2xl leading-snug max-w-xl mx-auto lg:mx-0">
              {profile.thesis.split(profile.thesisMark)[0]}
              <span className="mark">{profile.thesisMark}</span>
            </p>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              {profile.tagline}
            </p>
          </HeroIn>

          <HeroIn delay={240}>
            <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-3 justify-center lg:justify-start">
              {proofStrip.map((item) => (
                <div key={item.label} className="flex items-baseline gap-2">
                  <dd className="font-display text-2xl md:text-3xl text-proof">
                    {item.value}
                  </dd>
                  <dt className="small-caps text-muted">{item.label}</dt>
                </div>
              ))}
            </dl>
          </HeroIn>

          <HeroIn delay={320}>
            <div className="mt-8 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent text-accent-ink font-medium px-7 min-h-[44px] min-w-[200px] hover:bg-accent-deep transition-colors"
              >
                View Projects{" "}
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={profile.resume}
                download="Mohak-Talodhikar-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border font-medium px-7 min-h-[44px] min-w-[200px] hover:border-accent hover:text-accent transition-colors"
              >
                Download Resume <DownloadIcon className="w-4 h-4" />
              </a>
            </div>
          </HeroIn>

          <HeroIn delay={400}>
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
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-muted hover:text-accent hover:-translate-y-0.5 transition-all duration-150"
                  >
                    {Icon ? <Icon className="w-5 h-5" /> : null}
                  </a>
                );
              })}
            </div>
          </HeroIn>
        </div>

        <HeroIn delay={200} className="w-full">
          <Terminal />
        </HeroIn>
      </div>
    </section>
  );
}
