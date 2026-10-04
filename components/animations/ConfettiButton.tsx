'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiButtonProps {
  label?: string;
  className?: string;
  variant?: 'nav' | 'hero' | 'section';
  onTrigger?: () => void;
}

export const ConfettiButton: React.FC<ConfettiButtonProps> = ({
  label = '🎉 Confetti',
  className = '',
  variant = 'nav',
  onTrigger
}) => {
  const [toastVisible, setToastVisible] = useState(false);

  const triggerConfetti = () => {
    // Fire burst of yellow, white, black confetti
    const colors = ['#FFD400', '#FFE95B', '#FFFFFF', '#080808'];

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors,
      disableForReducedMotion: true
    });

    setToastVisible(true);
    if (onTrigger) onTrigger();

    setTimeout(() => {
      setToastVisible(false);
    }, 2500);
  };

  const variantStyles = {
    nav: 'bg-[#FFD400] hover:bg-[#FFE95B] text-[#080808] text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(255,212,0,0.4)] hover:shadow-[0_0_22px_rgba(255,212,0,0.7)] active:scale-95',
    hero: 'bg-[#FFD400] hover:bg-[#FFE95B] text-[#080808] font-black text-lg px-8 py-4 rounded-2xl shadow-[0_0_25px_rgba(255,212,0,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3',
    section: 'bg-gradient-to-r from-[#FFD400] to-[#FFE95B] text-[#080808] font-black text-xl px-10 py-5 rounded-2xl shadow-[0_10px_30px_rgba(255,212,0,0.5)] hover:shadow-[0_15px_40px_rgba(255,212,0,0.8)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3'
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={triggerConfetti}
        className={`${variantStyles[variant]} ${className}`}
        aria-label="Trigger celebration confetti"
      >
        <span>{label}</span>
      </button>

      {toastVisible && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#FFD400] text-[#080808] font-black text-base md:text-lg px-6 py-3 rounded-full border-2 border-black shadow-[0_10px_30px_rgba(0,0,0,0.8)] animate-bounce flex items-center gap-2">
          <span>✨</span>
          <span>LET THE WOW BEGIN!</span>
          <span>🎉</span>
        </div>
      )}
    </div>
  );
};
