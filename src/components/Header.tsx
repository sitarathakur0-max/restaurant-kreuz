import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS } from '../data/business';
import { SwissCross } from './SwissCrossPattern';
import { Phone, Menu, X, MapPin } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenCallModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenCallModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; number: string }[] = [
    { id: 'home', label: 'Home', number: '01' },
    { id: 'about', label: 'About', number: '02' },
    { id: 'dining', label: 'Dining', number: '03' },
    { id: 'contact', label: 'Contact & Visit', number: '04' }
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b-2 border-[#2F5067] transition-all">
      {/* Top micro-bar: Location & Phone */}
      <div className="bg-[#1B2E3B] text-[#E8F0F5] text-xs py-1.5 px-4 sm:px-8 border-b border-[#2F5067]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-3.5 h-3.5 bg-[#9B2424] text-white">
              <SwissCross size={9} color="#FFFFFF" />
            </span>
            <span className="tracking-wider uppercase text-[11px] font-medium text-[#E8F0F5]">
              Gossliwil · Canton of Solothurn · Switzerland
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden sm:inline text-[#C7B9A5]">Oberwilstrasse 35, 4579 Gossliwil</span>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#C7B9A5] font-semibold transition-colors"
            >
              <Phone size={11} className="text-[#B52C2C]" />
              <span>{BUSINESS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Brand identity */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group focus:outline-none"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#9B2424] text-white flex items-center justify-center shadow-sm group-hover:bg-[#821D1D] transition-colors">
              <SwissCross size={18} color="#FFFFFF" />
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#1B2E3B] tracking-tight group-hover:text-[#9B2424] transition-colors">
                {BUSINESS.name}
              </span>
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium text-[#644430]">
                Gossliwil · Village Restaurant
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-xs uppercase tracking-[0.18em] font-semibold transition-all relative ${
                  isActive
                    ? 'text-[#9B2424] bg-[#FCE8E8]/50 border-b-2 border-[#9B2424]'
                    : 'text-[#243E4F] hover:text-[#9B2424] hover:bg-[#F4EFEA]'
                }`}
              >
                <span className="text-[9px] text-[#644430] mr-1 opacity-70">
                  {item.number}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCallModal}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#2F5067] hover:bg-[#1B2E3B] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            <Phone size={13} />
            <span>Call Restaurant</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#1B2E3B] hover:bg-[#ECE4DA] border border-[#DFD5C7]"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#DFD5C7] bg-[#FAF7F2] px-4 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-2 mb-6">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 text-left border ${
                    isActive
                      ? 'bg-[#1B2E3B] text-white border-[#1B2E3B]'
                      : 'bg-white text-[#1B2E3B] border-[#DFD5C7] hover:bg-[#F4EFEA]'
                  }`}
                >
                  <span className="text-sm font-serif font-bold uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className={`text-xs ${isActive ? 'text-[#C7B9A5]' : 'text-[#644430]'}`}>
                    +{item.number}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#DFD5C7] space-y-3">
            <a
              href={BUSINESS.phoneHref}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#9B2424] text-white font-medium text-sm tracking-wider uppercase"
            >
              <Phone size={16} />
              <span>Call {BUSINESS.phone}</span>
            </a>

            <div className="flex items-center justify-center gap-1.5 text-xs text-[#644430]">
              <MapPin size={13} className="text-[#9B2424]" />
              <span>{BUSINESS.address}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
