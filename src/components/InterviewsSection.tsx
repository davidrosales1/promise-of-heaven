import { useState } from "react";
import { interviews, type Interview } from "../data/campaign";

export function InterviewsSection() {
  const [activeInterview, setActiveInterview] = useState<Interview | null>(
    null,
  );

  return (
    <section
      id="interviews"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          "linear-gradient(to bottom, #D4DDE8 0%, #E5E2DB 40%, #F5F3EE 100%)",
      }}
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-gold-ink">
            Exclusive Content
          </p>
          <h2 className="font-display text-4xl leading-[1.05] md:text-6">
            Interviews
          </h2>
          <p className="mt-6 leading-relaxed text-foreground/75">
            Many people believe that we cannot know what heaven holds for
            believers. Dr. Jeremiah, along with several special guests, explores
            the truth about heaven. Don&apos;t miss these captivating interviews
            that could transform your perspective on faith and the afterlife.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {interviews.map((interview) => (
            <button
              key={interview.title}
              type="button"
              onClick={() => setActiveInterview(interview)}
              className="group text-left"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl bg-surface shadow-soft ring-1 ring-border">
                <img
                  src={interview.thumb}
                  alt={interview.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                <span className="absolute inset-0 flex items-center justify-center opacity-90 transition group-hover:opacity-100">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/95 text-foreground transition group-hover:scale-110">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-0.5 h-5 w-5"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </div>
              <h3 className="font-display mt-4 text-2xl leading-tight text-foreground transition group-hover:text-gold-ink">
                {interview.title}
              </h3>
            </button>
          ))}
        </div>
      </div>
      {activeInterview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActiveInterview(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-elegant"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveInterview(null)}
              aria-label="Close video"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            >
              ✕
            </button>
            <video
              src={activeInterview.video}
              poster={activeInterview.thumb}
              controls
              autoPlay
              className="aspect-video w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
