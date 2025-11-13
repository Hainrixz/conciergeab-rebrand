"use client";

import { MessageCircle, Mail } from "lucide-react";
import { useLocale } from "@/components/locale/LocaleProvider";
import { siteCopy } from "@/lib/data/site";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";

const whatsappLink = siteCopy.contact.whatsapp;
const emailLink = `mailto:${siteCopy.contact.email}`;

export function ContactSection() {
  const { dictionary } = useLocale();
  const copy = dictionary.contact;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-earth text-white py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_60%)]" />
      <div className="lux-container relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="glass-panel relative flex flex-col gap-8 rounded-[48px] border border-white/10 bg-white/10 px-8 py-10 text-left text-white shadow-[0_35px_120px_rgba(0,0,0,0.4)] sm:px-12"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80"
          >
            {copy.eyebrow}
          </motion.span>

          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-4xl font-semibold sm:text-[3rem] sm:leading-tight">
              {copy.heading}
            </h2>
            <p className="text-lg text-white/80">{copy.description}</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton
              href={whatsappLink}
              variant="ghost"
              icon={<MessageCircle size={20} />}
              target="_blank"
              rel="noreferrer"
              className="flex-1 justify-center border border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              {copy.whatsappCta}
            </MagneticButton>
            <MagneticButton
              href={emailLink}
              variant="primary"
              icon={<Mail size={18} />}
              className="flex-1 justify-center"
            >
              {copy.emailCta}
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.35em] text-white/60"
          >
            Punta de Mita · {siteCopy.address}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
