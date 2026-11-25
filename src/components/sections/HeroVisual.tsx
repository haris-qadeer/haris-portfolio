"use client";

import { motion, useReducedMotion } from "framer-motion";

const panels = [
  { title: "Shell", subtitle: "App Host", x: "8%", y: "14%", w: "42%", h: "28%" },
  { title: "Catalog MFE", subtitle: "Feature Module", x: "54%", y: "10%", w: "38%", h: "34%" },
  { title: "Shared UI", subtitle: "Component Layer", x: "18%", y: "48%", w: "36%", h: "30%" },
  { title: "Config / Flags", subtitle: "Runtime Control", x: "58%", y: "52%", w: "32%", h: "28%" },
];

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-border bg-background-elevated"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(107,140,255,0.16),transparent_55%),radial-gradient(ellipse_at_80%_70%,rgba(94,200,167,0.08),transparent_45%)]" />
      <div className="grid-overlay absolute inset-0" />

      <div className="absolute inset-x-6 top-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-subtle">
            Architecture Map
          </span>
        </div>
        <span className="font-mono text-[10px] text-foreground-subtle">
          frontend · modular · scalable
        </span>
      </div>

      {panels.map((panel, index) => (
        <motion.div
          key={panel.title}
          className="absolute rounded-xl border border-border-strong bg-background-soft/80 p-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm"
          style={{
            left: panel.x,
            top: panel.y,
            width: panel.w,
            height: panel.h,
          }}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.15 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="font-display text-sm font-medium text-foreground">
                {panel.title}
              </p>
              <p className="mt-1 text-xs text-foreground-muted">{panel.subtitle}</p>
            </div>
            <div className="flex gap-1.5">
              <span className="h-1.5 flex-1 rounded-full bg-accent/50" />
              <span className="h-1.5 w-8 rounded-full bg-border-strong" />
            </div>
          </div>
        </motion.div>
      ))}

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M28 28 C 40 36, 48 40, 58 28"
          fill="none"
          stroke="rgba(107,140,255,0.55)"
          strokeWidth="0.35"
        />
        <path
          d="M36 62 C 48 54, 56 58, 68 64"
          fill="none"
          stroke="rgba(148,163,184,0.45)"
          strokeWidth="0.35"
        />
      </svg>
    </div>
  );
}
