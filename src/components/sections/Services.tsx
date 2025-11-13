"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { ReceiptText, Settings2, Sparkles } from "lucide-react";
import { useLocale } from "@/components/locale/LocaleProvider";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { smoothScrollToId } from "@/lib/utils/scroll";

const serviceIcons: Record<string, ReactElement> = {
  accounting: <ReceiptText size={22} />,
  maintenance: <Settings2 size={22} />,
  housekeeping: <Sparkles size={22} />,
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
      className="relative overflow-hidden bg-earth text-sand py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
      <div className="lux-container relative grid gap-12 lg:grid-cols-[0.45fr_0.55fr]">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="space-y-8"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-sand/80"
          >
            {servicesCopy.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-semibold sm:text-[3rem] sm:leading-tight"
          >
            {servicesCopy.heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-sand/80 sm:text-xl"
          >
            {servicesCopy.description}
          </motion.p>

          <motion.p variants={fadeUp} className="text-sm text-sand/70">
            {servicesCopy.assurance}
          </motion.p>

          <motion.div variants={fadeUp}>
            <MagneticButton
              variant="ghost"
              className="border border-white/30 bg-transparent px-8 py-3 text-white hover:bg-white/10"
              onClick={(event) => {
                event.preventDefault();
                smoothScrollToId("contact", 120);
              }}
            >
              {servicesCopy.cta}
            </MagneticButton>
          </motion.div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-1">
          {servicesCopy.services.map((service, index) => (
            <motion.article
              key={service.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 text-left shadow-[0_30px_90px_rgba(0,0,0,0.35)] transition hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-bronze/20" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-sand/70">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                    {serviceIcons[service.id] ?? <Sparkles size={22} />}
                  </span>
                  <span>{`${index + 1}`.padStart(2, "0")}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-sand/60">
                    {service.summary}
                  </p>
                </div>

                <p className="text-base text-sand/80">{service.details}</p>
                <p className="text-sm text-white/80">{service.note}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
