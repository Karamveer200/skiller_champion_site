"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--border)] py-20 lg:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div
          className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-10 sm:p-12 lg:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Build the next phase of your product on Web3.
          </h2>
          <p className="mt-4 max-w-xl text-[var(--fg-muted)] text-lg">
            Whether you need smart contracts, token design, or full-stack
            support to launch, we can help. Tell us about your project and
            timeline.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:hello@skillerchampion.com"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--bg)] hover:bg-[var(--accent-dim)] transition-colors"
            >
              hello@skillerchampion.com
              <ArrowRight size={16} />
            </a>
            <Link
              href="https://www.linkedin.com/company/skiller-champion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--fg)] hover:bg-[var(--bg)] transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
