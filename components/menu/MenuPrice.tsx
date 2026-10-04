import React from 'react';
import { MenuPrices } from '@/types/menu';

interface MenuPriceProps {
  prices: MenuPrices;
}

export const MenuPrice: React.FC<MenuPriceProps> = ({ prices }) => {
  // If item has single price (e.g. Fudge Brownies)
  if (prices.price !== undefined) {
    return (
      <div className="flex items-center gap-1.5 bg-[#FFD400]/10 border border-[#FFD400]/30 px-3.5 py-1.5 rounded-xl">
        <span className="text-xs font-semibold text-[#BDBDBD] uppercase">Price:</span>
        <span className="text-lg font-black text-[#FFD400]">₹{prices.price}</span>
      </div>
    );
  }

  // Dual size options (Mini & Lolly)
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {prices.mini !== undefined && (
        <div className="flex-1 bg-[#111111] border border-[#333333] px-3 py-1.5 rounded-xl flex items-center justify-between">
          <span className="text-[11px] font-bold text-[#888888] uppercase">Mini</span>
          <span className="text-base font-black text-[#FFD400]">₹{prices.mini}</span>
        </div>
      )}
      {prices.lolly !== undefined && (
        <div className="flex-1 bg-[#FFD400]/15 border border-[#FFD400]/40 px-3 py-1.5 rounded-xl flex items-center justify-between">
          <span className="text-[11px] font-bold text-[#FFE95B] uppercase">Lolly</span>
          <span className="text-base font-black text-[#FFD400]">₹{prices.lolly}</span>
        </div>
      )}
    </div>
  );
};
