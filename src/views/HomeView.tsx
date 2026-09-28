import React from 'react';
import { PageId } from '../types';
import { BUSINESS } from '../data/business';
import { SwissCross, SectionBadge, EditorialDivider } from '../components/SwissCrossPattern';
import { TravelDistanceWidget } from '../components/TravelDistanceWidget';
import {
  Phone,
  MapPin,
  Calendar,
  Compass,
  ArrowRight,
  Clock,
  HeartHandshake,
  Users,
  Utensils,
  ExternalLink,
  ChevronRight,
  Coffee,
  CheckCircle,
  HelpCircle,
  Car,
  TreePine
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCallModal: (reason?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenCallModal }) => {
  return (
    <div className="w-full bg-[#FAF7F2]">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO — INTRODUCING RESTAURANT KREUZ
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b-2 border-[#2F5067] bg-[#FAF7F2] overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
        {/* Subtle geometric background motif */}
        <div className="absolute inset-0 swiss-cross-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left column: Editorial Typography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FCE8E8] border border-[#9B2424]/30 text-[#9B2424] text-xs font-semibold uppercase tracking-[0.2em]">
                <SwissCross size={11} color="#9B2424" />
                <span>Gossliwil · Canton of Solothurn</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#1B2E3B] tracking-tight leading-[1.08]">
                Restaurant Kreuz
              </h1>

              <div className="h-1 w-20 bg-[#9B2424]" />

              <p className="text-lg sm:text-xl font-serif italic text-[#644430] leading-snug">
                Local Swiss-style village restaurant in the quiet Bucheggberg countryside.
              </p>

              <p className="text-sm sm:text-base text-[#4E3424] leading-relaxed max-w-2xl">
                Situated at Oberwilstrasse 35 in the peaceful rural village of Gossliwil, <strong>Restaurant Kreuz</strong> offers an authentic Swiss village dining atmosphere. Rooted in rural hospitality, our establishment provides a welcoming destination for neighbors, countryside walkers, and visitors seeking unhurried dining in the Canton of Solothurn.
              </p>

              {/* Verified Business Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-3 p-3 bg-white border border-[#DFD5C7]">
                  <MapPin size={18} className="text-[#9B2424] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="block uppercase tracking-wider text-[#644430] font-semibold">Location</span>
                    <span className="text-[#1B2E3B] font-medium">{BUSINESS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white border border-[#DFD5C7]">
                  <Phone size={18} className="text-[#2F5067] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="block uppercase tracking-wider text-[#644430] font-semibold">Direct Telephone</span>
                    <a
                      href={BUSINESS.phoneHref}
                      className="text-[#1B2E3B] font-medium hover:text-[#9B2424] transition-colors"
                    >
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Natural CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onOpenCallModal('Table Reservation & Dining Inquiry')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#9B2424] hover:bg-[#821D1D] text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Phone size={16} />
                  <span>Call the Restaurant</span>
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2F5067] hover:bg-[#1B2E3B] text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Compass size={16} />
                  <span>Plan Your Visit</span>
                </button>

                <button
                  onClick={() => onNavigate('dining')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-white border border-[#2F5067] text-[#243E4F] hover:bg-[#F4EFEA] font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors"
                >
                  <span>Ask About Dining</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right column: Framed Swiss Heritage Editorial Imagery */}
            <div className="lg:col-span-5">
              <div className="relative p-3 bg-white border-2 border-[#2F5067] shadow-lg">
                {/* Cross watermark corner badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#9B2424] text-white flex items-center justify-center shadow">
                  <SwissCross size={16} color="#FFFFFF" />
                </div>

                <div className="relative overflow-hidden aspect-[4/3] bg-[#ECE4DA]">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                    alt="Warm and welcoming dining room with timber tables and rustic Swiss countryside charm"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>

                <div className="p-4 bg-[#F4EFEA] border-t border-[#DFD5C7] mt-3">
                  <div className="flex items-center justify-between text-xs text-[#644430]">
                    <span className="font-semibold uppercase tracking-wider">Oberwilstrasse 35</span>
                    <span>Gossliwil, CH</span>
                  </div>
                  <p className="text-xs text-[#4E3424] mt-1 italic">
                    A village tavern where hospitality is personal and time moves at a peaceful countryside pace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: VILLAGE SETTING & THE GOSSLIWIL COUNTRYSIDE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-[#DFD5C7] bg-[#F4EFEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionBadge number="01" title="Village Setting & Geographical Context" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1B2E3B] leading-tight mb-4">
                Gossliwil in the Rolling Hills of the Bucheggberg
              </h2>
              <div className="h-0.5 w-16 bg-[#9B2424] mb-6" />
              <p className="text-sm sm:text-base text-[#4E3424] leading-relaxed mb-4">
                Gossliwil is a traditional rural village nestled within the Bucheggberg district, an enchanting agricultural region in the southern Canton of Solothurn, bounded gently by the cantons of Bern and the Aare valley.
              </p>
              <p className="text-sm text-[#644430] leading-relaxed">
                Characterized by gently sloping farmland, apple orchards, forest ridges, and historic wooden farmhouses, Gossliwil provides a peaceful respite from urban commotion. Here, Restaurant Kreuz sits centrally along Oberwilstrasse 35, greeting residents and travelers who venture into the Swiss countryside.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-[#FAF7F2] p-6 border-l-4 border-[#2F5067] border-y border-r border-[#DFD5C7]">
                <div className="flex items-center gap-2 mb-3 text-[#2F5067]">
                  <TreePine size={20} />
                  <h3 className="font-serif text-lg font-bold text-[#1B2E3B]">Rural Solothurn Landscape</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4E3424] leading-relaxed">
                  Surrounded by rolling fields, walking paths, and panoramic views toward the Jura mountains and Bernese Alps on clear days, Gossliwil retains its authentic agricultural rhythm.
                </p>
              </div>

              <div className="bg-[#FAF7F2] p-6 border-l-4 border-[#9B2424] border-y border-r border-[#DFD5C7]">
                <div className="flex items-center gap-2 mb-3 text-[#9B2424]">
                  <MapPin size={20} />
                  <h3 className="font-serif text-lg font-bold text-[#1B2E3B]">Central Village Address</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4E3424] leading-relaxed">
                  Conveniently situated at Oberwilstrasse 35, the restaurant is easily accessible whether arriving from nearby Solothurn, Biel, or Bern for an unhurried countryside meal.
                </p>
              </div>

              <div className="bg-[#FAF7F2] p-6 border-l-4 border-[#644430] border-y border-r border-[#DFD5C7] sm:col-span-2">
                <div className="flex items-center gap-2 mb-2 text-[#644430]">
                  <Compass size={18} />
                  <h3 className="font-serif text-lg font-bold text-[#1B2E3B]">A Haven for Countryside Explorers</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4E3424] leading-relaxed">
                  The Bucheggberg is renowned among recreational hikers and cyclists who appreciate quiet country roads. Restaurant Kreuz serves as a natural meeting place and hospitable pause during excursions across the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: ABOUT RESTAURANT KREUZ (STRICTLY SUPPLIED FACTS)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-[#DFD5C7] bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionBadge number="02" title="About Restaurant Kreuz" />

          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1B2E3B] leading-tight mb-4">
              A Genuine Local Village Restaurant
            </h2>
            <p className="text-base sm:text-lg text-[#644430] font-serif italic leading-relaxed">
              Rooted in the timeless role of the Swiss tavern as an anchor for community conversation and hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-[#F4EFEA] p-6 sm:p-8 border border-[#DFD5C7]">
              <div className="w-8 h-8 bg-[#9B2424] text-white flex items-center justify-center mb-4">
                <SwissCross size={16} color="#FFFFFF" />
              </div>
              <h3 className="text-xl font-serif text-[#1B2E3B] mb-3">Authentic Village Identity</h3>
              <p className="text-sm text-[#4E3424] leading-relaxed">
                As a local Swiss-style village restaurant, Restaurant Kreuz represents the enduring tradition of local hospitality. It remains an approachable destination where visitors are greeted with genuine warmth and simple, honest dining.
              </p>
            </div>

            <div className="bg-[#F4EFEA] p-6 sm:p-8 border border-[#DFD5C7]">
              <div className="w-8 h-8 bg-[#2F5067] text-white flex items-center justify-center mb-4">
                <Users size={16} className="text-white" />
              </div>
              <h3 className="text-xl font-serif text-[#1B2E3B] mb-3">Community Gathering Point</h3>
              <p className="text-sm text-[#4E3424] leading-relaxed">
                In Swiss village culture, a restaurant bearing the traditional name “Kreuz” (Cross) has historically stood at the crossroads of neighborhood life. It is where locals catch up after daily work and travelers stop for a comforting meal.
              </p>
            </div>

            <div className="bg-[#F4EFEA] p-6 sm:p-8 border border-[#DFD5C7]">
              <div className="w-8 h-8 bg-[#644430] text-white flex items-center justify-center mb-4">
                <Phone size={16} className="text-white" />
              </div>
              <h3 className="text-xl font-serif text-[#1B2E3B] mb-3">Direct & Honest Service</h3>
              <p className="text-sm text-[#4E3424] leading-relaxed">
                Rather than detached automated reservation platforms, Restaurant Kreuz values personal communication. A direct phone call to <strong>032 661 18 28</strong> connects you immediately with the restaurant to plan your table and visit.
              </p>
            </div>
          </div>

          {/* Fact Sheet Banner */}
          <div className="mt-10 p-6 bg-[#E8F0F5] border-2 border-[#2F5067] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-xs uppercase tracking-widest text-[#2F5067] font-semibold">
                Official Directory Details
              </div>
              <div className="text-lg font-serif text-[#1B2E3B]">
                Restaurant Kreuz · Oberwilstrasse 35, 4579 Gossliwil, Switzerland
              </div>
              <div className="text-xs text-[#3E647F]">
                Category: Restaurant · Swiss-style village dining
              </div>
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2F5067] hover:bg-[#1B2E3B] text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Read Full Background</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: THE CHARACTER OF SWISS-STYLE VILLAGE DINING
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-[#DFD5C7] bg-[#F4EFEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionBadge number="03" title="Cultural Dining Traditions" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1B2E3B] leading-tight">
                The Character of the Swiss Countryside Restaurant
              </h2>
              <div className="h-0.5 w-16 bg-[#9B2424]" />
              <p className="text-sm sm:text-base text-[#4E3424] leading-relaxed">
                Across Switzerland, village restaurants—often referred to affectionately as the <em>Dorfbeiz</em> or <em>Dorfrestaurant</em>—occupy a central place in national cultural life. Unlike fast-paced city eateries, a Swiss country restaurant is built around human presence and the pleasure of lingering over good food.
              </p>
              <p className="text-sm text-[#4E3424] leading-relaxed">
                Village dining is unpretentious and heartfelt. Tables are arranged to encourage shared moments; timber elements create natural acoustic warmth; and the dining room welcomes everyone from local farmers to weekend wanderers stepping in from a brisk walk through the fields.
              </p>
              <div className="pt-2 border-t border-[#DFD5C7] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#644430]">
                <div className="flex items-center gap-2">
                  <SwissCross size={10} color="#9B2424" />
                  <span>Unrushed, comfortable dining tempo</span>
                </div>
                <div className="flex items-center gap-2">
                  <SwissCross size={10} color="#9B2424" />
                  <span>Personal, neighborly Swiss hospitality</span>
                </div>
                <div className="flex items-center gap-2">
                  <SwissCross size={10} color="#9B2424" />
                  <span>Wood-toned acoustic atmosphere</span>
                </div>
                <div className="flex items-center gap-2">
                  <SwissCross size={10} color="#9B2424" />
                  <span>Welcoming to walkers, families & groups</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-3 bg-white border-2 border-[#2F5067] shadow-sm">
                <div className="aspect-[4/3] bg-[#ECE4DA] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
                    alt="Atmospheric rustic dining room with wooden finishes and warm hospitality"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-xs text-[#644430] bg-[#FAF7F2] border-t border-[#DFD5C7] italic">
                  Traditional Swiss village dining centers on comfort, conversation, and warm community hospitality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: DINING AT THE KREUZ (NO FICTIONAL MENU)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-[#DFD5C7] bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionBadge number="04" title="Dining & Hospitality Information" />

          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1B2E3B] leading-tight mb-4">
              Dining with Us at Restaurant Kreuz
            </h2>
            <p className="text-base sm:text-lg text-[#644430] font-serif italic leading-relaxed">
              We focus on traditional Swiss village dining hospitality. For current offerings, seasonal recommendations, and daily options, we encourage guests to inquire directly by phone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white border border-[#DFD5C7] flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 bg-[#E8F0F5] text-[#2F5067] flex items-center justify-center mb-3">
                  <Utensils size={18} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1B2E3B] mb-2">
                  Traditional Swiss Fare
                </h3>
                <p className="text-xs sm:text-sm text-[#4E3424] leading-relaxed mb-4">
                  Swiss village dining is founded upon hearty, satisfying dishes, comforting regional recipes, and honest hospitality tailored to the season.
                </p>
              </div>
              <div className="pt-3 border-t border-[#DFD5C7] text-xs text-[#644430]">
                Comfortable dining for solo travelers, couples, and families.
              </div>
            </div>

            <div className="p-6 bg-white border border-[#DFD5C7] flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 bg-[#FCE8E8] text-[#9B2424] flex items-center justify-center mb-3">
                  <Phone size={18} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1B2E3B] mb-2">
                  Call Ahead for Daily Offerings
                </h3>
                <p className="text-xs sm:text-sm text-[#4E3424] leading-relaxed mb-4">
                  Because village restaurant selections frequently adapt to seasonal market availability, calling ahead allows you to ask the staff directly about today’s preparations.
                </p>
              </div>
              <div className="pt-3 border-t border-[#DFD5C7]">
                <a
                  href={BUSINESS.phoneHref}
                  className="text-xs font-semibold text-[#9B2424] hover:underline"
                >
                  Call: {BUSINESS.phone}
                </a>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#DFD5C7] flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 bg-[#F4EFEA] text-[#644430] flex items-center justify-center mb-3">
                  <Users size={18} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1B2E3B] mb-2">
                  Group & Family Accommodations
                </h3>
                <p className="text-xs sm:text-sm text-[#4E3424] leading-relaxed mb-4">
                  Planning a gathering or celebration in the Bucheggberg countryside? Contact us in advance by phone to discuss table capacity and tailored arrangements.
                </p>
              </div>
              <div className="pt-3 border-t border-[#DFD5C7] text-xs text-[#644430]">
                Advance notification ensures seamless coordination.
              </div>
            </div>
          </div>

          {/* Dining Action Callout */}
          <div className="bg-[#1B2E3B] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#9B2424]">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-xl font-serif font-bold text-white">
                Have questions about dining with us today?
              </h4>
              <p className="text-xs sm:text-sm text-[#C7B9A5]">
                Speak directly with the team at Restaurant Kreuz for current dining options and table availability.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenCallModal('Ask About Dining')}
                className="px-6 py-3 bg-[#9B2424] hover:bg-[#821D1D] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Ask About Dining
              </button>
              <button
                onClick={() => onNavigate('dining')}
                className="px-5 py-3 border border-[#E8F0F5]/40 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Dining Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: THE EXPERIENCE OF VISITING A COUNTRYSIDE RESTAURANT
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-[#DFD5C7] bg-[#F4EFEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionBadge number="05" title="The Countryside Experience" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="p-3 bg-white border-2 border-[#2F5067] shadow-sm">
                <div className="aspect-[4/3] bg-[#ECE4DA] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80"
                    alt="Peaceful Swiss pastoral landscape with rolling green hills and country roads"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-xs text-[#644430] bg-[#FAF7F2] border-t border-[#DFD5C7]">
                  The gentle hills of the Bucheggberg provide an idyllic setting for an afternoon or evening meal.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1B2E3B] leading-tight">
                An Unhurried Journey into Village Life
              </h2>
              <div className="h-0.5 w-16 bg-[#9B2424]" />
              <p className="text-sm sm:text-base text-[#4E3424] leading-relaxed">
                Visiting a countryside restaurant like Restaurant Kreuz is more than just stopping for a meal—it is an immersion into the serene tranquility of the Swiss rural landscape.
              </p>
              <p className="text-sm text-[#4E3424] leading-relaxed">
                As you leave the highway behind and wind through the quiet agricultural lanes of the Bucheggberg, the pace of life decelerates naturally. Open skies give way to timber-framed homes, community gardens, and quiet roadside churches.
              </p>
              <p className="text-sm text-[#4E3424] leading-relaxed">
                Arriving at Oberwilstrasse 35, you step into an environment where conversation flows easily, glasses clink in quiet celebration, and the dining experience honors the simple art of being present.
              </p>
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#9B2424] hover:text-[#821D1D] transition-colors"
                >
                  <span>Plan Your Countryside Excursion</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: PLAN YOUR VISIT & ROUTE GUIDE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-[#DFD5C7] bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionBadge number="06" title="Plan Your Visit" />

          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1B2E3B] leading-tight mb-4">
              Planning Your Trip to Gossliwil
            </h2>
            <p className="text-base sm:text-lg text-[#644430] font-serif italic leading-relaxed">
              Practical advice for arriving smoothly, checking table availability, and enjoying your stay in the Canton of Solothurn.
            </p>
          </div>

          {/* Interactive Travel Distance Widget */}
          <TravelDistanceWidget />

          {/* 3 Practical Visit Tips */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-5 bg-[#F4EFEA] border border-[#DFD5C7]">
              <div className="flex items-center gap-2 mb-2 text-[#9B2424] font-semibold text-xs uppercase tracking-wider">
                <Phone size={14} />
                <span>Call Before Traveling</span>
              </div>
              <p className="text-xs text-[#4E3424] leading-relaxed">
                We strongly advise calling <strong>032 661 18 28</strong> in advance to verify current seating availability and service times before setting out.
              </p>
            </div>

            <div className="p-5 bg-[#F4EFEA] border border-[#DFD5C7]">
              <div className="flex items-center gap-2 mb-2 text-[#2F5067] font-semibold text-xs uppercase tracking-wider">
                <Car size={14} />
                <span>Village Parking & Access</span>
              </div>
              <p className="text-xs text-[#4E3424] leading-relaxed">
                Gossliwil offers straightforward road access via regional routes with parking options located directly along Oberwilstrasse and village access roads.
              </p>
            </div>

            <div className="p-5 bg-[#F4EFEA] border border-[#DFD5C7]">
              <div className="flex items-center gap-2 mb-2 text-[#644430] font-semibold text-xs uppercase tracking-wider">
                <TreePine size={14} />
                <span>Walking & Cycling Pairing</span>
              </div>
              <p className="text-xs text-[#4E3424] leading-relaxed">
                Combine your dining visit with a countryside walk or cycling loop along the signposted Bucheggberg rural trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: PRACTICAL LOCATION & DIRECT CONTACT
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-[#DFD5C7] bg-[#F4EFEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionBadge number="07" title="Location & Geographic Coordinates" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1B2E3B] leading-tight">
                Finding Restaurant Kreuz in Gossliwil
              </h2>
              <div className="h-0.5 w-16 bg-[#9B2424]" />
              <p className="text-sm sm:text-base text-[#4E3424] leading-relaxed">
                Restaurant Kreuz is positioned on <strong>Oberwilstrasse 35</strong> in the village of Gossliwil (postal code 4579), conveniently located within the southwestern Solothurn district of Bucheggberg.
              </p>

              {/* Exact Location Card */}
              <div className="bg-white border-2 border-[#2F5067] p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#9B2424] text-white flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#644430] font-semibold block">
                      Postal & Navigation Address
                    </span>
                    <strong className="text-lg font-serif text-[#1B2E3B] block mt-0.5">
                      {BUSINESS.name}
                    </strong>
                    <span className="text-sm text-[#4E3424] block">
                      {BUSINESS.address}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#DFD5C7] flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2F5067] text-white flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#644430] font-semibold block">
                      Direct Inquiries & Bookings
                    </span>
                    <a
                      href={BUSINESS.phoneHref}
                      className="text-lg font-serif font-bold text-[#1B2E3B] hover:text-[#9B2424] transition-colors block mt-0.5"
                    >
                      {BUSINESS.phone}
                    </a>
                    <span className="text-xs text-[#3E647F] block">
                      Intl: {BUSINESS.phoneIntl}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=Oberwilstrasse+35+4579+Gossliwil+Switzerland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#2F5067] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1B2E3B] transition-colors"
                  >
                    <ExternalLink size={13} />
                    <span>Open in Google Maps</span>
                  </a>
                  <a
                    href={BUSINESS.phoneHref}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#9B2424] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#821D1D] transition-colors"
                  >
                    <Phone size={13} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Static Visual Map Card */}
            <div className="lg:col-span-6">
              <div className="bg-white border-2 border-[#2F5067] p-4 shadow-sm">
                <div className="relative bg-[#ECE4DA] border border-[#DFD5C7] aspect-[16/10] overflow-hidden flex items-center justify-center text-center p-6">
                  {/* Stylized vector map presentation */}
                  <div className="space-y-3 z-10 max-w-sm">
                    <div className="w-12 h-12 rounded-none bg-[#9B2424] text-white mx-auto flex items-center justify-center shadow">
                      <SwissCross size={20} color="#FFFFFF" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xl text-[#1B2E3B]">
                        Restaurant Kreuz
                      </h4>
                      <p className="text-xs text-[#4E3424]">
                        Oberwilstrasse 35, 4579 Gossliwil
                      </p>
                      <p className="text-[11px] text-[#644430] mt-1">
                        Bucheggberg District · Canton of Solothurn
                      </p>
                    </div>

                    <a
                      href="https://maps.google.com/?q=Oberwilstrasse+35+4579+Gossliwil+Switzerland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#1B2E3B] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#2F5067] transition-colors"
                    >
                      <span>Interactive GPS Navigation</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  {/* Grid lines styling behind */}
                  <div className="absolute inset-0 swiss-cross-pattern opacity-30" />
                </div>

                <div className="p-3 bg-[#FAF7F2] border-t border-[#DFD5C7] text-xs text-[#644430] flex items-center justify-between">
                  <span>GPS: 4579 Gossliwil, CH</span>
                  <span>Oberwilstrasse 35</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: RESERVATIONS & PHONE INVITATION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-[#DFD5C7] bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionBadge number="08" title="Reservations & Contact Policy" />

          <div className="bg-[#E8F0F5] border-2 border-[#2F5067] p-8 sm:p-12 relative overflow-hidden">
            {/* Background watermark */}
            <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none text-[#2F5067]">
              <SwissCross size={220} color="#2F5067" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#2F5067]/30 text-[#2F5067] text-xs font-semibold uppercase tracking-widest mb-4">
                <Phone size={13} className="text-[#9B2424]" />
                <span>Direct Voice Communication</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#1B2E3B] leading-tight mb-4">
                Reserve Your Table by Calling Us Directly
              </h2>

              <p className="text-sm sm:text-base text-[#4E3424] leading-relaxed mb-6">
                In keeping with the genuine customs of a Swiss village restaurant, all table reservations, dining availability inquiries, and event questions are received directly by phone. We do not use third-party booking algorithms, ensuring you speak directly with the team who will welcome you at the door.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#9B2424] hover:bg-[#821D1D] text-white font-serif text-lg tracking-wide shadow-md transition-all"
                >
                  <Phone size={20} />
                  <span>Call 032 661 18 28</span>
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white border border-[#2F5067] text-[#243E4F] hover:bg-[#F4EFEA] text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>Get in Touch</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DFD5C7] text-xs text-[#644430] flex items-center gap-2">
                <CheckCircle size={14} className="text-emerald-700 shrink-0" />
                <span>Direct telephone coordination ensures clear table arrangements without automated errors.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: FREQUENT VISITOR QUESTIONS (COMMUNITY GUIDE)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-[#DFD5C7] bg-[#F4EFEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionBadge number="09" title="Visitor Questions & Answers" />

          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1B2E3B] leading-tight mb-4">
              Visiting Restaurant Kreuz: Helpful Details
            </h2>
            <p className="text-base sm:text-lg text-[#644430] font-serif italic leading-relaxed">
              Clear, factual answers to assist you before arriving in Gossliwil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FAF7F2] p-6 border border-[#DFD5C7]">
              <div className="flex items-center gap-2 mb-2 text-[#9B2424]">
                <HelpCircle size={18} />
                <h3 className="font-serif font-bold text-lg text-[#1B2E3B]">
                  What is the best way to reserve a table?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4E3424] leading-relaxed">
                The best and direct way is to telephone Restaurant Kreuz at <strong>032 661 18 28</strong>. Calling gives you immediate confirmation of table availability for your desired day and party size.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 border border-[#DFD5C7]">
              <div className="flex items-center gap-2 mb-2 text-[#2F5067]">
                <MapPin size={18} />
                <h3 className="font-serif font-bold text-lg text-[#1B2E3B]">
                  Where exactly is the restaurant located?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4E3424] leading-relaxed">
                You will find us at <strong>Oberwilstrasse 35, 4579 Gossliwil, Switzerland</strong>, in the scenic Bucheggberg countryside between Solothurn and Bern.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 border border-[#DFD5C7]">
              <div className="flex items-center gap-2 mb-2 text-[#644430]">
                <Utensils size={18} />
                <h3 className="font-serif font-bold text-lg text-[#1B2E3B]">
                  How can I find out about today's dining options?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4E3424] leading-relaxed">
                Because village dining honors seasonal culinary availability, we recommend dialing <strong>032 661 18 28</strong>. The restaurant team will gladly share current recommendations and daily dining details.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 border border-[#DFD5C7]">
              <div className="flex items-center gap-2 mb-2 text-[#1B2E3B]">
                <Users size={18} />
                <h3 className="font-serif font-bold text-lg text-[#1B2E3B]">
                  Can groups and family parties be accommodated?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4E3424] leading-relaxed">
                Yes, Swiss village restaurants are customary venues for group meals and family gatherings. Advance notice via telephone allows the team to prepare suitable seating and hospitality for your group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11: CLOSING CTA & LANDMARK INVITATION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#1B2E3B] text-white border-t-2 border-[#9B2424]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <div className="w-12 h-12 bg-[#9B2424] text-white mx-auto flex items-center justify-center mb-6 shadow-md">
            <SwissCross size={24} color="#FFFFFF" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C7B9A5] block mb-2">
            Swiss Village Hospitality
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-6">
            We Look Forward to Welcoming You to Restaurant Kreuz
          </h2>

          <p className="text-sm sm:text-base text-[#E8F0F5] max-w-2xl mx-auto leading-relaxed mb-8">
            Experience the calm charm of Gossliwil and genuine Swiss village dining. Whether planning a weekend outing through the Bucheggberg or stopping in for a relaxed meal, our doors are open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={BUSINESS.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#9B2424] hover:bg-[#821D1D] text-white font-medium text-sm tracking-wider uppercase transition-colors shadow-sm"
            >
              <Phone size={16} />
              <span>Call the Restaurant: 032 661 18 28</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium text-sm tracking-wider uppercase transition-colors"
            >
              <Compass size={16} />
              <span>Plan Your Visit</span>
            </button>
          </div>

          <div className="pt-6 border-t border-[#2F5067] flex flex-wrap items-center justify-center gap-6 text-xs text-[#C7B9A5]">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-[#B52C2C]" />
              {BUSINESS.address}
            </span>
            <span>·</span>
            <span>Local Swiss-Style Village Restaurant</span>
            <span>·</span>
            <span>Gossliwil, Switzerland</span>
          </div>
        </div>
      </section>
    </div>
  );
};
