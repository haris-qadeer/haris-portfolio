import { Mail, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { LinkedInIcon } from "@/components/ui/SocialIcons";

export function Contact() {
  const linkedIn = personalInfo.socials.find((item) => item.icon === "linkedin");

  return (
    <section id="contact" className="section-shell border-t border-border">
      <Container>
        <FadeIn className="overflow-hidden rounded-2xl border border-border bg-background-elevated">
          <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(107,140,255,0.14),transparent_45%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <SectionHeading
                  eyebrow="Contact"
                  title="Let's discuss engineering opportunities."
                  description="Open to conversations about frontend architecture, product engineering roles, and collaborative opportunities where scalable UI systems matter."
                />

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={`mailto:${personalInfo.email}`}>
                    <Mail size={16} />
                    Email Me
                  </Button>
                  {linkedIn ? (
                    <Button href={linkedIn.href} variant="secondary">
                      <LinkedInIcon size={16} />
                      LinkedIn
                      <ArrowUpRight size={14} />
                    </Button>
                  ) : null}
                </div>
              </div>

              <div className="space-y-4 rounded-xl border border-border bg-background/70 p-5">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-subtle">
                    Professional Email
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="mt-2 inline-block text-sm text-foreground transition-colors hover:text-accent-strong"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                {linkedIn ? (
                  <div className="border-t border-border pt-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-subtle">
                      LinkedIn
                    </p>
                    <a
                      href={linkedIn.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block break-all text-sm text-foreground transition-colors hover:text-accent-strong"
                    >
                      linkedin.com/in/haris-khan-9458a3288
                    </a>
                  </div>
                ) : null}
                <div className="border-t border-border pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-subtle">
                    Location
                  </p>
                  <p className="mt-2 text-sm text-foreground">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
