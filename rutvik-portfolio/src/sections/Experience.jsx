import { motion } from "framer-motion";
import { useRef } from "react";
import useGsap from "../hooks/useGsap";

export default function Experience() {
  const ref = useRef();

  // GSAP reveal animation
  useGsap((gsap) => {
    gsap.from(".exp-card", {
      opacity: 0,
      y: 60,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  });

  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Internship Experience",
      duration: "2024 – 2025",
      points: [
        "Built full-stack applications using Django & Java",
        "Developed REST APIs and authentication systems",
        "Integrated payment gateway (Razorpay)",
        "Optimized database queries for performance",
      ],
      tech: ["Django", "Java", "MySQL", "REST API"],
    },
    {
      role: "Project Developer",
      company: "Academic + Personal Projects",
      duration: "2023 – Present",
      points: [
        "Developed Car Rental System with booking & billing",
        "Built SYNCHER (ML-based prediction system)",
        "Created AI Nail Disease Classifier with Grad-CAM",
        "Implemented real-world systems with scalable architecture",
      ],
      tech: ["Python", "ML", "Flask", "React"],
    },
    {
      role: "Tech Content Creator",
      company: "Instagram & YouTube",
      duration: "2023 – Present",
      points: [
        "Created coding tutorials and project-based content",
        "Helped 10K+ learners understand development concepts",
        "Shared real-world project implementations",
        "Built strong developer community engagement",
      ],
      tech: ["Content Creation", "Teaching", "Branding"],
    },
  ];

  return (
    <section
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[140px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl gradient-text text-center mb-16">
          Experience
        </h2>

        {/* TIMELINE */}
        <div className="relative border-l border-gray-700 pl-6 space-y-12">

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="exp-card relative"
            >
              {/* DOT */}
              <div className="absolute -left-[11px] top-2 w-4 h-4 bg-indigo-500 rounded-full"></div>

              {/* CARD */}
              <div className="glass-strong p-6 rounded-2xl">

                {/* HEADER */}
                <div className="flex justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {exp.role}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {exp.company}
                    </p>
                  </div>

                  <span className="text-sm text-indigo-400">
                    {exp.duration}
                  </span>
                </div>

                {/* POINTS */}
                <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                  {exp.points.map((p, idx) => (
                    <li key={idx}>✔ {p}</li>
                  ))}
                </ul>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="glass px-2 py-1 rounded text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}