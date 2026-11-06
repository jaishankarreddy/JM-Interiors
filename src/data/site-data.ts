export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Modular Kitchen" | "Custom Furniture";
  location: string;
  area: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  highlights: string[];
  badge: string;
}

export const BRAND_INFO = {
  name: "J M Interior And Decorators",
  shortName: "J&M Interiors",
  tagline: "Architecture, Turnkey Interiors & Bespoke Furniture in Bengaluru",
  subheading: "Crafting workspaces that inspire daily brilliance and luxury residences tailored to modern living.",
  phone: "+91 9035 672 941",
  rawPhone: "9035672941",
  whatsapp: "919035672941",
  email: "jandminteriors2000@gmail.com",
  address: "#2, AECS Layout B Block, Chikka Begur, Bengaluru, Karnataka 560068",
  city: "Bengaluru, Karnataka",
  googleMapsUrl: "https://maps.google.com/?q=AECS+layout+B+block+Chikka+begur+Bengaluru+560068",
  stats: [
    { value: 10, suffix: "+", label: "Years of Design & Craftsmanship" },
    { value: 150, suffix: "+", label: "Turnkey Projects Handed Over" },
    { value: 45, suffix: " Days", label: "Guaranteed Modular Delivery" },
    { value: 10, suffix: " Yrs", label: "Comprehensive Material Warranty" },
  ],
};

export const SERVICES: Service[] = [
  {
    id: "office-interiors",
    title: "Corporate & Office Interiors",
    shortDesc: "High-performance workspaces designed for collaboration, acoustic comfort, and executive prestige.",
    description: "From agile startup pods to multinational enterprise headquarters across Bengaluru, we design human-centric office layouts that boost focus and reflect corporate identity.",
    image: "/assets/project-office.jpg",
    badge: "Commercial Specialists",
    highlights: [
      "Ergonomic workstation layouts & acoustic optimization",
      "Executive cabins, boardrooms & collaborative town-halls",
      "HVAC, structured cabling, smart lighting & access control",
      "Zero business downtime through scheduled agile execution",
    ],
  },
  {
    id: "home-interiors",
    title: "Luxury Residential Interiors",
    shortDesc: "Bespoke residences, penthouses, and private villas crafted with timeless natural materials.",
    description: "Every home is conceived around your family's daily rhythms. We eliminate cookie-cutter modular compromises with tailored spatial architecture, statement lighting, and custom joinery.",
    image: "/assets/project-living.jpg",
    badge: "Villas & Penthouses",
    highlights: [
      "Custom living room feature walls & entertainment credenzas",
      "Restful master bedroom suites with concealed dressing rooms",
      "Biophilic indoor courtyards & integrated ambient lighting",
      "Fine materials: Italian marble, fluted oak, cane & brass accents",
    ],
  },
  {
    id: "modular-kitchens",
    title: "Precision Modular Kitchens",
    shortDesc: "German-engineered hardware meets Indian culinary ergonomics for seamless cooking experiences.",
    description: "Engineered with anti-scratch, moisture-resistant BWR marine ply and Blum/Hettich soft-close mechanisms. Designed specifically to handle rigorous Indian culinary routines effortlessly.",
    image: "/assets/project-kitchen.jpg",
    badge: "10-Year Hardware Warranty",
    highlights: [
      "Quartz, sintered stone & granite countertops with seamless waterfalls",
      "Anti-fingerprint matte acrylic & fluted veneer finishes",
      "Pantry pull-outs, corner carousels & motorized overhead lifts",
      "Integrated chimney ducting and spice organization systems",
    ],
  },
  {
    id: "workspace-furniture",
    title: "Commercial Workspace Furniture",
    shortDesc: "Factory-crafted modular desks, acoustic partitions, and executive boardroom centerpieces.",
    description: "Manufactured in our Bangalore facility to ensure commercial-grade durability, BIFMA-standard ergonomics, and factory-direct pricing without distributor markups.",
    image: "/assets/project-retail.jpg",
    badge: "Factory Direct",
    highlights: [
      "Heavy-duty modular benching with built-in power race ways",
      "Solid teak and brass executive desks with concealed wire management",
      "High-density foam ergonomic task chairs with lumbar adjustability",
      "Modular breakout booths and acoustic phone pods",
    ],
  },
  {
    id: "custom-furniture",
    title: "Bespoke Home Furniture",
    shortDesc: "Handcrafted wardrobes, dining tables, and accent pieces built to last generations.",
    description: "Our in-house master carpenters bring custom visions to life. From floor-to-ceiling floor wardrobes to hand-finished dining ensembles, every millimeter is tuned to your space.",
    image: "/assets/project-dining.jpg",
    badge: "Master Joinery",
    highlights: [
      "Floor-to-ceiling wardrobes with sensor lighting & fluted glass",
      "Bespoke solid wood dining tables & upholstered seating",
      "Cane & veneer shoe credenzas, consoles, and bar units",
      "Eco-friendly low-VOC finishes and sustainable timber",
    ],
  },
  {
    id: "turnkey-renovation",
    title: "Turnkey Civil & Architectural Fitouts",
    shortDesc: "End-to-end site management with dedicated site supervisors and daily digital progress tracking.",
    description: "One single point of contact from demolition and masonry to false ceilings, electrical rewiring, luxury painting, and final white-glove deep cleaning.",
    image: "/assets/studio-materials.jpg",
    badge: "Single Contract Solution",
    highlights: [
      "Complete civil demolition, plastering & gypsum false ceilings",
      "Concealed electrical rewiring, plumbing & automation prep",
      "Royal luxury paints, textured lime plasters & microcement",
      "Daily milestone photo & video updates via dedicated project manager",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "indiranagar-penthouse",
    title: "The Alabaster Penthouse",
    category: "Residential",
    location: "Indiranagar, Bengaluru",
    area: "3,800 sq.ft",
    year: "2025",
    image: "/assets/project-living.jpg",
    description: "A serene residence marrying warm oak wood, brushed champagne brass accents, and textured plaster finishes. Complete turnkey execution including civil restructuring, custom lighting, and bespoke furniture.",
    tags: ["Full-Home Interior", "Turnkey", "Italian Marble", "Warm Minimalist"],
    features: [
      "Curved ceiling niches with dim-to-warm indirect lighting",
      "Bespoke cane and solid ash wood media credenza",
      "Concealed air-conditioning and motorized linen drapery",
      "Open-plan living flowing into an all-weather terrace garden",
    ],
  },
  {
    id: "tech-hq-bellandur",
    title: "Vanguard Global Hub",
    category: "Commercial",
    location: "Outer Ring Road, Bengaluru",
    area: "14,500 sq.ft",
    year: "2024",
    image: "/assets/project-office.jpg",
    description: "Next-generation corporate workspace for 180 engineers and executive leadership. Featuring acoustic timber slat ceilings, private call pods, and flexible sprint breakout corners.",
    tags: ["Commercial Fitout", "Ergonomic Furniture", "Acoustics", "Turnkey"],
    features: [
      "BIFMA-certified motorized sit-stand workstations",
      "Sound-damped 16-seater conference room with video matrix",
      "Bespoke cafeteria with terrazzo island counters",
      "Delivered 12 days ahead of corporate move-in deadline",
    ],
  },
  {
    id: "sarjapur-villa-kitchen",
    title: "The Fluted Oak Culinary Suite",
    category: "Modular Kitchen",
    location: "Sarjapur Road, Bengaluru",
    area: "520 sq.ft",
    year: "2025",
    image: "/assets/project-kitchen.jpg",
    description: "A masterclass in modern culinary architecture. Features natural fluted oak veneer shutters, seamless Dekton porcelain countertops, and a concealed secondary spice prep kitchen.",
    tags: ["Modular Kitchen", "Blum Hardware", "Dekton Countertop", "Pantry"],
    features: [
      "Blum Aventos motorized bi-fold overhead lift systems",
      "Anti-fingerprint thermal scratch-resistant base cabinets",
      "Integrated 4-tier pullout spice and condiment larders",
      "Under-cabinet sensor LED strips with 95+ CRI warm illumination",
    ],
  },
  {
    id: "koramangala-master-suite",
    title: "Sanctuary Master Bedroom & Dressing",
    category: "Residential",
    location: "Koramangala 4th Block, Bengaluru",
    area: "1,200 sq.ft",
    year: "2024",
    image: "/assets/project-bedroom.jpg",
    description: "An oasis of calm featuring upholstered boucle headboard wall, acoustic fabric panels, and a walk-through wardrobe with bronze tinted fluted glass and sensor lighting.",
    tags: ["Master Suite", "Walk-In Closet", "Custom Lighting", "Bespoke"],
    features: [
      "Custom floor-to-ceiling wardrobe with internal leatherette organizers",
      "Integrated bedside floating drawers with wireless charging pads",
      "Acoustically treated window drapery for 35dB noise reduction",
      "Floating bed frame with soft perimeter floor illumination",
    ],
  },
  {
    id: "lavelle-dining-residence",
    title: "The Sculptural Dining Ensemble",
    category: "Custom Furniture",
    location: "Lavelle Road, Bengaluru",
    area: "2,400 sq.ft",
    year: "2025",
    image: "/assets/project-dining.jpg",
    description: "Commissioned custom woodwork featuring a 10-seater live-edge solid walnut dining table, sculpted timber dining chairs, and a floating bar credenza in brushed brass and fluted glass.",
    tags: ["Custom Woodwork", "Solid Walnut", "Artisan Furniture", "Dining"],
    features: [
      "Hand-finished live edge sustainably sourced Indian walnut slab",
      "Ergonomically contoured dining chairs upholstered in stain-resistant linen",
      "Concealed wine chiller niche and brass stemware holders",
      "Treated with food-safe plant-based hardwax oil",
    ],
  },
  {
    id: "whitefield-boutique-retail",
    title: "Aura Haute Couture Flagship",
    category: "Commercial",
    location: "Whitefield, Bengaluru",
    area: "2,900 sq.ft",
    year: "2024",
    image: "/assets/project-retail.jpg",
    description: "A luxury fashion atelier featuring microcement wall finishes, arched display niches, custom brass clothing racks, and theatrical spotlighting for couture collections.",
    tags: ["Retail Space", "Microcement", "Arched Niches", "Atmospheric Lighting"],
    features: [
      "Continuous microcement floor and wall plaster for an organic tactile vibe",
      "Custom laser-cut brushed brass hanging fixtures and accessory towers",
      "VIP bridal trial suites with 360-degree vanity lighting",
      "Completed in 38 days with zero commercial retail defects",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Site Consultation & Space Audit",
    duration: "Day 1 – 3",
    description: "Our principal architect and design engineers visit your site in Bengaluru for a thorough structural assessment, laser measurements, lifestyle brief, and acoustic/sunlight analysis. Completely free with zero commitment.",
  },
  {
    step: "02",
    title: "3D Photorealistic VR Architectural Renders",
    duration: "Day 4 – 10",
    description: "We don't expect you to imagine 2D blueprints. You receive immersive 3D photorealistic architectural renders and VR walkthroughs showing exact lighting, material colors, furniture placement, and spatial flow.",
  },
  {
    step: "03",
    title: "Material Moodboarding & Transparent Costing",
    duration: "Day 11 – 15",
    description: "Touch and feel physical samples of veneers, Italian marbles, quartz, laminates, and hardware at our studio. You receive an itemized, transparent BOQ (Bill of Quantities) with guaranteed no hidden post-approval extras.",
  },
  {
    step: "04",
    title: "Turnkey Precision Execution & 45-Day Handover",
    duration: "Day 16 – 45",
    description: "Our dedicated on-site team executes with German laser levels and weekly digital milestones. We deliver white-glove deep cleaning, provide your 10-Year Warranty certification, and hand over the keys on time.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Rajesh & Ananya Menon",
    role: "Homeowners, 4 BHK Villa",
    location: "Sarjapur Road, Bengaluru",
    content: "JM Interiors transformed our bare-shell villa into an absolute dream. What surprised us most was their execution discipline — unlike horror stories we heard about other contractors, J&M delivered exactly on the 45th day with immaculate finish quality.",
    rating: 5,
    highlight: "Delivered on exact schedule",
  },
  {
    name: "Vikramaditya Rao",
    role: "VP Operations, CloudScale Software",
    location: "Outer Ring Road, Bengaluru",
    content: "We hired J M Interior And Decorators for our 12,000 sq ft office fitout. Their capability in handling civil, acoustic ceiling baffles, network cabling, and custom modular desks under one single contract saved us months of coordinator headaches.",
    rating: 5,
    highlight: "Turnkey office solution",
  },
  {
    name: "Dr. Shalini Hegde",
    role: "Resident, Prestige Acropolis",
    location: "Koramangala, Bengaluru",
    content: "Their attention to woodwork and kitchen ergonomics is unmatched. The fluted shutters, the soft-close drawers, and the lighting details make the kitchen the most loved spot in our home. Truly Bangalore's hidden gem.",
    rating: 5,
    highlight: "Exceptional joinery & modular craft",
  },
];

export const FAQS = [
  {
    q: "What makes J&M Interiors different from other architecture & interior firms in Bangalore?",
    a: "Unlike design-only consultants who leave you at the mercy of untrusted freelance carpenters, or generic modular aggregators who sell rigid catalog boxes, J&M Interiors operates as a true turnkey studio. We own our in-house furniture manufacturing facility, maintain direct artisan carpenter crews, and assign dedicated project engineers to your site. This gives you factory-direct pricing, 100% custom flexibility, and milestone-backed delivery guarantees.",
  },
  {
    q: "How does your 45-day delivery guarantee work?",
    a: "Our standardized 45-day modular installation timeline kicks in once 3D designs and material selections are finalized. Because we fabricate carcasses, shutters, and hardware in our modern factory while civil prep finishes on site, on-site installation is rapid, clean, and minimizes dust and disruption.",
  },
  {
    q: "Do you handle both commercial offices and residential homes?",
    a: "Yes. J M Interior And Decorators has specialized division teams for both. Our commercial team focuses on acoustics, high-density power raceways, conference audio-visuals, and rapid project turnaround. Our residential team focuses on bespoke luxury aesthetics, custom storage, biophilic lighting, and premium Italian and wood finishes.",
  },
  {
    q: "Are your architectural solutions flexible for startups and emerging businesses?",
    a: "Absolutely. We offer scalable commercial fitout modules that allow growing companies to expand workstation capacity effortlessly as their headcount grows without tearing down infrastructure.",
  },
  {
    q: "What warranty and after-sales service do you provide?",
    a: "We provide an industry-leading 10-Year Warranty on all modular woodwork and hardware components against borer, termite, and delamination. Additionally, our dedicated customer service team provides rapid on-site maintenance within 48 hours of any request.",
  },
  {
    q: "Where is your office located and which areas in Bengaluru do you serve?",
    a: "Our studio is located at #2, AECS Layout B Block, Chikka Begur, Bengaluru - 560068. We undertake projects across Bengaluru including Begur, Bannerghatta Road, Koramangala, Indiranagar, Whitefield, HSR Layout, Sarjapur, JP Nagar, Jayanagar, and Electronic City.",
  },
];
