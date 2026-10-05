'use client';

import React, { useState } from 'react';
import { Reveal } from '../animations/Reveal';
import { Sparkle } from '../illustrations/Sparkle';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real form validation & submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }, 1000);
  };

  return (
    <section id="contact" className="relative bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#171717] border border-[#FFD400]/40 px-4 py-1.5 rounded-full mb-4">
            <Sparkle size={16} color="#FFD400" />
            <span className="text-[#FFD400] text-xs font-black uppercase tracking-widest">
              GET IN TOUCH
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-4"
            style={{ fontFamily: "'Bowlby One SC', 'Impact', sans-serif" }}
          >
            LET&apos;S MAKE SOMETHING <span className="text-[#FFD400]">DELICIOUS HAPPEN!</span>
          </h2>

          <p className="text-base sm:text-lg text-[#BDBDBD] font-normal leading-relaxed">
            Got a question or want to connect with WOW! WAFFLE? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: OUTLET & CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="left" delay={0.1}>
              <div className="bg-[#141414] p-8 rounded-3xl border border-[#2a2a2a] shadow-xl space-y-6">
                <h3 className="text-xl font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
                  Confirmed Outlet Location
                </h3>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#080808] border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-extrabold text-base">WOW! WAFFLE — Ankleshwar</h4>
                    <p className="text-xs text-[#BDBDBD] leading-relaxed pt-1">
                      Shop No. 3, Garden City, Ankleshwar, Bharuch, Gujarat, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#BDBDBD]">
                  <div className="w-10 h-10 rounded-xl bg-[#080808] border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[#888888]">Customer Support Line</p>
                    <p className="text-white font-bold text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#BDBDBD]">
                  <div className="w-10 h-10 rounded-xl bg-[#080808] border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[#888888]">Direct Email</p>
                    <p className="text-white font-bold text-sm">hello@wowwaffle.in</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#222222]">
                  <a
                    href="https://www.google.com/maps/place/Garden+City+Cricket+Ground+%26+Garba+Ground/@21.6047194,73.049984,17z/data=!4m15!1m8!3m7!1s0x3be0225adc5a0f5f:0x1ea3182a9da7bba5!2sJ333%2B4VF,+3,+Garden+City,+Give,+Gujarat+393001!3b1!8m2!3d21.6028404!4d73.054758!16s%2Fg%2F11wfy2rthk!3m5!1s0x3be0224ff960b8e5:0xc151c1bb02ca81c0!8m2!3d21.6047184!4d73.0525577!16s%2Fg%2F11c1tly79q?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-block text-center bg-[#FFD400] hover:bg-[#FFE95B] text-[#080808] font-black text-xs py-3 rounded-xl uppercase tracking-wider transition-colors shadow-md"
                  >
                    Open Directions in Google Maps
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.2}>
              <div className="bg-[#141414] p-8 rounded-3xl border border-[#2a2a2a] shadow-xl">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-[#FFD400]/20 border border-[#FFD400] flex items-center justify-center text-[#FFD400] mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase">MESSAGE RECEIVED!</h3>
                    <p className="text-sm text-[#BDBDBD] max-w-md mx-auto">
                      Thank you for reaching out to WOW! WAFFLE. We will review your message and get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 bg-[#FFD400] text-[#080808] font-black text-xs px-6 py-2.5 rounded-full uppercase tracking-wider"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* NAME */}
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold text-[#BDBDBD] uppercase mb-1.5">
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className={`w-full bg-[#080808] text-white text-sm font-semibold px-4 py-3 rounded-xl border outline-none transition-colors ${
                            errors.name ? 'border-red-500' : 'border-[#333333] focus:border-[#FFD400]'
                          }`}
                        />
                        {errors.name && <p className="text-xs text-red-400 mt-1 font-semibold">{errors.name}</p>}
                      </div>

                      {/* EMAIL */}
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-bold text-[#BDBDBD] uppercase mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className={`w-full bg-[#080808] text-white text-sm font-semibold px-4 py-3 rounded-xl border outline-none transition-colors ${
                            errors.email ? 'border-red-500' : 'border-[#333333] focus:border-[#FFD400]'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-400 mt-1 font-semibold">{errors.email}</p>}
                      </div>
                    </div>

                    {/* PHONE */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-[#BDBDBD] uppercase mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#080808] text-white text-sm font-semibold px-4 py-3 rounded-xl border border-[#333333] focus:border-[#FFD400] outline-none transition-colors"
                      />
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold text-[#BDBDBD] uppercase mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your feedback, party orders, or questions..."
                        className={`w-full bg-[#080808] text-white text-sm font-semibold p-4 rounded-xl border outline-none transition-colors resize-none ${
                          errors.message ? 'border-red-500' : 'border-[#333333] focus:border-[#FFD400]'
                        }`}
                      />
                      {errors.message && <p className="text-xs text-red-400 mt-1 font-semibold">{errors.message}</p>}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#FFD400] hover:bg-[#FFE95B] text-[#080808] font-black text-sm py-4 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(255,212,0,0.4)] hover:shadow-[0_0_30px_rgba(255,212,0,0.7)]"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SEND MESSAGE</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
