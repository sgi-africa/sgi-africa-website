import type { Metadata } from "next";
import {
  ArrowUpRightIcon,
  GlobeIcon,
  HeartHandshakeIcon,
  HeartPulseIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  UsersIcon,
  WalletIcon,
} from "lucide-react";

import { CtaBanner } from "@/components/site/cta-banner";
import { FadeIn } from "@/components/site/fade-in";
import { GradientBlob } from "@/components/site/gradient-blob";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { StatCard } from "@/components/site/stat-card";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "SGI's impact story — global ambitions, community transformation, real systems built and the people they serve.",
};

const metrics = [
  {
    value: "10+",
    label: "Communities engaged",
    description: "VICOBA groups and grassroots programs onboarded so far.",
  },
  {
    value: "6+",
    label: "Systems shipped",
    description: "Production platforms across financial, health and ops.",
  },
  {
    value: "5K+",
    label: "Users empowered",
    description: "Individuals served through SGI's digital ecosystems.",
  },
  {
    value: "4",
    label: "Verticals built",
    description: "Tech, financial, health and cybersecurity.",
  },
];

const caseStudies = [
  {
    icon: WalletIcon,
    sector: "Financial Innovation",
    title: "Transparent VICOBA, end-to-end",
    summary:
      "A community savings & lending group of 60+ members moved from paper ledgers to a transparent, mobile-first VICOBA system - reducing reconciliation time by 80% and unlocking auditable disbursements.",
    metrics: [
      { label: "Members onboarded", value: "60+" },
      { label: "Reconciliation time", value: "−80%" },
    ],
  },
  {
    icon: HeartPulseIcon,
    sector: "Health Innovation",
    title: "Reaching the last-mile patient",
    summary:
      "An AI-assisted awareness platform brought disease education and triage guidance to underserved communities - with content adapted to local languages and low-bandwidth devices.",
    metrics: [
      { label: "Communities reached", value: "8" },
      { label: "Education sessions", value: "20+" },
    ],
  },
  {
    icon: ShieldCheckIcon,
    sector: "Cybersecurity",
    title: "Hardening a mission-critical platform",
    summary:
      "A penetration test, cloud-security review and identity hardening program closed 100% of high-severity findings before a major partner integration went live.",
    metrics: [
      { label: "High-sev findings closed", value: "100%" },
      { label: "Time-to-remediation", value: "<14d" },
    ],
  },
];

const transformationPillars = [
  {
    icon: UsersIcon,
    title: "People-first by design",
    description:
      "Every system is shaped by the people who'll actually use it - community leaders, frontline workers, smallholders.",
  },
  {
    icon: TrendingUpIcon,
    title: "Outcomes we can measure",
    description:
      "We define success up-front and instrument for it. If we can't measure it, we don't ship it.",
  },
  {
    icon: HeartHandshakeIcon,
    title: "Built to be handed over",
    description:
      "Documentation, training and clean architecture so partners own their platform - not depend on us.",
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* HERO */}
      <Section as="section" size="lg" className="overflow-hidden pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-faint opacity-40 mask-[radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
        />
        <GradientBlob
          variant="cyan"
          size="xl"
          className="left-1/2 top-[-30%] -translate-x-1/2 opacity-40"
        />

        <div className="relative max-w-4xl">
          <FadeIn>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              <GlobeIcon className="size-3" />
              Our impact
            </span>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-5 font-heading text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Transforming communities,{" "}
              <span className="text-brand-gradient">one system at a time.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              SGI is built to expand globally as a recognised innovation
              ecosystem - shaping industries, empowering communities and
              building transformative opportunities for generations to come.
              Below is a snapshot of what we&rsquo;ve delivered so far, and the
              standard we hold ourselves to going forward.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* METRICS */}
      <Section size="md" className="border-t border-border/50">
        <FadeIn>
          <SectionHeading
            eyebrow="By the numbers"
            title="The story behind the metrics"
            description="Every number represents real organisations, real communities and real change. We're proud of where we are — and clear-eyed about how much more is ahead."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <FadeIn key={m.label} delay={i * 0.06}>
              <StatCard
                value={m.value}
                label={m.label}
                description={m.description}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* TRANSFORMATION PILLARS */}
      <Section size="md" className="border-t border-border/50">
        <div className="grid gap-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <SectionHeading
              eyebrow="Community transformation"
              title="What real transformation looks like to us."
              description="Impact is more than installations and integrations. It's whether a community is more self-reliant, an organisation more resilient, a person more empowered - six months after we leave."
            />
          </FadeIn>

          <div className="grid gap-4 lg:col-span-7">
            {transformationPillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <article className="group relative flex gap-5 rounded-2xl border border-border/60 bg-card/60 p-6 transition-colors hover:border-accent/40">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                    <p.icon className="size-5" />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* CASE STUDIES */}
      <Section size="md" className="border-t border-border/50">
        <FadeIn>
          <SectionHeading
            eyebrow="Case studies"
            title="A few recent stories"
            description="Anonymised illustrations of how SGI's practice areas combine to deliver measurable change. Detailed case studies are available on request."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-accent/40 hover:shadow-[0_24px_60px_-24px_rgba(0,212,255,0.3)]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <c.icon className="size-5" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    {c.sector}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {c.summary}
                </p>
                <dl className="mt-auto grid grid-cols-2 gap-3 border-t border-border/60 pt-4">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="space-y-1">
                      <dt className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        {m.label}
                      </dt>
                      <dd className="font-heading text-base font-semibold text-foreground">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  <span>Anonymised</span>
                  <ArrowUpRightIcon className="size-3" />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* GLOBAL VISION */}
      <Section size="md" className="border-t border-border/50">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-10 sm:p-14 lg:p-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.25),transparent_70%)] blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-32 -bottom-32 size-96 rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.18),transparent_70%)] blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-5">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  <GlobeIcon className="size-3" />
                  Global vision
                </span>
                <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Built locally. Designed for the world.
                </h2>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Headquartered in Tanzania and operating with global ambition,
                  SGI is creating a future where technology is a pathway to
                  opportunity - not a privilege. Our roadmap targets
                  cross-border partnerships, regional expansion and
                  industry-defining systems.
                </p>
              </div>

              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Pan-African expansion",
                  "Cross-border partnerships",
                  "Industry-defining platforms",
                  "Generational impact",
                  "Open, scalable architectures",
                  "Long-horizon engineering",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-border/50 bg-background/40 px-4 py-3 text-sm text-foreground"
                  >
                    <span
                      aria-hidden
                      className="size-1.5 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section size="md" className="pb-28">
        <FadeIn>
          <CtaBanner
            eyebrow="Be the next case study"
            title={
              <>
                Have a transformation in mind?{" "}
                <span className="text-brand-gradient">Let&rsquo;s deliver it together.</span>
              </>
            }
            description="Send us your goal -we'll come back with a clear, honest assessment of how SGI can help."
            primaryCta={{ href: "/contact", label: "Contact Us" }}
            secondaryCta={{ href: "/services", label: "View Services" }}
          />
        </FadeIn>
      </Section>
    </>
  );
}
