import type { ApproachItem } from "@/types";

export const approachItems: ApproachItem[] = [
  {
    id: "frontend-architecture",
    title: "Frontend Architecture",
    description:
      "I structure applications so features remain modular, boundaries stay clear, and the codebase can grow without becoming fragile.",
    icon: "architecture",
  },
  {
    id: "micro-frontends",
    title: "Micro Frontends",
    description:
      "I work with Micro Frontend patterns that allow teams to ship independently while still sharing reusable foundations across brands and products.",
    icon: "microfrontends",
  },
  {
    id: "component-reusability",
    title: "Component Reusability",
    description:
      "I design UI building blocks that are flexible enough to reuse, constrained enough to stay consistent, and clear enough for other engineers to adopt.",
    icon: "components",
  },
  {
    id: "state-management",
    title: "State Management",
    description:
      "I choose state strategies that match the complexity of the product—keeping async flows predictable and shared state easy to reason about.",
    icon: "state",
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "I look for practical performance wins: leaner renders, thoughtful data fetching, and interfaces that feel responsive under real usage.",
    icon: "performance",
  },
  {
    id: "maintainable-code",
    title: "Maintainable Code",
    description:
      "Readable structure, consistent patterns, and thoughtful naming matter as much as features. I write code that teams can extend with confidence.",
    icon: "maintainability",
  },
];
