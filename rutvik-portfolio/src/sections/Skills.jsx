import { motion } from "framer-motion";
import { useRef } from "react";
import useGsap from "../hooks/useGsap";

export default function Skills() {
  const ref = useRef();

  // GSAP reveal animation
  useGsap((gsap) => {
    gsap.from(".skill-card", {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  });

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: 85 },
        { name: "HTML / CSS", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "JavaScript", level: 85 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Django", level: 90 },
        { name: "Flask", level: 80 },
        { name: "Java (Spring Basics)", level: 85 },
        { name: "REST APIs", level: 88 },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 75 },
      ],
    },
    {
      category: "Tools & DevOps",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 95 },
      ],
    },
    {
      category: "AI / ML",
      items: [
        { name: "Machine Learning", level: 75 },
        { name: "Data Analysis", level: 70 },
        { name: "TensorFlow Basics", level: 65 },
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[140px] rounded-full top-0 right-0"></div>

      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl gradient-text mb-6">
          Skills & Expertise
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          I specialize in building scalable full-stack applications, designing
          robust backend systems, and creating modern user experiences.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((group, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="glass-strong p-6 rounded-2xl skill-card text-left"
            >
              {/* CATEGORY */}
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">
                {group.category}
              </h3>

              {/* SKILLS */}
              <div className="space-y-4">

                {group.items.map((skill, idx) => (
                  <div key={idx}>

                    {/* NAME + LEVEL */}
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                      />
                    </div>

                  </div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-16 max-w-2xl mx-auto text-gray-400">
          <p>
            My focus is on building scalable backend systems, designing clean
            APIs, and creating responsive frontends that deliver seamless user
            experiences. I continuously explore new technologies to improve
            performance and scalability.
          </p>
        </div>

      </div>
    </section>
  );
}