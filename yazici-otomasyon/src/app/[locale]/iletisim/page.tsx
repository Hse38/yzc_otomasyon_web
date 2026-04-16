import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ýletiþim | Yazýcý Otomasyon",
  description: "Ýstanbul ve Tekirdað ofislerimizle iletiþime geçin.",
};

export default function ContactPage() {
  return (
    <section className="container-layout py-16">
      <h1 className="text-4xl font-bold text-white">Ýletiþim</h1>
      <p className="mt-4 max-w-2xl text-gray-200">Tam iletiþim formu ve harita entegrasyonu bu sayfada olacak.</p>
    </section>
  );
}
