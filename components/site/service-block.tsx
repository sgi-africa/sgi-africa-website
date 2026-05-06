import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ServiceBlockProps = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  ctaLabel?: string;
  ctaHref?: string;
  reverse?: boolean;
  className?: string;
};

export function ServiceBlock({
  id,
  number,
  eyebrow,
  title,
  description,
  icon: Icon,
  bullets,
  ctaLabel = "Discuss this service",
  ctaHref = "/contact",
  reverse = false,
  className,
}: ServiceBlockProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24",
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        className
      )}
    >
      <div className={cn("space-y-6", reverse && "lg:order-2")}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm tracking-[0.2em] text-accent">
            {number}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow}
          </span>
        </div>
        <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
        <Button
          asChild
          size="lg"
          className="h-11 bg-brand-gradient px-5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(0,212,255,0.55)] [a]:hover:bg-transparent"
        >
          <Link href={ctaHref}>
            {ctaLabel}
            <ArrowRightIcon className="ml-1.5 size-4" />
          </Link>
        </Button>
      </div>

      <div
        className={cn(
          "relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-8 sm:p-10",
          reverse && "lg:order-1"
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.25),transparent_70%)] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-[radial-gradient(circle,rgba(10,37,64,0.6),transparent_70%)] blur-3xl"
        />

        <div className="relative space-y-6">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[0_10px_30px_-12px_rgba(0,212,255,0.55)]">
            <Icon className="size-6" />
          </span>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 rounded-xl border border-border/50 bg-background/40 p-3 text-sm text-foreground"
              >
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
                  <CheckIcon className="size-3" />
                </span>
                <span className="leading-snug">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
