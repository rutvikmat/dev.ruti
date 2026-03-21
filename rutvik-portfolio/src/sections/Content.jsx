import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import useGsap from "../hooks/useGsap";

export default function Content() {
  const ref = useRef();

  // GSAP reveal
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

  const content = [
    {
      title: "📱 Instagram Reels",
      desc: "Short-form coding content helping beginners learn faster.",
      stats: "Growing developer audience",
      link: "https://www.instagram.com/dev.ruti/",
      icon: <FaInstagram />,
    },
    {
      title: "🎥 YouTube Channel",
      desc: "In-depth tutorials, project builds & coding series.",
      stats: "Educational tech videos",
      link: "https://www.youtube.com/@dev.ruties",
      icon: <FaYoutube />,
    },
    {
      title: "💼 LinkedIn Presence",
      desc: "Sharing insights, projects & professional updates.",
      stats: "Professional network growth",
      link: "https://www.linkedin.com/in/rutvik-mathapati-3a5577208/",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <section ref={ref} className="section relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[140px] rounded-full bottom-0 right-0"></div>

      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl gradient-text mb-6">
          Content & Community
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Beyond development, I actively share knowledge and help developers grow
          through educational content, tutorials, and real-world coding insights.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {content.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass-strong p-6 rounded-2xl content-card flex flex-col justify-between"
            >
              {/* ICON */}
              <div className="text-3xl mb-4 text-indigo-400">
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
                className="mt-4 inline-block text-sm text-cyan-400 hover:underline"
              >
                🔗 Visit Platform
              </a>
            </motion.div>
          ))}

        </div>

        {/* IMPACT METRICS */}
        <div className="mt-16 flex flex-wrap justify-center gap-10">

          <div className="text-center">
            <h3 className="text-2xl font-bold">1K+</h3>
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

        {/* CTA */}
        <div className="mt-12">
          <a
            href="https://www.instagram.com/dev.ruti/"
            target="_blank"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 rounded-xl"
          >
            Follow My Journey 🚀
          </a>
        </div>

      </div>
    </section>
  );
}