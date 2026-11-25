import type { Project } from "@/types";

/**
 * Project content is centralized here for easy editing.
 * - Cards use CSS abstract visuals (no screenshots required).
 * - Set links.live / links.github only when real public URLs exist.
 * - Links are hidden in the UI when left undefined.
 * - Keep descriptions neutral; do not add confidential client details.
 */
export const projects: Project[] = [
  {
    id: "wsi-design-journey",
    title: "WSI Design Journey",
    description:
      "A Shop by Style / Shop by Room experience built as part of a multi-brand, configurable Micro Frontend architecture with deep linking and reusable frontend components.",
    contribution:
      "Frontend engineering on a configurable, multi-brand shopping experience within a Micro Frontend architecture.",
    technicalFocus: [
      "Micro Frontend architecture",
      "Configuration-driven UI",
      "Reusable components",
      "Feature flags",
      "Deep linking",
    ],
    technologies: [
      "Vue.js",
      "Vuex",
      "Vue Router",
      "Micro Frontends",
      "Configuration-driven UI",
      "Deep Linking",
      "Tailwind CSS",
      "BFF - Backend for Frontend",
      "SSR - Server Side Rendering",
      "SSG - Static Site Generation",
      "CSR - Client Side Rendering",
    ],
    visualTheme: "microfrontends",
    links: {},
    featured: true,
  },
  {
    id: "sensiply-ai",
    title: "Sensiply AI",
    description:
      "An AI-powered job platform. Contributed to frontend development as part of the product engineering effort.",
    contribution:
      "Frontend contribution to a product-facing AI-powered job platform.",
    technicalFocus: [
      "Product-facing frontend development",
      "Modern React application structure",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "AI Integrations",
      "JavaScript",
    ],
    visualTheme: "ai-platform",
    links: {},
    featured: true,
  },
  {
    id: "my-teams",
    title: "My Teams",
    description:
      "A frontend application focused on team-oriented workflows. Details can be expanded as project assets and descriptions are finalized.",
    contribution:
      "Frontend application contribution for team-oriented workflows.",
    technicalFocus: [
      "Frontend application contribution",
      "Modern React patterns",
    ],
    technologies: [
      "React.js",
      "React Router",
      "React Hooks",
      "Redux Toolkit",
      "JavaScript",
    ],
    visualTheme: "teams",
    links: {},
  },
  {
    id: "human-capital-care",
    title: "Human Capital Care",
    description:
      "A web application in the human capital domain. Project details remain intentionally concise pending additional public-facing information.",
    contribution:
      "Frontend contribution to a business-facing human capital web experience.",
    technicalFocus: [
      "Frontend application contribution",
      "Business-facing web experience",
    ],
    technologies: ["Vue.js", "Vuex", "Vue Router", "Bootstrap", "JavaScript"],
    visualTheme: "human-capital",
    links: {},
  },
  {
    id: "pmo-tracker",
    title: "PMO Tracker",
    description:
      "A project tracking application supporting PMO-oriented workflows. Additional feature details can be added when they are cleared for public presentation.",
    contribution:
      "Frontend contribution to a tracking-oriented PMO application.",
    technicalFocus: [
      "Frontend application contribution",
      "Tracking-oriented interface work",
    ],
    technologies: [
      "React.js",
      "React Router",
      "React Hooks",
      "Redux Toolkit",
      "Jest",
      "Testing Library",
      "JavaScript",
    ],
    visualTheme: "tracker",
    links: {},
  },
  {
    id: "food-ordering-app",
    title: "Food Ordering App",
    description:
      "A food ordering web application. Description and technology details can be updated as more public project information becomes available.",
    contribution:
      "Frontend contribution to a user-facing food ordering experience.",
    technicalFocus: [
      "Frontend application contribution",
      "User-facing ordering experience",
    ],
    technologies: ["React.js", "JavaScript"],
    visualTheme: "ordering",
    links: {},
  },
];
