"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import confetti from "canvas-confetti";
import Image from "next/image";
import { useMusic } from "@/context/MusicContext";

const MEME_COUNT = 18;
const MEME_RAIN_DURATION_MS = 4300;
const DELETING_TEXT_DURATION_MS = 2200;

export default function FinalCard() {
  const [answered, setAnswered] = useState(false);
  const [noClicked, setNoClicked] = useState(false);
  const [showNoChoice, setShowNoChoice] = useState(false);
  const [noButtonGone, setNoButtonGone] = useState(false);
  const [memeRainActive, setMemeRainActive] = useState(false);
  const [showDeletingOverlay, setShowDeletingOverlay] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const soundPlayed = useRef(false);
  const { pause: pauseMusic, resume: resumeMusic } = useMusic();

  const handleNoClick = () => {
    if (noClicked) return;
    setNoClicked(true);

    if (!soundPlayed.current) {
      soundPlayed.current = true;
      pauseMusic();
      const audio = new Audio("/haha.mp3");
      audio.volume = 0.7;
      audio.play().catch(() => {});
      audio.onended = () => resumeMusic();
    }
  };

  // Meme rain: start when no clicked, end after duration then show "deleting" overlay
  useEffect(() => {
    if (!noClicked) return;
    setMemeRainActive(true);
    const rainEnd = setTimeout(() => {
      setMemeRainActive(false);
      setShowDeletingOverlay(true);
    }, MEME_RAIN_DURATION_MS);
    return () => clearTimeout(rainEnd);
  }, [noClicked]);

  // After "deleting" overlay: explosion then remove no button and show "you have no choice"
  useEffect(() => {
    if (!showDeletingOverlay) return;
    const t = setTimeout(() => {
      const btn = noButtonRef.current;
      if (btn) {
        const rect = btn.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { x, y },
          colors: ["#e11d48", "#fda4af", "#fbbf24"],
        });
      }
      setTimeout(() => {
        setNoButtonGone(true);
        setShowNoChoice(true);
        setShowDeletingOverlay(false);
      }, 400);
    }, DELETING_TEXT_DURATION_MS);
    return () => clearTimeout(t);
  }, [showDeletingOverlay]);

  const memeParticles = useMemo(
    () =>
      Array.from({ length: MEME_COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 5 + Math.random() * 4,
        size: 40 + Math.random() * 50,
      })),
    []
  );

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

  const memeRainOverlay = memeRainActive ? (
    <div
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
      aria-hidden
    >
      {memeParticles.map((p) => (
        <span
          key={p.id}
          className="absolute animate-meme-rise"
          style={{
            left: `${p.left}%`,
            bottom: "-80px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          <Image
            src="/funnyhaha.webp"
            alt=""
            width={p.size}
            height={p.size}
            className="h-full w-full object-contain"
            unoptimized
          />
        </span>
      ))}
    </div>
  ) : null;

  const deletingOverlay = showDeletingOverlay && (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-rose-950/95 text-center dark:bg-stone-950/95">
      <p className="font-[var(--font-fraunces)] text-2xl font-bold text-white sm:text-3xl">
        I&apos;m deleting no button 😡😡😡
      </p>
    </div>
  );

  return (
    <>
      {typeof document !== "undefined" &&
        createPortal(
          <>
            {memeRainOverlay}
            {deletingOverlay}
          </>,
          document.body
        )}

      <div className="relative flex flex-col items-center gap-8 rounded-3xl bg-gradient-to-br from-rose-100 to-pink-100 p-10 text-center shadow-lg ring-1 ring-rose-200/50 dark:from-rose-950/40 dark:to-pink-950/40 dark:ring-rose-800/50 sm:p-14">
        <p className="font-[var(--font-fraunces)] text-2xl font-semibold text-rose-900 dark:text-rose-100 sm:text-3xl">
          So… will you be my Valentine?
        </p>

        {showNoChoice && (
          <p className="font-[var(--font-fraunces)] text-xl font-medium text-rose-700 dark:text-rose-300">
            You have no choice 😏
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={async () => {
              setAnswered(true);
              try {
                await fetch("/api/valentine-accepted", { method: "POST" });
              } catch {
                // still show Yay
              }
            }}
            className="rounded-2xl bg-rose-500 px-8 py-4 font-medium text-white shadow-md transition hover:bg-rose-600 hover:shadow-lg active:scale-[0.98]"
          >
            Yes 😊😊
          </button>
          {!noButtonGone && (
            <button
              ref={noButtonRef}
              type="button"
              onClick={handleNoClick}
              className="rounded-2xl bg-stone-400 px-8 py-4 font-medium text-white shadow-md transition hover:bg-stone-500 hover:shadow-lg active:scale-[0.98]"
            >
              No 😡😡😡
            </button>
          )}
        </div>
      </div>
    </>
  );
}
