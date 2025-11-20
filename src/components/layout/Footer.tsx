"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/components/locale/LocaleProvider";
import { siteCopy } from "@/lib/data/site";
import { smoothScrollToId } from "@/lib/utils/scroll";

const socialLinks = [
  {
    label: "Instagram",
    href: siteCopy.social.instagram,
    icon: <Instagram size={18} />,
  },
  {
    label: "LinkedIn",
    href: siteCopy.social.linkedin,
    icon: <Linkedin size={18} />,
  },
];

export function Footer() {
  const { dictionary } = useLocale();
  const navItems = dictionary.nav;
  const footerCopy = dictionary.footer;
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const digitsOnly = siteCopy.contact.phone.replace(/\D/g, "");
  const telHref =
    digitsOnly.length === 0
      ? ""
      : digitsOnly.startsWith("52")
        ? `+${digitsOnly}`
        : `+52${digitsOnly.replace(/^0+/, "")}`;

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    if (isHomePage) {
      smoothScrollToId(id, 100);
    } else {
      router.push(`/${href}`);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-onyx text-sand-light">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.03),_transparent_70%)]" />

      <div className="lux-container relative py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.4fr_0.6fr]">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
              <span className="relative block h-14 w-14 overflow-hidden rounded-full bg-white/10">
                <Image
                  src="/cab-logo.png"
                  alt="Concierge at the Bay logo"
                  fill
                  className="object-cover opacity-90"
                  sizes="56px"
                />
              </span>
              <div className="flex flex-col">
                <span>Concierge</span>
                <span className="text-[0.65rem] font-light tracking-[0.4em] text-white/60">at the Bay</span>
              </div>
            </div>
            <p className="max-w-sm text-lg font-light leading-relaxed text-white/60">
              {siteCopy.tagline}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Navigation */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-bronze">
                {footerCopy.navigationLabel}
              </h4>
              <div className="flex flex-col gap-4 text-sm text-white/60">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="text-left transition-colors hover:text-white"
                  >
                    {item.label}
                  </button>
                ))}
                <Link
                  href="/politicas-de-privacidad"
                  className="text-left transition-colors hover:text-white"
                >
                  {footerCopy.privacyLinkLabel}
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-bronze">
                {footerCopy.contactLabel}
              </h4>
              <div className="flex flex-col gap-4 text-sm text-white/60">
                <div>
                  <p className="mb-1 text-[0.65rem] uppercase tracking-widest text-white/30">
                    {footerCopy.callLabel}
                  </p>
                  <a href={`tel:${telHref}`} className="block transition-colors hover:text-white">
                    {siteCopy.contact.phone}
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-[0.65rem] uppercase tracking-widest text-white/30">
                    {footerCopy.emailLabel}
                  </p>
                  <a href={`mailto:${siteCopy.contact.email}`} className="block transition-colors hover:text-white">
                    {siteCopy.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-bronze">
                {footerCopy.locationLabel}
              </h4>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-white/60">
                  {siteCopy.address}
                </p>
                <Link
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:text-bronze"
                >
                  {footerCopy.scheduleCta}
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="lux-container flex flex-col gap-4 py-8 text-[0.65rem] uppercase tracking-[0.2em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Concierge at the Bay.
          </span>
          <span className="text-white/20">
            {footerCopy.craftedNote}
          </span>
        </div>
      </div>
    </footer>
  );
}
