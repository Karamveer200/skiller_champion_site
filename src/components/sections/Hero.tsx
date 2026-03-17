"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-5 pt-24 pb-20 lg:px-8 lg:pt-32 bg-[image:var(--gradient-hero)]">
      <div className="mx-auto max-w-6xl w-full">
        <motion.p
          className="font-display text-sm uppercase tracking-[0.2em] text-[var(--accent)] mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Web3 infrastructure for startups
        </motion.p>
        <motion.h1
          className="font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.1]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          One stack.
          <br />
          <span className="text-[var(--fg-muted)]">Every chain.</span>
        </motion.h1>
        <motion.p
          className="mt-8 max-w-xl text-[var(--fg-muted)] text-lg leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          We help early-stage teams go from idea to live product on Web3. Smart
          contracts, token design, and go-to-market so you can focus on building.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--bg)] hover:bg-[var(--accent-dim)] transition-colors"
          >
            See our services
          </Link>
          <Link
            href="#process"
            className="inline-flex items-center justify-center rounded-md border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--fg)] hover:bg-[var(--bg-elevated)] transition-colors"
          >
            How we work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
