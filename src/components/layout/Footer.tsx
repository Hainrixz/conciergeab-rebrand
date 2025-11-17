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
    icon: <Instagram size={16} />,
  },
  {
    label: "LinkedIn",
    href: siteCopy.social.linkedin,
    icon: <Linkedin size={16} />,
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
    <footer className="relative overflow-hidden bg-onyx text-sand">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_60%)]" />
      <div className="lux-container relative grid gap-10 py-16 lg:grid-cols-[0.45fr_0.55fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-sand/70">
            <span className="relative block h-12 w-12 overflow-hidden rounded-full bg-sand">
              <Image
                src="/cab-logo.png"
                alt="Concierge at the Bay logo"
                fill
                className="object-cover"
                sizes="48px"
              />
            </span>
            Concierge at the Bay
          </div>
          <p className="max-w-md text-base text-sand/70">{siteCopy.tagline}</p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sand/20 text-sand transition hover:border-sand hover:text-white"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sand/50">
              {footerCopy.navigationLabel}
            </p>
            <div className="flex flex-col gap-2 text-sm text-sand/70">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="text-left transition hover:text-white"
                >
                  {item.label}
                </button>
              ))}
              <Link
                href="/politicas-de-privacidad"
                className="text-left text-sand/60 transition hover:text-white"
              >
                {footerCopy.privacyLinkLabel}
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sand/50">
              {footerCopy.contactLabel}
            </p>
            <div className="text-sm text-sand/80">
              <p className="mb-2 font-semibold uppercase tracking-[0.35em] text-sand/60">
                {footerCopy.callLabel}
              </p>
              <a
                href={`tel:${telHref}`}
                className="text-white transition hover:text-bronze"
              >
                {siteCopy.contact.phone}
              </a>
              <p className="mt-4 font-semibold uppercase tracking-[0.35em] text-sand/60">
                {footerCopy.emailLabel}
              </p>
              <a
                href={`mailto:${siteCopy.contact.email}`}
                className="text-white transition hover:text-bronze"
              >
                {siteCopy.contact.email}
              </a>
            </div>
          </div>

          <div className="space-y-4 sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sand/50">
              {footerCopy.locationLabel}
            </p>
            <p className="text-sm text-sand/80">{siteCopy.address}</p>
            <Link
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                handleNavClick("#contact");
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-sand transition hover:text-white"
            >
              {footerCopy.scheduleCta}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-sand/10">
        <div className="lux-container flex flex-col gap-2 py-6 text-xs uppercase tracking-[0.35em] text-sand/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Concierge at the Bay. All rights reserved.
          </span>
          <div className="flex flex-col gap-2 text-[0.7rem] uppercase tracking-[0.35em] text-sand/60 sm:flex-row sm:items-center sm:gap-6">
            <span>{footerCopy.craftedNote}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
