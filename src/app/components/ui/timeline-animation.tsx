import React, { useEffect, useRef, RefObject } from "react";
import { motion, useInView, Variant } from "motion/react";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  animationNum: number;
  timelineRef: RefObject<HTMLElement>;
  customVariants?: {
    visible: (i: number) => Variant;
    hidden: Variant;
  };
}

export function TimelineContent({
  children,
  as: Component = "div",
  className,
  animationNum,
  timelineRef,
  customVariants,
}: TimelineContentProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.3 });

  const defaultVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      y: 20,
      opacity: 0,
    },
  };

  const variants = customVariants || defaultVariants;

  return (
    <motion.div
      ref={ref as any}
      as={Component as any}
      className={cn(className)}
      custom={animationNum}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}