import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7s8gggy",
        "template_luprw3o",
        form.current,
        "vkcVmVrQwx_H-WQ1z"
      )
      .then(() => {
        alert("Message sent successfully 🚀");
      })
      .catch(() => {
        alert("Failed to send message ❌");
      });
  };

  return (
    <section id="contact" className="section relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 blur-[140px] rounded-full bottom-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-4xl gradient-text mb-4">
            Let's Work Together 🚀
          </h2>

          <p className="text-gray-400 mb-6">
            I'm open to internships, full-time roles, and freelance opportunities.
            If you have a project or idea, let's build something impactful.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-3 text-gray-300 text-sm">
            <p>📧 ruties4354@gmail.com</p>
            <p>📍 Bengaluru, India</p>
            <p>💼 Available for work</p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-5 mt-6 text-2xl text-indigo-400">
            <a href="https://github.com/rutvikmat" target="_blank">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/dev.ruti" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@dev.ruties" target="_blank">
              <FaYoutube />
            </a>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          whileHover={{ scale: 1.02 }}
          className="glass-strong p-6 rounded-2xl flex flex-col gap-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-black/50 outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-black/50 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded bg-black/50 outline-none"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 py-3 rounded-xl font-medium hover:opacity-90"
          >
            Send Message ✉️
          </button>
        </motion.form>

      </div>
    </section>
  );
}