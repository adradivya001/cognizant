import { SiteConfig } from '../types/site';

export const siteConfig: SiteConfig = {
  name: "Cognizant Institute for NEET & JEE",
  shortName: "Cognizant",
  tagline: "Focused Preparation. Purposeful Mentorship. A Stronger Academic Journey.",
  positioning: "Integrated Intermediate Education + JEE & NEET Competitive Exam Preparation",
  address: {
    street: "Ramnagar 80 Feet Road",
    landmark: "Opp. to Ayyappa Swamy Temple",
    city: "Anantapur",
    state: "Andhra Pradesh",
    pincode: "515001",
    fullAddress: "Ramnagar 80 Feet Road, Opp. to Ayyappa Swamy Temple, Anantapur, Andhra Pradesh"
  },
  contact: {
    phones: ["8096651111", "8096671111"],
    whatsapp: "8096651111",
    hours: "Mon - Sat: 7:30 AM - 7:30 PM"
  },
  navigation: [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About Cognizant",
      href: "/about",
      children: [
        { label: "Our Story", href: "/about#story", description: "Learn about Cognizant's foundation in 2022" },
        { label: "Founder's Vision", href: "/about#founder", description: "Message from Mr. S V Ratnakar Prasad" },
        { label: "Mission & Purpose", href: "/about#mission", description: "Core academic philosophy and principles" }
      ]
    },
    {
      label: "Programs",
      href: "/programs",
      children: [
        { label: "M² — Metamorph", href: "/programs/m2", description: "Two-year integrated Intermediate + JEE/NEET program" },
        { label: "E² — Eagle Eye", href: "/programs/e2", description: "Specialized academic development program" },
        { label: "PV — Pyrric Victors", href: "/programs/pv", description: "Long-term competitive exam preparation" }
      ]
    },
    {
      label: "Why Cognizant",
      href: "/why-cognizant",
      children: [
        { label: "Faculty Excellence", href: "/why-cognizant#faculty", description: "Mentorship by top subject educators" },
        { label: "Pattern-Proof Methodology", href: "/why-cognizant#methodology", description: "Conceptual clarity and problem solving" },
        { label: "Academic Support", href: "/why-cognizant#support", description: "One-to-One counseling and doubt solving" }
      ]
    },
    {
      label: "Our Gurus",
      href: "/gurus"
    },
    {
      label: "Updates",
      href: "/updates"
    },
    {
      label: "Career",
      href: "/career"
    }
  ]
};
