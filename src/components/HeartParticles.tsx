"use client";

import { useEffect, useMemo } from "react";

const HEART = "♥";
const COUNT = 28;

export default function HeartParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 8,
        size: 8 + Math.random() * 14,
        opacity: 0.15 + Math.random() * 0.35,
      })),
    []
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute animate-float text-rose-400"
          style={{
            left: `${p.left}%`,
            bottom: "-2rem",
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {HEART}
        </span>
      ))}
    </div>
  );
}
