import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { BackToTopButton } from "@/components/ui/BackToTopButton";

export default function Home() {
  return (
    <>
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTopButton />
    </>
  );
}
