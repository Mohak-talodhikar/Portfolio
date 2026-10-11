import { useEffect, useRef, useState } from "react";
import { profile } from "./data.ts";
import { CopyIcon, CheckIcon } from "./icons.tsx";

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    /* clipboard API unavailable — fall through to legacy path */
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/**
 * One-tap email copy beside the mailto actions. The mailto link next
 * to it always works, so a failed copy is a silent no-op, never a
 * dead end. Confirmation is a text swap (announced) plus a 200ms pop
 * that reduced-motion disables.
 */
export function CopyEmail({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onClick = async () => {
    const ok = await copyText(profile.email);
    if (!ok) return;
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        aria-label="Copy email address"
        className={className}
      >
        <span
          key={copied ? "copied" : "copy"}
          className="copy-pop inline-flex items-center gap-2"
        >
          {copied ? (
            <CheckIcon className="w-4 h-4 check-in" />
          ) : (
            <CopyIcon className="w-4 h-4" />
          )}
          {copied ? "Copied" : "Copy email"}
        </span>
      </button>
      <span role="status" className="sr-only">
        {copied ? "Email address copied to clipboard." : ""}
      </span>
    </>
  );
}
