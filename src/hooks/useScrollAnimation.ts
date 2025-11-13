"use client";

import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useIntersectionObserver } from "./useIntersectionObserver";

type Options = {
  threshold?: number | number[];
  rootMargin?: string;
};

export function useScrollAnimation<T extends HTMLElement>({
  threshold,
  rootMargin,
}: Options = {}) {
  const controls = useAnimation();
  const { ref, isIntersecting } = useIntersectionObserver<T>({
    threshold,
    rootMargin,
  });

  useEffect(() => {
    if (isIntersecting) {
      controls.start("visible");
    }
  }, [controls, isIntersecting]);

  return { ref, controls };
}
