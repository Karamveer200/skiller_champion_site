"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <a
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 no-underline text-[var(--fg)] hover:opacity-90 transition-opacity",
        className
      )}
      aria-label="Skiller Champion — Home"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        {/* Shield base — champion / protection */}
        <path
          d="M18 4L6 10v8c0 6.5 5.2 11.8 12 14l0-20 0-2z"
          fill="currentColor"
          fillOpacity="0.12"
        />
        <path
          d="M18 4l12 6v8c0 6.5-5.2 11.8-12 14V4z"
          fill="currentColor"
          fillOpacity="0.2"
        />
        {/* S — Skiller letterform integrated into shield */}
        <path
          d="M14 14c0 .8.6 1.4 1.4 1.4h5.2c.8 0 1.4.6 1.4 1.4v1.2c0 .8-.6 1.4-1.4 1.4h-7c-.8 0-1.4-.6-1.4-1.4v-.2"
          stroke="var(--accent)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M22 22c0-.8-.6-1.4-1.4-1.4h-5.2c-.8 0-1.4-.6-1.4-1.4v-1.2c0-.8.6-1.4 1.4-1.4h7c.8 0 1.4.6 1.4 1.4v.2"
          stroke="var(--accent)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Small link/chain dot — Web3 */}
        <circle cx="18" cy="18" r="2" fill="var(--accent)" />
      </svg>
      {showText && (
        <span className="font-display font-semibold text-lg tracking-tight">
          Skiller Champion
        </span>
      )}
    </a>
  );
}
