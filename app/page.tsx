import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { MenuSection } from '@/components/sections/MenuSection';
import { BranchesSection } from '@/components/sections/BranchesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ConfettiSection } from '@/components/sections/ConfettiSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FloatingWaffles } from '@/components/animations/FloatingWaffles';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#080808] text-white overflow-hidden">
      {/* HEADER NAVIGATION */}
      <Header />

      {/* AMBIENT BACKGROUND ANIMATION */}
      <FloatingWaffles />

      {/* HERO SECTION (#home) */}
      <HeroSection />

      {/* MENU SECTION (#menu) */}
      <MenuSection />

      {/* BRANCHES LOCATOR SECTION (#branches) */}
      <BranchesSection />

      {/* ABOUT SECTION (#about) */}
      <AboutSection />

      {/* WHY CHOOSE US SECTION */}
      <WhyChooseUsSection />

      {/* CELEBRATION CONFETTI SECTION */}
      <ConfettiSection />

      {/* CONTACT SECTION (#contact) */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
