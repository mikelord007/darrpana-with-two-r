"use client";

import { useRef, useEffect } from "react";

type Props = { shouldPlay?: boolean };

export default function BackgroundMusic({ shouldPlay = false }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!shouldPlay) return;
    const audio = audioRef.current;
    if (audio) audio.play().catch(() => {});
  }, [shouldPlay]);

  return (
    <audio
      ref={audioRef}
      src="/music.mp3"
      loop
      preload="auto"
      className="hidden"
      aria-label="Background music"
    />
  );
}
