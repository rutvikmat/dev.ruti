import { useRef } from "react";
import useGsap from "../hooks/useGsap";
import Counter from "../components/ui/Counter";
import TiltCard from "../components/ui/TiltCard";

export default function About() {
  const ref = useRef();

  // 🔥 GSAP reveal (smooth + consistent)
  useGsap((gsap) => {
    gsap.from(".about-anim", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, []);

  const cards = [
    {
      title: "Full Stack Development",
      desc: "Building scalable, production-ready applications with clean architecture using Django, React, and Java.",
    },
    {
      title: "Content & Teaching",
      desc: "Helping developers learn faster through real-world projects, practical coding, and structured guidance.",
    },
    {
      title: "Real-World Systems",
      desc: "Developed Car Rental platform, SYNCHER (ML-based system), and AI Nail Disease Classifier.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[80px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* 🔥 LEFT SIDE (STORY) */}
        <div className="space-y-6 gpu">

          <h2 className="text-4xl md:text-5xl font-bold gradient-text about-anim">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed about-anim">
            I’m a Full Stack Developer focused on building scalable,
            production-ready applications using Django, React, and Java.
          </p>

          <p className="text-gray-400 leading-relaxed about-anim">
            I design complete systems — from backend architecture,
            authentication, and APIs to modern frontend experiences.
          </p>

          <p className="text-gray-400 leading-relaxed about-anim">
            Alongside development, I create content and teach developers
            through real-world projects, helping them build practical skills
            and understand system design.
          </p>

          {/* 🔥 TAGS */}
          <div className="flex flex-wrap gap-3 about-anim text-sm mt-4">
            <span className="glass px-3 py-1 rounded-full">
              🚀 Scalable Systems
            </span>
            <span className="glass px-3 py-1 rounded-full">
              🔐 Auth Systems
            </span>
            <span className="glass px-3 py-1 rounded-full">
              💳 Payments
            </span>
            <span className="glass px-3 py-1 rounded-full">
              📊 ML Systems
            </span>
          </div>

        </div>

        {/* 🔥 RIGHT SIDE (PROOF + DEPTH) */}
        <div className="space-y-6 gpu">

          {/* 🔥 METRICS */}
          <div className="grid grid-cols-3 gap-4">

            <TiltCard className="about-anim">
              <div className="glass p-5 rounded-xl text-center glow-card">
                <h3 className="text-2xl font-bold text-indigo-400">
                  <Counter value={5} suffix="+" />
                </h3>
                <p className="text-gray-400 text-xs">Projects</p>
              </div>
            </TiltCard>

            <TiltCard className="about-anim">
              <div className="glass p-5 rounded-xl text-center glow-card">
                <h3 className="text-2xl font-bold text-indigo-400">
                  <Counter value={10} suffix="K+" />
                </h3>
                <p className="text-gray-400 text-xs">Learners</p>
              </div>
            </TiltCard>

            <TiltCard className="about-anim">
              <div className="glass p-5 rounded-xl text-center glow-card">
                <h3 className="text-2xl font-bold text-indigo-400">
                  <Counter value={2} suffix="+" />
                </h3>
                <p className="text-gray-400 text-xs">Years Exp</p>
              </div>
            </TiltCard>

          </div>

          {/* 🔥 EXPERIENCE / VALUE CARDS */}
          {cards.map((item, i) => (
            <TiltCard key={i} className="about-anim">
              <div className="glass-strong p-5 rounded-xl glow-card">
                <h3 className="text-sm font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </TiltCard>
          ))}

        </div>

      </div>

      {/* 🔥 FINAL SUMMARY */}
      <div className="mt-16 text-center max-w-3xl mx-auto about-anim text-gray-400 leading-relaxed">
        I focus on solving real-world problems by combining backend
        engineering with intuitive frontend experiences — while helping
        developers grow through practical learning and real project exposure.
      </div>

    </section>
  );
}