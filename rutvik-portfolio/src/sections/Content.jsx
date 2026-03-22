import { useRef } from "react";
import useGsap from "../hooks/useGsap";
import TiltCard from "../components/ui/TiltCard";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Content() {
  const ref = useRef();

  // 🔥 GSAP reveal
  useGsap((gsap) => {
    gsap.from(".content-anim", {
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

  const contentTypes = [
    {
      title: "Reels & Short Content",
      desc: "Quick, engaging reels explaining JavaScript concepts, React tricks, and coding tips in under 60 seconds.",
      icon: "🎬",
    },
    {
      title: "Project-Based Learning",
      desc: "Step-by-step breakdown of real-world projects like Car Rental systems, ML apps, and full-stack platforms.",
      icon: "💻",
    },
    {
      title: "System Design & Logic",
      desc: "Simplified explanations of backend logic, APIs, authentication, and scalable architecture.",
      icon: "⚙️",
    },
    {
      title: "Developer Growth",
      desc: "Roadmaps, learning strategies, and practical advice to help developers grow faster.",
      icon: "📈",
    },
  ];

  return (
    <section
      id="content"
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[80px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto text-center">

        {/* 🔥 TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 content-anim">
          Content & Community
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 content-anim">
          I create content focused on helping developers learn faster through
          real-world projects, practical coding, and simplified explanations of complex concepts.
        </p>

        {/* 🔥 PLATFORM CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">

          <TiltCard className="content-anim">
            <div className="glass-strong p-6 rounded-2xl glow-card text-left space-y-3">
              <div className="flex items-center gap-3 text-xl">
                <FaInstagram className="text-pink-500" />
                <h3 className="font-semibold">Instagram</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Short-form content including reels, coding tips, quick concepts,
                and engaging developer content designed for fast learning.
              </p>
            </div>
          </TiltCard>

          <TiltCard className="content-anim">
            <div className="glass-strong p-6 rounded-2xl glow-card text-left space-y-3">
              <div className="flex items-center gap-3 text-xl">
                <FaYoutube className="text-red-500" />
                <h3 className="font-semibold">YouTube</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Long-form tutorials, full project builds, and deep dives into
                development concepts and system design.
              </p>
            </div>
          </TiltCard>

        </div>

        {/* 🔥 CONTENT TYPES */}
        <div className="grid md:grid-cols-2 gap-6">

          {contentTypes.map((item, i) => (
            <TiltCard key={i} className="content-anim">
              <div className="glass p-5 rounded-xl glow-card text-left space-y-2">
                <div className="text-xl">{item.icon}</div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            </TiltCard>
          ))}

        </div>

        {/* 🔥 FINAL LINE */}
        <div className="mt-14 text-gray-400 max-w-3xl mx-auto content-anim">
          My goal is to bridge the gap between theory and real-world development
          by providing content that is practical, engaging, and directly applicable.
        </div>

      </div>
    </section>
  );
}