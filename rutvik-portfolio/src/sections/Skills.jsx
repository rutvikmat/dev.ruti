import { useRef } from "react";
import useGsap from "../hooks/useGsap";
import skills from "../data/skills";

export default function Skills() {
  const ref = useRef();

  // 🔥 Optimized GSAP animation (batch-like lightweight)
  useGsap((gsap) => {
    gsap.utils.toArray(".skill-group").forEach((group) => {
      gsap.from(group, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: group,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🌌 LIGHT GLOW */}
      <div className="absolute w-[450px] h-[450px] bg-indigo-500 opacity-10 blur-[60px] rounded-full bottom-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl gradient-text text-center mb-16">
          Skills & Technologies
        </h2>

        {/* GROUPS */}
        <div className="grid md:grid-cols-2 gap-10">

          {skills.map((group, i) => (
            <div
              key={i}
              className="skill-group glass-strong p-6 rounded-2xl gpu"
            >
              {/* CATEGORY */}
              <h3 className="text-xl font-semibold mb-2">
                {group.category}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm mb-6">
                {group.description}
              </p>

              {/* SKILLS LIST */}
              <div className="space-y-4">

                {group.items.map((skill, idx) => (
                  <div key={idx}>

                    {/* LABEL */}
                    <div className="flex justify-between text-sm mb-1">
                      <span className="flex items-center gap-2">
                        <span>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="w-full h-2 bg-gray-800 rounded overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}