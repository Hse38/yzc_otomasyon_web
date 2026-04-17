import { COMPANY } from "@/lib/company-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-950 py-12">
      <div className="container-layout grid gap-8 text-sm text-white/80 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">Yazici Otomasyon</p>
          <p className="mt-2">2003&apos;ten beri endustriyel otomasyon cozumleri.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Hizmetler</p>
          <p className="mt-2">Endustriyel Otomasyon</p>
          <p>Yerli Uretim Sensorler</p>
          <p>Sistem Entegrasyonu</p>
        </div>
        <div>
          <p className="font-semibold text-white">Sirket</p>
          <p className="mt-2">Hakkimizda</p>
          <p>Urunler</p>
          <p>Referanslar</p>
          <p>Iletisim</p>
        </div>
        <div>
          <p className="font-semibold text-white">Iletisim</p>
          <p className="mt-2">{COMPANY.phone}</p>
          <p>{COMPANY.email.main}</p>
          <p>{COMPANY.offices[0].address}</p>
        </div>
      </div>
      <div className="container-layout mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
        © 2025 Yazici Otomasyon. Tum haklari saklidir. | Istanbul, Turkiye
      </div>
    </footer>
  );
}
