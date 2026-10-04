'use client';

import React from 'react';
import { ConfettiButton } from '../animations/ConfettiButton';
import { Sparkle } from '../illustrations/Sparkle';
import { StarBurst } from '../illustrations/StarBurst';

export const ConfettiSection: React.FC = () => {
  return (
    <section className="relative  bg-gradient-to-b from-[#080808] via-[#141414] to-[#080808] overflow-hidden border-t border-[#222222]">
      
      {/* Background Decorative SVGs */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none hidden md:block">
        <StarBurst size={64} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 pointer-events-none hidden md:block">
        <Sparkle size={48} color="#FFE95B" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-[#171717] border border-[#FFD400]/40 px-4 py-1.5 rounded-full">
          <Sparkle size={16} color="#FFD400" />
          <span className="text-[#FFD400] text-xs font-black uppercase tracking-widest">
            CELEBRATE THE MOMENT
          </span>
        </div>

        <h2
          className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight"
          style={{ fontFamily: "'Bowlby One SC', 'Impact', sans-serif" }}
        >
          EVERY BITE DESERVES A <br />
          <span className="text-[#FFD400] drop-shadow-[0_0_20px_rgba(255,212,0,0.5)]">
            LITTLE CELEBRATION!
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#BDBDBD] max-w-xl mx-auto font-medium">
          Ready for a burst of pure joy? Click below to launch our signature WOW! celebration confetti!
        </p>

        {/* <div className="pt-4 flex justify-center">
          <ConfettiButton
            label="🎉 MAKE IT RAIN CONFETTI 🎉"
            variant="section"
          />
        </div> */}

      </div>
    </section>
  );
};
