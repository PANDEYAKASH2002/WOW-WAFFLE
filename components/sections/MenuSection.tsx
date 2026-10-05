'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS } from '@/data/menu';
import { MenuCategory } from '@/types/menu';
import { MenuFilters } from '../menu/MenuFilters';
import { MenuListRow } from '../menu/MenuListRow';
import { WaffleStack } from '../illustrations/WaffleStack';
import { WaffleOutline } from '../illustrations/WaffleOutline';
import { Sparkle } from '../illustrations/Sparkle';

const CATEGORIES: MenuCategory[] = [
  'All',
  'Classic',
  'Special',
  "Kid's Special",
  'Premium',
  'Fudge Brownie',
];

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Classic: 'Golden crispy waffles served with rich flowing chocolate (Available in Mini & Lolly)',
  Special: 'Decadent cookie and brownie waffle toppings (Available in Mini & Lolly)',
  "Kid's Special": 'Playful colorful toppings and sweet fruit glazes (Available in Mini & Lolly)',
  Premium: 'Indulgent Lotus Biscoff, Nutella, and roasted nuts (Available in Mini & Lolly)',
  'Fudge Brownie': 'Rich gooey cocoa brownies topped with chocolate balls, Nutella, and Biscoff'
};

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');

  // Categories to display
  const activeCategoriesList = activeCategory === 'All'
    ? CATEGORIES.filter((cat) => cat !== 'All')
    : [activeCategory];

  return (
    <section id="menu" className="relative  bg-[#080808] overflow-hidden">
      {/* Ambient background SVGs */}
      <div className="absolute top-12 left-6 opacity-10 pointer-events-none hidden md:block">
        <WaffleOutline size={140} />
      </div>
      <div className="absolute bottom-12 right-6 opacity-10 pointer-events-none hidden md:block">
        <WaffleStack size={120} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#171717] border border-[#FFD400]/40 px-4 py-1.5 rounded-full mb-3">
            <Sparkle size={16} color="#FFD400" />
            <span className="text-[#FFD400] text-xs font-black uppercase tracking-widest">
              MADE TO MAKE YOU SAY WOW!
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-3"
            style={{ fontFamily: "'Bowlby One SC', 'Impact', sans-serif" }}
          >
            OUR IRRESISTIBLE <span className="text-[#FFD400]">MENU</span>
          </h2>

          <p className="text-sm sm:text-base text-[#BDBDBD] font-normal max-w-xl mx-auto">
            Pick your favourite, follow your cravings, and make every bite a celebration.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="mb-10">
          <MenuFilters
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* MENU LIST GROUPS */}
        <div className="space-y-10">
          <AnimatePresence mode="popLayout">
            {activeCategoriesList.map((category) => {
              const categoryItems = MENU_ITEMS.filter((item) => item.category === category);
              if (categoryItems.length === 0) return null;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#111111] p-5 sm:p-8 rounded-3xl border border-[#222222] shadow-xl space-y-4"
                >
                  {/* CATEGORY HEADER */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#222222] pb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-[#FFD400] shadow-[0_0_10px_#FFD400]" />
                      <h3
                        className="text-2xl font-black uppercase text-white tracking-wide"
                        style={{ fontFamily: "'Bowlby One SC', 'Impact', sans-serif" }}
                      >
                        {category} <span className="text-[#FFD400]">WAFFLES</span>
                      </h3>
                    </div>

                    {CATEGORY_DESCRIPTIONS[category] && (
                      <span className="text-xs font-semibold text-[#888888] italic">
                        {CATEGORY_DESCRIPTIONS[category]}
                      </span>
                    )}
                  </div>

                  {/* COMPACT 2-COLUMN LIST GRID ON DESKTOP */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-2">
                    {categoryItems.map((item) => (
                      <MenuListRow key={item.id} item={item} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* MENU FOOTER NOTE */}
        <div className="mt-8 text-center text-xs text-[#888888] font-semibold bg-[#111111] p-3.5 rounded-xl border border-[#222222] max-w-xl mx-auto">
          💡 All menu prices are inclusive of taxes. Freshly baked per order at all WOW! WAFFLE outlets.
        </div>

      </div>
    </section>
  );
};
