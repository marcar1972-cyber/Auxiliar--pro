"use client";

import { Flame } from "lucide-react";

export default function StreakCounter({ count = 0 }) {
  // Si la racha es 0, la mostramos en gris para motivar a "encenderla"
  const isActive = count > 0;

  return (
    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${
      isActive 
        ? "bg-orange-50 border-orange-200 text-orange-600 shadow-sm" 
        : "bg-slate-50 border-slate-200 text-slate-400"
    }`}>
      <Flame 
        size={18} 
        className={`${isActive ? "fill-orange-500 animate-pulse" : "fill-none"}`} 
      />
      <span className="text-sm font-black font-sans">
        {count} {count === 1 ? "DÍA" : "DÍAS"}
      </span>
    </div>
  );
}

// < macz.dev />