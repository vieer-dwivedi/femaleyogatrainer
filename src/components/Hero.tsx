import React, { useState } from 'react';
import { Phone, Mail, MapPin, Check, Copy, MessageCircle, ArrowDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/trainerData';

interface HeroProps {
  onScrollToBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToBooking }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="home" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-100/50 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Centered Content Block */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          
          {/* Subtle Top Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800">
            <span>Navi Mumbai</span>
            <span aria-hidden="true">·</span>
            <span>Sector 19 Kharghar</span>
            <span aria-hidden="true">·</span>
            <span>Private 1-on-1 Sessions</span>
          </div>

          {/* EXACT HEADING REQUESTED BY USER - IN CENTER */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 text-center font-heading">
            Female Yoga Traineer at Kharghar
          </h1>

          {/* Descriptive Subtitle for Kharghar Clients */}
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Personalized, one-on-one yoga sessions for women in the comfort of your home or at our private Kharghar studio. Specialized in therapeutic recovery, hormonal balance, prenatal care, and weight management.
          </p>

          {/* CRITICAL CONTACT DETAILS BELOW HEADING */}
          <div className="pt-2 pb-4">
            <div className="bg-white border border-stone-200/90 rounded-2xl shadow-sm p-5 sm:p-7 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 divide-y md:divide-y-0 md:divide-x divide-stone-100">
                
                {/* Phone Section */}
                <div className="flex flex-col items-center text-center p-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Call & WhatsApp Direct
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-xl sm:text-2xl font-bold text-stone-900 hover:text-amber-800 transition-colors tracking-tight font-heading"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <div className="flex items-center gap-2 mt-3">
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium rounded-lg transition-colors"
                      title="Direct phone call"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-700" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello, I am looking for a female yoga trainer in Kharghar for private sessions. Please share details.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-lg transition-colors shadow-sm"
                      title="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="inline-flex items-center p-1.5 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors"
                      title="Copy phone number"
                      aria-label="Copy phone number"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex flex-col items-center text-center p-2 pt-4 md:pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Direct Email Inquiries
                  </span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-lg sm:text-xl font-semibold text-stone-900 hover:text-amber-800 transition-colors tracking-tight font-heading break-all"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <div className="flex items-center gap-2 mt-3">
                    <a
                      href={`mailto:${BUSINESS_INFO.email}?subject=Private%20Yoga%20Session%20Inquiry%20-%20Kharghar`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium rounded-lg transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-amber-700" />
                      <span>Send Email</span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium rounded-lg transition-colors"
                      title="Copy email address"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedEmail ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Exact Business Address Bar */}
              <div className="mt-5 pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-stone-700">
                    <span className="font-semibold text-stone-900">Studio Address: </span>
                    {BUSINESS_INFO.address.full}
                  </div>
                </div>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-amber-800 hover:text-amber-900 underline whitespace-nowrap shrink-0"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onScrollToBooking}
              className="px-6 py-3 text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 inline-flex items-center gap-2"
            >
              <span>Book Private Session Now</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            <a
              href="#services"
              className="px-5 py-3 text-sm font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 rounded-xl transition-all"
            >
              Explore Training Programs
            </a>
          </div>

        </div>

        {/* Hero Visual Showcase */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-lg bg-stone-100">
            <img
              src="/src/assets/images/yoga_trainer_hero_1793343057521.jpg"
              alt="Female Yoga Trainer in Kharghar conducting a private session"
              className="w-full h-[320px] sm:h-[420px] md:h-[480px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Overlay banner */}
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-200">
                  Certified Female Yoga Instruction
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                  1-on-1 In-Home & Studio Sessions in Kharghar
                </h2>
                <p className="text-xs sm:text-sm text-stone-200 mt-1 max-w-xl">
                  Holistic Hatha & Vinyasa Yoga designed specifically for women&apos;s physical health, posture correction, weight management, and inner calm.
                </p>
              </div>
              <div className="shrink-0 text-left sm:text-right">
                <span className="text-xs text-stone-300 block">Covering Sectors</span>
                <span className="text-sm font-semibold text-amber-100">Kharghar Sectors 1 to 35</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
