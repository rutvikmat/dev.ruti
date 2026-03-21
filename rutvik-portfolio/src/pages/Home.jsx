import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Content from "../sections/Content";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Content />
      <Contact />
      <Footer />
    </>
  );
}