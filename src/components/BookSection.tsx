import { CtaLink } from "./CtaLink";

const BOOK_BG =
  "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/the-promise-of-heaven-campaign/POH-image-bkg2-V1.jpg";

const BOOK_IMAGE =
  "https://d2urhn0mmik6is.cloudfront.net/site/_images/resources/the-promise-of-heaven/POH-prod-book.png";

export function BookSection() {
  return (
    <section id="book" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${BOOK_BG})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background"
        aria-hidden="true"
      />
      <div className="container-page relative grid items-center gap-12 md:grid-cols-12 md:gap-x-8 lg:gap-x-20">
        <div className="relative flex justify-center md:col-span-5">
          <div
            className="absolute -inset-10 bg-gradient-to-br from-gold/20 via-primary/15 to-transparent blur-3xl"
            aria-hidden="true"
          />
          <img
            src={BOOK_IMAGE}
            alt="The Promise of Heaven book by Dr. David Jeremiah"
            className="relative w-full max-w-sm drop-shadow-[0_30px_60px_rgba(36,55,110,0.35)]"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-7">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-gold-ink">
            The New Book
          </p>
          <h2 className="font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            The Promise of Heaven:
            <span className="block font-light italic text-foreground/75">
              31 Reasons to Get Excited About Your Eternal Home
            </span>
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-foreground/75">
            Many people have questions about heaven and assume the answers are
            unknown&mdash;but that&apos;s not true. In this new book, Dr. David
            Jeremiah reveals detailed insights from God&apos;s Word about heaven
            and how it impacts your faith. Discover 31 reasons to feel excited
            about your eternal home and be inspired to live boldly for God on
            earth.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:flex-wrap">
            <CtaLink href="#">Request Now</CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
