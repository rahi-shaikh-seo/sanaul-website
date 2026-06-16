import logo from "@/assets/vegapixel-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo.url} alt="VegaPixel IT Solutions" className="h-10 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            VegaPixel IT Solutions engineers digital systems that scale. Software, cloud, AI, and growth — under one accountable roof.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            hello@vegapixel.io · vegapixel.io
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold">Capabilities</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Custom Software</li>
            <li>Cloud & DevOps</li>
            <li>AI & Automation</li>
            <li>Data Engineering</li>
            <li>Growth Marketing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>About</li>
            <li>Case Studies</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} VegaPixel IT Solutions. All rights reserved.</span>
          <span className="font-mono uppercase tracking-wider">v1.0 · Built with precision</span>
        </div>
      </div>
    </footer>
  );
}