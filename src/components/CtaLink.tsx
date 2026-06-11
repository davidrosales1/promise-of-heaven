type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "dark" | "outline";
};

export function CtaLink({ href, children, variant = "gold" }: CtaLinkProps) {
  const variants = {
    gold: "bg-gold-gradient text-gold-foreground shadow-soft hover:brightness-110",
    dark: "bg-foreground text-background hover:bg-foreground/90",
    outline:
      "border border-foreground/30 bg-background/60 text-foreground hover:bg-background/90",
  };

  return (
    <a
      href={href}
      className={`flex w-full items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition md:inline-flex md:w-auto ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
