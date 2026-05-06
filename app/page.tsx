import Link from "next/link";
import {
  ArrowRightIcon,
  Building2Icon,
  CodeIcon,
  CompassIcon,
  GlobeIcon,
  HeartPulseIcon,
  LandmarkIcon,
  ShieldCheckIcon,
  SparklesIcon,
  SproutIcon,
  UsersIcon,
  WalletIcon,
  ZapIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { AudienceCard } from "@/components/site/audience-card";
import { CtaBanner } from "@/components/site/cta-banner";
import { FadeIn } from "@/components/site/fade-in";
import { FeatureCard } from "@/components/site/feature-card";
import { ProductCard } from "@/components/site/product-card";
import { GradientBlob } from "@/components/site/gradient-blob";
import { PillarCard } from "@/components/site/pillar-card";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { StatCard } from "@/components/site/stat-card";
import { sgiProducts } from "@/components/site/nav-config";

const services = [
  {
    icon: CodeIcon,
    title: "Technology Solutions",
    description:
      "Custom software, business automation, and web & mobile platforms engineered to scale with your mission.",
    accent: "cyan" as const,
  },
  {
    icon: WalletIcon,
    title: "Financial Innovation",
    description:
      "SGI VICOBA systems, transparent savings & lending, and fund-disbursement platforms for inclusive economies.",
    accent: "green" as const,
  },
  {
    icon: HeartPulseIcon,
    title: "Health Innovation",
    description:
      "AI-powered health tools, digital healthcare access, and community awareness systems that save lives.",
    accent: "blue" as const,
  },
  {
    icon: ShieldCheckIcon,
    title: "Cybersecurity",
    description:
      "Network security, penetration testing, cloud security, and data privacy programs that protect what matters.",
    accent: "cyan" as const,
  },
];

const audiences = [
  {
    icon: Building2Icon,
    title: "Organizations",
    description:
      "NGOs, government agencies and institutions modernising operations and unlocking measurable impact.",
    bullets: [
      "Digital transformation programs",
      "Beneficiary management systems",
      "Reporting & compliance tooling",
    ],
  },
  {
    icon: LandmarkIcon,
    title: "Businesses",
    description:
      "SMEs and enterprises in the private sector who need software that grows revenue and reduces friction.",
    bullets: [
      "Workflow & business automation",
      "Customer-facing web & mobile apps",
      "Analytics, security & cloud",
    ],
  },
  {
    icon: UsersIcon,
    title: "Communities",
    description:
      "VICOBA groups and grassroots networks adopting transparent, technology-enabled financial inclusion.",
    bullets: [
      "Community savings & lending tools",
      "Funds disbursement transparency",
      "Digital literacy & onboarding",
    ],
  },
];

const pillars = [
  {
    icon: SparklesIcon,
    title: "Innovation with Purpose",
    description:
      "We build solutions designed to solve real community and business challenges - not technology for its own sake.",
  },
  {
    icon: ZapIcon,
    title: "Technology for Empowerment",
    description:
      "Our systems make people, communities and organisations smarter, stronger and more self-reliant.",
  },
  {
    icon: SproutIcon,
    title: "Sustainable Growth",
    description:
      "We prioritise long-term transformation over short-term convenience and ship for the long horizon.",
  },
  {
    icon: CompassIcon,
    title: "Leadership & Vision",
    description:
      "An executive team focused on global innovation, meaningful impact and disciplined delivery.",
  },
];

const stats = [
  {
    value: "10+",
    label: "Communities engaged",
    description: "Grassroots VICOBA groups and community programs onboarded.",
  },
  {
    value: "6+",
    label: "Systems deployed",
    description: "Financial, health and operational platforms in production.",
  },
  {
    value: "5K+",
    label: "Users served",
    description: "Individuals empowered through SGI's digital ecosystems.",
  },
  {
    value: "4",
    label: "Verticals built",
    description: "Tech, financial, health and cybersecurity practice areas.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Section as="section" size="lg" className="overflow-hidden pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-faint opacity-60 mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-brand-radial"
        />
        <GradientBlob
          variant="cyan"
          size="xl"
          className="left-1/2 top-[-20%] -translate-x-1/2 opacity-50"
        />

        <div className="relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeIn>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                <span
                  className="size-1.5 rounded-full bg-accent"
                  aria-hidden
                />
                Software Group Innovation
              </span>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="mt-5 font-heading text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Technology Solutions for{" "}
                <span className="text-brand-gradient">
                  Impact-Driven Organizations
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                SGI is a forward-thinking innovation ecosystem building digital
                systems that drive financial inclusion, community
                transformation and digital empowerment - for organisations,
                businesses and communities across Africa and beyond.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 bg-brand-gradient px-6 text-base font-semibold text-white shadow-[0_12px_30px_-12px_rgba(0,212,255,0.55)] [a]:hover:bg-transparent"
                >
                  <Link href="/contact">
                    Contact Us
                    <ArrowRightIcon className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 border-border/70 bg-background/40 px-6 text-base font-medium text-foreground hover:bg-background/70"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted-foreground sm:max-w-md">
                {[
                  "Innovation with purpose",
                  "Built for the long horizon",
                  "Tanzania · Operating globally",
                  "Community-first engineering",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-1.5 size-1.5 rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="relative lg:col-span-5">
            <FadeIn delay={0.1}>
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-[2.5rem] bg-brand-gradient opacity-30 blur-3xl"
                />
                <div className="relative flex h-full flex-col gap-5 overflow-hidden rounded-[2rem] border border-border/60 bg-card/70 p-6 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                      <span
                        className="size-1.5 rounded-full bg-accent"
                        aria-hidden
                      />
                      Live impact
                    </span>
                    <GlobeIcon className="size-5 text-muted-foreground" />
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Core Belief
                    </p>
                    <p className="font-heading text-xl font-semibold leading-tight text-foreground">
                      Innovation + Technology + Opportunity ={" "}
                      <span className="text-brand-gradient">
                        Community Transformation
                      </span>
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Communities", value: "20+" },
                      { label: "Systems", value: "12+" },
                      { label: "Users", value: "5K+" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl border border-border/60 bg-background/40 p-3"
                      >
                        <p className="font-heading text-lg font-semibold text-foreground">
                          {s.value}
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto space-y-2.5">
                    {[
                      { label: "Technology Solutions", icon: CodeIcon },
                      { label: "Financial Innovation", icon: WalletIcon },
                      { label: "Health Innovation", icon: HeartPulseIcon },
                      { label: "Cybersecurity", icon: ShieldCheckIcon },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between rounded-lg border border-border/40 bg-background/30 px-3 py-2 text-xs text-foreground"
                      >
                        <span className="inline-flex items-center gap-2">
                          <row.icon className="size-3.5 text-accent" />
                          {row.label}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                          Active
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* WHAT WE DO */}
      <Section size="md">
        <FadeIn>
          <SectionHeading
            eyebrow="What we do"
            title="Four practice areas, one mission"
            description="SGI delivers innovation that creates measurable impact - built around four focused practice areas designed to compound community and business value."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.06}>
              <FeatureCard
                icon={s.icon}
                title={s.title}
                description={s.description}
                accent={s.accent}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section
        id="products"
        size="md"
        className="scroll-mt-24 border-t border-border/50"
      >
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto] md:gap-12">
          <FadeIn>
            <SectionHeading
              eyebrow="Products"
              title="Solutions shipping today"
              description="SGI builds platforms you can deploy in the field - starting with community finance. Explore our live product and see what&rsquo;s possible for your organisation."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 border-border/70 bg-background/40 px-5 text-sm font-medium"
            >
              <Link href="/services#financial">
                Financial innovation services
                <ArrowRightIcon className="ml-1.5 size-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <div className="mt-12 mx-auto max-w-2xl">
          {sgiProducts.map((product, i) => (
            <FadeIn key={product.name} delay={i * 0.08}>
              <ProductCard
                name={product.name}
                tagline={product.tagline}
                description={product.description}
                href={product.href}
                category={product.category}
                icon={WalletIcon}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* AUDIENCES */}
      <Section size="md" className="border-t border-border/50">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto] md:gap-12">
          <FadeIn>
            <SectionHeading
              eyebrow="Who we serve"
              title="Built for organisations, businesses and communities"
              description="Whether you're driving institutional impact, scaling a business, or empowering a grassroots community - SGI builds the systems that move you forward."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 border-border/70 bg-background/40 px-5 text-sm font-medium"
            >
              <Link href="/about">
                About SGI
                <ArrowRightIcon className="ml-1.5 size-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.08}>
              <AudienceCard
                icon={a.icon}
                title={a.title}
                description={a.description}
                bullets={a.bullets}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* WHY CHOOSE SGI */}
      <Section size="md" className="border-t border-border/50">
        <FadeIn>
          <SectionHeading
            eyebrow="Why choose SGI"
            title="Four pillars that anchor every system we ship"
            description="Our approach blends deep engineering rigour with a relentless focus on outcomes that matter to communities and partners."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <PillarCard
                icon={p.icon}
                title={p.title}
                description={p.description}
                index={i}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* IMPACT */}
      <Section size="md" className="border-t border-border/50">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto] md:gap-12">
          <FadeIn>
            <SectionHeading
              eyebrow="Our impact"
              title="Real numbers behind real transformation"
              description="A snapshot of the communities, systems and people SGI has touched so far - and we're just getting started."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 border-border/70 bg-background/40 px-5 text-sm font-medium"
            >
              <Link href="/impact">
                Read full story
                <ArrowRightIcon className="ml-1.5 size-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.06}>
              <StatCard
                value={s.value}
                label={s.label}
                description={s.description}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section size="md" className="pb-28">
        <FadeIn>
          <CtaBanner
            eyebrow="Ready to start"
            title={
              <>
                Ready to build{" "}
                <span className="text-brand-gradient">impactful technology</span>
                ?
              </>
            }
            description="Tell us what you're trying to transform. Our team will reply within one business day with a clear next step."
            primaryCta={{ href: "/contact", label: "Contact Us" }}
            secondaryCta={{ href: "/services", label: "Explore Services" }}
          />
        </FadeIn>
      </Section>
    </>
  );
}
