import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 🔥 Register plugin ONCE
gsap.registerPlugin(ScrollTrigger);

export default function useGsap(callback, deps = []) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(gsap);
    });

    return () => ctx.revert(); // cleanup animations
  }, deps);
}