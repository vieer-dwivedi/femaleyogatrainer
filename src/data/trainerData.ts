export interface BookingRecord {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  sessionType: 'home' | 'studio' | 'online';
  focusArea: string;
  frequency: string;
  preferredTime: string;
  preferredDate: string;
  healthNotes?: string;
  createdAt: string;
  status: 'Confirmed' | 'Pending Callback';
}

export const BUSINESS_INFO = {
  heading: "Female Yoga Traineer at Kharghar",
  phone: "+91 9773771853",
  phoneRaw: "+919773771853",
  whatsappNumber: "919773771853",
  email: "swamiyogi01@gmail.com",
  address: {
    line1: "501, 5th floor, Harshi Heritage CHS",
    line2: "Plot number 101, Sector 19",
    locality: "Kharghar, Navi Mumbai",
    pincode: "410210",
    full: "501, 5th floor, Harshi Heritage CHS, Plot number 101, Sector 19, Kharghar, Navi Mumbai 410210."
  },
  timings: "Monday to Saturday: 6:00 AM – 8:30 PM (Sunday: By Prior Appointment)",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Harshi+Heritage+CHS+Plot+101+Sector+19+Kharghar+Navi+Mumbai+410210"
};

export const SERVICES = [
  {
    id: "home-visit",
    title: "1-on-1 Doorstep Home Training",
    subtitle: "Kharghar & Navi Mumbai Residences",
    description: "Personalized private yoga sessions conducted right in the comfort and privacy of your living room. Ideal for homemakers, working professionals, and new mothers who prefer individual attention without commuting.",
    features: [
      "Customized sequence matching your body type & stamina",
      "Correct postural alignment & zero-injury guidance",
      "Flexible morning or evening time slots",
      "Full privacy and safe environment for female practitioners"
    ],
    tag: "Most Popular in Kharghar"
  },
  {
    id: "studio-session",
    title: "Private Studio Sessions",
    subtitle: "Harshi Heritage CHS, Sector 19 Kharghar",
    description: "Quiet, peaceful, and fully equipped private studio atmosphere at Sector 19, Kharghar. Enjoy dedicated props, peaceful meditation environment, and one-on-one focused attention.",
    features: [
      "Serene ambient atmosphere away from household distractions",
      "Yoga props, blocks, bolsters & belts provided",
      "Comprehensive body assessment & progress tracking",
      "Dedicated pranayama and meditation sound bath integration"
    ],
    tag: "Studio Experience"
  },
  {
    id: "therapeutic",
    title: "Therapeutic & Posture Alignment",
    subtitle: "Medical & Pain Relief Protocols",
    description: "Targeted yogic therapy for chronic ailments including back pain, cervical spondylosis, sciatica, knee stiffness, and sedentary desk posture correction.",
    features: [
      "Gentle spinal decompression & core stabilizing postures",
      "Joint mobility enhancement for stiff necks & shoulders",
      "Designed in consultation with your medical history",
      "Safe, progressive mobility without strenuous impact"
    ],
    tag: "Health & Therapy"
  },
  {
    id: "womens-health",
    title: "Women's Hormonal & Wellness Yoga",
    subtitle: "PCOD/PCOS, Thyroid & Metabolism",
    description: "Specialized sequences stimulating endocrine balance, regulating menstrual health, boosting metabolic rate, and reducing cortisol/stress levels.",
    features: [
      "Asanas targeting reproductive and pelvic health",
      "Stress relief through guided breathwork (Pranayama)",
      "Sustainable natural weight balance techniques",
      "Tailored advice for cycle synchronization"
    ],
    tag: "Women's Health"
  },
  {
    id: "prenatal-postnatal",
    title: "Prenatal & Postnatal Care",
    subtitle: "Motherhood Journey Yoga",
    description: "Doctor-approved prenatal stretches for an easier labor, reduced swelling, and backache relief, followed by postnatal pelvic floor rehabilitation and abdominal recovery.",
    features: [
      "Trimester-specific gentle asanas and breathing techniques",
      "Pelvic floor toning (Mula Bandha basics) & posture relief",
      "Guided relaxation to manage pregnancy fatigue & anxiety",
      "Safe postpartum core restoration"
    ],
    tag: "Prenatal / Postnatal"
  },
  {
    id: "weight-management",
    title: "Weight Loss & Power Flow",
    subtitle: "Dynamic Vinyasa & Core Toning",
    description: "High-energy dynamic yoga flows blending classical Hatha, Ashtanga elements, and Surya Namaskar variations for healthy fat loss, core strengthening, and stamina building.",
    features: [
      "Sweat-inducing dynamic flows with breath control",
      "Abdominal toning and stubborn fat reduction",
      "Post-session yogic metabolic cool down",
      "Mindful eating guidelines"
    ],
    tag: "Fitness & Toning"
  }
];

export const KHARGHAR_LOCALITIES = [
  "Sector 19 (Studio Location)",
  "Sector 20 & 21",
  "Sector 12 & 13",
  "Sector 34, 35 & 36",
  "Hiranandani Complex Kharghar",
  "Valley Shilp & Jalvayu Vihar",
  "Shilp Chowk & Utsav Chowk area",
  "Central Park & Golf Course vicinity",
  "Nearby Belapur, Kamothe & Seawoods (On Request)"
];

export const FAQS = [
  {
    question: "Do you offer home visit yoga training across Kharghar?",
    answer: "Yes, personalized one-on-one doorstep home visits are available throughout Kharghar (including Sector 19, 20, 35, 12, Hiranandani, Valley Shilp, etc.) and adjacent Navi Mumbai sectors. The trainer visits your residence at your preferred morning or evening time slot."
  },
  {
    question: "Where is the private yoga studio located?",
    answer: "Our studio is located at 501, 5th floor, Harshi Heritage CHS, Plot number 101, Sector 19, Kharghar, Navi Mumbai 410210. It is easily accessible from Kharghar Station, the metro corridor, and Shilp Chowk."
  },
  {
    question: "Is this training exclusively for female clients?",
    answer: "Yes. Our private sessions and home visits are designed specifically for female clients—including homemakers, working women, pregnant mothers, seniors, and girls—providing a safe, respectful, comfortable, and supportive environment."
  },
  {
    question: "What should I have ready for a home visit session?",
    answer: "All you need is a standard yoga mat and comfortable stretchable attire in a clean, ventilated space in your room or living area. Any specialized props (blocks, yoga straps) can be recommended based on your personal fitness goals."
  },
  {
    question: "Can beginners or people with back/knee pain practice?",
    answer: "Absolutely. Every private 1-on-1 session is customized from scratch. Before beginning, we discuss your health background, joint conditions, or medical history (such as slip disc, sciatica, cervical issues, or high BP) and customize safe, therapeutic modifications."
  },
  {
    question: "How do I schedule a trial or consultation session?",
    answer: "You can simply fill out the private session booking form on this page, or directly call or message on WhatsApp at +91 9773771853 or email swamiyogi01@gmail.com. We will confirm your preferred timing and date promptly."
  }
];
