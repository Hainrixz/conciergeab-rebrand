"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Home, Sparkles } from "lucide-react";
import { useLocale } from "@/components/locale/LocaleProvider";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { smoothScrollToId } from "@/lib/utils/scroll";
import { AnimatedText } from "@/components/ui/AnimatedText";

const partnerUrl = "https://www.mitarentals.com/";
const gridAnchorId = "residences-grid";

export function Portfolio() {
  const { dictionary } = useLocale();
  const copy = dictionary.portfolio;
  const { ref, controls } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-cloud py-24 text-earth-dark sm:py-32"
    >
      {/* Background Texture */}
      <div className="noise-overlay opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.8),_transparent_60%)]" />

      <div className="lux-container relative space-y-20">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20"
        >
          <div className="space-y-8">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-earth/10 bg-white/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-bronze backdrop-blur-sm">
                <Home size={14} />
                {copy.eyebrow}
              </span>
            </motion.div>

            <div className="space-y-6">
              <AnimatedText
                text={copy.heading}
                className="text-4xl font-light leading-[1.1] tracking-tight text-earth-dark sm:text-5xl lg:text-6xl"
              />
              <motion.p
                variants={fadeUp}
                className="max-w-xl text-lg font-light leading-relaxed text-earth-dark/70 sm:text-xl"
              >
                {copy.description}
              </motion.p>
            </div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-6"
            >
              <MagneticButton
                variant="primary"
                className="min-w-[160px] justify-center bg-earth-dark text-sand hover:bg-earth-dark/90"
                onClick={() => smoothScrollToId(gridAnchorId, 80)}
              >
                {copy.seeAllLabel}
              </MagneticButton>

              <div className="h-px w-12 bg-earth/20 hidden sm:block" />

              <p className="text-sm font-medium text-earth/60">{copy.partnerHeadline}</p>
            </motion.div>
          </div>

          {/* Partner Card */}
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/40 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all hover:bg-white/60"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-bronze">
                  Strategic Partner
                </p>
                <h3 className="mt-2 text-2xl font-medium text-earth-dark">
                  Mita Rentals
                </h3>
              </div>
              <div className="rounded-full border border-earth/10 bg-white/50 p-3 text-earth-dark">
                <Sparkles size={20} />
              </div>
            </div>

            <p className="mt-4 text-base leading-relaxed text-earth/70">
              {copy.partnerDescription}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-earth/10" />
                ))}
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-earth/60">
                Concierge Verified
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          id={gridAnchorId}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {copy.highlights.map((highlight, index) => (
            <motion.article
              key={highlight.title}
              variants={fadeUp}
              className="group relative aspect-[3/4] overflow-hidden rounded-[24px] shadow-lg transition-all duration-500 hover:shadow-2xl lg:aspect-[4/5]"
            >
              <Image
                src={highlight.image}
                alt={highlight.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-70" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                    {highlight.subtitle}
                  </p>
                  <h3 className="mt-2 text-3xl font-light text-white">
                    {highlight.title}
                  </h3>

                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="mt-4 text-base text-white/80 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                        {highlight.description}
                      </p>
                      <Link
                        href={partnerUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-earth-dark"
                      >
                        View Property
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-6 top-6 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
                <span className="text-xs font-bold text-white">
                  {`${index + 1}`.padStart(2, "0")}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href={partnerUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-earth-dark transition-colors hover:text-bronze"
          >
            {copy.partnerCta}
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-earth/20 transition-colors group-hover:border-bronze group-hover:bg-bronze group-hover:text-white">
              <ExternalLink size={14} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
