import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkimizda | Yazici Otomasyon",
  description: "2003'ten gunumuze otomasyon tecrubemiz.",
};

export default function AboutPage() {
  return (
    <section className="container-layout py-16">
      <h1 className="text-4xl font-bold text-white">Hakkimizda</h1>
      <p className="mt-4 max-w-2xl text-gray-200">Kurumsal tarihce, misyon ve vizyon bolumleri burada kurgulanacak.</p>
    </section>
  );
}
