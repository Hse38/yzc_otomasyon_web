"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";

const filters = ["Tumu", "Sensorler", "PLC ve Kontrol", "Suruculer", "GEFRAN", "ELCO"] as const;

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Tumu");

  const products = useMemo(() => {
    if (activeFilter === "Tumu") return CONTENT.products;
    if (activeFilter === "GEFRAN") return CONTENT.products.filter((item) => item.name.includes("GEFRAN"));
    if (activeFilter === "ELCO") return CONTENT.products.filter((item) => item.name.includes("ELCO"));
    return CONTENT.products.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="products" className="section-padding">
      <div className="container-layout">
        <h2 className="text-3xl font-bold md:text-4xl">Urunler</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm ${
                filter === activeFilter ? "border-brand-500 bg-brand-500 text-white" : "border-white/20 text-white/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-panel border border-white/10 bg-brand-900/60"
            >
              <div className="h-44 bg-gradient-to-br from-brand-700 to-brand-900" />
              <div className="p-5">
                <span className="rounded-full bg-brand-500/20 px-2 py-1 text-xs text-brand-400">{product.category}</span>
                <h3 className="mt-3 font-semibold">{product.name}</h3>
                <p className="mt-3 text-sm text-brand-400 opacity-0 transition group-hover:opacity-100">Incele</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
