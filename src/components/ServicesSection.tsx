"use client";

import { motion } from "framer-motion";
import { Cpu, Wrench, ShieldCheck } from "lucide-react";
import { CONTENT } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

const icons = [Cpu, Wrench, ShieldCheck, Cpu, Wrench, ShieldCheck];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="container-layout">
        <h2 className="text-3xl font-bold md:text-4xl">Hizmetlerimiz</h2>
        <motion.div
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CONTENT.services.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.article key={service.title} variants={fadeUp} className="group rounded-panel border border-white/10 bg-brand-900/60 p-6">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500/20 text-brand-400">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{service.description}</p>
                <p className="mt-6 text-sm font-medium text-brand-400">Detaylari Gor -</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
