import { motion } from "framer-motion";
import { useRef } from "react";
import useGsap from "../hooks/useGsap";

export default function HireMe() {
  const ref = useRef();

  // GSAP reveal
  useGsap((gsap) => {
    gsap.from(".hire-card", {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  });

  const services = [
    {
      title: "Full Stack Web Development",
      desc: "Building scalable, production-ready web applications using modern tech.",
      icon: "🚀",
    },
    {
      title: "Backend & API Development",
      desc: "Designing secure REST APIs and robust backend systems.",
      icon: "⚙️",
    },
    {
      title: "Payment Integration",
      desc: "Integrating Razorpay and other payment solutions seamlessly.",
      icon: "💳",
    },
    {
      title: "Authentication Systems",
      desc: "Implementing secure login, JWT auth, and user management.",
      icon: "🔐",
    },
    {
      title: "Performance Optimization",
      desc: "Improving app speed, DB queries, and scalability.",
      icon: "📈",
    },
    {
      title: "UI/UX Development",
      desc: "Designing modern, responsive, and interactive user interfaces.",
      icon: "🎨",
    },
  ];

  return (
    <section
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[140px] rounded-full top-0 right-0"></div>

      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl gradient-text mb-6">
          What I Can Do For You
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          I help businesses and individuals build scalable applications,
          optimize performance, and create modern digital experiences.
        </p>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass-strong p-6 rounded-2xl hire-card"
            >
              {/* ICON */}
              <div className="text-3xl mb-4">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* 💼 AVAILABILITY + CTA */}
        <div className="mt-16">

          <p className="text-green-400 text-sm mb-3">
            ● Currently available for freelance & full-time opportunities
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Let’s build something impactful together 🚀
          </h3>

          <div className="flex justify-center flex-wrap gap-4">

            <a
              href="#contact"
              data-cursor="Hire"
              className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 rounded-xl"
            >
              💼 Hire Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              data-cursor="Resume"
              className="glass px-6 py-3 rounded-xl"
            >
              📄 View Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}