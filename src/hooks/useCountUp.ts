import { useEffect, useRef, useState } from 'react';

/**
 * Cuenta de 0 al valor objetivo cuando el elemento entra en viewport.
 * Solo aplica a valores numéricos (p. ej. "50"); valores como "RD"/"US"/"B2B"
 * se muestran tal cual. Respeta prefers-reduced-motion.
 */
export function useCountUp(target: string, durationMs = 1400) {
  const ref = useRef<HTMLSpanElement>(null);
  const numeric = parseInt(target, 10);
  const isNumeric = !Number.isNaN(numeric);
  const suffix = isNumeric ? target.replace(/[0-9]/g, '') : '';
  const [value, setValue] = useState(isNumeric ? '0' : target);

  useEffect(() => {
    if (!isNumeric) return;
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reduce) {
      setValue(`${numeric}${suffix}`);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / durationMs, 1);
          // easeOutCubic — desaceleración elegante, no lineal
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(`${Math.round(eased * numeric)}${suffix}`);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [numeric, isNumeric, suffix, durationMs]);

  return { ref, value };
}
