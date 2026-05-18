import { useEffect, useRef } from 'react';

/**
 * Añade la clase `is-visible` cuando el elemento entra en viewport,
 * para la animación sutil de aparición (fade-up). Opcionalmente aplica
 * un retraso escalonado (stagger) vía la variable CSS --reveal-delay.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  delayMs = 0,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delayMs > 0) {
      el.style.setProperty('--reveal-delay', `${delayMs}ms`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  return ref;
}
