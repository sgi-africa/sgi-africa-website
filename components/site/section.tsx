import * as React from "react";

import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div";
  size?: "sm" | "md" | "lg";
  containerClassName?: string;
  fullBleed?: boolean;
};

const sizeMap = {
  sm: "py-14 md:py-20",
  md: "py-20 md:py-28",
  lg: "py-24 md:py-36",
} as const;

export function Section({
  as: Tag = "section",
  className,
  containerClassName,
  size = "md",
  fullBleed = false,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag className={cn("relative", sizeMap[size], className)} {...props}>
      {fullBleed ? (
        children
      ) : (
        <div
          className={cn(
            "relative mx-auto w-full max-w-7xl px-6 lg:px-10",
            containerClassName
          )}
        >
          {children}
        </div>
      )}
    </Tag>
  );
}
