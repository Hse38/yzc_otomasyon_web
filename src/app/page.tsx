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
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

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
      <FaqSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
