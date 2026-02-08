"use client";

import { useMemo, useState, useEffect } from "react";

const STAR = "✦";
const COUNT = 56;

export default function StarParticles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo(
    () =>
      mounted
        ? Array.from({ length: COUNT }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 4,
            duration: 4 + Math.random() * 5,
            size: 6 + Math.random() * 12,
            opacity: 0.2 + Math.random() * 0.4,
          }))
        : [],
    [mounted]
  );

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute animate-float-in-place text-amber-300 dark:text-amber-500/70"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {STAR}
        </span>
      ))}
    </div>
  );
}
