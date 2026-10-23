import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Fired once when the wrapped content first enters the viewport. */
  onVisible?: () => void;
}

/**
 * Single scroll-reveal wrapper for the whole site: a quiet fade-in once
 * when content enters the viewport. No slide, no lift, no bounce.
 * Content stays visible with no JS and under reduced-motion (see CSS).
 */
export function Reveal({ children, className = "", onVisible }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(onVisible);
  visibleRef.current = onVisible;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      visibleRef.current?.();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            visibleRef.current?.();
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
