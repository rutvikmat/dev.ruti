import { useRef } from "react";
import useGsap from "../hooks/useGsap";

export default function HireMe() {
  const ref = useRef();

  // 🔥 Optimized GSAP animation
  useGsap((gsap) => {
    gsap.from(".hire-item", {
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
      <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-10 blur-[60px] rounded-full bottom-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto gpu">

        {/* TITLE */}
        <h2 className="text-4xl gradient-text mb-6 hire-item">
          Let’s Build Something Great Together 🚀
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 mb-10 hire-item">
          I’m available for internships, freelance projects, and full-time
          opportunities. I specialize in building scalable systems and
          real-world applications with clean architecture.
        </p>

        {/* VALUE POINTS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {[
            "⚡ Scalable Web Applications",
            "🔐 Secure Authentication Systems",
            "💳 Payment Integration",
          ].map((item, i) => (
            <div
              key={i}
              className="hire-item glass p-4 rounded-xl text-sm hover:scale-[1.03] transition"
            >
              {item}
            </div>
          ))}

        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 hire-item">

          <a
            href="#contact"
            data-cursor="Hire"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            💼 Hire Me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            data-cursor="Resume"
            className="glass px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            📄 View Resume
          </a>

        </div>

        {/* AVAILABILITY */}
        <p className="mt-6 text-green-400 text-sm hire-item">
          ● Available for opportunities
        </p>

      </div>
    </section>
  );
}