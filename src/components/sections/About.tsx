import { personalInfo } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const mindset = [
  {
    title: "Engineering mindset",
    body: "Prefer clear boundaries, reusable foundations, and decisions that remain understandable months later.",
  },
  {
    title: "Problem-solving approach",
    body: "Start with the user flow and system constraints, then shape interfaces that solve the real problem—not just the visible one.",
  },
  {
    title: "Architecture & experience",
    body: "Balance maintainable frontend architecture with interfaces that feel polished, responsive, and intentional.",
  },
];

export function About() {
  return (
    <section id="about" className="section-shell border-t border-border">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title="Frontend engineering with lasting structure."
            description="A Senior Software Engineer focused on scalable interfaces, maintainable systems, and thoughtful collaboration."
          />
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <FadeIn delay={0.05} className="space-y-5">
            {personalInfo.summary.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-relaxed text-foreground-muted sm:text-[1.05rem]"
              >
                {paragraph}
              </p>
            ))}
          </FadeIn>

          <div className="space-y-4">
            {mindset.map((item, index) => (
              <FadeIn
                key={item.title}
                delay={0.08 + index * 0.05}
                className="rounded-xl border border-border bg-background-elevated p-5"
              >
                <h3 className="font-display text-base font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {item.body}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
