"use client";

import { motion } from "framer-motion";
import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { textReveal } from "@/lib/animations/variants";

type AllowedIntrinsicElement = keyof HTMLElementTagNameMap;

type AnimatedTextProps = {
  text: string;
  as?:
  | AllowedIntrinsicElement
  | ComponentType<{ className?: string; children?: ReactNode }>;
  className?: string;
  delay?: number;
  align?: "left" | "center" | "right";
};

export function AnimatedText({
  text,
  as: Component = "h1",
  className,
  delay = 0,
  align = "left",
}: AnimatedTextProps) {
  const words = text.split(" ");

  const justifyClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[align];

  return (
    <Component
      className={cn("overflow-hidden leading-tight", className)}
      aria-label={text}
    >
      <motion.span
        key={text}
        aria-hidden="true"
        className={cn("flex flex-wrap gap-x-3 gap-y-2", justifyClass)}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="inline-flex overflow-hidden leading-tight"
          >
            <motion.span
              className="inline-block"
              variants={textReveal}
              custom={index + delay}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
