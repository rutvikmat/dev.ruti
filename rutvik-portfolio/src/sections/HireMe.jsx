import { useRef } from "react";
import useGsap from "../hooks/useGsap";
import TiltCard from "../components/ui/TiltCard";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function HireMe() {
  const ref = useRef();

  // 🔥 GSAP reveal
  useGsap((gsap) => {
    gsap.from(".hire-anim", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section
      id="hire"
      ref={ref}
      className="section relative overflow-hidden text-center"
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[100px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto space-y-10">

        {/* 🔥 HEADLINE */}
        <div className="space-y-4">

          <h2 className="text-4xl md:text-5xl font-bold gradient-text hire-anim">
            Let’s Build Something Impactful
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto hire-anim">
            I help companies and startups build scalable applications,
            modern user experiences, and production-ready systems.
          </p>

        </div>

        {/* 🔥 VALUE CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Full Stack Systems",
              desc: "End-to-end development from backend to frontend",
            },
            {
              title: "Scalable Architecture",
              desc: "Designed for performance and real-world usage",
            },
            {
              title: "Fast Delivery",
              desc: "Clean, efficient, and production-ready code",
            },
          ].map((item, i) => (
            <TiltCard key={i} className="hire-anim">
              <div className="glass-strong p-5 rounded-xl glow-card">
                <h3 className="text-sm font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs mt-1">
                  {item.desc}
                </p>
              </div>
            </TiltCard>
          ))}

        </div>

        {/* 🔥 METRICS (TRUST BUILDER) */}
        <div className="flex justify-center gap-10 flex-wrap hire-anim">

          <div>
            <h3 className="text-2xl font-bold text-indigo-400">
              5+
            </h3>
            <p className="text-gray-400 text-sm">Projects</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-indigo-400">
              10K+
            </h3>
            <p className="text-gray-400 text-sm">Learners</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-indigo-400">
              2+
            </h3>
            <p className="text-gray-400 text-sm">Years Exp</p>
          </div>

        </div>

        {/* 🔥 CTA BUTTONS */}
        <div className="flex justify-center gap-4 flex-wrap hire-anim">

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:scale-105 transition"
          >
            <FaEnvelope /> Contact Me
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="glass px-6 py-3 rounded-xl hover:scale-105 transition flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="glass px-6 py-3 rounded-xl hover:scale-105 transition flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>

        </div>

        {/* 🔥 FINAL LINE */}
        <p className="text-gray-500 text-sm hire-anim">
          Open to internships, freelance, and full-time opportunities.
        </p>

      </div>
    </section>
  );
}