import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, KHARGHAR_LOCALITIES } from '../data/trainerData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
            Sector 19 Studio & Doorstep Coverage
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight font-heading mt-1">
            Studio Location & Kharghar Service Area
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Visit our serene private studio in Sector 19 Kharghar, or request our certified female trainer to visit your home anywhere across Kharghar and adjacent Navi Mumbai nodes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Address & Contact Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Address Box */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                    Official Business Address
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-stone-900">
                    501, 5th Floor, Harshi Heritage CHS
                  </h3>
                  <p className="text-stone-700 text-sm leading-relaxed font-medium">
                    Plot number 101, Sector 19, Kharghar, Navi Mumbai 410210.
                  </p>
                  
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <a
                      href={BUSINESS_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions on Google Maps</span>
                    </a>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-700" />
                      <span>Call for Landmark Assistance</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-6 border-t border-stone-100 text-xs text-stone-600">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 block">Phone</span>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-800 hover:underline font-medium">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 block">Email</span>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-amber-800 hover:underline font-medium break-all">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:col-span-2">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 block">Session Timings</span>
                    <p className="text-stone-700 mt-0.5">{BUSINESS_INFO.timings}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Landmarks & Accessibility Guide */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-stone-900 font-heading text-sm mb-3">
                How to Reach Harshi Heritage CHS (Sector 19)
              </h4>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-stone-900 shrink-0">Metro & Train:</span>
                  <span>Conveniently reachable from Kharghar Railway Station and nearby Navi Mumbai Metro corridor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-stone-900 shrink-0">Prominent Landmarks:</span>
                  <span>Sector 19 Kharghar, close to Shilp Chowk, Sector 20 market, and Central Park connector road.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-stone-900 shrink-0">Elevator & Accessibility:</span>
                  <span>Building has 2 high-speed elevators directly reaching the 5th floor (Flat 501). Ample visitor parking available outside the society.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Home Visit Sectors Coverage List (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 block mb-1">
                Doorstep Home Visits
              </span>
              <h4 className="text-lg font-bold font-heading text-stone-900 mb-2">
                Kharghar Sectors Covered
              </h4>
              <p className="text-xs text-stone-600 mb-4">
                Our female yoga trainer travels directly to your residential complex or apartment across the following Kharghar nodes:
              </p>

              <div className="space-y-2">
                {KHARGHAR_LOCALITIES.map((loc, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2 bg-stone-50 rounded-lg text-xs font-medium text-stone-800 border border-stone-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{loc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-stone-100 text-center">
                <p className="text-xs text-stone-500 mb-3">
                  Reside in a different sector? Inquire for home visit slot availability.
                </p>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello! I stay in Kharghar and would like to ask about home visit yoga sessions in my sector.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  <span>Inquire Sector Availability on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Interactive Map Embed */}
            <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-3 bg-stone-100/80 border-b border-stone-200 text-xs font-semibold text-stone-700 flex items-center justify-between">
                <span>Sector 19, Kharghar, Navi Mumbai 410210</span>
                <span className="text-amber-800 font-bold">Harshi Heritage</span>
              </div>
              <iframe
                title="Harshi Heritage CHS Sector 19 Kharghar Map"
                src="https://maps.google.com/maps?q=Harshi+Heritage+CHS+Plot+101+Sector+19+Kharghar+Navi+Mumbai+410210&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-56 border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
