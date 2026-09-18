import { HomeData } from '../types/site';

export const homeData: HomeData = {
  hero: {
    eyebrow: "COGNIZANT INSTITUTE FOR NEET & JEE",
    title: "Focused Preparation.\nPurposeful Mentorship.\nA Stronger Academic Journey.",
    description: "Cognizant Institute combines Intermediate board education with structured preparation for NEET and JEE, empowering aspirants in Anantapur with conceptual clarity and academic discipline.",
    primaryCta: {
      label: "Explore Programs",
      href: "/programs",
      variant: "primary"
    },
    secondaryCta: {
      label: "About Cognizant",
      href: "/about",
      variant: "secondary"
    },
    visualImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
  },
  highlights: [
    {
      id: "founded",
      value: "2022",
      label: "Founded in Anantapur",
      sublabel: "Rayalaseema Region"
    },
    {
      id: "experience",
      value: "25+",
      label: "Years Academic Experience",
      sublabel: "Mentors & Educators"
    },
    {
      id: "neet",
      value: "NEET",
      label: "Focused Preparation",
      sublabel: "Medical Pathway"
    },
    {
      id: "jee",
      value: "JEE",
      label: "Focused Preparation",
      sublabel: "Engineering Pathway"
    }
  ],
  about: {
    eyebrow: "ABOUT COGNIZANT",
    title: "Building a focused academic environment for NEET & JEE aspirants.",
    paragraphs: [
      "COGNIZANT was founded in 2022 by Mr. S V Ratnakar Prasad, an acclaimed IIT mathematics professor, mentor and coach, bringing together seasoned academic administrators and senior faculty.",
      "With 25+ years of cumulative academic experience, Cognizant strives to provide top-notch educational services, enhance problem-solving IQ, and guide local aspirants toward national competitive excellence."
    ],
    cta: {
      label: "Discover Cognizant",
      href: "/about"
    },
    founderHighlight: {
      name: "Sri. S V Ratnakar Prasad",
      title: "Founder Chairman & Senior Mathematics Educator",
      experience: "Acclaimed IIT Mathematics Mentor with 25+ years experience"
    },
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
  },
  whyCognizant: {
    eyebrow: "WHY COGNIZANT",
    title: "A structured approach to academic preparation.",
    description: "Built around five core institutional pillars designed for consistent competitive readiness.",
    features: [
      {
        id: "best-faculty",
        number: "01",
        title: "Best Faculty",
        description: "Learn directly from senior subject heads with proven track records in IIT-JEE and NEET coaching.",
        iconName: "Users"
      },
      {
        id: "methodology",
        number: "02",
        title: "Pattern-Proof Teaching Methodology",
        description: "Focus on deep conceptual fundamentals to solve complex numerical questions across evolving exam patterns.",
        iconName: "Lightbulb"
      },
      {
        id: "study-material",
        number: "03",
        title: "Study Material",
        description: "Curated problem sheets, graded assignment booklets, and targeted question archives.",
        iconName: "BookOpen"
      },
      {
        id: "infrastructure",
        number: "04",
        title: "Enabling Infrastructure",
        description: "Acoustically balanced lecture halls, quiet reference libraries, and distraction-free study spaces.",
        iconName: "Building2"
      },
      {
        id: "counselling",
        number: "05",
        title: "One-to-One Counselling",
        description: "Personalized academic guidance, regular performance tracking, and continuous student motivation.",
        iconName: "HeartHandshake"
      }
    ],
    cta: {
      label: "Explore Why Cognizant",
      href: "/why-cognizant"
    }
  },
  winningProcess: {
    eyebrow: "OUR METHODOLOGY",
    title: "Our Winning Process",
    description: "A sequential 3-step development pathway for competitive readiness.",
    steps: [
      {
        id: "iq-improvement",
        number: "01",
        title: "Improvement of IQ Level",
        description: "Developing analytical clarity, mathematical reasoning, and logical problem-solving skills."
      },
      {
        id: "confidence-enhancing",
        number: "02",
        title: "Enhancing Confidence",
        description: "Building examination tempo, error minimisation, and self-belief through structured daily testing."
      },
      {
        id: "exam-readiness",
        number: "03",
        title: "Ability to Face Competitive Exams",
        description: "Mastering time management and temperament required for full-length NEET and JEE examinations."
      }
    ],
    cta: {
      label: "Learn About Our Approach",
      href: "/why-cognizant#methodology"
    }
  },
  contactCta: {
    title: "Connect with Cognizant",
    description: "Visit our campus at Ramnagar 80 Feet Road or speak directly with our admissions desk to learn about program admissions.",
    address: "Ramnagar 80 Feet Road, Opp. to Ayyappa Swamy Temple, Anantapur, Andhra Pradesh",
    phones: ["8096651111", "8096671111"],
    primaryCta: {
      label: "Get Directions",
      href: "https://maps.google.com/?q=Ramnagar+80+Feet+Road+Ayyappaswamy+Temple+Anantapur"
    },
    secondaryCta: {
      label: "Contact Us",
      href: "/contact"
    }
  }
};
