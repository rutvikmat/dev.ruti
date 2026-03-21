import { motion } from "framer-motion";
import { useRef } from "react";
import useGsap from "../../hooks/useGsap";

export default function TechStack({ tech = [] }) {
  const ref = useRef();

  // GSAP reveal animation
  useGsap((gsap) => {
    gsap.from(".tech-item", {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, []);

  if (!tech.length) return null;

  return (
    <section ref={ref} className="mt-16">

      {/* TITLE */}
      <h2 className="text-2xl font-semibold mb-8">
        Tech Stack
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {tech.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="glass-strong p-4 rounded-xl flex items-center justify-center gap-2 text-sm tech-item"
          >
            {/* ICON (OPTIONAL) */}
            <span className="text-lg">
              {getTechIcon(item)}
            </span>

            {/* NAME */}
            <span className="text-gray-300">
              {item}
            </span>
          </motion.div>
        ))}

      </div>

      {/* FOOTER NOTE */}
      <div className="mt-10 text-sm text-gray-500 max-w-2xl">
        This stack was selected based on performance, scalability,
        and development efficiency for real-world applications.
      </div>

    </section>
  );
}

/* 🔥 ICON MAPPER */
function getTechIcon(tech) {
  const map = {
    React: "⚛️",
    "React.js": "⚛️",
    Django: "🐍",
    Flask: "🍶",
    Java: "☕",
    Python: "🐍",
    MySQL: "🗄️",
    SQLite: "📂",
    JavaScript: "🟨",
    HTML: "🌐",
    CSS: "🎨",
    Bootstrap: "🧩",
    Tailwind: "💨",
    "Tailwind CSS": "💨",
    "REST API": "🔗",
    APIs: "🔗",
    Razorpay: "💳",
    "Machine Learning": "🤖",
    TensorFlow: "🧠",
    CNN: "🧠",
    "Grad-CAM": "🔍",
  };

  return map[tech] || "⚙️";
}