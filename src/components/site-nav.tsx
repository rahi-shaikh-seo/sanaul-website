import { Link } from "@tanstack/react-router";
import logo from "@/assets/vegapixel-logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#platform", label: "Platform" },
  { href: "#approach", label: "Approach" },
  { href: "#work", label: "Work" },
  { href: "#faq", label: "FAQ" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="VegaPixel IT Solutions" className="h-9 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:translate-y-[-1px] hover:shadow-md"
        >
          Book a Discovery Call
        </a>
      </div>
    </header>
  );
}
