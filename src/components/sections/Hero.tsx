"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { smoothScrollToId } from "@/lib/utils/scroll";
import { useLocale } from "@/components/locale/LocaleProvider";

const heroImage =
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=90"; // Higher res, more cinematic

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const { dictionary } = useLocale();
  const heroCopy = dictionary.hero;

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-[100dvh] min-h-[800px] w-full overflow-hidden bg-earth-dark text-white"
    >
      {/* Cinematic Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={heroImage}
          alt="Concierge at the Bay - Luxury Estate Management"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <div className="noise-overlay opacity-20" />
      </motion.div>

      {/* Content */}
      <div className="lux-container relative z-10 flex h-full flex-col justify-end pb-24 pt-40 md:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-bronze animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/90">
              {heroCopy.badge.location}
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-8 overflow-hidden">
            <AnimatedText
              text={heroCopy.headline}
              className="text-balance text-[clamp(3rem,6vw,6rem)] font-light leading-[1.1] tracking-tight text-white"
            />
          </div>

          {/* Description & CTAs */}
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-lg font-light leading-relaxed text-white/80 md:text-xl"
            >
              {heroCopy.description}
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center gap-6">
              <MagneticButton
                href="#contact"
                variant="primary"
                className="bg-white !text-earth-dark hover:bg-bronze hover:!text-white border-none"
                icon={<ArrowUpRight size={20} />}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollToId("contact", 100);
                }}
              >
                {heroCopy.primaryCta}
              </MagneticButton>

              <button
                onClick={() => smoothScrollToId("about", 100)}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white transition-all hover:border-white hover:bg-white/10"
                aria-label="Scroll down"
              >
                <ArrowDown size={20} className="transition-transform group-hover:translate-y-1" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="h-12 w-[1px] bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </motion.div>
    </section>
  );
}
