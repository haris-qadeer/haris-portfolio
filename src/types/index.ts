export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "email";
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  location: string;
  experienceYears: string;
  email: string;
  headline: string;
  subtitle: string;
  summary: string[];
  socials: SocialLink[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectLinks {
  live?: string;
  github?: string;
}

/** Distinct CSS visual identity for each project card — no screenshots required. */
export type ProjectVisualTheme =
  | "microfrontends"
  | "ai-platform"
  | "teams"
  | "human-capital"
  | "tracker"
  | "ordering";

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Short, factual note on the nature of the contribution. */
  contribution: string;
  /** Architecture / engineering focus areas shown on the card. */
  technicalFocus: string[];
  technologies: string[];
  visualTheme: ProjectVisualTheme;
  links: ProjectLinks;
  featured?: boolean;
}

export interface ApproachItem {
  id: string;
  title: string;
  description: string;
  icon: "architecture" | "microfrontends" | "components" | "state" | "performance" | "maintainability";
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
}
