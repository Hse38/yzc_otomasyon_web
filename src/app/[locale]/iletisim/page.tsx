import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iletisim | Yazici Otomasyon",
  description: "Istanbul ve Tekirdag ofislerimizle iletisime gecin.",
};

export default function ContactPage() {
  return (
    <section className="container-layout py-16">
      <h1 className="text-4xl font-bold text-white">Iletisim</h1>
      <p className="mt-4 max-w-2xl text-gray-200">Tam iletisim formu ve harita entegrasyonu bu sayfada olacak.</p>
    </section>
  );
}
