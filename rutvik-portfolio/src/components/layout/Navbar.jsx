import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      // Navbar background change
      setScrolled(y > 40);

      // Active section detection (lightweight)
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop - 120) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `text-sm cursor-pointer transition ${
      active === id ? "text-indigo-400" : "text-gray-300"
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="text-lg font-semibold gradient-text">
          Rutvik.dev
        </h1>

        {/* LINKS */}
        <div className="hidden md:flex gap-8">
          {["home", "about", "skills", "experience", "projects", "contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                data-cursor="Go"
                className={linkClass(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            )
          )}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          data-cursor="Hire"
          className="hidden md:block bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 rounded-lg text-sm hover:opacity-90 transition"
        >
          Hire Me
        </a>

      </div>
    </nav>
  );
}