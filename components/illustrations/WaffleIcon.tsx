import React from 'react';

interface SVGProps {
  className?: string;
  size?: number;
  color?: string;
}

export const WaffleIcon: React.FC<SVGProps> = ({ 
  className = '', 
  size = 40,
  color = '#FFD400' 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="6" y="6" width="52" height="52" rx="12" fill="#171717" stroke={color} strokeWidth="4" />
      {/* Grid cells */}
      <rect x="14" y="14" width="14" height="14" rx="4" fill="#080808" stroke={color} strokeWidth="2" />
      <rect x="36" y="14" width="14" height="14" rx="4" fill="#080808" stroke={color} strokeWidth="2" />
      <rect x="14" y="36" width="14" height="14" rx="4" fill="#080808" stroke={color} strokeWidth="2" />
      <rect x="36" y="36" width="14" height="14" rx="4" fill="#080808" stroke={color} strokeWidth="2" />
    </svg>
  );
};
