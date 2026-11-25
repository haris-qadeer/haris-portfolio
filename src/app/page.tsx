import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Approach } from "@/components/sections/Approach";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Approach />
      <Education />
      <Contact />
    </main>
  );
}
