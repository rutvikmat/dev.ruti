import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-gray-800">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-10 blur-[140px] rounded-full left-1/2 -translate-x-1/2 top-0"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 text-center">

        {/* BRAND */}
        <h2 className="text-2xl font-bold gradient-text">
          Rutvik Mathapati
        </h2>

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
          <a href="https://github.com/rutvikmat" target="_blank">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/dev.ruti" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://youtube.com/@dev.ruties" target="_blank">
            <FaYoutube />
          </a>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="#contact"
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