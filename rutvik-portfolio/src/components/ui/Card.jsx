import { motion } from "framer-motion";

export default function Card({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="glass-strong p-6 rounded-2xl shadow-lg"
    >
      {children}
    </motion.div>
  );
}