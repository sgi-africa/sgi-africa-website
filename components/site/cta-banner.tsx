import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CtaBannerProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  className?: string;
};

export function CtaBanner({
  eyebrow = "Let's build together",
  title,
  description,
  primaryCta = { href: "/contact", label: "Contact Us" },
  secondaryCta,
  className,
}: CtaBannerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-accent/20 bg-card/80 p-10 text-center sm:p-14 lg:p-20",
        className
      )}
    >
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
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-[radial-gradient(circle,rgba(10,37,64,0.6),transparent_70%)] blur-3xl"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5">
        {eyebrow ? (
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            {eyebrow}
          </span>
        ) : null}
        <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
        <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 bg-brand-gradient px-6 text-base font-semibold text-white shadow-[0_12px_30px_-12px_rgba(0,212,255,0.55)] [a]:hover:bg-transparent"
          >
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRightIcon className="ml-1.5 size-4" />
            </Link>
          </Button>
          {secondaryCta ? (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 border-border/70 bg-background/40 px-6 text-base font-medium text-foreground hover:bg-background/70"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
