export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center">
          <span className="font-display text-lg tracking-[0.28em] uppercase text-foreground">
            Turning Point
          </span>
        </a>
        <a
          href="#support"
          className="inline-flex items-center rounded-full border border-foreground/30 bg-background/60 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground backgrop-blur-sm transition hover:bg-background/90 md:px-5 md:py-2 md:text-xs md:tracking-[0.22em]"
        >
          Give
        </a>
      </div>
    </header>
  );
}
