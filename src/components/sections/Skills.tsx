import { skillCategories } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

export function Skills() {
  return (
    <section id="expertise" className="section-shell border-t border-border bg-background-elevated/40">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Technical Expertise"
            title="A stack shaped by real product work."
            description="Organized by the layers that matter in modern frontend engineering—without fabricated proficiency meters."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <FadeIn
              key={category.id}
              delay={index * 0.04}
              as="article"
              className="flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-colors hover:border-border-strong"
            >
              <h3 className="font-display text-lg font-medium text-foreground">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {category.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
