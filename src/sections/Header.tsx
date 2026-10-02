import { useEffect, useRef, useState } from "react";
import { navItems } from "../data.ts";
import { Link, useRouter } from "../router.tsx";
import { useTheme } from "../theme.tsx";
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from "../icons.tsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { path } = useRouter();
  const { theme, toggle } = useTheme();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  // Mobile menu keyboard contract: move focus in on open, Escape closes,
  // Tab cycles inside the dialog. Body scroll locks while open.
  useEffect(() => {
    if (!open) return;

    mobileMenuRef.current
      ?.querySelector<HTMLElement>("button, a[href]")
      ?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !mobileMenuRef.current) return;
      const focusables = Array.from(
        mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="fixed top-[max(0.75rem,env(safe-area-inset-top))] left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl rounded-md border border-border bg-background/95 backdrop-blur-sm shadow-sm flex items-center justify-between px-4 sm:px-5 py-3">
        <Link
          to="/"
          ariaLabel="Mohak Talodhikar — back to home"
          className="font-display text-lg font-semibold tracking-tight"
        >
          M. Talodhikar
        </Link>

        <p
          aria-hidden="true"
          className="hidden lg:block font-display italic text-sm text-muted"
        >
          Portfolio, 2026
        </p>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  ariaCurrent={path === item.href ? "true" : undefined}
                  className="text-sm font-medium text-muted hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          {/* Quick Dark/Light Toggle */}
          <button
            type="button"
            onClick={toggle}
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            title={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-foreground hover:text-accent transition-colors"
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-foreground"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 bg-background md:hidden flex flex-col"
        >
          <div className="flex justify-end p-4">
            <button
              type="button"
              onClick={close}
              aria-label="Close navigation menu"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-foreground"
            >
              <CloseIcon className="w-7 h-7" />
            </button>
          </div>
          <nav aria-label="Mobile">
            <ul className="flex flex-col items-center gap-1 px-6">
              {navItems.map((item) => (
                <li key={item.href} className="w-full text-center">
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    ariaCurrent={path === item.href ? "true" : undefined}
                    className="block py-3 font-display text-3xl text-foreground hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
