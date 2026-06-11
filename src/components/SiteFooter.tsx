export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container-page flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center">
          <span className="font-display text-sm uppercase tracking-[0.28em] text-foreground/80">
            Turning Point
          </span>
        </div>
        <p className="text-center text-xs text-foreground/60">
          &copy; {new Date().getFullYear()} Turning Point with Dr. David
          Jeremiah. All rights reserved.
        </p>
        <div className="flex gap-5 text-xs uppercase tracking-[0.2em] text-foreground/70">
          <a href="#" className="transition hover:text-gold-ink">
            Privacy
          </a>
          <a href="#" className="transition hover:text-gold-ink">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
