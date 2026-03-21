import { useState } from "react";

export default function ProjectGallery({ images = [] }) {
  const [active, setActive] = useState(0);

  if (!images.length) return null;

  return (
    <section className="mt-12 gpu">

      {/* MAIN IMAGE */}
      <div className="glass-strong p-3 rounded-2xl">
        <img
          src={images[active]}
          alt="project"
          className="rounded-xl w-full transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-4 mt-6 overflow-x-auto">

        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setActive(i)}
            className={`w-28 h-20 object-cover rounded-lg cursor-pointer border-2 transition ${
              active === i
                ? "border-indigo-500"
                : "border-transparent"
            }`}
          />
        ))}

      </div>

    </section>
  );
}