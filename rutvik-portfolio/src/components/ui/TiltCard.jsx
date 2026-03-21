import { useRef } from "react";

export default function TiltCard({ children }) {
  const ref = useRef();

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    ref.current.style.transform = `
      rotateY(${x * 15}deg)
      rotateX(${y * -15}deg)
      scale(1.03)
    `;
  };

  const reset = () => {
    ref.current.style.transform =
      "rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-200"
    >
      {children}
    </div>
  );
}