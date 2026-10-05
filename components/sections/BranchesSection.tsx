'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRANCHES_DATA } from '@/data/branches';
import { BranchCard } from '../branches/BranchCard';
import { BranchSearch } from '../branches/BranchSearch';
import { Sparkle } from '../illustrations/Sparkle';
import { MapPin } from 'lucide-react';

export const BranchesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBranches = BRANCHES_DATA.filter((branch) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    return (
      branch.name.toLowerCase().includes(term) ||
      (branch.city && branch.city.toLowerCase().includes(term)) ||
      (branch.address && branch.address.toLowerCase().includes(term))
    );
  });

  return (
    <section id="branches" className="relative py-24 bg-[#0c0c0c] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD400]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#171717] border border-[#FFD400]/40 px-4 py-1.5 rounded-full mb-4">
            <Sparkle size={16} color="#FFD400" />
            <span className="text-[#FFD400] text-xs font-black uppercase tracking-widest">
              FIND YOUR HAPPY PLACE
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight mb-4"
            style={{ fontFamily: "'Bowlby One SC', 'Impact', sans-serif" }}
          >
            6 BRANCHES. <span className="text-[#FFD400]">ONE WAFFLE LOVE.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#BDBDBD] font-normal leading-relaxed">
            Your next waffle craving is closer than you think. Find your nearest WOW! WAFFLE outlet.
          </p>
        </div>

        {/* SEARCH INPUT */}
        <BranchSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {/* BRANCH CARDS GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredBranches.map((branch) => (
              <motion.div
                key={branch.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <BranchCard branch={branch} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredBranches.length === 0 && (
          <div className="text-center py-12 text-[#888888] font-semibold">
            <MapPin className="w-8 h-8 text-[#FFD400] mx-auto mb-2 opacity-50" />
            <p>No branches found matching &quot;{searchTerm}&quot;.</p>
          </div>
        )}

      </div>
    </section>
  );
};
