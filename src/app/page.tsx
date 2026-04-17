import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsStrip } from "@/components/StatsStrip";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ProductsSection } from "@/components/ProductsSection";
import { BrandsSection } from "@/components/BrandsSection";
import { ReferencesSection } from "@/components/ReferencesSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { FocusMap } from "@/components/FocusMap";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <WhyUsSection />
      <ProductsSection />
      <BrandsSection />
      <ReferencesSection />
      <FocusMap lat={41.1007} lng={28.8833} zoom={13} />
      <FaqSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
