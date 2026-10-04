import React from 'react';

export const ChocolateDrip: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 1440 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-auto pointer-events-none ${className}`}
    preserveAspectRatio="none"
  >
    <path
      d="M0 0 H1440 V25 C1380 25 1360 80 1320 80 C1280 80 1260 25 1200 25 C1140 25 1110 100 1060 100 C1010 100 980 25 920 25 C860 25 840 70 800 70 C760 70 740 25 680 25 C620 25 590 115 540 115 C490 115 470 25 400 25 C340 25 320 65 280 65 C240 65 220 25 160 25 C100 25 80 90 40 90 C20 90 10 25 0 25 Z"
      fill="#FFD400"
      opacity="0.15"
    />
    <path
      d="M0 0 H1440 V15 C1400 15 1380 50 1350 50 C1320 50 1300 15 1240 15 C1180 15 1150 75 1100 75 C1050 75 1030 15 960 15 C900 15 880 55 840 55 C800 55 780 15 720 15 C660 15 630 85 580 85 C530 85 510 15 440 15 C380 15 360 45 320 45 C280 45 260 15 200 15 C140 15 120 60 70 60 C40 60 20 15 0 15 Z"
      fill="#FFD400"
      opacity="0.25"
    />
  </svg>
);
