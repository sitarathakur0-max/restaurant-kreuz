/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { BUSINESS } from './data/business';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CallModal } from './components/CallModal';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { DiningView } from './views/DiningView';
import { ContactView } from './views/ContactView';
import { Phone, ChevronUp } from 'lucide-react';
import { SwissCross } from './components/SwissCrossPattern';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [callModalReason, setCallModalReason] = useState('Table Reservation & Dining Inquiry');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync with window hash on mount and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'about' || hash === 'dining' || hash === 'contact' || hash === 'home') {
        setCurrentPage(hash as PageId);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCallModal = (reason = 'Table Reservation & Dining Inquiry') => {
    setCallModalReason(reason);
    setCallModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#242A30] font-sans antialiased">
      {/* Editorial Sticky Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenCallModal={() => handleOpenCallModal('Table Reservation & Dining Inquiry')}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={navigateTo}
            onOpenCallModal={handleOpenCallModal}
          />
        )}
        {currentPage === 'about' && (
          <AboutView
            onNavigate={navigateTo}
            onOpenCallModal={handleOpenCallModal}
          />
        )}
        {currentPage === 'dining' && (
          <DiningView
            onNavigate={navigateTo}
            onOpenCallModal={handleOpenCallModal}
          />
        )}
        {currentPage === 'contact' && (
          <ContactView
            onNavigate={navigateTo}
            onOpenCallModal={handleOpenCallModal}
          />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenCallModal={() => handleOpenCallModal('Table Reservation & Dining Inquiry')}
      />

      {/* Call Dialog Modal */}
      <CallModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
        reason={callModalReason}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2.5">
        {/* Quick Call Button */}
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center gap-2 px-4 py-3 bg-[#9B2424] hover:bg-[#821D1D] text-white shadow-lg border border-white/20 text-xs uppercase tracking-wider font-semibold transition-all hover:scale-105"
          aria-label={`Call ${BUSINESS.phone}`}
        >
          <Phone size={15} />
          <span className="hidden sm:inline">Call: {BUSINESS.phone}</span>
          <span className="sm:hidden">Call Now</span>
        </a>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 bg-[#1B2E3B] hover:bg-[#2F5067] text-white border border-[#2F5067] shadow-md transition-colors"
          >
            <ChevronUp size={18} />
          </button>
        )}
      </div>
    </div>
  );
}

