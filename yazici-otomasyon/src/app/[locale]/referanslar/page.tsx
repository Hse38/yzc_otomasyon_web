import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanslar | Yazýcý Otomasyon",
  description: "Farklý sektörlerden iþ ortaklarýmýz.",
};

export default function ReferencesPage() {
  return (
    <section className="container-layout py-16">
      <h1 className="text-4xl font-bold text-white">Referanslar</h1>
      <p className="mt-4 max-w-2xl text-gray-200">Sektör bazlý referans kartlarý ve marquee alaný bu sayfada yer alacak.</p>
    </section>
  );
}
