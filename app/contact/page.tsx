import type { Metadata } from "next";
import {
  ClockIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
} from "lucide-react";

import { FadeIn } from "@/components/site/fade-in";
import { GradientBlob } from "@/components/site/gradient-blob";
import { Section } from "@/components/site/section";
import { siteConfig } from "@/components/site/nav-config";

import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Software Group Innovation. Tell us about your goal — we'll reply within one business day.",
};

const contactDetails = [
  {
    icon: MailIcon,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPinIcon,
    label: "Headquarters",
    value: "Tanzania",
  },
  {
    icon: GlobeIcon,
    label: "Operating",
    value: "Globally",
  },
  {
    icon: ClockIcon,
    label: "Response time",
    value: "Within 1 business day",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <Section as="section" size="lg" className="overflow-hidden pt-16 pb-10">
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
              <MessageCircleIcon className="size-3" />
              Contact
            </span>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-5 font-heading text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Let&rsquo;s build{" "}
              <span className="text-brand-gradient">impactful technology</span>{" "}
              together.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tell us about your organisation and what you&rsquo;re trying to
              transform. We&rsquo;ll get back to you within one business day with a
              clear, honest next step.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* FORM + INFO */}
      <Section size="md" className="pb-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* INFO CARD */}
          <FadeIn className="lg:col-span-5">
            <aside className="relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-8 sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-32 -top-32 size-72 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.25),transparent_70%)] blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -left-24 -bottom-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(10,37,64,0.6),transparent_70%)] blur-3xl"
              />

              <div className="relative space-y-8">
                <div className="space-y-3">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    <span
                      aria-hidden
                      className="size-1.5 rounded-full bg-accent"
                    />
                    Get in touch
                  </span>
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    We&rsquo;d love to hear what you&rsquo;re working on.
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Reach out by form or email - we read every message and
                    reply within one business day.
                  </p>
                </div>

                <ul className="space-y-4">
                  {contactDetails.map((detail) => (
                    <li
                      key={detail.label}
                      className="flex items-start gap-3 rounded-xl border border-border/40 bg-background/30 p-4"
                    >
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                        <detail.icon className="size-4" />
                      </span>
                      <div className="space-y-0.5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-sm font-medium text-foreground transition-colors hover:text-accent"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="rounded-2xl border border-border/40 bg-background/30 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Prefer email?
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}?subject=Project%20enquiry%20—%20SGI`}
                    className="mt-1 inline-flex items-center gap-1.5 font-heading text-base font-semibold text-foreground transition hover:text-accent"
                  >
                    {siteConfig.email}
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </aside>
          </FadeIn>

          {/* FORM */}
          <FadeIn delay={0.1} className="lg:col-span-7">
            <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-10">
              <div className="mb-8 space-y-2">
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Send us a message
                </h2>
                <p className="text-sm text-muted-foreground">
                  Fields marked required are needed so we can route your
                  enquiry to the right team.
                </p>
              </div>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
