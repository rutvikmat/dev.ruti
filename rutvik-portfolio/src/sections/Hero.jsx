import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import useGithub from "../hooks/useGithub";
import MagneticButton from "../components/ui/MagneticButton";
import ParticlesBg from "../components/ui/ParticlesBg";

export default function Hero() {
  const ref = useRef();
  const github = useGithub("rutvikmat");

  // Scroll parallax
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -120]);

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen gradient-bg flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 relative overflow-hidden"
    >
      {/* 🌌 PARTICLES */}
      <ParticlesBg />

      {/* 🔮 FLOATING GLASS ORBS */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 left-10 w-40 h-40 rounded-full glass-strong blur-xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full glass blur-xl"
      />

      {/* LEFT SIDE */}
      <motion.div style={{ y }} className="flex-1 z-10 max-w-2xl">

        {/* INTRO */}
        <p className="text-sm text-gray-400 mb-2">
          👋 Welcome to my portfolio
        </p>

        {/* NAME */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="gradient-text">
            Rutvik Mathapati
          </span>
        </h1>

        {/* TYPING ANIMATION */}
        <div className="mt-4 text-xl text-gray-300 font-medium">
          <TypeAnimation
            sequence={[
              "Full Stack Developer (Java & Python) 💻",
              2000,
              "AI/ML Enthusiast 🤖",
              2000,
              "Tech Content Creator 🎥",
              2000,
              "Coding Trainer 🚀",
              2000,
            ]}
            repeat={Infinity}
          />
        </div>

        {/* DESCRIPTION */}
        <p className="mt-5 text-gray-400 leading-relaxed">
          I build scalable web applications using Django, React, and Java,
          and help developers learn coding through real-world projects,
          tutorials, and content.
        </p>

        {/* HIGHLIGHTS */}
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <span className="glass px-3 py-1 rounded-full">
            🚀 Real-world projects
          </span>
          <span className="glass px-3 py-1 rounded-full">
            💳 Payment Integration
          </span>
          <span className="glass px-3 py-1 rounded-full">
            🔐 Auth Systems
          </span>
          <span className="glass px-3 py-1 rounded-full">
            📊 ML Models
          </span>
        </div>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex flex-wrap gap-4">
          <MagneticButton>
            <a href="#projects" data-cursor="View">
              🚀 View Projects
            </a>
          </MagneticButton>

          <MagneticButton>
            <a href="#contact" data-cursor="Hire">
              💼 Hire Me
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="https://github.com/rutvikmat"
              target="_blank"
              data-cursor="GitHub"
            >
              💻 GitHub
            </a>
          </MagneticButton>
        </div>

        {/* STATS */}
        <div className="mt-10 flex flex-wrap gap-8 text-center">

          <div>
            <h3 className="text-2xl font-bold">10K+</h3>
            <p className="text-gray-500 text-sm">Learners</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">5+</h3>
            <p className="text-gray-500 text-sm">Projects</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">2+</h3>
            <p className="text-gray-500 text-sm">Internships</p>
          </div>

          {github && (
            <div>
              <h3 className="text-2xl font-bold">
                {github.public_repos}
              </h3>
              <p className="text-gray-500 text-sm">
                GitHub Repos
              </p>
            </div>
          )}
        </div>

        {/* SOCIAL LINKS */}
        <div className="mt-6 text-sm text-gray-400 flex gap-4 flex-wrap">
          <a href="https://linkedin.com" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/rutvikmat" target="_blank">
            GitHub
          </a>
          <a href="https://instagram.com/dev.ruti" target="_blank">
            Instagram
          </a>
          <a href="https://youtube.com/@dev.ruties" target="_blank">
            YouTube
          </a>
        </div>

      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        whileHover={{ rotateY: 10, rotateX: 10 }}
        className="flex-1 flex justify-center z-10"
      >
        <div className="glass-strong p-3 rounded-2xl shadow-xl">
          <img
            src="src/assets/images/profile.png"
            alt="Rutvik"
            className="w-80 rounded-xl"
          />
        </div>
      </motion.div>

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-500 opacity-20 blur-[160px] rounded-full"></div>
    </section>
  );
}