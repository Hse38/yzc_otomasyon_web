"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="container-layout relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-4xl font-extrabold leading-tight text-white lg:text-6xl"
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg text-gray-200"
        >
          {t("subtitle")}
        </motion.p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={`/${locale}/iletisim`}
            className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            {t("ctaPrimary")}
          </Link>
          <Link
            href={`/${locale}/urunler`}
            className="rounded-lg border border-blue-500 px-6 py-3 font-semibold text-blue-300 transition hover:border-blue-400 hover:text-blue-200"
          >
            {t("ctaSecondary")}
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,140,255,0.25),_transparent_45%)]" />
    </section>
  );
}
