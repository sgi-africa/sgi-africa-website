import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  accent?: "cyan" | "green" | "blue";
};

const accentMap = {
  cyan: "from-accent/20 to-accent/0 text-accent",
  green: "from-[#16a34a]/25 to-[#16a34a]/0 text-[#34d399]",
  blue: "from-[#0a2540]/40 to-[#0a2540]/0 text-[#7dd3fc]",
} as const;

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  accent = "cyan",
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-6 transition-all duration-300",
        "hover:border-accent/40 hover:bg-card hover:shadow-[0_24px_60px_-24px_rgba(0,212,255,0.35)]",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-linear-to-br opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
          accentMap[accent]
        )}
      />
      <div
        className={cn(
          "relative flex size-11 items-center justify-center rounded-xl border border-border/60 bg-background/60",
          accent === "cyan" && "text-accent",
          accent === "green" && "text-[#34d399]",
          accent === "blue" && "text-[#7dd3fc]"
        )}
      >
        <Icon className="size-5" />
      </div>
      <div className="relative space-y-2">
        <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
