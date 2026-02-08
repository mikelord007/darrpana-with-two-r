"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import StarParticles from "@/components/StarParticles";

const CONFETTI_COLORS = ["#e11d48", "#fb7185", "#fda4af", "#fbbf24", "#fde047"];

function fireConfetti() {
  const defaults = { origin: { y: 0.7 }, spread: 100, startVelocity: 35 };
  const count = 120;

  const fire = (i: number) => {
    const x = (i % 3) / 3 - 0.2;
    confetti({
      ...defaults,
      particleCount: count * 0.25,
      angle: 60,
      origin: { x, y: 0.6 },
      colors: CONFETTI_COLORS,
    });
    confetti({
      ...defaults,
      particleCount: count * 0.25,
      angle: 120,
      origin: { x: 1 - x, y: 0.6 },
      colors: CONFETTI_COLORS,
    });
  };

  for (let i = 0; i < 5; i++) setTimeout(() => fire(i), i * 120);
}

export default function StartGate({
  children,
  onStart,
}: {
  children: React.ReactNode;
  onStart?: () => void;
}) {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
    fireConfetti();
    onStart?.();
  };

  if (!started) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-rose-50/90 via-white to-amber-50/80 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
        <StarParticles />
        <button
          type="button"
          onClick={handleStart}
          className="relative z-10 rounded-2xl px-10 py-4 font-[var(--font-fraunces)] text-xl font-semibold text-white shadow-lg transition active:scale-[0.98] [background:lab(39_67.11_8.49)] hover:[background:lab(30_67.11_8.49)]"
        >
          Start 😗👉👈
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
