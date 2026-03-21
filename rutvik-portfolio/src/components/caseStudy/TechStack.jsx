import { useRef } from "react";
import useGsap from "../../hooks/useGsap";

export default function TechStack({ tech = [] }) {
  const ref = useRef();

  useGsap((gsap) => {
    gsap.from(".tech", {
      opacity: 0,
      y: 20,
      duration: 0.4,
      stagger: 0.05,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
      },
    });
  }, []);

  if (!tech.length) return null;

  return (
    <section ref={ref} className="mt-16 gpu">

      <h2 className="text-2xl font-semibold mb-8">
        Tech Stack
      </h2>

      <div className="flex flex-wrap gap-3">

        {tech.map((t, i) => (
          <span
            key={i}
            className="tech glass px-3 py-1 rounded text-sm hover:scale-105 transition"
          >
            {t}
          </span>
        ))}

      </div>

    </section>
  );
}