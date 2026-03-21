import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import projects from "../data/projects";

// CASE STUDY COMPONENTS
import ProjectHero from "../components/caseStudy/ProjectHero";
import ProjectGallery from "../components/caseStudy/ProjectGallery";
import ProjectSection from "../components/caseStudy/ProjectSection";
import Metrics from "../components/caseStudy/Metrics";
import TechStack from "../components/caseStudy/TechStack";
import Challenges from "../components/caseStudy/Challenges";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-20 max-w-5xl mx-auto relative">

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-500 opacity-10 blur-[160px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      {/* BACK BUTTON */}
      <Link
        to="/"
        data-cursor="Back"
        className="text-indigo-400 text-sm"
      >
        ← Back to Home
      </Link>

      {/* HERO */}
      <ProjectHero project={project} />

      {/* GALLERY */}
      <ProjectGallery images={project.images} />

      {/* DESCRIPTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12 text-gray-400 max-w-3xl"
      >
        {project.description}
      </motion.div>

      {/* PROBLEM */}
      <ProjectSection
        title="Problem"
        content={project.problem}
        color="text-red-400"
      />

      {/* SOLUTION */}
      <ProjectSection
        title="Solution"
        content={project.solution}
        color="text-blue-400"
      />

      {/* IMPACT */}
      <Metrics impact={project.impact} />

      {/* TECH STACK */}
      <TechStack tech={project.tech} />

      {/* FEATURES */}
      {project.features && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">
            Key Features
          </h2>

          <ul className="grid md:grid-cols-2 gap-3 text-gray-400">
            {project.features.map((f, i) => (
              <li key={i} className="glass px-4 py-2 rounded">
                ✔ {f}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CHALLENGES */}
      <Challenges challenges={project.challenges} />

      {/* FINAL CTA */}
      <div className="mt-20 flex flex-wrap gap-6 justify-center">

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="Code"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 rounded-xl"
          >
            💻 View Code
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            data-cursor="Live"
            className="glass px-6 py-3 rounded-xl"
          >
            🔗 Live Demo
          </a>
        )}

      </div>

      {/* FOOTER NOTE */}
      <div className="mt-16 text-center text-gray-500 text-sm max-w-2xl mx-auto">
        This case study demonstrates real-world problem-solving, system design,
        and implementation strategies used to build scalable applications.
      </div>

    </div>
  );
}