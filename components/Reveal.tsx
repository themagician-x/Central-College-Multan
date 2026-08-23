"use client";

import { useEffect, useRef } from "react";

/**
 * Wraps children in a scroll-reveal container (IntersectionObserver).
 *
 * `min-w-0` because these are almost always grid or flex children, and such
 * children default to min-width:auto — they refuse to shrink below their
 * content's min-content width. One of these was 387px wide inside a 288px
 * grid column on the contact page, pushing text off the side of a phone.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal min-w-0 ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
