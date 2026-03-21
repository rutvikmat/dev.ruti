import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsap(callback) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(gsap, ScrollTrigger);
    });
    return () => ctx.revert();
  }, []);
}