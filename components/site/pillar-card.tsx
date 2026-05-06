import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type PillarCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  className?: string;
};

export function PillarCard({
  icon: Icon,
  title,
  description,
  index,
  className,
}: PillarCardProps) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-card/60 p-6 transition-colors hover:border-accent/40",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex size-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
          <Icon className="size-5" />
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
