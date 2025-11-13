"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useLocale } from "@/components/locale/LocaleProvider";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MagneticButton } from "@/components/ui/MagneticButton";

const partnerUrl = "https://www.mitarentals.com/";

export function Portfolio() {
  const { dictionary } = useLocale();
  const copy = dictionary.portfolio;
  const { ref, controls } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.25,
  });

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-cream py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(80,61,43,0.08),_transparent_55%)]" />
      <div className="lux-container relative grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="space-y-8"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-earth/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-earth/70"
          >
            {copy.eyebrow}
          </motion.span>

          <motion.div variants={fadeUp} className="space-y-5">
            <div className="flex items-center gap-4">
              <motion.span
                className="inline-flex items-center rounded-full bg-earth px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-sand"
                variants={fadeUp}
              >
                {copy.badge}
              </motion.span>
            </div>

            <h2 className="text-4xl font-semibold text-earth sm:text-[3.2rem] sm:leading-tight">
              {copy.heading}
            </h2>
            <p className="text-lg text-earth/80">{copy.description}</p>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-6 rounded-[32px] border border-earth/10 bg-white/70 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
            <p className="text-sm uppercase tracking-[0.35em] text-earth/60">
              {copy.partnerHeadline}
            </p>
            <p className="text-base text-earth/75">{copy.partnerDescription}</p>
            <MagneticButton
              href={partnerUrl}
              variant="primary"
              icon={<ExternalLink size={18} />}
              target="_blank"
              rel="noreferrer"
              className="w-full justify-center sm:w-auto"
            >
              {copy.partnerCta}
            </MagneticButton>
          </motion.div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {copy.highlights.map((highlight, index) => (
            <motion.article
              key={highlight.title}
              className="relative overflow-hidden rounded-[36px] bg-earth text-white shadow-[0_35px_120px_rgba(80,61,43,0.35)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-64">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
                <div className="noise-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/80 via-transparent" />
                <div className="absolute top-4 left-4 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em]">
                  {`${index + 1}`.padStart(2, "0")}
                </div>
              </div>

              <div className="space-y-3 px-6 py-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                    {highlight.subtitle}
                  </p>
                  <h3 className="text-2xl font-semibold">{highlight.title}</h3>
                </div>
                <p className="text-sm text-white/80">{highlight.description}</p>
                <Link
                  href={partnerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:text-white"
                >
                  mita rentals
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
