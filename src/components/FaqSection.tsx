"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CONTENT } from "@/lib/content";

export function FaqSection() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section className="section-padding">
      <div className="container-layout max-w-4xl">
        <h2 className="text-3xl font-bold md:text-4xl">Sikca Sorulan Sorular</h2>
        <div className="mt-8 space-y-3">
          {CONTENT.faq.map((item, index) => {
            const isOpen = openItem === index;
            return (
              <article key={item.question} className="rounded-panel border border-white/10 bg-brand-900/55">
                <button
                  type="button"
                  onClick={() => setOpenItem(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-medium">{item.question}</span>
                  <ChevronDown size={18} className={isOpen ? "rotate-180 transition" : "transition"} />
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-white/75">{item.answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
