export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  positioning: string;
  address: {
    street: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress: string;
  };
  contact: {
    phones: string[];
    whatsapp: string;
    hours: string;
  };
  navigation: NavItem[];
  socials?: { platform: string; url: string }[];
};

export type CTA = {
  label: string;
  href?: string;
  action?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
};

export type HeroData = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  visualImage?: string;
};

export type Highlight = {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
};

export type AboutPreviewData = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  cta: CTA;
  founderHighlight: {
    name: string;
    title: string;
    experience: string;
  };
  image?: string;
};

export type WhyFeature = {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName?: string;
};

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type HomeData = {
  hero: HeroData;
  highlights: Highlight[];
  about: AboutPreviewData;
  whyCognizant: {
    eyebrow: string;
    title: string;
    description: string;
    features: WhyFeature[];
    cta: CTA;
  };
  winningProcess: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStep[];
    cta: CTA;
  };
  contactCta: {
    title: string;
    description: string;
    address: string;
    phones: string[];
    primaryCta: CTA;
    secondaryCta: CTA;
  };
};
