'use client';

import React from 'react';
import { MenuItem } from '@/types/menu';
import { MenuPrice } from './MenuPrice';
import { WaffleSlice } from '../illustrations/WaffleSlice';
import { Sparkle } from '../illustrations/Sparkle';
import { Flame } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="relative group bg-[#171717] hover:bg-[#1c1c1c] rounded-2xl p-5 border border-[#2a2a2a] hover:border-[#FFD400]/70 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_rgba(255,212,0,0.15)] flex flex-col justify-between h-full">
      {/* BEST SELLER BADGE */}
      {item.isBestSeller && (
        <div className="absolute -top-3 right-4 z-10 bg-gradient-to-r from-[#FFD400] to-[#FFE95B] text-[#080808] text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_12px_rgba(255,212,0,0.6)] flex items-center gap-1">
          <Flame className="w-3.5 h-3.5 fill-[#080808]" />
          <span>BEST SELLER</span>
        </div>
      )}

      <div>
        {/* HEADER & CATEGORY TAG */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#080808] border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] group-hover:scale-110 transition-transform">
              <WaffleSlice size={18} />
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FFD400] bg-[#FFD400]/10 px-2.5 py-0.5 rounded-md">
              {item.category}
            </span>
          </div>

          <Sparkle size={16} className="text-[#FFD400] opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* ITEM TITLE */}
        <h3 className="text-xl font-extrabold text-white group-hover:text-[#FFD400] transition-colors mb-2 tracking-wide">
          {item.name}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-xs text-[#BDBDBD] leading-relaxed mb-6 font-medium">
          {item.description}
        </p>
      </div>

      {/* PRICES FOOTER */}
      <div className="pt-2 border-t border-[#262626]">
        <MenuPrice prices={item.prices} />
      </div>
    </div>
  );
};
