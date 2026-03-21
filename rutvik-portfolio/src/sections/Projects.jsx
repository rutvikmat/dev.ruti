import { useRef } from "react";
import { Link } from "react-router-dom";
import useGsap from "../hooks/useGsap";
import projects from "../data/projects";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  const ref = useRef();

  // 🔥 Optimized GSAP (BATCH = HIGH PERFORMANCE)
  useGsap((gsap, ScrollTrigger) => {
    ScrollTrigger.batch(".project-card", {
      onEnter: (batch) =>
        gsap.from(batch, {
          opacity: 0,
          y: 40,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        }),
    });
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🌌 LIGHT GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[60px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl gradient-text text-center mb-16">
          Projects & Case Studies
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-strong p-6 rounded-2xl gpu hover:scale-[1.02] transition"
            >
              {/* IMAGE */}
              {project.images?.length > 0 && (
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-transform duration-300 hover:scale-[1.03]"
                  />
                </div>
              )}

              {/* TITLE */}
              <h3 className="text-xl font-semibold">
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

              {/* PROBLEM / SOLUTION */}
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

              </div>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="glass px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="mt-6 flex justify-between items-center">

                <Link
                  to={`/project/${project.id}`}
                  data-cursor="View"
                  className="text-cyan-400 text-sm hover:underline"
                >
                  🔍 Case Study
                </Link>

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
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-400 mb-4">
            Explore more projects on GitHub
          </p>

          <a
            href="https://github.com/rutvikmat"
            target="_blank"
            rel="noreferrer"
            data-cursor="GitHub"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            View All Projects 🚀
          </a>
        </div>

      </div>
    </section>
  );
}