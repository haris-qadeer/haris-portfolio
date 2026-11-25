import { ExternalLink, Layers3 } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { hasProjectLink } from "@/lib/utils";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { ProjectVisual } from "@/components/sections/ProjectVisual";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const liveUrl = hasProjectLink(project.links.live) ? project.links.live : null;
  const githubUrl = hasProjectLink(project.links.github)
    ? project.links.github
    : null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-colors duration-300 hover:border-border-strong hover:bg-background-elevated/40">
      <div className="p-4 pb-0 sm:p-5 sm:pb-0">
        <ProjectVisual theme={project.visualTheme} title={project.title} />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          {project.featured ? (
            <span className="shrink-0 rounded-md border border-accent/30 bg-accent-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-strong">
              Featured
            </span>
          ) : null}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          {project.description}
        </p>

        <div className="mt-5 rounded-xl border border-border bg-background-soft/50 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-subtle">
            Contribution
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            {project.contribution}
          </p>
        </div>

        <div className="mt-5">
          <div className="mb-3 flex items-center gap-2">
            <Layers3 size={14} className="text-accent" />
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-subtle">
              Technical Focus
            </p>
          </div>
          <ul className="space-y-2">
            {project.technicalFocus.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-sm leading-relaxed text-foreground-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-subtle">
            Technology Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>

        {(liveUrl || githubUrl) && (
          <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent-strong transition-colors hover:text-foreground"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            ) : null}
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent-strong transition-colors hover:text-foreground"
              >
                <GitHubIcon size={14} />
                GitHub
              </a>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}
