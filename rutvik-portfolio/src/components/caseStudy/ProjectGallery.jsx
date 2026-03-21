import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectGallery({ images = [] }) {
  const [active, setActive] = useState(0);

  if (!images.length) return null;

  return (
    <section className="mt-12">

      {/* MAIN IMAGE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-strong p-3 rounded-2xl"
      >
        <motion.img
          key={active}
          src={images[active]}
          alt="project"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-xl w-full"
        />
      </motion.div>

      {/* THUMBNAILS */}
      <div className="flex gap-4 mt-6 overflow-x-auto">

        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            onClick={() => setActive(i)}
            whileHover={{ scale: 1.05 }}
            className={`w-28 h-20 object-cover rounded-lg cursor-pointer border-2 ${
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