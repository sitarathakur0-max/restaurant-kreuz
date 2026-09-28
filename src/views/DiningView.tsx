import React from 'react';
import { PageId } from '../types';
import { BUSINESS } from '../data/business';
import { SwissCross, SectionBadge, EditorialDivider } from '../components/SwissCrossPattern';
import { Phone, Utensils, Users, Info, Calendar, Clock, ArrowRight, HeartHandshake } from 'lucide-react';

interface DiningViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCallModal: (reason?: string) => void;
}

export const DiningView: React.FC<DiningViewProps> = ({ onNavigate, onOpenCallModal }) => {
  return (
    <div className="w-full bg-[#FAF7F2]">
      {/* Editorial Header */}
      <section className="bg-[#1B2E3B] text-white py-14 sm:py-20 border-b-2 border-[#9B2424]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center w-5 h-5 bg-[#9B2424] text-white">
              <SwissCross size={11} color="#FFFFFF" />
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C7B9A5] font-semibold">
              Village Culinary Culture
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white mb-4">
            Dining at Restaurant Kreuz
          </h1>

          <div className="h-1 w-20 bg-[#9B2424] mb-6" />

          <p className="text-base sm:text-xl font-serif italic text-[#C7B9A5] leading-relaxed max-w-2xl">
            A traditional Swiss village dining experience founded upon wholesome regional hospitality, comforting dishes, and unhurried meals.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 sm:py-20 border-b border-[#DFD5C7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Section 1: The Swiss Country Dining Approach */}
          <div>
            <SectionBadge number="01" title="Culinary Philosophy" />
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1B2E3B] mb-4">
              The Swiss Village Dining Tradition
            </h2>
            <div className="prose text-[#4E3424] leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                In the Swiss countryside, dining is a cornerstone of daily social life. Rather than overly complex gourmet posturing, village dining focuses on hearty satisfaction, dependable warmth, and recipes rooted in Swiss culinary heritage.
              </p>
              <p>
                At <strong>Restaurant Kreuz</strong> in Gossliwil, meals are prepared with care for guests who value genuine, time-honored food. Dining here is an unhurried affair where tables are spacious, conversation is encouraged, and hospitality feels personal.
              </p>
            </div>
          </div>

          {/* Section 2: Why Inquiring by Phone is Best (No fictional menu) */}
          <div className="bg-[#E8F0F5] border-2 border-[#2F5067] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#9B2424] text-white flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1B2E3B]">
                  Inquiring About Current Offerings & Daily Selections
                </h3>
                <p className="text-sm text-[#4E3424] leading-relaxed">
                  As an authentic Swiss village restaurant, selections frequently follow market availability and daily culinary rhythm. Rather than publishing a static or artificial menu online, we invite our guests to contact the restaurant directly.
                </p>
                <p className="text-sm text-[#4E3424] leading-relaxed">
                  When you call <strong>032 661 18 28</strong>, our staff will gladly inform you of the day’s dining options, discuss any dietary requirements, and reserve your table in person.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenCallModal('Ask About Daily Dining & Selections')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#9B2424] hover:bg-[#821D1D] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
                  >
                    <Phone size={15} />
                    <span>Call to Ask About Dining: 032 661 18 28</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <EditorialDivider label="The Atmosphere" />

          {/* Section 3: Dining Room & Ambiance */}
          <div>
            <SectionBadge number="02" title="The Room & Ambiance" />
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1B2E3B] mb-4">
              A Comfortable Countryside Ambiance
            </h2>
            <p className="text-sm sm:text-base text-[#4E3424] leading-relaxed mb-6">
              The dining atmosphere at Restaurant Kreuz reflects the rural calm of Gossliwil. Designed for ease and neighborly comfort, the interior welcomes both small private tables and shared gatherings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-[#F4EFEA] p-5 border border-[#DFD5C7]">
                <h4 className="font-serif font-bold text-base text-[#1B2E3B] mb-2">
                  Natural Wood Accents
                </h4>
                <p className="text-xs text-[#4E3424] leading-relaxed">
                  Timber surfaces and traditional Swiss tavern aesthetics create visual and acoustic warmth, allowing pleasant conversation.
                </p>
              </div>

              <div className="bg-[#F4EFEA] p-5 border border-[#DFD5C7]">
                <h4 className="font-serif font-bold text-base text-[#1B2E3B] mb-2">
                  Spacious Seating
                </h4>
                <p className="text-xs text-[#4E3424] leading-relaxed">
                  Generous table spacing gives guests privacy while retaining the friendly communal atmosphere of a village inn.
                </p>
              </div>

              <div className="bg-[#F4EFEA] p-5 border border-[#DFD5C7]">
                <h4 className="font-serif font-bold text-base text-[#1B2E3B] mb-2">
                  Unhurried Tempo
                </h4>
                <p className="text-xs text-[#4E3424] leading-relaxed">
                  Guests are invited to stay and relax without feeling rushed, whether joining for midday nourishment or an evening dinner.
                </p>
              </div>
            </div>
          </div>

          <EditorialDivider label="Groups & Gatherings" />

          {/* Section 4: Group & Family Dining */}
          <div>
            <SectionBadge number="03" title="Group Accommodations" />
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1B2E3B] mb-4">
              Family & Group Gatherings in Gossliwil
            </h2>
            <div className="prose text-[#4E3424] leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                Village restaurants in Switzerland have long served as the backdrop for family reunions, club meetings, and celebratory lunches. Restaurant Kreuz accommodates groups looking for an honest countryside dining venue in the Bucheggberg.
              </p>
              <p>
                If you are planning an outing with family, friends, or colleagues, an advance phone call to <strong>032 661 18 28</strong> allows us to coordinate table arrangements smoothly for your party.
              </p>
            </div>
          </div>

          {/* Direct CTA Bar */}
          <div className="bg-[#FAF7F2] border-2 border-[#2F5067] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-serif font-bold text-lg text-[#1B2E3B]">
                Ready to plan your meal at Restaurant Kreuz?
              </div>
              <div className="text-xs text-[#644430]">
                Oberwilstrasse 35, 4579 Gossliwil · Telephone: 032 661 18 28
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenCallModal('Dining Inquiry')}
                className="px-5 py-2.5 bg-[#9B2424] hover:bg-[#821D1D] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Ask About Dining
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 bg-[#2F5067] hover:bg-[#1B2E3B] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Plan Your Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
