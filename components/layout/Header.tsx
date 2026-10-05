'use client';

import React, { useState, useEffect } from 'react';
import { WowWaffleLogo } from '../illustrations/WowWaffleLogo';
import { WaffleSlice } from '../illustrations/WaffleSlice';
import { ConfettiButton } from '../animations/ConfettiButton';
import { Menu, X, MapPin } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Branches', href: '#branches' },
  { label: 'About Us', href: '#about' },
  // { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/90 backdrop-blur-md py-3 border-b border-[#FFD400]/30 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      {/* relative so the logo can be absolutely centered on mobile */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-[40px]">
        {/* LOGO: centered on mobile/tablet, normal left position on desktop */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="absolute left-1/2 -translate-x-1/2 lg:static lg:left-auto lg:translate-x-0 flex items-center gap-2 group"
          aria-label="WOW! WAFFLE Home"
        >
          <img
            src="/images/waffle-logo.png"
            alt="WOW! WAFFLE Logo"
            className="h-12 w-auto"
          />
          {/* <WowWaffleLogo size="sm" /> */}
          <WaffleSlice
            size={22}
            className="hidden lg:block text-[#FFD400] opacity-80 group-hover:rotate-12 transition-transform duration-300"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center space-x-1 bg-[#111111]/80 px-6 py-2 rounded-full border border-[#333333]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 text-sm font-bold tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-[#FFD400]' : 'text-[#BDBDBD] hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FFD400] rounded-full shadow-[0_0_8px_#FFD400]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT SIDE: CTA (desktop) + HAMBURGER (mobile) */}
        {/* ml-auto keeps this on the right even though the logo is out of flow on mobile */}
        <div className="flex items-center gap-3 ml-auto lg:ml-0">
          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <ConfettiButton label="🎉 Confetti" variant="nav" /> */}
            <a
              href="#branches"
              onClick={(e) => handleNavClick(e, '#branches')}
              className="flex items-center gap-2 bg-[#171717] hover:bg-[#FFD400] text-white hover:text-[#080808] border border-[#FFD400]/40 hover:border-[#FFD400] px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md group"
            >
              <MapPin className="w-4 h-4 text-[#FFD400] group-hover:text-[#080808] transition-colors" />
              <span>Find Nearest Outlet</span>
            </a>
          </div>

          {/* MOBILE HAMBURGER (right side) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-[#171717] text-[#FFD400] border border-[#333333] hover:border-[#FFD400] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080808]/95 backdrop-blur-xl border-b border-[#FFD400]/30 px-6 py-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-lg font-black tracking-wider py-2 border-b border-[#222222] flex items-center justify-between ${
                    isActive ? 'text-[#FFD400]' : 'text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FFD400]" />}
                </a>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#branches"
                onClick={(e) => handleNavClick(e, '#branches')}
                className="w-full text-center bg-[#FFD400] text-[#080808] font-black text-sm py-3 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Find Nearest Outlet</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};