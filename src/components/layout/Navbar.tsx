"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const links = [
  { key: "home", href: "" },
  { key: "products", href: "/urunler" },
  { key: "about", href: "/hakkimizda" },
  { key: "references", href: "/referanslar" },
  { key: "contact", href: "/iletisim" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-900/80 backdrop-blur-xl">
      <div className="container-layout flex h-20 items-center justify-between">
        <Link href={`/${locale}`} className="text-xl font-bold text-white">
          Yazıcı Otomasyon
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className="text-sm font-medium text-gray-200 transition hover:text-blue-400"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
