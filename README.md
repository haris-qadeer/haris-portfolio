# Haris Qadeer Khan — Portfolio

Premium personal portfolio for Haris Qadeer Khan, Senior Software Engineer.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Lucide React**, and **Framer Motion**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Editing Content

All personal content lives in centralized data files:

- `src/data/personal.ts` — name, title, summary, email, LinkedIn
- `src/data/skills.ts` — categorized technical skills
- `src/data/experience.ts` — professional experience
- `src/data/projects.ts` — project cards, optional images and links
- `src/data/approach.ts` — engineering approach topics
- `src/data/education.ts` — education
- `src/data/navigation.ts` — navbar links

### Project cards and links

In `src/data/projects.ts`:

1. Edit `description`, `contribution`, `technicalFocus`, `technologies`, and `visualTheme`.
2. Cards use CSS abstract visuals — no screenshots required.
3. Set `links.live` / `links.github` only when real public URLs exist.
4. Links stay hidden until those fields are provided.
