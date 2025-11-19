"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/locale/LocaleProvider";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { smoothScrollToId } from "@/lib/utils/scroll";

export function ServicesPageContent() {
  const { dictionary } = useLocale();
  const servicesPage = dictionary.services.page;

  return (
    <div className="bg-sand text-earth">
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(230,220,208,0.4),_transparent_65%)]" />
        <div className="lux-container relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-6"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-earth/20 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-earth/70"
            >
              {servicesPage.heroEyebrow}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-semibold sm:text-[3.2rem] sm:leading-tight"
            >
              {servicesPage.heroHeading}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-earth/70">
              {servicesPage.heroDescription}
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.35em] text-earth/60">
              {servicesPage.heroNote}
            </motion.p>

            <motion.div variants={fadeUp}>
              <MagneticButton
                href="#contact"
                variant="primary"
                className="px-10"
                onClick={(event) => {
                  event.preventDefault();
                  smoothScrollToId("contact", 120);
                }}
              >
                {servicesPage.heroCta}
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="space-y-16 pb-24">
        {servicesPage.categories.map((category) => (
          <section key={category.id} className="border-y border-earth/10 py-12">
            <div className="lux-container grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-earth/60">
                  {category.title}
                </p>
                <p className="text-lg text-earth/70">{category.description}</p>
              </div>

              <div className="grid gap-6">
                {category.items.map((item, index) => (
                  <article
                    key={item.id}
                    className="rounded-[32px] border border-earth/15 bg-white/60 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.08)]"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-earth">{item.name}</h3>
                        <p className="text-sm uppercase tracking-[0.3em] text-earth/60">
                          {item.summary}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-earth/60">
                        {`${index + 1}`.padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-4 text-base text-earth/80">{item.details}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-earth text-sand py-20">
        <div className="lux-container grid gap-12 lg:grid-cols-[0.5fr_0.5fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              {servicesPage.dining.title}
            </p>
            <p className="text-3xl font-semibold text-white">
              {servicesPage.dining.description}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                {servicesPage.dining.essentialsTitle}
              </p>
              <ul className="mt-4 space-y-2 text-base text-white/90">
                {servicesPage.dining.essentials.map((spot) => (
                  <li key={spot} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" aria-hidden="true" />
                    <span>{spot}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                {servicesPage.dining.alsoTitle}
              </p>
              <ul className="mt-4 space-y-2 text-base text-white/90">
                {servicesPage.dining.alsoList.map((spot) => (
                  <li key={spot} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" aria-hidden="true" />
                    <span>{spot}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
