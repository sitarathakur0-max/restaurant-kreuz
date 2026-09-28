import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Copy, Check, ExternalLink, X, Clock, AlertCircle } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { SwissCross } from './SwissCrossPattern';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  reason?: string;
}

export const CallModal: React.FC<CallModalProps> = ({
  isOpen,
  onClose,
  reason = 'Table Reservation & Dining Inquiry'
}) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="call-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF7F2] border-2 border-[#2F5067] shadow-2xl p-6 sm:p-8 text-[#242A30]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header geometric accent */}
        <div className="flex items-center justify-between border-b border-[#DFD5C7] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-none bg-[#9B2424] flex items-center justify-center text-white">
              <SwissCross size={14} color="#FFFFFF" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#644430]">
              Direct Village Contact
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1 text-[#644430] hover:text-[#9B2424] hover:bg-[#ECE4DA] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-6">
          <h2 id="call-modal-title" className="text-2xl sm:text-3xl font-serif text-[#1B2E3B] mb-2">
            Call Restaurant Kreuz
          </h2>
          <p className="text-sm text-[#4E3424] leading-relaxed">
            {reason}. As a traditional Swiss village restaurant, all reservations, table arrangements, and dining inquiries are handled directly by phone.
          </p>
        </div>

        {/* Primary Phone Box */}
        <div className="bg-[#E8F0F5] border-2 border-[#2F5067] p-5 mb-5 text-center">
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-[#2F5067] mb-1">
            Telephone Number
          </div>
          <a
            href={BUSINESS.phoneHref}
            className="inline-block text-2xl sm:text-3xl font-serif font-bold text-[#1B2E3B] hover:text-[#9B2424] transition-colors py-1"
          >
            {BUSINESS.phone}
          </a>
          <div className="text-xs text-[#3E647F] mt-1">
            International format: {BUSINESS.phoneIntl}
          </div>

          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#9B2424] text-white hover:bg-[#821D1D] font-medium text-sm tracking-wide transition-colors shadow-sm"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
            <button
              onClick={handleCopyPhone}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#2F5067]/40 text-[#243E4F] hover:bg-[#FAF7F2] font-medium text-sm transition-colors"
            >
              {copiedPhone ? <Check size={16} className="text-emerald-700" /> : <Copy size={16} />}
              <span>{copiedPhone ? 'Copied' : 'Copy Number'}</span>
            </button>
          </div>
        </div>

        {/* Address & Navigation Quick Access */}
        <div className="bg-[#F4EFEA] border border-[#DFD5C7] p-4 mb-6">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-[#9B2424] shrink-0 mt-0.5" />
            <div className="flex-1 text-xs sm:text-sm">
              <div className="font-semibold text-[#1B2E3B]">{BUSINESS.name}</div>
              <div className="text-[#4E3424]">{BUSINESS.address}</div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={handleCopyAddress}
                title="Copy Address"
                className="p-1.5 text-[#644430] hover:text-[#9B2424] hover:bg-[#ECE4DA] border border-[#DFD5C7] transition-colors"
              >
                {copiedAddress ? <Check size={14} className="text-emerald-700" /> : <Copy size={14} />}
              </button>
              <a
                href="https://maps.google.com/?q=Oberwilstrasse+35+4579+Gossliwil+Switzerland"
                target="_blank"
                rel="noopener noreferrer"
                title="Open in Maps"
                className="p-1.5 text-[#644430] hover:text-[#9B2424] hover:bg-[#ECE4DA] border border-[#DFD5C7] transition-colors"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Informative Note */}
        <div className="flex items-start gap-2.5 text-xs text-[#644430] bg-white/70 p-3 border-l-2 border-[#9B2424]">
          <AlertCircle size={15} className="text-[#9B2424] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Please call directly to confirm table availability or inquire about the day’s dining offerings. Online booking is not operated.
          </p>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs uppercase tracking-wider font-semibold text-[#4E3424] hover:text-[#1B2E3B] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
