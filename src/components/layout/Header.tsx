"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
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
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    if (isMenuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    if (pathname === "/") {
      smoothScrollToId(id, 100);
    } else {
      router.push(`/${href}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        isScrolled ? "bg-sand/95 shadow-xl shadow-earth/5 backdrop-blur-xl" : "",
      )}
    >
      <div className="lux-container flex h-[var(--header-height)] items-center justify-between">
        <Link
          href="#hero"
          className="flex items-center gap-3 font-semibold tracking-[0.3em] text-xs uppercase text-earth"
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("#hero");
          }}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-earth text-sand font-bold text-lg">
            C
          </span>
          <div className="flex flex-col leading-tight tracking-[0.35em]">
            <span>Concierge</span>
            <span className="text-[0.62rem] font-light tracking-[0.74em]">
              at the Bay
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-medium text-earth/70 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              className="transition-all duration-300 hover:text-earth"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-full border border-earth/15 px-2 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-earth/80 lg:flex">
            <Globe size={16} className="text-earth/60" />
            <div className="flex overflow-hidden rounded-full border border-earth/10">
              {(["en", "es"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLocale(code)}
                  className={cn(
                    "px-3 py-1 transition-colors",
                    locale === code
                      ? "bg-earth text-sand"
                      : "text-earth/60 hover:text-earth",
                  )}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <MagneticButton
              href="#contact"
              variant="primary"
              icon={<ArrowUpRight size={18} />}
              onClick={(event) => {
                event.preventDefault();
                handleNavClick("#contact");
              }}
            >
              Schedule consultation
            </MagneticButton>
          </div>

          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-earth/15 text-earth lg:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <motion.aside
                  className="relative ml-auto flex h-full w-[85%] max-w-sm flex-col justify-between bg-sand px-8 pb-10 pt-24 text-earth shadow-2xl"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    className="absolute right-6 top-8 flex h-10 w-10 items-center justify-center rounded-full border border-earth/15 text-earth"
                    aria-label="Close navigation menu"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X size={18} />
                  </button>
                  <div className="flex flex-col gap-8">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.href}
                        type="button"
                        className="text-left text-2xl font-semibold"
                        onClick={() => handleNavClick(item.href)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 text-sm">
                    <span className="uppercase tracking-[0.3em] text-earth/60">
                      Contact
                    </span>
                    <span>{siteCopy.contact.phone}</span>
                    <span>{siteCopy.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.3em] text-earth/70">
                    <Globe size={16} />
                    {(["en", "es"] as const).map((code, index) => (
                      <span key={code} className="flex items-center gap-1">
                        {index === 1 && (
                          <span aria-hidden="true" className="text-earth/40">
                            /
                          </span>
                        )}
                        <button
                          type="button"
                          className={cn(
                            "px-1 py-1",
                            locale === code ? "text-earth" : "text-earth/50",
                          )}
                          onClick={() => setLocale(code)}
                        >
                          {code.toUpperCase()}
                        </button>
                      </span>
                    ))}
                  </div>
                </motion.aside>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  );
}
