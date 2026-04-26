import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Blogs } from "@/components/blogs";
import { Certifications } from "@/components/certifications";
import { Freelance } from "@/components/freelance";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Blogs />
      <Freelance />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
