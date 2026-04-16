import { COMPANY } from "@/lib/company-data";

const stats = [
  { label: "Yıl Deneyim", value: `${new Date().getFullYear() - COMPANY.founded}+` },
  { label: "Tamamlanan Proje", value: "500+" },
  { label: "Ofis", value: `${COMPANY.offices.length}` },
  { label: "Sektör", value: "10+" },
];

export function AboutStrip() {
  return (
    <section className="border-y border-white/10 bg-navy-900 py-8">
      <div className="container-layout grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-card border border-white/10 bg-navy-800 p-5">
            <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-200">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
