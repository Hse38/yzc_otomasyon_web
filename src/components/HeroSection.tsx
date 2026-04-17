"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-40">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-20" />
      <div className="container-layout relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.span variants={fadeUp} className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs">
            {CONTENT.hero.badge}
          </motion.span>
          <motion.h1 variants={fadeUp} className="mt-6 whitespace-pre-line text-4xl font-extrabold leading-tight md:text-6xl">
            {CONTENT.hero.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-3xl text-white/80 md:text-lg">
            {CONTENT.hero.subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white">
              {CONTENT.hero.primaryCta}
            </a>
            <a href="tel:+905530568939" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold">
              {CONTENT.hero.secondaryCta} -
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,140,255,0.28),_transparent_45%)]" />
    </section>
  );
}
