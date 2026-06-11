const RESOURCES_BG =
  "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/the-promise-of-heaven-campaign/POH-image-bkg3-V1.jpg";

type Resource = {
  image: string;
  title: string;
  description: string;
  cta: string;
};

const resources: Resource[] = [
  {
    image:
      "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/gc/POH-Outreach-Kit.png",
    title: "The Promise of Heaven Outreach Kit",
    description:
      "This downloadable collection contains everything that a small group or church community needs to get excited about heaven, including guided videos, a quick-start leader’s guide, a participant’s guide, and commercial-free streaming of Dr. Jeremiah’s messages.",
    cta: "Learn More",
  },
  {
    image:
      "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/gc/POH-10Things-Bkmk.png",
    title: "10 Things You May Not Know About Heaven",
    description: "Discover more about heaven with this free resource.",
    cta: "Request Now",
  },
  {
    image:
      "https://d2urhn0mmik6is.cloudfront.net/site/_images/monthly/0825/gc/POH-YGTP.png",
    title: "Your Greatest Turning Point",
    description:
      "Take the next step in your journey of answering, 'How do I get to heaven?' by diving into Your Greatest Turning Point",
    cta: "Request Now",
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${RESOURCES_BG})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-gold-ink">
            Complimentary Downloads
          </p>
          <h2 className="font-display text-4xl leading-[1.05] text-heading-warm md:text-6xl">
            Free Resources
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="group flex flex-col rounded-2xl bg-surface p-8 shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-elegant hover:ring-gold/40"
            >
              <div className="flex h-48 items-center justify-center">
                <img
                  src={resource.image}
                  alt={resource.title}
                  loading="lazy"
                  className="max-h-48 w-auto object-contain drop-shadow-[0_20px_30px_rgba(36,55,110,0.25)]"
                />
              </div>
              <h3 className="font-display mt-6 text-2xl leading-snug text-foreground">
                {resource.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
                {resource.description}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-semibold text-gold-foreground shadow-soft transition hover:brightness-110"
              >
                {resource.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
