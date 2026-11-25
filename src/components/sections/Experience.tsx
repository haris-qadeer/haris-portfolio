import { experience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

export function Experience() {
  return (
    <section id="experience" className="section-shell border-t border-border">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Professional Experience"
            title="Building production frontend systems."
            description="Current role focused on modern applications, reusable architecture, and collaborative engineering delivery."
          />
        </FadeIn>

        <div className="relative mt-12 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-px before:bg-border sm:before:left-[15px]">
          {experience.map((role, index) => (
            <FadeIn key={role.id} delay={index * 0.05} className="relative pl-10 sm:pl-12">
              <span className="absolute top-2 left-0 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-background">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>

              <article className="rounded-xl border border-border bg-background-elevated p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {role.position}
                    </h3>
                    <p className="mt-1 text-sm text-accent-strong">
                      {role.company} · {role.employmentType}
                    </p>
                    <p className="mt-1 text-sm text-foreground-subtle">
                      {role.location}
                    </p>
                  </div>
                  <p className="font-mono text-xs tracking-wide text-foreground-muted">
                    {role.startDate} – {role.endDate}
                  </p>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-foreground-muted sm:text-base">
                  {role.summary}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {role.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-foreground-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {role.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
