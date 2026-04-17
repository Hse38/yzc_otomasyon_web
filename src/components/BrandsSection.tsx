import { COMPANY } from "@/lib/company-data";

export function BrandsSection() {
  return (
    <section className="py-10">
      <div className="container-layout flex flex-wrap items-center justify-center gap-4">
        {COMPANY.brands.map((brand) => (
          <div key={brand} className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80">
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
