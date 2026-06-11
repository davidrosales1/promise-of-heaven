import { useState } from "react";
import { CtaLink } from "./CtaLink";

const THUMB =
  "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/gc/POH-A-Glimpse-of-Heaven.jpg";

const VIDEO =
  "https://d2vftoccbq8rr6.cloudfront.net/video/television/2025/2025_POH/GOH_BTS_Doc_FINAL_UPDATE/GOH_BTS_Doc_FINAL_UPDATE_1080p.mp4?jobID=1760633751237-hx4k1a";

export function ConcertSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="concert"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #FDFBF7 0%, #F9F7F2 55%, #D4DDE8 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-10 top-1/4 h-96 w-96 rounded-full bg-amber-200/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-blue-300/30 blur-[120px]"
      />
      <div className="container-page relative text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-gold-ink">
          Television Special
        </p>
        <h2 className="font-display mx-auto max-w-3xl text-4xl leading-[1.05] md:text-6xl">
          A Glimpse of Heaven Concert Television Special
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-foreground/80">
          Join Dr. Jeremiah with Jordan Smith, Veritas, Charles Billingsley,
          Michael Sanchez, and others&mdash;accompanied by a 75-piece orchestra
          and master choir from the Walt Disney Concert Hall in Los
          Angeles&mdash;for an evening reflecting the hope of our eternal home.
        </p>
        <div className="relative mx-auto mt-12 aspect-video max-w-5xl overflow-hidden rounded-2xl shadow-elegant ring-1 ring-foreground/10">
          {playing ? (
            <video
              src={VIDEO}
              poster={THUMB}
              controls
              autoPlay
              className="h-full w-full object-cover"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Play behind-the-scenes video"
              className="group relative block h-full w-full"
            >
              <img
                src={THUMB}
                alt="A Glimpse of Heaven Concert"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-background/95 text-foreground shadow-elegant transition group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 h-7 w-7"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
              <span className="absolute bottom-5 left-6 text-sm uppercase tracking-[0.3em] text-white/90">
                Behind the Scenes
              </span>
            </button>
          )}
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 md:flex-row md:justify-center">
          <CtaLink href="#" variant="dark">
            Watch Behind the Scenes
          </CtaLink>
          <CtaLink href="#" variant="outline">
            Remind Me
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
