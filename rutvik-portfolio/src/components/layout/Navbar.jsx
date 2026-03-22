import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  const indicatorRef = useRef();
  const navRefs = useRef([]);

  // 🔥 Scroll background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Scroll Spy
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  // 🔥 Move underline indicator
  useEffect(() => {
    const index = links.findIndex((l) => l.href === active);
    const el = navRefs.current[index];

    if (el && indicatorRef.current) {
      const { offsetLeft, offsetWidth } = el;

      indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
      indicatorRef.current.style.width = `${offsetWidth}px`;
    }
  }, [active]);

  // 🔥 Smooth scroll handler
  const handleScrollTo = (e, href) => {
    e.preventDefault();

    const target = document.querySelector(href);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f1a]/70 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* LOGO */}
        <h1 className="text-xl font-bold gradient-text">
          Rutvik.dev
        </h1>

        {/* DESKTOP NAV */}
        <div className="relative hidden md:flex">

          <ul className="flex gap-8 text-sm relative">

            {links.map((link, i) => (
              <li key={i}>
                <a
                  ref={(el) => (navRefs.current[i] = el)}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`transition ${
                    active === link.href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* 🔥 MOVING UNDERLINE */}
            <span
              ref={indicatorRef}
              className="absolute bottom-0 h-[2px] bg-indigo-500 transition-all duration-300"
            />

          </ul>

        </div>

        {/* CTA */}
        <a
          href="#hire"
          onClick={(e) => handleScrollTo(e, "#hire")}
          className="hidden md:block px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-sm hover:scale-105 transition"
        >
          Hire Me
        </a>

        {/* MOBILE ICON */}
        <div
          className="md:hidden text-xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0b0f1a]/95 backdrop-blur-lg px-6 py-6 space-y-4 text-center">

          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`block ${
                active === link.href
                  ? "text-white font-semibold"
                  : "text-gray-400"
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#hire"
            onClick={(e) => handleScrollTo(e, "#hire")}
            className="block mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500"
          >
            Hire Me
          </a>

        </div>
      )}
    </nav>
  );
}