import { cn } from "@/lib/utils";

type GradientBlobProps = {
  className?: string;
  variant?: "cyan" | "blue" | "green";
  size?: "sm" | "md" | "lg" | "xl";
};

const variantMap = {
  cyan: "bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.45),rgba(0,212,255,0)_70%)]",
  blue: "bg-[radial-gradient(circle_at_center,rgba(10,37,64,0.85),rgba(10,37,64,0)_70%)]",
  green:
    "bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.35),rgba(22,163,74,0)_70%)]",
} as const;

const sizeMap = {
  sm: "h-64 w-64",
  md: "h-96 w-96",
  lg: "h-[32rem] w-[32rem]",
  xl: "h-[44rem] w-[44rem]",
} as const;

export function GradientBlob({
  className,
  variant = "cyan",
  size = "lg",
}: GradientBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        variantMap[variant],
        sizeMap[size],
        className
      )}
    />
  );
}
