'use client';

import React from 'react';
import { Branch } from '@/types/branch';
import { MapPin, Navigation, Clock, CheckCircle2 } from 'lucide-react';

interface BranchCardProps {
  branch: Branch;
}

export const BranchCard: React.FC<BranchCardProps> = ({ branch }) => {
  return (
    <div
      className={`relative rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between h-full ${
        branch.isConfirmed
          ? 'bg-[#171717] border-[#FFD400]/70 shadow-[0_10px_30px_rgba(255,212,0,0.15)] hover:border-[#FFD400]'
          : 'bg-[#111111] border-[#262626] opacity-75 hover:opacity-100 hover:border-[#444444]'
      }`}
    >
      {/* BADGES */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="text-xs font-black text-[#FFD400] bg-[#FFD400]/10 px-3 py-1 rounded-full border border-[#FFD400]/20 uppercase tracking-widest">
          {branch.code}
        </span>

        {branch.isConfirmed ? (
          <span className="bg-[#FFD400] text-[#080808] text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-[0_0_10px_rgba(255,212,0,0.5)]">
            <CheckCircle2 className="w-3.5 h-3.5 fill-[#080808]" />
            <span>CURRENT OUTLET</span>
          </span>
        ) : (
          <span className="bg-[#222222] text-[#888888] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            COMING SOON
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="space-y-3">
        <h3 className="text-xl font-extrabold text-white tracking-wide">
          {branch.name}
        </h3>

        {branch.tagline && (
          <p className="text-xs font-bold text-[#FFD400]/80">
            {branch.tagline}
          </p>
        )}

        {branch.isConfirmed && branch.address ? (
          <div className="space-y-2 pt-2 text-xs text-[#BDBDBD]">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#FFD400] shrink-0 mt-0.5" />
              <p className="leading-relaxed">{branch.address}</p>
            </div>
            {branch.hours && (
              <div className="flex items-center gap-2.5 text-[#888888]">
                <Clock className="w-4 h-4 text-[#FFD400] shrink-0" />
                <span>{branch.hours}</span>
              </div>
            )}
          </div>
        ) : (
          <p className="text-xs text-[#666666] pt-2 italic">
            Official address and location details will be announced soon!
          </p>
        )}
      </div>

      {/* FOOTER BUTTON */}
      <div className="pt-6 mt-4 border-t border-[#222222]">
        {branch.isConfirmed && branch.mapsUrl ? (
          <a
            href={branch.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#FFD400] hover:bg-[#FFE95B] text-[#080808] font-black text-xs py-3 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,212,0,0.5)]"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </a>
        ) : (
          <button
            disabled
            className="w-full bg-[#1c1c1c] text-[#555555] font-bold text-xs py-3 rounded-xl uppercase tracking-wider cursor-not-allowed border border-[#2a2a2a]"
          >
            Directions Unavailable
          </button>
        )}
      </div>
    </div>
  );
};
