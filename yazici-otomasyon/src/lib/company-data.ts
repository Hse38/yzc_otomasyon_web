export const COMPANY = {
  name: "Yazıcı Otomasyon",
  founded: 2003,
  phone: "+90 553 056 8939",
  email: {
    main: "info@yaziciotomasyon.com",
    corlu: "corlu@yaziciotomasyon.com",
  },
  offices: [
    {
      city: "İstanbul",
      label: "Merkez Şube",
      address: "Yunus Emre Mahallesi 1328/2 Sok No: 23 Sultangazi / İstanbul",
      lat: 41.1007,
      lng: 28.8833,
    },
    {
      city: "Tekirdağ",
      label: "Çorlu Şube",
      address:
        "Veliköy, Kokulu (Mimar Sinan) Caddesi No:7/11C Çerkezköy / Tekirdağ",
      lat: 41.2833,
      lng: 28.0167,
    },
  ],
  brands: ["GEFRAN", "ELCO AUTOMATION"],
  sectors: ["İlaç", "Gıda", "Ambalaj", "Dolum", "Paketleme", "Otomotiv", "Beyaz Eşya"],
  social: {
    instagram: "#",
  },
} as const;
