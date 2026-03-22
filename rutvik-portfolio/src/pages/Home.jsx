import { lazy, Suspense } from "react";

// 🔥 Lazy load all sections
const Hero = lazy(() => import("../sections/Hero"));
const About = lazy(() => import("../sections/About"));
const Skills = lazy(() => import("../sections/Skills"));
const Projects = lazy(() => import("../sections/Projects"));
const Experience = lazy(() => import("../sections/Experience"));
const HireMe = lazy(() => import("../sections/HireMe"));
const ResumeCTA = lazy(() => import("../sections/ResumeCTA"));
const Contact = lazy(() => import("../sections/Contact"));
const Content = lazy(() => import("../sections/Content"));

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Content />
      <HireMe />
      <ResumeCTA />
      <Contact />
    </Suspense>
  );
}