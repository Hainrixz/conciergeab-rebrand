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
    threshold: 0.2,
  });

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#f3ede6] text-earth py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_70%)]" />
      <div className="lux-container relative space-y-14">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="mx-auto max-w-3xl space-y-6 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center justify-center rounded-full border border-earth/10 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-earth/70"
          >
            {servicesCopy.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-semibold leading-tight text-earth sm:text-[3rem]"
          >
            Concierge services coordinated for every stay
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-earth/75 sm:text-xl"
          >
            {servicesCopy.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MagneticButton
              variant="primary"
              className="bg-earth text-sand hover:bg-earth/90"
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
              className="border border-earth/20 bg-white/80 text-earth hover:bg-earth/5"
            >
              {servicesCopy.viewAllLabel}
            </MagneticButton>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.35em] text-earth/50"
          >
            {servicesCopy.assurance}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-10"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicesCopy.services.map((service) => (
              <motion.article
                key={service.id}
                variants={fadeUp}
                className="group flex flex-col gap-3 rounded-[24px] border border-white/60 bg-white/85 p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(12,12,11,0.12)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-earth/10 bg-earth/5 text-earth">
                    {serviceIcons[service.id] ?? <Sparkles size={20} />}
                  </span>
                  <h3 className="text-xl font-semibold text-earth">
                    {service.name}
                  </h3>
                </div>

                <p className="text-sm text-earth/70">{service.summary}</p>
              </motion.article>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-earth/70 sm:flex-row sm:text-base">
            <span>Need something custom?</span>
            <button
              type="button"
              onClick={() => smoothScrollToId("contact", 120)}
              className="inline-flex items-center gap-2 rounded-full border border-earth/20 bg-white px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-earth transition hover:bg-earth hover:text-sand"
            >
              Speak to concierge
              <ArrowUpRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
