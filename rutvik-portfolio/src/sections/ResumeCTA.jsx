import { useRef } from "react";
import useGsap from "../hooks/useGsap";
import TiltCard from "../components/ui/TiltCard";
import { FaDownload, FaEye } from "react-icons/fa";

export default function ResumeCTA() {
  const ref = useRef();

  // 🔥 GSAP reveal
  useGsap((gsap) => {
    gsap.from(".resume-anim", {
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
      id="resume"
      ref={ref}
      className="section relative overflow-hidden text-center"
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[100px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto space-y-10">

        {/* 🔥 HEADLINE */}
        <div className="space-y-4">

          <h2 className="text-4xl md:text-5xl font-bold gradient-text resume-anim">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto resume-anim">
            I build scalable applications, design clean architectures,
            and deliver production-ready systems. Here’s a quick snapshot
            of my experience and work.
          </p>

        </div>

        {/* 🔥 HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-5">

          {[
            {
              title: "Full Stack Developer",
              desc: "Django • React • Java",
            },
            {
              title: "ML Projects",
              desc: "Prediction systems & AI apps",
            },
            {
              title: "Content Creator",
              desc: "10K+ learners impacted",
            },
          ].map((item, i) => (
            <TiltCard key={i} className="resume-anim">
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

        {/* 🔥 CTA BUTTONS */}
        <div className="flex justify-center gap-4 flex-wrap resume-anim">

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:scale-105 transition"
          >
            <FaDownload /> Download Resume
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass hover:scale-105 transition"
          >
            <FaEye /> View Resume
          </a>

        </div>

        {/* 🔥 TRUST LINE */}
        <p className="text-gray-500 text-sm resume-anim">
          Open to internships, freelance, and full-time opportunities.
        </p>

      </div>
    </section>
  );
}