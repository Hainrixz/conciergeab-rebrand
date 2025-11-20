"use client";

import { MessageCircle, Mail, Sparkles } from "lucide-react";
import { useLocale } from "@/components/locale/LocaleProvider";
import { siteCopy } from "@/lib/data/site";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { AnimatedText } from "@/components/ui/AnimatedText";

const whatsappLink = siteCopy.contact.whatsapp;
const emailLink = `mailto:${siteCopy.contact.email}`;

export function ContactSection() {
  const { dictionary } = useLocale();
  const copy = dictionary.contact;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-earth-dark text-white py-24 sm:py-32 lg:py-24"
    >
      {/* Background Texture */}
      <div className="noise-overlay opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),_transparent_70%)]" />

      <div className="lux-container relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative mx-auto flex max-w-4xl flex-col gap-10 rounded-[48px] border border-white/10 bg-white/5 px-8 py-16 text-center shadow-[0_35px_120px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:px-12 lg:py-16"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
              <Sparkles size={14} />
              {copy.eyebrow}
            </span>
          </motion.div>

          <div className="space-y-6">
            <AnimatedText
              text={copy.heading}
              className="text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-5xl"
              align="center"
            />
            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-white/70 sm:text-xl"
            >
              {copy.description}
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="mx-auto flex w-full max-w-md flex-col gap-4 sm:flex-row"
          >
            <MagneticButton
              href={whatsappLink}
              variant="primary"
              icon={<MessageCircle size={20} />}
              target="_blank"
              rel="noreferrer"
              className="flex-1 justify-center bg-white !text-earth-dark hover:bg-white/90"
            >
              {copy.whatsappCta}
            </MagneticButton>
            <MagneticButton
              href={emailLink}
              variant="ghost"
              icon={<Mail size={18} />}
              className="flex-1 justify-center border border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              {copy.emailCta}
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex flex-col items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/40"
          >
            <div className="h-px w-12 bg-white/10 mb-4" />
            <p>Punta de Mita · México</p>
            <p>{siteCopy.address}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
