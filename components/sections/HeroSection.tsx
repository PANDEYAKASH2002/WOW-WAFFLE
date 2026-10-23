'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useReducedMotion,
  MotionValue,
} from 'framer-motion';
import { Sparkle } from '../illustrations/Sparkle';
import { StarBurst } from '../illustrations/StarBurst';
import { WowSticker } from '../illustrations/WowSticker';
import { WaffleSlice } from '../illustrations/WaffleSlice';
import { WaffleStack } from '../illustrations/WaffleStack';
import { Utensils, MapPin } from 'lucide-react';

/* ------------------------------------------------------------------ */
/* EDIT THIS LIST: your waffle & brownie images (put files in /public) */
/* Transparent PNGs look best. Alternate waffle / brownie for variety. */
/* ------------------------------------------------------------------ */
const ORBIT_ITEMS = [
  { src: '/images/brownie-oreo.png', alt: 'oreo brownie' },
  { src: '/images/creamy-red-velvet.png', alt: 'red velvet' },
    { src: '/images/brownie-biscoff-fudge.png', alt: 'Chocolate waffle stack' },

  { src: '/images/choco-loaded.png', alt: 'Loaded waffle' },
  { src: '/images/triple-chocolate-brownie.png', alt: 'Chocolate brownie' },
    { src: '/images/kit-kat-nutella.png', alt: 'Nutella waffle' },

];

const ORBIT_SECONDS = 36; // time for one full lap (higher = slower)

/* Vertical anchor of the orbit center (smaller % = higher up) */
const ORBIT_TOP = '42%';

/* ------------------------------------------------------------------ */
/* One item travelling around the horizontal ellipse                   */
/* ------------------------------------------------------------------ */
type OrbitItemProps = {
  src: string;
  alt: string;
  index: number;
  total: number;
  angle: MotionValue<number>;
  rx: number;
  ry: number;
  size: number;
};

const OrbitItem: React.FC<OrbitItemProps> = ({ src, alt, index, total, angle, rx, ry, size }) => {
  const offset = (index / total) * 360;
  const rad = (a: number) => ((a + offset) * Math.PI) / 180;

  // Horizontal circular motion: wide on X, shallow on Y
  const x = useTransform(angle, (a) => Math.cos(rad(a)) * rx);
  const y = useTransform(angle, (a) => Math.sin(rad(a)) * ry);

  // Depth: items at the front (bottom of the ellipse) are bigger and brighter
  const depth = useTransform(angle, (a) => (Math.sin(rad(a)) + 1) / 2); // 0 (back) → 1 (front)
  const scale = useTransform(depth, [0, 1], [0.6, 1.05]);
  const opacity = useTransform(depth, [0, 1], [0.45, 1]);
  const zIndex = useTransform(depth, (d) => Math.round(d * 100));

  return (
    <motion.div
      className="absolute left-1/2 rounded-2xl overflow-hidden border-2 border-[#FFD400]/50 bg-[#171717] shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
      style={{
        top: ORBIT_TOP,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        x,
        y,
        scale,
        opacity,
        zIndex,
      }}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="240px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent" />
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/* The orbit container                                                 */
/* ------------------------------------------------------------------ */
const WaffleOrbit: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(480);
  const angle = useMotionValue(0);

  // Measure container so the orbit scales on mobile
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    setWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  // Slow, endless rotation
  useEffect(() => {
    if (reduceMotion) return;
    const controls = animate(angle, 360, {
      duration: ORBIT_SECONDS,
      ease: 'linear',
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [angle, reduceMotion]);

  // Smaller images + wider radius = clear gaps between items
  const size = width * 0.34;
  const rx = width * 0.40;
  const ry = width * 0.18;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[560px] mx-auto"
      style={{ height: width * 0.88 }}
      aria-label="Waffles and brownies rotating"
    >
      {/* Glow under the orbit */}
      <div
        className="absolute left-1/2 w-[85%] h-[45%] bg-[#FFD400]/15 blur-[70px] rounded-full pointer-events-none"
        style={{ top: ORBIT_TOP, transform: 'translate(-50%, -50%)' }}
      />

      {/* Orbit track (the horizontal circle) */}
      <div
        className="absolute left-1/2 rounded-[50%] border border-dashed border-[#FFD400]/30 pointer-events-none"
        style={{
          top: ORBIT_TOP,
          transform: 'translate(-50%, -50%)',
          width: rx * 2,
          height: ry * 2,
        }}
      />

      {ORBIT_ITEMS.map((item, i) => (
        <OrbitItem
          key={item.src}
          {...item}
          index={i}
          total={ORBIT_ITEMS.length}
          angle={angle}
          rx={rx}
          ry={ry}
          size={size}
        />
      ))}

      {/* Caption badge */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-[200] bg-[#171717] border border-[#FFD400] px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 whitespace-nowrap">
        <span className="text-xl">🍫</span>
        <span className="text-xs font-black text-white uppercase">Loaded with Nutella & Brownies</span>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Hero section                                                        */
/* ------------------------------------------------------------------ */
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
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* BADGE */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#171717] border border-[#FFD400]/40 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,212,0,0.2)]"
            >
              <Sparkle size={16} color="#FFD400" />
              <span className="text-[#FFD400] text-xs sm:text-sm font-extrabold uppercase tracking-widest">
                FRESHLY MADE. CRAZY DELICIOUS.
              </span>
            </motion.div> */}

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

          {/* RIGHT COLUMN: ROTATING WAFFLES & BROWNIES */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="absolute -top-4 right-2 sm:right-6 z-[300]">
              <WowSticker />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full"
            >
              <WaffleOrbit />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};