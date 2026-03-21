import Home from "./pages/Home";
import Cursor from "./components/ui/Cursor";
import { motion, useScroll } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Cursor />

      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 origin-left z-50"
      />

      <Home />
    </>
  );
}