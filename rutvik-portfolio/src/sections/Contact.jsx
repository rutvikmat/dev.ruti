import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

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
      className="section relative overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[140px] rounded-full bottom-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl gradient-text mb-4">
            Let’s Build Something Amazing 🚀
          </h2>

          <p className="text-gray-400 mb-6">
            I’m open to internships, full-time roles, and freelance projects.
            If you have an idea or opportunity, let’s collaborate and create
            something impactful.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-3 text-gray-300 text-sm">
            <p>📧 ruties4354@gmail.com</p>
            <p>📍 Bengaluru, India</p>
            <p className="text-green-400">● Available for work</p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-5 mt-6 text-2xl text-indigo-400">
            <a
              href="https://github.com/rutvikmat"
              target="_blank"
              rel="noreferrer"
              data-cursor="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/rutvik-mathapati-3a5577208/"
              target="_blank"
              rel="noreferrer"
              data-cursor="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/dev.ruti/"
              target="_blank"
              rel="noreferrer"
              data-cursor="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/@dev.ruties"
              target="_blank"
              rel="noreferrer"
              data-cursor="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          className="glass-strong p-6 rounded-2xl flex flex-col gap-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-black/50 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-black/50 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="5"
            required
            className="p-3 rounded bg-black/50 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            {status === "sending"
              ? "Sending..."
              : "Send Message ✉️"}
          </button>

          {/* STATUS MESSAGES */}
          {status === "success" && (
            <p className="text-green-400 text-sm text-center">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              ❌ Failed to send message. Try again.
            </p>
          )}
        </motion.form>

      </div>

      {/* 🚀 FINAL CTA */}
      <div className="mt-20 text-center">
        <p className="text-gray-400 mb-4">
          Prefer quick connect?
        </p>

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