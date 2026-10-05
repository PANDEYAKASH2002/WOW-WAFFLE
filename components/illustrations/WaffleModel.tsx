'use client';

import React, { useState } from 'react';

interface IceCreamCartModelProps {
  className?: string;
  autoRotate?: boolean;
}

const IceCreamCartModel: React.FC<IceCreamCartModelProps> = ({
  className = '',
  autoRotate = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasBeenHovered, setHasBeenHovered] = useState(false);

  const baseUrl = 'https://sketchfab.com/models/229b1427990e45be991f8695463d3226/embed';

  // Build URL with ALL UI controls disabled + autostart enabled
  const params = new URLSearchParams({
    autospin: autoRotate ? '0.5' : '0',
    autostart: '1',              // ✅ Auto-start the animation immediately
    ui_theme: 'dark',
    ui_infos: '0',
    ui_watermark: '0',
    ui_watermark_link: '0',
    ui_annotations: '0',
    ui_stop: '0',
    ui_help: '0',
    ui_settings: '0',
    ui_inspector: '0',
    ui_vr: '0',
    ui_ar: '0',
    ui_fullscreen: '0',
    ui_loading: '0',
    ui_hint: '0',
    transparent: '1',
    preload: '1',
    dnt: '1',
  });

  const embedUrl = `${baseUrl}?${params.toString()}`;

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHasBeenHovered(true); // Once hovered, keep it loaded
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden rounded-2xl ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      {/* 
        Before first hover: Show a static thumbnail (no Play button from Sketchfab).
        The thumbnail is a screenshot from the Sketchfab model.
      */}
      {!hasBeenHovered && (
        <div className="absolute inset-0 z-10 bg-[#0a0a0a] flex items-center justify-center">
          {/* Replace this with your own thumbnail image if you have one */}
          <img
            src="https://media.sketchfab.com/models/229b1427990e45be991f8695463d3226/thumbnails/6d1b91e3e6b94e6a8f3e6d5f8f2e5c4c/1024x576.jpeg"
            alt="Ice cream cart preview"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback: hide broken image
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          {/* Subtle hint text (remove if you don't want it) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-widest">
            Hover to explore
          </div>
        </div>
      )}

      {/* 
        The iframe is ONLY rendered after the first hover.
        This prevents the Sketchfab "Play" button from ever being visible.
      */}
      {hasBeenHovered && (
        <iframe
          title="Ice cream cart"
          src={embedUrl}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          className="absolute inset-0 w-full h-full border-0"
        />
      )}
    </div>
  );
};

export default IceCreamCartModel;