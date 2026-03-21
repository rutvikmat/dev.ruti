import { useRef } from "react";
import useGsap from "../hooks/useGsap";

export default function ResumeCTA() {
  const ref = useRef();

  // 🔥 Optimized GSAP animation
  useGsap((gsap) => {
    gsap.from(".resume-item", {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section
      ref={ref}
      className="section relative overflow-hidden text-center"
    >
      {/* 🌌 LIGHT GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-10 blur-[60px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-3xl mx-auto gpu">

        {/* TITLE */}
        <h2 className="text-4xl gradient-text mb-6 resume-item">
          Want to Know More About Me?
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 mb-10 resume-item">
          Download my resume to explore my skills, projects, and experience
          in detail. Let’s connect and build something impactful.
        </p>

        {/* CTA BUTTON */}
        <div className="resume-item">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            data-cursor="Resume"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 py-3 rounded-xl hover:opacity-90 transition"
          >
            📄 Download Resume
          </a>

        </div>

        {/* SUBTEXT */}
        <p className="mt-6 text-gray-500 text-sm resume-item">
          Updated regularly with latest projects & experience
        </p>

      </div>
    </section>
  );
}