import { useRef } from "react";
import useGsap from "../hooks/useGsap";
import TiltCard from "../components/ui/TiltCard";
import projects from "../data/projects";

export default function Projects() {
  const ref = useRef();

  // 🔥 GSAP reveal
  useGsap((gsap) => {
    gsap.from(".proj-anim", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
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
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[80px] rounded-full bottom-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16 proj-anim">
          Projects & Case Studies
        </h2>

        {/* PROJECT LIST */}
        <div className="space-y-16">

          {projects.map((project, i) => (
            <TiltCard key={i} className="proj-anim">

              <div className="glass-strong p-6 md:p-8 rounded-2xl glow-card">

                <div className="grid md:grid-cols-2 gap-10 items-center">

                  {/* 🔥 LEFT: IMAGE */}
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-xl hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* 🔥 RIGHT: CONTENT */}
                  <div className="space-y-4">

                    <h3 className="text-2xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>

                    {/* 🔥 PROBLEM */}
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Problem
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {project.problem}
                      </p>
                    </div>

                    {/* 🔥 SOLUTION */}
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Solution
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {project.solution}
                      </p>
                    </div>

                    {/* 🔥 METRICS */}
                    <div className="flex gap-4 flex-wrap mt-3">

                      {project.metrics?.map((m, idx) => (
                        <div
                          key={idx}
                          className="glass px-3 py-2 rounded-lg text-center"
                        >
                          <p className="text-sm font-bold text-indigo-400">
                            {m.value}
                          </p>
                          <p className="text-xs text-gray-400">
                            {m.label}
                          </p>
                        </div>
                      ))}

                    </div>

                    {/* 🔥 TECH STACK */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="glass px-2 py-1 text-xs rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* 🔥 CTA */}
                    <div className="flex gap-3 mt-4 flex-wrap">

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-sm hover:scale-105 transition"
                        >
                          Live Demo
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          className="glass px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
                        >
                          GitHub
                        </a>
                      )}

                      {project.case && (
                        <a
                          href={project.case}
                          className="glass px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
                        >
                          Case Study →
                        </a>
                      )}

                    </div>

                  </div>

                </div>

              </div>

            </TiltCard>
          ))}

        </div>

      </div>
    </section>
  );
}