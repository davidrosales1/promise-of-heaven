import { navLinks } from "../data/campaign";

export function MiniNav() {
  return (
    <nav
      aria-label="Campaign sections"
      className="sticky top-0 z-40 border-b border-border bg-background/90 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-background/75"
    >
      <div className="container-page overflow-x-auto">
        <ul className="flex justify-start gap-2 whitespace-nowrap py-3 md:justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-foreground/70 transition hover:bg-foreground/10 hover:text-gold-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
