import { useRef } from "react";
import useGsap from "../hooks/useGsap";
import TiltCard from "../components/ui/TiltCard";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Content() {
  const ref = useRef();

  useGsap((gsap) => {
    gsap.from(".content-anim", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section
      id="content"
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[80px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 content-anim">
          Content & Community
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 content-anim">
          I create content focused on real-world development, helping developers
          learn faster through projects and practical coding.
        </p>

        {/* 🔥 PLATFORM CARDS */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* 📱 INSTAGRAM */}
          <TiltCard className="content-anim">
            <div className="glass-strong p-5 rounded-2xl glow-card text-left space-y-4">

              <div className="flex items-center gap-3">
                <FaInstagram className="text-pink-500 text-xl" />
                <h3 className="font-semibold">Instagram</h3>
              </div>

              {/* FOLLOWERS */}
              <div className="text-sm text-gray-400">
                <span className="text-indigo-400 font-bold text-lg">10K+</span>{" "}
                followers
              </div>

              {/* IMAGE PREVIEW */}
              <a
                href="https://instagram.com/dev.ruti"
                target="_blank"
              >
                <img
                  src="/src/assets/images/instagram-preview.PNG"
                  alt="Instagram"
                  className="rounded-lg hover:scale-105 transition"
                />
              </a>

              <p className="text-gray-400 text-xs">
                Reels, coding tips, quick concepts, and developer-focused content.
              </p>

            </div>
          </TiltCard>

          {/* 📺 YOUTUBE */}
          <TiltCard className="content-anim">
            <div className="glass-strong p-5 rounded-2xl glow-card text-left space-y-4">

              <div className="flex items-center gap-3">
                <FaYoutube className="text-red-500 text-xl" />
                <h3 className="font-semibold">YouTube</h3>
              </div>

              {/* SUBSCRIBERS */}
              <div className="text-sm text-gray-400">
                <span className="text-indigo-400 font-bold text-lg">2K+</span>{" "}
                subscribers
              </div>

              {/* EMBED */}
              <div className="rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-[200px]"
                  src="https://www.youtube.com/embed/tg4bkz7JmfL9V39x"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>

              <p className="text-gray-400 text-xs">
                Full tutorials, project builds, and deep dives into development.
              </p>

            </div>
          </TiltCard>

        </div>

        {/* FINAL LINE */}
        <div className="mt-14 text-gray-400 max-w-3xl mx-auto content-anim">
          I focus on delivering content that bridges the gap between learning
          and real-world development.
        </div>

      </div>
    </section>
  );
}