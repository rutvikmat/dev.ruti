import { motion } from "framer-motion";
import socialLinks from "../../data/social";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-gray-800 overflow-hidden">

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-10 blur-[140px] rounded-full left-1/2 -translate-x-1/2 top-0"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 text-center">

        {/* BRAND */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl font-bold gradient-text"
        >
          Rutvik Mathapati
        </motion.h2>

        <p className="text-gray-400 mt-2">
          Full Stack Developer • AI/ML • Content Creator
        </p>

        {/* NAV LINKS */}
        <div className="flex justify-center gap-6 mt-6 text-sm text-gray-400">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mt-6 text-xl text-indigo-400">
          {socialLinks.map((item, i) => {
            const Icon = item.icon;

            return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                data-cursor={item.name}
                className={`${item.color}`}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="#contact"
            data-cursor="Hire"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-2 rounded-xl"
          >
            Let’s Work Together 🚀
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} Rutvik Mathapati. All rights reserved.
        </p>

      </div>
    </footer>
  );
}