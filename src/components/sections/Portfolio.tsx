"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useLocale } from "@/components/locale/LocaleProvider";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { smoothScrollToId } from "@/lib/utils/scroll";

const partnerUrl = "https://www.mitarentals.com/";
const gridAnchorId = "residences-grid";

export function Portfolio() {
  const { dictionary } = useLocale();
  const copy = dictionary.portfolio;
  const { ref, controls } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#f5f1ea] py-24 text-earth sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_transparent_60%)]" />
      <div className="lux-container relative space-y-16">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid gap-10 lg:grid-cols-[0.58fr_0.42fr]"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-earth/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-earth/70">
              {copy.eyebrow}
            </span>
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-earth px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-sand">
                {copy.badge}
              </span>
              <h2 className="text-4xl font-semibold leading-tight sm:text-[3.2rem]">
                {copy.heading}
              </h2>
              <p className="text-lg text-earth/80">{copy.description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                variant="primary"
                className="bg-earth text-sand hover:bg-earth/90"
                onClick={() => smoothScrollToId(gridAnchorId, 80)}
              >
                {copy.seeAllLabel}
              </MagneticButton>
              <p className="text-sm text-earth/60">{copy.partnerHeadline}</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-[32px] border border-earth/10 bg-white/80 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-earth/60">
              Mita Rentals
            </p>
            <p className="mt-4 text-base text-earth/80">
              {copy.partnerDescription}
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-earth/20 bg-earth/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-earth/80">
              Punta Mita · Concierge verified
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          id={gridAnchorId}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {copy.highlights.map((highlight, index) => (
            <motion.article
              key={highlight.title}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-[32px] border border-earth/10 bg-white shadow-[0_30px_110px_rgba(80,61,43,0.15)]"
            >
              <div className="relative h-56">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover"
                />
                <div className="noise-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/70 via-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/85">
                  {`${index + 1}`.padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-earth/50">
                    {highlight.subtitle}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-earth">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-sm text-earth/70">
                  {highlight.description}
                </p>
                <Link
                  href={partnerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-earth/15 bg-earth/5 text-earth transition hover:bg-earth hover:text-sand"
                  aria-label={`Open ${highlight.title} on Mita Rentals`}
                >
                  <ExternalLink size={18} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-earth/70 sm:flex-row">
          <span className="font-semibold uppercase tracking-[0.35em] text-earth/60">
            {copy.badge}
          </span>
          <Link
            href={partnerUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-earth transition hover:text-earth/70"
          >
            {copy.partnerCta}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
