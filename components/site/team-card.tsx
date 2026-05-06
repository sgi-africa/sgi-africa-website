import { cn } from "@/lib/utils";

type TeamCardProps = {
  name: string;
  role: string;
  shortRole: string;
  bio: string;
  className?: string;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function TeamCard({
  name,
  role,
  shortRole,
  bio,
  className,
}: TeamCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-accent/40",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.18),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="flex items-center gap-4">
        <span
          aria-hidden
          className="relative inline-flex size-14 items-center justify-center rounded-2xl bg-brand-gradient font-heading text-lg font-semibold text-white shadow-[0_10px_30px_-12px_rgba(0,212,255,0.55)]"
        >
          {getInitials(name)}
        </span>
        <div className="flex flex-col">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {shortRole}
          </span>
          <span className="font-heading text-base font-semibold tracking-tight text-foreground">
            {name}
          </span>
        </div>
      </div>
      <div className="space-y-1.5">
        <h3 className="font-heading text-sm font-medium text-foreground">
          {role}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{bio}</p>
      </div>
    </article>
  );
}
