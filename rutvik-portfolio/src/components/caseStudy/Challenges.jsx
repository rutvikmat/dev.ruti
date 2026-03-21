import { useRef } from "react";
import useGsap from "../../hooks/useGsap";

export default function Challenges({ challenges = [] }) {
  const ref = useRef();

  useGsap((gsap) => {
    gsap.from(".challenge", {
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

  if (!challenges.length) return null;

  return (
    <section ref={ref} className="mt-16 gpu">

      <h2 className="text-2xl font-semibold text-yellow-400 mb-8">
        Challenges & Solutions
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {challenges.map((item, i) => (
          <div
            key={i}
            className="challenge glass-strong p-6 rounded-2xl"
          >

            <p className="text-red-400 text-sm font-medium">
              ⚠ Challenge
            </p>
            <p className="text-gray-300 text-sm mt-1">
              {typeof item === "string" ? item : item.problem}
            </p>

            {item.solution && (
              <>
                <p className="text-green-400 text-sm font-medium mt-4">
                  ✅ Solution
                </p>
                <p className="text-gray-400 text-sm">
                  {item.solution}
                </p>
              </>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}