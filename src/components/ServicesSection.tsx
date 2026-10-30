import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/trainerData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.id === selectedCategory || (selectedCategory === 'home' && s.id === 'home-visit') || (selectedCategory === 'therapy' && (s.id === 'therapeutic' || s.id === 'womens-health')));

  return (
    <section id="services" className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
            Tailored 1-on-1 Programs
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight font-heading mt-1">
            Private Yoga Services for Women
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Every woman&apos;s anatomy and lifestyle demands individual care. Each session is structured around your energy levels, physical goals, and schedule in Kharghar.
          </p>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6 p-1 bg-stone-200/80 rounded-xl max-w-md mx-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Programs
            </button>
            <button
              onClick={() => setSelectedCategory('home')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === 'home'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Home Visits
            </button>
            <button
              onClick={() => setSelectedCategory('therapy')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === 'therapy'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Therapeutic & Health
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Clean unboxed tag */}
                <div className="flex items-center justify-between text-xs text-amber-800 font-semibold mb-3">
                  <span>{service.tag}</span>
                  <span className="text-stone-400 font-normal">Kharghar</span>
                </div>

                <h3 className="text-xl font-bold font-heading text-stone-900 group-hover:text-amber-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-amber-900/80 font-medium mt-0.5 mb-3">
                  {service.subtitle}
                </p>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 pt-3 border-t border-stone-100">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 mt-6 border-t border-stone-100">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-4 bg-stone-100 hover:bg-amber-800 hover:text-white text-stone-800 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 group-hover:bg-amber-800 group-hover:text-white"
                >
                  <span>Select for Private Booking</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Home Visit Guarantee Strip */}
        <div className="mt-12 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 font-heading text-base sm:text-lg">
                Ladies-Only Safe & Private Learning Atmosphere
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl">
                Practicing with a certified female yoga instructor provides comfort for personal posture corrections, maternity stages, and private discussion of hormonal health.
              </p>
            </div>
          </div>
          <a
            href="#booking"
            className="px-5 py-2.5 bg-stone-900 hover:bg-black text-white text-xs font-semibold rounded-xl whitespace-nowrap shrink-0 transition"
          >
            Check Available Slots
          </a>
        </div>

      </div>
    </section>
  );
};
