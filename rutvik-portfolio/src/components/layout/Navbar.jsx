import { useState, useEffect } from "react";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <nav className={`fixed w-full z-50 p-5 transition ${scroll && "bg-black/70 backdrop-blur"}`}>
      <div className="flex justify-between">
        <h1 className="gradient-text text-xl font-bold">Rutvik.dev</h1>
        <div className="flex gap-6">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}