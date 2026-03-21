import { motion } from "framer-motion";

export default function Card({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass p-6 rounded-2xl transition-all"
    >
      {children}
    </motion.div>
  );
}