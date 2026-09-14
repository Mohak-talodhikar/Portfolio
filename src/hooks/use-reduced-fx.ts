import { useEffect, useState } from "react";

/**
 * Shared device-capability signal for adaptation:
 * - `coarse`: touch-first pointer (phones, most tablets)
 * - `reducedMotion`: user asked to minimize motion
 * Used to gate cursor FX, particle layers, and pointer interactivity.
 */
export function useReducedFx() {
  const [coarse, setCoarse] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const coarseQuery = window.matchMedia("(pointer: coarse)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setCoarse(coarseQuery.matches);
      setReducedMotion(motionQuery.matches);
    };
    sync();

    coarseQuery.addEventListener("change", sync);
    motionQuery.addEventListener("change", sync);
    return () => {
      coarseQuery.removeEventListener("change", sync);
      motionQuery.removeEventListener("change", sync);
    };
  }, []);

  return { coarse, reducedMotion };
}
