import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const WowWaffleLogo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true 
}) => {
  const sizeMap = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
    xl: 'h-28'
  };

  return (
    <div className={`inline-flex items-center gap-2 group cursor-pointer ${className}`}>
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} w-auto drop-shadow-[0_4px_16px_rgba(255,212,0,0.3)] transition-transform duration-300 group-hover:scale-105`}
      >
        <defs>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.8"/>
          </filter>
          <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFE95B" />
            <stop offset="100%" stopColor="#FFC700" />
          </linearGradient>
          <linearGradient id="waffleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5B041" />
            <stop offset="100%" stopColor="#D35400" />
          </linearGradient>
          <linearGradient id="chocoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A235A" />
            <stop offset="50%" stopColor="#2C1609" />
            <stop offset="100%" stopColor="#1A0D05" />
          </linearGradient>
        </defs>

        {/* TOP WORD: WOW! */}
        {showText && (
          <g filter="url(#shadow)" className="animate-pulse-subtle">
            {/* Outline / Stroke Background */}
            <text
              x="160"
              y="68"
              textAnchor="middle"
              fill="#FFD400"
              stroke="#080808"
              strokeWidth="22"
              strokeLinejoin="round"
              fontFamily="'Bowlby One SC', 'Impact', 'Arial Black', sans-serif"
              fontSize="68"
              fontWeight="900"
              letterSpacing="2"
            >
              WOW!
            </text>
            {/* Foreground Fill */}
            <text
              x="160"
              y="68"
              textAnchor="middle"
              fill="url(#yellowGrad)"
              fontFamily="'Bowlby One SC', 'Impact', 'Arial Black', sans-serif"
              fontSize="68"
              fontWeight="900"
              letterSpacing="2"
            >
              WOW!
            </text>
          </g>
        )}

        {/* CENTER WAFFLE ICON & CHOCOLATE DRIP */}
        <g transform="translate(100, 72) scale(0.65)">
          {/* Base Waffle Outline */}
          <path
            d="M 20 50 L 90 15 L 160 50 L 90 85 Z"
            fill="#D68910"
            stroke="#080808"
            strokeWidth="10"
            strokeLinejoin="round"
          />
          {/* Top Waffle Grid Face */}
          <path
            d="M 20 45 L 90 10 L 160 45 L 90 80 Z"
            fill="url(#waffleGrad)"
            stroke="#080808"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          {/* Grid lines top waffle */}
          <path d="M 40 35 L 110 70 M 60 25 L 130 60 M 80 15 L 150 50" stroke="#7E5109" strokeWidth="4" />
          <path d="M 40 55 L 110 20 M 60 65 L 130 30 M 80 75 L 150 40" stroke="#7E5109" strokeWidth="4" />

          {/* Bottom Waffle Layer */}
          <path
            d="M 20 70 L 90 105 L 160 70 L 90 35 Z"
            fill="#B9770E"
            stroke="#080808"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          {/* Side depth 3D */}
          <path d="M 20 45 L 20 70 L 90 105 L 90 80 Z" fill="#9C5A0C" stroke="#080808" strokeWidth="6" />
          <path d="M 160 45 L 160 70 L 90 105 L 90 80 Z" fill="#7E470A" stroke="#080808" strokeWidth="6" />

          {/* Rich Chocolate Syrup Drips */}
          <path
            d="M 25 48 C 30 75, 40 85, 45 60 C 50 90, 65 95, 75 58 C 85 80, 105 100, 115 65 C 125 85, 140 80, 155 48 C 160 70, 140 100, 115 105 C 80 110, 45 95, 25 48 Z"
            fill="url(#chocoGrad)"
            stroke="#080808"
            strokeWidth="5"
          />
          {/* Glossy Chocolate Highlights */}
          <ellipse cx="48" cy="72" rx="4" ry="7" fill="#FFFFFF" opacity="0.6" transform="rotate(-15 48 72)" />
          <ellipse cx="78" cy="78" rx="5" ry="10" fill="#FFFFFF" opacity="0.6" transform="rotate(-10 78 78)" />
          <ellipse cx="118" cy="80" rx="4" ry="8" fill="#FFFFFF" opacity="0.6" transform="rotate(15 118 80)" />
        </g>

        {/* BOTTOM WORD: WAFFLE */}
        {showText && (
          <g filter="url(#shadow)">
            {/* Outline / Stroke Background */}
            <text
              x="160"
              y="192"
              textAnchor="middle"
              fill="#FFD400"
              stroke="#080808"
              strokeWidth="20"
              strokeLinejoin="round"
              fontFamily="'Bowlby One SC', 'Impact', 'Arial Black', sans-serif"
              fontSize="56"
              fontWeight="900"
              letterSpacing="4"
            >
              WAFFLE
            </text>
            {/* Foreground Fill */}
            <text
              x="160"
              y="192"
              textAnchor="middle"
              fill="url(#yellowGrad)"
              fontFamily="'Bowlby One SC', 'Impact', 'Arial Black', sans-serif"
              fontSize="56"
              fontWeight="900"
              letterSpacing="4"
            >
              WAFFLE
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
