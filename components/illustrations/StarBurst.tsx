import React from 'react';

export const StarBurst: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 48 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M30 0 L34 20 L50 6 L40 24 L60 30 L40 36 L50 54 L34 40 L30 60 L26 40 L10 54 L20 36 L0 30 L20 24 L10 6 L26 20 Z"
      fill="#FFD400"
      stroke="#080808"
      strokeWidth="2"
    />
  </svg>
);
