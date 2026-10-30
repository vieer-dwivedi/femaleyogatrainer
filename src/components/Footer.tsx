import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/trainerData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-14 pb-20 md:pb-14 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          
          {/* Brand & Purpose (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-xl font-bold font-heading text-white">
              Female Yoga Trainer · Kharghar
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Certified female yoga instructor providing specialized 1-on-1 private home visits and studio sessions across Kharghar and Navi Mumbai.
            </p>
            <div className="pt-2 text-xs text-amber-300/90 font-medium">
              Sector 19 Studio · Doorstep Home Visits Across Kharghar
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Private Yoga Programs</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">Book Private Session</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Kharghar Location & Sectors</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Official Contact & Address (4 cols) */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Official Business Contact
            </h4>
            
            <div className="space-y-2 text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {BUSINESS_INFO.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-amber-400 hover:text-amber-300 underline"
              >
                Open Harshi Heritage CHS on Google Maps →
              </a>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Female Yoga Traineer at Kharghar. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Navi Mumbai, Maharashtra 410210</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
