"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-[var(--border)] py-20 lg:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-4 mb-12">
          <span className="font-display text-sm uppercase tracking-[0.2em] text-[var(--fg-muted)]">
            Who we are
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            About
          </h2>
        </div>
        <motion.blockquote
          className="border-l-2 border-[var(--accent)] pl-6 text-xl sm:text-2xl text-[var(--fg)] font-medium leading-snug"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          We are a team of Web3 practitioners building the infrastructure
          startups need to ship on-chain without burning months or hiring a full
          in-house team.
        </motion.blockquote>
        <motion.p
          className="mt-8 max-w-2xl text-[var(--fg-muted)] text-lg leading-relaxed"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skiller Champion exists to close the gap between a great idea and a
          live, secure product. We focus on execution: smart contracts that
          ship, token design that holds up under scrutiny, and go-to-market
          support that connects you with real users. Whether you are pre-token
          or already live, we help you move faster and reduce risk.{" "}
          <Link href="#how-we-work" className="text-[var(--accent)] hover:underline">
            See how we work
          </Link>
          .
        </motion.p>
      </div>
    </section>
  );
}
