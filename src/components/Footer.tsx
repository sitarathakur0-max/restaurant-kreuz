import React from 'react';
import { PageId } from '../types';
import { BUSINESS } from '../data/business';
import { SwissCross } from './SwissCrossPattern';
import { Phone, MapPin, Navigation, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenCallModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCallModal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B2E3B] text-[#E8F0F5] border-t-4 border-[#9B2424] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Quadrant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2F5067]">
          {/* Column 1: Identity */}
          <div className="lg:pr-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#9B2424] text-white flex items-center justify-center">
                <SwissCross size={16} color="#FFFFFF" />
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                {BUSINESS.name}
              </span>
            </div>
            <p className="text-xs text-[#C7B9A5] leading-relaxed mb-4">
              {BUSINESS.description} in the Bucheggberg countryside of Gossliwil, Canton of Solothurn, Switzerland.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] text-[#E8F0F5] bg-[#243E4F] px-3 py-1 border border-[#2F5067]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Welcoming Village Hospitality</span>
            </div>
          </div>

          {/* Column 2: Exact Contact Details */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <SwissCross size={10} color="#9B2424" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C7B9A5]">
                Direct Contact
              </span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-[#B52C2C] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#C7B9A5]">Telephone</div>
                  <a
                    href={BUSINESS.phoneHref}
                    className="font-serif text-base text-white hover:text-[#B52C2C] transition-colors"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#B52C2C] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#C7B9A5]">Address</div>
                  <span className="text-white leading-relaxed block">
                    {BUSINESS.address}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <SwissCross size={10} color="#9B2424" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C7B9A5]">
                Navigation
              </span>
            </div>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#B52C2C] transition-colors text-left"
                >
                  01 · Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#B52C2C] transition-colors text-left"
                >
                  02 · About Restaurant Kreuz
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('dining')}
                  className="hover:text-[#B52C2C] transition-colors text-left"
                >
                  03 · Village Dining Culture
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#B52C2C] transition-colors text-left"
                >
                  04 · Location, Route & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Reservations Policy */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <SwissCross size={10} color="#9B2424" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C7B9A5]">
                Village Reservations
              </span>
            </div>
            <p className="text-xs text-[#C7B9A5] leading-relaxed mb-4">
              To inquire about table availability, today’s offerings, or group visits, please telephone the restaurant directly.
            </p>
            <button
              onClick={onOpenCallModal}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#9B2424] hover:bg-[#821D1D] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Phone size={13} />
              <span>Call 032 661 18 28</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#C7B9A5]">
          <div className="flex items-center gap-2">
            <SwissCross size={10} color="#9B2424" />
            <span>
              &copy; {new Date().getFullYear()} {BUSINESS.name}. {BUSINESS.description}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Category: {BUSINESS.category}</span>
            <span>·</span>
            <span>Oberwilstrasse 35, 4579 Gossliwil</span>
            <span>·</span>
            <span>English Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
