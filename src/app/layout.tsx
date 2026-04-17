import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/map.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yaziciotomasyon.com"),
  title: "Yazici Otomasyon | Endustriyel Otomasyon Cozumleri",
  description:
    "GEFRAN ve ELCO AUTOMATION yetkili bayisi Yazici Otomasyon: sensorden PLC sistemlerine endustriyel cozumler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
