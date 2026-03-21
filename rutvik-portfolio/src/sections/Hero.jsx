import { useRef } from "react";
import useGsap from "../hooks/useGsap";
import useGithub from "../hooks/useGithub";

export default function Hero() {
  const ref = useRef();
  const { data } = useGithub("rutvikmat");

  // 🔥 Optimized GSAP animation (fast + smooth)
  useGsap((gsap) => {
    gsap.from(".hero-item", {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.12,
    });
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen gradient-bg flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 relative overflow-hidden"
    >
      {/* 🌌 LIGHT GLOW (optimized) */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-10 blur-[60px] rounded-full top-20 left-1/2 -translate-x-1/2"></div>

      {/* LEFT CONTENT */}
      <div className="flex-1 max-w-2xl z-10 gpu">

        {/* INTRO */}
        <p className="text-sm text-gray-400 hero-item">
          👋 Welcome to my portfolio
        </p>

        {/* NAME */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight hero-item">
          Hi, I'm{" "}
          <span className="gradient-text">
            Rutvik Mathapati
          </span>
        </h1>

        {/* ROLE */}
        <h2 className="text-xl text-gray-300 mt-4 hero-item">
          Full Stack Developer • AI/ML Enthusiast • Educator
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 text-gray-400 leading-relaxed hero-item">
          I build scalable web applications using Django, React, and Java,
          and help developers learn coding through real-world projects
          and content.
        </p>

        {/* HIGHLIGHTS */}
        <div className="mt-6 flex flex-wrap gap-3 text-sm hero-item">
          <span className="glass px-3 py-1 rounded-full">
            🚀 Real Projects
          </span>
          <span className="glass px-3 py-1 rounded-full">
            💳 Payment Systems
          </span>
          <span className="glass px-3 py-1 rounded-full">
            🔐 Authentication
          </span>
          <span className="glass px-3 py-1 rounded-full">
            📊 ML Apps
          </span>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-4 hero-item">

          <a
            href="#projects"
            data-cursor="View"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            🚀 View Projects
          </a>

          <a
            href="#contact"
            data-cursor="Hire"
            className="glass px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            💼 Hire Me
          </a>

          <a
            href="https://github.com/rutvikmat"
            target="_blank"
            rel="noreferrer"
            data-cursor="GitHub"
            className="glass px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            💻 GitHub
          </a>

        </div>

        {/* STATS */}
        <div className="mt-10 flex gap-8 text-center hero-item">

          <div>
            <h3 className="text-2xl font-bold">10K+</h3>
            <p className="text-gray-500 text-sm">Learners</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">5+</h3>
            <p className="text-gray-500 text-sm">Projects</p>
          </div>

          {data && (
            <div>
              <h3 className="text-2xl font-bold">
                {data.public_repos}
              </h3>
              <p className="text-gray-500 text-sm">
                GitHub Repos
              </p>
            </div>
          )}

        </div>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex-1 flex justify-center z-10 gpu">

        <div className="glass-strong p-3 rounded-2xl hover:scale-[1.02] transition">

          <img
            src="src/assets/images/profile.png"  // 🔥 use optimized image
            alt="Rutvik"
            className="w-80 rounded-xl"
          />

        </div>

      </div>

    </section>
  );
}