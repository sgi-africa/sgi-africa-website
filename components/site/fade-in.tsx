"use client";

import * as React from "react";
import { motion, type HTMLMotionProps, type Transition } from "motion/react";

import { cn } from "@/lib/utils";

type FadeInProps = Omit<HTMLMotionProps<"div">, "ref"> & {
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
};

export function FadeIn({
  className,
  delay = 0,
  duration = 0.6,
  y = 16,
  once = true,
  children,
  ...rest
}: FadeInProps) {
  const transition: Transition = {
    duration,
    delay,
    ease: [0.21, 0.47, 0.32, 0.98],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={transition}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  className?: string;
  children: React.ReactNode;
  delayStep?: number;
  initialDelay?: number;
  itemClassName?: string;
};

export function Stagger({
  className,
  children,
  delayStep = 0.08,
  initialDelay = 0,
  itemClassName,
}: StaggerProps) {
  const items = React.Children.toArray(children);

  return (
    <div className={className}>
      {items.map((child, i) => (
        <FadeIn
          key={i}
          delay={initialDelay + i * delayStep}
          className={itemClassName}
        >
          {child}
        </FadeIn>
      ))}
    </div>
  );
}
