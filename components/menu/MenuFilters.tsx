'use client';

import React from 'react';
import { MenuCategory } from '@/types/menu';

interface MenuFiltersProps {
  categories: MenuCategory[];
  activeCategory: MenuCategory;
  onSelectCategory: (category: MenuCategory) => void;
}

export const MenuFilters: React.FC<MenuFiltersProps> = ({
  categories,
  activeCategory,
  onSelectCategory
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar scroll-smooth max-w-full justify-start md:justify-center">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-black tracking-wide uppercase transition-all duration-300 border ${
              isActive
                ? 'bg-[#FFD400] text-[#080808] border-[#FFD400] shadow-[0_0_20px_rgba(255,212,0,0.5)] scale-105'
                : 'bg-[#141414] text-[#BDBDBD] border-[#333333] hover:border-[#FFD400]/50 hover:text-white'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};
