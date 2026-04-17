"use client";

import { useEffect } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { COMPANY } from "@/lib/company-data";

function CountUp({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, { duration: 1.5, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, motionValue, value]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section className="border-y border-white/10 bg-brand-900/40 py-8">
      <div className="container-layout grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {COMPANY.stats.map((stat) => (
          <div key={stat.label} className="rounded-panel border border-white/10 bg-brand-900/60 p-5">
            <p className="text-3xl font-bold text-brand-400">
              <CountUp
                value={stat.value}
                suffix={"suffix" in stat ? stat.suffix : ""}
                prefix={"prefix" in stat ? stat.prefix : ""}
              />
            </p>
            <p className="mt-1 text-sm text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
