"use client";
// Animated count-up for KPI cards. Renders the final value immediately for
// users who prefer reduced motion, and the final text is always in the DOM
// for search engines (the animation only changes what is displayed).
import { useEffect, useRef, useState } from "react";

export default function CountUp({ value, decimals = 0, prefix = "", suffix = "", duration = 1400 }: { value: number; decimals?: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [n, setN] = useState(value);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      setReady(true);
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(value * eased);
        if (p < 1) requestAnimationFrame(tick);
        else setN(value);
      };
      setN(0);
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);
  const shown = ready ? n : value;
  const text = decimals ? shown.toFixed(decimals) : Math.round(shown).toLocaleString("en-AU");
  return <span ref={ref}>{prefix}{text}{suffix}</span>;
}
