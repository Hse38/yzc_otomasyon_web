import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkýmýzda | Yazýcý Otomasyon",
  description: "2003'ten günümüze otomasyon tecrübemiz.",
};

export default function AboutPage() {
  return (
    <section className="container-layout py-16">
      <h1 className="text-4xl font-bold text-white">Hakkýmýzda</h1>
      <p className="mt-4 max-w-2xl text-gray-200">Kurumsal tarihçe, misyon ve vizyon bölümleri burada kurgulanacak.</p>
    </section>
  );
}
