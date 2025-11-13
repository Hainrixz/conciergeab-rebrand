"use client";

import { RefObject, useEffect, useRef, useState } from "react";

type Options = {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export function useIntersectionObserver<T extends HTMLElement>({
  root = null,
  rootMargin = "0px",
  threshold = 0.2,
}: Options = {}): { ref: RefObject<T | null>; isIntersecting: boolean } {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { root, rootMargin, threshold },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold]);

  return { ref, isIntersecting };
}
