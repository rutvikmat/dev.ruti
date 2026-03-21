import { motion } from "framer-motion";
import { useRef } from "react";
import useGsap from "../../hooks/useGsap";

export default function ProjectSection({
  title,
  content,
  color = "text-white",
}) {
  const ref = useRef();

  // GSAP reveal
  useGsap((gsap) => {
    gsap.from(ref.current, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, []);

  if (!content) return null;

  return (
    <section ref={ref} className="mt-16">

      {/* TITLE */}
      <h2 className={`text-2xl font-semibold ${color}`}>
        {title}
      </h2>

      {/* CONTENT */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-gray-400 mt-3 leading-relaxed max-w-3xl"
      >
        {content}
      </motion.p>

    </section>
  );
}