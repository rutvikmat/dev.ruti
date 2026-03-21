import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl gradient-text">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}