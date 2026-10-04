'use client';

import React from 'react';
import { WowWaffleLogo } from '../illustrations/WowWaffleLogo';
import { WaffleSlice } from '../illustrations/WaffleSlice';
import { WaffleOutline } from '../illustrations/WaffleOutline';
import { ArrowUp, MapPin, Heart, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080808] border-t-2 border-[#FFD400]/40 text-[#BDBDBD] pt-16 pb-8 overflow-hidden">
      {/* Decorative Waffle SVGs */}
      <div className="absolute top-4 right-10 opacity-15 pointer-events-none hidden md:block">
       
      </div>
      <div className="absolute bottom-6 left-6 opacity-10 pointer-events-none hidden md:block">
        <WaffleSlice size={90} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#222222]">
          
          {/* COLUMN 1: BRAND INFO */}
          <div className="space-y-4">
          <img   src="/images/waffle-logo.png" 
    alt="WOW! WAFFLE Logo" 
    className="h-14 w-auto">
       
       </img> 
            <p className="text-sm leading-relaxed text-[#BDBDBD] font-medium pt-2">
              WOW! WAFFLE — GOOD VIBES. GREAT WAFFLES. PURE WOW!
            </p>
            <p className="text-xs text-[#888888]">
              Crafting golden crispy waffles, hot fudge brownies, and sweet smiles across 8 outlets in India.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#FFD400]">
              <Clock className="w-4 h-4" />
              <span>ENJOY NAVRATRI WITH US : 9:00 PM – 4:00 AM</span>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 className="text-white font-black text-lg tracking-wider mb-4 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <a href="#home" className="hover:text-[#FFD400] transition-colors flex items-center gap-2">
                  <span>›</span> Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FFD400] transition-colors flex items-center gap-2">
                  <span>›</span> Our Menu
                </a>
              </li>
              <li>
                <a href="#branches" className="hover:text-[#FFD400] transition-colors flex items-center gap-2">
                  <span>›</span> Outlet Directory (8 Outlets)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FFD400] transition-colors flex items-center gap-2">
                  <span>›</span> About WOW! WAFFLE
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FFD400] transition-colors flex items-center gap-2">
                  <span>›</span> Contact & Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: MENU CATEGORIES */}
          <div>
            <h4 className="text-white font-black text-lg tracking-wider mb-4 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
              Waffle Categories
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li className="hover:text-[#FFD400] cursor-pointer">Classic Waffles (Mini & Lolly)</li>
              <li className="hover:text-[#FFD400] cursor-pointer">Special Chocolate Creations</li>
              <li className="hover:text-[#FFD400] cursor-pointer">Kid&apos;s Special Sprinkles</li>
              <li className="hover:text-[#FFD400] cursor-pointer">Premium Nutella & Biscoff</li>
              <li className="hover:text-[#FFD400] cursor-pointer">Hot Fudge Brownies</li>
            </ul>
          </div>

          {/* COLUMN 4: CONFIRMED OUTLET */}
          <div>
            <h4 className="text-white font-black text-lg tracking-wider mb-4 uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
              Confirmed Outlet
            </h4>
            <div className="bg-[#141414] p-4 rounded-xl border border-[#333333] space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#FFD400] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold text-sm">WOW! WAFFLE — Ankleshwar</p>
                  <p className="text-xs text-[#BDBDBD] pt-1">Shop No. 3, Garden City, Ankleshwar, Bharuch, Gujarat, India.</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/Garden+City+Cricket+Ground+%26+Garba+Ground/@21.6047194,73.049984,17z/data=!4m15!1m8!3m7!1s0x3be0225adc5a0f5f:0x1ea3182a9da7bba5!2sJ333%2B4VF,+3,+Garden+City,+Give,+Gujarat+393001!3b1!8m2!3d21.6028404!4d73.054758!16s%2Fg%2F11wfy2rthk!3m5!1s0x3be0224ff960b8e5:0xc151c1bb02ca81c0!8m2!3d21.6047184!4d73.0525577!16s%2Fg%2F11c1tly79q?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-xs font-black text-[#080808] bg-[#FFD400] hover:bg-[#FFE95B] px-3 py-1.5 rounded-lg transition-colors"
              >
                Get Directions ➔
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & BACK TO TOP */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p className="flex items-center gap-1.5 text-center md:text-left" suppressHydrationWarning>
            © {new Date().getFullYear()} WOW! WAFFLE. All rights reserved. Crafted with{' '}
            <Heart className="w-3.5 h-3.5 text-[#FFD400] fill-[#FFD400] inline" /> for waffle lovers.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-[#171717] hover:bg-[#FFD400] text-white hover:text-[#080808] border border-[#333333] hover:border-[#FFD400] px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 shadow-md group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
