"use client";

import { COMPANY } from "@/lib/company-data";

export function ReferencesSection() {
  return (
    <section id="references" className="section-padding bg-brand-900/35">
      <div className="container-layout">
        <h2 className="text-3xl font-bold md:text-4xl">Musterilerimiz</h2>
        <p className="mt-3 text-white/80">Farkli sektorlerden 500+ firmaya hizmet verdik.</p>
        <div className="mt-8 overflow-hidden rounded-full border border-white/10 bg-brand-900/60 py-4">
          <div className="animate-[marquee_22s_linear_infinite] whitespace-nowrap">
            {COMPANY.sectors.concat(COMPANY.sectors).map((sector, index) => (
              <span key={`${sector}-${index}`} className="mx-6 text-sm text-white/85">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
