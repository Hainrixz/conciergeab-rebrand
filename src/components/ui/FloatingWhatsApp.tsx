"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteCopy } from "@/lib/data/site";

const WHATSAPP_DISPLAY = "+52 33 1344 0732";

export function FloatingWhatsApp() {
  return (
    <motion.div
      className="fixed bottom-8 right-6 z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <Link
        href={siteCopy.contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:-translate-y-1"
        aria-label={`Chat on WhatsApp with ${WHATSAPP_DISPLAY}`}
      >
        <MessageCircle className="transition-transform duration-300 group-hover:scale-110" />
        WhatsApp
      </Link>
    </motion.div>
  );
}
