import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const ref = useRef();
  const [label, setLabel] = useState("</>");

  let mouse = { x: 0, y: 0 };
  let pos = { x: 0, y: 0 };

  useEffect(() => {
    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;

      if (ref.current) {
        ref.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    const interactive = document.querySelectorAll("a, button");

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        setLabel(el.getAttribute("data-cursor") || "Click");
      });

      el.addEventListener("mouseleave", () => {
        setLabel("</>");
      });
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
    >
      <div className="px-2 py-1 text-xs rounded bg-indigo-500 text-white">
        {label}
      </div>
    </div>
  );
}