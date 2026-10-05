'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkle } from '../illustrations/Sparkle';
import { StarBurst } from '../illustrations/StarBurst';
import { WowSticker } from '../illustrations/WowSticker';
import { WaffleSlice } from '../illustrations/WaffleSlice';
import { WaffleStack } from '../illustrations/WaffleStack';
import { ArrowDown, Utensils, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-8 pb-16 md:pt-20 md:pb-24 flex items-center justify-center bg-[#080808] overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFD400]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Floating Ambient SVGs */}
      <motion.div
        className="absolute top-28 left-[6%] opacity-30 pointer-events-none hidden lg:block"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <StarBurst size={56} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-[12%] opacity-20 pointer-events-none hidden md:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <WaffleStack size={72} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: TEXT & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#171717] border border-[#FFD400]/40 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,212,0,0.2)]"
            >
              <Sparkle size={16} color="#FFD400" />
              <span className="text-[#FFD400] text-xs sm:text-sm font-extrabold uppercase tracking-widest">
                FRESHLY MADE. CRAZY DELICIOUS.
              </span>
            </motion.div>

            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[1.05]"
              style={{ fontFamily: "'Bowlby One SC', 'Impact', sans-serif" }}
            >
              GOOD VIBES. <br />
              GREAT WAFFLES. <br />
              <span className="text-[#FFD400] drop-shadow-[0_0_25px_rgba(255,212,0,0.5)] underline decoration-[#FFE95B]/40">
                PURE WOW!
              </span>
            </motion.h1>

            {/* SUPPORTING TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-[#BDBDBD] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              From classic chocolate waffles to irresistible Nutella and brownie creations, every bite brings a little more happiness.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#menu"
                className="w-full sm:w-auto bg-[#FFD400] hover:bg-[#FFE95B] text-[#080808] font-black text-base px-8 py-4 rounded-2xl shadow-[0_0_25px_rgba(255,212,0,0.4)] hover:shadow-[0_0_35px_rgba(255,212,0,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 uppercase tracking-wider"
              >
                <Utensils className="w-5 h-5" />
                <span>EXPLORE OUR MENU</span>
              </a>

              <a
                href="#branches"
                className="w-full sm:w-auto bg-[#171717] hover:bg-[#222222] text-white font-bold text-base px-8 py-4 rounded-2xl border border-[#333333] hover:border-[#FFD400] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 uppercase tracking-wider"
              >
                <MapPin className="w-5 h-5 text-[#FFD400]" />
                <span>FIND A BRANCH</span>
              </a>
            </motion.div>

            {/* SMALL DECORATIVE TEXT */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-[#888888]"
            >
              <WaffleSlice size={16} />
              <span>MADE WITH LOVE ❤️ • 6 OUTLETS</span>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: HERO WAFFLE ARTWORK */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* WOW STICKER */}
            <div className="absolute -top-6 right-2 sm:right-6 z-20">
              <WowSticker />
            </div>

            {/* MAIN FLOATING HERO IMAGE CONTAINER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[420px] aspect-square rounded-3xl p-3 bg-gradient-to-b from-[#FFD400]/30 via-[#171717] to-[#080808] border-2 border-[#FFD400]/50 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            >
              {/* Floating inner image wrapper */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full rounded-2xl overflow-hidden group"
              >
                <Image
                  src="/images/hero_waffle.jpg"
                  alt="WOW! WAFFLE Stack with chocolate drizzle and nuts"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-40" />
              </motion.div>

              {/* Floating Chocolate Drip & Sparkles around image */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-[#171717] border border-[#FFD400] px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                <span className="text-xl">🍫</span>
                <span className="text-xs font-black text-white uppercase">Loaded with Nutella & Brownies</span>
              </div>
            </motion.div>

          </div>

        </div>

      

      </div>
    </section>
  );
};
