import { motion } from "framer-motion";

export default function ResumeCTA() {
  return (
    <section className="section relative overflow-hidden text-center">

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[140px] rounded-full left-1/2 -translate-x-1/2 top-0"></div>

      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl gradient-text mb-4"
        >
          Ready to Work Together?
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          I’m actively looking for opportunities where I can build impactful
          products, contribute to scalable systems, and grow as a developer.
        </motion.p>

        {/* KEY HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10 text-sm"
        >
          <span className="glass px-3 py-1 rounded-full">
            🚀 Full Stack Developer
          </span>
          <span className="glass px-3 py-1 rounded-full">
            ⚙️ Backend & APIs
          </span>
          <span className="glass px-3 py-1 rounded-full">
            🤖 AI/ML Projects
          </span>
          <span className="glass px-3 py-1 rounded-full">
            🎥 Content Creator
          </span>
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center flex-wrap gap-4"
        >

          {/* DOWNLOAD RESUME */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            data-cursor="Resume"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            📄 Download Resume
          </a>

          {/* HIRE ME */}
          <a
            href="#contact"
            data-cursor="Hire"
            className="glass px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
          >
            💼 Hire Me
          </a>

        </motion.div>

        {/* QUICK INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-sm text-gray-400 flex justify-center flex-wrap gap-6"
        >
          <span>📍 Bengaluru, India</span>
          <span className="text-green-400">● Available for work</span>
          <span>📧 ruties4354@gmail.com</span>
        </motion.div>

      </div>
    </section>
  );
}