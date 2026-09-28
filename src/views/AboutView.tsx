import React from 'react';
import { PageId } from '../types';
import { BUSINESS } from '../data/business';
import { SwissCross, SectionBadge, EditorialDivider } from '../components/SwissCrossPattern';
import { Phone, MapPin, Compass, ArrowRight, ShieldCheck, TreePine, HeartHandshake, Users } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCallModal: (reason?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenCallModal }) => {
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
              Heritage & Context
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white mb-4">
            About Restaurant Kreuz
          </h1>

          <div className="h-1 w-20 bg-[#9B2424] mb-6" />

          <p className="text-base sm:text-xl font-serif italic text-[#C7B9A5] leading-relaxed max-w-2xl">
            A local Swiss-style village restaurant serving the community of Gossliwil and travelers throughout the picturesque Bucheggberg.
          </p>
        </div>
      </section>

      {/* Main Narrative Article */}
      <section className="py-16 sm:py-20 border-b border-[#DFD5C7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Section 1: The Village of Gossliwil */}
          <div>
            <SectionBadge number="01" title="Rural Setting" />
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1B2E3B] mb-4">
              Gossliwil in the Canton of Solothurn
            </h2>
            <div className="prose text-[#4E3424] leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                The village of Gossliwil lies nestled within the gentle, green hills of the Bucheggberg district in the southwestern corner of the Canton of Solothurn, Switzerland. With a landscape shaped by agricultural traditions, quiet country roads, and extensive woodland ridges, Gossliwil provides a peaceful counterpoint to modern urban life.
              </p>
              <p>
                Positioned along Oberwilstrasse 35, <strong>Restaurant Kreuz</strong> serves as an established focal point within the community. Village life in Gossliwil moves in harmony with the changing seasons, where neighbors greet one another by name and travelers are welcomed with genuine hospitality.
              </p>
            </div>
          </div>

          <EditorialDivider label="Village Tradition" />

          {/* Section 2: The Meaning of the "Kreuz" in Swiss Culture */}
          <div>
            <SectionBadge number="02" title="Cultural Symbolism" />
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1B2E3B] mb-4">
              The Heritage of the Swiss Village "Kreuz"
            </h2>
            <div className="prose text-[#4E3424] leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                In Swiss tavern history, establishments bearing the name <em>Kreuz</em> (Cross) often stood at key crossroads or village centers where agricultural pathways converged. Rather than an emblem of formality, the name represents a traditional sanctuary of rest and nourishment for travelers journeying between Swiss cantons.
              </p>
              <p>
                Restaurant Kreuz continues this tradition in Gossliwil, offering a welcoming refuge where guests can pause, enjoy wholesome food, and take part in the easy conversation that defines rural Swiss dining.
              </p>
            </div>
          </div>

          {/* Framed Graphic Highlight */}
          <div className="bg-[#F4EFEA] border-2 border-[#2F5067] p-6 sm:p-8 my-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DFD5C7] pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#9B2424] text-white flex items-center justify-center">
                  <SwissCross size={16} color="#FFFFFF" />
                </div>
                <span className="font-serif font-bold text-lg text-[#1B2E3B]">
                  Established Business Record
                </span>
              </div>
              <span className="text-xs uppercase tracking-wider text-[#644430] bg-white px-3 py-1 border border-[#DFD5C7]">
                Verified Details
              </span>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <dt className="text-[#644430] uppercase tracking-wider text-[11px]">Official Name</dt>
                <dd className="font-semibold text-[#1B2E3B] text-base font-serif">{BUSINESS.name}</dd>
              </div>
              <div>
                <dt className="text-[#644430] uppercase tracking-wider text-[11px]">Category</dt>
                <dd className="font-semibold text-[#1B2E3B] text-base font-serif">{BUSINESS.category}</dd>
              </div>
              <div>
                <dt className="text-[#644430] uppercase tracking-wider text-[11px]">Full Address</dt>
                <dd className="font-medium text-[#4E3424]">{BUSINESS.address}</dd>
              </div>
              <div>
                <dt className="text-[#644430] uppercase tracking-wider text-[11px]">Telephone</dt>
                <dd>
                  <a href={BUSINESS.phoneHref} className="font-serif font-bold text-[#9B2424] text-base hover:underline">
                    {BUSINESS.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <EditorialDivider label="Hospitality Ethos" />

          {/* Section 3: Principles of Village Hospitality */}
          <div>
            <SectionBadge number="03" title="Hospitality Values" />
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1B2E3B] mb-4">
              The Principles of Village Hospitality
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="bg-white p-5 border border-[#DFD5C7]">
                <div className="w-8 h-8 bg-[#E8F0F5] text-[#2F5067] flex items-center justify-center mb-3">
                  <HeartHandshake size={18} />
                </div>
                <h3 className="font-serif font-bold text-base text-[#1B2E3B] mb-2">
                  Personal Contact
                </h3>
                <p className="text-xs text-[#4E3424] leading-relaxed">
                  We value speaking directly with our guests. Table reservations and questions are handled warmly over the phone.
                </p>
              </div>

              <div className="bg-white p-5 border border-[#DFD5C7]">
                <div className="w-8 h-8 bg-[#FCE8E8] text-[#9B2424] flex items-center justify-center mb-3">
                  <Users size={18} />
                </div>
                <h3 className="font-serif font-bold text-base text-[#1B2E3B] mb-2">
                  Open to All
                </h3>
                <p className="text-xs text-[#4E3424] leading-relaxed">
                  Welcoming village residents, regional walkers, cyclists crossing the Bucheggberg, and visitors from abroad.
                </p>
              </div>

              <div className="bg-white p-5 border border-[#DFD5C7]">
                <div className="w-8 h-8 bg-[#F4EFEA] text-[#644430] flex items-center justify-center mb-3">
                  <TreePine size={18} />
                </div>
                <h3 className="font-serif font-bold text-base text-[#1B2E3B] mb-2">
                  Countryside Tranquility
                </h3>
                <p className="text-xs text-[#4E3424] leading-relaxed">
                  An unhurried dining pace allowing you to relax, converse, and savor the tranquility of rural Switzerland.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Box */}
          <div className="pt-8 border-t border-[#DFD5C7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1B2E3B]">
                Plan a Visit to Restaurant Kreuz
              </h3>
              <p className="text-xs text-[#644430]">
                Call 032 661 18 28 to inquire about table availability.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="px-5 py-2.5 bg-[#9B2424] hover:bg-[#821D1D] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Call the Restaurant
              </a>
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
