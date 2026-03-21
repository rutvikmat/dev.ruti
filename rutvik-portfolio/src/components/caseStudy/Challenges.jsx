import { motion } from "framer-motion";
import { useRef } from "react";
import useGsap from "../../hooks/useGsap";

export default function Challenges({ challenges = [] }) {
  const ref = useRef();

  // GSAP reveal animation
  useGsap((gsap) => {
    gsap.from(".challenge-card", {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, []);

  if (!challenges.length) return null;

  return (
    <section ref={ref} className="mt-16">

      {/* TITLE */}
      <h2 className="text-2xl font-semibold text-yellow-400 mb-8">
        Challenges & Solutions
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {challenges.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="glass-strong p-6 rounded-2xl challenge-card"
          >

            {/* CHALLENGE */}
            <div>
              <h3 className="text-red-400 font-semibold text-sm mb-2">
                ⚠ Challenge
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {typeof item === "string" ? item : item.problem}
              </p>
            </div>

            {/* SOLUTION (OPTIONAL SUPPORT) */}
            {typeof item !== "string" && item.solution && (
              <div className="mt-4">
                <h3 className="text-green-400 font-semibold text-sm mb-2">
                  ✅ Solution
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.solution}
                </p>
              </div>
            )}

          </motion.div>
        ))}

      </div>

      {/* FOOTER NOTE */}
      <div className="mt-10 text-sm text-gray-500 max-w-2xl">
        These challenges highlight real-world problem-solving approaches,
        including system design decisions, optimization techniques, and
        implementation trade-offs.
      </div>

    </section>
  );
}