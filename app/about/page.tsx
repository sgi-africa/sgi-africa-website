import type { Metadata } from "next";
import { CompassIcon, EyeIcon, FlagIcon, SparklesIcon } from "lucide-react";

import { CtaBanner } from "@/components/site/cta-banner";
import { FadeIn } from "@/components/site/fade-in";
import { GradientBlob } from "@/components/site/gradient-blob";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { TeamCard } from "@/components/site/team-card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software Group Innovation is a forward-thinking innovation ecosystem dedicated to transforming communities through technology, innovation and opportunity.",
};

const leadership = [
  {
    name: "Joseph Marwa Wambura",
    role: "Chief Executive Officer (CEO)",
    shortRole: "CEO",
    bio: "Provides strategic leadership, innovation direction, and long-term vision for SGI's global growth and community impact.",
  },
  {
    name: "James Prosper Kweka",
    role: "Chief Financial Officer (CFO)",
    shortRole: "CFO",
    bio: "Oversees financial strategy, sustainability, resource allocation, and economic-growth systems across SGI's verticals.",
  },
  {
    name: "Oscar Erasmus Bitarohize",
    role: "Chief Technology Officer (CTO)",
    shortRole: "CTO",
    bio: "Leads technology development, software innovation, and digital infrastructure strategy for every system SGI ships.",
  },
  {
    name: "Muharami Abdu Jongo",
    role: "Chief Operating Officer (COO)",
    shortRole: "COO",
    bio: "Manages operational excellence, implementation systems, and organizational performance across programs.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <Section as="section" size="lg" className="overflow-hidden pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-faint opacity-50 mask-[radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
        />
        <GradientBlob
          variant="cyan"
          size="xl"
          className="left-1/2 top-[-30%] -translate-x-1/2 opacity-40"
        />

        <div className="relative max-w-4xl">
          <FadeIn>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              About SGI
            </span>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-5 font-heading text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              An innovation ecosystem{" "}
              <span className="text-brand-gradient">
                transforming communities
              </span>{" "}
              through technology.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Software Group Innovation (SGI) is a forward-thinking innovation
              ecosystem dedicated to transforming communities through
              technology, innovation, and opportunity. SGI exists to bridge the
              gap between technology and social-economic empowerment by creating
              solutions that promote financial inclusion, digital
              transformation, entrepreneurship and sustainable community
              development.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* STORY */}
      <Section size="md" className="border-t border-border/50">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FadeIn>
              <SectionHeading
                eyebrow="Our story"
                title="Founded on the belief that innovation can solve real-world challenges."
              />
            </FadeIn>
          </div>
          <FadeIn delay={0.1} className="lg:col-span-7">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                SGI was founded on a simple conviction: technology should be a
                pathway to opportunity, not a privilege reserved for the few.
                That belief shapes the systems we build - for organisations
                modernising their operations, for businesses scaling
                responsibly, and for communities reclaiming their financial
                future.
              </p>
              <p>
                We&rsquo;re committed to empowering individuals, organisations and
                communities through impactful digital systems, strategic
                business solutions, and future-focused opportunities. Every
                project is judged by one question:{" "}
                <span className="text-foreground">does it create durable,
                  measurable transformation?</span>
              </p>
              <p>
                SGI is built to create a future where technology is not just a
                tool, but a pathway to opportunity, economic empowerment and
                sustainable growth.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* VISION + MISSION */}
      <Section size="md" className="border-t border-border/50">
        <div className="grid gap-5 md:grid-cols-2">
          <FadeIn>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-8 sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.25),transparent_70%)] blur-3xl"
              />
              <div className="relative space-y-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                    <EyeIcon className="size-5" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    Vision
                  </span>
                </div>
                <p className="font-heading text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                  To become a global leading innovation ecosystem, transforming
                  communities through technology.
                </p>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.08}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-8 sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.25),transparent_70%)] blur-3xl"
              />
              <div className="relative space-y-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-[#16a34a]/30 bg-[#16a34a]/10 text-[#34d399]">
                    <FlagIcon className="size-5" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#34d399]">
                    Mission
                  </span>
                </div>
                <p className="font-heading text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                  To empower communities through innovation, technology and
                  opportunity - building a smarter and more self-reliant future
                  for all.
                </p>
              </div>
            </article>
          </FadeIn>
        </div>
      </Section>

      {/* CORE BELIEF */}
      <Section size="md" className="border-t border-border/50">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-card/80 p-10 sm:p-14 lg:p-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-brand-gradient opacity-15"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-accent/60 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -bottom-32 size-96 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.35),transparent_70%)] blur-3xl"
            />

            <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                <SparklesIcon className="size-3" />
                Our core belief
              </span>
              <p className="font-heading text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                <span className="text-brand-gradient">Innovation</span>
                <span className="mx-3 text-muted-foreground">+</span>
                <span className="text-brand-gradient">Technology</span>
                <span className="mx-3 text-muted-foreground">+</span>
                <span className="text-brand-gradient">Opportunity</span>
                <span className="mx-3 text-muted-foreground">=</span>
                <br className="hidden sm:block" />
                Community Transformation
              </p>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                It&rsquo;s the equation behind every system we ship and the lens we
                use to evaluate every opportunity.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* LEADERSHIP */}
      <Section size="md" className="border-t border-border/50">
        <FadeIn>
          <SectionHeading
            eyebrow="Leadership team"
            title="Driven by a committed executive team"
            description="SGI is led by an executive team focused on global innovation, disciplined delivery and meaningful, measurable impact."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.06}>
              <TeamCard
                name={member.name}
                role={member.role}
                shortRole={member.shortRole}
                bio={member.bio}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* FUTURE DIRECTION + CTA */}
      <Section size="md" className="pb-28">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <SectionHeading
                eyebrow="Future direction"
                title="Expanding globally as a recognised innovation ecosystem."
              />
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                SGI aims to shape industries, empower communities and build
                transformative opportunities for generations to come. We&rsquo;re
                building for the long horizon - and looking for partners who
                share that ambition.
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Industry-shaping systems",
                  "Generational impact",
                  "Long-horizon engineering",
                  "Global partnerships",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-border/50 bg-card/40 px-4 py-3 text-sm text-foreground"
                  >
                    <CompassIcon className="size-4 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <CtaBanner
                eyebrow="Partner with SGI"
                title={
                  <>
                    Let&rsquo;s transform the next{" "}
                    <span className="text-brand-gradient">community</span>{" "}
                    together.
                  </>
                }
                description="Tell us about your mission. We'll bring the engineering, the systems thinking, and the long-term commitment."
                primaryCta={{ href: "/contact", label: "Contact Us" }}
                secondaryCta={{ href: "/services", label: "View Services" }}
              />
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
