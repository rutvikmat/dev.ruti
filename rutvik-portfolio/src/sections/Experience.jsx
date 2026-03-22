import { useRef } from "react";
import useGsap from "../hooks/useGsap";
import TiltCard from "../components/ui/TiltCard";
import { FaCode, FaChartLine, FaUsers } from "react-icons/fa";

export default function Experience() {
  const ref = useRef();

  // 🔥 GSAP reveal
  useGsap((gsap) => {
    gsap.from(".exp-anim", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, []);

  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Industry Internship",
      duration: "2024 – 2025",
      icon: <FaCode className="text-indigo-400" />,
      points: [
        "Built scalable Django-based applications",
        "Implemented secure authentication & API systems",
        "Integrated payment gateway (Razorpay)",
        "Optimized backend performance & queries",
      ],
      achievements: [
        "Improved API response time by ~40%",
        "Handled end-to-end feature development independently",
      ],
      metrics: [
        { label: "Projects", value: "3+" },
        { label: "APIs Built", value: "15+" },
        { label: "Performance Boost", value: "40%" },
      ],
      tech: ["Django", "Java", "MySQL", "REST API"],
    },

    {
      role: "Project Developer",
      company: "Personal & Academic",
      duration: "2023 – Present",
      icon: <FaChartLine className="text-cyan-400" />,
      points: [
        "Developed Car Rental system with booking & billing",
        "Built SYNCHER ML-based prediction system",
        "Created AI Nail Disease Classifier with Grad-CAM",
        "Designed scalable backend architectures",
      ],
      achievements: [
        "Built multiple production-ready systems",
        "Applied ML in real-world applications",
      ],
      metrics: [
        { label: "Projects", value: "5+" },
        { label: "ML Models", value: "2+" },
        { label: "Users Impacted", value: "1000+" },
      ],
      tech: ["Python", "Flask", "React", "Machine Learning"],
    },

    {
      role: "Tech Content Creator",
      company: "Instagram & YouTube",
      duration: "2023 – Present",
      icon: <FaUsers className="text-pink-400" />,
      points: [
        "Created coding tutorials & real-world project content",
        "Explained system design & development workflows",
        "Built strong developer community",
      ],
      achievements: [
        "Reached 10K+ learners",
        "Built strong personal brand in tech",
      ],
      metrics: [
        { label: "Audience", value: "10K+" },
        { label: "Content", value: "100+" },
        { label: "Engagement", value: "High" },
      ],
      tech: ["Content", "Teaching", "Branding"],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[80px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16 exp-anim">
          Experience
        </h2>

        {/* TIMELINE */}
        <div className="relative border-l border-gray-800 pl-6 space-y-14">

          {experiences.map((exp, i) => (
            <div key={i} className="relative exp-anim">

              {/* DOT */}
              <div className="absolute -left-[10px] top-3 w-4 h-4 bg-indigo-500 rounded-full shadow-lg"></div>

              <TiltCard>
                <div className="glass-strong p-6 rounded-2xl glow-card">

                  {/* HEADER */}
                  <div className="flex justify-between flex-wrap gap-3">

                    <div className="flex items-center gap-3">
                      <span className="text-xl">{exp.icon}</span>

                      <div>
                        <h3 className="text-lg font-semibold">
                          {exp.role}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <span className="text-sm text-indigo-400">
                      {exp.duration}
                    </span>

                  </div>

                  {/* 🔥 METRICS */}
                  <div className="grid grid-cols-3 gap-3 mt-5">

                    {exp.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="glass p-3 rounded-lg text-center"
                      >
                        <p className="text-sm font-bold text-indigo-400">
                          {m.value}
                        </p>
                        <p className="text-xs text-gray-400">
                          {m.label}
                        </p>
                      </div>
                    ))}

                  </div>

                  {/* POINTS */}
                  <ul className="mt-5 space-y-2 text-gray-400 text-sm">
                    {exp.points.map((p, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-indigo-400">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  {/* 🔥 ACHIEVEMENTS */}
                  <div className="mt-5">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Key Achievements
                    </h4>

                    <ul className="space-y-1 text-sm text-gray-400">
                      {exp.achievements.map((a, idx) => (
                        <li key={idx}>✔ {a}</li>
                      ))}
                    </ul>
                  </div>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="glass px-2 py-1 rounded text-xs hover:scale-105 transition"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </TiltCard>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}