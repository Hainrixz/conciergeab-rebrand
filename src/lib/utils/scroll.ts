"use client";

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function smoothScrollTo(
  targetY: number,
  duration = 800,
  onComplete?: () => void,
) {
  if (typeof window === "undefined") return;

  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (startTime === null) {
      startTime = timestamp;
    }

    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (elapsed < duration) {
      window.requestAnimationFrame(step);
    } else if (onComplete) {
      onComplete();
    }
  };

  window.requestAnimationFrame(step);
}

export function smoothScrollToId(id: string, offset = 0) {
  if (typeof document === "undefined") return;
  const element = document.getElementById(id);
  if (!element) return;

  const rect = element.getBoundingClientRect();
  const target = rect.top + window.scrollY - offset;

  smoothScrollTo(target, 800);
}
