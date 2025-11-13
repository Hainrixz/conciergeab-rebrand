"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, ArrowDown, ArrowUpRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { smoothScrollToId } from "@/lib/utils/scroll";
import { useLocale } from "@/components/locale/LocaleProvider";

const heroImage =
  "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1600&q=80&sat=10";

const secondaryImage =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const { dictionary } = useLocale();
  const heroCopy = dictionary.hero;

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const overlayY = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate min-h-screen overflow-hidden bg-cream pb-16 pt-[calc(var(--header-height)+3rem)] lg:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_transparent_60%)]" />
      <div className="lux-container relative grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:gap-12">
        <motion.div
          className="space-y-8 sm:space-y-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-earth/10 bg-white/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-earth/70 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
            variants={fadeUp}
          >
            {heroCopy.badge.location}
            <span className="h-px w-12 bg-earth/30" />
            {heroCopy.badge.since}
          </motion.div>

          <AnimatedText
            text={heroCopy.headline}
            className="text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.05] text-earth"
          />

          <motion.p
            className="max-w-2xl text-base text-earth/80 sm:text-xl"
            variants={fadeUp}
          >
            {heroCopy.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            variants={fadeUp}
          >
            <MagneticButton
              href="#contact"
              variant="primary"
              icon={<ArrowUpRight size={18} />}
              onClick={(event) => {
                event.preventDefault();
                smoothScrollToId("contact", 100);
              }}
            >
              {heroCopy.primaryCta}
            </MagneticButton>

            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-full border border-earth/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-earth/70 transition hover:border-earth hover:text-earth"
              onClick={() => smoothScrollToId("services", 120)}
            >
              {heroCopy.secondaryCta}
              <ArrowDown size={16} />
            </button>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-6 rounded-3xl border border-earth/10 bg-white/70 px-6 py-5 shadow-[0_20px_70px_rgba(80,61,43,0.12)]"
            variants={fadeUp}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-earth text-sand">
              <Shield size={24} />
            </div>
            <div className="text-sm text-earth/70">{heroCopy.assurance}</div>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            variants={fadeUp}
          >
            {heroCopy.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-earth/10 bg-white/70 px-5 py-5 shadow-[0_18px_60px_rgba(0,0,0,0.08)] sm:px-6 sm:py-6"
              >
                <div className="text-3xl font-semibold text-earth sm:text-4xl">
                  {stat.value}
                  <span className="text-bronze">{stat.suffix}</span>
                </div>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-earth/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative">
          <motion.div
            style={{ y: imageY }}
            className="relative h-[420px] w-full sm:h-[520px] lg:h-[640px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-earth shadow-[0_40px_140px_rgba(80,61,43,0.45)] sm:rounded-[40px] lg:rounded-[48px]">
              <Image
                src={heroImage}
                alt="Aerial view of luxury beachfront villas in Punta de Mita"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 45vw"
                className="object-cover"
              />
              <div className="noise-overlay" />
            </div>

            <motion.div
              style={{ y: overlayY }}
              className="pointer-events-auto absolute left-4 right-4 -top-12 flex flex-col gap-4 rounded-[28px] border border-white/30 bg-white/85 p-5 text-earth shadow-[0_30px_90px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:-top-10 sm:p-6 md:max-w-[320px] md:-left-12 md:right-auto md:top-6 lg:-left-16 lg:top-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.4em] text-earth/60">
                {heroCopy.highlightTitle}
              </span>
              <div className="grid gap-2 sm:flex sm:flex-wrap">
                {heroCopy.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-earth/10 bg-earth/5 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-earth/70 sm:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="pointer-events-auto absolute bottom-4 left-1/2 w-[calc(100%-2rem)] max-w-[360px] -translate-x-1/2 rounded-[24px] border border-white/20 bg-earth/90 p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,0.3)] sm:left-auto sm:right-6 sm:translate-x-0 sm:rounded-[28px] sm:w-[280px] sm:-bottom-10 lg:w-[260px] lg:right-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-xs uppercase tracking-[0.4em] text-white/60">
                {heroCopy.spotlightTitle}
              </div>
              <p className="mt-2 text-sm text-white/80">
                “{heroCopy.spotlightQuote}”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20">
                  <Image
                    src={secondaryImage}
                    alt="Luxury villa interior in Punta de Mita"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {heroCopy.spotlightProperty}
                  </div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                    {heroCopy.spotlightLocation}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        className="mx-auto mt-20 flex items-center gap-3 rounded-full border border-earth/20 bg-white/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-earth/70 shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:text-sm sm:px-6"
        onClick={() => smoothScrollToId("about", 100)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {heroCopy.scrollCta}
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
