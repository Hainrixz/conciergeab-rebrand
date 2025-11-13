"use client";

import type { MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button, type ButtonProps } from "./Button";

type MagneticButtonProps = ButtonProps & {
  intensity?: number;
};

export function MagneticButton({
  intensity = 0.3,
  ...buttonProps
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { mass: 0.5, stiffness: 300, damping: 20 });
  const springY = useSpring(y, { mass: 0.5, stiffness: 300, damping: 20 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - (bounds.left + bounds.width / 2);
    const relativeY = event.clientY - (bounds.top + bounds.height / 2);

    x.set(relativeX * intensity);
    y.set(relativeY * intensity);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="inline-flex"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Button {...buttonProps} />
    </motion.div>
  );
}
