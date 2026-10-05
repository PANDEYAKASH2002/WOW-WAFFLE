'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../animations/Reveal';
import { Sparkle } from '../illustrations/Sparkle';
import { WaffleIcon } from '../illustrations/WaffleIcon';
import { WaffleSlice } from '../illustrations/WaffleSlice';
import { WaffleStack } from '../illustrations/WaffleStack';
import { StarBurst } from '../illustrations/StarBurst';

const CARDS = [
  {
    icon: WaffleIcon,
    title: 'Waffle Cravings, Sorted',
    description: 'Explore classic, special, premium, and brownie favourites.'
  },
  {
    icon: WaffleSlice,
    title: 'Something for Everyone',
    description: 'Discover different waffle creations, from chocolate classics to playful kid-friendly options.'
  },
  {
    icon: WaffleStack,
    title: 'Find Your Nearest Outlet',
    description: 'Explore our branch directory and find a confirmed outlet.'
  },
  {
    icon: StarBurst,
    title: 'A Little More WOW!',
    description: 'Enjoy a playful waffle experience with a bold and distinctive brand identity.'
  }
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="relative  bg-[#0c0c0c] border-y border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#171717] border border-[#FFD400]/40 px-4 py-1.5 rounded-full mb-3">
            <Sparkle size={16} color="#FFD400" />
            <span className="text-[#FFD400] text-xs font-black uppercase tracking-widest">
              WHY CHOOSE US
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight"
            style={{ fontFamily: "'Bowlby One SC', 'Impact', sans-serif" }}
          >
            THE <span className="text-[#FFD400]">WOW!</span> DIFFERENCE
          </h2>
        </div>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <Reveal key={card.title} delay={idx * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-[#171717] hover:bg-[#1f1f1f] p-6 rounded-2xl border border-[#2e2e2e] hover:border-[#FFD400] transition-all duration-300 shadow-xl h-full flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#080808] border border-[#FFD400]/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <IconComp size={28} />
                    </div>

                    <h3 className="text-lg font-black text-white group-hover:text-[#FFD400] transition-colors mb-2">
                      {card.title}
                    </h3>

                    <p className="text-xs text-[#BDBDBD] leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
