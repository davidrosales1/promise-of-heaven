import { connectedItems } from "../data/campaign";

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
