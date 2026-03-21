import socialLinks from "../../data/social";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-gray-800 overflow-hidden">

      {/* 🌌 LIGHT GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-10 blur-[60px] rounded-full left-1/2 -translate-x-1/2 top-0"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 text-center">

        {/* NAME */}
        <h2 className="text-xl font-semibold gradient-text">
          Rutvik Mathapati
        </h2>

        <p className="text-gray-400 mt-2 text-sm">
          Full Stack Developer • AI/ML • Content Creator
        </p>

        {/* NAV LINKS */}
        <div className="flex justify-center gap-6 mt-6 text-sm text-gray-400">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* SOCIAL */}
        <div className="flex justify-center gap-6 mt-6 text-lg text-indigo-400">
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

        {/* CTA */}
        <div className="mt-8">
          <a
            href="#contact"
            data-cursor="Hire"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-2 rounded-xl hover:opacity-90 transition"
          >
            Let’s Work Together 🚀
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-500 text-xs mt-8">
          © {new Date().getFullYear()} Rutvik Mathapati
        </p>

      </div>
    </footer>
  );
}