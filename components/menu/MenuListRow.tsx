'use client';

import React from 'react';
import { MenuItem } from '@/types/menu';
import { Flame } from 'lucide-react';

interface MenuListRowProps {
  item: MenuItem;
}

export const MenuListRow: React.FC<MenuListRowProps> = ({ item }) => {
  const imgSrc = item.image;

  return (
    <div className="group bg-[#141414] hover:bg-[#1a1a1a] rounded-xl p-3.5 sm:p-4 border border-[#262626] hover:border-[#FFD400]/60 transition-all duration-300 shadow-md flex flex-row items-center justify-between gap-3 sm:gap-4">
      {/* LEFT SIDE: ITEM IMAGE & TITLE */}
      <div className="flex items-center gap-3.5 min-w-0 flex-1">
        {/* ITEM IMAGE TAG */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-[#080808] border border-[#FFD400]/40 shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm" 
        >
          <img
            src={imgSrc}
            alt={item.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/menu/default_waffle.jpg';
            }}
            className="w-full h-full object-contain"
            style={{ 
    transform: `rotate(${item.rotate || 0}deg)` 
  }}
          />
        </div>

        {/* ITEM NAME & BADGES */}
        <div className="flex items-center flex-wrap gap-2 min-w-0">
          <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-[#FFD400] transition-colors tracking-wide  ">
            {item.name}
          </h3>

          {item.isBestSeller && (
            <span className="bg-gradient-to-r from-[#FFD400] to-[#FFE95B] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-[0_0_10px_rgba(255,212,0,0.5)] shrink-0">
              <Flame className="w-3 h-3 fill-[#080808]" />
              <span>BEST SELLER</span>
            </span>
          )}
        </div>
      </div>

      {/* RIGHT SIDE: PRICING BADGES */}
      <div className="shrink-0 flex items-center gap-2">
        {item.prices.price !== undefined ? (
          /* Single Price (Fudge Brownies) */
          <div className="bg-[#FFD400]/10 border border-[#FFD400]/30 px-3.5 py-1.5 rounded-xl flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-[#BDBDBD] uppercase">Price</span>
            <span className="text-base sm:text-lg font-black text-[#FFD400]">₹{item.prices.price}</span>
          </div>
        ) : (
          /* Dual Pricing (Mini & Lolly) */
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-2">
  {item.prices.mini !== undefined && (
    <div className="bg-[#080808] border border-[#333333] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl flex items-center justify-between sm:justify-start gap-1.5">
      <span className="text-[10px] sm:text-[11px] font-bold text-[#888888] uppercase">Mini</span>
      <span className="text-sm sm:text-base font-black text-[#FFD400]">₹{item.prices.mini}</span>
    </div>
  )}
  {item.prices.lolly !== undefined && (
    <div className="bg-[#FFD400]/15 border border-[#FFD400]/40 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl flex items-center justify-between sm:justify-start gap-1.5">
      <span className="text-[10px] sm:text-[11px] font-bold text-[#FFE95B] uppercase">Lolly</span>
      <span className="text-sm sm:text-base font-black text-[#FFD400]">₹{item.prices.lolly}</span>
    </div>
  )}
</div>
        )}
      </div>
    </div>
  );
};
