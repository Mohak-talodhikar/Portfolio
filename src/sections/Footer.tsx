import { navItems, profile, heroSocials } from "../data.ts";
import { Link, useRouter } from "../router.tsx";
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  MailIcon,
  ArrowUpIcon,
} from "../icons.tsx";
import type { ComponentType } from "react";

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  Email: MailIcon,
};

export default function Footer({ onBackToTop }: { onBackToTop: () => void }) {
  const year = new Date().getFullYear();
  const { path } = useRouter();

  return (
    <footer className="border-t border-border bg-cream">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center gap-8 text-center">
        <p className="font-display text-xl font-semibold">
          {profile.name}<span className="text-accent">.</span>
        </p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  ariaCurrent={path === item.href ? "true" : undefined}
                  className="text-sm font-semibold text-muted hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
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
                {Icon ? <Icon className="w-4 h-4" /> : null}
              </a>
            );
          })}
        </div>

        <div aria-hidden="true" className="h-px w-full bg-border" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          <p className="small-caps text-muted">
            © {year} {profile.name}
          </p>
          <button
            type="button"
            onClick={onBackToTop}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent transition-colors min-h-[44px]"
          >
            Back to top <ArrowUpIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
