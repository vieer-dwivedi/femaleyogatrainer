import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/trainerData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Zone 1: Single clean text element wordmark */}
        <a 
          href="#home" 
          className="text-lg font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 font-heading"
        >
          Female Yoga Trainer
        </a>

        {/* Zone 2: 4–5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a href="#services" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Services
          </a>
          <a href="#about" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Why 1-on-1
          </a>
          <a href="#booking" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Book Session
          </a>
          <a href="#location" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Kharghar Studio
          </a>
          <a href="#faq" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-amber-800 transition-colors px-3 py-2 border border-stone-300 rounded-lg whitespace-nowrap"
            title="Call trainer directly"
          >
            <Phone className="w-3.5 h-3.5 text-amber-700" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Session</span>
          </button>
        </div>
      </div>
    </header>
  );
};
