import React from 'react';

export const WaffleStack: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 80 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Bottom Waffle */}
    <rect x="15" y="45" width="70" height="40" rx="10" fill="#171717" stroke="#FFD400" strokeWidth="4" />
    <path d="M 25 55 H 75 M 25 65 H 75 M 25 75 H 75 M 35 45 V 85 M 50 45 V 85 M 65 45 V 85" stroke="#FFE95B" strokeWidth="2" opacity="0.6" />
    
    {/* Top Waffle slightly offset */}
    <rect x="10" y="15" width="70" height="40" rx="10" fill="#111111" stroke="#FFD400" strokeWidth="4" />
    <path d="M 20 25 H 70 M 20 35 H 70 M 20 45 H 70 M 30 15 V 55 M 45 15 V 55 M 60 15 V 55" stroke="#FFD400" strokeWidth="2" />
    
    {/* Butter Cube on Top */}
    <rect x="38" y="8" width="16" height="14" rx="3" fill="#FFD400" stroke="#080808" strokeWidth="2" />
  </svg>
);
