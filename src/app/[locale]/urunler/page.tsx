import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünler | Yazıcı Otomasyon",
  description: "Sensör, PLC ve sürücü ürün gamımızı keşfedin.",
};

export default function ProductsPage() {
  return (
    <section className="container-layout py-16">
      <h1 className="text-4xl font-bold text-white">Ürünler</h1>
      <p className="mt-4 max-w-2xl text-gray-200">
        Filtrelenebilir ürün listesi ve kategori tabları bu sayfada yer alacak.
      </p>
    </section>
  );
}
