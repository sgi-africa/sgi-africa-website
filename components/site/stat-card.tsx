import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string;
  label: string;
  description?: string;
  className?: string;
};

export function StatCard({
  value,
  label,
  description,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-2 rounded-2xl border border-border/60 bg-card/70 p-7 transition-colors hover:border-accent/40",
        className
      )}
    >
      <span className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        <span className="text-brand-gradient">{value}</span>
      </span>
      <span className="text-sm font-medium text-foreground">{label}</span>
      {description ? (
        <span className="text-sm text-muted-foreground">{description}</span>
      ) : null}
    </div>
  );
}
