// =============================================================================
// LawnPress — Site Configuration
// =============================================================================
// Edit this file to customize every aspect of the site. Change text, colors,
// contact info, services, testimonials — everything flows from here.
// =============================================================================

export const config = {
  // ─── Company Info ───────────────────────────────────────────────────────────
  company: {
    name: "LawnPress",
    tagline: "Beautiful Outdoor Spaces Start Here",
    phone: "(555) 123-4567",
    email: "info@lawnpress.com",
    address: "123 Main Street, Anytown, USA",
    hours: {
      weekdays: "Mon–Fri: 7am – 6pm",
      saturday: "Sat: 8am – 4pm",
      sunday: "Closed",
    },
  },

  // ─── Brand Colors (Tailwind v4 custom colors) ──────────────────────────────
  colors: {
    primary: "#2E7D32",
    accent: "#43A047",
    light: "#F5F5F5",
    dark: "#333333",
  },

  // ─── Navigation ─────────────────────────────────────────────────────────────
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Book Estimate", href: "/book-estimate" },
      { label: "Contact", href: "/contact" },
    ],
  },

  // ─── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook: "https://facebook.com/lawnpress",
    instagram: "https://instagram.com/lawnpress",
    twitter: "https://twitter.com/lawnpress",
    yelp: "https://yelp.com/lawnpress",
  },

  // ─── Hero Section ───────────────────────────────────────────────────────────
  hero: {
    headline: "Beautiful Outdoor Spaces Start Here",
    subtitle:
      "Transform your yard into a stunning landscape you'll love coming home to. From lawn maintenance to complete design, we bring your outdoor vision to life.",
    ctaText: "Request a Free Estimate",
    ctaLink: "/book-estimate",
  },

  // ─── Feature Cards ──────────────────────────────────────────────────────────
  features: [
    {
      title: "Quality Work",
      description:
        "Every project, big or small, gets our full attention and commitment to excellence. We use quality materials and proven techniques that last.",
      icon: "star",
    },
    {
      title: "Reliable Service",
      description:
        "We show up on time and get the job done right. Our team is fully insured and dedicated to making your experience stress-free.",
      icon: "shield",
    },
    {
      title: "Free Estimates",
      description:
        "Not sure what your project will cost? We'll come out, assess the work, and give you a straightforward, no-obligation quote.",
      icon: "check",
    },
  ],

  // ─── Services ───────────────────────────────────────────────────────────────
  services: [
    {
      title: "Landscape Design",
      description:
        "From lush flower beds to complete yard makeovers, our design team works with you to create an outdoor space that reflects your style and fits your lifestyle.",
      icon: "leaf",
    },
    {
      title: "Lawn Maintenance",
      description:
        "Keep your lawn looking its best with regular mowing, edging, trimming, and blowing. Weekly or bi-weekly visits tailored to your schedule.",
      icon: "grass",
    },
    {
      title: "Mulching",
      description:
        "Fresh mulch adds a clean, finished look to any landscape while helping retain moisture and suppress weeds. We offer a variety of colors and materials.",
      icon: "spa",
    },
    {
      title: "Shrub & Tree Care",
      description:
        "Pruning, shaping, and health care for your shrubs and trees. Proper trimming keeps them looking great and encourages strong, healthy growth.",
      icon: "park",
    },
    {
      title: "Paver Patios",
      description:
        "Create the perfect outdoor living space with a custom paver patio, walkway, or driveway. Durable, beautiful, and designed to complement your home.",
      icon: "foundation",
    },
    {
      title: "Seasonal Cleanup",
      description:
        "Spring and fall cleanup services to keep your yard tidy year-round. Leaf removal, debris clearing, bed prep, and planting for the seasons ahead.",
      icon: "cleaning",
    },
  ],

  // ─── About Section ──────────────────────────────────────────────────────────
  about: {
    story: [
      "At LawnPress, we believe your yard should be a place of pride and relaxation. What started as a simple passion for landscaping has grown into a full-service company dedicated to helping homeowners create beautiful outdoor spaces.",
      "Our team brings together years of hands-on experience, creative design sense, and a genuine love for working outdoors. We treat every lawn, garden, and patio as if it were our own — with care, attention to detail, and a commitment to doing the job right.",
    ],
    mission:
      "Our mission is simple: help homeowners fall in love with their yards again. We do that by providing honest, reliable landscaping services that enhance the beauty and value of every property we touch.",
    whyChoose: [
      "Personalized approach — we listen to what you want and bring your vision to life",
      "Reliable and punctual — we respect your time and your property",
      "Quality materials and workmanship on every project",
      "Friendly, professional team you can trust in your yard",
      "Clear communication and transparent pricing — no surprises",
    ],
  },

  // ─── Testimonials ───────────────────────────────────────────────────────────
  testimonials: [
    {
      name: "Sarah M.",
      text: "LawnPress transformed my overgrown backyard into a beautiful outdoor living space. The team was professional, creative, and a pleasure to work with from start to finish.",
    },
    {
      name: "Tom R.",
      text: "I've been using LawnPress for regular lawn maintenance for over a year now. They're always on time, thorough, and my yard has never looked better. Highly recommend!",
    },
    {
      name: "Jennifer L.",
      text: "We hired LawnPress for a complete landscape redesign and couldn't be happier. They listened to what we wanted and delivered beyond our expectations. Worth every penny.",
    },
  ],

  // ─── Contact Page ───────────────────────────────────────────────────────────
  contact: {
    formTitle: "Get in Touch",
    formDescription:
      "Have a question or want to learn more about our services? Send us a message and we'll get back to you promptly.",
  },

  // ─── Book an Estimate Page ──────────────────────────────────────────────────
  estimate: {
    title: "Request a Free Estimate",
    description:
      "Ready to get started? Fill out the form below and one of our landscaping specialists will reach out to schedule a convenient time to visit your property.",
    serviceOptions: [
      "Landscape Design",
      "Lawn Maintenance",
      "Mulching",
      "Shrub & Tree Care",
      "Paver Patios",
      "Seasonal Cleanup",
      "Other",
    ],
  },

  // ─── SEO ────────────────────────────────────────────────────────────────────
  seo: {
    siteUrl: "https://lawnpress.com",
    siteName: "LawnPress | Professional Landscaping Services",
    defaultDescription:
      "LawnPress offers professional landscaping services including landscape design, lawn maintenance, mulching, tree care, paver patios, and seasonal cleanup. Free estimates available.",
    ogImage: "/og-image.jpg",
    pages: {
      home: {
        title: "LawnPress | Professional Landscaping Services",
        description:
          "Transform your yard into a beautiful outdoor space. LawnPress offers professional landscaping, lawn maintenance, and design services with free estimates.",
      },
      services: {
        title: "Our Services | LawnPress Landscaping",
        description:
          "Explore our full range of landscaping services: landscape design, lawn maintenance, mulching, shrub & tree care, paver patios, and seasonal cleanup.",
      },
      about: {
        title: "About Us | LawnPress Landscaping",
        description:
          "Learn about LawnPress and our commitment to helping homeowners create beautiful outdoor spaces through reliable, quality landscaping services.",
      },
      bookEstimate: {
        title: "Request a Free Estimate | LawnPress",
        description:
          "Ready to transform your yard? Request a free, no-obligation estimate from LawnPress. We'll visit your property and provide a straightforward quote.",
      },
      contact: {
        title: "Contact Us | LawnPress Landscaping",
        description:
          "Get in touch with LawnPress. Call, email, or visit us to discuss your landscaping needs. We're here to help you create the outdoor space you've always wanted.",
      },
    },
  },
} as const;

export type Config = typeof config;