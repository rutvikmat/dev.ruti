import { motion } from "framer-motion";

export default function ProjectHero({ project }) {
  return (
    <section className="mt-6">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-bold gradient-text"
      >
        {project.title}
      </motion.h1>

      {/* TAGLINE */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 mt-4 max-w-2xl"
      >
        {project.tagline}
      </motion.p>

      {/* QUICK HIGHLIGHTS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-3 mt-6 text-sm"
      >
        {project.tech?.slice(0, 4).map((tech, i) => (
          <span
            key={i}
            className="glass px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex gap-4 mt-8 flex-wrap"
      >
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="bg-indigo-500 px-6 py-2 rounded-xl"
          >
            💻 View Code
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500 px-6 py-2 rounded-xl"
          >
            🔗 Live Demo
          </a>
        )}
      </motion.div>

    </section>
  );
}