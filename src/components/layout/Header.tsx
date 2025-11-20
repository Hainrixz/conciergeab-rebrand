"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { siteCopy } from "@/lib/data/site";
import { smoothScrollToId } from "@/lib/utils/scroll";
import { cn } from "@/lib/utils/cn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLocale } from "@/components/locale/LocaleProvider";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { locale, setLocale, dictionary } = useLocale();
  const navItems = dictionary.nav;
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const id = href.slice(1);
      if (pathname === "/") {
        smoothScrollToId(id, 100);
      } else {
        router.push(`/${href}`);
      }
    } else {
      router.push(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-luxury",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <div className="lux-container">
          <div
            className={cn(
              "relative flex items-center justify-between rounded-full transition-all duration-500 ease-luxury",
              isScrolled
                ? "glass-panel px-6 py-3"
                : "bg-transparent px-0 py-0"
            )}
          >
            <Link
              href="#hero"
              className="flex items-center gap-3"
              onClick={(event) => {
                event.preventDefault();
                handleNavClick("#hero");
              }}
            >
              <span className="relative block h-10 w-10 overflow-hidden rounded-full bg-earth-dark">
                <Image
                  src="/cab-logo.png"
                  alt="Concierge at the Bay"
                  fill
                  className="object-cover"
                  sizes="40px"
                  priority
                />
              </span>
              <div className={cn("flex flex-col leading-tight transition-colors duration-300", isScrolled ? "text-earth-dark" : "text-white")}>
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Concierge</span>
                <span className="text-[0.6rem] font-light uppercase tracking-[0.4em] opacity-80">
                  at the Bay
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-bronze",
                    isScrolled ? "text-earth-dark/80" : "text-white/90"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className={cn(
                "hidden items-center gap-2 rounded-full border px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest transition-colors lg:flex",
                isScrolled ? "border-earth/10 text-earth-dark" : "border-white/20 text-white"
              )}>
                <Globe size={14} className="opacity-70" />
                <div className="flex gap-2">
                  {(["en", "es"] as const).map((code) => (
                    <button
                      key={code}
                      onClick={() => setLocale(code)}
                      className={cn(
                        "transition-opacity hover:opacity-100",
                        locale === code ? "opacity-100" : "opacity-50"
                      )}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block">
                <MagneticButton
                  href="#contact"
                  variant={isScrolled ? "primary" : "ghost"}
                  className={cn(
                    "h-10 px-5 text-xs",
                    !isScrolled && "bg-white/10 border-white/20 text-white hover:bg-white/20"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                >
                  Book Now
                </MagneticButton>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden",
                  isScrolled
                    ? "border-earth/10 text-earth-dark hover:bg-earth/5"
                    : "border-white/20 text-white hover:bg-white/10"
                )}
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm bg-sand p-8 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-earth-dark">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-earth/10 text-earth-dark hover:bg-earth/5"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-2xl font-light text-earth-dark"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="mb-8 h-px w-full bg-earth/10" />
                <div className="flex flex-col gap-4 text-sm text-earth/60">
                  <a href={`tel:${siteCopy.contact.phone}`} className="hover:text-earth-dark transition-colors">
                    {siteCopy.contact.phone}
                  </a>
                  <a href={`mailto:${siteCopy.contact.email}`} className="hover:text-earth-dark transition-colors">
                    {siteCopy.contact.email}
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
