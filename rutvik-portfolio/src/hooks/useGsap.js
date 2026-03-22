import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsap(callback, deps = []) {
  useEffect(() => {
    if (!callback) return;

    // 🔥 GSAP context for scoped animations
    const ctx = gsap.context(() => {
      callback(gsap, ScrollTrigger);
    });

    // 🔥 Refresh ScrollTrigger AFTER animations are set
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    // 🔥 Cleanup (very important)
    return () => {
      ctx.revert();
      ScrollTrigger.killAll(false); // kills only inactive triggers
    };
  }, deps);
}