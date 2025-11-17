import type { Metadata } from "next";
import { PrivacyContent } from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Concierge at the Bay",
  description:
    "Consulta el aviso de privacidad de Concierge at the Bay en español e inglés, junto con nuestras finalidades secundarias y mecanismos de contacto.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-onyx text-sand">
      <PrivacyContent />
    </main>
  );
}
