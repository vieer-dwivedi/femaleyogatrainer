import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, Home, Building2, Video, CheckCircle2, 
  MessageCircle, Mail, Phone, MapPin, Sparkles, AlertCircle, RefreshCw 
} from 'lucide-react';
import { BUSINESS_INFO, BookingRecord } from '../data/trainerData';

export const BookingForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [sessionType, setSessionType] = useState<'home' | 'studio' | 'online'>('home');
  const [focusArea, setFocusArea] = useState('General Fitness & Flexibility');
  const [frequency, setFrequency] = useState('3 Sessions / Week');
  const [preferredTime, setPreferredTime] = useState('Morning (7:00 AM - 8:00 AM)');
  const [preferredDate, setPreferredDate] = useState('');
  const [addressDetails, setAddressDetails] = useState('');
  const [healthNotes, setHealthNotes] = useState('');
  
  const [submittedBooking, setSubmittedBooking] = useState<BookingRecord | null>(null);
  const [bookingHistory, setBookingHistory] = useState<BookingRecord[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Get today's ISO date string for minimum date selection
  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    try {
      const saved = localStorage.getItem('kharghar_yoga_bookings');
      if (saved) {
        setBookingHistory(JSON.parse(saved));
      }
    } catch {
      // Ignore storage error
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    const bookingId = `KHY-${Math.floor(1000 + Math.random() * 9000)}`;
    const newRecord: BookingRecord = {
      id: bookingId,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      sessionType,
      focusArea,
      frequency,
      preferredTime,
      preferredDate: preferredDate || 'Flexible / Earliest Available',
      healthNotes: healthNotes.trim() + (addressDetails ? ` [Address/Sector: ${addressDetails}]` : ''),
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'Confirmed'
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedBooking(newRecord);
      const updated = [newRecord, ...bookingHistory];
      setBookingHistory(updated);
      try {
        localStorage.setItem('kharghar_yoga_bookings', JSON.stringify(updated));
      } catch {
        // Ignore
      }
    }, 400);
  };

  const handleResetForm = () => {
    setSubmittedBooking(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setAddressDetails('');
    setHealthNotes('');
    setPreferredDate('');
  };

  const generateWhatsAppMessage = (b: BookingRecord) => {
    const text = `*New Private Yoga Session Booking Request*\n` +
      `---------------------------------\n` +
      `*Booking Ref:* ${b.id}\n` +
      `*Name:* ${b.fullName}\n` +
      `*Phone:* ${b.phone}\n` +
      `*Email:* ${b.email}\n` +
      `*Session Format:* ${b.sessionType.toUpperCase()}\n` +
      `*Focus Area:* ${b.focusArea}\n` +
      `*Frequency:* ${b.frequency}\n` +
      `*Preferred Slot:* ${b.preferredTime}\n` +
      `*Preferred Start Date:* ${b.preferredDate}\n` +
      (b.healthNotes ? `*Notes/Location:* ${b.healthNotes}\n` : '') +
      `---------------------------------\n` +
      `Please confirm slot availability for Kharghar private sessions.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-white border-t border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
            Direct Appointment Scheduler
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight font-heading mt-1">
            Book Private Yoga Sessions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Schedule a 1-on-1 private home visit in Kharghar or a studio session at Sector 19. Fill out your details below and we will confirm your preferred timing immediately.
          </p>
        </div>

        {/* Confirmation Screen when submitted */}
        {submittedBooking ? (
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-sm transition-all">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                Booking Details Submitted
              </span>
              <h3 className="text-2xl font-bold font-heading text-stone-900">
                Thank You, {submittedBooking.fullName}!
              </h3>
              <p className="text-stone-600 text-sm">
                Your private yoga session request has been registered with reference ID:
                <strong className="text-stone-900 block text-lg font-mono mt-1">{submittedBooking.id}</strong>
              </p>
            </div>

            {/* Summary Details Card */}
            <div className="mt-8 bg-white border border-stone-200 rounded-xl p-5 sm:p-6 text-sm text-stone-700 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-stone-100">
                <div>
                  <span className="text-xs text-stone-400 block">Session Format</span>
                  <span className="font-semibold text-stone-900 capitalize flex items-center gap-1.5 mt-0.5">
                    {submittedBooking.sessionType === 'home' && <Home className="w-4 h-4 text-amber-700" />}
                    {submittedBooking.sessionType === 'studio' && <Building2 className="w-4 h-4 text-amber-700" />}
                    {submittedBooking.sessionType === 'online' && <Video className="w-4 h-4 text-amber-700" />}
                    {submittedBooking.sessionType === 'home' ? 'Home Visit (Kharghar/Navi Mumbai)' : submittedBooking.sessionType === 'studio' ? 'Sector 19 Studio Session' : 'Online 1-on-1'}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-stone-400 block">Focus Program</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">{submittedBooking.focusArea}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-stone-100">
                <div>
                  <span className="text-xs text-stone-400 block">Preferred Time Slot</span>
                  <span className="font-medium text-stone-900">{submittedBooking.preferredTime}</span>
                </div>
                <div>
                  <span className="text-xs text-stone-400 block">Requested Date</span>
                  <span className="font-medium text-stone-900">{submittedBooking.preferredDate}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <span className="text-xs text-stone-400 block">Phone / WhatsApp</span>
                  <span className="font-medium text-stone-900">{submittedBooking.phone}</span>
                </div>
                <div>
                  <span className="text-xs text-stone-400 block">Email</span>
                  <span className="font-medium text-stone-900">{submittedBooking.email}</span>
                </div>
              </div>

              {submittedBooking.healthNotes && (
                <div className="pt-2 border-t border-stone-100">
                  <span className="text-xs text-stone-400 block">Notes & Location</span>
                  <p className="text-stone-700 mt-0.5 text-xs">{submittedBooking.healthNotes}</p>
                </div>
              )}
            </div>

            {/* Direct Instant Contact Actions */}
            <div className="mt-8 pt-6 border-t border-stone-200 space-y-4">
              <p className="text-center text-xs font-medium text-stone-500">
                For fastest confirmation, click below to send this appointment directly to the trainer on WhatsApp:
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${generateWhatsAppMessage(submittedBooking)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp to +91 9773771853</span>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}?subject=Booking%20Confirmation%20${submittedBooking.id}&body=${encodeURIComponent(`Hello, I have submitted a booking for private yoga sessions with ID: ${submittedBooking.id}.\nName: ${submittedBooking.fullName}\nPhone: ${submittedBooking.phone}\nPreferred Slot: ${submittedBooking.preferredTime}`)}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold text-sm rounded-xl transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email swamiyogi01@gmail.com</span>
                </a>
              </div>

              <div className="text-center pt-3">
                <button
                  onClick={handleResetForm}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 hover:underline"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Book another session / Change details</span>
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* The Form */
          <form onSubmit={handleSubmit} className="bg-stone-50 border border-stone-200/90 rounded-2xl p-6 sm:p-9 shadow-sm">
            
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Step 1: Session Format Selector */}
            <div className="space-y-3 mb-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                1. Select Session Format
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setSessionType('home')}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    sessionType === 'home'
                      ? 'border-amber-800 bg-amber-50/70 text-amber-950 ring-1 ring-amber-800 shadow-sm'
                      : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <Home className={`w-5 h-5 ${sessionType === 'home' ? 'text-amber-800' : 'text-stone-400'}`} />
                    <span className="text-[11px] font-semibold text-amber-800">Popular</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Home Visit</div>
                    <div className="text-xs text-stone-500 mt-1">Trainer visits your residence in Kharghar</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSessionType('studio')}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    sessionType === 'studio'
                      ? 'border-amber-800 bg-amber-50/70 text-amber-950 ring-1 ring-amber-800 shadow-sm'
                      : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <Building2 className={`w-5 h-5 ${sessionType === 'studio' ? 'text-amber-800' : 'text-stone-400'}`} />
                    <span className="text-[11px] font-medium text-stone-500">Sector 19</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Studio Private</div>
                    <div className="text-xs text-stone-500 mt-1">Harshi Heritage CHS, Plot 101</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSessionType('online')}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    sessionType === 'online'
                      ? 'border-amber-800 bg-amber-50/70 text-amber-950 ring-1 ring-amber-800 shadow-sm'
                      : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <Video className={`w-5 h-5 ${sessionType === 'online' ? 'text-amber-800' : 'text-stone-400'}`} />
                    <span className="text-[11px] font-medium text-stone-500">Live Video</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Online 1-on-1</div>
                    <div className="text-xs text-stone-500 mt-1">Interactive remote personal coaching</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Contact Information */}
            <div className="space-y-4 mb-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                2. Your Contact Details
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-medium text-stone-600 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Pooja Sharma"
                    required
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800/40 focus:border-amber-800 transition"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-stone-600 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800/40 focus:border-amber-800 transition"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-stone-600 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. yourname@gmail.com"
                  required
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800/40 focus:border-amber-800 transition"
                />
              </div>

              {sessionType === 'home' && (
                <div>
                  <label htmlFor="addressDetails" className="block text-xs font-medium text-stone-600 mb-1">
                    Your Society / Sector in Kharghar *
                  </label>
                  <input
                    type="text"
                    id="addressDetails"
                    value={addressDetails}
                    onChange={(e) => setAddressDetails(e.target.value)}
                    placeholder="e.g. Sector 20, Regency Park CHS / Sector 35 / Hiranandani"
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800/40 focus:border-amber-800 transition"
                  />
                </div>
              )}
            </div>

            {/* Step 3: Program Focus & Schedule */}
            <div className="space-y-4 mb-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                3. Program Focus & Preferences
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="focusArea" className="block text-xs font-medium text-stone-600 mb-1">
                    Primary Yoga Goal
                  </label>
                  <select
                    id="focusArea"
                    value={focusArea}
                    onChange={(e) => setFocusArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800/40 focus:border-amber-800 transition"
                  >
                    <option value="General Fitness & Flexibility">General Fitness & Flexibility</option>
                    <option value="Weight Loss & Core Toning">Weight Loss & Core Toning</option>
                    <option value="Therapeutic Yoga (Back Pain, Cervical, Sciatica)">Therapeutic Yoga (Back Pain, Cervical, Sciatica)</option>
                    <option value="Women's Hormonal Health (PCOD / Thyroid)">Women&apos;s Hormonal Health (PCOD / Thyroid)</option>
                    <option value="Prenatal Yoga (Safe Pregnancy Stretches)">Prenatal Yoga (Safe Pregnancy Stretches)</option>
                    <option value="Postnatal Recovery & Toning">Postnatal Recovery & Toning</option>
                    <option value="Pranayama & Stress Management">Pranayama & Stress Management</option>
                    <option value="Senior Citizen Gentle Mobility">Senior Citizen Gentle Mobility</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="frequency" className="block text-xs font-medium text-stone-600 mb-1">
                    Session Frequency
                  </label>
                  <select
                    id="frequency"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800/40 focus:border-amber-800 transition"
                  >
                    <option value="3 Sessions / Week">3 Sessions per Week (Mon/Wed/Fri)</option>
                    <option value="5 Sessions / Week">5 Sessions per Week (Mon to Fri)</option>
                    <option value="1 Trial Session">Single 1-on-1 Trial / Evaluation Session</option>
                    <option value="Weekend Special (Sat & Sun)">Weekend Special (Saturday & Sunday)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-medium text-stone-600 mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <select
                      id="preferredTime"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800/40 focus:border-amber-800 transition"
                    >
                      <option value="Early Morning (6:00 AM - 7:00 AM)">Early Morning (6:00 AM - 7:00 AM)</option>
                      <option value="Morning (7:00 AM - 8:00 AM)">Morning (7:00 AM - 8:00 AM)</option>
                      <option value="Morning (8:00 AM - 9:00 AM)">Morning (8:00 AM - 9:00 AM)</option>
                      <option value="Mid-Morning (9:30 AM - 10:30 AM)">Mid-Morning (9:30 AM - 10:30 AM)</option>
                      <option value="Afternoon (12:00 PM - 2:00 PM)">Afternoon (12:00 PM - 2:00 PM)</option>
                      <option value="Evening (5:00 PM - 6:00 PM)">Evening (5:00 PM - 6:00 PM)</option>
                      <option value="Evening (6:00 PM - 7:00 PM)">Evening (6:00 PM - 7:00 PM)</option>
                      <option value="Late Evening (7:00 PM - 8:30 PM)">Late Evening (7:00 PM - 8:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-medium text-stone-600 mb-1">
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    min={todayStr}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800/40 focus:border-amber-800 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="healthNotes" className="block text-xs font-medium text-stone-600 mb-1">
                  Health Background & Notes (Optional)
                </label>
                <textarea
                  id="healthNotes"
                  rows={2}
                  value={healthNotes}
                  onChange={(e) => setHealthNotes(e.target.value)}
                  placeholder="Mention any knee pain, back issues, medical surgery, pregnancy stage, or specific goals you'd like the trainer to focus on..."
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800/40 focus:border-amber-800 transition resize-none"
                />
              </div>

            </div>

            {/* Direct Contact Summary Info */}
            <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl mb-6 text-xs text-amber-900 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                <span>
                  Immediate booking response sent to <strong>+91 9773771853</strong> & <strong>swamiyogi01@gmail.com</strong>
                </span>
              </div>
              <div className="text-stone-600 whitespace-nowrap">
                Sector 19, Kharghar
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 bg-amber-800 hover:bg-amber-900 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{isSubmitting ? 'Confirming Appointment...' : 'Submit Private Session Request'}</span>
            </button>

            <p className="text-center text-xs text-stone-500 mt-3">
              No advance payment needed to request consultation. Trainer will verify timing with you.
            </p>

          </form>
        )}

        {/* Existing Local Bookings Preview if any */}
        {bookingHistory.length > 0 && !submittedBooking && (
          <div className="mt-8 pt-6 border-t border-stone-200">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-3">
              Your Recent Requests ({bookingHistory.length})
            </span>
            <div className="space-y-2">
              {bookingHistory.slice(0, 3).map((item) => (
                <div key={item.id} className="p-3 bg-white border border-stone-200 rounded-lg text-xs flex items-center justify-between gap-2">
                  <div>
                    <span className="font-semibold text-stone-900">{item.id}</span> · {item.focusArea} ({item.preferredTime})
                  </div>
                  <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
