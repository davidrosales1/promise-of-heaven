type ConnectedItem = {
  label: string;
  description: string;
  icon: string;
};

const connectedItems: ConnectedItem[] = [
  {
    label: "Subscribe",
    description: "Daily e-devotional",
    icon: "M3 5h18M3 12h18M3 19h12",
  },
  {
    label: "Download",
    description: "Mobile app",
    icon: "M12 3v12m0 0l-4-4m4 4l4-4M5 21h14",
  },
  {
    label: "Find",
    description: "Radio & TV airings",
    icon: "M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z",
  },
  {
    label: "Follow",
    description: "On social media",
    icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
  },
  {
    label: "Visit",
    description: "BibleStrong.org & more",
    icon: "M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12a9 9 0 0 1 18 0M3 12a9 9 0 0 0 18 0",
  },
];

export function StayConnected() {
  return (
    <section className="relative border-t border-border bg-surface-2 py-24 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-gold-ink">
            Join Our Community
          </p>
          <h2 className="font-display text-3xl leading-[1.1] md:text-5xl">
            Stay Connected to Turning Point
          </h2>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {connectedItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className="group flex h-full flex-col items-center rounded-2xl bg-surface px-5 py-8 text-center shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-elegant hover:ring-gold/40"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-ink/10 text-gold-ink ring-1 ring-gold-ink/25 transition group-hover:bg-gold-ink/15">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d={item.icon} />
                  </svg>
                </span>
                <span className="font-display mt-4 text-xl">{item.label}</span>
                <span className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/60">
                  {item.description}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
