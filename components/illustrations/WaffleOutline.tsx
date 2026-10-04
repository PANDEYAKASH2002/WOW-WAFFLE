import React from 'react';

export const WaffleOutline: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 64 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="10" y="10" width="80" height="80" rx="18" fill="none" stroke="#FFD400" strokeWidth="4" strokeDasharray="6 6" />
    <path d="M 10 36.6 H 90 M 10 63.3 H 90 M 36.6 10 V 90 M 63.3 10 V 90" stroke="#FFD400" strokeWidth="3" opacity="0.8" />
  </svg>
);
