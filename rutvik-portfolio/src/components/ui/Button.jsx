import { motion } from "framer-motion";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
}) {
  const base =
    "px-6 py-3 rounded-xl text-sm font-medium transition";

  const styles = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-cyan-500",
    secondary:
      "glass border border-gray-700",
  };

  const Comp = href ? "a" : "button";

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Comp
        href={href}
        onClick={onClick}
        data-cursor="Click"
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </Comp>
    </motion.div>
  );
}