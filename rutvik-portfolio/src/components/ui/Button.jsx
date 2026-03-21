export default function Button({ children }) {
  return (
    <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:scale-105 transition-all">
      {children}
    </button>
  );
}