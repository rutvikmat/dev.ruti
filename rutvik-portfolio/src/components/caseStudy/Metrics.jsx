import { useRef } from "react";
import useGsap from "../../hooks/useGsap";

export default function Metrics({ impact = [] }) {
  const ref = useRef();

  useGsap((gsap) => {
    gsap.from(".metric", {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, []);

  if (!impact.length) return null;

  return (
    <section ref={ref} className="mt-16 gpu">

      <h2 className="text-2xl font-semibold text-green-400 mb-8">
        Impact & Results
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {impact.map((item, i) => (
          <div
            key={i}
            className="metric glass-strong p-6 rounded-2xl text-center hover:scale-105 transition"
          >
            <p className="text-white font-semibold">
              {typeof item === "string" ? item : item.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}