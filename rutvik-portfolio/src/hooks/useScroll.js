import { useEffect, useState } from "react";

export default function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState("down");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scroll position
      setScrollY(currentScrollY);

      // Direction
      if (currentScrollY > lastScrollY) {
        setDirection("down");
      } else {
        setDirection("up");
      }

      lastScrollY = currentScrollY;

      // Progress (0 → 1)
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollProgress = currentScrollY / totalHeight;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, direction, progress };
}