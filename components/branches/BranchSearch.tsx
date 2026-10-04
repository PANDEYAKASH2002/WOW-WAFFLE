'use client';

import React from 'react';
import { Search } from 'lucide-react';

interface BranchSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const BranchSearch: React.FC<BranchSearchProps> = ({
  searchTerm,
  onSearchChange
}) => {
  return (
    <div className="relative max-w-md mx-auto mb-10">
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by branch name, city, or address..."
          className="w-full bg-[#171717] text-white text-sm font-semibold pl-11 pr-4 py-3.5 rounded-full border border-[#333333] focus:border-[#FFD400] focus:ring-1 focus:ring-[#FFD400] outline-none transition-all placeholder:text-[#666666]"
        />
        <Search className="w-5 h-5 text-[#FFD400] absolute left-4 pointer-events-none" />
      </div>
    </div>
  );
};
