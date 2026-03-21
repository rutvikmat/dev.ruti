import { useRef } from "react";
import useGsap from "../hooks/useGsap";

export default function About() {
  const ref = useRef();

  // 🔥 Optimized GSAP animation
  useGsap((gsap) => {
    gsap.from(".about-item", {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🌌 LIGHT BACKGROUND GLOW (optimized) */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-10 blur-[60px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6 gpu">

          <h2 className="text-4xl gradient-text about-item">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed about-item">
            I’m a Full Stack Developer specializing in Java and Python,
            focused on building scalable, real-world applications. My journey
            started with curiosity about how systems work and evolved into
            developing complete end-to-end platforms.
          </p>

          <p className="text-gray-400 leading-relaxed about-item">
            I’ve worked on production-level systems like a{" "}
            <span className="text-white font-medium">
              Car Rental Platform
            </span>{" "}
            and{" "}
            <span className="text-white font-medium">
              Dairy Management System
            </span>, implementing APIs, authentication, and optimized workflows.
          </p>

          <p className="text-gray-400 leading-relaxed about-item">
            Alongside development, I actively teach coding and create content,
            helping thousands of learners understand real-world programming
            concepts through projects.
          </p>

          {/* 🔥 TAGS */}
          <div className="flex flex-wrap gap-3 about-item text-sm">
            <span className="glass px-3 py-1 rounded-full">
              ⚡ Scalable Systems
            </span>
            <span className="glass px-3 py-1 rounded-full">
              🔐 Auth Systems
            </span>
            <span className="glass px-3 py-1 rounded-full">
              💳 Payments
            </span>
            <span className="glass px-3 py-1 rounded-full">
              📊 ML Apps
            </span>
          </div>

          {/* EDUCATION */}
          <div className="about-item">
            <h3 className="text-lg font-semibold">🎓 Education</h3>
            <p className="text-gray-400 text-sm mt-1">
              MCA – KLE College of Engineering  
              <br />
              BSc Computer Science – Karnataka University
            </p>
          </div>

        </div>

        {/* RIGHT SIDE (TIMELINE) */}
        <div className="space-y-5 gpu">

          {[
            {
              year: "2019–2022",
              title: "BSc Computer Science",
              desc: "Built strong programming and system fundamentals",
            },
            {
              year: "2024–2025",
              title: "MCA",
              desc: "Focused on full-stack and real-world applications",
            },
            {
              year: "2024–2025",
              title: "Full Stack Internships",
              desc: "Worked on Django & Java production systems",
            },
            {
              year: "Present",
              title: "Developer + Educator",
              desc: "Building apps and teaching developers",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="about-item glass-strong p-5 rounded-xl hover:scale-[1.02] transition"
            >
              <h4 className="text-sm text-indigo-400">
                {item.year}
              </h4>
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* BOTTOM SUMMARY */}
      <div className="mt-20 text-center max-w-3xl mx-auto about-item text-gray-400">
        I focus on solving real-world problems by combining strong backend
        systems with modern frontend experiences, while continuously learning
        and sharing knowledge with the developer community.
      </div>
    </section>
  );
}