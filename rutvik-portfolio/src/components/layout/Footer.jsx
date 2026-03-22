import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t border-gray-800 bg-[#0b0f1a]">

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold gradient-text">
            Rutvik.dev
          </h2>

          <p className="text-gray-400 text-sm">
            Building scalable systems, modern web apps, and helping developers
            learn through real-world projects.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2 text-sm text-gray-400">
            {["home", "about", "skills", "projects", "experience", "contact"].map(
              (id, i) => (
                <a
                  key={i}
                  href={`#${id}`}
                  className="hover:text-white transition"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              )
            )}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">
            Connect
          </h3>

          <div className="flex gap-4 text-lg text-gray-400">

            <a href="#" className="hover:text-white transition">
              <FaGithub />
            </a>

            <a href="#" className="hover:text-white transition">
              <FaLinkedin />
            </a>

            <a href="mailto:your@email.com" className="hover:text-white transition">
              <FaEnvelope />
            </a>

          </div>

          <p className="text-gray-500 text-xs mt-3">
            Open to internships, freelance & full-time roles.
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Rutvik Mathapati
      </div>

    </footer>
  );
}