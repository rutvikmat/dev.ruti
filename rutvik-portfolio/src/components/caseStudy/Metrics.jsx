import { motion } from "framer-motion";
import { useRef } from "react";
import useGsap from "../../hooks/useGsap";

export default function Metrics({ impact = [] }) {
  const ref = useRef();

  // GSAP reveal animation
  useGsap((gsap) => {
    gsap.from(".metric-card", {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, []);

  if (!impact.length) return null;

  // Helper to extract number from string (e.g. "45% improvement")
  const extractNumber = (text) => {
    const match = text.match(/\d+/);
    return match ? parseInt(match[0]) : null;
  };

  return (
    <section ref={ref} className="mt-16">

      {/* TITLE */}
      <h2 className="text-2xl font-semibold text-green-400 mb-8">
        Impact & Results
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {impact.map((item, i) => {
          const isObject = typeof item !== "string";
          const text = isObject ? item.label : item;
          const value = extractNumber(text);

          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass-strong p-6 rounded-2xl text-center metric-card"
            >

              {/* NUMBER ANIMATION */}
              {value !== null && (
                <motion.h3
                  initial={{ count: 0 }}
                  whileInView={{ count: value }}
                  transition={{ duration: 1 }}
                  className="text-3xl font-bold text-white"
                >
                  {Math.round(value)}
                  {text.includes("%") && "%"}
                  {text.includes("+") && "+"}
                </motion.h3>
              )}

              {/* LABEL */}
              <p className="text-gray-400 mt-2 text-sm">
                {text}
              </p>

            </motion.div>
          );
        })}

      </div>

      {/* FOOTER NOTE */}
      <div className="mt-10 text-sm text-gray-500 max-w-2xl">
        These metrics highlight measurable improvements in performance,
        efficiency, and user experience achieved through optimized system
        design and implementation.
      </div>

    </section>
  );
}