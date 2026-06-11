import { CtaLink } from "./CtaLink";

const HERO_BG =
  "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/the-promise-of-heaven-campaign/POH-image-bkg-V1.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img
        src={HERO_BG}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/50 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_55%,oklch(1_0_0/0.55), transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-background md:h-72"
        aria-hidden="true"
      />
      <div className="container-page relative py-32 pt-40 text-center md:pb-44 md:pt-48">
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.4em] text-[oklch(0.82_0.13_80)] md:text-base">
          World Outreach &middot; Fall 2026
        </p>
        <h1 className="font-display text-5xl leading-[1.02] text-foreground sm:text-6xl md:text-8xl lg:text-[8.5rem]">
          The Promise
          <span className="block font-light italic text-foreground/85">
            of Heaven
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
          A new global outreach from Dr. David Jeremiah&mdash;31 reasons to feel
          excited about your eternal home, and to live boldly for God here on
          earth.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:justify-center">
          <CtaLink href="#book">Request the Book</CtaLink>
          <CtaLink href="#concert" variant="outline">
            Watch the Special
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
