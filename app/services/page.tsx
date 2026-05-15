import type { Metadata } from "next";
import Link from "next/link";
import {
  CodeIcon,
  HeartPulseIcon,
  ShieldCheckIcon,
  WalletIcon,
} from "lucide-react";

import { CtaBanner } from "@/components/site/cta-banner";
import { FadeIn } from "@/components/site/fade-in";
import { GradientBlob } from "@/components/site/gradient-blob";
import { Section } from "@/components/site/section";
import { ServiceBlock } from "@/components/site/service-block";
import { SITE_URL } from "@/components/site/nav-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore SGI Africa's four practice areas — Technology Solutions, Financial Innovation, Health Innovation and Cybersecurity — built to deliver measurable, community-level impact across Africa.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    url: `${SITE_URL}/services`,
    title: "Services · Software Group Innovation",
    description:
      "Explore SGI Africa's four practice areas — Technology Solutions, Financial Innovation, Health Innovation and Cybersecurity — built to deliver measurable, community-level impact across Africa.",
  },
  twitter: {
    title: "Services · Software Group Innovation",
    description:
      "Explore SGI Africa's four practice areas — Technology Solutions, Financial Innovation, Health Innovation and Cybersecurity — built to deliver measurable, community-level impact across Africa.",
  },
};

const serviceBlocks = [
  {
    id: "technology",
    number: "01",
    eyebrow: "Practice area",
    title: "Technology Solutions",
    description:
      "Custom software, business automation, and web & mobile platforms engineered for organisations that need their digital systems to compound value over years, not weeks.",
    icon: CodeIcon,
    bullets: [
      "Custom software development",
      "Business automation tooling",
      "Web platforms & dashboards",
      "Native & cross-platform mobile",
      "Digital transformation programs",
      "API & integration architecture",
    ],
  },
  {
    id: "financial",
    number: "02",
    eyebrow: "Practice area",
    title: "Financial Innovation",
    description:
      "SGI VICOBA systems, transparent savings & lending, and fund-disbursement platforms that make grassroots financial inclusion auditable, scalable and trustworthy.",
    icon: WalletIcon,
    bullets: [
      "SGI VICOBA systems",
      "Community financial governance",
      "Transparent savings & lending",
      "Fund disbursement platforms",
      "Member onboarding & KYC",
      "Audit-grade reporting",
    ],
    reverse: true,
  },
  {
    id: "health",
    number: "03",
    eyebrow: "Practice area",
    title: "Health Innovation",
    description:
      "AI-powered health tools, mobile diagnostic technologies and digital healthcare access - preventive, smart health ecosystems that meet communities where they are.",
    icon: HeartPulseIcon,
    bullets: [
      "AI-powered health solutions",
      "Mobile diagnostic technologies",
      "Disease awareness systems",
      "Community health education",
      "Digital healthcare accessibility",
      "Preventive health ecosystems",
    ],
  },
  {
    id: "cybersecurity",
    number: "04",
    eyebrow: "Practice area",
    title: "Cybersecurity Services",
    description:
      "End-to-end security: network defence, penetration testing, cloud security, data privacy and incident response - protecting the systems that protect your people.",
    icon: ShieldCheckIcon,
    bullets: [
      "Network security",
      "Penetration testing & assessment",
      "Security awareness training",
      "Digital identity protection",
      "Cloud security & compliance",
      "Threat monitoring & response",
    ],
    reverse: true,
  },
];

export default function ServicesPage() {
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

        <div className="relative grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <FadeIn>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                <span
                  className="size-1.5 rounded-full bg-accent"
                  aria-hidden
                />
                Services
              </span>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="mt-5 font-heading text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Innovative solutions that{" "}
                <span className="text-brand-gradient">create measurable impact.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Four focused practice areas, one shared standard: ship systems
                that hold up to real-world conditions and produce outcomes
                you can measure.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="lg:col-span-4">
            <nav
              aria-label="Service sections"
              className="rounded-2xl border border-border/60 bg-card/60 p-4"
            >
              <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Jump to
              </p>
              <ul className="space-y-1">
                {serviceBlocks.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`#${s.id}`}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
                    >
                      <span className="inline-flex items-center gap-3">
                        <span className="font-mono text-xs text-accent">
                          {s.number}
                        </span>
                        {s.title}
                      </span>
                      <span
                        aria-hidden
                        className="text-muted-foreground"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </FadeIn>
        </div>
      </Section>

      {/* SERVICE BLOCKS */}
      <Section size="md" className="border-t border-border/50">
        <div className="space-y-24 lg:space-y-32">
          {serviceBlocks.map((s) => (
            <FadeIn key={s.id}>
              <ServiceBlock
                id={s.id}
                number={s.number}
                eyebrow={s.eyebrow}
                title={s.title}
                description={s.description}
                icon={s.icon}
                bullets={s.bullets}
                reverse={s.reverse}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section size="md" className="pb-28">
        <FadeIn>
          <CtaBanner
            eyebrow="Start a project"
            title={
              <>
                Not sure which service fits?{" "}
                <span className="text-brand-gradient">We&rsquo;ll help you decide.</span>
              </>
            }
            description="Tell us about the outcome you're trying to drive - we'll map it to the right combination of practice areas and deliver a clear plan."
            primaryCta={{ href: "/contact", label: "Contact Us" }}
            secondaryCta={{ href: "/impact", label: "See Our Impact" }}
          />
        </FadeIn>
      </Section>
    </>
  );
}
