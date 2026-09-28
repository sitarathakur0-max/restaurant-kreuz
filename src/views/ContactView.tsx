import React from 'react';
import { PageId } from '../types';
import { BUSINESS, GENERAL_VISIT_FAQS } from '../data/business';
import { SwissCross, SectionBadge, EditorialDivider } from '../components/SwissCrossPattern';
import { ContactForm } from '../components/ContactForm';
import { TravelDistanceWidget } from '../components/TravelDistanceWidget';
import { Phone, MapPin, ExternalLink, HelpCircle, Navigation, Clock, Check } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCallModal: (reason?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onOpenCallModal }) => {
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
              Location & Contact
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white mb-4">
            Contact & Plan Your Visit
          </h1>

          <div className="h-1 w-20 bg-[#9B2424] mb-6" />

          <p className="text-base sm:text-xl font-serif italic text-[#C7B9A5] leading-relaxed max-w-2xl">
            Direct communication, clear directions, and practical information for visiting Restaurant Kreuz at Oberwilstrasse 35 in Gossliwil.
          </p>
        </div>
      </section>

      {/* Main Grid: Direct Contact Details & Form */}
      <section className="py-16 sm:py-20 border-b border-[#DFD5C7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left column: Official Details & Direct Phone */}
            <div className="lg:col-span-5 space-y-6">
              <SectionBadge number="01" title="Direct Coordinates" />

              <h2 className="text-2xl sm:text-3xl font-serif text-[#1B2E3B]">
                Restaurant Kreuz in Gossliwil
              </h2>

              <p className="text-sm text-[#4E3424] leading-relaxed">
                We welcome your call for table reservations, questions about our Swiss-style village dining, or advice on reaching our location in the Bucheggberg countryside.
              </p>

              {/* Verified Details Card */}
              <div className="bg-[#F4EFEA] border-2 border-[#2F5067] p-6 space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#9B2424] text-white flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#644430] font-semibold">
                      Telephone (Primary)
                    </div>
                    <a
                      href={BUSINESS.phoneHref}
                      className="text-2xl font-serif font-bold text-[#1B2E3B] hover:text-[#9B2424] transition-colors block mt-0.5"
                    >
                      {BUSINESS.phone}
                    </a>
                    <div className="text-xs text-[#644430] mt-0.5">
                      International: {BUSINESS.phoneIntl}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DFD5C7] flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#2F5067] text-white flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#644430] font-semibold">
                      Address
                    </div>
                    <div className="text-base font-serif font-bold text-[#1B2E3B] mt-0.5">
                      {BUSINESS.name}
                    </div>
                    <div className="text-sm text-[#4E3424]">
                      {BUSINESS.address}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DFD5C7] flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#644430] text-white flex items-center justify-center shrink-0">
                    <SwissCross size={16} color="#FFFFFF" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#644430] font-semibold">
                      Category & Description
                    </div>
                    <div className="text-sm text-[#1B2E3B] font-medium mt-0.5">
                      {BUSINESS.description} ({BUSINESS.category})
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-2">
                  <a
                    href={BUSINESS.phoneHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9B2424] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#821D1D] transition-colors"
                  >
                    <Phone size={14} />
                    <span>Call the Restaurant</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Oberwilstrasse+35+4579+Gossliwil+Switzerland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#2F5067] text-[#243E4F] text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF7F2] transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Map Directions</span>
                  </a>
                </div>
              </div>

              {/* Call recommendation highlight */}
              <div className="p-4 bg-[#E8F0F5] border-l-4 border-[#9B2424] text-xs text-[#243E4F] space-y-1">
                <div className="font-semibold text-[#1B2E3B]">Reservation Recommendation</div>
                <p>
                  To secure table seating for today or an upcoming weekend, calling ahead to <strong>032 661 18 28</strong> is always recommended.
                </p>
              </div>
            </div>

            {/* Right column: Interactive Form */}
            <div className="lg:col-span-7">
              <SectionBadge number="02" title="Inquiry Form" />
              <ContactForm onOpenCallModal={() => onOpenCallModal('Dining Inquiry')} />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Route Planner Section */}
      <section className="py-16 sm:py-20 border-b border-[#DFD5C7] bg-[#F4EFEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionBadge number="03" title="Regional Arrival Routes" />
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1B2E3B] mb-2">
              Directions from Surrounding Towns & Cantons
            </h2>
            <p className="text-sm text-[#4E3424]">
              Gossliwil is situated conveniently close to Solothurn, Bern, and Biel, offering scenic road access through the Bucheggberg plateau.
            </p>
          </div>

          <TravelDistanceWidget />
        </div>
      </section>

      {/* Frequently Asked Inquiries Section */}
      <section className="py-16 sm:py-20 border-b border-[#DFD5C7] bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <SectionBadge number="04" title="Common Inquiries" />
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1B2E3B] mb-8">
            Frequently Asked Visitor Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GENERAL_VISIT_FAQS.map((faq, index) => (
              <div key={index} className="bg-white p-6 border border-[#DFD5C7]">
                <div className="flex items-start gap-3 mb-2">
                  <HelpCircle size={18} className="text-[#9B2424] shrink-0 mt-0.5" />
                  <h3 className="font-serif font-bold text-base text-[#1B2E3B]">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4E3424] leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
