import { useRef } from "react";
import useGsap from "../../hooks/useGsap";

export default function ProjectSection({
  title,
  content,
  color = "text-white",
}) {
  const ref = useRef();

  useGsap((gsap) => {
    gsap.from(ref.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, []);

  if (!content) return null;

  return (
    <section ref={ref} className="mt-16 gpu">

      <h2 className={`text-2xl font-semibold ${color}`}>
        {title}
      </h2>

      <p className="text-gray-400 mt-3 leading-relaxed max-w-3xl">
        {content}
      </p>

    </section>
  );
}