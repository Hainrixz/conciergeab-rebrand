"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageReveal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let hideTimer: number | undefined;
    const frame = window.requestAnimationFrame(() => {
      setIsVisible(true);
      hideTimer = window.setTimeout(() => setIsVisible(false), 1400);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      if (hideTimer) {
        window.clearTimeout(hideTimer);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-earth text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col items-center gap-3 text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.45, 0.95] }}
          >
            <motion.span
              className="text-xs uppercase tracking-[0.6em] text-sand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.1 }}
            >
              Concierge at the Bay
            </motion.span>
            <motion.span
              className="text-3xl font-semibold text-white sm:text-4xl"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Arrive in Exceptional Form
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
