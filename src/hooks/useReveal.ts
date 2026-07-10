import { useEffect, useRef } from 'react';

/**
 * Añade la clase `in` cuando el elemento (con clase `.reveal`) entra en
 * viewport, activando la animación sutil de aparición del diseño v2.
 * Replica el IntersectionObserver del borrador HTML aprobado.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
