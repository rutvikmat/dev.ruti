export default function Tooltip({ text, children }) {
  return (
    <div className="relative group inline-block">

      {children}

      {/* TOOLTIP */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
        px-2 py-1 text-xs rounded bg-black text-white opacity-0 
        group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-50">

        {text}

      </div>
    </div>
  );
}