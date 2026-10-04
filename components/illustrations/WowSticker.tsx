import React from 'react';

export const WowSticker: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative inline-block rotate-[-6deg] hover:rotate-[0deg] transition-transform duration-300 pointer-events-none select-none ${className}`}>
    <div className="bg-[#FFD400] text-[#080808] font-extrabold text-xs md:text-sm px-3 py-1.5 rounded-full border-2 border-white shadow-[0_4px_14px_rgba(255,212,0,0.6)] flex items-center gap-1.5 tracking-wider uppercase">
      <span className="text-base animate-bounce">⚡</span>
      <span>100% PURE WAFFLE LOVE</span>
    </div>
  </div>
);
