import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanslar | Yazici Otomasyon",
  description: "Farkli sektorlerden is ortaklarimiz.",
};

export default function ReferencesPage() {
  return (
    <section className="container-layout py-16">
      <h1 className="text-4xl font-bold text-white">Referanslar</h1>
      <p className="mt-4 max-w-2xl text-gray-200">Sektor bazli referans kartlari ve marquee alani bu sayfada yer alacak.</p>
    </section>
  );
}
