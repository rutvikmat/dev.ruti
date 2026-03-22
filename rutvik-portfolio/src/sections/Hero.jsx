import { useRef } from "react";
import useGsap from "../hooks/useGsap";
import useGithub from "../hooks/useGithub";
import socialLinks from "../data/social";
import TechStrip from "../components/ui/TechStrip";

export default function Hero() {
  const ref = useRef();
  const { data } = useGithub("rutvikmat");

  // 🔥 Smooth GSAP reveal
  useGsap((gsap) => {
    gsap.from(".hero-item", {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1,
    });
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen gradient-bg flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 relative overflow-hidden"
    >
      {/* 🌌 SOFT BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-10 blur-[60px] rounded-full top-20 left-1/2 -translate-x-1/2"></div>

      {/* LEFT CONTENT */}
      <div className="flex-1 max-w-2xl z-10 gpu">

        <p className="text-sm text-gray-400 hero-item">
          👋 Hey, I'm
        </p>

        <h1 className="text-5xl md:text-6xl font-bold hero-item">
          Rutvik{" "}
          <span className="gradient-text">
            Mathapati
          </span>
        </h1>

        <h2 className="text-xl text-gray-300 mt-3 hero-item">
          Full Stack Developer • AI/ML • Educator
        </h2>

        <p className="mt-5 text-gray-400 hero-item leading-relaxed">
          I build scalable applications using Django, React, and Java —
          and help developers learn through real-world projects and
          practical coding content.
        </p>

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

        </div>

        {/* SOCIAL */}
        <div className="mt-8 flex gap-5 text-xl text-indigo-400 hero-item">
          {socialLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                data-cursor={item.name}
                className="hover:scale-110 transition"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* STATS */}
        <div className="mt-10 flex gap-8 hero-item text-center">

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

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center relative z-10 gpu">

        {/* 🌈 GRADIENT DEPTH */}
        <div className="absolute w-[320px] h-[320px] bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-20 blur-[80px] rounded-full"></div>

        {/* PROFILE */}
        <div className="glass-strong p-3 rounded-2xl hover:scale-[1.02] transition">

          <img
            src="/profile.png"
            alt="Rutvik Mathapati"
            className="w-80 rounded-xl"
          />

        </div>

      </div>

      {/* 🔥 TECH STACK STRIP */}
      <div className="absolute bottom-6 left-0 w-full px-6">
        <TechStrip />
      </div>

    </section>
  );
}