"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { useLocale } from "@/components/locale/LocaleProvider";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryImages = [
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80",
];

export function About() {
  const { dictionary } = useLocale();
  const about = dictionary.about;
  const { ref: textRef, controls: textControls } =
    useScrollAnimation<HTMLDivElement>({
      threshold: 0.3,
    });
  const { ref: mediaRef, controls: mediaControls } =
    useScrollAnimation<HTMLDivElement>({
      threshold: 0.2,
    });

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cloud py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.5),_transparent_60%)]" />
      <div className="lux-container relative grid gap-14 lg:grid-cols-[0.58fr_0.42fr]">
        <motion.div
          ref={textRef}
          variants={staggerContainer}
          initial="hidden"
          animate={textControls}
          className="space-y-8"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-earth/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-earth/70"
          >
            <Sparkles size={16} />
            {about.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-semibold text-earth sm:text-[3rem] sm:leading-tight"
          >
            {about.heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg font-medium text-earth/80 sm:text-xl"
          >
            {about.summary}
          </motion.p>

          <div className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={fadeUp}
                className="text-base leading-relaxed text-earth/75"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="grid gap-4 rounded-[32px] border border-earth/10 bg-white/70 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.08)] sm:grid-cols-2"
          >
            {about.highlights.map((item) => (
              <div key={item.title} className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-bronze">
                  {item.title}
                </p>
                <p className="text-sm text-earth/70">{item.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-3 pt-2 text-xs font-semibold uppercase tracking-[0.35em] text-earth/60"
          >
            {about.pillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-earth/15 px-4 py-2 text-earth"
              >
                {pillar}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          ref={mediaRef}
          variants={staggerContainer}
          initial="hidden"
          animate={mediaControls}
          className="relative space-y-8"
        >
          <motion.div
            variants={fadeUp}
            className="relative h-[380px] overflow-hidden rounded-[40px] bg-earth shadow-[0_40px_120px_rgba(80,61,43,0.3)]"
          >
            <Image
              src={galleryImages[0]}
              alt="Concierge at the Bay operations team in Punta Mita"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="noise-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-earth/50 via-transparent" />
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-white/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-earth">
              Anclote · Punta Mita
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid gap-4 sm:grid-cols-2"
          >
            {about.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[28px] border border-earth/10 bg-white p-6 text-earth shadow-[0_25px_70px_rgba(0,0,0,0.08)]"
              >
                <div className="text-4xl font-semibold">{metric.value}</div>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-earth/60">
                  {metric.label}
                </p>
                <p className="mt-3 text-sm text-earth/70">{metric.detail}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="glass-panel relative flex flex-col gap-4 rounded-[36px] px-6 py-6 text-earth"
          >
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-bronze">
              <ShieldCheck size={20} />
              {about.response.title}
            </div>
            <p className="text-base text-earth/80">{about.response.description}</p>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-earth/60">
              <MapPin size={16} />
              {about.response.note}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative flex h-48 overflow-hidden rounded-[32px] bg-earth/90 shadow-[0_30px_90px_rgba(80,61,43,0.35)]"
          >
            <Image
              src={galleryImages[1]}
              alt="Luxury villa interior details"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-90"
            />
            <div className="relative z-10 flex flex-col justify-end bg-gradient-to-t from-earth/80 via-earth/20 to-transparent p-6 text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                {about.clientsLabel}
              </p>
              <p className="text-base">“{about.clientsQuote}”</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
