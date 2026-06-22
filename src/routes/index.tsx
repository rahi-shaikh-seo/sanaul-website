import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import heroIllustration from "@/assets/hero-illustration.png";
import caseHelix from "@/assets/case-helix.png";
import caseNorthbridge from "@/assets/case-northbridge.png";
import caseVerde from "@/assets/case-verde.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VegaPixel IT Solutions — Engineering Growth for Modern Businesses" },
      {
        name: "description",
        content:
          "Data-driven IT solutions and digital growth engineering — custom software, cloud, AI automation, and performance marketing under one roof.",
      },
      { property: "og:title", content: "VegaPixel IT Solutions" },
      {
        property: "og:description",
        content:
          "Modern IT solutions and digital growth engineering — built with precision, delivered with accountability.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    code: "S01",
    title: "Custom Software Engineering",
    promise: "Ship production-grade products on a predictable cadence.",
    metric: "Avg. 14-week MVP",
    bullets: [
      "Discovery, architecture & sprint planning",
      "React, Next.js, Node, .NET, Java",
      "QA automation & release management",
    ],
  },
  {
    code: "S02",
    title: "Cloud Modernization & DevOps",
    promise: "Cut infrastructure spend while improving uptime.",
    metric: "Up to 38% infra savings",
    bullets: [
      "AWS · Azure · GCP migrations",
      "Kubernetes, Terraform, GitOps",
      "Observability & cost guardrails",
    ],
  },
  {
    code: "S03",
    title: "AI & Intelligent Automation",
    promise: "Embed AI where it actually moves the P&L.",
    metric: "40–60% manual hours reclaimed",
    bullets: [
      "LLM agents & RAG pipelines",
      "Document & workflow automation",
      "Model evaluation & guardrails",
    ],
  },
  {
    code: "S04",
    title: "Data Engineering & Analytics",
    promise: "Turn scattered systems into one source of truth.",
    metric: "1 unified warehouse",
    bullets: [
      "Snowflake · BigQuery · dbt",
      "Real-time event pipelines",
      "Executive dashboards in Looker / Power BI",
    ],
  },
  {
    code: "S05",
    title: "Product Design & UX",
    promise: "Interfaces users finish, not abandon.",
    metric: "+52% task completion",
    bullets: [
      "Research & journey mapping",
      "Design systems in Figma",
      "Accessibility (WCAG 2.2 AA)",
    ],
  },
  {
    code: "S06",
    title: "Digital Growth Engineering",
    promise: "Performance marketing wired to revenue, not vanity.",
    metric: "Closed-loop attribution",
    bullets: [
      "SEO, paid search & paid social",
      "Lifecycle email & CRM",
      "Experimentation & CRO programs",
    ],
  },
  {
    code: "S07",
    title: "Managed IT & Cybersecurity",
    promise: "24/7 coverage with a named engineer on every account.",
    metric: "SOC 2-aligned playbooks",
    bullets: [
      "Endpoint, identity & SaaS hardening",
      "Incident response & DR drills",
      "Compliance: SOC 2 · HIPAA · ISO 27001",
    ],
  },
];

const stack = [
  { label: "Languages", items: "TypeScript · Python · Go · Java · C# · Swift · Kotlin" },
  { label: "Frameworks", items: "Next.js · React · Vue · Nest · Spring · .NET · FastAPI" },
  { label: "Data", items: "Postgres · Snowflake · BigQuery · Mongo · Redis · Kafka · dbt" },
  { label: "Cloud & Infra", items: "AWS · Azure · GCP · Cloudflare · Terraform · Pulumi" },
  {
    label: "AI Platforms",
    items: "OpenAI · Anthropic · Gemini · Mistral · Llama · LangGraph · Pinecone",
  },
  { label: "DevOps", items: "Kubernetes · Docker · GitHub Actions · ArgoCD · Datadog · Grafana" },
];

const differentiators = [
  {
    title: "Senior-only delivery teams",
    body: "Every engagement is led by engineers with 8+ years of shipping. No bait-and-switch staffing.",
  },
  {
    title: "Outcome-based contracts",
    body: "We price against business milestones, not hours. You always know what you're paying for and why.",
  },
  {
    title: "North American coverage",
    body: "Pods aligned to PT, MT, CT and ET — daily standups in your timezone, not ours.",
  },
  {
    title: "Code, data & docs you own",
    body: "Repos, dashboards, and runbooks transfer to your team on day one. Zero vendor lock-in.",
  },
];

const process = [
  {
    step: "01",
    title: "Diagnose",
    body: "Two-week paid discovery: systems audit, stakeholder interviews, measurable target set.",
  },
  {
    step: "02",
    title: "Design",
    body: "Solution architecture, scope of work, and a fixed-fee delivery plan reviewed by your team.",
  },
  {
    step: "03",
    title: "Deliver",
    body: "Two-week sprints, weekly demos, transparent burndown. Production releases, not slideware.",
  },
  {
    step: "04",
    title: "Drive",
    body: "Continuous optimization against the original KPI — handover or ongoing partnership, your call.",
  },
];

const cases = [
  {
    industry: "B2B SaaS · Healthcare",
    name: "Helix Care Platform",
    scope: "Platform rebuild + HIPAA cloud migration",
    image: caseHelix,
    metrics: [
      { v: "−71%", l: "p95 API latency" },
      { v: "$1.2M", l: "Annual infra savings" },
      { v: "0", l: "Sev-1 incidents in 12 mo." },
    ],
  },
  {
    industry: "FinTech · Lending",
    name: "Northbridge Capital",
    scope: "AI underwriting copilot + data warehouse",
    image: caseNorthbridge,
    metrics: [
      { v: "3.8×", l: "Loans processed per analyst" },
      { v: "−42%", l: "Time-to-decision" },
      { v: "98.4%", l: "Model precision" },
    ],
  },
  {
    industry: "Retail · Omnichannel",
    name: "Verde & Oak",
    scope: "Headless commerce + growth marketing",
    image: caseVerde,
    metrics: [
      { v: "+187%", l: "DTC revenue (12 mo.)" },
      { v: "5.4:1", l: "Blended ROAS" },
      { v: "+63%", l: "Repeat purchase rate" },
    ],
  },
];

const testimonials = [
  {
    quote:
      "VegaPixel is the first technology partner that gave us a roadmap we could actually defend to our board.",
    who: "Mariana Ortiz",
    role: "CTO, Helix Care",
  },
  {
    quote:
      "We replaced two agencies and an internal pod with VegaPixel. Output went up and the slack got quieter.",
    who: "James Whitford",
    role: "VP Engineering, Northbridge",
  },
  {
    quote:
      "They built our checkout, our warehouse, and our growth program — and treated each like the only one that mattered.",
    who: "Aisha Bell",
    role: "Founder, Verde & Oak",
  },
];

const faqs = [
  {
    q: "How are engagements priced?",
    a: "Most projects are fixed-fee against a defined scope, with optional retainer pods afterwards. Discovery sprints are flat-rate so you can evaluate fit before committing.",
  },
  {
    q: "Do you work with regulated industries?",
    a: "Yes. We have shipped under HIPAA, SOC 2, PCI-DSS, and FINRA constraints, and we can sign BAAs and security addenda before kickoff.",
  },
  {
    q: "Can you augment our existing engineering team?",
    a: "Absolutely. Embedded pods of 2–8 senior engineers are one of our most common shapes, with daily collaboration in your repos and tools.",
  },
  {
    q: "What does a typical timeline look like?",
    a: "Discovery runs 1–2 weeks. First production release usually lands in week 6. Most platform rebuilds ship a full v1 inside 14 weeks.",
  },
  {
    q: "Who owns the IP we build together?",
    a: "You do — completely. All code, infrastructure, and documentation transfer to your accounts and repositories on delivery.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--brand-surface),transparent_60%)]" />
          <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  [ Engineered IT · Measured Outcomes ]
                </p>
                <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] text-foreground md:text-7xl">
                  Modern IT solutions, engineered for the businesses that{" "}
                  <span className="text-primary">refuse to stall</span>.
                </h1>
                <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                  VegaPixel is the technology partner enterprise teams call when the roadmap is
                  real, the deadline is unforgiving, and the result has to show up in the P&amp;L.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:translate-y-[-1px] hover:shadow-lg"
                  >
                    Book a Discovery Call
                  </a>
                  <a
                    href="#services"
                    className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-primary bg-background px-6 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                  >
                    Explore Capabilities
                  </a>
                </div>
              </div>
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[550px] aspect-square rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                  <img
                    src={heroIllustration}
                    alt="Modern technology network illustration"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4">
              {[
                ["180+", "Enterprise engagements"],
                ["14 yr", "Median engineer tenure"],
                ["99.98%", "Production uptime"],
                ["NA + EU", "Delivery coverage"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl font-bold text-foreground md:text-4xl">
                    {v}
                  </dt>
                  <dd className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-border bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  // Capabilities
                </p>
                <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
                  Seven engineered practices. One accountable partner.
                </h2>
              </div>
              <p className="max-w-md text-muted-foreground">
                Engage a single discipline or compose them into an integrated delivery program.
                Either way, you get one team, one roadmap, one invoice.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.code}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary hover:shadow-[0_8px_30px_-12px_oklch(0.52_0.13_235_/_0.35)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {s.code}
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                      {s.metric}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.promise}</p>
                  <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="platform" className="border-t border-border bg-secondary/40 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">// Platform</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-bold text-foreground md:text-5xl">
              The stack we choose because it actually holds up in production.
            </h2>
            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {stack.map((row) => (
                <div
                  key={row.label}
                  className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary"
                >
                  <div className="font-mono text-[11px] uppercase tracking-wider text-primary">
                    {row.label}
                  </div>
                  <p className="mt-3 text-base text-foreground">{row.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section id="approach" className="border-t border-border bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  // Why VegaPixel
                </p>
                <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
                  Built like an in-house team — priced like a partner.
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  We are not an outsourcing shop, a body-leasing agency, or a deck-first
                  consultancy. We are a senior engineering studio with a marketing arm, structured
                  to ship things you can measure.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {differentiators.map((d) => (
                  <div key={d.title} className="rounded-xl border border-border bg-card p-6">
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{d.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-t border-border bg-foreground py-24 text-background">
          <div className="mx-auto max-w-7xl px-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              // Engagement Model
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">
              A four-phase rhythm, repeated until the metric moves.
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-4">
              {process.map((p) => (
                <div key={p.step} className="border-t-2 border-primary pt-5">
                  <div className="font-mono text-xs uppercase tracking-wider text-primary">
                    Phase {p.step}
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm text-background/70">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="work" className="border-t border-border bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              // Selected Work
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-bold text-foreground md:text-5xl">
              Outcomes that survive contact with the board.
            </h2>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {cases.map((c) => (
                <article
                  key={c.name}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden border-b border-border bg-secondary/30">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {c.industry}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold text-foreground">{c.name}</h3>
                    <p className="mt-1 text-sm text-primary">{c.scope}</p>
                    <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                      {c.metrics.map((m) => (
                        <div key={m.l}>
                          <dt className="font-display text-xl font-bold text-foreground">{m.v}</dt>
                          <dd className="mt-1 text-[11px] leading-tight text-muted-foreground">
                            {m.l}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-border bg-secondary/50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              // In their words
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure
                  key={t.who}
                  className="flex flex-col rounded-2xl border border-border bg-background p-7"
                >
                  <blockquote className="font-display text-lg leading-snug text-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4">
                    <div className="text-sm font-semibold text-foreground">{t.who}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-border bg-background py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">// FAQ</p>
              <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
                The questions every leadership team asks us first.
              </h2>
            </div>
            <div className="lg:col-span-2">
              <dl className="divide-y divide-border border-y border-border">
                {faqs.map((f) => (
                  <div key={f.q} className="py-6">
                    <dt className="font-display text-lg font-semibold text-foreground">{f.q}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="border-t border-border bg-foreground py-24 text-background"
        >
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              // Let's build
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-6xl">
              Bring us the thing that <span className="text-primary">has to ship</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-background/70">
              A 30-minute call with a principal engineer and a strategist. No pitch deck — just a
              working plan you can take back to your team.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hello@vegapixel.io"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:translate-y-[-1px] hover:shadow-lg"
              >
                Book a Discovery Call
              </a>
              <a
                href="mailto:hello@vegapixel.io"
                className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-background/30 px-7 text-sm font-semibold text-background transition-colors hover:bg-background/10"
              >
                Send a Brief
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
