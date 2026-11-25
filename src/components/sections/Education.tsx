import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function Education() {
  return (
    <section id="education" className="section-shell border-t border-border bg-background-elevated/40">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Education"
            title="Academic foundation."
          />
        </FadeIn>

        <div className="mt-10 max-w-2xl space-y-4">
          {education.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.05}
              className="flex gap-4 rounded-xl border border-border bg-background p-6"
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-background-soft text-accent">
                <GraduationCap size={18} />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-foreground">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  {item.institution}, {item.location}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
