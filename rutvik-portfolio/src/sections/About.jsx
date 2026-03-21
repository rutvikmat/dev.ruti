import { motion } from "framer-motion";
import { useRef } from "react";
import useGsap from "../hooks/useGsap";

export default function About() {
  const ref = useRef();

  // GSAP reveal animation
  useGsap((gsap) => {
    gsap.from(".about-item", {
      opacity: 0,
      y: 60,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  });

  return (
    <section
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🔮 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[140px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - STORY */}
        <div className="space-y-6">

          <h2 className="text-4xl gradient-text">About Me</h2>

          {/* MAIN STORY */}
          <p className="text-gray-400 leading-relaxed about-item">
            I’m a Full Stack Developer specializing in Java and Python, focused on
            building scalable, real-world applications. My journey started with a
            deep curiosity about how systems work, which gradually evolved into
            developing complete end-to-end web platforms.
          </p>

          <p className="text-gray-400 leading-relaxed about-item">
            During my internships, I worked on production-level applications like a{" "}
            <span className="text-white font-medium">
              Dairy Farm Management System
            </span>{" "}
            and a{" "}
            <span className="text-white font-medium">
              Car Rental Platform
            </span>, where I implemented REST APIs, authentication systems, and
            optimized workflows to significantly improve performance and efficiency.
          </p>

          <p className="text-gray-400 leading-relaxed about-item">
            Alongside development, I actively create content and teach coding,
            helping thousands of learners understand programming concepts through
            real-world projects and practical examples.
          </p>

          {/* 🔥 TECH HIGHLIGHTS */}
          <div className="flex flex-wrap gap-3 about-item text-sm">
            <span className="glass px-3 py-1 rounded-full">
              ⚡ Scalable Architecture
            </span>
            <span className="glass px-3 py-1 rounded-full">
              🔐 Authentication Systems
            </span>
            <span className="glass px-3 py-1 rounded-full">
              💳 Payment Integration
            </span>
            <span className="glass px-3 py-1 rounded-full">
              📊 ML-Based Applications
            </span>
            <span className="glass px-3 py-1 rounded-full">
              🎥 Tech Content Creation
            </span>
          </div>

          {/* 🎓 EDUCATION */}
          <div className="about-item">
            <h3 className="text-lg font-semibold">🎓 Education</h3>
            <p className="text-gray-400 text-sm mt-1">
              MCA - KLE College of Engineering & Technology  
              <br />
              BSc Computer Science - Karnataka University
            </p>
          </div>

        </div>

        {/* RIGHT SIDE - TIMELINE */}
        <div className="space-y-6">

          {[
            {
              year: "2019 - 2022",
              title: "BSc Computer Science",
              desc: "Built strong fundamentals in programming and system design",
            },
            {
              year: "2024 - 2025",
              title: "MCA (Master’s Degree)",
              desc: "Focused on full stack development and real-world applications",
            },
            {
              year: "2024 - 2025",
              title: "Full Stack Internships",
              desc: "Worked on Django & Java production-level applications",
            },
            {
              year: "Present",
              title: "Developer + Educator",
              desc: "Building scalable apps and teaching coding to thousands",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass-strong p-5 rounded-xl about-item"
            >
              <h4 className="text-sm text-indigo-400">{item.year}</h4>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}

        </div>

      </div>

      {/* 🧠 BOTTOM SUMMARY */}
      <div className="mt-20 text-center max-w-3xl mx-auto about-item">
        <p className="text-gray-400">
          I focus on solving real-world problems by combining strong backend
          systems with modern frontend experiences. My goal is to build impactful
          products while continuously learning and sharing knowledge with the
          developer community.
        </p>
      </div>
    </section>
  );
}