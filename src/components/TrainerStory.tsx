import React from 'react';
import { Heart, ShieldCheck, Sun, Sparkles, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/trainerData';
import privateYogaImg from '../assets/images/private_yoga_session_1793343057560.jpg';

export const TrainerStory: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100">
              <img
                src={privateYogaImg}
                alt="Female Yoga Trainer in Kharghar offering personalized posture adjustment"
                className="w-full h-[380px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-stone-200 shadow-sm text-stone-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Personalized Safe Adjustments</span>
                    <span className="text-[11px] text-stone-500">Every pose is calibrated to your physical comfort and body limits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Story & Philosophy */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800">
              <span>Why 1-on-1 Training in Kharghar</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 font-heading">
              Dedicated Female Yoga Guidance Designed for Your Body
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Standard commercial yoga classes move too fast, often causing strain or leaving beginners unattended. A private female yoga instructor brings dedicated attention directly to you—giving you the freedom to practice without self-consciousness or injury risk.
            </p>

            {/* Benefit Points */}
            <div className="space-y-4 pt-2">
              
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-1">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 text-sm font-heading">
                    Gentle, Judgement-Free Ladies-Only Space
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                    Homemakers, corporate professionals, and elders often need a peaceful space where they can openly discuss aches, pelvic health, menstrual irregularities, or weight goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-1">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 text-sm font-heading">
                    Zero Commute & Schedule Flexibility
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                    Whether early morning before your family wakes up (6:00 AM) or after office hours, the session takes place in your Kharghar residence or our peaceful Sector 19 studio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-1">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 text-sm font-heading">
                    Breathwork & Nervous System Reset
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                    Beyond physical postures, sessions incorporate traditional Anulom Vilom, Kapalbhati, Bhramari, and deep guided Yoga Nidra to relieve anxiety, insomnia, and chronic stress.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick credentials & reach */}
            <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-6 text-xs text-stone-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Certified Hatha & Ashtanga Yoga</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Navi Mumbai Registered Studio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Doorstep Visits Across Kharghar</span>
              </div>
            </div>

            {/* Contact quick link */}
            <div className="pt-2">
              <span className="text-xs text-stone-500">
                Direct phone inquiries: <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-amber-800 underline">{BUSINESS_INFO.phone}</a>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
