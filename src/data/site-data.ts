export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "commercial" | "residential";
  image: string;
  features: string[];
}

export interface WorkingStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const CLIENT_DATA = {
  brandName: "JM Interiors",
  fullName: "J M Interior And Decorators",
  tagline: "Leading Architecture Companies in Bangalore",
  subtitles: [
    "Designing workspaces that inspire daily brilliance",
    "Beautiful furniture for your everyday living",
  ],
  heroDescription:
    "Ready to experience the difference with reputed architects and interior designers in Bangalore? JM Interiors collaborates with some of the leading architecture companies of Bangalore to develop working spaces that are dynamic, breathtaking, and productive.",

  contact: {
    phone: "+91 9035 672 941",
    rawPhone: "9035672941",
    whatsapp: "919035672941",
    email: "jandminteriors2000@gmail.com",
    address: "#2, AECS layout B block, Chikka begur, Bengaluru 560068",
    city: "Bengaluru, Karnataka",
    googleMapsUrl: "https://maps.google.com/?q=AECS+layout+B+block+Chikka+begur+Bengaluru+560068",
  },

  about: {
    eyebrow: "About JM Interiors",
    title: "Your Professional Architecture Partner",
    body: "JM Interiors is based in Bangalore, where architects receive an award amongst creatives with the client craftsman's passion for the modern workspace. The vision: To make any space completely attached to ambition, style, and productivity.",
    pillars: [
      { title: "Innovative Workspace Designs", desc: "Crafting modern offices tailored to your culture." },
      { title: "Passion Meets Precision", desc: "Rigorous standards from blueprint to execution." },
      { title: "Style with Purpose", desc: "Harmonizing contemporary beauty with functional utility." },
      { title: "Productivity Through Aesthetics", desc: "Inspiring focus and high performance in every square foot." },
    ],
    features: [
      {
        title: "Exclusive Design",
        desc: "Tailored interiors reflecting your unique lifestyle and brand presence.",
      },
      {
        title: "Professional Team",
        desc: "Experienced specialists ensuring perfection in every detail and finish.",
      },
    ],
    stats: [
      { value: "10+", label: "Years Of Experience", desc: "Interior & architectural expertise" },
      { value: "100+", label: "Successful Projects", desc: "Across commercial & residential Bangalore" },
      { value: "98%", label: "Satisfied Clients", desc: "Long-term relationships built on trust" },
      { value: "100%", label: "On-Time & On-Budget", desc: "Milestone-backed delivery protocol" },
    ],
  },

  services: [
    {
      id: "office-furniture",
      title: "Office Furniture",
      subtitle: "From Design to Delivery — We Handle It All",
      description: "Ergonomic modular workstations, executive boardrooms, acoustic breakout pods, and custom reception desks designed for high-performing Bengaluru teams.",
      category: "commercial",
      image: "/assets/project-office.jpg",
      features: [
        "Ergonomic modular benching systems",
        "Executive cabins and custom boardroom tables",
        "Acoustic phone booths and breakout lounges",
        "BIFMA-compliant seating with lumbar adjustability",
      ],
    },
    {
      id: "office-interiors",
      title: "Office Interiors",
      subtitle: "Elegant, Productive Work Environments",
      description: "Complete turnkey commercial interiors from civil planning and false ceilings to acoustic engineering, smart lighting, and HVAC distribution.",
      category: "commercial",
      image: "/assets/project-retail.jpg",
      features: [
        "Turnkey civil restructuring and acoustic ceiling baffles",
        "Structured LAN raceways and biometric access controls",
        "Dynamic dim-to-warm architectural ambient lighting",
        "Agile phased delivery to eliminate business downtime",
      ],
    },
    {
      id: "home-furniture",
      title: "Home Furniture",
      subtitle: "Ergonomic & Stylish Solutions",
      description: "In-house joinery creating bespoke solid wood dining tables, floor-to-ceiling wardrobes, media credenzas, and cane storage crafted to last generations.",
      category: "residential",
      image: "/assets/project-dining.jpg",
      features: [
        "Handcrafted solid wood dining ensembles",
        "Floor-to-ceiling wardrobes with integrated sensor lighting",
        "Custom cane, veneer, and brass console units",
        "Sustainable low-VOC eco-friendly natural finishes",
      ],
    },
    {
      id: "home-interiors",
      title: "Home Interiors",
      subtitle: "Modern Designs for Your Living Spaces",
      description: "Full-home interior architecture for luxury apartments and independent villas in Bangalore, eliminating cookie-cutter packages with tailored layouts.",
      category: "residential",
      image: "/assets/project-living.jpg",
      features: [
        "Architectural living room feature walls with concealed cabling",
        "Serene master bedroom suites with acoustic wall panels",
        "German-hardware modular kitchens with Blum soft-close",
        "Italian marble, fluted oak, and textured lime plasters",
      ],
    },
  ] as ServiceItem[],

  workingSteps: [
    {
      step: "01",
      title: "Visit Project",
      description: "Understand requirements and assess project site. Our principal team visits your property in Bengaluru for laser measurements and structural feasibility.",
    },
    {
      step: "02",
      title: "Planning Design",
      description: "Create functional layouts with aesthetic appeal. Developing spatial plans, furniture flows, and preliminary material moodboards.",
    },
    {
      step: "03",
      title: "Project Sketch",
      description: "Develop detailed sketches and 3D architectural renders for client approval with transparent itemized costings.",
    },
    {
      step: "04",
      title: "Start Working",
      description: "Execute plans with precision and quality. On-site project supervision, factory modular installation, and final white-glove handover.",
    },
  ] as WorkingStep[],

  whyChooseUs: [
    { title: "10+ Years of Interior Expertise", desc: "Proven track record across Bangalore's premier residential & commercial hubs." },
    { title: "100+ Successful Projects Across Bangalore", desc: "From tech offices on Outer Ring Road to luxury residences in Koramangala." },
    { title: "Custom Designs to Match Your Brand & Culture", desc: "No rigid catalog compromises — every blueprint drawn from scratch." },
    { title: "On-Time & On-Budget Delivery", desc: "Rigorous milestone scheduling and guaranteed transparent pricing." },
  ],

  testimonials: [
    {
      quote: "The reputed architecture firms in Bangalore always set the standard. JM Interiors stands out for professionalism and reliability.",
      author: "Krishna David",
      role: "HR Manager",
      company: "Bangalore",
    },
    {
      quote: "Our new office is a testament to modern architecture firms in Bangalore. JM exceeded expectations in design and delivery schedule.",
      author: "Sakshi Menon",
      role: "Design Lead",
      company: "Bangalore",
    },
    {
      quote: "JM Interiors turned our vision into reality. Efficient, creative, and always a step ahead from site inspection to final handover!",
      author: "Arun Raj",
      role: "Co-founder",
      company: "Fintech Solutions",
    },
  ] as Testimonial[],

  gallery: [
    { id: "g1", title: "Modern Work Environments", category: "Office Interiors", image: "/assets/project-office.jpg" },
    { id: "g2", title: "Elegant Living Spaces", category: "Home Interiors", image: "/assets/project-living.jpg" },
    { id: "g3", title: "Precision Modular Kitchen", category: "Home Interiors", image: "/assets/project-kitchen.jpg" },
    { id: "g4", title: "Sculptural Dining Ensembles", category: "Home Furniture", image: "/assets/project-dining.jpg" },
    { id: "g5", title: "Master Bedroom & Suite", category: "Home Interiors", image: "/assets/project-bedroom.jpg" },
    { id: "g6", title: "Bespoke Workspace Benching", category: "Office Furniture", image: "/assets/project-retail.jpg" },
  ],

  faqs: [
    {
      question: "What makes JM Interiors different from other architecture companies in Bangalore?",
      answer: "We collaborate with top architecture companies in Bangalore, ensuring custom, innovative solutions, timely delivery, and exceptional value with our in-house craftsmanship.",
    },
    {
      question: "How does the process work with your architecture firms in Bangalore?",
      answer: "We begin with a site assessment free of charge and then move on to co-develop the design concepts and do detailed costings. Then we proceed with turnkey execution all the way up to handover.",
    },
    {
      question: "Are your designs oriented toward the residential and commercial?",
      answer: "Yes. Our Bangalore-based architects and interior designers excel in them all — from majestically luxurious homes to internationally acclaimed office designs.",
    },
    {
      question: "Are your architectural solutions flexible enough for startups and enterprises?",
      answer: "Absolutely, as a firm in Bangalore we customize every solution, be it for a startup or an MNC.",
    },
    {
      question: "What sort of after-sale services do you provide?",
      answer: "We provide complete support and maintenance facilities and are known to stand by a reputation as one of the most professional architecture organizations in Bangalore.",
    },
  ] as FAQItem[],
};


// Backward-compatible alias for consultation & calculator
export const BRAND_INFO = {
  name: CLIENT_DATA.fullName,
  shortName: CLIENT_DATA.brandName,
  tagline: CLIENT_DATA.tagline,
  phone: CLIENT_DATA.contact.phone,
  rawPhone: CLIENT_DATA.contact.rawPhone,
  whatsapp: CLIENT_DATA.contact.whatsapp,
  email: CLIENT_DATA.contact.email,
  address: CLIENT_DATA.contact.address,
  googleMapsUrl: CLIENT_DATA.contact.googleMapsUrl,
};
