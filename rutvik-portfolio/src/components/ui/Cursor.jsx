import { useState, useEffect } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    });
  }, []);

  return (
    <div
      className="fixed w-6 h-6 bg-indigo-500 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    />
  );
}