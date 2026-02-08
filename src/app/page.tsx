import HeartParticles from "@/components/HeartParticles";
import RevealSection from "@/components/RevealSection";
import FinalCard from "@/components/FinalCard";
import { MusicProvider } from "@/context/MusicContext";
import StartGate from "@/components/StartGate";
import ScrollAffirmations from "@/components/ScrollAffirmations";
import Image from "next/image";

export default function Home() {
  return (
    <StartGate>
      <div className="relative min-h-screen bg-gradient-to-b from-rose-50/90 via-white to-amber-50/80 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
        <MusicProvider shouldPlay>
          <HeartParticles />

        <main className="relative mx-auto max-w-2xl px-6 pb-24 pt-16 sm:px-8">
        {/* Landing */}
        <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
          <h1 className="font-[var(--font-fraunces)] text-3xl font-semibold tracking-tight text-rose-900 dark:text-rose-100 sm:text-4xl">
            Hi, I made this because…
          </h1>
          <p className="mt-4 text-rose-700 dark:text-rose-300">
            scroll down a little 💕
          </p>
        </section>

        <ScrollAffirmations />

        {/* Reasons I like you */}
        <div className="space-y-12">
          <RevealSection>
            <div className="rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-rose-100 dark:bg-stone-800/80 dark:ring-stone-700 sm:p-8">
              <h2 className="mb-2 font-[var(--font-fraunces)] text-xl font-semibold text-rose-800 dark:text-rose-200">
                You are smart
              </h2>
              <p className="text-rose-700 dark:text-rose-300">
                Like, suspiciously big brain energy. I&apos;m pretty sure you
                could out-logic a calculator. 🧠✨
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-rose-100 dark:bg-stone-800/80 dark:ring-stone-700 sm:p-8">
              <h2 className="mb-2 font-[var(--font-fraunces)] text-xl font-semibold text-rose-800 dark:text-rose-200">
                You feel easy to talk to
              </h2>
              <p className="text-rose-700 dark:text-rose-300">
                I can actually be myself around you. That&apos;s rare and it
                means a lot.
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-rose-100 dark:bg-stone-800/80 dark:ring-stone-700 sm:p-8">
              <h2 className="mb-2 font-[var(--font-fraunces)] text-xl font-semibold text-rose-800 dark:text-rose-200">
                You make me feel warm and fuzzy
              </h2>
              <p className="text-rose-700 dark:text-rose-300">
                I feel warm and fuzzy when I&apos;m spending time with you.
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-rose-100 dark:bg-stone-800/80 dark:ring-stone-700 sm:p-8">
              <h2 className="mb-4 font-[var(--font-fraunces)] text-xl font-semibold text-rose-800 dark:text-rose-200">
                You look like this. unbelievably cute 😭😭😭💖💖💖
              </h2>
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-rose-100 dark:bg-stone-700">
                <Image
                  src="/darp.jpeg"
                  alt="You laughing"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover object-right"
                />
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Reasons you should be my valentine */}
        <div className="mt-20">
          <h2 className="mb-8 text-center font-[var(--font-fraunces)] text-2xl font-semibold text-rose-800 dark:text-rose-100">
            Reasons you should pick me 🙋‍♂️ as your Valentine
          </h2>
          <div className="space-y-12">
            <RevealSection>
              <div className="rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-amber-100 dark:bg-stone-800/80 dark:ring-stone-700 sm:p-8">
                <h2 className="mb-2 font-[var(--font-fraunces)] text-xl font-semibold text-rose-800 dark:text-rose-200">
                  I&apos;m funny, objectively
                </h2>
                <p className="text-rose-700 dark:text-rose-300">
                  I&apos;ve hacked your front cam through this website and can
                  see you smiling. 😏
                </p>
              </div>
            </RevealSection>
            <RevealSection>
              <div className="rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-amber-100 dark:bg-stone-800/80 dark:ring-stone-700 sm:p-8">
                <h2 className="mb-2 font-[var(--font-fraunces)] text-xl font-semibold text-rose-800 dark:text-rose-200">
                  Gud typing speed
                </h2>
                <p className="mb-4 text-rose-700 dark:text-rose-300">
                  I can impress your dad. He will fall in love with me before you do 😌 
                </p>
                <div className="overflow-hidden rounded-xl bg-amber-100 dark:bg-stone-700">
                  <Image
                    src="/typing-speed.jpeg"
                    alt="Typing speed test result"
                    width={600}
                    height={340}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </RevealSection>
            <RevealSection>
              <div className="rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-amber-100 dark:bg-stone-800/80 dark:ring-stone-700 sm:p-8">
                <h2 className="mb-2 font-[var(--font-fraunces)] text-xl font-semibold text-rose-800 dark:text-rose-200">
                  We can build amazing things together
                </h2>
                
                <div className="flex items-center mt-7 justify-center gap-4 sm:gap-6">
                  <div className="aspect-square w-28 overflow-hidden rounded-full border-2 border-rose-200 bg-rose-50 dark:border-stone-600 dark:bg-stone-700 sm:w-36">
                    <Image
                      src="/kf.jpg"
                      alt="Something she built"
                      width={144}
                      height={144}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-200 text-xl font-bold text-rose-800 dark:bg-stone-600 dark:text-rose-200 sm:h-12 sm:w-12 sm:text-2xl" aria-hidden>
                    +
                  </span>
                  <div className="aspect-square w-28 overflow-hidden rounded-full border-2 border-rose-200 bg-rose-50 dark:border-stone-600 dark:bg-stone-700 sm:w-36">
                    <Image
                      src="/my-build.png"
                      alt="Something I built"
                      width={144}
                      height={144}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </RevealSection>
            <RevealSection>
              <div className="rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-amber-100 dark:bg-stone-800/80 dark:ring-stone-700 sm:p-8">
                <h2 className="mb-2 font-[var(--font-fraunces)] text-xl font-semibold text-rose-800 dark:text-rose-200">
                  I can do dense
                </h2>
                <p className="mb-4 text-rose-700 dark:text-rose-300">
                  This form of dance is called monke dance.
                </p>
                <div className="mx-auto max-w-xs overflow-hidden rounded-xl bg-amber-100 dark:bg-stone-700">
                  <Image
                    src="/dance.gif"
                    alt="Monkey dance"
                    width={320}
                    height={180}
                    className="h-auto w-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </RevealSection>
          </div>
        </div>

        {/* Final ask */}
        <RevealSection className="mt-20">
          <FinalCard />
        </RevealSection>
      </main>
        </MusicProvider>
    </div>
    </StartGate>
  );
}
