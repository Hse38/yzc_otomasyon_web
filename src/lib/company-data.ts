export const COMPANY = {
  name: "Yazıcı Otomasyon",
  founded: 2003,
  phone: "+90 553 056 8939",
  whatsapp: "905530568939",
  email: {
    main: "info@yaziciotomasyon.com",
    corlu: "corlu@yaziciotomasyon.com",
  },
  offices: [
    {
      label: "İstanbul Merkez",
      address: "Yunus Emre Mahallesi 1328/2 Sok. No:23 Sultangazi / İstanbul",
    },
    {
      label: "Çorlu Şube",
      address: "Veliköy, Kokulu (Mimar Sinan) Caddesi No:7/11C Çerkezköy / Tekirdağ",
    },
  ],
  brands: ["GEFRAN", "ELCO AUTOMATION"],
  stats: [
    { value: 20, suffix: "+", label: "Yıllık Deneyim" },
    { value: 500, suffix: "+", label: "Tamamlanan Proje" },
    { value: 100, prefix: "%", label: "Müşteri Memnuniyeti" },
    { value: 2, suffix: "", label: "İrtibat Ofisi" },
    { value: 10, suffix: "+", label: "Hizmet Sektörü" },
  ],
  sectors: ["İlaç", "Gıda", "Otomotiv", "Beyaz Eşya", "Ambalaj", "Tekstil", "Dolum", "Paketleme"],
  social: {
    instagram: "#",
  },
} as const;
