import { Link } from "../router.tsx";

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-heading" className="pt-32 md:pt-44 pb-20 md:pb-28">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="small-caps text-accent">404</p>
        <h1
          id="not-found-heading"
          className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight"
        >
          There&apos;s nothing filed under this name.
        </h1>
        <p className="mt-4 text-muted max-w-xl mx-auto leading-relaxed">
          The page you asked for doesn&apos;t exist. The homepage has
          everything, linked and labeled.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-accent text-accent-ink font-medium px-7 min-h-[44px] hover:bg-accent-deep transition-colors"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
