import { useRef } from "react";

export default function TiltCard({ children }) {
  const ref = useRef();

  const move = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ref.current.style.transform = `rotateX(${-(y/20)}deg) rotateY(${x/20}deg)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => (ref.current.style.transform = "")}
      className="glass p-6 rounded-xl transition"
    >
      {children}
    </div>
  );
}