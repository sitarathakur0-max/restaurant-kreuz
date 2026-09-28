import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Info } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { SwissCross } from './SwissCrossPattern';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactForm: React.FC<{ onOpenCallModal?: () => void }> = ({ onOpenCallModal }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    topic: 'Dining Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (formData.phone.trim() && !/^[+0-9\s\-()]{6,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid phone number or leave blank.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please enter a message of at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      topic: 'Dining Inquiry',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#F4EFEA] border-2 border-[#2F5067] p-8 text-center animate-fadeIn">
        <div className="w-12 h-12 mx-auto mb-4 bg-[#2F5067] text-white flex items-center justify-center">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="text-2xl font-serif text-[#1B2E3B] mb-2">Message Received</h3>
        <p className="text-sm text-[#4E3424] max-w-md mx-auto mb-6 leading-relaxed">
          Thank you, <strong>{formData.fullName}</strong>. Your inquiry regarding <em>{formData.topic}</em> has been recorded. For urgent inquiries or immediate table requests, please telephone the restaurant directly.
        </p>

        <div className="inline-flex flex-col sm:flex-row items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9B2424] text-white font-medium text-sm hover:bg-[#821D1D] transition-colors"
          >
            <Phone size={15} />
            <span>Call Restaurant: {BUSINESS.phone}</span>
          </a>
          <button
            onClick={handleReset}
            className="px-5 py-2.5 border border-[#2F5067] text-[#243E4F] hover:bg-[#ECE4DA] text-sm font-medium transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-[#FAF7F2] border-2 border-[#2F5067] p-6 sm:p-8">
      <div className="border-b border-[#DFD5C7] pb-4 mb-6">
        <div className="flex items-center gap-2 mb-1">
          <SwissCross size={12} color="#9B2424" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#644430]">
            Electronic Inquiry
          </span>
        </div>
        <h3 className="text-2xl font-serif text-[#1B2E3B]">
          Send an Inquiry to Restaurant Kreuz
        </h3>
        <p className="text-xs text-[#4E3424] mt-1">
          For same-day reservations or urgent questions, please call{' '}
          <a href={BUSINESS.phoneHref} className="text-[#9B2424] font-semibold underline">
            {BUSINESS.phone}
          </a>.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="contact-fullName" className="block text-xs uppercase tracking-wider font-semibold text-[#243E4F] mb-1">
            Your Full Name <span className="text-[#9B2424]">*</span>
          </label>
          <input
            id="contact-fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g., Anna Meier"
            className={`w-full px-3.5 py-2.5 bg-white border ${
              errors.fullName ? 'border-[#9B2424] focus:ring-[#9B2424]' : 'border-[#DFD5C7] focus:border-[#2F5067]'
            } text-[#1B2E3B] text-sm focus:outline-none focus:ring-1`}
          />
          {errors.fullName && (
            <p className="text-xs text-[#9B2424] mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider font-semibold text-[#243E4F] mb-1">
              Email Address <span className="text-[#9B2424]">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g., anna.meier@example.ch"
              className={`w-full px-3.5 py-2.5 bg-white border ${
                errors.email ? 'border-[#9B2424] focus:ring-[#9B2424]' : 'border-[#DFD5C7] focus:border-[#2F5067]'
              } text-[#1B2E3B] text-sm focus:outline-none focus:ring-1`}
            />
            {errors.email && (
              <p className="text-xs text-[#9B2424] mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider font-semibold text-[#243E4F] mb-1">
              Telephone / Mobile
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g., 079 000 00 00"
              className={`w-full px-3.5 py-2.5 bg-white border ${
                errors.phone ? 'border-[#9B2424] focus:ring-[#9B2424]' : 'border-[#DFD5C7] focus:border-[#2F5067]'
              } text-[#1B2E3B] text-sm focus:outline-none focus:ring-1`}
            />
            {errors.phone && (
              <p className="text-xs text-[#9B2424] mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Topic Selector */}
        <div>
          <label htmlFor="contact-topic" className="block text-xs uppercase tracking-wider font-semibold text-[#243E4F] mb-1">
            Inquiry Purpose
          </label>
          <select
            id="contact-topic"
            value={formData.topic}
            onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-white border border-[#DFD5C7] text-[#1B2E3B] text-sm focus:border-[#2F5067] focus:outline-none focus:ring-1 focus:ring-[#2F5067]"
          >
            <option value="Dining Inquiry">General Dining & Visit Inquiry</option>
            <option value="Group or Family Gathering">Group or Family Gathering Question</option>
            <option value="Location & Accessibility">Directions & Village Location</option>
            <option value="General Question">General Message</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider font-semibold text-[#243E4F]">
              Your Message <span className="text-[#9B2424]">*</span>
            </label>
            <span className="text-[11px] text-[#644430]">
              {formData.message.length} characters
            </span>
          </div>
          <textarea
            id="contact-message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Please write your questions or notes regarding your planned visit to Restaurant Kreuz..."
            className={`w-full px-3.5 py-2.5 bg-white border ${
              errors.message ? 'border-[#9B2424] focus:ring-[#9B2424]' : 'border-[#DFD5C7] focus:border-[#2F5067]'
            } text-[#1B2E3B] text-sm focus:outline-none focus:ring-1`}
          />
          {errors.message && (
            <p className="text-xs text-[#9B2424] mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.message}
            </p>
          )}
        </div>

        {/* Policy notice */}
        <div className="flex items-start gap-2 text-xs text-[#644430] bg-[#F4EFEA] p-3 border border-[#DFD5C7]">
          <Info size={14} className="text-[#2F5067] shrink-0 mt-0.5" />
          <span>
            This form is intended for general correspondence and visit questions. To guarantee a table reservation on a specific day, please call <strong>032 661 18 28</strong> directly.
          </span>
        </div>

        {/* Submit */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1B2E3B] hover:bg-[#243E4F] text-white font-medium text-sm tracking-wider uppercase transition-colors disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Sending inquiry...</span>
            ) : (
              <>
                <Send size={15} />
                <span>Submit Inquiry</span>
              </>
            )}
          </button>

          {onOpenCallModal && (
            <button
              type="button"
              onClick={onOpenCallModal}
              className="text-xs font-semibold text-[#9B2424] hover:text-[#821D1D] underline tracking-wider uppercase"
            >
              Prefer to call directly?
            </button>
          )}
        </div>
      </div>
    </form>
  );
};
