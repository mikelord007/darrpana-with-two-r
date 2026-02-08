"use client";

import { useState } from "react";

export default function FinalCard() {
  const [answered, setAnswered] = useState(false);

  if (answered) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 rounded-3xl bg-gradient-to-br from-rose-100 to-pink-100 p-10 text-center shadow-lg ring-1 ring-rose-200/50 dark:from-rose-950/40 dark:to-pink-950/40 dark:ring-rose-800/50 sm:p-14">
        <p className="font-[var(--font-fraunces)] text-4xl font-semibold text-rose-800 dark:text-rose-200 sm:text-5xl">
          Yay! 💕
        </p>
        <p className="max-w-sm text-lg text-rose-700 dark:text-rose-300">
          Best decision ever. Can&apos;t wait to celebrate with you. 💖
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 rounded-3xl bg-gradient-to-br from-rose-100 to-pink-100 p-10 text-center shadow-lg ring-1 ring-rose-200/50 dark:from-rose-950/40 dark:to-pink-950/40 dark:ring-rose-800/50 sm:p-14">
      <p className="font-[var(--font-fraunces)] text-2xl font-semibold text-rose-900 dark:text-rose-100 sm:text-3xl">
        So… will you be my Valentine?
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setAnswered(true)}
          className="rounded-2xl bg-rose-500 px-8 py-4 font-medium text-white shadow-md transition hover:bg-rose-600 hover:shadow-lg active:scale-[0.98]"
        >
          Yes 💕
        </button>
        <button
          type="button"
          onClick={() => setAnswered(true)}
          className="rounded-2xl bg-pink-400/90 px-8 py-4 font-medium text-white shadow-md transition hover:bg-pink-500 hover:shadow-lg active:scale-[0.98]"
        >
          Of course 🙄💖
        </button>
      </div>
    </div>
  );
}
