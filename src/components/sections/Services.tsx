"use client";

import { motion } from "framer-motion";
import {
  FileCode2,
  Coins,
  Rocket,
  Shield,
  Layers,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: FileCode2,
    title: "Smart contract development",
    description:
      "Audited, gas-efficient contracts for tokens, NFTs, staking, and governance. We ship on EVM and move to new chains when it matters.",
  },
  {
    icon: Coins,
    title: "Token design and economics",
    description:
      "Tokenomics that align incentives and pass due diligence. Supply, distribution, vesting, and utility designed for long-term health.",
  },
  {
    icon: Rocket,
    title: "Launch and go-to-market",
    description:
      "From testnet to mainnet: deployment, monitoring, and early growth. We help you reach the right communities and iterate on feedback.",
  },
  {
    icon: Shield,
    title: "Security and audits",
    description:
      "Internal reviews and coordination with third-party auditors. We prioritize critical paths and document assumptions so nothing is left to chance.",
  },
  {
    icon: Layers,
    title: "Multi-chain strategy",
    description:
      "EVM, L2s, and beyond. We help you choose where to deploy first and how to expand without fragmenting liquidity or UX.",
  },
  {
    icon: BarChart3,
    title: "Analytics and tooling",
    description:
      "Dashboards, alerts, and internal tools so you can see what’s happening on-chain and in the market without building everything in-house.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-[var(--border)] py-20 lg:py-28 scroll-mt-20 bg-[image:var(--gradient-services)]"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-4 mb-16">
          <span className="font-display text-sm uppercase tracking-[0.2em] text-[var(--fg-muted)]">
            What we do
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Services
          </h2>
          <p className="max-w-2xl text-[var(--fg-muted)] text-lg">
            End-to-end Web3 support for startups: from first contract to
            mainnet and beyond.{" "}
            <Link href="#contact" className="text-[var(--accent)] hover:underline">
              Tell us what you need
            </Link>
            .
          </p>
        </div>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 hover:border-[var(--accent)]/30 transition-colors"
            >
              <item.icon
                className="mb-4 text-[var(--accent)]"
                size={28}
                strokeWidth={1.5}
              />
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-[var(--fg-muted)] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
