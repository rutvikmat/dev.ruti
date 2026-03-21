import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

import useGsap from "../hooks/useGsap";
import projects from "../data/projects";

import SectionTitle from "../components/ui/SectionTitle";
import TiltCard from "../components/ui/TiltCard";

export default function Projects() {
  const ref = useRef();

  // GSAP reveal animation
  useGsap((gsap) => {
    gsap.from(".project-card", {
      opacity: 0,
      y: 80,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-500 opacity-10 blur-[150px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <SectionTitle
          title="Projects & Case Studies"
          subtitle="Real-world projects focused on solving practical problems with scalable systems and modern technologies."
        />

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ scale: 1.02 }}
            >
              <TiltCard>
                <div className="glass-strong p-6 rounded-2xl h-full flex flex-col justify-between">

                  {/* IMAGE */}
                  {project.images?.length > 0 && (
                    <div className="overflow-hidden rounded-xl mb-4">
                      <motion.img
                        src={project.images[0]}
                        alt={project.title}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-52 object-cover"
                      />
                    </div>
                  )}

                  {/* TITLE */}
                  <h3 className="text-xl font-bold">
                    {project.title}
                  </h3>

                  {/* TAGLINE */}
                  <p className="text-gray-400 text-sm mt-1">
                    {project.tagline}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 mt-3 text-sm">
                    {project.description}
                  </p>

                  {/* STORY */}
                  <div className="mt-4 space-y-2 text-sm">

                    <p>
                      <span className="text-red-400 font-medium">
                        Problem:
                      </span>{" "}
                      {project.problem}
                    </p>

                    <p>
                      <span className="text-blue-400 font-medium">
                        Solution:
                      </span>{" "}
                      {project.solution}
                    </p>

                    <p>
                      <span className="text-green-400 font-medium">
                        Impact:
                      </span>{" "}
                      {Array.isArray(project.impact)
                        ? project.impact[0]
                        : project.impact}
                    </p>

                  </div>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="glass px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ACTIONS */}
                  <div className="mt-6 flex justify-between items-center">

                    {/* CASE STUDY */}
                    <Link
                      to={`/project/${project.id}`}
                      data-cursor="View"
                      className="text-cyan-400 text-sm hover:underline"
                    >
                      🔍 Case Study
                    </Link>

                    {/* GITHUB */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="Code"
                      className="text-indigo-400 text-sm hover:underline"
                    >
                      💻 Code
                    </a>

                  </div>

                </div>
              </TiltCard>
            </motion.div>
          ))}

        </div>

        {/* 🚀 CTA */}
        <div className="text-center mt-20">

          <p className="text-gray-400 mb-4">
            Explore more projects and contributions on GitHub
          </p>

          <a
            href="https://github.com/rutvikmat"
            target="_blank"
            rel="noreferrer"
            data-cursor="GitHub"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 rounded-xl"
          >
            View All Projects 🚀
          </a>

        </div>

      </div>
    </section>
  );
}