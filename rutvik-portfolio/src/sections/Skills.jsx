import { useRef, useState } from "react";
import useGsap from "../hooks/useGsap";
import TiltCard from "../components/ui/TiltCard";
import skills from "../data/skills";

export default function Skills() {
  const ref = useRef();
  const [active, setActive] = useState("All");

  // 🔥 GSAP animations
  useGsap((gsap) => {
    // Animate skill bars
    gsap.utils.toArray(".skill-bar-fill").forEach((bar) => {
      const width = bar.getAttribute("data-width");

      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
          },
        }
      );
    });

    // Section reveal
    gsap.from(".skill-anim", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, [active]);

  // 🔥 Categories
  const categories = ["All", ...skills.map((g) => g.category)];

  // 🔥 Filter
  const filteredSkills =
    active === "All"
      ? skills
      : skills.filter((g) => g.category === active);

  return (
    <section
      id="skills"
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[80px] rounded-full bottom-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-10 skill-anim">
          Skills & Technologies
        </h2>

        {/* 🔥 FILTER BUTTONS */}
        <div className="flex justify-center flex-wrap gap-3 mb-12 skill-anim">

          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                active === cat
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500"
                  : "glass text-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {filteredSkills.map((group, i) => (
            <TiltCard key={i} className="skill-anim">
              <div className="glass-strong p-6 rounded-2xl glow-card">

                {/* CATEGORY */}
                <h3 className="text-lg font-semibold mb-2">
                  {group.category}
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  {group.description}
                </p>

                {/* SKILLS */}
                <div className="space-y-4">

                  {group.items.map((skill, idx) => {
                    const Icon = skill.icon;

                    return (
                      <div key={idx}>

                        {/* LABEL */}
                        <div className="flex justify-between text-sm mb-1">
                          <span className="flex items-center gap-2">
                            {Icon && (
                              <Icon className="text-lg text-indigo-400" />
                            )}
                            {skill.name}
                          </span>

                          <span className="text-gray-400">
                            {skill.level}%
                          </span>
                        </div>

                        {/* BAR */}
                        <div className="w-full h-2 bg-gray-800 rounded overflow-hidden">
                          <div
                            className="skill-bar-fill h-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                            data-width={`${skill.level}%`}
                          />
                        </div>

                      </div>
                    );
                  })}

                </div>

              </div>
            </TiltCard>
          ))}

        </div>

        {/* SUMMARY */}
        <div className="mt-16 text-center max-w-3xl mx-auto text-gray-400 skill-anim">
          I continuously refine my skills by building real-world systems,
          focusing on performance, scalability, and clean architecture.
        </div>

      </div>
    </section>
  );
}