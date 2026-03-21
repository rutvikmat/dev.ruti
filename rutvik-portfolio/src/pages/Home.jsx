import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// SECTIONS
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import HireMe from "../sections/HireMe";
import Content from "../sections/Content";
import ResumeCTA from "../sections/ResumeCTA";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <div className="relative">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO (ENTRY POINT) */}
      <Hero />

      {/* ABOUT (WHO YOU ARE) */}
      <About />

      {/* SKILLS (WHAT YOU KNOW) */}
      <Skills />

      {/* EXPERIENCE (WHAT YOU'VE DONE) */}
      <Experience />

      {/* PROJECTS (PROOF OF WORK) */}
      <Projects />

      {/* HIRE ME (WHAT YOU OFFER) */}
      <HireMe />

      {/* CONTENT (PERSONAL BRAND) */}
      <Content />

      {/* RESUME CTA (CONVERSION) */}
      <ResumeCTA />

      {/* CONTACT (FINAL ACTION) */}
      <Contact />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}