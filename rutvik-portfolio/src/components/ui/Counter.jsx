import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Counter({ value, suffix = "" }) {
  const ref = useRef();

  useEffect(() => {
    let obj = { count: 0 };

    gsap.to(obj, {
      count: value,
      duration: 1.5,
      ease: "power2.out",
      onUpdate: () => {
        if (ref.current) {
          ref.current.innerText =
            Math.floor(obj.count) + suffix;
        }
      },
    });
  }, [value, suffix]);

  return <span ref={ref}>0</span>;
}