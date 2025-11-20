"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Car,
  ChefHat,
  Plane,
  Route,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";
import { useLocale } from "@/components/locale/LocaleProvider";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { smoothScrollToId } from "@/lib/utils/scroll";
import { AnimatedText } from "@/components/ui/AnimatedText";

const serviceIcons: Record<string, ReactElement> = {
  "airport-transfer": <Plane size={20} />,
  "private-transport": <Car size={20} />,
  "private-chef": <ChefHat size={20} />,
  "grocery-prestocking": <ShoppingBag size={20} />,
  "golf-cart": <Route size={20} />,
  "wellness-experiences": <Star size={20} />,
};

export function Services() {
  const { dictionary } = useLocale();
  const servicesCopy = dictionary.services;
  const { ref, controls } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-sand text-earth-dark py-24 sm:py-32 lg:pt-10"
    >
      {/* Background Texture */}
      <div className="noise-overlay opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.6),_transparent_70%)]" />

      <div className="lux-container relative space-y-20">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="mx-auto max-w-3xl space-y-8 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-earth/10 bg-white/50 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-bronze backdrop-blur-sm">
              <Sparkles size={14} />
              {servicesCopy.eyebrow}
            </span>
          </motion.div>

          <div className="space-y-6">
            <AnimatedText
              text="Concierge services coordinated for every stay"
              className="text-4xl font-light leading-[1.1] tracking-tight text-earth-dark sm:text-5xl lg:text-6xl"
              align="center"
            />

            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-earth-dark/70 sm:text-xl"
            >
              {servicesCopy.description}
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MagneticButton
              variant="primary"
              className="min-w-[160px] justify-center bg-earth-dark text-sand hover:bg-earth-dark/90"
              onClick={(event) => {
                event.preventDefault();
                smoothScrollToId("contact", 120);
              }}
            >
              {servicesCopy.cta}
            </MagneticButton>
            <MagneticButton
              href="/services"
              variant="ghost"
              className="min-w-[160px] justify-center border border-earth/10 bg-white/40 text-earth-dark hover:bg-white/60"
            >
              {servicesCopy.viewAllLabel}
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {servicesCopy.services.map((service) => (
            <motion.article
              key={service.id}
              variants={fadeUp}
              className="group relative flex flex-col gap-6 overflow-hidden rounded-[32px] border border-white/40 bg-white/40 p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-earth/10 bg-white/50 text-earth-dark shadow-sm transition-colors group-hover:bg-earth-dark group-hover:text-sand">
                  {serviceIcons[service.id] ?? <Sparkles size={24} />}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-earth/10 bg-transparent text-earth/30 transition-all group-hover:border-earth/30 group-hover:text-earth">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-medium text-earth-dark">
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed text-earth/70">
                  {service.summary}
                </p>
              </div>

              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-earth/40">
            {servicesCopy.assurance}
          </p>
          <div className="h-px w-12 bg-earth/10" />
          <button
            type="button"
            onClick={() => smoothScrollToId("contact", 120)}
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-earth-dark transition-colors hover:text-bronze"
          >
            Speak to concierge
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
