'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS } from '@/data/menu';
import { MenuCategory } from '@/types/menu';
import { MenuFilters } from '../menu/MenuFilters';
import { MenuCard } from '../menu/MenuCard';
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

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');

  const filteredItems = activeCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="relative py-24 bg-[#080808] overflow-hidden">
      {/* Ambient background SVGs */}
      <div className="absolute top-12 left-6 opacity-10 pointer-events-none hidden md:block">
        <WaffleOutline size={140} />
      </div>
      <div className="absolute bottom-12 right-6 opacity-10 pointer-events-none hidden md:block">
        <WaffleStack size={120} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#171717] border border-[#FFD400]/40 px-4 py-1.5 rounded-full mb-4">
            <Sparkle size={16} color="#FFD400" />
            <span className="text-[#FFD400] text-xs font-black uppercase tracking-widest">
              MADE TO MAKE YOU SAY WOW!
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight mb-4"
            style={{ fontFamily: "'Bowlby One SC', 'Impact', sans-serif" }}
          >
            OUR IRRESISTIBLE <span className="text-[#FFD400]">MENU</span>
          </h2>

          <p className="text-base sm:text-lg text-[#BDBDBD] font-normal leading-relaxed">
            Pick your favourite, follow your cravings, and make every bite a little celebration.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="mb-12">
          <MenuFilters
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* MENU ITEMS GRID WITH ANIMATE PRESENCE */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <MenuCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* MENU FOOTER NOTE */}
        <div className="mt-12 text-center text-xs text-[#888888] font-semibold bg-[#111111] p-4 rounded-xl border border-[#222222] max-w-xl mx-auto">
          💡 All menu prices are inclusive of taxes. Freshly baked per order at all WOW! WAFFLE outlets.
        </div>

      </div>
    </section>
  );
};
