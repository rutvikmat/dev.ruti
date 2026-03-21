import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/globals.css";

// 🚀 Smooth Scroll
import Lenis from "@studio-freight/lenis";

function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1,          // ⚡ smooth but not slow
    smoothWheel: true,
    smoothTouch: false,   // disable on mobile (better performance)
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

initSmoothScroll();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);