import { useRef } from "react";
import useGsap from "../../hooks/useGsap";

export default function ProjectHero({ project }) {
  const ref = useRef();

  useGsap((gsap) => {
    gsap.from(".hero-item", {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, []);

  return (
    <section ref={ref} className="mt-6 gpu">

      <h1 className="hero-item text-5xl font-bold gradient-text">
        {project.title}
      </h1>

      <p className="hero-item text-gray-400 mt-4 max-w-2xl">
        {project.tagline}
      </p>

      <div className="hero-item flex flex-wrap gap-3 mt-6 text-sm">
        {project.tech?.slice(0, 4).map((tech, i) => (
          <span key={i} className="glass px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="hero-item flex gap-4 mt-8 flex-wrap">

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="bg-indigo-500 px-6 py-2 rounded-xl hover:scale-105 transition"
          >
            💻 Code
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500 px-6 py-2 rounded-xl hover:scale-105 transition"
          >
            🔗 Live
          </a>
        )}

      </div>
    </section>
  );
}