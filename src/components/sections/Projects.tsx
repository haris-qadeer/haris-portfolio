import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/sections/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="section-shell border-t border-border bg-background-elevated/40">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected work across product and platform experiences."
            description="Public-facing summaries of company and product work. Visuals are architectural abstractions—no confidential screenshots, assets, or private URLs."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.04}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
