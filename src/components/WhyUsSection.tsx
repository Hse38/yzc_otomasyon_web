"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function WhyUsSection() {
  return (
    <section id="why-us" className="section-padding bg-brand-900/40">
      <div className="container-layout grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="rounded-panel border border-white/10 bg-gradient-to-br from-brand-800 to-brand-900 p-10">
          <p className="text-4xl font-black leading-tight">YAZICI OTOMASYON</p>
        </div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold md:text-4xl">
            {CONTENT.whyUs.title}
          </motion.h2>
          <div className="mt-7 space-y-5">
            {CONTENT.whyUs.items.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="flex gap-3">
                <CheckCircle2 className="mt-1 text-brand-400" size={18} />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
