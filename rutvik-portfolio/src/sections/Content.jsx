import { useRef } from "react";
import useGsap from "../hooks/useGsap";
import socialLinks from "../data/social";

export default function Content() {
  const ref = useRef();

  // 🔥 Optimized GSAP animation
  useGsap((gsap) => {
    gsap.from(".content-item", {
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

  const platforms = [
    {
      name: "Instagram",
      desc: "Short-form coding content helping developers learn faster.",
      link: "https://www.instagram.com/dev.ruti/",
      color: "text-pink-400",
    },
    {
      name: "YouTube",
      desc: "Full tutorials, project builds & deep dives.",
      link: "https://www.youtube.com/@dev.ruties",
      color: "text-red-400",
    },
    {
      name: "LinkedIn",
      desc: "Professional updates, projects & insights.",
      link: "https://www.linkedin.com/in/rutvik-mathapati-3a5577208/",
      color: "text-blue-400",
    },
  ];

  return (
    <section
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🌌 LIGHT GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-10 blur-[60px] rounded-full bottom-0 right-0"></div>

      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl gradient-text mb-6 content-item">
          Content & Community
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 content-item">
          I share coding knowledge, real-world projects, and practical
          insights to help developers grow faster.
        </p>

        {/* PLATFORM CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {platforms.map((item, i) => (
            <div
              key={i}
              className="content-item glass-strong p-6 rounded-2xl hover:scale-[1.03] transition gpu"
            >
              <h3 className={`text-xl font-semibold mb-2 ${item.color}`}>
                {item.name}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                data-cursor="Visit"
                className="inline-block mt-4 text-sm text-cyan-400 hover:underline"
              >
                🔗 Visit Platform
              </a>
            </div>
          ))}

        </div>

        {/* 📊 METRICS */}
        <div className="mt-16 flex justify-center flex-wrap gap-10 content-item">

          <div>
            <h3 className="text-2xl font-bold">10K+</h3>
            <p className="text-gray-500 text-sm">Learners Reached</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-gray-500 text-sm">Content Posts</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Daily</h3>
            <p className="text-gray-500 text-sm">Consistency</p>
          </div>

        </div>

        {/* SOCIAL ICONS */}
        <div className="mt-10 flex justify-center gap-6 text-xl text-indigo-400 content-item">

          {socialLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                data-cursor={item.name}
                className="hover:scale-110 transition"
              >
                <Icon />
              </a>
            );
          })}

        </div>

        {/* CTA */}
        <div className="mt-12 content-item">
          <a
            href="https://www.instagram.com/dev.ruti/"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Follow My Journey 🚀
          </a>
        </div>

      </div>
    </section>
  );
}