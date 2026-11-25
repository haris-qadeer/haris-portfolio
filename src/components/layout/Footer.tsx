import { Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
import { CopyrightYear } from "@/components/layout/CopyrightYear";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-elevated">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-foreground">
            {personalInfo.name}
          </p>
          <p className="mt-1 text-sm text-foreground-muted">
            {personalInfo.title}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {personalInfo.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background-soft text-foreground-muted transition-colors hover:border-accent/40 hover:text-accent-strong"
              {...(social.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {social.icon === "linkedin" ? (
                <LinkedInIcon size={16} />
              ) : (
                <Mail size={16} />
              )}
            </a>
          ))}
        </div>

        <p className="text-sm text-foreground-subtle">
          © <CopyrightYear /> {personalInfo.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
