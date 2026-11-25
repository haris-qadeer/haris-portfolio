import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Modern UI foundations and frameworks for production web applications.",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Vue.js",
      "Next.js (Foundational knowledge)",
      "HTML5",
      "CSS3",
      "SCSS",
    ],
  },
  {
    id: "state",
    title: "State Management",
    description: "Predictable data flow and async patterns across complex client applications.",
    skills: [
      "Redux",
      "Redux Toolkit",
      "Redux Thunk",
      "Redux Saga",
      "Vuex",
      "React Query",
    ],
  },
  {
    id: "ui-styling",
    title: "UI & Styling",
    description: "Design systems, utility-first styling, and responsive interface craft.",
    skills: [
      "Tailwind CSS",
      "Ant Design",
      "Material UI",
      "Bootstrap",
      "Styled Components",
      "Responsive Web Design",
    ],
  },
  {
    id: "architecture",
    title: "Architecture & Engineering",
    description: "Patterns that keep large frontend systems modular, configurable, and scalable.",
    skills: [
      "Micro Frontend Architecture",
      "Reusable Component Architecture",
      "Feature Flags",
      "Configuration-driven UI",
      "REST API Integration",
      "Component Design",
      "Frontend Performance Optimization",
    ],
  },
  {
    id: "testing-tools",
    title: "Testing & Tools",
    description: "Quality practices and everyday engineering tooling for reliable delivery.",
    skills: ["Jest", "React Testing Library", "Git", "NPM", "Yarn"],
  },
];
