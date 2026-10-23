'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { X, Send, User, Mail, Phone, MapPin, Building2, MessageSquare, AlertCircle } from 'lucide-react';

type FranchiseModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const FranchiseModal: React.FC<FranchiseModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Reset state when reopened
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setErrors({});
      setSendError(null);
      setSending(false);
    }
  }, [isOpen]);

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: '' }));
    setSendError(null);
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!form.email.trim()) next.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.phone.trim()) next.phone = 'Please enter your phone number';
    else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone)) next.phone = 'Enter a valid phone number';
    if (!form.city.trim()) next.city = 'Please enter your city';
    if (!form.budget) next.budget = 'Please select an investment range';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    setSendError(null);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'EmailJS environment variables are missing. Check .env.local and restart the dev server.'
        );
      }

      await emailjs.send(serviceId, templateId, form, { publicKey });

      setSubmitted(true);
      // Reset form after success so reopening is clean
      setForm({ name: '', email: '', phone: '', city: '', budget: '', message: '' });
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      const message =
        err?.text || err?.message || 'Something went wrong while sending. Please try again.';
      setSendError(message);
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111111] border border-[#FFD400]/30 shadow-[0_0_60px_rgba(255,212,0,0.15)]"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 22, stiffness: 260 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#171717] border border-[#333333] text-[#BDBDBD] hover:text-white hover:border-[#FFD400] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
                {/* Header */}
                <div className="space-y-2 pr-8">
                  <span className="inline-block bg-[#FFD400]/10 text-[#FFD400] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-[#FFD400]/30">
                    Franchise Enquiry
                  </span>
                  <h2
                    className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight"
                    style={{ fontFamily: "'Bowlby One SC', 'Impact', sans-serif" }}
                  >
                    Own a <span className="text-[#FFD400]">WOW! WAFFLE</span>
                  </h2>
                  <p className="text-sm text-[#BDBDBD]">
                    Fill in your details and our franchise team will reach out within 24–48 hours.
                  </p>
                </div>

                {/* Name */}
                <Field label="Full Name" icon={<User className="w-4 h-4" />} error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="John Doe"
                    className={inputClass(!!errors.name)}
                  />
                </Field>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Email" icon={<Mail className="w-4 h-4" />} error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@example.com"
                      className={inputClass(!!errors.email)}
                    />
                  </Field>
                  <Field label="Phone" icon={<Phone className="w-4 h-4" />} error={errors.phone}>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className={inputClass(!!errors.phone)}
                    />
                  </Field>
                </div>

                {/* City */}
                <Field label="City / Location" icon={<MapPin className="w-4 h-4" />} error={errors.city}>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => update('city', e.target.value)}
                    placeholder="Mumbai, Maharashtra"
                    className={inputClass(!!errors.city)}
                  />
                </Field>

                {/* Investment range */}
                <Field label="Investment Range" icon={<Building2 className="w-4 h-4" />} error={errors.budget}>
                  <select
                    value={form.budget}
                    onChange={(e) => update('budget', e.target.value)}
                    className={inputClass(!!errors.budget)}
                  >
                    <option value="">Select a range</option>
                    <option value="5-10L">₹5 – 10 Lakhs</option>
                    <option value="10-20L">₹10 – 20 Lakhs</option>
                    <option value="20-50L">₹20 – 50 Lakhs</option>
                    <option value="50L+">₹50 Lakhs +</option>
                  </select>
                </Field>

                {/* Message */}
                <Field label="Message (optional)" icon={<MessageSquare className="w-4 h-4" />}>
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell us about your experience, preferred area, etc."
                    rows={3}
                    className={inputClass(false) + ' resize-none'}
                  />
                </Field>

                {/* Inline error */}
                {sendError && (
                  <div className="flex items-start gap-2 rounded-xl bg-red-500/10 border border-red-500/40 px-3 py-2.5">
                    <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <p className="text-[12px] text-red-300 leading-relaxed">{sendError}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#FFD400] hover:bg-[#FFE95B] text-[#080808] font-black text-sm py-3.5 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_25px_rgba(255,212,0,0.3)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className={`w-4 h-4 ${sending ? 'animate-pulse' : ''}`} />
                  <span>{sending ? 'Sending...' : 'Submit Enquiry'}</span>
                </button>

                <p className="text-[10px] text-center text-[#666666]">
                  By submitting, you agree to be contacted about franchise opportunities.
                </p>
              </form>
            ) : (
              // Success state
              <div className="p-8 sm:p-10 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#FFD400]/15 border border-[#FFD400]/40 flex items-center justify-center">
                  <Send className="w-7 h-7 text-[#FFD400]" />
                </div>
                <h3
                  className="text-2xl font-black uppercase text-white"
                  style={{ fontFamily: "'Bowlby One SC', 'Impact', sans-serif" }}
                >
                  Thank You!
                </h3>
                <p className="text-sm text-[#BDBDBD] max-w-xs mx-auto">
                  Your franchise enquiry has been received. Our team will contact you within 24–48 hours.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 bg-[#FFD400] hover:bg-[#FFE95B] text-[#080808] font-black text-xs px-6 py-2.5 rounded-xl uppercase tracking-wider transition-all"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* --- small helpers --- */

const inputClass = (hasError: boolean) =>
  `w-full bg-[#0A0A0A] border rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-[#555555] outline-none transition-colors ${
    hasError
      ? 'border-red-500/70 focus:border-red-400'
      : 'border-[#2A2A2A] focus:border-[#FFD400]'
  }`;

type FieldProps = {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  children: React.ReactNode;
};

const Field: React.FC<FieldProps> = ({ label, icon, error, children }) => (
  <div className="space-y-1.5">
    <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#BDBDBD]">
      {icon && <span className="text-[#FFD400]">{icon}</span>}
      {label}
    </label>
    {children}
    {error && <p className="text-[11px] text-red-400">{error}</p>}
  </div>
);