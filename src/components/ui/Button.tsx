import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "sm";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-[#07090d] hover:bg-accent-strong shadow-[0_0_0_1px_rgba(107,140,255,0.35)]",
  secondary:
    "border border-border-strong bg-background-soft/70 text-foreground hover:border-accent/50 hover:bg-accent-soft/40",
  ghost:
    "text-foreground-muted hover:text-foreground hover:bg-background-soft/80",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  sm: "px-3.5 py-2 text-xs",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...(isExternal && href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...props}
    >
      {children}
    </a>
  );
}
