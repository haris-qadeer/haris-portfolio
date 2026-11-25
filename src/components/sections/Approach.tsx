import {
  Boxes,
  Layers3,
  Puzzle,
  Database,
  Gauge,
  Code2,
} from "lucide-react";
import type { ApproachItem } from "@/types";
import { approachItems } from "@/data/approach";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const iconMap: Record<ApproachItem["icon"], React.ComponentType<{ size?: number; className?: string }>> = {
  architecture: Layers3,
  microfrontends: Boxes,
  components: Puzzle,
  state: Database,
  performance: Gauge,
  maintainability: Code2,
};

export function Approach() {
  return (
    <section id="approach" className="section-shell border-t border-border">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Engineering Approach"
            title="How I think about frontend systems."
            description="A practical lens on architecture, reuse, state, performance, and long-term maintainability."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {approachItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <FadeIn
                key={item.id}
                delay={index * 0.04}
                as="article"
                className="rounded-xl border border-border bg-background-elevated p-6 transition-colors hover:border-border-strong"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background-soft text-accent">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {item.description}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
