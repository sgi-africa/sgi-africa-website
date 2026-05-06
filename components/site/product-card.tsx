import type { LucideIcon } from "lucide-react";
import { ArrowUpRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  category: string;
  icon?: LucideIcon;
  className?: string;
};

export function ProductCard({
  name,
  tagline,
  description,
  href,
  category,
  icon: Icon,
  className,
}: ProductCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/70 transition-all duration-300",
        "hover:border-accent/40 hover:shadow-[0_24px_60px_-24px_rgba(0,212,255,0.3)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.22),transparent_70%)] blur-3xl opacity-80"
      />

      <div className="relative flex flex-1 flex-col gap-5 p-7 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className="border-[#16a34a]/40 bg-[#16a34a]/10 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#34d399]"
          >
            In market
          </Badge>
          <Badge
            variant="secondary"
            className="text-[11px] font-medium uppercase tracking-[0.14em]"
          >
            {category}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            {Icon ? (
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-[0_10px_30px_-12px_rgba(0,212,255,0.55)]">
                <Icon className="size-5" />
              </span>
            ) : null}
            <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {name}
            </h3>
          </div>
          <p className="text-sm font-medium text-accent">{tagline}</p>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-auto pt-2">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 w-full border-border/70 bg-background/50 font-semibold sm:w-auto"
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Visit product site
              <ArrowUpRightIcon className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
