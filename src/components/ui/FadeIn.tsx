"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "article" | "li" | "section";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 18,
  as = "div",
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  const motionProps = {
    className: cn(className),
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" as const },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay },
  };

  switch (as) {
    case "article":
      return <motion.article {...motionProps}>{children}</motion.article>;
    case "li":
      return <motion.li {...motionProps}>{children}</motion.li>;
    case "section":
      return <motion.section {...motionProps}>{children}</motion.section>;
    default:
      return <motion.div {...motionProps}>{children}</motion.div>;
  }
}
