import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { TrainerStory } from './components/TrainerStory';
import { BookingForm } from './components/BookingForm';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (_serviceTitle: string) => {
    scrollToBooking();
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800">
      {/* Top Bar */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with exact centered heading & contacts */}
        <Hero onScrollToBooking={scrollToBooking} />

        {/* Private Yoga Services & Programs */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Why 1-on-1 Female Training Matters */}
        <TrainerStory />

        {/* Contact Form for Booking Private Sessions */}
        <BookingForm />

        {/* Location & Sector Coverage */}
        <LocationSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Quick Action Bar */}
      <MobileStickyBar onBookClick={scrollToBooking} />
    </div>
  );
}
