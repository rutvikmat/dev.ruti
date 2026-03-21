import { useRef, useState } from "react";
import useGsap from "../hooks/useGsap";
import emailjs from "@emailjs/browser";
import socialLinks from "../data/social";

export default function Contact() {
  const ref = useRef();
  const form = useRef();
  const [status, setStatus] = useState("");

  // 🔥 Optimized GSAP animation
  useGsap((gsap) => {
    gsap.from(".contact-item", {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* 🌌 LIGHT GLOW (optimized) */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-10 blur-[60px] rounded-full bottom-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6 gpu">

          <h2 className="text-4xl gradient-text contact-item">
            Let’s Work Together 🚀
          </h2>

          <p className="text-gray-400 contact-item">
            I’m open to internships, freelance, and full-time roles.
            Let’s build something impactful together.
          </p>

          {/* INFO */}
          <div className="text-sm text-gray-300 space-y-2 contact-item">
            <p>📧 ruties4354@gmail.com</p>
            <p>📍 Bengaluru, India</p>
            <p className="text-green-400">● Available for work</p>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-5 text-xl text-indigo-400 contact-item">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor={item.name}
                  className="hover:scale-110 transition"
                >
                  <Icon />
                </a>
              );
            })}
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="glass-strong p-6 rounded-2xl flex flex-col gap-4 contact-item gpu"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-black/40 outline-none focus:ring-1 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-black/40 outline-none focus:ring-1 focus:ring-indigo-500"
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="5"
            required
            className="p-3 rounded bg-black/40 outline-none focus:ring-1 focus:ring-indigo-500"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 py-3 rounded-xl hover:opacity-90 transition"
          >
            {status === "sending" ? "Sending..." : "Send Message ✉️"}
          </button>

          {/* STATUS */}
          {status === "success" && (
            <p className="text-green-400 text-sm text-center">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              ❌ Failed to send. Try again.
            </p>
          )}

        </form>

      </div>

      {/* CTA */}
      <div className="mt-20 text-center contact-item">
        <a
          href="mailto:ruties4354@gmail.com"
          className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 rounded-xl"
        >
          📩 Email Me Directly
        </a>
      </div>
    </section>
  );
}