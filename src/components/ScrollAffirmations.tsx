"use client";

import { useState, useEffect, useRef } from "react";

const MESSAGES = [
  "keep scrolling 💫",
  "you're doing great",
  "just a lil more",
  "almost there...",
  "so close!",
  "almost there...",
];

const SECTION_HEIGHT_VH = 350;

export default function ScrollAffirmations() {
  const [messageIndex, setMessageIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;
      // How far through the section (0 when section top at viewport top, 1 when section bottom at viewport top)
      const scrollable = sectionHeight - viewportHeight;
      if (scrollable <= 0) {
        setMessageIndex(0);
        return;
      }
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      const index = Math.min(
        Math.floor(progress * MESSAGES.length),
        MESSAGES.length - 1
      );
      setMessageIndex(index);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: `${SECTION_HEIGHT_VH}vh` }}
    >
      <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center text-center">
        <p className="font-[var(--font-fraunces)] text-xl text-rose-600 dark:text-rose-400 sm:text-2xl">
          {MESSAGES[messageIndex]}
        </p>
      </div>
    </div>
  );
}
