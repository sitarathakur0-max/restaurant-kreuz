import React, { useState } from 'react';
import { REGIONAL_ROUTES } from '../data/business';
import { Car, Bus, Compass, Navigation, ArrowRight } from 'lucide-react';
import { SwissCross } from './SwissCrossPattern';

export const TravelDistanceWidget: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<number>(0);
  const route = REGIONAL_ROUTES[selectedRoute];

  return (
    <div className="bg-[#FAF7F2] border-2 border-[#2F5067] p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DFD5C7] pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Compass size={16} className="text-[#9B2424]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#644430]">
              Bucheggberg Route Guide
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif text-[#1B2E3B]">
            Approaching Gossliwil from Nearby Regional Hubs
          </h3>
        </div>
        <div className="text-xs text-[#644430] bg-[#ECE4DA] px-3 py-1.5 border border-[#DFD5C7] self-start sm:self-center">
          Destination: <strong className="text-[#1B2E3B]">Oberwilstrasse 35</strong>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {REGIONAL_ROUTES.map((item, idx) => (
          <button
            key={item.origin}
            onClick={() => setSelectedRoute(idx)}
            className={`px-3 py-2.5 text-left border transition-all ${
              selectedRoute === idx
                ? 'bg-[#1B2E3B] text-white border-[#1B2E3B]'
                : 'bg-[#F4EFEA] text-[#4E3424] border-[#DFD5C7] hover:bg-[#ECE4DA]'
            }`}
          >
            <div className="text-xs font-semibold tracking-wider uppercase">
              {item.origin}
            </div>
            <div className={`text-sm font-serif ${selectedRoute === idx ? 'text-[#E8F0F5]' : 'text-[#644430]'}`}>
              {item.distanceKm} km · ~{item.driveTimeMin} min
            </div>
          </button>
        ))}
      </div>

      {/* Detail Card */}
      <div className="bg-[#F4EFEA] border border-[#DFD5C7] p-5 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#DFD5C7]/70">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#9B2424] font-semibold">
              Selected Route
            </span>
            <h4 className="text-2xl font-serif text-[#1B2E3B] mt-0.5">
              From {route.origin} to Restaurant Kreuz
            </h4>
          </div>
          <div className="flex items-center gap-4 bg-white/80 border border-[#DFD5C7] px-4 py-2 self-start md:self-auto">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#644430]">Road Distance</div>
              <div className="text-lg font-serif font-bold text-[#1B2E3B]">{route.distanceKm} km</div>
            </div>
            <div className="h-8 w-px bg-[#DFD5C7]" />
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#644430]">Approx. Drive</div>
              <div className="text-lg font-serif font-bold text-[#9B2424]">~{route.driveTimeMin} mins</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start gap-3 bg-white p-4 border border-[#DFD5C7]/60">
            <Car size={20} className="text-[#2F5067] shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-[#1B2E3B] mb-1">Scenic Countryside Drive</div>
              <p className="text-[#4E3424] leading-relaxed text-xs sm:text-sm">
                {route.scenicNote}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-4 border border-[#DFD5C7]/60">
            <Bus size={20} className="text-[#9B2424] shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-[#1B2E3B] mb-1">Public Transit & PostBus</div>
              <p className="text-[#4E3424] leading-relaxed text-xs sm:text-sm">
                {route.transitSummary}. Village stops connect easily with regional train lines.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-[#644430]">
          <div className="flex items-center gap-1.5">
            <SwissCross size={10} color="#9B2424" />
            <span>Exact location: Oberwilstrasse 35, 4579 Gossliwil</span>
          </div>
          <a
            href={`https://maps.google.com/?daddr=Oberwilstrasse+35+4579+Gossliwil+Switzerland&saddr=${encodeURIComponent(route.origin + ', Switzerland')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#2F5067] hover:text-[#9B2424] transition-colors"
          >
            <span>Open Route in Maps</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
};
