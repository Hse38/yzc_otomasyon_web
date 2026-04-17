"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";

const links = [
  { label: "Hizmetler", href: "#services" },
  { label: "Neden Biz", href: "#why-us" },
  { label: "Urunler", href: "#products" },
  { label: "Referanslar", href: "#references" },
  { label: "Iletisim", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-brand-900/95 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="container-layout flex h-20 items-center justify-between">
        <a href="#top" className="text-xl font-semibold text-white">
          Yazici <span className="text-brand-500">Otomasyon</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/85 transition hover:text-white">
              {link.label}
            </a>
          ))}
          <div className="ml-2 flex gap-2">
            <a href="#contact" className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white">
              Teklif Al
            </a>
            <a href="tel:+905530568939" className="rounded-full border border-white/30 px-4 py-2 text-sm text-white">
              Hemen Ara
            </a>
          </div>
          <button className="rounded-full border border-white/20 px-3 py-1 text-xs">TR</button>
        </nav>

        <button
          type="button"
          className="inline-flex rounded-lg border border-white/20 p-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Mobil menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-brand-900/95 px-6 pb-6 pt-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/90" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="mt-2 rounded-full bg-brand-500 px-4 py-2 text-center text-sm font-semibold">
              Teklif Al
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
