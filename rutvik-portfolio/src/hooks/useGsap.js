import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsap(callback, deps = []) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(gsap);
    });

    ScrollTrigger.refresh(); // 🔥 important

    return () => ctx.revert();
  }, deps);
}