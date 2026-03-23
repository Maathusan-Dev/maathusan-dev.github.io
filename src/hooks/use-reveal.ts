import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe the container and all reveal children
    const targets = el.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right"
    );
    targets.forEach((t, i) => {
      (t as HTMLElement).style.transitionDelay = `${i * 80}ms`;
      observer.observe(t);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
