import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-background-soft/80 px-2.5 py-1 font-mono text-[11px] tracking-wide text-foreground-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
