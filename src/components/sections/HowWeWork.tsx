"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Execution first",
    subtitle: "Shipping over theorizing",
    body: "We prefer working code and clear scope over long decks. You get something you can test and iterate on, not a pile of slides.",
  },
  {
    number: "02",
    title: "Ownership",
    subtitle: "High agency",
    body: "You own the product; we own the delivery. We integrate with your stack and processes so you keep full control and visibility.",
  },
  {
    number: "03",
    title: "Transparent process",
    subtitle: "No black boxes",
    body: "Clear milestones, regular updates, and documented decisions. You always know what is built, what is next, and why.",
  },
];

export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="relative border-t border-[var(--border)] py-20 lg:py-28 scroll-mt-20 bg-[image:var(--gradient-how)]"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-4 mb-16">
          <span className="font-display text-sm uppercase tracking-[0.2em] text-[var(--fg-muted)]">
            Culture
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            How we work
          </h2>
          <p className="max-w-2xl text-[var(--fg-muted)] text-lg">
            We run like a small, focused team: fast communication, clear
            ownership, and a bias for shipping.{" "}
            <Link href="#process" className="text-[var(--accent)] hover:underline">
              Our process
            </Link>{" "}
            is built around your timeline.
          </p>
        </div>
        <ul className="grid gap-12 lg:grid-cols-3">
          {pillars.map((item, i) => (
            <motion.li
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="font-display text-4xl font-semibold text-[var(--fg-muted)]/50">
                {item.number}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--accent)]">
                {item.subtitle}
              </p>
              <p className="mt-4 text-[var(--fg-muted)] leading-relaxed">
                {item.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
