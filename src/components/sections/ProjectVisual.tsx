import type { ReactElement } from "react";
import type { ProjectVisualTheme } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectVisualProps {
  theme: ProjectVisualTheme;
  title: string;
  className?: string;
}

const themeMeta: Record<
  ProjectVisualTheme,
  { label: string; accent: string }
> = {
  microfrontends: {
    label: "Architecture",
    accent: "from-sky-500/25 via-blue-500/10 to-transparent",
  },
  "ai-platform": {
    label: "Intelligence",
    accent: "from-violet-500/25 via-indigo-500/10 to-transparent",
  },
  teams: {
    label: "Collaboration",
    accent: "from-cyan-500/20 via-teal-500/10 to-transparent",
  },
  "human-capital": {
    label: "People Systems",
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  tracker: {
    label: "Delivery",
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  ordering: {
    label: "Commerce Flow",
    accent: "from-rose-500/20 via-fuchsia-500/10 to-transparent",
  },
};

function MicroFrontendsVisual() {
  return (
    <div className="absolute inset-0 p-5" aria-hidden="true">
      <div className="grid h-full grid-cols-3 gap-2.5">
        <div className="col-span-2 rounded-lg border border-sky-400/25 bg-sky-500/10 p-3">
          <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-sky-200/70">
            Host Shell
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-8 rounded-md border border-sky-300/20 bg-sky-400/15" />
            <div className="h-8 rounded-md border border-sky-300/20 bg-sky-400/10" />
          </div>
        </div>
        <div className="rounded-lg border border-blue-400/25 bg-blue-500/10 p-3">
          <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-blue-200/70">
            MFE
          </div>
          <div className="space-y-1.5">
            <div className="h-2 rounded-full bg-blue-300/30" />
            <div className="h-2 w-3/4 rounded-full bg-blue-300/20" />
            <div className="h-2 w-1/2 rounded-full bg-blue-300/15" />
          </div>
        </div>
        <div className="rounded-lg border border-indigo-400/25 bg-indigo-500/10 p-3">
          <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-indigo-200/70">
            Config
          </div>
          <div className="flex flex-wrap gap-1">
            <span className="rounded border border-indigo-300/30 px-1.5 py-0.5 font-mono text-[8px] text-indigo-100/70">
              flags
            </span>
            <span className="rounded border border-indigo-300/30 px-1.5 py-0.5 font-mono text-[8px] text-indigo-100/70">
              brand
            </span>
          </div>
        </div>
        <div className="col-span-2 rounded-lg border border-cyan-400/20 bg-cyan-500/10 p-3">
          <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-200/70">
            Shared Components · Deep Links
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 flex-1 rounded-full bg-cyan-300/25" />
            <div className="h-2 w-8 rounded-full bg-cyan-300/40" />
            <div className="h-2 flex-1 rounded-full bg-cyan-300/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AiPlatformVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <svg viewBox="0 0 280 160" className="h-full w-full opacity-90">
        <defs>
          <radialGradient id="aiGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(167,139,250,0.35)" />
            <stop offset="100%" stopColor="rgba(167,139,250,0)" />
          </radialGradient>
        </defs>
        <circle cx="140" cy="80" r="48" fill="url(#aiGlow)" />
        {[
          [70, 42],
          [210, 42],
          [50, 100],
          [230, 100],
          [100, 130],
          [180, 130],
          [140, 30],
        ].map(([x, y], i) => (
          <g key={i}>
            <line
              x1="140"
              y1="80"
              x2={x}
              y2={y}
              stroke="rgba(196,181,253,0.35)"
              strokeWidth="1"
            />
            <circle cx={x} cy={y} r="5" fill="rgba(196,181,253,0.55)" />
          </g>
        ))}
        <circle
          cx="140"
          cy="80"
          r="14"
          fill="rgba(139,92,246,0.35)"
          stroke="rgba(196,181,253,0.6)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function TeamsVisual() {
  return (
    <div className="absolute inset-0 p-6" aria-hidden="true">
      <div className="relative h-full">
        {[
          { top: "12%", left: "18%" },
          { top: "12%", left: "70%" },
          { top: "58%", left: "12%" },
          { top: "58%", left: "44%" },
          { top: "58%", left: "76%" },
        ].map((node, index) => (
          <div
            key={index}
            className="absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/35 bg-cyan-400/15 shadow-[0_0_24px_rgba(34,211,238,0.12)]"
            style={{ top: node.top, left: node.left }}
          />
        ))}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M18 12 L44 58 M70 12 L44 58 M18 12 L70 12 M12 58 L44 58 L76 58"
            fill="none"
            stroke="rgba(103,232,249,0.28)"
            strokeWidth="0.6"
          />
        </svg>
      </div>
    </div>
  );
}

function HumanCapitalVisual() {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-3 p-6" aria-hidden="true">
      {[42, 68, 54, 78, 48, 62].map((height, index) => (
        <div
          key={index}
          className="w-7 rounded-t-md border border-emerald-300/25 bg-gradient-to-t from-emerald-500/25 to-emerald-300/5"
          style={{ height: `${height}%` }}
        />
      ))}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-emerald-200/65">
          Workforce UI
        </span>
        <span className="h-1.5 w-16 rounded-full bg-emerald-300/30" />
      </div>
    </div>
  );
}

function TrackerVisual() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-3 p-6" aria-hidden="true">
      {[
        { label: "Planning", width: "88%" },
        { label: "Execution", width: "64%" },
        { label: "Review", width: "46%" },
        { label: "Release", width: "72%" },
      ].map((row) => (
        <div key={row.label} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-amber-100/60">
              {row.label}
            </span>
            <span className="h-1 w-1 rounded-full bg-amber-300/50" />
          </div>
          <div className="h-2.5 overflow-hidden rounded-full border border-amber-300/20 bg-amber-500/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-400/50 to-orange-400/30"
              style={{ width: row.width }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function OrderingVisual() {
  const steps = ["Browse", "Select", "Confirm", "Fulfill"];

  return (
    <div className="absolute inset-0 flex items-center p-5" aria-hidden="true">
      <div className="grid w-full grid-cols-4 gap-2">
        {steps.map((step, index) => (
          <div key={step} className="relative flex flex-col items-center gap-2">
            <div className="flex h-12 w-full items-center justify-center rounded-lg border border-rose-300/25 bg-rose-500/10">
              <span className="font-mono text-[10px] text-rose-100/75">
                0{index + 1}
              </span>
            </div>
            <span className="text-center font-mono text-[8px] uppercase tracking-[0.12em] text-rose-100/55">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span className="absolute top-6 -right-1.5 hidden h-px w-3 bg-rose-300/30 sm:block" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

const visuals: Record<ProjectVisualTheme, () => ReactElement> = {
  microfrontends: MicroFrontendsVisual,
  "ai-platform": AiPlatformVisual,
  teams: TeamsVisual,
  "human-capital": HumanCapitalVisual,
  tracker: TrackerVisual,
  ordering: OrderingVisual,
};

export function ProjectVisual({ theme, title, className }: ProjectVisualProps) {
  const meta = themeMeta[theme];
  const Visual = visuals[theme];

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-xl border border-border bg-background-soft",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br",
          meta.accent,
        )}
      />
      <div className="project-visual-grid absolute inset-0 opacity-70" />
      <div className="noise-overlay absolute inset-0" />

      <div className="relative aspect-[16/9] min-h-[11rem] sm:min-h-[12.5rem]">
        <Visual />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-border/80 bg-background/55 px-4 py-2.5 backdrop-blur-sm">
        <span className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-subtle">
          {meta.label}
        </span>
        <span className="truncate font-display text-xs text-foreground-muted">
          {title}
        </span>
      </div>
    </div>
  );
}
