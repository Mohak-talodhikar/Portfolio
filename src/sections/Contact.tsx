import { contact, contactLinks, profile } from "../data.ts";
import { Reveal } from "../Reveal.tsx";
import { CopyEmail } from "../CopyEmail.tsx";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../icons.tsx";
import type { ComponentType } from "react";

const linkIcons: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: MailIcon,
};

export default function Contact() {
  return (
      <section id="contact" aria-labelledby="contact-heading" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <h2
            id="contact-heading"
            className="font-display text-4xl md:text-6xl font-semibold tracking-tight"
          >
            {contact.heading}
          </h2>
          <p className="mt-4 text-muted max-w-xl leading-relaxed">
            {contact.text}
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2.5 rounded-md bg-accent text-accent-ink font-semibold px-7 h-12 hover:bg-accent-deep transition-colors"
              >
                <MailIcon className="w-5 h-5" />
                {profile.email}
              </a>
              <CopyEmail className="inline-flex items-center rounded-md border border-border font-semibold px-5 h-12 hover:border-accent hover:text-accent transition-colors" />
            </div>
            <ul className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
              {contactLinks
                .filter((link) => link.label !== "Email")
                .map((link) => {
                  const Icon = linkIcons[link.label];
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent transition-colors min-h-[44px]"
                      >
                        {Icon ? <Icon className="w-4 h-4" /> : null}
                        {link.label}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
