import { motion } from "framer-motion";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { useRef } from "react";
import useGsap from "../hooks/useGsap";

export default function Content() {
  const ref = useRef();

  // GSAP reveal animation
  useGsap((gsap) => {
    gsap.from(".content-card", {
      opacity: 0,
      y: 60,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  });

  const platforms = [
    {
      title: "Instagram Reels",
      desc: "Short-form coding content helping beginners learn faster.",
      stats: "Growing developer audience",
      link: "https://www.instagram.com/dev.ruti/",
      icon: <FaInstagram />,
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "YouTube Channel",
      desc: "In-depth tutorials, project builds & coding series.",
      stats: "Educational tech videos",
      link: "https://www.youtube.com/@dev.ruties",
      icon: <FaYoutube />,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "LinkedIn",
      desc: "Sharing insights, projects & professional growth.",
      stats: "Professional network building",
      link: "https://www.linkedin.com/in/rutvik-mathapati-3a5577208/",
      icon: <FaLinkedin />,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[140px] rounded-full bottom-0 right-0"></div>

      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl gradient-text mb-6">
          Content & Community
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Beyond development, I actively share knowledge and help developers grow
          through tutorials, real-world projects, and practical coding insights.
        </p>

        {/* PLATFORM CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {platforms.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass-strong p-6 rounded-2xl content-card flex flex-col justify-between"
            >
              {/* ICON */}
              <div
                className={`text-3xl mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>

              {/* STATS */}
              <p className="text-xs text-gray-500 mt-3">
                {item.stats}
              </p>

              {/* LINK */}
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                data-cursor="Visit"
                className="mt-4 inline-block text-sm text-cyan-400 hover:underline"
              >
                🔗 Visit Platform
              </a>
            </motion.div>
          ))}

        </div>

        {/* 📊 IMPACT METRICS */}
        <div className="mt-16 flex flex-wrap justify-center gap-10">

          <div className="text-center">
            <h3 className="text-2xl font-bold">10K+</h3>
            <p className="text-gray-500 text-sm">Learners Reached</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-gray-500 text-sm">Content Posts</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold">Daily</h3>
            <p className="text-gray-500 text-sm">Content Creation</p>
          </div>

        </div>

        {/* 🎥 OPTIONAL FEATURED CONTENT */}
        <div className="mt-20">

          <h3 className="text-2xl font-semibold mb-6">
            Featured Content
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="glass p-4 rounded-xl"
            >
              <div className="h-48 bg-gray-800 rounded mb-3 flex items-center justify-center text-gray-500">
                YouTube Video Preview
              </div>
              <p className="text-sm text-gray-400">
                Building Full Stack Project 🚀
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="glass p-4 rounded-xl"
            >
              <div className="h-48 bg-gray-800 rounded mb-3 flex items-center justify-center text-gray-500">
                Instagram Reel Preview
              </div>
              <p className="text-sm text-gray-400">
                JavaScript Tips & Tricks ⚡
              </p>
            </motion.div>

          </div>

        </div>

        {/* 🚀 CTA */}
        <div className="mt-16">
          <a
            href="https://www.instagram.com/dev.ruti/"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 rounded-xl"
          >
            Follow My Journey 🚀
          </a>
        </div>

      </div>
    </section>
  );
}