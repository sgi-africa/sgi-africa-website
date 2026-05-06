import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  href?: string | null;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: { mark: "size-7", text: "text-base" },
  md: { mark: "size-9", text: "text-lg" },
  lg: { mark: "size-12", text: "text-2xl" },
} as const;

export function LogoMark({
  className,
  size = "md",
}: {
  className?: string;
  size?: LogoProps["size"];
}) {
  const { mark } = sizeMap[size ?? "md"];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-[0_8px_24px_-12px_rgba(0,212,255,0.6)]",
        mark,
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-[60%]"
      >
        <path
          d="M5 8.5C5 6.567 6.567 5 8.5 5h7A3.5 3.5 0 0 1 19 8.5v0a3.5 3.5 0 0 1-3.5 3.5H10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M5 19a3.5 3.5 0 0 1 3.5-3.5H15a3.5 3.5 0 0 0 3.5-3.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity=".85"
        />
        <circle cx="6" cy="6" r="1.4" fill="currentColor" />
        <circle cx="18" cy="18" r="1.4" fill="currentColor" />
      </svg>
    </span>
  );
}

export function Logo({
  className,
  showWordmark = true,
  href = "/",
  size = "md",
}: LogoProps) {
  const { text } = sizeMap[size];

  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={size} />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-heading font-semibold tracking-tight text-foreground",
              text
            )}
          >
            SGI
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            Software Group Innovation
          </span>
        </span>
      ) : null}
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      aria-label="Software Group Innovation — Home"
      className="group/logo inline-flex items-center rounded-xl outline-none transition focus-visible:ring-2 focus-visible:ring-ring/60"
    >
      {content}
    </Link>
  );
}
