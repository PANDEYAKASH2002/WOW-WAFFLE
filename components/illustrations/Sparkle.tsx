import React from 'react';

export const Sparkle: React.FC<{ className?: string; size?: number; color?: string }> = ({ 
  className = '', 
  size = 24,
  color = '#FFD400' 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 0 C12 6.627 6.627 12 0 12 C6.627 12 12 17.373 12 24 C12 17.373 17.373 12 24 12 C17.373 12 12 6.627 12 0 Z"
      fill={color}
    />
  </svg>
);
