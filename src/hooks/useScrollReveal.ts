import { useEffect, useRef, useState } from 'react';

/**
 * Adds the `is-visible` class to elements with the `reveal` class when they
 * scroll into view. Returns a ref to attach to a container (or the document
 * body is observed if no ref is passed).
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current ?? document.body;
    const els = Array.from(root.querySelectorAll<HTMLElement>('.reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/** Animated number counter that runs once when the element enters the viewport. */
export function useCountUp(target: number, durationMs = 1600) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / durationMs, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return { ref, value };
}

/** Tracks whether the page has been scrolled past a threshold (default 24px). */
export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}
