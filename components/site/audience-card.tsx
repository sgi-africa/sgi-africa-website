import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type AudienceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  className?: string;
};

export function AudienceCard({
  icon: Icon,
  title,
  description,
  bullets,
  className,
}: AudienceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_24px_60px_-24px_rgba(0,212,255,0.3)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="flex items-center gap-3">
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[0_10px_30px_-12px_rgba(0,212,255,0.6)]">
          <Icon className="size-5" />
        </span>
        <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <ul className="mt-auto space-y-2 text-sm text-muted-foreground">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <span
              aria-hidden
              className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
