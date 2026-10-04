import React from 'react';

export const WaffleSlice: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 48 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Triangular waffle slice / lolly shape */}
    <path
      d="M40 8 L72 68 C72 72 68 76 64 76 L16 76 C12 76 8 72 8 68 L40 8 Z"
      fill="#171717"
      stroke="#FFD400"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    {/* Internal waffle grid lines */}
    <path d="M 28 30 L 52 30" stroke="#FFD400" strokeWidth="3" strokeLinecap="round" />
    <path d="M 22 45 L 58 45" stroke="#FFD400" strokeWidth="3" strokeLinecap="round" />
    <path d="M 16 60 L 64 60" stroke="#FFD400" strokeWidth="3" strokeLinecap="round" />
    <path d="M 40 18 L 40 72" stroke="#FFD400" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
