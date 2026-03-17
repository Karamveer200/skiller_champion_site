"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Discovery call",
    body: "Short call to align on your product, timeline, and what you need from us. We clarify scope and give you a clear path to a proposal.",
  },
  {
    number: "02",
    title: "Proposal and scope",
    body: "We send a fixed-scope proposal with milestones and deliverables. No surprise fees; we lock in scope so you can plan.",
  },
  {
    number: "03",
    title: "Build and iterate",
    body: "We work in sprints with regular check-ins. You get demos and access to code as we go. Feedback is built into the loop.",
  },
  {
    number: "04",
    title: "Launch and handoff",
    body: "We support deployment, documentation, and knowledge transfer. You leave with something live and maintainable.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="border-t border-[var(--border)] py-20 lg:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-4 mb-16">
          <span className="font-display text-sm uppercase tracking-[0.2em] text-[var(--fg-muted)]">
            From first call to launch
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Process
          </h2>
          <p className="max-w-2xl text-[var(--fg-muted)] text-lg">
            We keep the funnel short. Intro call to proposal in days, not weeks.
            From kickoff to first deliverable in under two weeks when scope is
            clear.{" "}
            <Link href="#contact" className="text-[var(--accent)] hover:underline">
              Start here
            </Link>
            .
          </p>
        </div>
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <motion.li
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <span className="font-display text-3xl font-semibold text-[var(--fg-muted)]/50">
                {item.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-[var(--fg-muted)] text-sm leading-relaxed">
                {item.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
