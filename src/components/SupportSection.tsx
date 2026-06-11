const SUPPORT_BG =
  "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/the-promise-of-heaven-campaign/POH-image-bkg4-V1.jpg";

const SUPPORT_IMAGE =
  "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/gc/POH-Support.jpg";

export function SupportSection() {
  return (
    <section id="support" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${SUPPORT_BG})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60"
        aria-hidden="true"
      />
      <div className="container-page relative grid items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-gold">
            Make an Impact
          </p>
          <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
            Support Turning Point
          </h2>
          <img
            src={SUPPORT_IMAGE}
            alt="Support The Promise of Heaven"
            className="mt-8 w-full rounded-2xl shadow-elegant md:hidden"
            loading="lazy"
          />
          <div className="mt-8 grid max-w-md grid-cols-2 gap-6">
            <div>
              <div className="font-display text-5xl text-gold md:text-6xl">
                25%
              </div>
              <p className="mt-2 text-sm text-foreground/75">
                of people globally do not believe in heaven
              </p>
            </div>
            <div>
              <div className="font-display text-5xl text-gold md:text-6xl">
                13%
              </div>
              <p className="mt-2 text-sm text-foreground/75">
                have doubts whether heaven exists
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-xl leading-relaxed text-foreground/80">
            Mobilizing the global outreach of <em>The Promise of Heaven</em>{" "}
            requires a substantial commitment. Dr. Jeremiah believes a look into
            heaven will reach the lost and bring the hope we need as we face the
            days ahead. Please pray and consider giving a special gift to
            support this outreach.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 md:flex-row md:flex-wrap">
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-semibold text-gold-foreground shadow-soft transition hover:brightness-110 md:inline-flex md:w-auto"
            >
              Give Now
            </a>
          </div>
        </div>
        <div className="hidden md:col-span-5 md:block">
          <img
            src={SUPPORT_IMAGE}
            alt="Support The Promise of Heaven"
            className="w-full rounded-2xl shadow-elegant"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
