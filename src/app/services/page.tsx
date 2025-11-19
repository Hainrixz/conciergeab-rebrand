import { ServicesPageContent } from "@/components/sections/ServicesPageContent";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { BackToTopButton } from "@/components/ui/BackToTopButton";

export default function ServicesPage() {
  return (
    <>
      <main className="relative overflow-hidden">
        <ServicesPageContent />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTopButton />
    </>
  );
}
