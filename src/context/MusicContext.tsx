"use client";

import { createContext, useContext, useRef, useCallback, useEffect } from "react";

type MusicContextValue = {
  pause: () => void;
  resume: () => void;
};

const MusicContext = createContext<MusicContextValue>({
  pause: () => {},
  resume: () => {},
});

export function useMusic() {
  return useContext(MusicContext);
}

export function MusicProvider({
  children,
  shouldPlay,
}: {
  children: React.ReactNode;
  shouldPlay: boolean;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!shouldPlay) return;
    audioRef.current?.play().catch(() => {});
  }, [shouldPlay]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const resume = useCallback(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  return (
    <MusicContext.Provider value={{ pause, resume }}>
      {shouldPlay && (
        <audio
          ref={audioRef}
          src="/music.mp3"
          loop
          preload="auto"
          className="hidden"
          aria-label="Background music"
        />
      )}
      {children}
    </MusicContext.Provider>
  );
}
