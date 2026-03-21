import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "projects", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `relative cursor-pointer ${
      active === id ? "text-indigo-400" : "text-gray-300"
    }`;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="text-xl font-bold gradient-text cursor-pointer">
          dev.ruti
        </h1>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-8 text-sm">

          {["home", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={linkClass(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {/* UNDERLINE ANIMATION */}
              {active === item && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-400"
                />
              )}
            </a>
          ))}

        </div>

        {/* CTA BUTTON */}
       

      </div>
    </motion.nav>
  );
}