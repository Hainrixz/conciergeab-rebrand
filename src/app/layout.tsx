import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { PageReveal } from "@/components/layout/PageReveal";
import { StructuredData } from "@/components/layout/StructuredData";
import { Header } from "@/components/layout/Header";
import { LocaleProvider } from "@/components/locale/LocaleProvider";
import { siteCopy } from "@/lib/data/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const siteUrl = "https://www.conciergeatthebay.com";
const siteTitle = "Concierge at the Bay | Luxury Property Management in Punta de Mita";
const siteDescription =
  "Concierge at the Bay delivers bespoke property management, concierge, and guest experience services for Punta de Mita's most prestigious estates.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Concierge at the Bay",
  },
  description: siteDescription,
  keywords: [
    "Punta de Mita property management",
    "luxury villas mexico",
    "concierge services punta mita",
    "estate management",
    "villa rentals",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Concierge at the Bay",
    images: [
      {
        url: `${siteUrl}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Concierge at the Bay luxury villas overlooking Punta de Mita coastline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@conciergebay",
    images: [`${siteUrl}/og.jpg`],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const digitsOnly = siteCopy.contact.phone.replace(/\D/g, "");
  const normalizedPhone =
    digitsOnly.length === 0
      ? "+52 1 322 000 0000"
      : digitsOnly.startsWith("52")
        ? `+${digitsOnly}`
        : `+52${digitsOnly.replace(/^0+/, "")}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteCopy.name,
    description: siteDescription,
    url: siteUrl,
    telephone: normalizedPhone,
    email: siteCopy.contact.email,
    areaServed: "Punta de Mita, Nayarit, Mexico",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteCopy.address,
      addressLocality: "Punta de Mita",
      addressRegion: "Nayarit",
      postalCode: "63734",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.7731,
      longitude: -105.5183,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: Object.values(siteCopy.social),
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} bg-sand text-earth antialiased selection:bg-bronze selection:text-white`}
      >
        <LocaleProvider>
          <PageReveal />
          <Header />
          {children}
        </LocaleProvider>
        <StructuredData data={structuredData} />
      </body>
    </html>
  );
}
