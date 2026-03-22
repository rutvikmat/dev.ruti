import { useEffect, useRef } from "react";
import {
  FaReact,
  FaPython,
  FaGithub,
  FaJava,
} from "react-icons/fa";

import {
  SiDjango,
  SiJavascript,
  SiMysql,
} from "react-icons/si";

export default function TechStrip({ speed = "medium" }) {
  const ref = useRef();

  const tech = [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "Java", icon: <FaJava className="text-red-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
  ];

  // 🔥 Scroll-based 3D tilt (VERY LIGHT)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotate = Math.min(scrollY * 0.02, 10);

      if (ref.current) {
        ref.current.style.transform = `perspective(1000px) rotateX(${rotate}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden mt-16 tech-3d-container"
    >
      {/* EDGE FADES */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0b0f1a] to-transparent z-20"></div>
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0b0f1a] to-transparent z-20"></div>

      {/* MOVING HIGHLIGHT */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="highlight"></div>
      </div>

      {/* SCROLL TRACK */}
      <div
        className={`flex gap-16 whitespace-nowrap items-center tech-scroll ${speed}`}
      >
        {[...tech, ...tech].map((item, i) => (
          <div key={i} className="tech-item-3d flex items-center gap-3">
            <span className="text-2xl icon-glow">
              {item.icon}
            </span>
            <span className="text-gray-300 text-sm">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}