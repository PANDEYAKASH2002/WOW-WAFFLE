'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Reveal } from '../animations/Reveal';
import { Sparkle } from '../illustrations/Sparkle';
import { WaffleSlice } from '../illustrations/WaffleSlice';
import { Utensils, Award, Store } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-[#171717] border border-[#FFD400]/40 px-4 py-1.5 rounded-full mb-2">
                <Sparkle size={16} color="#FFD400" />
                <span className="text-[#FFD400] text-xs font-black uppercase tracking-widest">
                  THE WOW! STORY
                </span>
              </div>

              <h2
                className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight"
                style={{ fontFamily: "'Bowlby One SC', 'Impact', sans-serif" }}
              >
                NOT JUST WAFFLES. <br />
                IT&apos;S A <span className="text-[#FFD400]">WOW! EXPERIENCE.</span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-[#BDBDBD] font-normal leading-relaxed">
                At <strong className="text-white">WOW! WAFFLE</strong>, we believe that the best moments are made a little sweeter. From classic chocolate waffles to indulgent premium creations, we&apos;re here to turn everyday cravings into delicious memories.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="p-5 rounded-2xl bg-[#141414] border-l-4 border-[#FFD400] space-y-2">
                <p className="text-sm font-bold text-white">
                  Expanding Sweet Smiles Across 8 Locations
                </p>
                <p className="text-xs text-[#BDBDBD] leading-relaxed">
                  With our confirmed outlet in Ankleshwar and 7 upcoming branches, WOW! WAFFLE is committed to serving freshly baked perfection with bold flavor and good vibes.
                </p>
              </div>
            </Reveal>

            {/* FEATURE HIGHLIGHT BADGES */}
            <Reveal direction="up" delay={0.5}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#111111] p-4 rounded-xl border border-[#262626] text-center">
                  <Store className="w-6 h-6 text-[#FFD400] mx-auto mb-1.5" />
                  <p className="text-xs font-black text-white uppercase">8 Outlets</p>
                  <p className="text-[10px] text-[#888888]">Growing Network</p>
                </div>
                <div className="bg-[#111111] p-4 rounded-xl border border-[#262626] text-center">
                  <Utensils className="w-6 h-6 text-[#FFD400] mx-auto mb-1.5" />
                  <p className="text-xs font-black text-white uppercase">25+ Items</p>
                  <p className="text-[10px] text-[#888888]">Waffles & Brownies</p>
                </div>
                <div className="bg-[#111111] p-4 rounded-xl border border-[#262626] text-center col-span-2 sm:col-span-1">
                  <Award className="w-6 h-6 text-[#FFD400] mx-auto mb-1.5" />
                  <p className="text-xs font-black text-white uppercase">Fresh Baked</p>
                  <p className="text-[10px] text-[#888888]">Made to Order</p>
                </div>
              </div>
            </Reveal>

            {/* EXPLORE MENU BUTTON */}
            <Reveal direction="up" delay={0.6}>
              <div className="pt-2">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-3 bg-[#FFD400] hover:bg-[#FFE95B] text-[#080808] font-black text-sm px-7 py-3.5 rounded-2xl shadow-[0_0_20px_rgba(255,212,0,0.4)] transition-all duration-300 hover:scale-105 uppercase tracking-wider"
                >
                  <WaffleSlice size={20} />
                  <span>EXPLORE OUR MENU</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: BRAND IMAGE */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[400px] aspect-square rounded-3xl p-3 bg-gradient-to-b from-[#171717] via-[#111111] to-[#FFD400]/20 border border-[#FFD400]/40 shadow-2xl overflow-hidden"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/fudge_brownie.jpg"
                  alt="WOW! WAFFLE Fudge Brownie Creation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#080808]/80 backdrop-blur-md p-3 rounded-xl border border-[#FFD400]/30 text-center">
                  <p className="text-xs font-black text-[#FFD400] uppercase tracking-wider">
                    FUDGE BROWNIES & NUTELLA WAFFLES
                  </p>
                  <p className="text-[11px] text-white">Pure indulgence in every single slice</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
