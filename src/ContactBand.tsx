import { profile } from "./data.ts";
import { Link } from "./router.tsx";
import { MailIcon, ArrowRightIcon } from "./icons.tsx";

/**
 * Compact contact band closing every page: mailto action + one line
 * pointing at /contact. Omitted on the contact page itself.
 */
export function ContactBand() {
  return (
    <section
      aria-labelledby="contact-band-heading"
      className="border-t border-border"
    >
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
        <div>
          <h2
            id="contact-band-heading"
            className="font-display text-2xl font-semibold tracking-tight"
          >
            Like what you see?
          </h2>
          <p className="mt-1 text-sm text-muted">
            Email is fastest — I read every message.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent text-accent-ink text-sm font-semibold px-5 h-11 hover:bg-accent-deep transition-colors"
          >
            <MailIcon className="w-4 h-4" />
            Email me
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-border text-sm font-semibold px-5 h-11 hover:border-accent hover:text-accent transition-colors"
          >
            Contact page <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
