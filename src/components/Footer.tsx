import Link from "next/link";
import { Logo } from "./Logo";

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#how-we-work", label: "How We Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-10 text-sm text-[var(--fg-muted)]">
          Skiller Champion. Web3 infrastructure for startups. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
