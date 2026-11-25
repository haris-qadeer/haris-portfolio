"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { personalInfo } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-border bg-background/85 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="group flex min-w-0 flex-col leading-tight"
          onClick={closeMenu}
        >
          <span className="truncate font-display text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent-strong sm:text-base">
            {personalInfo.name}
          </span>
          <span className="hidden text-[11px] text-foreground-subtle sm:block">
            {personalInfo.title}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-foreground-muted transition-colors hover:bg-background-soft hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Button href="#contact" size="sm" className="ml-2">
            Let&apos;s Connect
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background-soft text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border bg-background/95 backdrop-blur-xl lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-md px-3 py-3 text-base text-foreground-muted transition-colors hover:bg-background-soft hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Button href="#contact" className="mt-2 w-full" onClick={closeMenu}>
            Let&apos;s Connect
          </Button>
        </Container>
      </div>
    </header>
  );
}
