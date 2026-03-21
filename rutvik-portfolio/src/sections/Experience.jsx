import { useRef } from "react";
import useGsap from "../hooks/useGsap";

export default function Experience() {
  const ref = useRef();

  // 🔥 Optimized GSAP animation
  useGsap((gsap) => {
    gsap.from(".exp-item", {
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

  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Internship Experience",
      duration: "2024 – 2025",
      points: [
        "Built scalable web applications using Django & Java",
        "Developed REST APIs and authentication systems",
        "Integrated Razorpay payment gateway",
        "Optimized database queries for better performance",
      ],
      tech: ["Django", "Java", "MySQL", "REST API"],
    },
    {
      role: "Project Developer",
      company: "Academic & Personal Projects",
      duration: "2023 – Present",
      points: [
        "Developed Car Rental platform with booking & billing",
        "Built SYNCHER (ML-based prediction system)",
        "Created AI Nail Disease Classifier with Grad-CAM",
        "Designed scalable systems with real-world architecture",
      ],
      tech: ["Python", "Flask", "React", "Machine Learning"],
    },
    {
      role: "Tech Content Creator",
      company: "Instagram & YouTube",
      duration: "2023 – Present",
      points: [
        "Created coding tutorials and real-world project content",
        "Helped 10K+ learners understand development concepts",
        "Built strong developer community engagement",
        "Shared practical coding insights and strategies",
      ],
      tech: ["Content Creation", "Teaching", "Branding"],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🌌 LIGHT GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-10 blur-[60px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl gradient-text text-center mb-16 exp-item">
          Experience
        </h2>

        {/* TIMELINE */}
        <div className="relative border-l border-gray-700 pl-6 space-y-12">

          {experiences.map((exp, i) => (
            <div
              key={i}
              className="exp-item relative gpu"
            >
              {/* DOT */}
              <div className="absolute -left-[11px] top-2 w-4 h-4 bg-indigo-500 rounded-full"></div>

              {/* CARD */}
              <div className="glass-strong p-6 rounded-2xl hover:scale-[1.02] transition">

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

                {/* TECH */}
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
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}