"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useLocale } from "@/components/locale/LocaleProvider";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { AnimatedText } from "@/components/ui/AnimatedText";

const galleryImages = [
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80",
];

export function About() {
  const { dictionary } = useLocale();
  const about = dictionary.about;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative bg-sand-light py-24 sm:py-32 lg:pb-10 lg:pt-40"
    >
      {/* Background Texture */}
      <div className="noise-overlay opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.8),_transparent_50%)]" />

      <div className="lux-container relative">
        <div className="grid gap-16 lg:grid-cols-[0.45fr_0.55fr] lg:gap-24">

          {/* Sticky Content Column */}
          <div className="relative">
            <div className="sticky top-32 space-y-10">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8"
              >
                <motion.div variants={fadeUp}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-earth/10 bg-white/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-bronze backdrop-blur-sm">
                    <Sparkles size={14} />
                    {about.eyebrow}
                  </span>
                </motion.div>

                <div className="space-y-6">
                  <AnimatedText
                    text={about.heading}
                    className="text-4xl font-light leading-[1.1] tracking-tight text-earth-dark sm:text-5xl lg:text-6xl"
                  />

                  <motion.p
                    variants={fadeUp}
                    className="text-lg font-light leading-relaxed text-earth-dark/80 sm:text-xl"
                  >
                    {about.summary}
                  </motion.p>
                </div>

                <motion.div variants={fadeUp} className="space-y-6">
                  {about.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-earth/70"
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.div>

                {/* Highlights (moved from right) */}
                <motion.div
                  variants={fadeUp}
                  className="grid gap-6 sm:grid-cols-2"
                >
                  {about.highlights.map((item) => (
                    <div key={item.title} className="space-y-2 rounded-2xl border border-earth/10 bg-white/50 p-5 backdrop-blur-sm">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-bronze">
                        {item.title}
                      </p>
                      <p className="text-sm text-earth/70">{item.description}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Metrics Grid (moved from right) */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {about.metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="group relative overflow-hidden rounded-[24px] bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="relative z-10">
                        <div className="text-3xl font-light text-earth-dark sm:text-4xl">
                          {metric.value}
                        </div>
                        <div className="mt-2 h-px w-8 bg-bronze/30" />
                        <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-bronze">
                          {metric.label}
                        </p>
                        <p className="mt-1 text-sm text-earth/60">
                          {metric.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>


              </motion.div>
            </div>
          </div>

          {/* Scrolling Visuals Column - Image Only */}
          <div className="relative h-fit">
            <motion.div
              style={{ y }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] shadow-2xl"
            >
              <Image
                src={galleryImages[0]}
                alt="Concierge at the Bay operations team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Location Badge - Moved to Top Left */}
              <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/90">
                  Anclote · Punta Mita
                </p>
              </div>

              {/* Pillars - Moved to Bottom Inside Image */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                {about.pillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
