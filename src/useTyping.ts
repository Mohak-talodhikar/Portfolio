import { useEffect, useState } from "react";

/**
 * Types out each phrase letter by letter, pauses, deletes, moves on.
 * One interval timer, plain text swaps — no layout, paint, or GPU cost.
 * Under reduced-motion (or no JS): renders the first phrase statically.
 */
export function useTyping(phrases: string[]) {
  const [text, setText] = useState(phrases[0] ?? "");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (
      phrases.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    setActive(true);
    let phrase = 0;
    let char = phrases[0]?.length ?? 0;
    let deleting = true;
    let timer = 0;

    const step = () => {
      const current = phrases[phrase] ?? "";
      if (deleting) {
        char -= 1;
        setText(current.slice(0, char));
        if (char <= 0) {
          deleting = false;
          phrase = (phrase + 1) % phrases.length;
          timer = window.setTimeout(step, 450);
          return;
        }
        timer = window.setTimeout(step, 32);
      } else {
        const next = phrases[phrase] ?? "";
        char += 1;
        setText(next.slice(0, char));
        if (char >= next.length) {
          deleting = true;
          timer = window.setTimeout(step, 1800);
          return;
        }
        timer = window.setTimeout(step, 65);
      }
    };

    timer = window.setTimeout(step, 1800);
    return () => window.clearTimeout(timer);
  }, [phrases]);

  return { text, active };
}
