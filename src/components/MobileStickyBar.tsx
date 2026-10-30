import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/trainerData';

interface MobileStickyBarProps {
  onBookClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBookClick }) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2.5 shadow-lg">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Direct Call */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-xl text-xs font-semibold transition active:scale-95"
        >
          <Phone className="w-3.5 h-3.5 text-amber-700" />
          <span>Call</span>
        </a>

        {/* Direct WhatsApp */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello! I am inquiring about private female yoga sessions in Kharghar.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition active:scale-95 shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Form Link */}
        <button
          onClick={onBookClick}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-semibold transition active:scale-95 shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>

      </div>
    </div>
  );
};
